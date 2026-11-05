// Submits the pages that changed in a production deploy to IndexNow (Bing, Yandex, Seznam, Naver and others).
// "Changed" = new in the sitemap, or a newer <lastmod> than the sitemap that was live before this build.
// Never fails the build: indexing is a nice-to-have, the deploy is not.
import fs from 'node:fs'
import path from 'node:path'

const SITE = 'https://asyncapi.pavelon.dev'
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const STATE = '.netlify/indexnow-previous.json'

const locs = (xml) => [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, url]) => ({
  loc: url.match(/<loc>([^<]+)<\/loc>/)?.[1],
  lastmod: url.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? '',
}))
const sitemapsIn = (xml) => [...xml.matchAll(/<sitemap>[\s\S]*?<loc>([^<]+)<\/loc>/g)].map(([, loc]) => loc)

/** url -> lastmod, following a sitemap index one level down. */
async function read(load, index) {
  const xml = await load(index)
  const children = sitemapsIn(xml)
  const entries = children.length ? (await Promise.all(children.map(load))).flatMap(locs) : locs(xml)
  return new Map(entries.filter((e) => e.loc).map((e) => [e.loc, e.lastmod]))
}

const fetchText = async (url) => {
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`)
  return res.text()
}

export const onPreBuild = async () => {
  if (process.env.CONTEXT !== 'production') return
  try {
    const live = await read(fetchText, `${SITE}/sitemap.xml`)
    fs.mkdirSync(path.dirname(STATE), { recursive: true })
    fs.writeFileSync(STATE, JSON.stringify(Object.fromEntries(live)))
    console.log(`IndexNow: live sitemap has ${live.size} URLs`)
  } catch (e) {
    console.log(`IndexNow: could not read the live sitemap, every URL counts as new (${e.message})`)
  }
}

export const onSuccess = async ({ constants, inputs }) => {
  if (process.env.CONTEXT !== 'production') {
    console.log('IndexNow: not a production deploy, nothing submitted')
    return
  }
  try {
    const dist = constants.PUBLISH_DIR
    const local = (url) => fs.promises.readFile(path.join(dist, new URL(url).pathname), 'utf8')
    const next = await read(local, `${SITE}/sitemap-index.xml`)
    const previous = fs.existsSync(STATE) ? new Map(Object.entries(JSON.parse(fs.readFileSync(STATE, 'utf8')))) : new Map()
    const changed = [...next].filter(([loc, lastmod]) => !previous.has(loc) || previous.get(loc) !== lastmod).map(([loc]) => loc)

    if (!changed.length) {
      console.log('IndexNow: no changed URLs')
      return
    }
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: new URL(SITE).host,
        key: inputs.key,
        keyLocation: `${SITE}/${inputs.key}.txt`,
        urlList: changed.slice(0, 10000),
      }),
    })
    console.log(`IndexNow: submitted ${changed.length} URLs, HTTP ${res.status}`)
  } catch (e) {
    console.log(`IndexNow: submission skipped (${e.message})`)
  }
}

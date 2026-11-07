// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver and others) which pages changed. Run it by hand after a
// production deploy; see docs-internal/indexnow.md.
//
// It reads the sitemap of the LIVE site, so only deployed pages are sent, and compares each page's lastmod with
// indexnow.json (what was sent before). Without --send it only prints what it would send.
//
//   npm run indexnow                      list pages changed since the last submission
//   npm run indexnow -- --send            send them and update indexnow.json (commit it afterwards)
//   npm run indexnow -- --all [--send]    every page in the sitemap, e.g. for the first launch
//   npm run indexnow -- --send <url>...   only these URLs
//
// INDEXNOW_SITE=http://localhost:4321 npm run indexnow   dry run against a preview (sending works only for production)
import fs from 'node:fs'
import path from 'node:path'

const PRODUCTION = 'https://asyncapi.pavelon.dev'
const SITE = (process.env.INDEXNOW_SITE ?? PRODUCTION).replace(/\/$/, '')
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const RECORD = 'indexnow.json'
const BATCH = 10000 // IndexNow accepts up to 10,000 URLs per request
const HEADERS = { 'User-Agent': 'asyncapi.pavelon.dev indexnow script' }

const args = process.argv.slice(2)
const send = args.includes('--send')
const all = args.includes('--all')
const explicit = args.filter((a) => !a.startsWith('--'))
if (send && SITE !== PRODUCTION) fail(`--send works only for ${PRODUCTION}; ${SITE} is for dry runs.`)

/** The key is the name and the content of the one `<hex>.txt` file in public/. */
function readKey() {
  const files = fs.readdirSync('public').filter((f) => /^[0-9a-f]{8,128}\.txt$/i.test(f))
  if (files.length !== 1) fail(`Expected exactly one IndexNow key file (public/<key>.txt), found ${files.length}. See docs-internal/indexnow.md.`)
  const key = files[0].replace(/\.txt$/, '')
  if (fs.readFileSync(path.join('public', files[0]), 'utf8').trim() !== key) fail(`public/${files[0]} must contain exactly "${key}".`)
  return key
}

function fail(message) {
  console.error(message)
  process.exit(1)
}

async function get(url) {
  const res = await fetch(url, { headers: HEADERS })
  if (!res.ok) fail(`GET ${url}: ${res.status} ${res.statusText}`)
  return res.text()
}

/** Every <url> of the live sitemap (index and its child sitemaps), with lastmod. */
async function liveSitemap() {
  const index = await get(`${SITE}/sitemap-index.xml`)
  const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(PRODUCTION, SITE))
  const pages = new Map()
  for (const map of maps) {
    const xml = await get(map)
    for (const [, block] of xml.matchAll(/<url>(.*?)<\/url>/gs)) {
      const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1]
      if (loc) pages.set(loc, block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? '')
    }
  }
  return pages
}

const readRecord = () => (fs.existsSync(RECORD) ? JSON.parse(fs.readFileSync(RECORD, 'utf8')) : { submitted: {} })

const RESPONSES = {
  200: 'OK: URLs received.',
  202: 'Accepted: URLs received, the key is still being validated.',
  400: 'Bad request: invalid format.',
  403: 'Forbidden: the key file was not found or does not match the key.',
  422: 'Unprocessable: a URL does not belong to the host, or the key does not match the schema.',
  429: 'Too many requests: try again later.',
}

const key = readKey()
const keyLocation = `${PRODUCTION}/${key}.txt`
const record = readRecord()
const pages = explicit.length ? null : await liveSitemap()

let urls
if (explicit.length) {
  const foreign = explicit.filter((u) => !u.startsWith(`${PRODUCTION}/`))
  if (foreign.length) fail(`Only ${PRODUCTION} URLs can be sent:\n${foreign.join('\n')}`)
  urls = explicit
} else {
  urls = [...pages].filter(([url, lastmod]) => all || record.submitted[url] !== lastmod).map(([url]) => url)
  console.log(`Live sitemap: ${pages.size} pages; ${all ? 'all of them' : `${urls.length} new or changed since the last submission`}.`)
}

if (!urls.length) {
  console.log('Nothing to send.')
  process.exit(0)
}
if (!send) {
  console.log(urls.join('\n'))
  console.log(`\nDry run. Add --send to submit these ${urls.length} URLs.`)
  process.exit(0)
}

// Engines fetch the key file from the live site; without it every submission is refused.
const live = await fetch(keyLocation, { headers: HEADERS })
if (!live.ok || (await live.text()).trim() !== key) fail(`${keyLocation} is not live or does not contain the key. Deploy first.`)

for (let i = 0; i < urls.length; i += BATCH) {
  const urlList = urls.slice(i, i + BATCH)
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { ...HEADERS, 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: new URL(PRODUCTION).host, key, keyLocation, urlList }),
  })
  console.log(`${res.status} ${RESPONSES[res.status] ?? res.statusText} (${urlList.length} URLs)`)
  if (res.status !== 200 && res.status !== 202) fail(await res.text())
}

// Remember what was sent, so the next run only sends what changed after this.
for (const url of urls) record.submitted[url] = pages?.get(url) ?? record.submitted[url] ?? new Date().toISOString()
record.submitted = Object.fromEntries(Object.entries(record.submitted).sort(([a], [b]) => a.localeCompare(b)))
fs.writeFileSync(RECORD, `${JSON.stringify(record, null, 2)}\n`)
console.log(`Updated ${RECORD}. Commit it, so the next run starts from here.`)

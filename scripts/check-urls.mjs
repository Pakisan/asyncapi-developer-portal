// Checks that URLs search engines know still work on the built site: each must be served from dist/ (200) or reach a
// served page through redirects (at most MAX_HOPS).
// Paths resolve the way Vercel does with vercel.json: cleanUrls first (/x.html and /x/index -> /x), then redirects,
// then files (/x from x.html or x/index.html), then rewrites. It also fails when a redirect would hide a page that
// exists in dist/, since on Vercel redirects win over files.
//
// Usage: node scripts/check-urls.mjs <file>...   one URL per line, CSVs (first column) or sitemap XML
import fs from 'node:fs'
import path from 'node:path'
import { compile, match } from 'path-to-regexp'

const DIST = path.resolve('dist')
const HOST = 'asyncapi.pavelon.dev'
const MAX_HOPS = 2

const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
// Vercel matches sources strictly (`/a` is not `/a/`) and case-sensitively
const vercelRule = (r) => ({ test: match(r.source, { decode: decodeURIComponent, strict: true, sensitive: true }), to: r.destination, status: r.permanent === false ? 302 : 301 })
const vercelRedirects = vercel.redirects.map(vercelRule)
const vercelRewrites = vercel.rewrites.map((r) => ({ ...vercelRule(r), status: 200 }))

// Vercel with cleanUrls: a file at its exact path (not .html), `/x` from x.html, or a directory's index.html
const isFile = (c) => fs.existsSync(c) && fs.statSync(c).isFile()
const servedOnVercel = (p) => {
  const file = path.join(DIST, decodeURIComponent(p))
  if (p.endsWith('.html')) return false
  return p.endsWith('/') ? isFile(path.join(file, 'index.html')) : [file, `${file}.html`, path.join(file, 'index.html')].some(isFile)
}

// cleanUrls redirects, applied before vercel.json redirects
const cleanUrl = (p) => {
  const m = p.match(/^(.*?)(?:\/index)?\.html$/) ?? p.match(/^(.*)\/index$/)
  return m ? { to: m[1] || '/', status: 308 } : null
}

function applyVercel(rules, p) {
  for (const r of rules) {
    const m = r.test(p)
    if (!m) continue
    // compile() can't take a whole URL, so external destinations get their parameters filled in by name
    const to = /^https?:/.test(r.to) ? r.to.replace(/:(\w+)\*?/g, (s, n) => (n in m.params ? [m.params[n]].flat().join('/') : s)) : compile(r.to, { validate: false })(m.params)
    return { to, status: r.status }
  }
  return null
}

function resolve(start) {
  const hops = []
  let p = start
  for (;;) {
    const r = cleanUrl(p) ?? applyVercel(vercelRedirects, p)
    if (!r) break
    hops.push(`${r.status} -> ${r.to}`)
    const kind = `${hops.length === 1 ? 'redirect' : `${hops.length} redirects`}`
    if (/^https?:/.test(r.to)) return { ok: new URL(r.to).host !== HOST && hops.length <= MAX_HOPS, kind, how: hops.join(' ') }
    if (hops.length > MAX_HOPS) return { ok: false, kind, how: `${hops.join(' ')} (too many redirects)` }
    p = r.to
  }
  const kind = hops.length ? `${hops.length === 1 ? 'redirect' : `${hops.length} redirects`}` : '200'
  if (servedOnVercel(p)) return { ok: true, kind, how: hops.join(' ') || '200' }
  const rw = applyVercel(vercelRewrites, p)
  if (rw && servedOnVercel(rw.to)) return { ok: true, kind: 'rewrite', how: `${hops.join(' ')} rewrite -> ${rw.to}`.trim() }
  return { ok: false, kind: '404', how: `${hops.join(' ')} 404`.trim() }
}

const urls = new Set()
for (const file of process.argv.slice(2).filter((a) => !a.startsWith('--'))) {
  const text = fs.readFileSync(file, 'utf8')
  // Search Console CSVs quote URLs and print a `+` in a path as a space and a line break
  const found = text.includes('<loc>')
    ? [...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
    : [...text.matchAll(/^(?:"([^"]*)"|([^,\n]*))/gm)].map((m) => (m[1] ?? m[2]).replace(/\s*\n/g, '+'))
  for (const raw of found) {
    const u = raw.trim()
    if (u.startsWith(`https://${HOST}/`)) urls.add(new URL(u).pathname)
  }
}

let failed = 0
const counts = {}

// Every file in dist/ must stay reachable at the URL it is served at: a redirect that matches it would hide it.
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]))
for (const file of walk(DIST)) {
  const rel = '/' + path.relative(DIST, file).split(path.sep).join('/')
  const served = rel.endsWith('/index.html') ? rel.slice(0, -'index.html'.length) : rel.endsWith('.html') ? rel.slice(0, -'.html'.length) : rel
  for (const p of [served]) {
    const r = applyVercel(vercelRedirects, p)
    if (r) {
      failed++
      console.log(`HIDDEN ${p}  redirected to ${r.to}`)
    }
  }
}
for (const p of [...urls].sort()) {
  const { ok, how, kind } = resolve(p)
  counts[kind] = (counts[kind] ?? 0) + 1
  if (!ok) {
    failed++
    console.log(`FAIL ${p}  ${how}`)
  } else if (process.env.VERBOSE) console.log(`ok   ${p}  ${how}`)
}
console.log(`${urls.size} URLs: ${Object.entries(counts).map(([k, v]) => `${v} × ${k}`).join(', ')}; ${failed} failed`)
process.exit(failed ? 1 : 0)

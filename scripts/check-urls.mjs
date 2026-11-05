// Checks that URLs search engines know still work on the built site: each must be served from dist/ (200) or reach a
// served page through exactly one redirect.
// Default: resolves paths the way Netlify does: files first (with pretty URLs), then `_redirects` top to bottom.
// --vercel: the way Vercel does with vercel.json: redirects first, then files (no clean URLs), then rewrites. It also
// fails when a redirect would hide a file that exists in dist/, since on Vercel redirects win over files.
//
// Usage: node scripts/check-urls.mjs [--vercel] <file>...   one URL per line, CSVs (first column) or sitemap XML
import fs from 'node:fs'
import path from 'node:path'
import { compile, match } from 'path-to-regexp'

const DIST = path.resolve('dist')
const HOST = 'asyncapi.pavelon.dev'

const served = (p) => {
  const file = path.join(DIST, decodeURIComponent(p))
  const candidates = p.endsWith('/') ? [path.join(file, 'index.html')] : [file, `${file}.html`, path.join(file, 'index.html')]
  return candidates.some((c) => fs.existsSync(c) && fs.statSync(c).isFile())
}

const rules = fs
  .readFileSync(path.join(DIST, '_redirects'), 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'))
  .map((l) => {
    const [from, to, status = '301'] = l.split(/\s+/)
    const names = []
    const source = from
      .replace(/\/+$/, '')
      .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
      .replace(/:(\w+)/g, (_, n) => (names.push(n), '([^/]+)'))
      .replace(/\*$/, () => (names.push('splat'), '(.*)'))
    return { re: new RegExp(`^${source}/?$`, 'i'), names, to, status: Number(status.replace('!', '')) }
  })

function redirect(p) {
  for (const r of rules) {
    const m = p.match(r.re)
    if (!m) continue
    const to = r.names.reduce((s, n, i) => s.replace(`:${n}`, m[i + 1]), r.to)
    return { to, status: r.status }
  }
  return null
}

const VERCEL = process.argv.includes('--vercel')
const vercel = JSON.parse(fs.readFileSync('vercel.json', 'utf8'))
const vercelRule = (r) => ({ test: match(r.source, { decode: decodeURIComponent }), to: r.destination, status: r.permanent === false ? 302 : 301 })
const vercelRedirects = vercel.redirects.map(vercelRule)
const vercelRewrites = vercel.rewrites.map((r) => ({ ...vercelRule(r), status: 200 }))

// Vercel without cleanUrls: a file at its exact path, or a directory's index.html with or without the slash
const servedOnVercel = (p) => {
  const file = path.join(DIST, decodeURIComponent(p))
  return [file, path.join(file, 'index.html')].some((c) => fs.existsSync(c) && fs.statSync(c).isFile())
}

function applyVercel(rules, p) {
  for (const r of rules) {
    const m = r.test(p)
    if (m) return { to: /^https?:/.test(r.to) ? r.to : compile(r.to, { validate: false })(m.params), status: r.status }
  }
  return null
}

function resolveOnVercel(p) {
  const r = applyVercel(vercelRedirects, p)
  if (r) {
    if (/^https?:/.test(r.to)) return { ok: !r.to.includes(HOST), how: `${r.status} -> ${r.to}` }
    return servedOnVercel(r.to) ? { ok: true, how: `${r.status} -> ${r.to}` } : { ok: false, how: `${r.status} -> ${r.to} (not served)` }
  }
  if (servedOnVercel(p)) return { ok: true, how: '200' }
  const rw = applyVercel(vercelRewrites, p)
  if (rw && servedOnVercel(rw.to)) return { ok: true, how: `rewrite -> ${rw.to}` }
  return { ok: false, how: '404' }
}

function resolve(p) {
  if (VERCEL) return resolveOnVercel(p)
  if (served(p)) return { ok: true, how: '200' }
  const r = redirect(p)
  if (!r) return { ok: false, how: '404' }
  if (/^https?:/.test(r.to)) return { ok: !r.to.includes(HOST), how: `${r.status} -> ${r.to}` }
  if (r.status === 200) return { ok: served(r.to), how: `rewrite -> ${r.to}` }
  return served(r.to) ? { ok: true, how: `${r.status} -> ${r.to}` } : { ok: false, how: `${r.status} -> ${r.to} (not served)` }
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

if (VERCEL) {
  // Every file in dist/ must stay reachable: a redirect that matches it would hide it.
  const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]))
  for (const file of walk(DIST)) {
    const rel = '/' + path.relative(DIST, file).split(path.sep).join('/')
    for (const p of rel.endsWith('/index.html') ? [rel, rel.slice(0, -'index.html'.length)] : [rel]) {
      const r = applyVercel(vercelRedirects, p)
      if (r) {
        failed++
        console.log(`HIDDEN ${p}  redirected to ${r.to}`)
      }
    }
  }
}
for (const p of [...urls].sort()) {
  const { ok, how } = resolve(p)
  const kind = how.split(' ')[0]
  counts[kind] = (counts[kind] ?? 0) + 1
  if (!ok) {
    failed++
    console.log(`FAIL ${p}  ${how}`)
  } else if (process.env.VERBOSE) console.log(`ok   ${p}  ${how}`)
}
console.log(`${urls.size} URLs: ${Object.entries(counts).map(([k, v]) => `${v} × ${k}`).join(', ')}; ${failed} failed`)
process.exit(failed ? 1 : 0)

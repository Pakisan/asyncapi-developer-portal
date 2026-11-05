// Checks that URLs search engines know still work on the built site: each must be served from dist/ (200) or reach a
// served page through exactly one redirect. Resolves paths the way Netlify does: files first (with pretty URLs), then
// `_redirects` top to bottom, with `:placeholders`, `*` splats and trailing slashes ignored.
//
// Usage: node scripts/check-urls.mjs <file>...   files with one URL per line, CSVs (first column) or sitemap XML
import fs from 'node:fs'
import path from 'node:path'

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

function resolve(p) {
  if (served(p)) return { ok: true, how: '200' }
  const r = redirect(p)
  if (!r) return { ok: false, how: '404' }
  if (/^https?:/.test(r.to)) return { ok: !r.to.includes(HOST), how: `${r.status} -> ${r.to}` }
  if (r.status === 200) return { ok: served(r.to), how: `rewrite -> ${r.to}` }
  return served(r.to) ? { ok: true, how: `${r.status} -> ${r.to}` } : { ok: false, how: `${r.status} -> ${r.to} (not served)` }
}

const urls = new Set()
for (const file of process.argv.slice(2)) {
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

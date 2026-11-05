// Writes vercel.json from public/_redirects (the one list of redirect rules) and the docs index pages.
// `--check` fails when vercel.json is out of date; the build runs it, so a stale config never deploys.
//
// Vercel applies redirects BEFORE looking at files (Netlify does it after), so placeholders that stand for a version
// get a pattern: `/bindings/:version/:file` must not catch `/bindings/amqp/channelBinding.json`.
import fs from 'node:fs'
import path from 'node:path'
import { indexIds } from '../integrations/index-urls.mjs'

const VERSION = '\\d+\\.\\d+\\.\\d+'
const CSP =
  "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; font-src 'self'; frame-src https://github.com https://plugins.jetbrains.com; frame-ancestors 'none'; form-action 'self'; base-uri 'self'; object-src 'none'"

/** Netlify source -> path-to-regexp source understood by Vercel. */
function source(from) {
  return from
    .replace(/\.\*$/, '\\.(.*)') // `/jetbrains-plugin.*`: a literal dot, then anything
    .replace(/\.$/, '\\.') // `/schemas.`: a literal trailing dot
    .replace(/:version\b/g, `:version(${VERSION})`)
    .replace(/\/\*$/, '/:splat*')
}

function redirects() {
  const lines = fs.readFileSync('public/_redirects', 'utf8').split('\n').map((l) => l.trim())
  const out = { redirects: [], rewrites: [] }
  for (const line of lines) {
    if (!line || line.startsWith('#')) continue
    const [from, to, status = '301'] = line.split(/\s+/)
    if (status === '200') out.rewrites.push({ source: from, destination: to })
    else {
      // `/x/:file -> /x/:file.html` adds the extension, so `:file` must be a bare page name, never `channel.html`
      const src = to.endsWith(':file.html') ? source(from).replace(/:file$/, ':file([^/.]+)') : source(from)
      out.redirects.push({ source: src, destination: to.replace(/:splat\b/, ':splat*'), permanent: status === '301' })
    }
  }
  // `build.format: 'file'` names for index pages, e.g. /bindings/amqp.html -> /bindings/amqp/
  const known = new Set(out.redirects.map((r) => r.source))
  for (const id of indexIds(path.resolve('src/content/docs')).sort()) {
    if (!known.has(`/${id}.html`)) out.redirects.push({ source: `/${id}.html`, destination: `/${id}/`, permanent: true })
  }
  return out
}

const { redirects: redirectRules, rewrites } = redirects()
const config = {
  $schema: 'https://openapi.vercel.sh/vercel.json',
  framework: 'astro',
  installCommand: 'bun install',
  buildCommand: 'bun run build',
  outputDirectory: 'dist',
  cleanUrls: false,
  redirects: redirectRules,
  rewrites,
  headers: [
    {
      source: '/(.*)',
      headers: [
        { key: 'Content-Security-Policy', value: CSP },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
      ],
    },
    { source: '/_astro/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
    // Markdown copies of pages are for agents; the HTML page is the one to index.
    { source: '/(.*)\\.md', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] },
  ],
}

const text = `${JSON.stringify(config, null, 2)}\n`
if (process.argv.includes('--check')) {
  const current = fs.existsSync('vercel.json') ? fs.readFileSync('vercel.json', 'utf8') : ''
  if (current !== text) {
    console.error('vercel.json is out of date: run `bun run vercel:config` and commit it.')
    process.exit(1)
  }
} else {
  fs.writeFileSync('vercel.json', text)
  console.log(`vercel.json: ${redirectRules.length} redirects, ${rewrites.length} rewrites`)
}

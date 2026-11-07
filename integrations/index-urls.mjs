// `build.format: 'file'` keeps the URLs search engines know (`/bindings/amqp/0.2.0/channel.html`), but it also turns
// every index page into `bindings/amqp.html`. Those pages have always lived at `/bindings/amqp/`, so after the build
// this moves them back to `bindings/amqp/index.html` and rewrites every link to them in the generated files.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const walk = (dir, ext) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name)
    return e.isDirectory() ? walk(p, ext) : ext.some((x) => e.name.endsWith(x)) ? [p] : []
  })

/** Ids of docs that come from an `index.md`, e.g. `bindings/amqp`. */
export const indexIds = (docsDir) =>
  walk(docsDir, ['index.md', 'index.mdx'])
    .map((f) => path.relative(docsDir, path.dirname(f)).split(path.sep).join('/'))
    .filter(Boolean)

/**
 * @param {{ docsDir: string, site: string, extraIds?: string[] }} options `extraIds`: index pages that are Astro pages, not docs
 * @returns {import('astro').AstroIntegration}
 */
export default function indexUrls({ docsDir, site, extraIds = [] }) {
  return {
    name: 'asyncapi:index-urls',
    hooks: {
      'astro:build:done': ({ dir, logger }) => {
        const out = fileURLToPath(dir)
        const ids = [...indexIds(docsDir), ...extraIds].sort((a, b) => b.length - a.length)

        for (const id of ids) {
          const from = path.join(out, `${id}.html`)
          if (!fs.existsSync(from)) continue
          fs.mkdirSync(path.join(out, id), { recursive: true })
          fs.renameSync(from, path.join(out, id, 'index.html'))
        }

        // "/bindings/amqp.html" or "/bindings/amqp" followed by a quote, # or ? -> "/bindings/amqp/"
        // Only root-relative links and links to this site: other hosts may have a /bindings of their own.
        const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const pattern = new RegExp(`(["'(]|${escape(site)})/(${ids.map(escape).join('|')})(?:\\.html)?(?=["'#?)<])`, 'g')
        let files = 0
        for (const file of walk(out, ['.html', '.xml', '.txt', '.md'])) {
          const text = fs.readFileSync(file, 'utf8')
          const fixed = text.replace(pattern, '$1/$2/')
          if (fixed !== text) {
            fs.writeFileSync(file, fixed)
            files++
          }
        }

        logger.info(`moved ${ids.length} index pages to dir/ URLs, rewrote links in ${files} files`)
      },
    },
  }
}

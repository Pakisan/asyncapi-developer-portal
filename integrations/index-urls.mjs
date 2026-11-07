// `build.format: 'file'` writes `bindings/amqp/0.2.0/channel.html`, which Vercel serves at `/bindings/amqp/0.2.0/channel`
// (cleanUrls). It also turns every index page into `bindings/amqp.html`; those pages have always lived at
// `/bindings/amqp/`, so after the build this moves them back to `bindings/amqp/index.html`. Then it rewrites every link
// in the generated files (pages, sitemap, canonicals, JSON-LD, llms.txt, Markdown copies) to the URL that is served:
// `/bindings/amqp/` for index pages, `/bindings/amqp/0.2.0/channel` without `.html` for the others.
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

        // "/bindings/amqp/0.2.0/channel.html" -> "/bindings/amqp/0.2.0/channel", only for pages that exist, so a
        // code sample that mentions some other .html file keeps it
        const pages = walk(out, ['.html'])
          .map((f) => '/' + path.relative(out, f).split(path.sep).join('/'))
          .filter((p) => !p.endsWith('/index.html') && p !== '/404.html')
          .map((p) => p.slice(0, -'.html'.length))
          .sort((a, b) => b.length - a.length)
        // The lookahead takes `\` too: in JSON-LD answers a link's closing quote is written `\"`. The home page is `/`.
        const clean = new RegExp(`(["'(]|${escape(site)})(${pages.map(escape).join('|')})\\.html(?=["'#?)<\\s\\\\])`, 'g')
        const home = new RegExp(`(["'(]|${escape(site)})/index\\.html(?=["'#?)<\\s\\\\])`, 'g')
        let cleaned = 0
        for (const file of walk(out, ['.html', '.xml', '.txt', '.md'])) {
          const text = fs.readFileSync(file, 'utf8')
          const fixed = text.replace(clean, '$1$2').replace(home, '$1/')
          if (fixed !== text) {
            fs.writeFileSync(file, fixed)
            cleaned++
          }
        }

        logger.info(`moved ${ids.length} index pages to dir/ URLs, rewrote links in ${files} files; removed .html from links in ${cleaned} files`)
      },
    },
  }
}

// @ts-check
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import starlightLinksValidator from 'starlight-links-validator'
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import indexUrls, { indexIds } from './integrations/index-urls.mjs'
import { llmsDescription, llmsDetails } from './src/data/llms.ts'
import { sidebarTopics } from './src/data/sidebar.ts'
import { LANDING_INDEX_IDS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './src/data/site.ts'

const docsDir = fileURLToPath(new URL('./src/content/docs/', import.meta.url))

const indexes = new Set([...indexIds(docsDir), ...LANDING_INDEX_IDS])
/** Public URL of a page id: `bindings/amqp` -> `/bindings/amqp/`, `bindings/amqp/0.2.0/channel` -> `...channel.html`. */
const publicUrl = (id) => `${SITE_URL}/${id === '' ? '' : indexes.has(id) ? `${id}/` : `${id}.html`}`

// Pages kept out of the sitemap: they carry `noindex`, or are not reference content.
const NOT_IN_SITEMAP = new Set(['privacy'].map(publicUrl))

/**
 * Last commit date of every docs page and landing page, keyed by public URL, for the sitemap's <lastmod>.
 * One `git log` pass instead of one per file. On a shallow clone it knows fewer dates, so it says so: on Vercel, set
 * `VERCEL_DEEP_CLONE=true` (see README).
 */
function lastModifiedByUrl() {
  const dates = new Map()
  let log = ''
  try {
    if (execFileSync('git', ['rev-parse', '--is-shallow-repository'], { encoding: 'utf8' }).trim() === 'true') {
      console.warn('[lastmod] shallow git clone: sitemap <lastmod> dates will be missing or wrong. On Vercel, set VERCEL_DEEP_CLONE=true.')
    }
    log = execFileSync('git', ['log', '--format=%x00%cI', '--name-only', '--', 'src/content/docs', 'src/pages'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
  } catch {
    return dates
  }
  for (const commit of log.split('\0').slice(1)) {
    const [date, ...names] = commit.trim().split('\n')
    for (const name of names) {
      const m = name.match(/^src\/content\/docs\/(.+)\.mdx?$/) ?? name.match(/^src\/pages\/(.+)\.astro$/)
      if (!m) continue
      const url = publicUrl(m[1].replace(/(^|\/)index$/, ''))
      if (!dates.has(url)) dates.set(url, date)
    }
  }
  return dates
}
const lastModified = lastModifiedByUrl()

export default defineConfig({
  site: SITE_URL,
  // `channel.md` -> `channel.html`: the URLs search engines have indexed. Index pages are moved back to `dir/` by indexUrls.
  build: { format: 'file' },
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      favicon: '/icon.svg',
      logo: { src: './public/icon.svg', alt: '' },
      lastUpdated: true,
      editLink: { baseUrl: 'https://github.com/Pakisan/asyncapi-developer-portal/edit/master/' },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Pakisan/asyncapi-developer-portal' }],
      head: [
        { tag: 'meta', attrs: { name: 'yandex-verification', content: 'ed012648c88cacbb' } },
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '32x32' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'llms.txt' } },
      ],
      customCss: ['./src/styles/starlight.css'],
      routeMiddleware: './src/routeData.ts',
      components: {
        Head: './src/components/starlight/Head.astro',
        Footer: './src/components/starlight/Footer.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
        MarkdownContent: './src/components/starlight/MarkdownContent.astro',
      },
      plugins: [
        starlightSidebarTopics(sidebarTopics, { exclude: ['/privacy', '/404'] }),
        // Landing pages are Astro pages, not Starlight docs, so the validator does not know them.
        starlightLinksValidator({ errorOnRelativeLinks: true, errorOnInvalidHashes: false, exclude: LANDING_INDEX_IDS.map((id) => `/${id}/`) }),
        starlightLlmsTxt({
          projectName: SITE_NAME,
          description: llmsDescription,
          details: llmsDetails,
          promote: ['bindings/index*', 'schemas/index*', 'schemas/registry*'],
          customSets: [
            { label: 'Bindings', description: 'AsyncAPI protocol bindings for 20 brokers, every version', paths: ['bindings/**'] },
            { label: 'Schemas', description: 'AsyncAPI schema objects, multi-format schemas and security schemes', paths: ['schemas/**'] },
            { label: 'JetBrains plugin', description: 'The AsyncAPI plugin for JetBrains IDEs', paths: ['jetbrains-plugin/**'] },
          ],
        }),
      ],
    }),
    sitemap({
      // The sitemap writes `build.format: 'file'` URLs without `.html`; put back the URLs the pages are served at.
      serialize: (item) => {
        const url = publicUrl(item.url.slice(SITE_URL.length).replace(/^\/|\/$/g, '').replace(/\.html$/, ''))
        if (NOT_IN_SITEMAP.has(url)) return undefined
        const lastmod = lastModified.get(url)
        return { ...item, url, ...(lastmod && { lastmod }) }
      },
    }),
    // Must stay last: rewrites links in what the integrations above generated (sitemap, llms.txt).
    indexUrls({ docsDir, site: SITE_URL, extraIds: LANDING_INDEX_IDS }),
  ],
})

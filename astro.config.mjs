// @ts-check
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'
import starlightLinksValidator from 'starlight-links-validator'
import starlightLlmsTxt from 'starlight-llms-txt'
import starlightSidebarTopics from 'starlight-sidebar-topics'
import indexUrls, { indexIds } from './integrations/index-urls.mjs'
import { llmsDescription, llmsDetails } from './src/data/llms.ts'
import { sidebarTopics } from './src/data/sidebar.ts'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './src/data/site.ts'

const docsDir = fileURLToPath(new URL('./src/content/docs/', import.meta.url))

const indexes = new Set(indexIds(docsDir))
/** Public URL of a page id: `bindings/amqp` -> `/bindings/amqp/`, `bindings/amqp/0.2.0/channel` -> `...channel.html`. */
const publicUrl = (id) => `${SITE_URL}/${id === '' ? '' : indexes.has(id) ? `${id}/` : `${id}.html`}`

// Pages kept out of the sitemap: they carry `noindex`, or are not reference content.
const NOT_IN_SITEMAP = new Set(['jetbrains-plugin/frameworks/spring/apache-kafka/KafkaAdmin-channels', 'privacy'].map(publicUrl))

/**
 * Last commit date of every docs file, keyed by public URL, for the sitemap's <lastmod>.
 * One `git log` pass instead of one per file; on a shallow clone it simply knows fewer dates.
 */
function lastModifiedByUrl() {
  const dates = new Map()
  let log = ''
  try {
    log = execFileSync('git', ['log', '--format=%x00%cI', '--name-only', '--', 'src/content/docs'], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 })
  } catch {
    return dates
  }
  for (const commit of log.split('\0').slice(1)) {
    const [date, ...names] = commit.trim().split('\n')
    for (const name of names) {
      const m = name.match(/^src\/content\/docs\/(.+)\.mdx?$/)
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
    vue(),
    starlight({
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      favicon: '/favicon.ico',
      logo: { src: './public/icon.svg', alt: '' },
      lastUpdated: true,
      editLink: { baseUrl: 'https://github.com/Pakisan/asyncapi-developer-portal/edit/master/' },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Pakisan/asyncapi-developer-portal' }],
      head: [
        { tag: 'meta', attrs: { name: 'yandex-verification', content: 'ed012648c88cacbb' } },
        { tag: 'link', attrs: { rel: 'alternate', type: 'text/plain', href: '/llms.txt', title: 'llms.txt' } },
      ],
      customCss: ['./src/styles/starlight.css'],
      components: {
        Head: './src/components/starlight/Head.astro',
        Footer: './src/components/starlight/Footer.astro',
        PageTitle: './src/components/starlight/PageTitle.astro',
      },
      plugins: [
        starlightSidebarTopics(sidebarTopics, { exclude: ['/privacy', '/404'] }),
        starlightLinksValidator({ errorOnRelativeLinks: true, errorOnInvalidHashes: false }),
        starlightLlmsTxt({
          projectName: SITE_NAME,
          description: llmsDescription,
          details: llmsDetails,
          promote: ['bindings/index*', 'schemas/index*', 'schemas/registry*'],
          exclude: ['jetbrains-plugin/frameworks/spring/apache-kafka/KafkaAdmin-channels'],
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
    indexUrls({ docsDir, site: SITE_URL }),
  ],
  vite: { plugins: [tailwindcss()] },
})

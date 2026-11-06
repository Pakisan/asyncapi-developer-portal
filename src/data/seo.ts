// Head tags and schema.org JSON-LD for every page. One place builds them, so canonical, Open Graph and structured data
// always agree. Only describe what the page shows: Google penalises markup that does not match visible content.
import { faq } from './home'
import { faq as pluginFaq } from './jetbrains-plugin'
import { marketplace, supportedIdes } from './marketplace'
import { type Product, products } from './products'
import { DEFAULT_IMAGE, SITE_NAME, SITE_URL } from './site'

export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const absolute = (url: string) =>
  /^https?:\/\//.test(url) ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`

/**
 * Public URL of a docs entry, from its id (`bindings/amqp`, `bindings/amqp/0.2.0/channel`) and whether it is an
 * `index.md`. Index pages live at `dir/`, all others at `name.html`: the URLs search engines already know.
 */
export const docUrl = (id: string, isIndex: boolean) => `${SITE_URL}/${id}${isIndex ? '/' : '.html'}`

export const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Pavel Bodiachevskii',
  url: 'https://pavelon.dev',
  image: `${SITE_URL}/asyncapi.png`,
  jobTitle: 'AsyncAPI Technical Steering Committee member and maintainer',
  memberOf: {
    '@type': 'OrganizationRole',
    roleName: 'Technical Steering Committee member',
    memberOf: { '@type': 'Organization', name: 'AsyncAPI Initiative', url: 'https://www.asyncapi.com' },
  },
  knowsAbout: ['AsyncAPI', 'Event-driven architecture', 'Apache Kafka', 'Spring Messaging', 'JetBrains IDE plugins', 'JSON Schema'],
  sameAs: [
    'https://github.com/Pakisan',
    'https://pavelon.dev',
    'https://plugins.jetbrains.com/plugin/15673-asyncapi',
    'https://github.com/asyncapi/jasyncapi',
  ],
}

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: 'en',
  publisher: { '@id': PERSON_ID },
}

export function softwareApplication(p: Product) {
  const url = absolute(p.page)
  const node: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    '@id': `${url}#software`,
    name: p.name,
    description: p.summary,
    url,
    applicationCategory: p.applicationCategory,
    operatingSystem: p.operatingSystem,
    featureList: p.features,
    audience: { '@type': 'Audience', audienceType: p.audience },
    author: { '@id': PERSON_ID },
    creator: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  }
  if (p.softwareVersion) node.softwareVersion = p.softwareVersion
  if (p.repoUrl) node.codeRepository = p.repoUrl
  if (p.status === 'available') {
    node.offers = { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    if (p.id === 'jasyncapi') node.license = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (p.status === 'freemium') {
    node.offers = {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free core features; additional features are available in the paid tier',
    }
  }
  if (p.installUrl) node.downloadUrl = p.installUrl
  return node
}

export function registryDataset() {
  const registry = 'https://schemas.asyncapi.pavelon.dev'
  return {
    '@type': 'Dataset',
    '@id': `${registry}/#dataset`,
    name: 'AsyncAPI JSON Schema Registry',
    description:
      'JSON Schemas (draft-07) for AsyncAPI 3.x documents, protocol bindings for 20 brokers and security schemes, for validation, autocompletion and AI agents.',
    url: registry,
    sameAs: `${SITE_URL}/schemas/registry.html`,
    keywords: ['AsyncAPI', 'JSON Schema', 'validation', 'bindings', 'event-driven architecture'],
    isAccessibleForFree: true,
    license: 'https://www.apache.org/licenses/LICENSE-2.0',
    creator: { '@id': PERSON_ID },
    distribution: {
      '@type': 'DataDownload',
      encodingFormat: 'application/schema+json',
      contentUrl: `${registry}/draft-07/schemas/v3.0.0/asyncapi`,
    },
  }
}

const SEGMENT_LABELS: Record<string, string> = {
  bindings: 'Bindings',
  schemas: 'Schemas',
  'jetbrains-plugin': 'JetBrains Plugin',
  frameworks: 'Spring Messaging',
  linters: 'Linters',
  'typed-components': 'Typed components',
  jasyncapi: 'JAsyncAPI',
}

export interface Crumb {
  name: string
  url: string
}

/** Home, then every ancestor that is a real page, then the page itself. */
export function breadcrumbs(id: string, isIndex: boolean, title: string, indexIds: Set<string>): Crumb[] {
  const segments = id.split('/')
  const items: Crumb[] = [{ name: 'Home', url: `${SITE_URL}/` }]
  segments.slice(0, -1).forEach((seg, i) => {
    const dir = segments.slice(0, i + 1).join('/')
    if (indexIds.has(dir)) items.push({ name: SEGMENT_LABELS[seg] ?? seg, url: `${SITE_URL}/${dir}/` })
  })
  items.push({ name: title, url: docUrl(id, isIndex) })
  return items
}

const breadcrumbList = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
})

export interface PageMeta {
  title: string
  description: string
  url: string
  image: string
  modified?: Date
  type: 'website' | 'article'
}

/** Canonical, Open Graph and Twitter tags, as `[tag, attrs]` pairs. */
export function metaTags(m: PageMeta): [string, Record<string, string>][] {
  const tags: [string, Record<string, string>][] = [
    ['link', { rel: 'canonical', href: m.url }],
    ['meta', { name: 'description', content: m.description }],
    ['meta', { property: 'og:site_name', content: SITE_NAME }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:type', content: m.type }],
    ['meta', { property: 'og:title', content: m.title }],
    ['meta', { property: 'og:description', content: m.description }],
    ['meta', { property: 'og:url', content: m.url }],
    ['meta', { property: 'og:image', content: m.image }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: m.title }],
    ['meta', { name: 'twitter:description', content: m.description }],
    ['meta', { name: 'twitter:image', content: m.image }],
  ]
  if (m.type === 'article' && m.modified) {
    tags.push(['meta', { property: 'article:modified_time', content: m.modified.toISOString() }])
  }
  return tags
}

/** JSON-LD for a docs page: a product page describes the product, any other page is a TechArticle. */
export function docGraph(m: PageMeta, id: string, crumbs: Crumb[]) {
  const graph: Record<string, unknown>[] = [person, website]
  const path = m.url.slice(SITE_URL.length)
  const product = products.find((p) => p.page === path)

  if (product && product.group !== 'Reference') {
    graph.push({ ...softwareApplication(product), mainEntityOfPage: m.url, image: m.image })
  } else {
    graph.push({
      '@type': 'TechArticle',
      '@id': `${m.url}#article`,
      headline: m.title,
      description: m.description,
      url: m.url,
      image: m.image,
      inLanguage: 'en',
      author: { '@id': PERSON_ID },
      publisher: { '@id': PERSON_ID },
      isPartOf: { '@id': WEBSITE_ID },
      mainEntityOfPage: m.url,
      ...(m.modified && { dateModified: m.modified.toISOString() }),
    })
  }
  if (id === 'schemas/registry') graph.push(registryDataset())
  if (crumbs.length > 1) graph.push(breadcrumbList(crumbs))
  return { '@context': 'https://schema.org', '@graph': graph }
}

const faqPage = (items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  // Answers are shown wherever search engines and AI answers quote them, so their links must be absolute.
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/href="\//g, `href="${SITE_URL}/`) },
  })),
})

/** JSON-LD for the home page: who, what tools, the registry and the FAQ shown on the page. */
export function homeGraph(m: PageMeta) {
  const software = products.filter((p) => p.group !== 'Reference')
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      website,
      {
        '@type': 'CollectionPage',
        '@id': `${m.url}#webpage`,
        url: m.url,
        name: m.title,
        description: m.description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': PERSON_ID },
        primaryImageOfPage: m.image,
      },
      {
        '@type': 'ItemList',
        name: 'AsyncAPI tools by Pavel Bodiachevskii',
        itemListElement: software.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: softwareApplication(p) })),
      },
      registryDataset(),
      faqPage(faq),
    ],
  }
}

export const defaultImage = absolute(DEFAULT_IMAGE)

/**
 * JSON-LD for the plugin landing. The SoftwareApplication carries the Marketplace's own numbers (version, rating,
 * downloads), which the page shows too, and names Pavel as author: the Marketplace page itself has no such markup.
 */
export function pluginGraph(m: PageMeta, screenshots: string[]) {
  const product = products.find((p) => p.id === 'jetbrains-plugin')!
  const app = softwareApplication(product)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      person,
      website,
      {
        '@type': 'WebPage',
        '@id': `${m.url}#webpage`,
        url: m.url,
        name: m.title,
        description: m.description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': app['@id'] },
        primaryImageOfPage: m.image,
        ...(m.modified && { dateModified: m.modified.toISOString() }),
      },
      {
        ...app,
        name: 'AsyncAPI plugin for JetBrains IDEs',
        alternateName: ['AsyncAPI plugin for IntelliJ IDEA', 'AsyncAPI'],
        applicationSubCategory: 'IDE plugin',
        mainEntityOfPage: m.url,
        image: m.image,
        screenshot: screenshots,
        softwareVersion: marketplace.version,
        dateModified: marketplace.released,
        softwareRequirements: `${supportedIdes.join(', ')} 2026.1 or later`,
        sameAs: product.installUrl,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: marketplace.rating.toFixed(1),
          ratingCount: marketplace.ratingCount,
          bestRating: 5,
          worstRating: 1,
        },
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/DownloadAction',
          userInteractionCount: marketplace.downloads,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'JetBrains Plugin', item: m.url },
        ],
      },
      faqPage(pluginFaq),
    ],
  }
}

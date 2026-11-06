// What the broker hubs (`/bindings/<broker>/`) and version pages (`/bindings/<broker>/<x.y.z>/<object>.html`) add to
// their hand-written text: version history, latest fields, JSON Schema URLs and FAQ, all generated from the schemas.
// One model feeds the HTML (components/bindings), the table of contents (routeData.ts), the Markdown copy for agents
// and the JSON-LD, so all four say the same thing.
import fs from 'node:fs'
import path from 'node:path'
import { bindingFaq, type Qa, reservedFaq } from './binding-faq'
import { BINDING_OBJECTS, type BindingObject, type Field, fields, history, registryUrl, type VersionHistory } from './binding-schemas'
import { brokerNames } from './bindings'

const DOCS = path.resolve('src/content/docs/bindings')

export const HUB_ID = /^bindings\/([^/]+)$/
export const VERSION_ID = /^bindings\/([^/]+)\/(\d+\.\d+\.\d+)\/(server|channel|operation|message)$/

export const objectLabel = (o: BindingObject) => `${o[0].toUpperCase()}${o.slice(1)} binding`

/** The docs page of one binding object in one version, if there is one. */
export const pageOf = (broker: string, version: string, object: BindingObject) =>
  fs.existsSync(path.join(DOCS, broker, version, `${object}.md`)) ? `/bindings/${broker}/${version}/${object}.html` : undefined

export interface Hub {
  broker: string
  name: string
  latest: string
  history: (VersionHistory & { pages: { object: BindingObject; href: string }[] })[]
  /** Fields of the latest version, per binding object that has any */
  fields: { object: BindingObject; href?: string; schema: string; fields: Field[] }[]
  /** No version defines any field: the binding only reserves the name */
  reserved: boolean
  deprecated?: { by: string; href: string }
  faq: Qa[]
}

const DEPRECATED: Record<string, { by: string; href: string }> = {
  mqtt5: { by: 'MQTT binding 0.2.0', href: '/bindings/mqtt/' },
}

const hubs = new Map<string, Hub | undefined>()

export function hub(broker: string): Hub | undefined {
  if (hubs.has(broker)) return hubs.get(broker)
  const versions = history(broker)
  let result: Hub | undefined
  if (versions.length) {
    const latest = versions.at(-1)!.version
    const name = brokerNames().get(broker) ?? broker
    const latestFields = BINDING_OBJECTS.map((object) => ({
      object,
      href: pageOf(broker, latest, object),
      schema: registryUrl(broker, latest, object),
      fields: fields(broker, latest, object),
    })).filter((f) => f.fields.length)
    const reserved = versions.every((v) => !v.objects.length)
    result = {
      broker,
      name,
      latest,
      history: versions
        .map((v) => ({
          ...v,
          pages: BINDING_OBJECTS.flatMap((object) => {
            const href = pageOf(broker, v.version, object)
            return href ? [{ object, href }] : []
          }),
        }))
        .reverse(),
      fields: latestFields,
      reserved,
      deprecated: DEPRECATED[broker],
      faq: [...(bindingFaq[broker] ?? []), ...(reserved ? [reservedFaq(name)] : [])],
    }
  }
  hubs.set(broker, result)
  return result
}

export interface VersionPage {
  hub: Hub
  version: string
  object: BindingObject
  isLatest: boolean
  /** The same object in the latest version, when this page is older */
  latestHref?: string
  /** Fields added or removed by every later version, for this object */
  since: { version: string; added: string[]; removed: string[] }[]
  schema: string
}

export function versionPage(id: string): VersionPage | undefined {
  const m = id.match(VERSION_ID)
  const h = m && hub(m[1])
  if (!m || !h) return undefined
  const [, broker, version, raw] = m
  const object = raw as BindingObject
  const isLatest = version === h.latest
  const newer = h.history.filter((v) => v.version !== version && compare(v.version, version) > 0).reverse()
  return {
    hub: h,
    version,
    object,
    isLatest,
    latestHref: isLatest ? undefined : (pageOf(broker, h.latest, object) ?? `/bindings/${broker}/`),
    since: newer.flatMap((v) => v.changes.filter((c) => c.object === object).map((c) => ({ version: v.version, added: c.added, removed: c.removed }))),
    schema: registryUrl(broker, version, object),
  }
}

const compare = (a: string, b: string) => {
  const [x, y] = [a.split('.').map(Number), b.split('.').map(Number)]
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2]
}

/** Section headings the hub adds, for the table of contents. */
export const hubHeadings = (h: Hub) => [
  { slug: 'versions', text: 'Versions and changes' },
  ...(h.fields.length ? [{ slug: 'fields', text: `Fields in version ${h.latest}` }] : []),
  { slug: 'json-schema', text: 'Validate with JSON Schema' },
  ...(h.faq.length ? [{ slug: 'questions', text: 'Questions' }] : []),
]

/** One line of what a version changed, in words. */
export function changeSummary(v: VersionHistory, first: boolean): string[] {
  if (first) return v.objects.length ? [`First version: ${v.objects.map((o) => `${o} binding`).join(', ')}.`] : ['First version. No fields yet: the binding reserves the name.']
  if (!v.changes.length) return ['No field changes.']
  return v.changes.map((c) => {
    const parts = [c.added.length && `adds ${c.added.map((f) => `\`${f}\``).join(', ')}`, c.removed.length && `removes ${c.removed.map((f) => `\`${f}\``).join(', ')}`].filter(Boolean)
    return `${objectLabel(c.object)} ${parts.join('; ')}.`
  })
}

const html = (s: string) => s.replace(/<a href="([^"]+)">([^<]+)<\/a>/g, '[$2]($1)').replace(/<\/?code>/g, '`').replace(/<\/?(em|b|strong)>/g, '').replace(/&rarr;/g, '→')

/** The hub's generated sections as Markdown, appended to the page's Markdown copy for agents. */
export function hubMarkdown(h: Hub): string {
  const lines: string[] = ['', '## Versions and changes', '']
  if (h.deprecated) lines.push(`Deprecated in favour of the [${h.deprecated.by}](${h.deprecated.href}).`, '')
  h.history.forEach((v, i) => {
    const first = i === h.history.length - 1
    lines.push(`- **${v.version}**${v.version === h.latest ? ' (latest)' : ''}: ${changeSummary(v, first).join(' ')}${v.pages.length ? ` Pages: ${v.pages.map((p) => `[${p.object}](${p.href})`).join(', ')}.` : ''}`)
  })
  if (h.fields.length) {
    lines.push('', `## Fields in version ${h.latest}`)
    for (const f of h.fields) {
      lines.push('', `### ${objectLabel(f.object)}`, '', '| Field | Type | Required | Description |', '| --- | --- | --- | --- |')
      for (const x of f.fields) lines.push(`| \`${x.path}\` | ${x.type}${x.values ? `: ${x.values.join(', ')}` : ''} | ${x.required ? 'yes' : ''} | ${x.description.replace(/\|/g, '\\|')} |`)
    }
  }
  lines.push('', '## Validate with JSON Schema', '')
  for (const o of BINDING_OBJECTS) lines.push(`- ${objectLabel(o)}: ${registryUrl(h.broker, h.latest, o)}`)
  if (h.faq.length) {
    lines.push('', '## Questions')
    for (const q of h.faq) lines.push('', `### ${q.q}`, '', html(q.a))
  }
  return `${lines.join('\n')}\n`
}

/** The version page's generated note as Markdown. */
export function versionMarkdown(v: VersionPage): string {
  const lines = ['']
  if (v.isLatest) lines.push(`> This is the latest ${v.hub.name} ${v.object} binding. JSON Schema: ${v.schema}`)
  else {
    lines.push(`> Version ${v.version} is not the latest. The latest ${v.hub.name} binding is ${v.hub.latest}: ${v.latestHref}`)
    for (const s of v.since) lines.push(`> - ${s.version}: ${[s.added.length && `adds ${s.added.join(', ')}`, s.removed.length && `removes ${s.removed.join(', ')}`].filter(Boolean).join('; ')}`)
    lines.push(`> JSON Schema of this version: ${v.schema}`)
  }
  return `${lines.join('\n')}\n`
}

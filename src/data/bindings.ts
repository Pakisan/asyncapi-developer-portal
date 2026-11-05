// The brokers that have bindings docs, read from the content itself: a broker is `bindings/<id>/index.md`, its versions
// are the `bindings/<id>/<x.y.z>/` folders. Display names come from the sidebar, so they match the docs.
import { getCollection } from 'astro:content'
import { sidebarTopics } from './sidebar'

export interface Broker {
  id: string
  name: string
  href: string
  versions: string[]
  latest: string
}

const semver = (v: string) => v.split('.').map(Number)
const byVersion = (a: string, b: string) => {
  const [x, y] = [semver(a), semver(b)]
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2]
}

/** Sidebar label of every broker group, keyed by broker id. */
function brokerNames() {
  const names = new Map<string, string>()
  const topic = sidebarTopics.find((t) => 'link' in t && t.link === '/bindings/')
  const items = topic && 'items' in topic ? topic.items : []
  for (const item of items as Array<{ label?: string; items?: Array<{ slug?: string }> }>) {
    const slug = item.items?.find((i) => i.slug?.startsWith('bindings/'))?.slug
    const id = slug?.split('/')[1]
    if (id && item.label) names.set(id, item.label)
  }
  return names
}

export async function getBrokers(): Promise<Broker[]> {
  const docs = await getCollection('docs', (e) => e.id.startsWith('bindings/'))
  const names = brokerNames()
  const brokers = docs
    .filter((e) => /^bindings\/[^/]+$/.test(e.id))
    .map((e) => {
      const id = e.id.split('/')[1]
      const versions = [...new Set(docs.map((d) => d.id.match(new RegExp(`^bindings/${id}/(\\d+\\.\\d+\\.\\d+)/`))?.[1]).filter(Boolean) as string[])].sort(byVersion)
      return { id, name: names.get(id) ?? e.data.heading ?? e.data.title, href: `/bindings/${id}/`, versions, latest: versions.at(-1) ?? '' }
    })
  return brokers.sort((a, b) => a.name.localeCompare(b.name))
}

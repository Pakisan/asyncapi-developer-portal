// Starlight route middleware: the broker pages get generated sections (components/bindings/BrokerHub.astro) that are
// not in their Markdown, so their headings are added to the table of contents here.
import { defineRouteMiddleware } from '@astrojs/starlight/route-data'
import { HUB_ID, hub, hubHeadings } from './data/binding-pages'

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute
  const id = route.entry.id
  const h = HUB_ID.test(id) ? hub(id.split('/')[1]) : undefined
  if (!h || !route.toc) return
  route.toc.items.push(...hubHeadings(h).map(({ slug, text }) => ({ depth: 2, slug, text, children: [] })))
})

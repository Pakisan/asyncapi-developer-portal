// Starlight route middleware. The site title links to `/`: under `build.format: 'file'` Starlight would make it
// `/index.html`. The broker and security scheme pages get generated sections (components/bindings,
// components/schemas) that are not in their Markdown, so their headings are added to the table of contents here.
import { defineRouteMiddleware } from '@astrojs/starlight/route-data'
import { HUB_ID, hub, hubHeadings } from './data/binding-pages'
import { formatFaq } from './data/format-faq'
import { securityHeadings, securityPage } from './data/security-schemes'

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute
  route.siteTitleHref = '/'
  const id = route.entry.id
  const h = HUB_ID.test(id) ? hub(id.split('/')[1]) : undefined
  const security = securityPage(id)
  const headings = h ? hubHeadings(h) : security ? securityHeadings(security) : formatFaq[id] ? [{ slug: 'questions', text: 'Questions' }] : []
  if (!headings.length || !route.toc) return
  route.toc.items.push(...headings.map(({ slug, text }) => ({ depth: 2, slug, text, children: [] })))
})

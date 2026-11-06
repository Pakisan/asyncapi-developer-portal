// Every docs page as Markdown for AI agents and LLM tools: `/bindings/amqp/0.2.0/channel.md`, `/bindings/amqp/index.md`.
import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'
import { HUB_ID, hub, hubMarkdown, versionMarkdown, versionPage } from '../data/binding-pages'
import { formatFaq } from '../data/format-faq'
import { faqMarkdown, securityMarkdown, securityPage } from '../data/security-schemes'

export const getStaticPaths = (async () => {
  const docs = await getCollection('docs')
  return docs.map((entry) => ({
    params: { slug: /\/index\.mdx?$/.test(entry.filePath ?? '') ? `${entry.id}/index` : entry.id },
    props: { entry },
  }))
}) satisfies GetStaticPaths

export const GET: APIRoute<{ entry: CollectionEntry<'docs'> }> = ({ props: { entry } }) => {
  const { title, description } = entry.data
  // Bindings and security scheme pages get the same generated sections as their HTML (examples, fields, FAQ).
  const brokerHub = HUB_ID.test(entry.id) ? hub(entry.id.split('/')[1]) : undefined
  const version = versionPage(entry.id)
  const security = securityPage(entry.id)
  const text = [
    `# ${title}\n\n${description ? `> ${description}\n\n` : ''}`,
    version ? `${versionMarkdown(version)}\n` : '',
    entry.body ?? '',
    brokerHub ? hubMarkdown(brokerHub) : '',
    security ? securityMarkdown(security) : '',
    formatFaq[entry.id] ? faqMarkdown(formatFaq[entry.id]) : '',
  ].join('')
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
}

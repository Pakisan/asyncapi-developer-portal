// Every docs page as Markdown for AI agents and LLM tools: `/bindings/amqp/0.2.0/channel.md`, `/bindings/amqp/index.md`.
import type { APIRoute, GetStaticPaths } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'

export const getStaticPaths = (async () => {
  const docs = await getCollection('docs')
  return docs.map((entry) => ({
    params: { slug: /\/index\.mdx?$/.test(entry.filePath ?? '') ? `${entry.id}/index` : entry.id },
    props: { entry },
  }))
}) satisfies GetStaticPaths

export const GET: APIRoute<{ entry: CollectionEntry<'docs'> }> = ({ props: { entry } }) => {
  const { title, description } = entry.data
  const text = `# ${title}\n\n${description ? `> ${description}\n\n` : ''}${entry.body ?? ''}`
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } })
}

import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { docsLoader } from '@astrojs/starlight/loaders'
import { docsSchema } from '@astrojs/starlight/schema'

export const collections = {
  docs: defineCollection({
    // Ids keep the file path as is: the default slugger would lowercase `saslPlainSecuritySchema` and turn `0.2.0`
    // into `020`, changing URLs that are already indexed.
    loader: docsLoader({ generateId: ({ entry }) => entry.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, '') }),
    schema: docsSchema({
      extend: z.object({
        /** Social card for the page, root-relative or absolute; defaults to the site card. */
        ogImage: z.string().optional(),
        /** Visible page heading when it should differ from the search-result `title`. */
        heading: z.string().optional(),
      }),
    }),
  }),
}

import { defineCollection, z } from 'astro:content'

const components = defineCollection({
  schema: z.object({
    title: z.string().min(1)
  })
})

export const collections = {
  components
}

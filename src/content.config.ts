import { z, defineCollection } from 'astro:content';
import { file } from 'astro/loaders';

const features = defineCollection({
  loader: file('src/data/features.json'),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      img: z.object({
        src: image(),
        alt: z.string(),
      }),
    }),
});

export const collections = { features };

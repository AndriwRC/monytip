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

const pricing_plans = defineCollection({
  loader: file('src/data/pricing.json'),
  schema: z.object({
    name: z.enum(['free', 'standard', 'premium']),
    label: z.string(),
    price: z.number(),
    currency: z.string(),
    features: z.array(z.string()),
  }),
});

const team_members = defineCollection({
  loader: file('src/data/team.json'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      img: image(),
    }),
});

export const collections = { features, pricing_plans, team_members };

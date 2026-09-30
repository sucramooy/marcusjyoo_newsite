import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// English-only site.
const locale = z.literal('en').default('en');

const common = {
  title: z.string(),
  description: z.string(),
  locale,
  translationKey: z.string().optional(),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  order: z.number().default(0),
  seoTitle: z.string().optional(),
  canonical: z.url().optional(),
  ogImage: z.string().optional(),
};

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    ...common,
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    minutes: z.number().positive().optional(),
    comments: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    ...common,
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    status: z
      .enum(['active', 'maintained', 'archived', 'paused'])
      .default('active'),
    type: z.string().default('project'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroPosition: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    externalUrl: z.url().optional(),
    repositoryUrl: z.url().optional(),
    timeline: z
      .array(
        z.object({
          phase: z.string(),
          status: z.enum(['completed', 'in-progress', 'future']),
          description: z.string(),
          tags: z.array(z.string()).default([]),
          image: z.string().optional(),        // ← add
        }),
      )
    .default([]),
    specs: z.record(z.string(), z.string()).default({}),
    challenges: z
      .array(
        z.object({
          title: z.string(),
          problem: z.string(),
          solution: z.string(),
        }),
      )
      .default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.url(),
        }),
      )
      .default([]),
    support: z
    
  .object({
    title: z.string(),
    paragraphs: z.array(z.string()),
  })
  .optional(),
  }),
});

const photos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photos' }),
  schema: z.object({
    ...common,
    slug: z.string().regex(/^[^/?#]+$/),
    cover: z.string().optional(),
    photos: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({ ...common }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    ...common,
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});



export const collections = { writing, projects, photos, pages, work };

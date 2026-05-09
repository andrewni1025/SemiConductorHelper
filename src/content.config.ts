import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 五大内容集合 — 详见 AGENTS.md
 * 路径约定：
 *   src/content/intro/      入门地图
 *   src/content/segments/   产业链词典
 *   src/content/companies/  公司档案库
 *   src/content/tech/       技术路线 & 投资周期
 *   src/content/weekly/     时事周报
 */

const intro = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/intro' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),
    tags: z.array(z.string()).optional(),
    updated: z.coerce.date().optional(),
  }),
});

const segments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/segments' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    representativeCompanies: z.array(z.string()).optional(),
    moat: z.string().optional(),
    cyclicality: z.string().optional(),
    keyTech: z.array(z.string()).optional(),
    order: z.number().default(0),
    updated: z.coerce.date().optional(),
  }),
});

const companies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/companies' }),
  schema: z.object({
    name: z.string(),
    nameEn: z.string().optional(),
    ticker: z.string().optional(),
    country: z.string().optional(),
    segment: z.string(),
    moat: z.string().optional(),
    keyPeople: z.array(z.string()).optional(),
    keyTech: z.array(z.string()).optional(),
    customers: z.array(z.string()).optional(),
    competitors: z.array(z.string()).optional(),
    website: z.string().url().optional(),
    tags: z.array(z.string()).optional(),
    updated: z.coerce.date().optional(),
  }),
});

const tech = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tech' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z
      .enum(['制程', '封装', '互联', '功率器件', '周期', '估值', '其他'])
      .default('其他'),
    order: z.number().default(0),
    tags: z.array(z.string()).optional(),
    updated: z.coerce.date().optional(),
  }),
});

const weekly = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/weekly' }),
  schema: z.object({
    title: z.string(),
    weekStart: z.coerce.date(),
    weekEnd: z.coerce.date(),
    highlights: z.array(z.string()).optional(),
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .optional(),
  }),
});

export const collections = { intro, segments, companies, tech, weekly };

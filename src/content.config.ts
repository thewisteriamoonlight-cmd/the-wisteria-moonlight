/**
 * content.config.ts
 * ---------------------------------------------------------
 * The Wisteria Moonlight — Astro Content Collections config.
 *
 * Defines the `articles` collection, replacing the temporary
 * src/data/posts.ts seed data. Every editorial post lives as a
 * markdown file in src/content/articles/ and is validated
 * against the zod schema below at build time.
 */

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import categoryMetadata from "./data/categoryMetadata";

const categoryTitles = categoryMetadata.map((category) => category.title) as [
  string,
  ...string[],
];

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      category: z.enum(categoryTitles),
      heroImage: image(),
      heroImageAlt: z.string(),
      date: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      readTime: z.string(),
      author: z.string().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().optional(),
    }),
});

export const collections = { articles };

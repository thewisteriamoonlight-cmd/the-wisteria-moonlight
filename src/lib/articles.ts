/**
 * lib/articles.ts
 * ---------------------------------------------------------
 * The Wisteria Moonlight — shared article/story utilities.
 *
 * Single source of truth for the "story" shape consumed by
 * StoryCard, FeaturedStories, LatestPosts, and RelatedStories,
 * plus the mapping logic that turns a validated `articles`
 * Content Collection entry into that shape.
 *
 * This replaces the old src/data/posts.ts module: the `Post`
 * type it exported, and the ad-hoc collection→object mapping
 * that had been duplicated independently in index.astro and
 * journal/[slug].astro.
 *
 * The underlying field validation (required vs optional,
 * string vs Date, etc.) is owned by the zod schema in
 * src/content.config.ts. This file only reshapes that
 * validated data for presentational components — it is not a
 * second source of truth for what a post "is".
 */

import type { ImageMetadata } from "astro";
import type { CollectionEntry } from "astro:content";

export interface Story {
  title: string;
  slug: string;
  href: string;

  image: ImageMetadata;
  imageAlt: string;

  category: string;

  excerpt: string;

  date: string;

  readTime: string;

  featured?: boolean;
}

/**
 * Converts a category name into a URL-friendly slug, e.g.
 * "Home Finds" -> "home-finds", "Gift Guides" -> "gift-guides".
 *
 * Shared by any code that needs to turn `article.data.category`
 * into a route segment — currently the category listing route
 * (src/pages/category/[slug].astro) — so the exact slugging rules
 * live in one place rather than being reimplemented per caller.
 */
export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Maps a single `articles` collection entry to the flat `Story`
 * shape used by presentational components (StoryCard and the
 * sections that compose it).
 */
export function mapArticleToStory(
  entry: CollectionEntry<"articles">
): Story {
  return {
    title: entry.data.title,
    slug: entry.id,
    href: `/journal/${entry.id}`,
    image: entry.data.heroImage,
    imageAlt: entry.data.heroImageAlt,
    category: entry.data.category,
    excerpt: entry.data.excerpt,
    date: entry.data.date.toISOString().split("T")[0],
    readTime: entry.data.readTime,
    featured: entry.data.featured,
  };
}

/** Maps a list of collection entries to `Story` objects. */
export function mapArticlesToStories(
  entries: CollectionEntry<"articles">[]
): Story[] {
  return entries.map(mapArticleToStory);
}

/**
 * Sorts stories by `date` descending (most recent first).
 * Returns a new array — does not mutate the input.
 */
export function sortStoriesByDateDesc(stories: Story[]): Story[] {
  return [...stories].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

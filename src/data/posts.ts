/**
 * posts.ts
 * ---------------------------------------------------------
 * The Wisteria Moonlight — temporary editorial post data.
 *
 * This module exports the seed set of editorial posts consumed by
 * FeaturedStories, LatestPosts, and (soon) category pages and
 * related-article strips.
 *
 * ⚠ Temporary seed data.
 * This file represents the initial editorial content model — the
 * shape of a "post" as it will exist inside Astro Content
 * Collections (see TAD Section 15). When Content Collections are
 * introduced, this file will be replaced by collection queries
 * against src/content/articles/ and deleted.
 *
 * Consumers should import the default export and pass it directly
 * to the relevant section component's `stories` or `posts` prop.
 */

import type { ImageMetadata } from "astro";

import cozyLivingImage from "../assets/images/posts/cozy-living.jpg";
import readingCornerImage from "../assets/images/posts/reading-corner.jpg";
import perfumeImage from "../assets/images/posts/perfume.jpg";
import parisCafeImage from "../assets/images/posts/paris-cafe.jpg";
import giftIdeasImage from "../assets/images/posts/gift-ideas.jpg";
import autumnHomeImage from "../assets/images/posts/autumn-home.jpg";

export interface Post {
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

const posts: Post[] = [
  {
    title: "10 Cozy Living Room Ideas That Feel Effortlessly Elegant",
    slug: "cozy-living-room-ideas",
    href: "/journal/cozy-living-room-ideas",
    image: cozyLivingImage,
    imageAlt:
      "A softly lit living room styled with linen upholstery, textured throws and quiet decorative objects.",
    category: "Home Finds",
    excerpt:
      "Soft textures, warm neutrals and a few quietly considered pieces are all it takes to turn a living room into a place you actually want to linger.",
    date: "2026-07-05",
    readTime: "6 min read",
    featured: true,
  },
  {
    title: "Creating the Perfect Reading Corner at Home",
    slug: "reading-corner",
    href: "/journal/reading-corner",
    image: readingCornerImage,
    imageAlt:
      "A calm reading nook by a window with a linen armchair, a stack of books and a small ceramic lamp.",
    category: "Lifestyle",
    excerpt:
      "A well-loved chair, the right lamp and a small table for tea — a reading corner doesn't need much, only the intention to slow down.",
    date: "2026-06-28",
    readTime: "7 min read",
    featured: true,
  },
  {
    title: "Five Elegant Perfumes That Feel Soft and Feminine",
    slug: "elegant-perfumes",
    href: "/journal/elegant-perfumes",
    image: perfumeImage,
    imageAlt:
      "A trio of glass perfume bottles arranged on a cream marble surface with a folded silk ribbon.",
    category: "Beauty",
    excerpt:
      "Perfumes that feel like a private ritual — soft florals, warm musks and quiet trails that linger without ever asking for attention.",
    date: "2026-06-20",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "The Most Beautiful Cafés in Paris Worth Visiting",
    slug: "paris-cafes",
    href: "/journal/paris-cafes",
    image: parisCafeImage,
    imageAlt:
      "A quiet Parisian café interior with marble tables, café-au-lait cups and a small vase of fresh flowers.",
    category: "Travel",
    excerpt:
      "A slow morning in Paris begins with a good café — here are the ones worth crossing an arrondissement (or an ocean) for.",
    date: "2026-06-12",
    readTime: "6 min read",
  },
  {
    title: "Thoughtful Gift Ideas They'll Actually Use",
    slug: "thoughtful-gifts",
    href: "/journal/thoughtful-gifts",
    image: giftIdeasImage,
    imageAlt:
      "A collection of small wrapped gifts tied with silk ribbon on a pale linen backdrop.",
    category: "Gift Guides",
    excerpt:
      "Gifts that feel considered, not performative — small, useful, beautiful objects that quietly become part of someone's everyday.",
    date: "2026-06-04",
    readTime: "5 min read",
  },
  {
    title: "How to Make Your Home Feel Like Autumn",
    slug: "autumn-home",
    href: "/journal/autumn-home",
    image: autumnHomeImage,
    imageAlt:
      "A warm autumn still life with amber candles, a wool throw and foraged branches in a stoneware vase.",
    category: "Seasonal",
    excerpt:
      "Warm light, wool textures and the smallest touches of seasonal foraging — small shifts that quietly usher autumn into every room.",
    date: "2026-05-27",
    readTime: "6 min read",
  },
];

export default posts;
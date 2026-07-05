/**
 * categories.ts
 * ---------------------------------------------------------
 * The Wisteria Moonlight — temporary editorial category data.
 *
 * This module exports the sample set of categories consumed by
 * CategoryGrid / CategoryCard on the homepage and category
 * browser pages.
 *
 * Temporary seed data.
 *
 * Used during the initial build before Astro Content Collections
 * are introduced. Once editorial content is stored in
 * src/content/, categories will be derived from the post
 * collection rather than maintained separately.
 *
 * Consumers should import the default export and pass it directly
 * to the CategoryGrid `categories` prop.
 */

import type { ImageMetadata } from "astro";

import homeFindsImage from "../assets/images/categories/home-finds.jpg";
import beautyImage from "../assets/images/categories/beauty.jpg";
import travelImage from "../assets/images/categories/travel.jpg";
import giftGuidesImage from "../assets/images/categories/gift-guides.jpg";
import lifestyleImage from "../assets/images/categories/lifestyle.jpg";
import seasonalImage from "../assets/images/categories/seasonal.jpg";

export interface Category {
  title: string;
  href: string;
  image: ImageMetadata;
  imageAlt: string;
  description?: string;
}

const categories: Category[] = [
  {
    title: "Home Finds",
    href: "/home-finds",
    image: homeFindsImage,
    imageAlt:
      "A calm, sunlit corner styled with linen textiles and quiet objects for the home.",
    description: "Beautiful pieces for calm and intentional living.",
  },
  {
    title: "Beauty",
    href: "/beauty",
    image: beautyImage,
    imageAlt:
      "A soft flat lay of skincare bottles and a folded muslin cloth on a cream surface.",
    description: "Skincare, fragrance and timeless rituals.",
  },
  {
    title: "Travel",
    href: "/travel",
    image: travelImage,
    imageAlt:
      "A quiet boutique hotel window overlooking a hazy morning landscape.",
    description: "Slow escapes, boutique stays and dreamy destinations.",
  },
  {
    title: "Gift Guides",
    href: "/gift-guides",
    image: giftGuidesImage,
    imageAlt:
      "A carefully wrapped gift tied with silk ribbon on a pale linen backdrop.",
    description: "Thoughtful gifts for every season and celebration.",
  },
  {
    title: "Lifestyle",
    href: "/lifestyle",
    image: lifestyleImage,
    imageAlt:
      "An open journal, a ceramic mug and a sprig of dried lavender on a wooden desk.",
    description: "Daily rituals, organization and mindful living.",
  },
  {
    title: "Seasonal",
    href: "/seasonal",
    image: seasonalImage,
    imageAlt:
      "A softly lit seasonal still life with foraged branches in a stoneware vase.",
    description: "Curated inspiration throughout the year.",
  },
];

export default categories;
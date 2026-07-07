/**
 * categoryMetadata.ts
 * ---------------------------------------------------------
 * The Wisteria Moonlight — editorial category metadata.
 *
 * *** This file is the single editorial source of truth for
 * every category on the site. *** Adding, renaming, reordering,
 * hiding, or reshuffling where a category appears should require
 * editing ONLY this file — no page, component, or route file
 * should need to change to support a new or updated category.
 *
 * Routing:
 *   URLs are DERIVED, never stored. A category's page always
 *   lives at `/category/${slug}` (see src/pages/category/[slug].astro),
 *   which independently derives its own routes from the `articles`
 *   Content Collection at build time. This file does not decide
 *   which categories get a page — it decides how a category is
 *   labeled, described, and where it's surfaced (navigation,
 *   homepage, and future consumers).
 *
 * Fields:
 *   slug              - URL segment. A link to this category is
 *                        always built as `/category/${slug}` —
 *                        never store a full href.
 *   title             - Full editorial display name (page headings, cards).
 *   description       - Short editorial blurb shown on category cards.
 *   navigationLabel   - Label to show in nav UI, when shown — kept
 *                        separate from `title` in case a shorter
 *                        label is ever needed for nav space.
 *   showInNavigation  - Whether this category should appear in
 *                        primary/footer navigation.
 *   showOnHomepage    - Whether this category should appear in the
 *                        homepage CategoryGrid.
 *   order             - Sort priority (ascending) wherever categories
 *                        are listed.
 *
 * Intentionally NOT included yet:
 *   - SEO metadata (meta description, OG image, etc.)
 *   - Dedicated hero images beyond the existing card image below
 *
 * Note: `image` / `imageAlt` are the existing category card
 * artwork, carried over unchanged from the previous
 * src/data/categories.ts (this file replaces it).
 *
 * Note on `showInNavigation` / `navigationLabel`: these fields
 * describe intent only. The primary nav (Navigation.astro) and
 * footer nav (Footer.astro) are still hardcoded and do not yet
 * read from this file — wiring them up is a future refactor.
 */

import type { ImageMetadata } from "astro";

import homeFindsImage from "../assets/images/categories/home-finds.jpg";
import beautyImage from "../assets/images/categories/beauty.jpg";
import travelImage from "../assets/images/categories/travel.jpg";
import giftGuidesImage from "../assets/images/categories/gift-guides.jpg";
import lifestyleImage from "../assets/images/categories/lifestyle.jpg";
import seasonalImage from "../assets/images/categories/seasonal.jpg";

export interface CategoryMetadata {
  slug: string;
  title: string;
  description: string;
  navigationLabel: string;
  showInNavigation: boolean;
  showOnHomepage: boolean;
  order: number;

  image: ImageMetadata;
  imageAlt: string;
}

const categoryMetadata: CategoryMetadata[] = [
  {
    slug: "home-finds",
    title: "Home Finds",
    description: "Beautiful pieces for calm and intentional living.",
    navigationLabel: "Home Finds",
    showInNavigation: true,
    showOnHomepage: true,
    order: 1,
    image: homeFindsImage,
    imageAlt:
      "A calm, sunlit corner styled with linen textiles and quiet objects for the home.",
  },
  {
    slug: "beauty",
    title: "Beauty",
    description: "Skincare, fragrance and timeless rituals.",
    navigationLabel: "Beauty",
    showInNavigation: true,
    showOnHomepage: true,
    order: 2,
    image: beautyImage,
    imageAlt:
      "A soft flat lay of skincare bottles and a folded muslin cloth on a cream surface.",
  },
  {
    slug: "travel",
    title: "Travel",
    description: "Slow escapes, boutique stays and dreamy destinations.",
    navigationLabel: "Travel",
    showInNavigation: true,
    showOnHomepage: true,
    order: 3,
    image: travelImage,
    imageAlt:
      "A quiet boutique hotel window overlooking a hazy morning landscape.",
  },
  {
    slug: "gift-guides",
    title: "Gift Guides",
    description: "Thoughtful gifts for every season and celebration.",
    navigationLabel: "Gift Guides",
    showInNavigation: true,
    showOnHomepage: true,
    order: 4,
    image: giftGuidesImage,
    imageAlt:
      "A carefully wrapped gift tied with silk ribbon on a pale linen backdrop.",
  },
  {
    slug: "lifestyle",
    title: "Lifestyle",
    description: "Daily rituals, organization and mindful living.",
    navigationLabel: "Lifestyle",
    showInNavigation: false,
    showOnHomepage: true,
    order: 5,
    image: lifestyleImage,
    imageAlt:
      "An open journal, a ceramic mug and a sprig of dried lavender on a wooden desk.",
  },
  {
    slug: "seasonal",
    title: "Seasonal",
    description: "Curated inspiration throughout the year.",
    navigationLabel: "Seasonal",
    showInNavigation: false,
    showOnHomepage: true,
    order: 6,
    image: seasonalImage,
    imageAlt:
      "A softly lit seasonal still life with foraged branches in a stoneware vase.",
  },
];

export default categoryMetadata;
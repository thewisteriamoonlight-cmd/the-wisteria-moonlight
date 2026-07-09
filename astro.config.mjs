import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// Phase 4.5: Astro's official sitemap integration.
// It listens to the build output (every page Astro generates) and writes
// sitemap-index.xml + sitemap-0.xml automatically — no page or layout
// changes required, and no manual URL list to maintain.
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thewisteriamoonlight.com',

 integrations: [
  sitemap({
    // Exclude internal development pages from the production sitemap.
    filter: (page) => !page.endsWith("/design-system/"),
  }),
],
  vite: {
    plugins: [tailwindcss()],
  },
});

import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE, absoluteUrl } from "../data/siteMetadata";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = async () => {
  const articles = await getCollection("articles");
  const sortedArticles = [...articles].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const items = sortedArticles
    .map((article) => {
      const url = absoluteUrl(`/journal/${article.id}`);
      const updatedDate = article.data.updatedDate ?? article.data.date;

      return `
        <item>
          <title>${escapeXml(article.data.title)}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <description>${escapeXml(article.data.excerpt)}</description>
          <category>${escapeXml(article.data.category)}</category>
          <dc:creator>${escapeXml(article.data.author ?? SITE.defaultAuthor)}</dc:creator>
          <pubDate>${article.data.date.toUTCString()}</pubDate>
          <dc:date>${updatedDate.toISOString()}</dc:date>
        </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
      <channel>
        <title>${escapeXml(SITE.name)}</title>
        <link>${SITE.url}</link>
        <atom:link href="${absoluteUrl(SITE.rssPath)}" rel="self" type="application/rss+xml" />
        <description>${escapeXml(SITE.description)}</description>
        <language>${SITE.language}</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml.trim(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
};

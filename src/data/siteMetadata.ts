export const SITE = {
  name: "The Wisteria Moonlight",
  url: "https://thewisteriamoonlight.com",
  description:
    "A premium editorial lifestyle publication for thoughtful homes, quiet routines, meaningful gifts, timeless style, and slow discoveries.",
  locale: "en_US",
  language: "en",
  defaultAuthor: "The Wisteria Moonlight Editors",
  rssPath: "/rss.xml",
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE.url).toString();
}

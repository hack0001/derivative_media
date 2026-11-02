import type { MetadataRoute } from "next";

// Open to search engines and to the crawlers AI search tools use to find and cite pages.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/api/" },
      { userAgent: ["Googlebot", "Bingbot", "Applebot", "DuckDuckBot"], allow: "/", disallow: "/api/" },
      { userAgent: ["OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "Perplexity-User", "Claude-SearchBot", "Claude-User"], allow: "/", disallow: "/api/" },
    ],
    sitemap: "https://derivativemedia.co.uk/sitemap.xml",
    host: "https://derivativemedia.co.uk",
  };
}

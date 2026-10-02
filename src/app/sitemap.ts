import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { newsPosts, newsPath } from "@/lib/news";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${SITE_URL}/features`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/news`, changeFrequency: "weekly", priority: 0.7 },
    ...newsPosts.map(post => ({
      url: `${SITE_URL}${newsPath(post.slug)}`,
      lastModified: new Date(`${post.publishedAt}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

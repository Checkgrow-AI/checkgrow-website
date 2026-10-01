import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { tutorials, tutorialPath } from "@/lib/tutorials";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${SITE_URL}/features`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/tutorials`, changeFrequency: "weekly", priority: 0.7 },
    ...tutorials.map(tutorial => ({
      url: `${SITE_URL}${tutorialPath(tutorial.slug)}`,
      lastModified: new Date(`${tutorial.publishedAt}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

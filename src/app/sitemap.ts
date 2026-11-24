import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { buildNewsPosts, newsPath } from "@/lib/news";
import { localizeUseCases, pathToUseCase } from "@/lib/useCases";
import { languageAlternates, localePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/* Every page in every language. Each entry lists all its translations
   (hreflang, plus x-default = English), so search engines pair them. Slugs
   and dates are the same in every language. */

type Page = { path: string; lastModified?: Date; changeFrequency: "weekly" | "monthly"; priority: number };

const absolute = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const en = getDictionary("en");
  const newsPosts = buildNewsPosts(en);
  const useCases = localizeUseCases(en.useCases.items);
  const pages: Page[] = [
    { path: "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { path: "/features", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
    { path: "/sales", changeFrequency: "monthly", priority: 0.9 },
    { path: "/faq", changeFrequency: "monthly", priority: 0.8 },
    { path: "/book-a-demo", changeFrequency: "monthly", priority: 0.8 },
    { path: "/news", changeFrequency: "weekly", priority: 0.7 },
    { path: "/use-cases", changeFrequency: "monthly", priority: 0.8 },
    ...useCases.map((item) => ({
      path: pathToUseCase(item.slug),
      lastModified: new Date(`${item.updatedAt}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...newsPosts.map((post) => ({
      path: newsPath(post.slug),
      lastModified: new Date(`${post.publishedAt}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return pages.flatMap(({ path, ...rest }) => {
    const languages = Object.fromEntries(Object.entries(languageAlternates(path)).map(([tag, p]) => [tag, absolute(p)]));
    return locales.map((lang) => ({ url: absolute(localePath(lang, path)), ...rest, alternates: { languages } }));
  });
}

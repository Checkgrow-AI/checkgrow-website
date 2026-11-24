import { publishedStories, type SuccessStory } from "./successStories.ts";
import type { Tutorial } from "./tutorials.ts";
import { type NewsFilter } from "./newsCategories.ts";

export * from "./newsCategories.ts";
export type NewsPost = {
  slug: string;
  title: string;
  description: string;
  category: Exclude<NewsFilter, "all">;
  publishedAt: string;
  cover: string;
  /* logo artwork: shown whole on white instead of cropped */
  coverFit?: "contain";
  social: string;
};

export type SecuritySection = {
  id: string;
  title: string;
  shortTitle: string;
  introduction: string;
  changes: readonly { label: string; detail: string }[];
  table?: {
    caption: string;
    columns: readonly [string, string];
    rows: readonly (readonly [string, string])[];
  };
  note?: string;
};

/* what a language's dictionary provides for News */
export type NewsCopy = {
  categoryLabels: Record<NewsFilter, string>;
  readLink: Record<Exclude<NewsFilter, "all">, string>;
  security: { title: string; description: string; sections: readonly SecuritySection[] };
};

/* the security release article: everything but its words */
export const SECURITY_SLUG = "security-update-october-2026";
const securityMeta = {
  slug: SECURITY_SLUG,
  category: "security-releases" as const,
  publishedAt: "2026-10-02",
  cover: "/features/backgrounds/13-brand-indigo-bloom.webp",
  social: "/features/backgrounds/13-brand-indigo-bloom.webp",
};

/* every News post in one language, newest first */
export function buildNewsPosts(copy: { news: NewsCopy; stories: { items: readonly SuccessStory[] }; tutorials: { items: readonly Tutorial[] } }): NewsPost[] {
  return [
    { ...securityMeta, title: copy.news.security.title, description: copy.news.security.description },
    ...publishedStories(copy.stories.items).map(story => ({
      slug: story.slug, title: story.title, description: story.description,
      category: "success-stories" as const, publishedAt: story.publishedAt,
      cover: story.hero.src, coverFit: story.coverFit, social: story.hero.src,
    })),
    ...copy.tutorials.items.map(tutorial => ({
      slug: tutorial.slug, title: tutorial.title, description: tutorial.description,
      category: "tutorials" as const, publishedAt: tutorial.publishedAt,
      cover: tutorial.cover, social: `/tutorials/${tutorial.slug}/social.webp`,
    })),
  ].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export const findNewsPost = (posts: readonly NewsPost[], slug: string) => posts.find(post => post.slug === slug);
export const newsPath = (slug: string) => `/news/${slug}`;
export const filterNews = (posts: NewsPost[], category: NewsFilter) => category === "all" ? posts : posts.filter(post => post.category === category);

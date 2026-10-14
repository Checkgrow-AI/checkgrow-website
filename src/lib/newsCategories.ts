/* News categories and their URL, kept apart from the article data so
   light links (homepage CTA, footer) do not pull every article into the
   client bundle. */

export const newsCategories = [
  { id: "all", label: "All news" },
  { id: "success-stories", label: "Success Stories" },
  { id: "tutorials", label: "Tutorials" },
  { id: "security-releases", label: "Security Releases" },
] as const;

export type NewsFilter = typeof newsCategories[number]["id"];

/* The selected category lives in its own query key, so a shared or landed
   URL opens on it (/news?category=success-stories). Only this key is ever
   read or written; utm_* and ad click ids in the same URL are left alone. */
export const NEWS_CATEGORY_PARAM = "category";
export const isNewsFilter = (value: string | null | undefined): value is NewsFilter =>
  newsCategories.some(category => category.id === value);
export const newsCategoryHref = (id: NewsFilter) =>
  id === "all" ? "/news" : `/news?${NEWS_CATEGORY_PARAM}=${id}`;

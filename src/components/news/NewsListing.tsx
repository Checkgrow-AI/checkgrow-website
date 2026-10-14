"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  newsCategories,
  newsPath,
  categoryLabel,
  filterNews,
  isNewsFilter,
  readLinkLabel,
  NEWS_CATEGORY_PARAM,
  type NewsFilter,
  type NewsPost,
} from "@/lib/news";
import { tutorialDate } from "@/lib/tutorials";
import styles from "@/components/tutorials/Tutorials.module.css";
import newsStyles from "./News.module.css";

/* The category comes from ?category= so a link can land on it. Choosing a
   filter rewrites only that key (replaceState, no reload, no new history
   entry); every other query value, such as utm_* or gclid, and the hash
   stay exactly as they were. Unknown values fall back to all news. */
function selectCategory(id: NewsFilter) {
  const url = new URL(window.location.href);
  if (id === "all") url.searchParams.delete(NEWS_CATEGORY_PARAM);
  else url.searchParams.set(NEWS_CATEGORY_PARAM, id);
  window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
}

export function NewsListing({ posts }: { posts: NewsPost[] }) {
  const requested = useSearchParams().get(NEWS_CATEGORY_PARAM);
  const category: NewsFilter = isNewsFilter(requested) ? requested : "all";
  return <NewsGrid posts={posts} category={category} onSelect={selectCategory} />;
}

/* Rendered on the server with "all" (the Suspense fallback), then by
   NewsListing once the URL is known. */
export function NewsGrid({
  posts,
  category,
  onSelect,
}: {
  posts: NewsPost[];
  category: NewsFilter;
  onSelect?: (id: NewsFilter) => void;
}) {
  const visiblePosts = filterNews(posts, category);
  return (
    <section aria-labelledby="news-list-title">
      <div className={newsStyles.filterBar}>
        <div className={newsStyles.filters} role="group" aria-label="Filter news by category">
          {newsCategories.map(item => (
            <button key={item.id} type="button" aria-pressed={category === item.id} aria-controls="news-results" onClick={() => onSelect?.(item.id)}>{item.label}</button>
          ))}
        </div>
        <p className={newsStyles.resultCount} role="status" aria-atomic="true">{visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"}</p>
      </div>
      <h2 id="news-list-title" className="sr-only">{categoryLabel(category)}</h2>
      <div id="news-results" className={styles.grid}>
        {visiblePosts.map((post, index) => (
          <article key={post.slug}>
            <Link href={newsPath(post.slug)} className={styles.card}>
              <div className={post.coverFit === "contain" ? `${styles.cover} ${newsStyles.coverContain}` : styles.cover}>
                <Image src={post.cover} alt="" fill loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 400px" />
              </div>
              <h3>{post.title}</h3>
              <div className={styles.meta}><strong>{categoryLabel(post.category)}</strong><time dateTime={post.publishedAt}>{tutorialDate(post.publishedAt)}</time></div>
              <p className={styles.cardDescription}>{post.description}</p>
              <span className={styles.readLink}>{readLinkLabel[post.category]} <span aria-hidden>↗</span></span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

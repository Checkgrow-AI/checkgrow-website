"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newsCategories, newsPath, categoryLabel, filterNews, type NewsFilter, type NewsPost } from "@/lib/news";
import { tutorialDate } from "@/lib/tutorials";
import styles from "@/components/tutorials/Tutorials.module.css";
import newsStyles from "./News.module.css";

export function NewsListing({ posts }: { posts: NewsPost[] }) {
  const [category, setCategory] = useState<NewsFilter>("all");
  const visiblePosts = filterNews(posts, category);
  return (
    <section aria-labelledby="news-list-title">
      <div className={newsStyles.filterBar}>
        <div className={newsStyles.filters} role="group" aria-label="Filter news by category">
          {newsCategories.map(item => (
            <button key={item.id} type="button" aria-pressed={category === item.id} aria-controls="news-results" onClick={() => setCategory(item.id)}>{item.label}</button>
          ))}
        </div>
        <p className={newsStyles.resultCount} role="status" aria-atomic="true">{visiblePosts.length} {visiblePosts.length === 1 ? "article" : "articles"}</p>
      </div>
      <h2 id="news-list-title" className="sr-only">{categoryLabel(category)}</h2>
      <div id="news-results" className={styles.grid}>
        {visiblePosts.map((post, index) => (
          <article key={post.slug}>
            <Link href={newsPath(post.slug)} className={styles.card}>
              <div className={styles.cover}>
                <Image src={post.cover} alt="" fill loading={index === 0 ? "eager" : "lazy"} sizes="(max-width: 479px) 100vw, (max-width: 1023px) 50vw, 400px" />
              </div>
              <h3>{post.title}</h3>
              <div className={styles.meta}><strong>{categoryLabel(post.category)}</strong><time dateTime={post.publishedAt}>{tutorialDate(post.publishedAt)}</time></div>
              <p className={styles.cardDescription}>{post.description}</p>
              <span className={styles.readLink}>{post.category === "tutorials" ? "Watch tutorial" : "Read security update"} <span aria-hidden>↗</span></span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

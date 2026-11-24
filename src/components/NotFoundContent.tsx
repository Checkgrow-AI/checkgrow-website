"use client";

import { LocalLink, useT } from "@/i18n/client";

export function NotFoundContent() {
  const t = useT("common").notFound;
  return (
    <main className="wrap min-h-[65svh] pb-24 pt-40">
      <p className="text-label text-muted">404</p>
      <h1 className="text-h1 mt-6">{t.title}</h1>
      <p className="mt-6 max-w-xl text-lg text-muted">{t.body}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LocalLink href="/" className="inline-flex min-h-12 items-center rounded-full bg-foreground px-7 text-canvas transition-colors duration-200 hover:bg-accent">
          {t.home}
        </LocalLink>
        <LocalLink href="/news" className="inline-flex min-h-12 items-center rounded-full px-6 text-muted ring-1 ring-line transition-colors duration-200 hover:text-foreground">
          {t.browseNews}
        </LocalLink>
      </div>
    </main>
  );
}

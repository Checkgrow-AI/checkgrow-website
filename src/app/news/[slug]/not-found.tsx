import Link from "next/link";

export default function NewsNotFound() {
  return (
    <div className="wrap min-h-[65svh] pb-24 pt-40">
      <h1 className="text-h1">Article not found</h1>
      <p className="mt-6 text-lg text-muted">This article is not available. Browse News for our latest guides and updates.</p>
      <Link href="/news" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-foreground px-7 text-canvas">Browse News</Link>
    </div>
  );
}

import Link from "next/link";

export default function TutorialNotFound() {
  return (
    <div className="wrap min-h-[65svh] pb-24 pt-40">
      <h1 className="text-h1">Tutorial not found</h1>
      <p className="mt-6 text-lg text-muted">This guide is not available. Browse the tutorials to find your next workflow.</p>
      <Link href="/tutorials" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-foreground px-7 text-canvas">Browse tutorials</Link>
    </div>
  );
}

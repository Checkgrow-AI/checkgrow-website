"use client";

import { useT } from "@/i18n/client";

export function SkipLink({ target }: { target: string }) {
  const t = useT("common");
  return (
    <a href={`#${target}`} className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-card focus:bg-foreground focus:px-5 focus:py-3 focus:text-canvas">
      {t.skipToContent}
    </a>
  );
}

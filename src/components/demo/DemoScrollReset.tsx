"use client";

import { useLayoutEffect } from "react";

/* Next's automatic scroll handling can preserve an existing position.
   Every arrival at the booking page should start with its heading, regardless
   of which CTA or router.push brought the visitor here. Keep form-step
   scrolling and the scroll restoration of all other pages untouched. */
export function DemoScrollReset() {
  useLayoutEffect(() => {
    let frame = 0;
    const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const reset = () => {
      cancelAnimationFrame(frame);
      toTop();
      // Reassert once after the router finishes its own layout/scroll pass.
      // No ongoing scroll listener: visitors can then browse the page freely.
      frame = requestAnimationFrame(toTop);
    };
    reset();

    // A same-page CTA does not remount this layout. Honour ordinary clicks,
    // but leave new-tab/download actions and intentional hash links alone.
    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const target = new URL(link.href, window.location.href);
      if (target.origin === window.location.origin && target.pathname.replace(/\/$/, "") === "/book-a-demo" && !target.hash) reset();
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}

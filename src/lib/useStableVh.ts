"use client";

import { useEffect, useRef, useState } from "react";

/* Viewport height that ignores mobile browser-chrome churn. Phones and
   in-app browsers (Instagram, Safari with its toolbar) fire resize events
   with small height deltas while the user scrolls; anything sized or
   scrubbed off the live innerHeight then shifts mid-scroll and the page
   visibly jumps. Only touch devices ignore small height changes; desktop
   window resizing must always update the available content area. */
export function useStableVh() {
  const [vh, setVh] = useState(0);
  const vhRef = useRef(0);

  useEffect(() => {
    let w = window.innerWidth;
    const apply = () => {
      vhRef.current = window.innerHeight;
      setVh(window.innerHeight);
    };
    apply();
    const onResize = () => {
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      const mobileChrome = window.matchMedia("(pointer: coarse)").matches;
      if (!mobileChrome || nw !== w || Math.abs(nh - vhRef.current) > 150) {
        w = nw;
        apply();
      }
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, []);

  return { vh, vhRef };
}

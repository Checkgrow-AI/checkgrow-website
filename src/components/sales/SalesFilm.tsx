"use client";

/* The Sales hero film: a narrated walkthrough of Checkgrow Sales.
   It previews muted on a loop while it is on screen (paused off screen,
   and never autoplayed under prefers-reduced-motion). Because the
   voice-over carries the demo, "Watch with sound" restarts it from the
   beginning with audio and native controls, so visitors can scrub
   through the full three minutes. React does not render the muted
   attribute into SSR HTML, so muted is forced before any play(). */

import { useEffect, useRef, useState } from "react";
import { SALES_FILM } from "@/lib/salesFilm";

export function SalesFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [watching, setWatching] = useState(false);
  const watchingRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const io = new IntersectionObserver(([entry]) => {
      if (watchingRef.current) return; // the visitor is in charge once they choose sound
      if (entry.isIntersecting) video.play().catch(() => {});
      else video.pause();
    });
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const watchWithSound = () => {
    const video = videoRef.current;
    if (!video) return;
    watchingRef.current = true;
    setWatching(true);
    video.loop = false;
    video.currentTime = 0;
    video.muted = false;
    video.volume = 1;
    video.play().catch(() => {
      /* a browser that still refuses sound gets the muted film plus controls */
      video.muted = true;
      video.play().catch(() => {});
    });
  };

  return (
    <div className="relative overflow-hidden rounded-card bg-raised shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
      <video
        ref={videoRef}
        src={SALES_FILM.src}
        poster={SALES_FILM.poster}
        muted
        loop
        playsInline
        preload="metadata"
        controls={watching}
        width={1920}
        height={1080}
        className="block aspect-video h-auto w-full bg-raised"
        aria-label="Checkgrow Sales walkthrough"
      />
      {!watching && (
        <button
          type="button"
          onClick={watchWithSound}
          className="group absolute inset-0 flex items-end justify-center p-4 sm:items-center"
          aria-label="Watch the Checkgrow Sales walkthrough with sound"
        >
          <span className="inline-flex min-h-12 items-center gap-3 whitespace-nowrap rounded-full bg-canvas/85 py-2 pl-2 pr-5 text-sm font-medium text-foreground shadow-raised ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-200 group-hover:bg-foreground group-hover:text-canvas sm:text-base">
            <span className="flex size-9 items-center justify-center rounded-full bg-foreground text-canvas transition-colors duration-200 group-hover:bg-canvas group-hover:text-foreground" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4.5v15l12.5-7.5L7 4.5z" />
              </svg>
            </span>
            Watch with sound
            <span className="text-muted transition-colors duration-200 group-hover:text-canvas/70">3 min</span>
          </span>
        </button>
      )}
    </div>
  );
}

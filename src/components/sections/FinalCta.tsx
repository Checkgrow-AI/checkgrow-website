"use client";

/* The closing waitlist section. Its content (logo, heading, sub, form)
   staggers in whenever the reader arrives: on first scroll into view and
   again every time a "Join the waitlist" link brings them here, so the
   anchor jump never feels like a hard cut. The form itself is never
   remounted, so anything typed survives a replay. */

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WaitlistForm } from "@/components/WaitlistForm";

export function FinalCta() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;

    const play = () => {
      el.classList.remove("cta-arrive");
      void el.offsetWidth; // restart the keyframes
      el.classList.add("cta-arrive");
    };

    /* first organic arrival by scroll */
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);

    /* every waitlist CTA replays the entrance once the section is
       actually on screen (the smooth scroll needs a moment) */
    const onClick = (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (!target?.closest?.('a[href="#waitlist"]')) return;
      const t0 = performance.now();
      const poll = () => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.75 || performance.now() - t0 > 1600) {
          play();
        } else {
          requestAnimationFrame(poll);
        }
      };
      requestAnimationFrame(poll);
    };
    document.addEventListener("click", onClick);

    return () => {
      io.disconnect();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <section className="bg-ink py-24 text-cream md:py-32" id="waitlist">
      <div className="wrap">
        <div ref={boxRef} className="cta-box flex flex-col items-center text-center">
          <Image
            src="/brand/logos/symbol-transparent-light.svg"
            alt="Checkgrow growth marketing platform logo"
            width={56}
            height={56}
            className="mx-auto"
          />
          <h2 className="text-h1 mx-auto mt-8 max-w-2xl text-balance">
            Products are easy to build now. Checkgrow makes them easier to
            sell.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-tint/90">
            Join the waitlist and be first in when new workspaces open, with
            an onboarding session to set up your knowledge base.
          </p>
          <div className="mt-10 flex w-full justify-center">
            <WaitlistForm id="footer" tone="ink" />
          </div>
        </div>
      </div>
    </section>
  );
}

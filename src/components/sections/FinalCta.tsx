"use client";

/* The closing call to action: Book a demo. Its content (logo, heading,
   sub, button) staggers in the first time the reader scrolls it into
   view. The section keeps the id "waitlist" so the nav progress and the
   mobile scroll rail still end here. The early-access form
   (WaitlistForm) is hidden for now, not deleted. */

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function FinalCta() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("cta-arrive");
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-surface py-24 text-foreground md:py-32" id="waitlist">
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
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Book a 30-minute demo on your own company, competitors and
            website. Leave with Checkgrow set up and a clear plan for what to
            do next.
          </p>
          <div className="mt-10 flex w-full justify-center">
            <Link
              href="/book-a-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-foreground px-8 text-base font-medium text-canvas transition-colors duration-200 hover:bg-accent max-sm:w-full"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

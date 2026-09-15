"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { faqItems } from "@/lib/seo";

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32" id="faq">
      <div className="wrap grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="text-label flex items-center gap-2.5 text-muted">
            <span className="dot-marker" aria-hidden />
            Questions
          </p>
          <h2 className="text-h2 mt-6">Before you join</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {faqItems.map((f, i) => {
              const open = openIdx === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    className="flex min-h-14 w-full items-center justify-between gap-6 py-4 text-left text-base font-medium"
                  >
                    {f.q}
                    <span
                      aria-hidden
                      className={`text-xl text-muted transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                  {open && (
                    <p className="pb-5 leading-relaxed text-muted">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

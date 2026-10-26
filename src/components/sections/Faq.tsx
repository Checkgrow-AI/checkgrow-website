import { Reveal } from "@/components/Reveal";
import { faqItems } from "@/lib/seo";

/* Native <details> accordion: every answer is in the HTML (readable by
   search engines, AI crawlers and browsers without JavaScript), and the
   shared name keeps one question open at a time. */
export function Faq() {
  return (
    <section className="py-24 md:py-32" id="faq">
      <div className="wrap grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="text-label flex items-center gap-2.5 text-muted">
            Questions
          </p>
          <h2 className="text-h2 mt-6">Before you join</h2>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-col divide-y divide-line border-y border-line">
            {faqItems.map((f, i) => (
              <details key={f.q} name="faq" open={i === 0} className="group">
                <summary className="flex min-h-14 w-full cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-medium [&::-webkit-details-marker]:hidden">
                  <h3>{f.q}</h3>
                  <span
                    aria-hidden
                    className="text-xl text-muted transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

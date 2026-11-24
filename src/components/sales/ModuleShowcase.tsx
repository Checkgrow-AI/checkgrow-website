"use client";

import { useEffect, useRef, useState } from "react";
import type { SalesModule } from "@/lib/sales";
import { useT } from "@/i18n/client";
import { fmt } from "@/i18n/format";
import { SalesMockup } from "./SalesMockup";
import { salesMockups } from "./salesMockups.generated";

/* One Sales module, laid out like a product page: the animated screen on
   one side, and on the other the module's headline, intro and its three
   functions, stretched to the screen's exact height (headline at the top,
   functions at the bottom). The active function advances when its screen
   finishes a loop, shown by the bar beside it; choosing one stops the
   auto-advance. Every function's copy and screen is in the HTML; inactive
   screens are hidden, so a shown screen starts from its first frame. */
export function ModuleShowcase({ module }: { module: SalesModule }) {
  const { functionsLabel } = useT("sales");
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const loop = salesMockups[module.functions[active].mockup].loop;
  const running = auto && inView;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setActive((i) => (i + 1) % module.functions.length), loop * 1000);
    return () => window.clearTimeout(t);
  }, [active, running, loop, module.functions.length]);

  return (
    <div ref={ref} className="grid items-stretch gap-10 xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] xl:gap-20">
      <div className="mx-auto w-full max-w-2xl xl:order-1 xl:max-w-none">
        {module.functions.map((fn, i) => (
          <div key={fn.mockup} id={`${fn.mockup}-panel`} role="tabpanel" aria-labelledby={`${fn.mockup}-tab`} hidden={active !== i}>
            <SalesMockup id={fn.mockup} label={fn.screen} className="ring-1 ring-line" />
            {fn.note && <p className="mt-3 text-xs text-muted">{fn.note}</p>}
          </div>
        ))}
      </div>

      <div className="order-first mx-auto flex w-full max-w-2xl flex-col justify-between gap-10 xl:order-2 xl:max-w-none xl:py-2">
        <div>
          <p className="text-label text-muted">{module.name}</p>
          <h2 id={`${module.id}-title`} className="mt-5 text-balance text-[clamp(1.875rem,3.3vw,3rem)] font-semibold leading-[1.02] tracking-[-0.045em]">{module.title}</h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted xl:text-lg">{module.intro}</p>
        </div>

        <div role="tablist" aria-label={fmt(functionsLabel, { module: module.name })} aria-orientation="vertical" className="flex flex-col gap-2">
          {module.functions.map((fn, i) => {
            const selected = active === i;
            return (
              <button
                key={fn.mockup}
                id={`${fn.mockup}-tab`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`${fn.mockup}-panel`}
                onClick={() => {
                  setActive(i);
                  setAuto(false);
                }}
                className="group flex gap-5 py-1.5 text-left"
              >
                {/* progress bar: fills while the screen plays */}
                <span aria-hidden className={`relative w-1 shrink-0 overflow-hidden rounded-full transition-colors ${selected ? "bg-white/15" : "bg-white/15 group-hover:bg-white/30"}`}>
                  {selected && (
                    <span
                      key={`${active}-${running}`}
                      className={`absolute inset-0 origin-top rounded-full bg-foreground ${running ? "sales-progress-y" : ""}`}
                      style={running ? { animationDuration: `${loop}s` } : undefined}
                    />
                  )}
                </span>
                <span className="min-w-0">
                  <span className={`block text-lg font-medium tracking-tight transition-colors ${selected ? "text-foreground" : "text-muted group-hover:text-foreground"}`}>
                    {fn.title}
                  </span>
                  <span className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${selected ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <span className="overflow-hidden">
                      <span className="block max-w-md pt-2 leading-relaxed text-muted">{fn.body}</span>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

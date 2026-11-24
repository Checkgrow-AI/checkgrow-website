import { Reveal } from "@/components/Reveal";
import { fmt } from "@/i18n/format";
import { getT } from "@/i18n/server";

/* Client-logo marquee: early social proof right under the hero, before
   the credibility strip and the film. Two copies of the row slide by one
   row-width (CSS .logo-marquee in globals). */

const CLIENT_LOGOS = [
  {
    src: "/client-logos-strip/witrina.svg",
    name: "Witrina",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/qubinets.svg",
    name: "Qubinets",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/wespa.svg",
    name: "WESPA",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/minka.svg",
    name: "Minka",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/woodoz.svg",
    name: "Woodoz",
    cls: "h-5 sm:h-[22px]",
  },
  {
    src: "/client-logos-strip/barner.svg",
    name: "Barner",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/drooms.svg",
    name: "Drooms",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/engasco.svg",
    name: "Engasco",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/optika-anda.svg",
    // i18n-allow: brand name
    name: "Optika Anda",
    cls: "h-10 sm:h-11",
  },
];

export function LogoMarquee() {
  const t = getT("home").logos;
  return (
    <section className="py-14 md:py-16">
      <div className="wrap">
        <Reveal>
          <p className="text-label text-center text-muted">
            {t.title}
          </p>
          <div
            className="logo-marquee mt-8"
            role="img"
            aria-label={t.label}
          >
            <div className="logo-marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                  {CLIENT_LOGOS.map((l) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={`${copy}-${l.name}`}
                      src={l.src}
                      alt={fmt(t.logoAlt, { name: l.name })}
                      className={`mx-7 w-auto object-contain ${l.cls}`}
                      style={{ filter: "brightness(0) invert(1)", opacity: 0.72 }}
                      loading="lazy"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/Reveal";

/* Client-logo marquee: early social proof right under the hero, before
   the credibility strip and the film. Two copies of the row slide by one
   row-width (CSS .logo-marquee in globals). */

const CLIENT_LOGOS = [
  {
    src: "/client-logos-strip/witrina.svg",
    name: "Witrina",
    alt: "Witrina logo, a Checkgrow growth marketing customer",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/qubinets.svg",
    name: "Qubinets",
    alt: "Qubinets logo, a Checkgrow growth marketing customer",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/wespa.svg",
    name: "WESPA",
    alt: "WESPA logo, a Checkgrow growth marketing customer",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/minka.svg",
    name: "Minka",
    alt: "Minka logo, a Checkgrow growth marketing customer",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/woodoz.svg",
    name: "Woodoz",
    alt: "Woodoz logo, a Checkgrow growth marketing customer",
    cls: "h-5 sm:h-[22px]",
  },
  {
    src: "/client-logos-strip/barner.svg",
    name: "Barner",
    alt: "Barner logo, a Checkgrow growth marketing customer",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/drooms.svg",
    name: "Drooms",
    alt: "Drooms logo, a Checkgrow growth marketing customer",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/engasco.svg",
    name: "Engasco",
    alt: "Engasco logo, a Checkgrow growth marketing customer",
    cls: "h-10 sm:h-11",
  },
  {
    src: "/client-logos-strip/optika-anda.svg",
    name: "Optika Anda",
    alt: "Optika Anda logo, a Checkgrow growth marketing customer",
    cls: "h-10 sm:h-11",
  },
];

export function LogoMarquee() {
  return (
    <section className="py-14 md:py-16">
      <div className="wrap">
        <Reveal>
          <p className="text-label text-center text-ink-soft">
            Companies growing their marketing with Checkgrow
          </p>
          <div
            className="logo-marquee mt-8"
            role="img"
            aria-label="Logos of companies using Checkgrow: Witrina, Qubinets, WESPA, Minka, Woodoz, Barner, Drooms, Engasco and Optika Anda"
          >
            <div className="logo-marquee-track">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
                  {CLIENT_LOGOS.map((l) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={`${copy}-${l.name}`}
                      src={l.src}
                      alt={l.alt}
                      className={`mx-7 w-auto object-contain ${l.cls}`}
                      style={{ filter: "brightness(0)", opacity: 0.65 }}
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

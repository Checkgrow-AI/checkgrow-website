import type { Localized } from "../../types";
import type { testimonials as source } from "../en/testimonials";

export const testimonials: Localized<typeof source> = {
  items: [
    {
      id: "salim-sayed",
      person: "Salim Sayed",
      role: "Marketingleiter",
      company: "Payroll",
      photo: "/case-studies/salim-sayed.webp",
      quote:
        "Ein durchdachtes Growth-Betriebssystem, das Marketing und Vertrieb verbindet und der Führung gleichzeitig deutlich mehr Transparenz gibt.",
    },
    {
      id: "sophia-ahrel",
      person: "Sophia Ahrel",
      role: "Gründerin",
      company: "Ahrel&Co",
      attribution: "Gründerin, Ahrel&Co · Mentorin, Brighteye Ventures",
      photo: "/case-studies/sophia-ahrel.webp",
      quote:
        "Das ist ein kompletter Go-to-Market-Tech-Stack an einem Ort. Super praktisch, weil man den Kontext und alles andere auf einer Plattform hat.",
    },
    {
      id: "amanda-bester",
      person: "Amanda Bester",
      role: "Gründerin",
      company: "Pragmattica Consulting",
      photo: "/case-studies/amanda-bester-retouched.webp",
      quote:
        "Was CheckGrow so überzeugend macht, ist, dass es Marketingstrategie, Kampagnenplanung, Umsetzung und Performance-Transparenz auf einer vernetzten Plattform zusammenbringt.",
    },
    {
      id: "witrina",
      person: "Ivo Pavlović",
      role: "Gründer & CEO",
      company: "Witrina",
      photo: "/case-studies/ivo-witrina-retouched.webp",
      logo: "/client-logos/witrina.svg",
      metrics: ["100k+ € organischer Umsatz"],
      quote:
        "Wir wollten nicht einfach noch einen Webshop bauen. Wir wollten einen kuratierten digitalen Ort, an dem Menschen gern stöbern. Checkgrow hat uns die Engine gegeben, um in großem Stil zu produzieren, ohne unsere Marke zu verlieren.",
    },
    {
      id: "wespa",
      person: "Milena Urban",
      role: "CFO",
      company: "WESPA",
      photo: "/case-studies/milena-wespa.avif",
      logo: "/client-logos/wespa.svg",
      metrics: ["3x Wachstum", "8x ROI"],
      quote:
        "Das Setup hat Minuten gedauert, und schon nach wenigen Stunden lief alles runder. Die Oberfläche ist klar, die Automatisierungen sind durchdacht, und nichts wirkt überladen. Das war ganz klar eine der klügsten Entscheidungen, die wir dieses Jahr getroffen haben.",
    },
    {
      id: "minka",
      person: "Vikram R.",
      role: "CPO",
      company: "Minka",
      photo: "/case-studies/vikram-minka-enhanced.webp",
      logo: "/client-logos/minka.svg",
      metrics: ["30+ Enterprise-SQLs"],
      quote:
        "Checkgrow hat unsere GTM-Strategie in einer technischen Nische ins Rollen gebracht. Wir haben in der Zusammenarbeit viel gelernt, von SEO bis LinkedIn-Werbung. Heute sind wir viel besser aufgestellt, um unsere Leistungen zu vermarkten.",
    },
    {
      id: "woodoz",
      person: "Petar Curic",
      role: "CEO",
      company: "Woodoz",
      photo: "/case-studies/petar-curic.jpg",
      focus: "object-[64%_22%]",
      logo: "/client-logos/woodoz.svg",
      metrics: ["400+ zahlende Nutzer"],
      quote:
        "Wir hatten die Vision und das Produkt, aber keine Growth-Engine. Checkgrow hat uns geholfen, alles zu strukturieren, von Kampagnen bis zu Inhalten. Zum ersten Mal fühlte sich unser Go-to-Market koordiniert und skalierbar an.",
    },
  ],
};

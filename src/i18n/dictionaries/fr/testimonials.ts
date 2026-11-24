import type { Localized } from "../../types";
import type { testimonials as source } from "../en/testimonials";

export const testimonials: Localized<typeof source> = {
  items: [
    {
      id: "salim-sayed",
      person: "Salim Sayed",
      role: "Directeur marketing",
      company: "Payroll",
      photo: "/case-studies/salim-sayed.webp",
      quote:
        "C’est un système d’exploitation de la croissance bien pensé, qui relie le marketing et les ventes tout en donnant à la direction une meilleure visibilité.",
    },
    {
      id: "sophia-ahrel",
      person: "Sophia Ahrel",
      role: "Fondatrice",
      company: "Ahrel&Co",
      attribution: "Fondatrice, Ahrel&Co · Mentore, Brighteye Ventures",
      photo: "/case-studies/sophia-ahrel.webp",
      quote:
        "C’est toute une stack go-to-market réunie au même endroit. C’est hyper pratique, parce qu’on a le contexte et tout le reste dans une seule plateforme.",
    },
    {
      id: "amanda-bester",
      person: "Amanda Bester",
      role: "Fondatrice",
      company: "Pragmattica Consulting",
      photo: "/case-studies/amanda-bester-retouched.webp",
      quote:
        "Ce qui rend Checkgrow si convaincant, c’est sa capacité à réunir la stratégie marketing, la planification des campagnes, l’exécution et le suivi des performances dans une seule plateforme connectée.",
    },
    {
      id: "witrina",
      person: "Ivo Pavlović",
      role: "Fondateur et CEO",
      company: "Witrina",
      photo: "/case-studies/ivo-witrina-retouched.webp",
      logo: "/client-logos/witrina.svg",
      metrics: ["+100 k€ de revenus organiques"],
      quote:
        "On ne voulait pas créer une boutique en ligne de plus. On voulait un espace numérique soigné, que les gens prennent plaisir à parcourir. Checkgrow nous a donné le moteur pour produire à grande échelle sans perdre notre marque.",
    },
    {
      id: "wespa",
      person: "Milena Urban",
      role: "CFO",
      company: "WESPA",
      photo: "/case-studies/milena-wespa.avif",
      logo: "/client-logos/wespa.svg",
      metrics: ["Croissance 3x", "ROI 8x"],
      quote:
        "La mise en place a pris quelques minutes, et en quelques heures tout tournait plus facilement. L’interface est claire, les automatisations sont bien pensées et rien n’est superflu. C’est sans doute l’une des meilleures décisions que nous ayons prises cette année.",
    },
    {
      id: "minka",
      person: "Vikram R.",
      role: "CPO",
      company: "Minka",
      photo: "/case-studies/vikram-minka-enhanced.webp",
      logo: "/client-logos/minka.svg",
      metrics: ["30+ SQL grands comptes"],
      quote:
        "Checkgrow nous a permis de lancer notre stratégie go-to-market sur un marché technique de niche. Nous avons beaucoup appris de cette collaboration, du SEO à la publicité sur LinkedIn. Nous sommes aujourd’hui bien mieux armés pour commercialiser nos services.",
    },
    {
      id: "woodoz",
      person: "Petar Curic",
      role: "CEO",
      company: "Woodoz",
      photo: "/case-studies/petar-curic.jpg",
      focus: "object-[64%_22%]",
      logo: "/client-logos/woodoz.svg",
      metrics: ["400+ utilisateurs payants"],
      quote:
        "On avait la vision et le produit, mais pas le moteur de croissance. Checkgrow nous a aidés à tout structurer, des campagnes aux contenus. Pour la première fois, notre go-to-market était coordonné et prêt à passer à l’échelle.",
    },
  ],
};

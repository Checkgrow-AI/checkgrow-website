/* Customer testimonials: the homepage slider and the markdown pages. */

export type Testimonial = {
  id: string;
  person: string;
  role: string;
  company: string;
  attribution?: string;
  photo: string;
  focus?: string;
  logo?: string;
  metrics?: string[];
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "salim-sayed",
    person: "Salim Sayed",
    role: "Marketing Director",
    company: "Payroll",
    photo: "/case-studies/salim-sayed.webp",
    quote:
      "It is a well-thought-out growth operating system that connects marketing and sales while giving leadership greater visibility.",
  },
  {
    id: "sophia-ahrel",
    person: "Sophia Ahrel",
    role: "Founder",
    company: "Ahrel&Co",
    attribution: "Founder, Ahrel&Co · Mentor, Brighteye Ventures",
    photo: "/case-studies/sophia-ahrel.webp",
    quote:
      "This is a full go-to-market tech stack in one place. It's super practical because you have context and everything in one platform.",
  },
  {
    id: "amanda-bester",
    person: "Amanda Bester",
    role: "Founder",
    company: "Pragmattica Consulting",
    photo: "/case-studies/amanda-bester-retouched.webp",
    quote:
      "What makes CheckGrow so compelling is its ability to bring marketing strategy, campaign planning, execution and performance visibility into one connected platform",
  },
  {
    id: "witrina",
    person: "Ivo Pavlović",
    role: "Founder & CEO",
    company: "Witrina",
    photo: "/case-studies/ivo-witrina-retouched.webp",
    logo: "/client-logos/witrina.svg",
    metrics: ["€100k+ Organic Revenue"],
    quote:
      "We didn't want to build just another webshop. We wanted a curated digital space people enjoy browsing. Checkgrow gave us the engine to create at scale without losing our brand.",
  },
  {
    id: "wespa",
    person: "Milena Urban",
    role: "CFO",
    company: "WESPA",
    photo: "/case-studies/milena-wespa.avif",
    logo: "/client-logos/wespa.svg",
    metrics: ["3x Growth", "8x ROI"],
    quote:
      "Setup took minutes, and within hours we were running smoother. The interface is clean, the automations are thoughtful, and nothing feels bloated. It's easily one of the smartest decisions we've made this year.",
  },
  {
    id: "minka",
    person: "Vikram R.",
    role: "CPO",
    company: "Minka",
    photo: "/case-studies/vikram-minka-enhanced.webp",
    logo: "/client-logos/minka.svg",
    metrics: ["30+ Enterprise SQLs"],
    quote:
      "Checkgrow got us started on our GTM strategy in a niche technical space. We've learned a lot from our engagement, from SEO to LinkedIn advertising. We're in a much better position to market our services now.",
  },
  {
    id: "woodoz",
    person: "Petar Curic",
    role: "CEO",
    company: "Woodoz",
    photo: "/case-studies/petar-curic.jpg",
    focus: "object-[64%_22%]",
    logo: "/client-logos/woodoz.svg",
    metrics: ["400+ Paying Users"],
    quote:
      "We had the vision and the product, but not the growth engine. Checkgrow helped us structure everything, from campaigns to content. For the first time, our go-to-market felt coordinated and scalable.",
  },
];

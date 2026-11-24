import type { Localized } from "../../types";
import type { testimonials as source } from "../en/testimonials";

export const testimonials: Localized<typeof source> = {
  items: [
    {
      id: "salim-sayed",
      person: "Salim Sayed",
      role: "Diretor de Marketing",
      company: "Payroll",
      photo: "/case-studies/salim-sayed.webp",
      quote:
        "É um sistema operacional de growth muito bem pensado, que conecta marketing e vendas e ainda dá mais visibilidade para a liderança.",
    },
    {
      id: "sophia-ahrel",
      person: "Sophia Ahrel",
      role: "Fundadora",
      company: "Ahrel&Co",
      attribution: "Fundadora, Ahrel&Co · Mentora, Brighteye Ventures",
      photo: "/case-studies/sophia-ahrel.webp",
      quote:
        "É um stack completo de go-to-market em um só lugar. É superprático, porque você tem o contexto e tudo mais numa única plataforma.",
    },
    {
      id: "amanda-bester",
      person: "Amanda Bester",
      role: "Fundadora",
      company: "Pragmattica Consulting",
      photo: "/case-studies/amanda-bester-retouched.webp",
      quote:
        "O que torna a CheckGrow tão atraente é a capacidade de reunir estratégia de marketing, planejamento de campanhas, execução e visibilidade de desempenho em uma única plataforma conectada.",
    },
    {
      id: "witrina",
      person: "Ivo Pavlović",
      role: "Fundador e CEO",
      company: "Witrina",
      photo: "/case-studies/ivo-witrina-retouched.webp",
      logo: "/client-logos/witrina.svg",
      metrics: ["€ 100 mil+ em receita orgânica"],
      quote:
        "A gente não queria criar só mais uma loja on-line. Queríamos um espaço digital com curadoria, que as pessoas gostassem de navegar. A Checkgrow nos deu o motor para criar em escala sem perder a nossa marca.",
    },
    {
      id: "wespa",
      person: "Milena Urban",
      role: "CFO",
      company: "WESPA",
      photo: "/case-studies/milena-wespa.avif",
      logo: "/client-logos/wespa.svg",
      metrics: ["Crescimento de 3x", "ROI de 8x"],
      quote:
        "A configuração levou minutos e, em poucas horas, já estávamos rodando com mais fluidez. A interface é limpa, as automações são bem pensadas e nada parece inchado. Com certeza, uma das decisões mais inteligentes que tomamos este ano.",
    },
    {
      id: "minka",
      person: "Vikram R.",
      role: "CPO",
      company: "Minka",
      photo: "/case-studies/vikram-minka-enhanced.webp",
      logo: "/client-logos/minka.svg",
      metrics: ["30+ SQLs enterprise"],
      quote:
        "A Checkgrow nos ajudou a dar o pontapé inicial na nossa estratégia de GTM em um nicho técnico. Aprendemos muito com o trabalho, de SEO a anúncios no LinkedIn. Hoje estamos em uma posição muito melhor para divulgar nossos serviços.",
    },
    {
      id: "woodoz",
      person: "Petar Curic",
      role: "CEO",
      company: "Woodoz",
      photo: "/case-studies/petar-curic.jpg",
      focus: "object-[64%_22%]",
      logo: "/client-logos/woodoz.svg",
      metrics: ["400+ usuários pagantes"],
      quote:
        "Tínhamos a visão e o produto, mas não o motor de crescimento. A Checkgrow nos ajudou a estruturar tudo, das campanhas ao conteúdo. Pela primeira vez, nosso go-to-market pareceu coordenado e escalável.",
    },
  ],
};

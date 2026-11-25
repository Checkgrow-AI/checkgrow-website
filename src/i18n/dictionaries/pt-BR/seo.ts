import type { Localized } from "../../types";
import type { seo as source } from "../en/seo";

export const seo: Localized<typeof source> = {
  site: {
    title: "Checkgrow · O motor de go-to-market que aprende o seu negócio",
    description:
      "A Checkgrow é uma plataforma de growth marketing que conecta conhecimento, campanhas e relatórios para sua equipe crescer mais rápido. Fale com a gente.",
    appCategory: "Software de marketing",
    keywords: [
      "plataforma de growth marketing com IA",
      "motor de go-to-market",
      "base de conhecimento de marketing",
      "agentes de IA para marketing",
      "dashboard para CMO",
      "software para equipes de marketing enterprise",
      "estratégia de campanhas com IA",
      "monitoramento de concorrentes",
      "insights do GA4",
      "software de atribuição de marketing",
      "acompanhar CAC sem planilhas",
      "lançar campanhas na Meta e no Google a partir de um briefing",
      "IA que conhece sua marca e seu ICP",
      "dashboard de marketing pronto para o conselho",
      "marketing sem agência",
    ],
    ogDescription:
      "Tudo o que sua empresa sabe, em um só sistema que aprende, melhora e trabalha para cada equipe. Conhecimento que vira clientes e reconhecimento.",
    twitterTitle: "Checkgrow · Growth marketing nativo em IA",
    twitterDescription: "Um só sistema em que conhecimento, pesquisa, execução e mensuração se conectam e se potencializam.",
  },
  socialImageAlt:
    "Checkgrow: o cérebro de growth para scale-ups e grandes empresas. Conhecimento, campanhas, conteúdo e vendas no mesmo ciclo. Fale com a gente sobre o onboarding gratuito.",
  organization: {
    description:
      "Growth marketing nativo em IA. A Checkgrow conecta o conhecimento da empresa, pesquisa de mercado, execução de marketing e mensuração em um só sistema.",
  },
  software: {
    description:
      "Um motor de go-to-market em que agentes de IA, campanhas, pesquisa e relatórios partem da mesma base de conhecimento da empresa. Feito para CMOs, equipes de marketing e founders.",
    audienceType:
      "CMOs, equipes de marketing enterprise, operações de marketing e vendas, equipes de growth e analytics, founders",
    featureList: [
      "Centro de conhecimento: marca, produtos, público e números definidos uma única vez",
      "Assistente de IA e mais de 40 agentes de IA que já conhecem o seu negócio",
      "Campanhas com orçamento, criativos e rastreamento no mesmo registro",
      "Monitoramento de redes sociais alinhado às suas personas",
      "Monitoramento de concorrentes com anúncios ativos e análise de lacunas por IA",
      "Prospecção de empresas com score de fit e sinais de compra",
      "GA4, Meta Ads e Google Ads unificados em insights em linguagem simples",
      "Auditorias de conversão do site com correções priorizadas",
    ],
    offersDescription:
      "Business a partir de € 499/mês, Agency € 997/mês, Growth € 4.997/mês, Enterprise sob consulta. Preços sem IVA.",
  },
  videos: {
    platformTour: {
      name: "Tour pela plataforma Checkgrow",
      description:
        "Um tour guiado pela Checkgrow: o Centro de conhecimento e as integrações, concorrentes, redes sociais, conteúdo, site, campanhas e criativos, insights, listas de vendas, prospecção e leads, e o chat do Grow, funcionando como um só sistema operacional de growth.",
    },
    demoReview: {
      name: "Demo real da Checkgrow, sem cortes",
      description:
        "A Checkgrow executa um go-to-market real de ponta a ponta: estratégia de campanha, criativos por canal, relatórios de funil e insights de IA, em uma única tomada, sem cortes.",
    },
  },
};

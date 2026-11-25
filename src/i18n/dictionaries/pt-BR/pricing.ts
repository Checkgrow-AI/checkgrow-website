import type { Localized } from "../../types";
import type { pricing as source } from "../en/pricing";

export const pricing: Localized<typeof source> = {
  "meta": {
    "title": "Preços da Checkgrow | Planos para marcas, agências e equipes de growth",
    "description": "Business: € 499/mês. Agency: € 997/mês. Growth: € 4.997/mês. Enterprise: preço sob consulta. Economize 10% no plano anual. Preços sem IVA."
  },
  "breadcrumb": {
    "home": "Início",
    "pricing": "Preços"
  },
  "section": {
    "eyebrow": "Preços",
    "title": "A plataforma, as marcas ou o time completo.",
    "intro": "Todos os planos rodam sobre o mesmo cérebro da empresa. Escolha uma marca, todas as marcas ou nossos especialistas conduzindo o growth com você.",
    "bookDemo": "Fale com a gente",
    "optionsLabel": "Opções de preço",
    "billingLabel": "Frequência de cobrança",
    "monthly": "Mensal",
    "yearly": "Anual",
    "save": "Economize {percent}%"
  },
  "currencyMenu": {
    "label": "Moeda de exibição",
    "trigger": "Moeda de exibição: {name} ({code})",
    "names": { EUR: "Euro", CHF: "Franco suíço", USD: "Dólar americano", BRL: "Real brasileiro" },
  },
  "card": {
    "custom": "Sob consulta",
    "perMonth": "/mês",
    "tailored": "Contrato sob medida",
    "billedMonthly": "Cobrança mensal, sem IVA",
    "monthlyEstimate": "Estimativa mensal · cobrança em EUR",
    "perYearVat": "{price} por ano, sem IVA",
    "perYearEstimate": "{price} por ano · cobrança em EUR",
    "specialistRoles": {
      "one": "{n} especialista dedicado às suas contas",
      "other": "{n} especialistas dedicados às suas contas"
    }
  },
  "specLabels": [
    "Marcas",
    "Growth Credits",
    "Usuários",
    "Contas gerenciadas"
  ],
  "plans": {
    "business": {
      "name": "Business",
      "audience": "Para uma única marca",
      "description": "A plataforma completa para uma única marca, com espaço para toda a equipe.",
      "cta": "Fale com a gente",
      "ctaNote": "Sem cartão de crédito",
      "specs": [
        {
          "value": "1 marca"
        },
        {
          "value": "5.000 / mês",
          "note": "Recarregue quando quiser"
        },
        {
          "value": "Ilimitados"
        },
        {
          "value": "Autoatendimento"
        }
      ],
      "service": {
        "title": "Central de ajuda e suporte por chat",
        "body": "Guias, tutoriais e nosso time no chat quando você precisar de uma mão."
      },
      "inheritance": "A plataforma completa",
      "includes": [
        "Cérebro da empresa no Centro de conhecimento",
        "Suítes de Marketing e Vendas",
        "Creative Studio e Assistente de IA",
        "Insights, funil e relatórios inteligentes",
        "GA4, Meta, Google Ads e LinkedIn"
      ]
    },
    "agency": {
      "name": "Agency",
      "audience": "Para agências e equipes com várias marcas",
      "description": "Cada marca e cada cliente no seu próprio workspace, com nosso time ao seu lado.",
      "cta": "Fale com a gente",
      "ctaNote": "Sem cartão de crédito",
      "specs": [
        {
          "value": "Ilimitadas"
        },
        {
          "value": "5.000 / mês",
          "note": "Saldo compartilhado · recarregue quando quiser"
        },
        {
          "value": "Ilimitados"
        },
        {
          "value": "Autoatendimento"
        }
      ],
      "service": {
        "title": "1 hora / mês com nosso time de growth",
        "body": "Uma sessão mensal de customer success para revisar resultados e planejar o próximo passo."
      },
      "inheritance": "Tudo do Business, e mais",
      "includes": [
        "Multimarcas: marcas de clientes ilimitadas",
        "Um cérebro da empresa separado para cada marca",
        "Alterne entre os workspaces dos clientes",
        "Sessão mensal de growth com nosso time"
      ]
    },
    "growth": {
      "name": "Growth",
      "audience": "Seu time de growth, incluído",
      "description": "Nossos especialistas cuidam dos seus anúncios, relatórios e follow-ups, lado a lado com sua equipe.",
      "featured": "Feito com você",
      "cta": "Fale com nosso time",
      "ctaNote": "Agende uma conversa com nosso time",
      "specs": [
        {
          "value": "Ilimitadas"
        },
        {
          "value": "5.000 / mês",
          "note": "Recarregue quando quiser"
        },
        {
          "value": "Ilimitados"
        },
        {
          "value": "Até 3",
          "note": "Contas extras cobradas à parte"
        }
      ],
      "service": {
        "title": "Um time de growth dedicado"
      },
      "inheritance": "Tudo do Agency, e mais",
      "includes": [
        "Gerente de contas dedicado",
        "Gestão de anúncios: criação, lançamento e otimização",
        "Relatórios de desempenho para cada conta",
        "Customer success em todas as suas contas"
      ]
    },
    "enterprise": {
      "name": "Enterprise",
      "audience": "Construído em torno da sua organização",
      "description": "Sua plataforma de growth, na sua infraestrutura, com a sua marca.",
      "cta": "Falar com vendas",
      "ctaNote": "Agende uma conversa com nosso time",
      "specs": [
        {
          "value": "Ilimitadas"
        },
        {
          "value": "Sob consulta"
        },
        {
          "value": "Ilimitados"
        },
        {
          "value": "Sob consulta"
        }
      ],
      "service": {
        "title": "Um time sob medida para o seu projeto",
        "body": "Engenheiros e especialistas em growth dedicados à sua implantação."
      },
      "inheritance": "Tudo do Growth, e mais",
      "includes": [
        "Desenvolvimento e integrações sob medida",
        "Plataforma white-label, com a sua marca",
        "Infraestrutura self-hosted e soberania de dados",
        "Revisões avançadas de segurança e conformidade",
        "Contratos de longo prazo"
      ]
    }
  },
  "growthTeam": [
    {
      "initials": "GC",
      "role": "Gerente de contas"
    },
    {
      "initials": "GA",
      "role": "Gestão de anúncios"
    },
    {
      "initials": "PC",
      "role": "Produção criativa"
    },
    {
      "initials": "CS",
      "role": "Customer success"
    }
  ],
  "topUp": "Precisa de mais Growth Credits? Recarregue quando quiser, em qualquer plano.",
  "notes": {
    "estimates": "Estimativas em números inteiros, sem casas decimais. Cobrança em EUR. Preços sem IVA.",
    "loading": "Carregando as taxas de câmbio. Os preços em EUR já estão disponíveis.",
    "error": "A conversão de moeda está temporariamente indisponível. Mostrando valores em EUR.",
    "retry": "Tentar de novo",
    "ratesLink": "Taxas de referência do BCE",
    "ratesAfter": "via Frankfurter · {date} · Atualizadas a cada dia útil."
  },
  "compare": {
    "eyebrow": "Compare o stack completo",
    "title": "Veja tudo o que a Checkgrow substitui.",
    "body": "Compare a Checkgrow com as 11 assinaturas, logins e fluxos desconectados que uma equipe de growth típica gerencia hoje.",
    "button": "Compare nossos preços"
  },
  "comparison": {
    "eyebrow": "Comparação completa",
    "title": "Uma plataforma contra o stack de growth típico.",
    "intro": "Além do preço: um cérebro da empresa feito para growth em vez de arquivos e prompts espalhados, um time que aprende marketing enquanto trabalha e a opção de hospedar por conta própria para garantir a soberania dos dados.",
    "close": "Fechar a comparação de preços",
    "swipe": "Deslize para o lado para comparar todas as colunas.",
    "function": "Função",
    "stack": "Stack típico",
    "stackNote": "11 ferramentas · 11 logins",
    "checkgrow": "Checkgrow",
    "checkgrowNote": "1 plataforma · 1 contexto",
    "perMonth": "{price}/mês",
    "included": "incluído",
    "fullStack": "Stack completo típico",
    "fullStackNote": "Antes de usuários extras, excedentes e do tempo gasto costurando todas as ferramentas.",
    "from": "A partir de {price}/mês",
    "checkgrowBody": "Um sistema operacional, uma fonte única da verdade e uma só fatura.",
    "bookDemo": "Fale com a gente",
    "footnote": "As ferramentas de terceiros são exemplos de cada categoria. Os preços são valores de tabela mensais típicos de planos comparáveis. Estimativas em números inteiros em {currency}; a cobrança da Checkgrow continua em EUR.",
    "rows": {
      "brandKnowledge": {
        "cat": "Marca e conhecimento",
        "tools": "Notion ou Frontify",
        "toolNote": "As diretrizes ficam num documento que ninguém abre",
        "cg": "Centro de conhecimento + Fundamentos da marca",
        "cgNote": "Um cérebro da empresa feito para growth, não arquivos e prompts de chat"
      },
      "aiContent": {
        "cat": "Conteúdo com IA",
        "tools": "Jasper ou Copy.ai",
        "toolNote": "Precisa de um novo briefing do negócio a cada prompt",
        "cg": "Agentes de IA (40+) + Assistente de IA",
        "cgNote": "Já conhece seu produto, seu tom e seu público"
      },
      "campaignOps": {
        "cat": "Operação de campanhas",
        "tools": "CoSchedule ou Monday",
        "toolNote": "Os briefings ficam longe do trabalho em si",
        "cg": "Campanhas + Criativos",
        "cgNote": "Briefing, criativo e rastreamento no mesmo registro"
      },
      "socialMedia": {
        "cat": "Redes sociais",
        "tools": "Hootsuite ou Sprout Social",
        "toolNote": "Mostra volume, não as conversas certas",
        "cg": "Redes sociais + Monitoramento de conteúdo",
        "cgNote": "Cruzado com as suas personas"
      },
      "competitiveIntel": {
        "cat": "Inteligência competitiva",
        "tools": "Semrush ou Similarweb",
        "toolNote": "Mais um login, mais um relatório trimestral",
        "cg": "Concorrentes",
        "cgNote": "Anúncios ativos e análise de lacunas por IA"
      },
      "prospecting": {
        "cat": "Prospecção",
        "tools": "Apollo.io ou ZoomInfo",
        "toolNote": "Exporta para uma planilha que logo fica velha",
        "cg": "Empresas",
        "cgNote": "Score de fit, sinais de compra, tomadores de decisão"
      },
      "conversion": {
        "cat": "Conversão",
        "tools": "Hotjar, VWO ou uma agência de CRO",
        "toolNote": "Um PDF de achados uma vez por trimestre",
        "cg": "Auditoria do site",
        "cgNote": "Com nota e uma correção priorizada para cada achado"
      },
      "analytics": {
        "cat": "Analytics",
        "tools": "Databox ou Mixpanel",
        "toolNote": "Dashboards que você ainda precisa interpretar",
        "cg": "Insights + Relatórios inteligentes",
        "cgNote": "Conclusões em linguagem simples, com a maior queda em destaque"
      },
      "tracking": {
        "cat": "Rastreamento",
        "tools": "Cookiebot ou OneTrust",
        "toolNote": "Só é verificado depois que os dados quebram",
        "cg": "Rastreamento server-side",
        "cgNote": "Fluxo de consentimento, tags e cookies verificados ao vivo"
      },
      "workTracking": {
        "cat": "Gestão de tarefas",
        "tools": "Asana ou ClickUp",
        "toolNote": "Onde boas ideias vão para ser esquecidas",
        "cg": "Tarefas + Objetivos",
        "cgNote": "Tarefas geradas direto dos achados e das conversas"
      },
      "creativeDirection": {
        "cat": "Direção criativa",
        "tools": "Canva ou Figma",
        "toolNote": "Fora da marca assim que o designer se distrai",
        "cg": "Design system + moodboard",
        "cgNote": "Mockups alinhados à marca a partir das regras salvas"
      }
    }
  },
  "page": {
    "faqTitle": "Algumas coisas que vale saber.",
    "faqIntro": "Em dúvida entre os planos? Podemos analisar suas marcas, sua equipe e suas prioridades de growth em uma demo.",
    "helpChoose": "Quero ajuda para escolher um plano",
    "diligenceTitle": "Fazendo sua due diligence?",
    "diligenceBody": "Leia nossa atualização pública de segurança ou converse com nosso time sobre infraestrutura privada.",
    "securityLink": "Ler a atualização de segurança"
  },
  "proof": {
    "eyebrow": "O trabalho por trás dos números",
    "title": "Equipes reais. Resultados documentados.",
    "explore": "Conheça os casos de clientes",
    "readStory": "Leia o caso de {company}",
    "disclaimer": "Os resultados de clientes refletem projetos individuais e os períodos indicados. Não são garantia de desempenho futuro. Leia cada caso para entender a abordagem, a mensuração e o contexto."
  }
};

import type { Localized } from "../../types";
import type { features as source } from "../en/features";

export const features: Localized<typeof source> = {
  "meta": {
    "title": "Funcionalidades da Checkgrow | A plataforma de marketing com IA, uma a uma",
    "description": "Veja cada funcionalidade da Checkgrow em ação: Centro de conhecimento, Insights, Campanhas, Creative Studio, Conteúdo, Redes sociais, Concorrentes, Vendas e o Assistente de IA.",
    "imageAlt": "Funcionalidades da Checkgrow: growth marketing com IA em uma só plataforma"
  },
  "breadcrumb": {
    "home": "Início",
    "features": "Funcionalidades"
  },
  "page": {
    "schemaName": "Funcionalidades da Checkgrow",
    "title": "Funcionalidades",
    "intro": "Todas as funcionalidades da Checkgrow partem do mesmo cérebro da empresa. Veja cada uma em ação em três passos, do conhecimento e da pesquisa às campanhas, criativos e vendas.",
    "indexTitle": "Todas as funcionalidades",
    "ctaTitle": "Uma plataforma. Todas as funcionalidades conectadas.",
    "ctaBody": "Fale com a gente e coloque o sistema inteiro para trabalhar, com onboarding do nosso time para configurar o seu Centro de conhecimento.",
    "bookDemo": "Fale com a gente",
    "explore": "Ver novidades e tutoriais"
  },
  "home": {
    "eyebrow": "Na prática",
    "title": "Como é uma semana dentro da Checkgrow.",
    "intro": "Seis funcionalidades, um só cérebro compartilhado. Veja cada uma trabalhar em três passos, com base no seu conhecimento e alimentando a próxima.",
    "seeAll": "Ver todas as funcionalidades",
    "count": "{n} funcionalidades, de Conteúdo e Redes sociais a Vendas."
  },
  "story": {
    "more": "Mais sobre {name}"
  },
  "stage": {
    "status": "{name}, passo {step} de {total}: {caption}",
    "single": "{name}: {caption}",
    "roleDescription": "prévia animada do produto",
    "play": "Reproduzir a prévia de {name}",
    "pause": "Pausar a prévia de {name}",
    "tabs": "{name} em {total} passos"
  },
  "items": {
    "knowledge-centre": {
      "name": "Centro de conhecimento",
      "title": "Explique o negócio uma vez. Nunca mais.",
      "scenario": "Conecte Google Drive, Notion, Slack e o seu site, e a Checkgrow transforma tudo em conhecimento de marketing estruturado.",
      "body": "ICPs, personas, produtos, tom de voz da marca e palavras-chave de SEO ficam em um só lugar, lido automaticamente por todas as funcionalidades. Quando algo mudar, diga com suas palavras: a IA prepara a atualização e você aprova.",
      "points": [
        "Suas ferramentas sincronizadas em uma base de conhecimento pronta para o marketing",
        "ICPs, personas e produtos estruturados, não perdidos em arquivos",
        "Atualize conversando: a IA prepara, você aprova"
      ],
      "steps": [
        {
          "label": "Conecte suas ferramentas",
          "caption": "Google Drive, Notion, Slack e o seu site sincronizados com o Centro de conhecimento."
        },
        {
          "label": "Estruture o que importa",
          "caption": "Uma persona com dores, motivações e objeções, usada em campanhas e vendas."
        },
        {
          "label": "Atualize conversando",
          "caption": "Um novo plano descrito no chat vira quatro atualizações de conhecimento, prontas para aprovar."
        }
      ]
    },
    "insights": {
      "name": "Insights",
      "title": "Faça uma pergunta. Receba o relatório.",
      "scenario": "Um líder de growth pergunta como foi a mídia paga na semana passada, e GA4, Google Ads, Meta e LinkedIn respondem juntos.",
      "body": "O Insights conecta suas contas de analytics e de anúncios por integrações e MCP, rastreia seus eventos em minutos e os mapeia no funil. Nenhum dashboard para montar e nenhuma planilha para costurar: só os números e o que eles significam.",
      "points": [
        "GA4, Google Ads, Meta e LinkedIn Ads em uma só resposta",
        "Relatórios inteligentes com uma conclusão de IA pronta para agir",
        "Eventos rastreados em minutos e mapeados em TOFU, MOFU e BOFU"
      ],
      "steps": [
        {
          "label": "Pergunte a todos os seus dados",
          "caption": "Uma pergunta consulta Analytics, Google Ads, Meta Ads e LinkedIn Ads ao mesmo tempo."
        },
        {
          "label": "Leia o relatório inteligente",
          "caption": "Investimento, CTR, CPA e conversões com a tendência e uma conclusão da IA."
        },
        {
          "label": "Veja o funil completo",
          "caption": "Eventos rastreados agrupados em TOFU, MOFU e BOFU, classificados por IA."
        }
      ]
    },
    "campaigns": {
      "name": "Campanhas",
      "title": "Da estratégia aos KPIs, em um só registro.",
      "scenario": "Um profissional de marketing planeja o lançamento do trimestre: objetivo, persona, divisão de verba e metas de KPI em uma única campanha.",
      "body": "Campanhas de LinkedIn, Meta e Google ficam lado a lado com investimento, CPA e conversões ao vivo, para que estratégia e desempenho nunca se distanciem. Creators e links UTM são gerenciados no mesmo lugar e aparecem nos relatórios do Insights.",
      "points": [
        "Divisão de verba e metas de KPI definidas a partir da estratégia",
        "Os resultados ao vivo de cada canal em uma só tabela",
        "Creators, cachês e links UTM acompanhados dentro da campanha"
      ],
      "steps": [
        {
          "label": "Defina estratégia e KPIs",
          "caption": "Período, divisão de verba por canal e metas de KPI comparadas aos resultados ao vivo."
        },
        {
          "label": "Gerencie todos os canais",
          "caption": "Campanhas de LinkedIn, Meta, Google e creators em uma só tabela."
        },
        {
          "label": "Adicione creators e UTMs",
          "caption": "Um creator adicionado com cachê, entregas e um link de rastreamento gerado automaticamente."
        }
      ]
    },
    "creative-studio": {
      "name": "Creative Studio",
      "title": "Criativos que já conhecem a sua marca.",
      "scenario": "Peça três anúncios de LinkedIn e escolha de onde a IA tira o contexto: otimizações de campanha, anúncios dos concorrentes, sua biblioteca ou tendências de mercado.",
      "body": "O Creative Studio gera variações a partir do seu brand kit, das personas e dos dados ao vivo das campanhas, com o modelo de IA que você preferir. Quando um anúncio tem desempenho fraco, ele explica o motivo e propõe uma versão otimizada.",
      "points": [
        "Contexto de todo o cérebro: campanhas, concorrentes, tendências e biblioteca",
        "Você escolhe o modelo de IA de cada geração",
        "Recomendações de otimização a partir dos resultados ao vivo das campanhas"
      ],
      "steps": [
        {
          "label": "Briefing a partir do cérebro",
          "caption": "Um briefing de uma linha, enriquecido com contexto de campanha, concorrentes e marca."
        },
        {
          "label": "Compare as variações",
          "caption": "Três variações de anúncio alinhadas à marca, cada uma com o CTR previsto."
        },
        {
          "label": "Otimize o que não performa",
          "caption": "Recomendações com dados ao vivo transformam um anúncio fraco em um mais forte."
        }
      ]
    },
    "content": {
      "name": "Conteúdo",
      "title": "Saiba o que publicar em seguida.",
      "scenario": "Toda manhã, Perplexity e Gemini trazem as tendências do setor, os movimentos dos concorrentes e as pesquisas que importam para o seu mercado.",
      "body": "Cada sugestão recebe uma nota de relevância de acordo com suas palavras-chave e personas. Transforme uma delas em rascunho no tom de voz da sua marca em poucos cliques e envie direto para Redes sociais.",
      "points": [
        "Sugestões diárias sobre o setor, os concorrentes e pesquisas com usuários",
        "Ideias de conteúdo recomendadas por Perplexity e Gemini",
        "Rascunhos no tom de voz da sua marca, prontos para agendar"
      ],
      "steps": [
        {
          "label": "Veja as sugestões do dia",
          "caption": "Tendências do seu mercado, com nota de relevância e prontas para reescrever."
        },
        {
          "label": "Escolha uma recomendação",
          "caption": "Uma ideia de conteúdo com o motivo de importar agora e o melhor formato."
        },
        {
          "label": "Escreva no seu tom",
          "caption": "Um post de LinkedIn escrito no tom de voz da sua marca, pronto para agendar."
        }
      ]
    },
    "social-media": {
      "name": "Redes sociais",
      "title": "Veja onde você está e aja a partir disso.",
      "scenario": "Seu Instagram e seu LinkedIn ranqueados contra os concorrentes monitorados, com o engajamento comparado à mediana da categoria.",
      "body": "A IA explica o que os líderes fazem de diferente, dá nota aos creators de acordo com o seu ICP e escreve respostas aos comentários no tom de voz da sua marca, tudo conectado às suas campanhas e ao seu conhecimento.",
      "points": [
        "Rankings e crescimento comparados aos seus concorrentes",
        "Influenciadores descobertos e avaliados de acordo com o seu ICP",
        "Respostas a comentários escritas pela IA e aprovadas por você"
      ],
      "steps": [
        {
          "label": "Compare seus canais",
          "caption": "Sua posição, engajamento e crescimento comparados aos concorrentes monitorados."
        },
        {
          "label": "Pré-selecione influenciadores",
          "caption": "Creators avaliados de acordo com o seu ICP, avançando por um pipeline simples."
        },
        {
          "label": "Responda com IA",
          "caption": "Um comentário respondido no tom de voz da sua marca, aguardando a sua aprovação."
        }
      ]
    },
    "competitors": {
      "name": "Concorrentes",
      "title": "Cada movimento dos concorrentes, na hora.",
      "scenario": "Mudanças de preço, novos anúncios, sites reescritos, lançamentos e contratações: monitorados automaticamente e resumidos em uma só linha do tempo.",
      "body": "Navegue pelos anúncios ativos de cada concorrente no LinkedIn e na Meta, acompanhe os preços e o quadro de funcionários ao longo do tempo e envie qualquer anúncio direto para o Creative Studio como referência.",
      "points": [
        "Anúncios ativos de LinkedIn e Meta em uma só biblioteca",
        "Mudanças de site, preço, lançamentos e equipe sinalizadas automaticamente",
        "Anúncios dos concorrentes viram referência para os seus criativos"
      ],
      "steps": [
        {
          "label": "Veja o que mudou",
          "caption": "Uma linha do tempo com preços, anúncios, site, lançamentos e contratações dos concorrentes."
        },
        {
          "label": "Veja os anúncios ativos",
          "caption": "Anúncios dos concorrentes no ar, com formato, status e estimativa de alcance."
        },
        {
          "label": "Abra o perfil completo",
          "caption": "Anúncios, preços, funcionários e lançamentos de produto de um concorrente."
        }
      ]
    },
    "sales": {
      "name": "Vendas",
      "title": "Prospecção que sabe o que está acontecendo.",
      "scenario": "Antes de o vendedor escrever uma palavra, a Checkgrow já leu a conta: fit com o ICP, posts recentes no LinkedIn, anúncios ativos e falhas de rastreamento.",
      "body": "Seu Sales Brain escreve comentários e mensagens personalizados a partir desse contexto. Nada é enviado sem aprovação, e cada contato morno fica registrado em uma só linha do tempo.",
      "points": [
        "Resumos de conta com fit de ICP e a melhor jogada agora",
        "Mensagens personalizadas com base em sinais reais",
        "Aprovação humana antes de qualquer envio"
      ],
      "steps": [
        {
          "label": "Leia o resumo da conta",
          "caption": "Fit com o ICP, atividade no LinkedIn e a melhor próxima jogada para uma conta."
        },
        {
          "label": "Aprove a abordagem",
          "caption": "Uma mensagem personalizada, o contexto que ela usou e a sua aprovação."
        },
        {
          "label": "Acompanhe cada contato",
          "caption": "Comentários, mensagens e respostas em uma só linha do tempo de prospecção."
        }
      ]
    },
    "ai-assistant": {
      "name": "Assistente de IA",
      "title": "Um só chat para tudo o que a Checkgrow sabe.",
      "scenario": "Pergunte o que a sua última campanha ensinou, e o assistente lê Campanhas, Insights e Concorrentes para responder.",
      "body": "Escolha Claude, GPT, Gemini ou Perplexity para cada pergunta; todos os modelos leem o mesmo conhecimento e os mesmos dados. Depois, aja direto a partir da resposta: rascunhe a próxima campanha, gere criativos ou salve um aprendizado no seu conhecimento.",
      "points": [
        "Multimodelo: Claude, GPT, Gemini e Perplexity",
        "Respostas baseadas no seu conhecimento, campanhas e dados",
        "Aja em todas as funcionalidades sem sair do chat"
      ],
      "steps": [
        {
          "label": "Pergunte qualquer coisa",
          "caption": "Uma pergunta sobre o seu negócio, com seus canais conectados à mão."
        },
        {
          "label": "Escolha qualquer modelo",
          "caption": "Claude, GPT, Gemini ou Perplexity, todos lendo o mesmo cérebro da empresa."
        },
        {
          "label": "Aja em todas as funcionalidades",
          "caption": "Uma resposta que cita Insights, Campanhas e Concorrentes, com as próximas ações."
        }
      ]
    }
  }
};

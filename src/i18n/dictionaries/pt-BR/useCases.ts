import type { Localized } from "../../types";
import type { useCases as source } from "../en/useCases";

/* Casos de uso: /pt-br/use-cases e /pt-br/use-cases/<slug>. Slugs de casos
   de sucesso, nomes de empresas e ícones de integrações não se traduzem. */
export const useCases: Localized<typeof source> = {
  index: {
    meta: {
      title: "Casos de uso da Checkgrow | Como as equipes fazem marketing com a Checkgrow",
      description:
        "Veja como equipes de marketing usam a Checkgrow para planejar e reportar em um só lugar, escrever com uma IA que conhece a marca e mostrar ao conselho o retorno do marketing.",
    },
    title: "Casos de uso",
    intro:
      "As tarefas que as equipes de marketing trazem para a Checkgrow, mostradas de ponta a ponta: o problema, os quatro passos dentro da plataforma e o que muda para a equipe. Incluindo o que a Checkgrow não faz.",
    listTitle: "Todos os casos de uso",
    count: { one: "{n} caso de uso", other: "{n} casos de uso" },
    builtFor: "Feito para {audiences}",
    audienceSeparator: " · ",
    read: "Ler o caso de uso",
    schemaName: "Casos de uso da Checkgrow",
  },
  page: {
    metaTitle: "{title} | Checkgrow",
    socialImageAlt: "{title} Tela do produto Checkgrow: {feature}.",
    breadcrumb: "Trilha de navegação",
    back: "Todos os casos de uso",
    eyebrow: "Caso de uso · {feature}",
    builtFor: "Feito para",
    bookDemo: "Fale com a gente",
    seeHow: "Veja como funciona",
    onThisPage: "Nesta página",
    sections: {
      inShort: "Em resumo",
      problem: "O problema",
      howItWorks: "Como funciona",
      seeItWork: "Veja em ação",
      whatYouGet: "O que você ganha",
      inPractice: "Na prática",
      faq: "Perguntas frequentes",
    },
    howTitle: "Quatro passos, todos dentro da Checkgrow.",
    getTitle: "O que muda para a sua equipe.",
    practiceTitle: "Equipes que já fazem isso.",
    readStory: "Ler o caso de sucesso →",
    faqTitle: "Perguntas que as equipes fazem antes de começar.",
    relatedLabel: "Casos de uso relacionados",
    relatedTitle: "Continue explorando.",
    bandTitle: "Veja o que a Checkgrow mostraria para o seu negócio.",
    updated: "Última atualização em {date}. As telas do produto são ilustrações da Checkgrow; os números são exemplos.",
  },
  breadcrumbs: {
    home: "Início",
    useCases: "Casos de uso",
  },
  items: {
    "marketing-operations": {
      feature: "Operações de marketing",
      title: "Planeje, lance e meça seu marketing em um só lugar.",
      metaTitle: "Operações de marketing tudo-em-um: planejamento, lançamento e relatórios em um só lugar",
      description: "Planeje campanhas, crie criativos, agende as entregas e veja resultados do GA4, do Meta Ads e do Google Ads em um único workspace da Checkgrow. Chega de cinco ferramentas.",
      lede: "A Checkgrow reúne planejamento de campanhas, criativos, agendamento e relatórios em um único workspace, conectado a Google Analytics, Meta Ads, Google Ads, Instagram e LinkedIn. O plano e os resultados ficam lado a lado, e ninguém precisa remontar o quadro a partir de exportações toda semana.",
      builtFor: ["Heads de marketing", "Equipes de growth", "Agências"],
      worksWithLabel: "Funciona com",
      worksWith: [
        {
          name: "Google Analytics",
          icon: "/features/icons/google-analytics.svg",
        },
        {
          name: "Meta Ads",
          icon: "/features/icons/meta.webp",
        },
        {
          name: "Google Ads",
          icon: "/features/icons/google_ads_ai.svg",
        },
        {
          name: "Instagram",
          icon: "/features/icons/Instagram.svg",
        },
        {
          name: "LinkedIn",
          icon: "/features/icons/LinkedIN.svg",
        },
        {
          name: "Notion",
          icon: "/features/icons/notion_ai_integration.svg",
        },
        {
          name: "n8n e webhooks",
        },
        {
          name: "Checkgrow MCP",
        },
      ],
      inShort: [
        "Planeje campanhas, crie criativos e agende as entregas em um único workspace da Checkgrow.",
        "Conecte Google Analytics, Meta Ads, Google Ads, Instagram e LinkedIn e veja os resultados ao lado do plano.",
        "Seus anúncios continuam rodando na Meta e no Google; a Checkgrow lê o desempenho deles em vez de substituí-los.",
        "Campanhas, posts e tarefas compartilham um único calendário, e toda a equipe vê o que está no ar e o que vem a seguir.",
      ],
      hero: {
        steps: [
          {
            label: "Calendário",
            caption: "Campanhas, posts e tarefas em um único calendário.",
          },
          {
            label: "Campanhas",
            caption: "Cada campanha com seus canais, orçamento e criativos.",
          },
          {
            label: "Integrações",
            caption: "Google Analytics, Meta Ads, Google Ads e Instagram conectados.",
          },
        ],
      },
      problem: {
        title: "Cinco ferramentas, cinco versões da verdade.",
        body: "O briefing está em um documento, os anúncios em dois gerenciadores, o plano em uma planilha e os resultados no Google Analytics. Todo relatório semanal começa com exportações, toda decisão espera alguém juntar as peças e, quando o quadro fica completo, já está desatualizado.",
        quote: {
          text: "Existem tantas ferramentas por aí, talvez uma para cada funcionalidade que vocês oferecem, e é muito trabalhoso gerenciar 10, 15 ferramentas. Aqui está tudo em um só lugar.",
          author: "Florian Mueller",
        },
      },
      steps: [
        {
          title: "Planeje cada campanha em uma única lista",
          body: "Cada campanha reúne estratégia, canais, orçamento, período e criativos. Veja todas de relance, ativas ou pausadas, com o gasto e os resultados de cada canal ao lado do plano.",
          tag: "Todos os canais, por campanha",
        },
        {
          title: "Crie os criativos dentro da campanha",
          body: "Os criativos ficam na campanha a que pertencem, agrupados por canal e etapa do funil, do primeiro rascunho à aprovação. Variações de texto, formatos e idiomas ficam vinculados ao anúncio certo, e não a uma planilha.",
          tag: "Agrupados por canal e etapa",
        },
        {
          title: "Veja tudo em um único calendário",
          body: "Campanhas, posts e tarefas aparecem juntos, e a equipe vê o que está no ar e o que vem por aí sem uma planilha de planejamento à parte. Arraste um post, e todos veem a nova data.",
          tag: "Todo tipo de trabalho em uma só visão",
        },
        {
          title: "Conecte as ferramentas que você já usa",
          body: "Google Analytics, Meta Ads, Google Ads, Instagram e LinkedIn se conectam em poucos cliques, com Notion, n8n, webhooks e o Checkgrow MCP para todo o resto. Seus dados entram; nada precisa sair das ferramentas em que você confia.",
          tag: "Conectado em poucos cliques",
        },
      ],
      see: {
        title: "Comece todo dia por uma única tela.",
        body: "Pergunte ao Grow, o Assistente de IA, o que mudou durante a noite, ou vá direto para campanhas, insights, concorrentes ou o Grafo de conhecimento. Cada resposta vem do seu próprio workspace.",
        tag: "Um só ponto de partida",
      },
      outcomes: [
        {
          title: "Uma visão única do seu marketing",
          body: "Planos, criativos, cronograma e resultados ficam em um único workspace, e não em cinco ferramentas.",
        },
        {
          title: "Relatórios que partem de dados ao vivo",
          body: "O desempenho vem direto das suas contas conectadas, não das exportações desta semana.",
        },
        {
          title: "Toda a equipe alinhada",
          body: "Tarefas, comentários e @menções ficam ao lado da campanha a que pertencem, e as decisões nunca se perdem no chat.",
        },
      ],
      testimonial: {
        text: "Adoro que esteja tudo em um só lugar, que você não precise de um monte de aplicativos diferentes para usar, porque hoje isso é uma questão enorme no mundo de martech.",
        author: "Abigail Markey, Markey Marketing Co",
      },
      proof: [
        {
          slug: "wespa-2028-leads-in-a-month",
          company: "WESPA",
          line: "Rodou cinco campanhas a partir de um único workspace e reuniu 2.028 leads em uma só lista.",
        },
        {
          slug: "barner-croatia-launch-purchases-up-160",
          company: "Barner",
          line: "Estreou na Croácia a partir de um único workspace: compras 160,6% maiores em um mês.",
        },
      ],
      faq: [
        {
          q: "O que é uma plataforma de operações de marketing?",
          a: "Uma plataforma de operações de marketing é um único workspace em que a equipe planeja campanhas, prepara criativos, agenda as entregas e acompanha os resultados, em vez de espalhar tudo isso por documentos, planilhas e gerenciadores de anúncios. A Checkgrow faz isso e se conecta a Google Analytics, Meta Ads, Google Ads, Instagram e LinkedIn, para que o desempenho fique ao lado do plano.",
        },
        {
          q: "A quais ferramentas a Checkgrow se conecta?",
          a: "Google Analytics 4, Meta Ads, Google Ads, Instagram e LinkedIn, além de Notion, n8n e webhooks para todo o resto. O Checkgrow MCP permite que Claude, ChatGPT e outros apps de IA leiam os dados do seu workspace. Slack, TikTok e Supabase aparecem como “em breve”.",
        },
        {
          q: "Precisamos parar de usar o Gerenciador de Anúncios da Meta ou o Google Ads?",
          a: "Não. Seus anúncios continuam rodando onde estão. A Checkgrow lê o desempenho deles e o mostra ao lado do plano, para você comparar canais sem trocar de ferramenta.",
        },
        {
          q: "A Checkgrow publica nossos anúncios por nós?",
          a: "Não. As campanhas são planejadas e os criativos são preparados na Checkgrow, e os anúncios em si rodam no Gerenciador de Anúncios da Meta e no Google Ads.",
        },
        {
          q: "A equipe inteira pode trabalhar no mesmo workspace?",
          a: "Sim. Todos compartilham um único workspace, com tarefas, responsáveis, comentários e @menções, e o trabalho e as decisões ficam ao lado da campanha a que pertencem.",
        },
        {
          q: "A Checkgrow substitui nosso CRM?",
          a: "Não. A Checkgrow não é um CRM e hoje não sincroniza com HubSpot nem Salesforce. Os leads são reunidos na Checkgrow, e webhooks ou o n8n podem repassá-los ao CRM que você usa.",
        },
      ],
      keywords: [
        "plataforma de operações de marketing",
        "ferramenta de marketing tudo em um",
        "software de planejamento de campanhas",
        "calendário de marketing",
        "workspace de marketing",
        "GA4, Meta Ads e Google Ads em um só lugar",
        "colaboração da equipe de marketing",
        "Checkgrow",
      ],
    },
    "brand-knowledge-ai": {
      feature: "Centro de conhecimento",
      title: "Uma IA que já conhece a sua marca.",
      metaTitle: "Marketing com IA que conhece sua marca: uma única fonte da verdade para o conteúdo",
      description: "Registre uma única vez sua empresa, marca, produtos e compradores no Centro de conhecimento da Checkgrow. Toda ideia de campanha, post e criativo parte dele, com a sua voz.",
      lede: "A Checkgrow guarda sua empresa, marca, produtos e compradores em um único Centro de conhecimento. Tudo o que ela escreve para você, de ideias de campanha a posts e criativos, parte dessa fonte, e o primeiro rascunho já soa como você, e não como qualquer outra ferramenta de IA.",
      builtFor: ["Líderes de marketing", "Equipes de conteúdo", "Agências com várias marcas"],
      worksWithLabel: "Usa como base",
      worksWith: [
        {
          name: "Perfil da empresa",
        },
        {
          name: "Marca",
        },
        {
          name: "Produtos",
        },
        {
          name: "Personas",
        },
        {
          name: "ICPs",
        },
        {
          name: "Casos de uso",
        },
      ],
      inShort: [
        "Registre uma única vez, no Centro de conhecimento, tudo o que se sabe sobre sua empresa, marca, produtos e compradores.",
        "Tudo o que a Checkgrow redige, de ideias de campanha a posts e criativos, parte desse conhecimento.",
        "O Grafo de conhecimento mostra como seu conhecimento se conecta a campanhas, concorrentes, site e leads.",
        "Os rascunhos aguardam sua aprovação, e cada alteração no conhecimento fica guardada por 30 dias.",
      ],
      hero: {
        steps: [
          {
            label: "Grafo de conhecimento",
            caption: "Conhecimento da empresa conectado a campanhas, concorrentes e leads.",
          },
          {
            label: "Tom de voz da marca",
            caption: "Tom de voz e mensagem da marca que todo rascunho segue.",
          },
          {
            label: "Persona",
            caption: "Um comprador real, descrito uma vez e usado em todo lugar.",
          },
        ],
      },
      problem: {
        title: "Todo prompt começa do zero.",
        body: "Ferramentas de IA genéricas não conhecem seu posicionamento, seus produtos nem as pessoas para quem você vende. Então cada prompt explica a marca de novo, cada rascunho precisa ser reescrito, e a voz se desvia um pouco mais a cada vez. Quanto mais gente usa IA, menos o resultado soa como você.",
        quote: {
          text: "Gostei disso. Basicamente, é a fonte da verdade que vocês estão construindo, e isso é essencial. Com certeza. Adorei.",
          author: "Salim Sayed, WCMO",
        },
      },
      steps: [
        {
          title: "Ensine seu negócio à Checkgrow uma única vez",
          body: "Preencha Perfil da empresa, Marca, Produtos, Personas, ICPs e Casos de uso, ou envie arquivos e links e deixe a Checkgrow redigir tudo para você revisar. Um índice de completude mostra o que ainda falta e o que acrescentar em seguida.",
          tag: "Completude num relance",
        },
        {
          title: "Coloque sua voz por escrito",
          body: "Tom de voz e mensagem da marca ficam em um só lugar, com as palavras que você usa e as que evita, e todo conteúdo segue as mesmas regras, não importa quem o peça.",
          tag: "Uma só voz em todo rascunho",
        },
        {
          title: "Descreva as pessoas para quem você vende",
          body: "As personas registram quem são essas pessoas, do que precisam, o que as impede de avançar e como decidem, para que campanhas, posts e mensagens de vendas falem com alguém real.",
          tag: "Um comprador real, descrito uma vez",
        },
        {
          title: "Veja como tudo se conecta",
          body: "O Grafo de conhecimento liga o conhecimento da empresa às suas campanhas, site, concorrentes e leads em uma única visão, e lacunas e conexões ficam visíveis num relance.",
          tag: "Tudo ligado à sua empresa",
        },
      ],
      see: {
        title: "Um rascunho com a sua voz, aguardando sua aprovação.",
        body: "O conteúdo chega pronto para refinar. Peça alterações no chat ao lado, e a versão salva só muda depois que você aprova. Nada é publicado sem que uma pessoa diga sim.",
        tag: "Alterações só valem após aprovação",
      },
      outcomes: [
        {
          title: "Primeiros rascunhos com a sua voz",
          body: "Tudo o que a Checkgrow escreve parte da sua marca, dos seus produtos e dos seus compradores, não de um prompt em branco.",
        },
        {
          title: "Uma única fonte da verdade",
          body: "Atualize seu posicionamento uma vez, e todos os rascunhos seguintes usam a nova versão, para todas as pessoas da equipe.",
        },
        {
          title: "Controle total",
          body: "Nada é enviado sem aprovação, e um histórico de 30 dias mostra cada alteração no seu conhecimento.",
        },
      ],
      testimonial: {
        text: "O principal que eu vejo é que existe um banco de dados central, uma fonte da verdade, que, no fim das contas, é uma das coisas mais importantes em toda essa implementação de IA.",
        author: "Salim Sayed, WCMO",
      },
      proof: [
        {
          slug: "barner-croatia-launch-purchases-up-160",
          company: "Barner",
          line: "Montou primeiro o cérebro da empresa e depois gerou 423 criativos de anúncio com a própria voz.",
        },
        {
          slug: "cuixmala-first-campaign-us-27000-booking",
          company: "Cuixmala",
          line: "Detalhou 6 produtos, 4 personas e 3 ICPs antes de suas primeiras campanhas trazerem mais de US$ 300.000 em reservas.",
        },
      ],
      faq: [
        {
          q: "O que é uma base de conhecimento de marca para IA?",
          a: "É um único lugar estruturado que reúne o que torna sua empresa específica, como tom de voz da marca, produtos, personas, perfis de cliente ideal e casos de uso, para que as ferramentas de IA escrevam a partir dos seus fatos, e não de suposições genéricas. Na Checkgrow, esse lugar é o Centro de conhecimento, e todos os recursos de IA partem dele.",
        },
        {
          q: "De onde vem o conhecimento?",
          a: "De você. Preencha as seções diretamente, ou envie arquivos e links e deixe a Checkgrow redigi-las para você revisar e editar antes que qualquer coisa seja salva.",
        },
        {
          q: "O que acontece quando nosso posicionamento muda?",
          a: "Atualize-o uma vez no Centro de conhecimento, e tudo o que a Checkgrow escrever depois usa a nova versão. Um histórico de 30 dias mostra o que mudou e quando.",
        },
        {
          q: "Algo será publicado sem a nossa aprovação?",
          a: "Não. O conteúdo aguarda até que alguém o envie, e as alterações feitas no chat só valem depois que você as aprova.",
        },
        {
          q: "A Checkgrow faz vídeos?",
          a: "Ainda não. O Creative Studio está em beta e cria imagens e textos. Revise as imagens de produto geradas antes de usá-las, pois podem ser diferentes do produto real.",
        },
        {
          q: "Uma agência consegue manter várias marcas separadas?",
          a: "Sim. Cada workspace tem seu próprio Centro de conhecimento, e a marca, os produtos e os compradores de cada cliente ficam separados.",
        },
      ],
      keywords: [
        "IA que conhece sua marca",
        "base de conhecimento da marca",
        "tom de voz da marca com IA",
        "fonte única da verdade em marketing",
        "personas com IA",
        "conteúdo com IA no tom da marca",
        "grafo de conhecimento em marketing",
        "Checkgrow",
      ],
    },
    "marketing-reporting": {
      feature: "Insights",
      title: "Mostre ao conselho o retorno do marketing.",
      metaTitle: "Relatórios de marketing para o conselho: um funil com GA4, Meta e Google Ads",
      description: "Reúna Google Analytics, Meta Ads e Google Ads em um único funil, compare cada anúncio pelo custo por resultado e compartilhe com o conselho um link de relatório ao vivo.",
      lede: "A Checkgrow reúne Google Analytics, Meta Ads e Google Ads no Insights: um funil da primeira visita à conversão, o custo por resultado de cada anúncio e um link de relatório ao vivo que você pode compartilhar com qualquer pessoa. O conselho vê os mesmos números que você, sempre atualizados.",
      builtFor: ["CMOs", "Heads de growth", "Fundadores"],
      worksWithLabel: "Dados de",
      worksWith: [
        {
          name: "Google Analytics 4",
          icon: "/features/icons/google-analytics.svg",
        },
        {
          name: "Meta Ads",
          icon: "/features/icons/meta.webp",
        },
        {
          name: "Google Ads",
          icon: "/features/icons/google_ads_ai.svg",
        },
      ],
      inShort: [
        "Veja um único funil da primeira visita à conversão, com Google Analytics, Meta Ads e Google Ads.",
        "Compare cada anúncio por gasto e custo por resultado, com os vencedores classificados e explicados.",
        "Rastreie o tráfego por origem e mídia com o Relatório de UTM, em qualquer período.",
        "Compartilhe com o conselho um link de relatório ao vivo, em vez de uma apresentação mensal.",
      ],
      hero: {
        steps: [
          {
            label: "Anúncios vencedores",
            caption: "Os anúncios com mais conversões, classificados e explicados.",
          },
          {
            label: "Funil",
            caption: "Cada evento rastreado no topo, no meio ou no fundo do funil.",
          },
          {
            label: "Smart Report",
            caption: "Gasto, CTR, custo por clique e custo por resultado, com um resumo.",
          },
        ],
      },
      problem: {
        title: "Três painéis, três respostas diferentes.",
        body: "O Google Analytics conta uma coisa, a Meta outra, o Google Ads uma terceira. Quando o conselho pergunta qual foi o retorno do marketing, a resposta leva uma semana de planilhas e ainda começa uma discussão sobre quais números estão certos.",
        quote: {
          text: "Adorei o rastreamento de ponta a ponta, porque acho que é algo com que muitas organizações têm dificuldade. A gente usa planilhas, e é tudo muito manual.",
          author: "Abigail Markey, Markey Marketing Co",
        },
      },
      steps: [
        {
          title: "Um funil, da primeira visita à conversão",
          body: "O Insights distribui cada evento rastreado entre o topo, o meio e o fundo do funil e mostra como as pessoas passam de uma etapa para a outra, em todas as suas fontes conectadas.",
          tag: "Onde visitas viram conversões",
        },
        {
          title: "Cada anúncio avaliado pelo que custa",
          body: "O Smart Report de anúncios mostra gasto, CTR, custo por clique e custo por resultado de cada campanha, com um resumo em linguagem simples do que mudou e por que isso importa.",
          tag: "Custo por clique e por resultado",
        },
        {
          title: "Os vencedores, explicados",
          body: "Anúncios vencedores classifica os anúncios com mais conversões e mostra a participação de cada um no gasto e nos resultados, para que o orçamento siga o que funciona. Um clique gera outro anúncio parecido com o vencedor.",
          tag: "Participação no gasto vs. nos resultados",
        },
        {
          title: "Tráfego que você consegue rastrear",
          body: "O Relatório de UTM mostra as sessões ao longo do tempo e de onde vieram, por origem, mídia e campanha, no período que você escolher.",
          tag: "Qualquer período",
        },
      ],
      see: {
        title: "Compartilhe com um link, não com uma apresentação.",
        body: "Cada visão do Insights tem um link de relatório ao vivo, e o conselho, um cliente ou um investidor vê os mesmos números que você, sempre atualizados, sem fazer login nem esperar o pacote mensal.",
        tag: "Um link ao vivo para o conselho",
      },
      outcomes: [
        {
          title: "Um funil",
          body: "Da primeira visita à conversão, em uma única visão com todas as suas fontes conectadas.",
        },
        {
          title: "Os anúncios que justificam o orçamento",
          body: "Custo por resultado e participação nas conversões de cada anúncio, com os vencedores classificados.",
        },
        {
          title: "Relatórios que o conselho consegue abrir",
          body: "Um link de relatório ao vivo em vez de uma apresentação mensal, sempre com os números atuais.",
        },
      ],
      testimonial: {
        text: "Gosto que seja por eventos. É orientado a eventos, e não a métricas. Isso ajuda muito, muito mesmo.",
        author: "Sophia Ahrel",
      },
      proof: [
        {
          slug: "boont-30x-cheaper-meta-purchases",
          company: "Boont",
          line: "O Insights encontrou 294 pagamentos no site que a Meta não enxergava e depois classificou o novo anúncio vencedor.",
        },
        {
          slug: "wespa-2028-leads-in-a-month",
          company: "WESPA",
          line: "Analisou seu funil em todos os canais: 26,8% dos visitantes engajados converteram.",
        },
      ],
      faq: [
        {
          q: "Como reportar o ROI de marketing ao conselho?",
          a: "Reúna suas plataformas de análise e de anúncios em uma única visão, reporte o funil da primeira visita à conversão e o custo por resultado de cada campanha, e compartilhe tudo como um link ao vivo, em vez de uma apresentação estática. O Insights da Checkgrow faz isso com Google Analytics, Meta Ads e Google Ads.",
        },
        {
          q: "Quais fontes de dados alimentam o Insights?",
          a: "Google Analytics 4, Meta Ads e Google Ads. O LinkedIn Ads aparece como “em breve”.",
        },
        {
          q: "Posso compartilhar um relatório com alguém que não usa a Checkgrow?",
          a: "Sim. Cada visão do Insights tem um link de relatório ao vivo que você pode enviar a qualquer pessoa, sempre com os números atuais.",
        },
        {
          q: "Posso escolher o período?",
          a: "Sim. Cada visão do Insights tem um seletor de período, e os números se atualizam de acordo.",
        },
        {
          q: "Por que os números da Meta não batem com os do Google Analytics?",
          a: "Cada plataforma conta as conversões do seu jeito. O Insights mostra os números lado a lado, para você compará-los sem somar coisas que medem eventos diferentes.",
        },
        {
          q: "A Checkgrow faz atribuição multitoque?",
          a: "Não. Ela reporta o que cada plataforma mede e mostra de onde vem seu tráfego, mas não monta um modelo de atribuição multitoque.",
        },
      ],
      keywords: [
        "relatório de marketing para o conselho",
        "relatório de ROI de marketing",
        "dashboard GA4 Meta Ads Google Ads",
        "custo por resultado",
        "anúncios vencedores",
        "relatório de UTM",
        "relatório de marketing ao vivo",
        "Checkgrow Insights",
      ],
    },
  },
};

import type { Localized } from "../../types";
import type { stories as source } from "../en/stories";

/* Casos de sucesso em português do Brasil. Cada número mantém o valor do
   inglês; só o formato muda (docs/i18n-glossary.md). */
export const stories: Localized<typeof source> = {
  items: [
    {
      slug: "cuixmala-first-campaign-us-27000-booking",
      company: "Cuixmala",
      draft: false,
      title: "Como o resort de luxo Cuixmala passou de US$ 300.000 em reservas com suas primeiras campanhas",
      description: "Como o resort de luxo mexicano Cuixmala lançou seus primeiros anúncios com a Checkgrow: US$ 307.650 em reservas, receita 369% maior e uma primeira reserva de US$ 27.000.",
      kicker: "Hotelaria, México",
      publishedAt: "2026-10-06",
      heroStats: [
        {
          value: "US$ 307.650",
          label: "em reservas registradas no Google Analytics enquanto a Checkgrow conduzia as campanhas do Cuixmala, de 15 de setembro a 22 de novembro",
          big: true,
        },
        {
          value: "369%",
          label: "de crescimento na receita de reservas em relação ao mesmo número de dias antes",
        },
        {
          value: "US$ 27.000",
          label: "a primeira reserva vinda das campanhas de Google Ads do Cuixmala, confirmada no sistema de reservas do resort",
        },
      ],
      features: [
        "Centro de conhecimento",
        "Concorrentes",
        "Campanhas",
        "Creative Studio",
        "Insights",
      ],
      hero: {
        src: "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-luxury-resort-casa-cuixmala-pacific-coast-mexico.webp",
        alt: "Casa Cuixmala, a casa principal com cúpula do resort de luxo Cuixmala, cercada pela mata, acima da praia e do oceano Pacífico, em Jalisco, no México",
        width: 1000,
        height: 680,
      },
      clientMark: "CUIXMALA",
      about: {
        summary: "Um resort de luxo na costa do Pacífico mexicano, dentro de uma reserva natural privada, que recebe hóspedes desde 1987.",
        facts: [
          {
            label: "Setor",
            value: "Hotelaria, resort de luxo",
          },
          {
            label: "Localização",
            value: "Jalisco, México",
          },
          {
            label: "Mercado",
            value: "Viajantes dos Estados Unidos e do México",
          },
          {
            label: "Período analisado",
            value: "15 de setembro a 22 de novembro de 2026",
          },
        ],
      },
      lead: "O Cuixmala recebe hóspedes em seu resort na costa do Pacífico mexicano desde 1987, mas nunca tinha anunciado. Suas primeiras campanhas pagas, conduzidas pela Checkgrow, entraram no ar no Google e na Meta em setembro. Em poucas semanas, o Google Ads registrou a primeira reserva: uma estadia de US$ 27.000, confirmada no próprio sistema de reservas do Cuixmala. Até 22 de novembro, o Google Analytics havia registrado US$ 307.650 em reservas desde o lançamento, 369% a mais do que no mesmo número de dias antes. A checagem dessa primeira reserva também revelou uma falha de rastreamento que valia a pena corrigir cedo.",
      takeaways: [
        "O cérebro da empresa do Cuixmala, no Centro de conhecimento da Checkgrow, detalhou sua oferta: 6 produtos, 4 personas, 3 perfis de cliente ideal e 5 casos de uso.",
        "O módulo Concorrentes da Checkgrow monitorou 14 resorts rivais: 8 estavam anunciando, com 166 anúncios ativos na Meta, enquanto os 210.000 seguidores do Cuixmala no Instagram o colocavam em 3º lugar entre os 14.",
        "A Checkgrow planejou a campanha Cuixmala: The Reserve Awaits e gerou os anúncios no Creative Studio a partir das fotos do próprio resort, em inglês para os Estados Unidos e em espanhol para o México.",
        "O Google Ads registrou a primeira reserva, de US$ 27.000, e ela batia exatamente com o sistema de reservas do Cuixmala.",
        "De 15 de setembro a 22 de novembro, o Google Analytics registrou 44 reservas que somaram US$ 307.650, com a receita de reservas 369% acima do mesmo número de dias antes. O Google foi o canal de primeiro contato de US$ 270.230 desse total.",
        "O Insights mostrou que o Google Analytics havia registrado a compra sem a origem, uma falha de tagueamento encontrada nas primeiras semanas, e não meses depois.",
      ],
      keywords: [
        "marketing para hotéis",
        "publicidade para resorts de luxo",
        "Google Ads para hotéis",
        "anúncios na Meta para hotéis",
        "rastreamento de reservas",
        "análise de concorrentes",
        "campanhas multilíngues",
        "atribuição de marketing",
        "plataforma de marketing com IA",
        "México",
        "Cuixmala",
        "Checkgrow",
      ],
      sections: [
        {
          label: "O desafio",
          title: "Um resort de luxo anunciando pela primeira vez",
          blocks: [
            {
              type: "p",
              text: "O Cuixmala é um lugar raro: vilas privativas, restaurante próprio e uma reserva natural privada na costa do Pacífico. Durante quase quatro décadas, recebeu hóspedes sem nunca ter feito uma campanha paga.",
            },
            {
              type: "p",
              text: "Uma primeira campanha levanta duas perguntas ao mesmo tempo. Onde um resort como o Cuixmala se posiciona em um mercado cheio de concorrentes impecáveis? E, com os anúncios no ar, como saber se estão funcionando, quando o hóspede passa por várias páginas e sistemas entre o clique e a estadia confirmada, e cada plataforma de anúncios conta os resultados do seu jeito?",
            },
          ],
        },
        {
          label: "Cérebro da empresa",
          title: "Primeiro, colocar a oferta do Cuixmala em palavras",
          blocks: [
            {
              type: "p",
              text: "A Checkgrow conduziu o lançamento a partir de um único workspace, e tudo começou no Centro de conhecimento. Ali, a oferta do Cuixmala foi detalhada: 6 produtos, 4 personas, 3 perfis de cliente ideal e 5 casos de uso. Esse cérebro da empresa virou o briefing de tudo o que veio depois, de quem alcançar ao que cada anúncio deveria dizer.",
            },
            {
              type: "p",
              text: "Em seguida, as contas de Google Analytics, Meta e Google Ads do Cuixmala foram conectadas ao Insights, para que todos os canais pudessem ser medidos lado a lado desde o primeiro dia da campanha.",
            },
          ],
        },
        {
          label: "Análise de concorrentes",
          title: "Os anúncios e o público de cada resort rival, monitorados em um só lugar",
          blocks: [
            {
              type: "p",
              text: "Em Concorrentes, a Checkgrow monitora 14 resorts rivais na costa do Pacífico mexicano e todos os anúncios que eles veiculam, com uma varredura mensal. A primeira visão mostrou quem realmente disputava os mesmos viajantes: 8 dos 14 estavam anunciando, com 166 anúncios ativos no total, todos na Meta. O Almar Resort liderava com 40, seguido pelo The St. Regis Punta Mita, com 36, pelo Garza Blanca Preserve, com 27, e pelo Hotel Mousai e pelo Secrets Vallarta Bay, com 19 cada.",
            },
            {
              type: "figure",
              variant: "narrow",
              image: {
                src: "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-competitors-who-is-advertising-resort-ads.webp",
                alt: "Módulo Concorrentes da Checkgrow, seção Quem está anunciando, para o Cuixmala: 14 resorts rivais monitorados, 8 anunciando, 166 anúncios ativos na Meta, liderados pelo Almar Resort com 40, The St. Regis Punta Mita com 36, Garza Blanca Preserve Resort & Spa com 27, Hotel Mousai Puerto Vallarta e Secrets Vallarta Bay com 19 cada, Casa Velas com 16, Chable com 7 e Las Alamandas com 2",
                width: 1310,
                height: 1086,
              },
              caption: "Quem está anunciando entre os 14 concorrentes monitorados do Cuixmala, no módulo Concorrentes da Checkgrow.",
            },
            {
              type: "p",
              text: "O painel de Concorrentes mostrou, então, onde o Cuixmala estava. No Instagram, seus 210.000 seguidores o colocavam em 3º lugar entre os 14 resorts, 357% acima da mediana dos concorrentes, atrás apenas do The St. Regis Punta Mita, com 2,5 milhões, e do Secrets Vallarta Bay. No LinkedIn, o cenário era o oposto: 934 seguidores, 85% abaixo da mediana. Uma marca com um público visual forte e quase nenhuma presença paga: exatamente a lacuna que uma primeira campanha podia aproveitar.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-competitors-dashboard-instagram-linkedin-ads.webp",
                alt: "Painel de Concorrentes da Checkgrow para o Cuixmala: sua posição frente a 14 concorrentes, com 934 seguidores no LinkedIn, 210 mil seguidores no Instagram, em 3º lugar e 357% acima da mediana, e 161 anúncios ativos dos concorrentes na Meta, liderados pelo Almar Resort e pelo The St. Regis Punta Mita",
                width: 2000,
                height: 1071,
              },
              caption: "O Cuixmala frente aos seus 14 concorrentes no LinkedIn, no Instagram e em publicidade, no painel de Concorrentes da Checkgrow.",
            },
            {
              type: "p",
              text: "A pesquisa também mostrou como a concorrência era paciente. O rival mais ativo mantinha o mesmo anúncio no ar havia 260 dias. O Cuixmala não ia ganhar no volume. Precisava ser preciso sobre com quem falava e sobre o que dizia.",
            },
          ],
        },
        {
          label: "Campanhas",
          title: "The Reserve Awaits, em dois idiomas",
          blocks: [
            {
              type: "p",
              text: "Em Campanhas, a Checkgrow planejou Cuixmala: The Reserve Awaits para viajantes dos Estados Unidos, com versões em espanhol dos mesmos anúncios para o mercado mexicano. A campanha entrou no ar primeiro no Google e, três dias depois, na Meta.",
            },
            {
              type: "p",
              text: "Os anúncios, criados no Creative Studio, vendem o que nenhum concorrente consegue copiar: o isolamento. Uma mesa sob um arco branco de frente para o mar, uma porta entalhada que se abre para um terraço, a casa principal com cúpula emoldurada por palmeiras, com frases como “Where Restorative Stays Begin in Seclusion” e “Un santuario natural en la costa de México”.",
            },
            {
              type: "gallery",
              images: [
                {
                  src: "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-restorative-stays-dining-arch-sea-view.webp",
                  alt: "Anúncio do Cuixmala na Meta: uma mesa sob um arco branco com vista para o mar, título “Where Restorative Stays Begin in Seclusion” e botão “Book your stay”",
                  width: 900,
                  height: 1125,
                },
                {
                  src: "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-restorative-stays-terrace-doorway.webp",
                  alt: "Anúncio do Cuixmala na Meta: uma porta entalhada que se abre para um terraço sobre o mar, título “Where Restorative Stays Begin in Seclusion” e botão “Book your stay”",
                  width: 900,
                  height: 1125,
                },
                {
                  src: "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-private-reserve-pacific-coast.webp",
                  alt: "Anúncio do Cuixmala na Meta: uma mesa no terraço acima da mata e do litoral, título “A Private Reserve on Mexico's Pacific Coast” e botão “Book your stay”",
                  width: 900,
                  height: 1125,
                },
                {
                  src: "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-meta-ad-spanish-santuario-natural-mexico.webp",
                  alt: "Anúncio do Cuixmala na Meta em espanhol: a casa principal com cúpula, emoldurada por palmeiras, com o mar ao fundo, título “Un santuario natural en la costa de México” e botão “Reserva tu estancia”",
                  width: 900,
                  height: 1125,
                },
              ],
              caption: "Anúncios da campanha Cuixmala: The Reserve Awaits, em inglês e em espanhol.",
            },
            {
              type: "p",
              text: "O Creative Studio criou as peças a partir do material do próprio Cuixmala. A equipe forneceu as fotos do restaurante, das áreas externas e do litoral do resort, além da própria campanha como contexto, e descreveu o que precisava. Cada pedido gerava um conjunto de anúncios prontos, no formato certo, e uma mensagem simples como “gere mais 3 opções com a outra foto no contexto” bastava para a rodada seguinte, em 4:5, 1:1, 1,91:1 ou 9:16.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/cuixmala-first-campaign-us-27000-booking/cuixmala-creative-studio-ai-luxury-resort-ads.webp",
                alt: "Creative Studio da Checkgrow para o Cuixmala: três anúncios de resort de luxo gerados por IA, “A Private Reserve on Mexico's Pacific Coast” e “Where Restorative Stays Begin in Seclusion”, criados a partir das fotos do restaurante e das áreas externas do Cuixmala, com a campanha The Reserve Awaits como contexto, e opções de formato e proporção",
                width: 2000,
                height: 1076,
              },
              caption: "Anúncios do Cuixmala gerados no Creative Studio da Checkgrow a partir das fotos e do contexto de campanha do próprio resort.",
            },
            {
              type: "p",
              text: "Na Meta, os primeiros anúncios alcançaram 49.403 pessoas e geraram 2.039 cliques, com CTR de 3,45%, enquanto o Google Ads trouxe 4.228 cliques em setembro. Cada um desses cliques podia ser acompanhado no Insights, ao lado dos demais.",
            },
          ],
        },
        {
          label: "O que a Checkgrow encontrou",
          title: "Uma reserva de US$ 27.000 e a falha por trás dela",
          blocks: [
            {
              type: "p",
              text: "Quando a primeira reserva chegou, a Checkgrow não parou na comemoração. Conferiu a reserva em todos os lugares onde ela deveria aparecer. O Google Ads a havia registrado com o valor, e o registro batia exatamente com o sistema de reservas do próprio Cuixmala: uma estadia de US$ 27.000.",
            },
            {
              type: "p",
              text: "O Google Analytics também tinha registrado a compra, mas não de onde ela veio. As tags da campanha estavam configuradas no Google Ads, mas nunca chegavam ao Analytics, e a reserva aparecia sem origem. Olhando só para o Analytics, a primeira reserva da campanha nunca teria sido creditada ao Google Ads.",
            },
            {
              type: "p",
              text: "É exatamente o tipo de falha que você quer encontrar nas primeiras semanas de uma campanha, enquanto ainda é pequena, e não meses depois, quando decisões de orçamento dependem dela.",
            },
          ],
        },
        {
          label: "Os resultados",
          title: "Mais de US$ 300.000 em reservas, receita 369% maior",
          blocks: [
            {
              type: "p",
              text: "O lançamento entregou o resultado que mais importa para um resort: reservas reais e confirmadas. A primeira, vinda da busca paga, valia US$ 27.000 e chegou nas primeiras semanas da campanha. Até 22 de novembro, o Google Analytics havia registrado 44 reservas, somando US$ 307.650 desde o lançamento, contra 6 no mesmo número de dias antes, e a receita de reservas tinha crescido 369%. O Google foi o canal de primeiro contato de US$ 270.230 desse total, seguido pelas visitas diretas, com US$ 21.155, e pelo Instagram, com US$ 12.002.",
            },
            {
              type: "stats",
              variant: "results",
              items: [
                {
                  value: "US$ 307.650",
                  label: "em reservas registradas no Google Analytics, de 15 de setembro a 22 de novembro",
                  big: true,
                },
                {
                  value: "369%",
                  label: "de crescimento na receita de reservas em relação ao mesmo número de dias antes",
                },
                {
                  value: "44",
                  label: "reservas, contra 6 no mesmo número de dias antes",
                },
                {
                  value: "US$ 27.000",
                  label: "na primeira reserva vinda do Google Ads, conferida com o sistema de reservas do Cuixmala",
                },
              ],
            },
            {
              type: "p",
              text: "O Insights também mostrou de onde o interesse já vinha. Em setembro, a busca orgânica no Google gerou 6.623 eventos-chave a partir de 4.718 sessões, e a página de tarifas prendeu a atenção das pessoas, com 88,2% de engajamento em 1.271 sessões. Com todos os canais em uma única visão, o Cuixmala agora consegue ver a contribuição de cada um e onde o rastreamento ainda precisa de ajustes.",
            },
          ],
        },
      ],
      statement: {
        text: "Em suas primeiras dez semanas de campanhas com a Checkgrow, o Cuixmala passou de US$ 300.000 em reservas, com receita 369% maior. Sua primeira reserva pelo Google Ads, de US$ 27.000, também mostrou onde o rastreamento falhava, e é exatamente isso que você quer saber cedo, antes de uma campanha crescer.",
        cite: "Checkgrow",
      },
      faq: [
        {
          q: "Como um hotel ou resort de luxo pode começar a anunciar online com a Checkgrow?",
          a: "Conduzindo o lançamento em um único workspace da Checkgrow: descreva o empreendimento, os hóspedes e as ofertas no Centro de conhecimento, pesquise hotéis rivais em Concorrentes, planeje as campanhas em Campanhas e meça todos os canais juntos no Insights. O Cuixmala, um resort de luxo no México, lançou assim suas primeiras campanhas pagas, registrou uma reserva de US$ 27.000 em poucas semanas e passou de US$ 300.000 em reservas nas primeiras dez semanas.",
        },
        {
          q: "O que um hotel deve colocar no cérebro da empresa?",
          a: "Tudo o que um bom briefing de campanha precisa: os quartos, vilas e experiências oferecidos, os tipos de hóspede e de onde eles vêm, os perfis de cliente ideal e os motivos que levam as pessoas a reservar. O Centro de conhecimento do Cuixmala reunia 6 produtos, 4 personas, 3 perfis de cliente ideal e 5 casos de uso, que definiram quem os anúncios alcançavam e o que diziam.",
        },
        {
          q: "Como a Checkgrow monitora os anúncios de hotéis concorrentes?",
          a: "O módulo Concorrentes da Checkgrow usa pesquisa com IA para acompanhar os hotéis e resorts que você escolher, com uma varredura mensal dos anúncios ativos na Meta e no LinkedIn e um painel que mostra sua posição no Instagram, no LinkedIn e em publicidade. O Cuixmala viu em uma única tela 166 anúncios ativos de seus 14 resorts rivais, e que seu público no Instagram estava em 3º lugar entre os 14.",
        },
        {
          q: "Como saber se uma reserva veio mesmo do Google Ads?",
          a: "Confira em todos os sistemas que deveriam registrá-la: Google Ads, Google Analytics e o motor de reservas. O Insights da Checkgrow reúne Google Analytics, Google Ads e Meta em uma única visão, para que a reserva possa ser rastreada e comparada. A reserva de US$ 27.000 do Cuixmala apareceu no Google Ads com o valor e batia exatamente com o sistema de reservas.",
        },
        {
          q: "Por que o Google Analytics mostraria uma reserva sem origem?",
          a: "Na maioria das vezes, porque as informações de campanha da plataforma de anúncios não estão sendo repassadas ao Analytics, e a visita chega sem as tags da campanha. A reserva é registrada, mas não é creditada ao anúncio que a gerou. O Insights apontou isso para o Cuixmala nas primeiras semanas, quando ainda era fácil de corrigir.",
        },
        {
          q: "Uma marca de luxo consegue criar com IA anúncios fiéis à sua identidade?",
          a: "Sim, quando a IA trabalha a partir do material da própria marca. O Creative Studio da Checkgrow usa suas fotos, sua marca e sua campanha como contexto, para que os anúncios mostrem o seu empreendimento, e não imagens de banco. Os anúncios do Cuixmala foram gerados a partir das fotos do restaurante, das áreas externas e do litoral do próprio resort, e cada nova variação exigiu uma única frase.",
        },
        {
          q: "A Checkgrow consegue rodar campanhas em vários idiomas?",
          a: "Sim. Uma campanha na Checkgrow pode levar o mesmo criativo em vários idiomas para mercados diferentes, mantendo uma única estratégia. A campanha do Cuixmala rodou em inglês para viajantes dos Estados Unidos e em espanhol para o mercado mexicano.",
        },
      ],
      footnote: "Dados do workspace do Cuixmala na Checkgrow. Receita de reservas, reservas e primeiros canais são dados de compra do Google Analytics de 15 de setembro a 22 de novembro de 2026, comparados com o mesmo número de dias antes. Os demais dados de campanha e de concorrentes cobrem de 15 de setembro a 5 de outubro de 2026; os dados do site e de cliques no Google Ads cobrem setembro. O valor da reserva de US$ 27.000 foi confirmado pelo Cuixmala. Número de seguidores nas redes sociais consultado em 27 de abril de 2026.",
    },
    {
      slug: "boont-30x-cheaper-meta-purchases",
      company: "Boont",
      draft: false,
      title: "Como a seguradora online croata Boont deixou as compras na Meta 30x mais baratas",
      description: "Como a Boont corrigiu o que a Meta conseguia enxergar, criou seus anúncios no Creative Studio da Checkgrow e testou uma nova campanha: compras 30x mais baratas e, depois, 2x mais conversões.",
      kicker: "Seguros, Croácia",
      publishedAt: "2026-10-12",
      heroStats: [
        {
          value: "30x",
          label: "custo por compra menor nos primeiros dias da nova campanha: € 70,85 contra € 2.121,05 na campanha que a Boont já rodava",
        },
        {
          value: "2x",
          label: "mais conversões com as duas campanhas comparadas nos mesmos dias: 10 contra 5, a € 69,45 cada, contra € 144,41",
        },
      ],
      features: [
        "Centro de conhecimento",
        "Creative Studio",
        "Calendário",
        "Campanhas",
        "Insights",
      ],
      hero: {
        src: "/success-stories/boont-30x-cheaper-meta-purchases/boont-meta-ad-car-insurance-drive-less-pay-less.webp",
        alt: "Anúncio da Boont na Meta para seguro auto online, da campanha da Checkgrow: “Voziš manje od 5.000 km? Saznaj koliko štediš” (Dirige menos de 5.000 km? Descubra quanto você economiza), com um SUV cinza e um escudo verde",
        width: 1600,
        height: 900,
      },
      clientMark: "",
      about: {
        summary: "Uma corretora de seguros com sede em Zagreb, fundada em 2022, que vende seguro auto digital com cashback para motoristas prudentes.",
        facts: [
          {
            label: "Setor",
            value: "Seguros, seguro auto digital",
          },
          {
            label: "Localização",
            value: "Zagreb, Croácia",
          },
          {
            label: "Mercado",
            value: "Motoristas na Croácia",
          },
          {
            label: "Período analisado",
            value: "Setembro a outubro de 2026",
          },
        ],
      },
      lead: "A Boont vende seguro auto online na Croácia e recompensa motoristas prudentes com cashback. A equipe já anunciava na Meta, mas a campanha não conseguia enxergar as apólices vendidas. A Checkgrow primeiro corrigiu o que a Meta conseguia ver e depois lançou uma segunda campanha ao lado da própria campanha da Boont. Nos primeiros dias, a nova campanha trouxe compras a € 70,85 cada, contra € 2.121,05 na existente: um custo por compra 30 vezes menor.",
      takeaways: [
        "O site da Boont registrou 294 pagamentos concluídos em um mês, enquanto a Meta não atribuía nenhum à campanha. O Insights da Checkgrow encontrou a falha ao ler o Google Analytics e a Meta lado a lado.",
        "A Checkgrow conectou Google Analytics, Meta Ads e Google Ads ao Insights e montou o cérebro da empresa da Boont no Centro de conhecimento antes de mexer em qualquer anúncio.",
        "Os novos anúncios da Boont foram gerados no Creative Studio da Checkgrow, em croata e a partir da própria marca, com todas as versões guardadas e opções de um clique para agendar um post ou criar mais imagens parecidas.",
        "Uma segunda campanha na Meta, com públicos semelhantes (lookalike) e de remarketing, rodou ao lado da campanha da Boont. Nos primeiros dias, trouxe compras a € 70,85 cada, contra € 2.121,05: um custo 30 vezes menor.",
        "O anúncio principal da nova campanha logo se tornou o vencedor nº 1 da conta, com 50% de todas as conversões, a € 79,88 cada, e um clique em Gerar outro parecido inicia a próxima rodada.",
      ],
      keywords: [
        "marketing para seguradoras",
        "rastreamento de anúncios na Meta",
        "rastreamento de conversões",
        "custo por compra",
        "teste de campanha na Meta",
        "públicos semelhantes",
        "remarketing",
        "atribuição de marketing",
        "plataforma de marketing com IA",
        "seguro auto online Croácia",
        "Boont",
        "Checkgrow",
      ],
      sections: [
        {
          label: "O desafio",
          title: "Uma seguradora online cujos anúncios não enxergavam as vendas",
          blocks: [
            {
              type: "p",
              text: "A Boont é uma corretora de seguros de Zagreb, fundada em 2022. Em parceria com a Groupama osiguranje, vende um seguro auto que o motorista contrata e gerencia totalmente online, com cashback para quem dirige sem sinistros.",
            },
            {
              type: "p",
              text: "A equipe de marketing da Boont já rodava a própria campanha na Meta, no ar desde junho de 2024 e voltada a públicos amplos no Facebook e no Instagram. Quando a Checkgrow chegou, o primeiro briefing era simplesmente apoiar a equipe nas campanhas em andamento. Por baixo disso, havia um problema maior.",
            },
            {
              type: "p",
              text: "As pessoas compravam apólices no site, mas a Meta não associava essas vendas à campanha. Sem esse sinal, ninguém conseguia dizer qual anúncio vendia uma apólice e qual só gastava dinheiro, e a Meta não conseguia aprender para quem mostrar os anúncios.",
            },
          ],
        },
        {
          label: "Dados conectados",
          title: "Conectar tudo antes de mudar qualquer coisa",
          blocks: [
            {
              type: "p",
              text: "A Checkgrow começou conectando, não mudando anúncios. Google Analytics, Meta Ads e Google Ads foram para o Insights, para que os pagamentos no site e os resultados dos anúncios pudessem finalmente ser analisados lado a lado. O perfil da Boont foi para o Centro de conhecimento, para que toda recomendação partisse de como a Boont realmente vende.",
            },
            {
              type: "p",
              text: "O primeiro briefing do Insights tornou a falha impossível de ignorar. O site havia registrado 294 pagamentos concluídos em um mês, enquanto a Meta não relatava nenhum resultado da campanha da Boont. O veredito do briefing foi direto:",
            },
            {
              type: "callout",
              text: "Não há vencedor nem perdedor mensurável entre as campanhas da Meta até que o reporte de conversões seja corrigido.",
              cite: "Briefing do Insights da Checkgrow",
            },
          ],
        },
        {
          label: "Teste de campanha",
          title: "Uma segunda campanha, rodando lado a lado",
          blocks: [
            {
              type: "p",
              text: "Em vez de desligar a campanha da Boont, a Checkgrow lançou a sua ao lado, para que as duas fossem medidas nas mesmas condições. A CheckGrow Conversion entrou no ar na Meta com novos anúncios gerados no Creative Studio e dois conjuntos de anúncios: um para pessoas parecidas com os compradores da Boont, baseado em um público semelhante (lookalike), e outro para quem já tinha visitado o site, baseado em remarketing.",
            },
            {
              type: "p",
              text: "O anúncio principal falava com um motorista bem específico: “VOZIŠ MANJE OD 5.000 KM?” (Dirige menos de 5.000 km?), sob a promessa “Voziš bez štete, plaćaš manje” (Dirija sem sinistros, pague menos). Em Anúncios vencedores, no Insights, ele ocupa o primeiro lugar em conversões em toda a conta.",
            },
          ],
        },
        {
          label: "Creative Studio",
          title: "Cada anúncio criado a partir da própria marca da Boont, em poucos cliques",
          blocks: [
            {
              type: "p",
              text: "Os anúncios da nova campanha saíram do Creative Studio. A equipe descreve o que precisa em palavras simples, e a Checkgrow cria imagens, posts e anúncios a partir da marca da Boont: suas cores, suas páginas de produto e suas próprias fotos, usadas como contexto em cada conjunto. Cada pedido gera um conjunto de cinco, no formato e no tamanho que o canal exige.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/boont-30x-cheaper-meta-purchases/boont-creative-studio-ai-car-insurance-ads-croatian.webp",
                alt: "Creative Studio da Checkgrow para a Boont: um conjunto de anúncios de seguro auto em croata gerados por IA, com o título “Povrat novca svakih 12 tjedana” (Cashback a cada 12 semanas), criados a partir do contexto da marca Boont, incluindo a imagem da página “sobre nós”, telas do aplicativo e a página de produto em boont.hr",
                width: 2000,
                height: 1072,
              },
              caption: "Um conjunto de anúncios da Boont gerado no Creative Studio da Checkgrow, com o contexto de marca usado à direita.",
            },
            {
              type: "p",
              text: "Os conjuntos da Boont foram escritos em croata e falavam das promessas reais da marca: cashback a cada 12 semanas para motoristas prudentes, seguro gerenciado totalmente online e uma recompensa por indicar um amigo. Alguns foram além, com uma série de anúncios bem-humorados que rendeu 26 favoritos. Em vez de passar um briefing a um designer e esperar dias por uma rodada de opções, a equipe podia reagir a um conjunto em minutos e simplesmente dizer o que mudar no próximo.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/boont-30x-cheaper-meta-purchases/boont-creative-studio-ad-versions-calendar-make-more.webp",
                alt: "Um único anúncio da Boont no Creative Studio da Checkgrow, “Mislis da vozis bez greske? Boont Izazov krece”, com suas versões e as opções de colocá-lo no calendário como rascunho de post para redes sociais, baixá-lo, criar mais como ele ou alterá-lo descrevendo o que deve ser diferente",
                width: 2000,
                height: 1245,
              },
              caption: "Um anúncio da Boont no Creative Studio, com suas versões e o que a equipe pode fazer com ele em seguida.",
            },
            {
              type: "p",
              text: "Cada imagem guarda seu histórico. Peça uma alteração, como um novo título ou outra posição para o logo, e a Checkgrow cria uma nova versão sem sobrescrever a anterior. Quando a imagem está pronta, um clique a coloca no Calendário como rascunho de post para redes sociais, à espera de aprovação, faz o download no tamanho certo ou a usa como ponto de partida do próximo conjunto, com Criar mais como este. Em breve, também será possível enviar uma imagem direto para uma campanha ativa.",
            },
          ],
        },
        {
          label: "O que a Checkgrow encontrou",
          title: "Um rastreamento melhor e uma campanha melhor",
          blocks: [
            {
              type: "p",
              text: "Com as duas campanhas rodando, o gráfico diário do Insights mostrou o momento exato em que a Meta começou a enxergar as vendas. Durante três semanas, a Meta não havia registrado nenhuma conversão. A primeira apareceu no dia seguinte ao lançamento da CheckGrow Conversion e, a partir daí, as duas campanhas passaram a registrá-las.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/boont-30x-cheaper-meta-purchases/boont-insights-meta-cost-vs-conversions-tracking.webp",
                alt: "Gráfico do Insights da Checkgrow com o gasto diário na Meta comparado às conversões da Boont: as conversões ficam em zero por três semanas, a primeira aparece no dia seguinte ao lançamento da nova campanha da Checkgrow e as conversões continuam subindo",
                width: 1254,
                height: 438,
              },
              caption: "Gasto diário na Meta comparado às conversões da Boont, no Insights da Checkgrow. A primeira conversão aparece no dia seguinte ao lançamento da nova campanha.",
            },
            {
              type: "p",
              text: "O rastreamento explicava parte da diferença, mas não toda. As duas campanhas foram montadas de formas diferentes, e as pessoas reagiram de formas diferentes. A nova campanha teve CTR de 1,39%, contra 0,56%, a € 0,30 por clique, contra € 0,95: com um orçamento parecido, públicos mais próximos da compra e anúncios escritos para eles trouxeram três vezes mais cliques, 2.322 contra 761.",
            },
          ],
        },
        {
          label: "Os resultados",
          title: "30 vezes mais barato no início, o dobro de conversões lado a lado",
          blocks: [
            {
              type: "stats",
              variant: "results",
              items: [
                {
                  value: "30x",
                  label: "custo por compra menor nos primeiros dias da nova campanha: € 70,85 contra € 2.121,05",
                  big: true,
                },
                {
                  value: "10 a 5",
                  label: "em conversões com as duas campanhas comparadas nos mesmos dias, com € 694,50 investidos contra € 722,04",
                },
                {
                  value: "€ 69,45",
                  label: "de custo por conversão na nova campanha nesses dias, contra € 144,41",
                },
              ],
            },
            {
              type: "p",
              text: "Nos primeiros dias, a nova campanha trouxe 3 compras com € 212,56, ou € 70,85 cada. A campanha existente da Boont havia registrado 1 compra com € 2.121,05 nos 30 dias anteriores: um custo por compra 30 vezes maior.",
            },
            {
              type: "p",
              text: "A Boont revisou essa comparação conosco, e também analisamos as duas campanhas exatamente nos mesmos dias no Insights. Ali, onde uma conversão é uma compra, um lead ou um cadastro que a Meta atribui ao anúncio, a nova campanha registrou 10 conversões contra 5, com € 694,50 contra € 722,04. Cada conversão custou € 69,45 em vez de € 144,41: a régua que cada venda precisa superar para pagar sua publicidade caiu pela metade.",
            },
            {
              type: "p",
              text: "O sinal mais claro veio de Anúncios vencedores, no Insights, que classifica cada anúncio pelas conversões que trouxe e explica o desempenho de cada um em relação aos demais. Em poucos dias, o anúncio principal da nova campanha, o anúncio de carro “Voziš bez štete, plaćaš manje”, assumiu a 1ª posição em toda a conta: 9 conversões a € 79,88 cada, 50% de todas as conversões, com CTR de 1,37%. O melhor anúncio da campanha existente da Boont ficou em segundo, com 4 conversões a € 142,79 cada e 22% do total.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/boont-30x-cheaper-meta-purchases/boont-insights-winning-ads-meta-conversions.webp",
                alt: "Anúncios vencedores no Insights da Checkgrow para a Boont: o anúncio da nova campanha da Checkgrow como vencedor nº 1, com 9 conversões a € 79,88 por conversão, 50% das conversões e CTR de 1,37%, à frente do anúncio existente da Boont, em nº 2, com 4 conversões a € 142,79 e 22% das conversões, cada um com os botões Abrir criativo e Gerar outro parecido",
                width: 1852,
                height: 902,
              },
              caption: "O anúncio da nova campanha como vencedor nº 1 da conta da Boont, em Anúncios vencedores, no Insights da Checkgrow.",
            },
            {
              type: "p",
              text: "Ver o vencedor é só metade do trabalho. Ao lado de cada anúncio vencedor fica o botão Gerar outro parecido, que manda o anúncio de volta ao Creative Studio como ponto de partida de um novo conjunto. O anúncio que mais converte vira o briefing da próxima rodada, em poucos cliques, e a campanha continua aprendendo em vez de esperar o próximo ciclo criativo.",
            },
            {
              type: "p",
              text: "Duas ressalvas honestas. Os 30x comparam os primeiros dias da nova campanha com um mês da campanha existente, um período em que a Meta ainda não enxergava todas as vendas da Boont. E estes são os primeiros 11 dias de resultados, então a Meta ainda pode acrescentar conversões atribuídas com atraso. Lado a lado, a nova campanha ainda assim registrou o dobro de conversões, a menos da metade do custo.",
            },
          ],
        },
      ],
      statement: {
        text: "Os resultados da Boont vieram de mais de uma correção: um rastreamento capaz de enxergar as vendas, uma estrutura diferente, novos criativos e públicos mais próximos da compra. Nos primeiros dias, a nova campanha trouxe compras a um trigésimo do custo e, lado a lado, registrou o dobro de conversões, a menos da metade do custo cada.",
        cite: "Checkgrow",
      },
      faq: [
        {
          q: "Por que meus anúncios na Meta não mostram as vendas que meu site registra?",
          a: "Normalmente porque o sinal de conversão do site não está chegando à Meta, e a Meta não consegue atribuir as compras aos anúncios que as geraram. O Insights da Checkgrow lê o Google Analytics e a Meta lado a lado, o que deixa a falha visível: o site da Boont registrou 294 pagamentos concluídos em um mês, enquanto a Meta não atribuía nenhum à campanha.",
        },
        {
          q: "Como o Insights da Checkgrow encontra problemas de rastreamento?",
          a: "O Insights conecta Google Analytics, Meta Ads e Google Ads em um só lugar e compara o que cada um registra, com briefings escritos e gráficos como o de gasto diário comparado às conversões. Quando os números não batem, por exemplo vendas no site e nenhuma conversão na conta de anúncios, o Insights sinaliza o problema antes que decisões de orçamento sejam tomadas com dados incompletos.",
        },
        {
          q: "Como testar uma nova campanha na Meta sem parar a que está rodando?",
          a: "Rode a nova campanha ao lado da existente e analise as duas nos mesmos dias, com a mesma definição de conversão. O Smart Report de anúncios da Checkgrow coloca as campanhas lado a lado, com gasto, conversões, custo por conversão, CTR e custo por clique. O teste da Boont mostrou 10 conversões contra 5, pela metade do custo cada.",
        },
        {
          q: "Como uma seguradora pode criar criativos de anúncio com IA?",
          a: "Com o Creative Studio da Checkgrow, a equipe descreve o que precisa e recebe anúncios criados a partir da própria marca, das páginas de produto e das fotos, no seu idioma e nos tamanhos que cada canal exige. Cada alteração cria uma nova versão, e uma imagem pronta pode ser agendada como post para redes sociais ou usada para criar mais como ela. Foi assim que a Boont gerou seus anúncios de seguro auto em croata.",
        },
        {
          q: "Como saber qual anúncio converte melhor e criar mais como ele?",
          a: "Anúncios vencedores, no Insights da Checkgrow, classifica cada anúncio pelas conversões que trouxe, com gasto, custo por conversão, CTR e participação no total de conversões. Um clique em Gerar outro parecido manda o vencedor de volta ao Creative Studio para começar o próximo conjunto. O novo anúncio da Boont assumiu a 1ª posição, com 50% de todas as conversões.",
        },
        {
          q: "O que são públicos semelhantes (lookalike) e de remarketing, e quando eles ajudam?",
          a: "Um público semelhante encontra novas pessoas parecidas com seus compradores atuais; um público de remarketing alcança quem já visitou seu site. Os dois costumam estar mais perto da compra do que públicos amplos. A campanha da Checkgrow para a Boont usou um conjunto de anúncios de cada tipo e teve CTR de 1,39%, contra 0,56% da segmentação ampla.",
        },
        {
          q: "Como comparar duas campanhas de forma justa?",
          a: "Compare as duas nos mesmos dias, com a mesma definição de conversão e o mesmo rastreamento, e olhe o custo por conversão além do volume. Resultados iniciais e conversões atribuídas com atraso devem ser analisados com cuidado. O caso da Boont mostra as duas leituras: uma diferença de 30x nos primeiros dias e o dobro de conversões, a menos da metade do custo, quando analisadas no mesmo período.",
        },
        {
          q: "A Checkgrow pode ajudar seguradoras e empresas de serviços financeiros a vender online?",
          a: "Sim. Empresas que vendem apólices ou produtos financeiros online dependem de um rastreamento de conversões preciso e de uma aquisição paga eficiente. A Checkgrow conecta a análise do site e as contas de anúncios, encontra onde as vendas não estão sendo atribuídas e ajuda a montar e medir campanhas voltadas a pessoas mais próximas da compra, como fez com o seguro auto digital da Boont.",
        },
      ],
      footnote: "Dados do workspace da Boont na Checkgrow (Insights, Meta), de 12 de setembro a 12 de outubro de 2026. Dados de investimento e custo publicados com a aprovação da Boont.",
    },
    {
      slug: "barner-croatia-launch-purchases-up-160",
      company: "Barner",
      draft: false,
      title: "Como a Barner estreou na Croácia usando IA no marketing: compras 160,6% maiores em um mês",
      description: "Como a Barner lançou seus óculos para telas na Croácia com a Checkgrow: análise de concorrentes, 423 criativos de anúncio feitos com IA e um único funil conectado. Compras 160,6% maiores em um mês.",
      kicker: "Óculos, Croácia",
      publishedAt: "2026-10-14",
      heroStats: [
        {
          value: "357",
          label: "compras em um mês, 160,6% a mais que no período anterior",
        },
        {
          value: "+119%",
          label: "de novos visitantes: 10.290 primeiras visitas contra 4.700 no período anterior",
        },
      ],
      features: [
        "Centro de conhecimento",
        "Redes sociais",
        "Concorrentes",
        "Campanhas",
        "Creative Studio",
        "Insights",
        "Assistente de IA",
      ],
      hero: {
        src: "/success-stories/barner-croatia-launch-purchases-up-160/barner-screen-glasses-tortoiseshell.webp",
        alt: "Um homem ajustando óculos para telas Barner redondos, com armação tartaruga",
        width: 1080,
        height: 680,
      },
      clientMark: "BARNER",
      about: {
        summary: "Uma marca de óculos para telas, agora na Croácia com loja virtual própria.",
        facts: [
          {
            label: "Setor",
            value: "Óculos, e-commerce",
          },
          {
            label: "Localização",
            value: "Croácia",
          },
          {
            label: "Mercado",
            value: "Consumidores croatas",
          },
          {
            label: "Período analisado",
            value: "2 de setembro a 2 de outubro de 2026",
          },
        ],
      },
      lead: "A Barner faz óculos para quem passa o dia na frente de telas. Quando decidiu entrar na Croácia em 2026, tinha uma loja virtual nova, um produto claro e nenhum público local. Um mês depois de conduzir o lançamento na Checkgrow, a loja registrava 357 compras, 160,6% a mais que no mês anterior, e os novos visitantes tinham mais que dobrado. Foi assim que a equipe chegou lá, um recurso de cada vez.",
      takeaways: [
        "A Barner montou o cérebro da empresa no Centro de conhecimento da Checkgrow e conectou Google Analytics, Meta, Google Ads e Instagram, para que cada campanha, criativo e resposta da IA partisse dos mesmos dados.",
        "O módulo Concorrentes da Checkgrow mostrou os anúncios e as redes sociais de cada rival em uma só tela: 20 marcas monitoradas, 15 delas anunciando, cerca de 1.000 anúncios ativos.",
        "O Creative Studio gerou 423 criativos de anúncio com IA em croata, e 395 foram direto para as campanhas da Barner na Meta e no Google Ads.",
        "O Insights reuniu Meta, Google Ads e Google Analytics em um único funil, e o Assistente de IA respondeu a perguntas sobre desempenho em cerca de meio minuto.",
        "No mês encerrado em 2 de outubro de 2026, as compras subiram 160,6%, para 357, e os novos visitantes, 119%, para 10.290.",
      ],
      keywords: [
        "plataforma de marketing com IA",
        "lançamento em novo mercado",
        "crescimento de e-commerce",
        "análise de anúncios da concorrência",
        "criativos de anúncio com IA",
        "anúncios na Meta",
        "Google Ads",
        "atribuição de marketing",
        "assistente de marketing com IA",
        "Croácia",
        "óculos",
        "Barner",
        "Checkgrow",
      ],
      sections: [
        {
          label: "O desafio",
          title: "Lançar óculos para telas em um mercado que já tinha opções de sobra",
          blocks: [
            {
              type: "p",
              text: "A Barner chegou à Croácia sem nenhum histórico no país. Ninguém buscava o nome ainda, e o mercado de óculos já estava lotado de marcas de moda, grifes de óculos de sol e óticas locais, muitas delas anunciando todos os dias.",
            },
            {
              type: "p",
              text: "O produto estava pronto. O que a equipe ainda não conhecia era o mercado: quem mais vendia, o que essas marcas diziam e quais canais trariam os primeiros compradores para uma loja virtual de que ninguém tinha ouvido falar. E, como a maioria das equipes de lançamento, havia mais trabalho do que gente para fazê-lo, espalhado por mais ferramentas do que alguém gostaria de abrir.",
            },
          ],
        },
        {
          label: "Cérebro da empresa",
          title: "Primeiro, ensinar à Checkgrow tudo sobre a Barner",
          blocks: [
            {
              type: "p",
              text: "O lançamento começou no Centro de conhecimento, o cérebro da empresa na Checkgrow. Os produtos, públicos, tom de voz e oferta da Barner entraram uma única vez, em detalhe. A partir daí, tudo o que a Checkgrow produziu, do plano de campanha aos textos dos anúncios e às respostas do Assistente de IA, partiu dos fatos da própria Barner, e não de uma página em branco.",
            },
            {
              type: "p",
              text: "Depois vieram as contas. A Barner conectou Google Analytics, Meta e Google Ads, e vinculou seu perfil do Instagram em Redes sociais. Cada conexão leva poucos cliques e, juntas, elas mudaram o que o cérebro da empresa podia fazer: além de descrever o negócio, ele passou a ver o tráfego, os anúncios e as vendas da Barner em tempo real.",
            },
          ],
        },
        {
          label: "Análise de concorrentes",
          title: "Ver os anúncios de cada concorrente antes de gastar um euro",
          blocks: [
            {
              type: "p",
              text: "Com o cérebro pronto, a equipe se voltou para o mercado. Em Concorrentes, a pesquisa com IA da Checkgrow mapeou as 20 marcas e óticas que vendiam no segmento da Barner e continuou acompanhando todas elas. A primeira visão foi reveladora: 15 estavam anunciando, com cerca de 1.000 anúncios ativos no total. D.Franklin e Hawkers tinham 100 anúncios ativos cada na Meta, Meller tinha 99 e Kaleos, 87, enquanto a MÓ concentrava seus esforços no LinkedIn.",
            },
            {
              type: "figure",
              variant: "narrow",
              image: {
                src: "/success-stories/barner-croatia-launch-purchases-up-160/barner-competitors-ai-research.webp",
                alt: "Módulo Concorrentes da Checkgrow, seção Quem está anunciando: 20 concorrentes monitorados, 15 anunciando e cerca de 1.000 anúncios ativos, com o número de anúncios no LinkedIn e na Meta de COTTET, D.Franklin, General Optica, Hawkers, KALEOS, Meller, Miller & Marc e MÓ",
                width: 916,
                height: 1160,
              },
              caption: "Quem está anunciando no mercado da Barner, no módulo Concorrentes da Checkgrow, em 2 de outubro de 2026.",
            },
            {
              type: "p",
              text: "Pela primeira vez, a Barner podia ver todos os anúncios dos concorrentes em um só lugar, ao lado das redes sociais de cada um: seguidores, crescimento e os posts com melhor desempenho. E a visão se mantinha atualizada. Quando a Optika Anda passou de 13 para 31 anúncios ativos na Meta no fim de setembro, e a General Optica acrescentou 7 em um único dia, a equipe viu na mesma semana, e não meses depois, em uma apresentação. A visão também mostrou onde a Barner já se destacava: no LinkedIn, ela estava em 4º lugar entre as 10 marcas monitoradas, 25,3% acima da mediana.",
            },
          ],
        },
        {
          label: "Criativos em escala",
          title: "Mais de 400 criativos de anúncio com IA, feitos em croata e enviados direto para as campanhas",
          blocks: [
            {
              type: "p",
              text: "Conhecer o mercado tornou o briefing fácil de escrever. Em Campanhas, a Checkgrow planejou o lançamento: a Barner Launch - Aug 2026 entrou no ar no Instagram e no Google Ads em 27 de julho de 2026, e uma campanha com influenciadores se juntou a ela na Meta a partir de 8 de setembro.",
            },
            {
              type: "p",
              text: "Então o Creative Studio fez o que uma equipe pequena nunca conseguiria fazer à mão. A partir da marca, dos produtos e dos públicos registrados no cérebro da empresa, gerou 423 criativos de anúncio para a Barner, escritos em croata e dimensionados para cada posicionamento. Frases como “Predugo si pred ekranom? Zaštiti svoj vid” (“Muito tempo na frente da tela? Proteja sua visão”) falavam diretamente com as pessoas para quem a Barner faz óculos, e uma oferta simples de 30% de desconto com o cupom ALL30 dava um motivo para experimentar.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/barner-croatia-launch-purchases-up-160/barner-creative-studio-ai-meta-ad-creatives-croatian.webp",
                alt: "Creative Studio da Checkgrow dentro da campanha da Barner: criativos aprovados para a Meta, gerados por IA em croata, para os óculos para telas Barner, cada um com a oferta de 30% de desconto com o cupom ALL30, um botão Comprar agora e seu título",
                width: 2000,
                height: 1073,
              },
              caption: "Criativos aprovados para a Meta em croata, gerados no Creative Studio dentro da campanha da Barner.",
            },
            {
              type: "p",
              text: "Desses criativos, 395 foram aprovados e enviados para as campanhas a partir da mesma tela, sem exportar, subir de novo ou remontar anúncios em outra ferramenta. Como cada criativo continuava ligado aos seus resultados, os relatórios orientavam a rodada seguinte: as otimizações da IA mostravam quais anúncios estavam convertendo, e era desses que a equipe fazia mais. Criar, lançar, aprender, melhorar, tudo em um só ciclo.",
            },
            {
              type: "stats",
              variant: "findings",
              items: [
                {
                  value: "423",
                  label: "criativos de anúncio gerados com IA para a Barner no Creative Studio",
                },
                {
                  value: "395",
                  label: "aprovados e enviados direto para as campanhas da Barner na Meta e no Google Ads",
                },
              ],
            },
          ],
        },
        {
          label: "Rastreamento e KPIs",
          title: "Um funil, da primeira impressão à compra",
          blocks: [
            {
              type: "p",
              text: "Antes da Checkgrow, a pergunta “está funcionando?” significava abrir três plataformas e conciliar números que nunca batiam. No Insights, Meta, Google Ads e Google Analytics ficam em um único funil, e toda a jornada do cliente pode ser lida de cima a baixo.",
            },
            {
              type: "p",
              text: "No topo, os anúncios na Meta geraram 3,8 milhões de impressões e 33.600 cliques, e o Google Ads, 605.700 impressões e 7.727 cliques. No meio, os compradores navegaram por listas de produtos 86.765 vezes e abriram páginas de produto 25.039 vezes. Na base estavam as compras, e um clique nelas mostrava de onde vinham.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/barner-croatia-launch-purchases-up-160/barner-insights-conversion-funnel-attribution.webp",
                alt: "Funil de conversão da Barner no Insights da Checkgrow: impressões e cliques da Meta e do Google Ads no topo do funil, visualizações de produto no meio, compras na base, e as origens das compras por sessão: vendas de catálogo no Instagram pago 39,5%, direto 13,2%, Performance Max 11,1%",
                width: 1596,
                height: 1150,
              },
              caption: "O funil e as origens das compras da Barner no Insights da Checkgrow.",
            },
            {
              type: "p",
              text: "Esse clique encerrou a discussão que toda equipe de lançamento tem. Por sessão, a campanha de vendas de catálogo no Instagram pago trouxe mais compras, 39,5%, à frente das visitas diretas, com 13,2%, e da campanha Performance Max do Google, com 11,1%. No total, 151 compras vieram de uma campanha e 92 sem campanha. O Insights explica até por que dois números diferentes podem estar certos: a atribuição por sessão diz qual visita converteu, e a atribuição por primeiro usuário diz qual canal trouxe o cliente pela primeira vez.",
            },
          ],
        },
        {
          label: "Assistente de IA",
          title: "Perguntar aos dados em vez de garimpá-los",
          blocks: [
            {
              type: "p",
              text: "Com tudo conectado, a equipe parou de montar relatórios para responder perguntas. Passou a perguntar. No início de outubro, alguém digitou uma pergunta simples no Assistente de IA: quais anúncios estão convertendo melhor na Meta?",
            },
            {
              type: "p",
              text: "Cerca de meio minuto depois, veio a resposta, com uma tabela. Nos 30 dias de 7 de setembro a 6 de outubro, Brad Offer 34,30 foi o anúncio mais forte na Meta: 13 conversões com € 736,11, o menor custo por conversão entre os anúncios com volume real, € 56,62, e a maior receita, € 679,07. Tortoise Offer 34,30 trouxe mais conversões, 16, mas a € 68,76 cada.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/barner-croatia-launch-purchases-up-160/barner-ai-assistant-best-converting-meta-ads.webp",
                alt: "Assistente de IA da Checkgrow respondendo à pergunta “Quais anúncios estão convertendo melhor na Meta”: uma tabela com os principais anúncios da Barner na Meta por conversões, gasto, custo por conversão, CTR e receita, liderada por Brad Offer 34,30",
                width: 1380,
                height: 1012,
              },
              caption: "O Assistente de IA respondendo a uma pergunta sobre desempenho com os dados conectados da Meta da Barner, em outubro de 2026.",
            },
            {
              type: "p",
              text: "Sem exportações, sem planilhas e sem esperar o relatório semanal. A mesma conversa pode trazer os concorrentes, os criativos ou o funil, porque o Assistente de IA responde com base no cérebro da empresa e nas contas conectadas da Barner, e não na internet aberta. Uma análise de desempenho vira uma conversa.",
            },
            {
              type: "stats",
              variant: "findings",
              items: [
                {
                  value: "€ 56,62",
                  label: "menor custo por conversão com volume real: Brad Offer 34,30, de 7 de setembro a 6 de outubro de 2026",
                },
                {
                  value: "€ 679,07",
                  label: "de receita com Brad Offer 34,30 nos mesmos 30 dias, a maior entre os anúncios na Meta",
                },
                {
                  value: "16",
                  label: "conversões de Tortoise Offer 34,30, o maior volume",
                },
              ],
            },
          ],
        },
        {
          label: "O que a Checkgrow encontrou",
          title: "O Instagram trouxe o público, e a loja virtual converteu",
          blocks: [
            {
              type: "p",
              text: "Assim que as contas de Instagram e Meta da Barner foram conectadas, o quadro dos canais ficou claro em poucos dias, e as sessões por canal estavam a um clique no Insights. O Instagram foi o motor do lançamento: 9.545 sessões, 6.966 delas vindas de anúncios pagos, à frente do Google, com 4.143, e das visitas diretas, com 3.444. Só o Instagram pago trouxe 32.198 usuários, e a busca paga do Google, 16.186.",
            },
            {
              type: "p",
              text: "A busca fez seu trabalho silencioso. Quando as pessoas na Croácia pesquisavam o novo nome, o anúncio do Google “Barner je stigao u Hrvatsku” (“A Barner chegou à Croácia”) estava lá, e converteu 13 vezes, com CTR de 11,82%.",
            },
            {
              type: "stats",
              variant: "findings",
              items: [
                {
                  value: "9.545",
                  label: "sessões no Instagram, 6.966 delas vindas de anúncios pagos",
                },
                {
                  value: "32.198",
                  label: "usuários trazidos pelo Instagram pago, à frente da busca paga do Google, com 16.186",
                },
                {
                  value: "11,82%",
                  label: "de CTR no anúncio de busca da marca, com 13 conversões",
                },
              ],
            },
          ],
        },
        {
          label: "Os resultados",
          title: "Compras crescem 160,6%, novos visitantes, 119%",
          blocks: [
            {
              type: "p",
              text: "Um mês depois do lançamento, os números confirmaram o que a equipe tinha visto crescer dia após dia. Entre 2 de setembro e 2 de outubro de 2026, a loja virtual da Barner registrou 357 compras, 160,6% a mais que as 137 do mês anterior. Os novos visitantes mais que dobraram, de 4.700 para 10.290, alta de 119%.",
            },
            {
              type: "stats",
              variant: "results",
              items: [
                {
                  value: "357",
                  label: "compras, 160,6% a mais que no período anterior",
                },
                {
                  value: "+119%",
                  label: "de novos visitantes: 10.290 primeiras visitas contra 4.700",
                },
                {
                  value: "69.190",
                  label: "visualizações de página, com 86.765 visualizações de listas de produtos",
                },
              ],
            },
            {
              type: "p",
              text: "O dia de maior movimento foi 29 de setembro, com 14.809 eventos no site, e a sexta-feira virou o dia mais forte da semana. Só a campanha de lançamento registrou 316 compras até 2 de outubro. O Smart Reporting resume tudo automaticamente, e a equipe entende o mês em um minuto, em vez de montar o relatório.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/barner-croatia-launch-purchases-up-160/barner-smart-reporting-new-visitors-119.webp",
                alt: "Smart Reporting da Checkgrow para a Barner: Instagram pago como principal fonte de tráfego, novos visitantes em alta de 119%, com 10.290 primeiras visitas contra 4.700, pico de atividade em 29 de setembro, com 14.809 eventos, principais eventos e sessões por canal, lideradas pelo Instagram, com 9.545",
                width: 1796,
                height: 1084,
              },
              caption: "Alta de 119% nos novos visitantes e sessões por canal, no Smart Reporting da Checkgrow.",
            },
          ],
        },
      ],
      statement: {
        text: "A Barner entrou na Croácia diante de 20 concorrentes e cerca de 1.000 anúncios ativos, com uma loja virtual nova e uma marca desconhecida no país. A Checkgrow deu à equipe um só lugar para conhecer o mercado, produzir os criativos, rodar as campanhas e acompanhar os resultados e, um mês depois, a loja registrava 357 compras, contra 137 antes.",
        cite: "Checkgrow",
      },
      faq: [
        {
          q: "Como uma marca de e-commerce pode entrar em um novo país com a Checkgrow?",
          a: "Conduzindo todo o lançamento a partir de um único workspace da Checkgrow. A Barner montou o cérebro da empresa no Centro de conhecimento, conectou Google Analytics, Meta, Google Ads e Instagram, pesquisou os anúncios de cada concorrente em Concorrentes, gerou seus criativos de anúncio no Creative Studio e acompanhou os resultados no Insights. No primeiro mês do lançamento na Croácia, as compras subiram 160,6% e os novos visitantes, 119%.",
        },
        {
          q: "O que é o cérebro da empresa e por que ele importa para o marketing com IA?",
          a: "O cérebro da empresa é um registro estruturado de tudo o que torna seu negócio único: produtos, públicos, tom de voz da marca, ofertas e metas. Na Checkgrow, ele fica no Centro de conhecimento e alimenta todos os recursos de IA, para que planos de campanha, textos de anúncio e respostas do Assistente de IA se baseiem nos seus próprios fatos, e não em suposições genéricas. Conectar contas como Google Analytics, Meta e Google Ads acrescenta dados de desempenho em tempo real a esse contexto.",
        },
        {
          q: "Quais contas e ferramentas a Checkgrow consegue conectar?",
          a: "A Checkgrow se integra com Meta (anúncios no Facebook e no Instagram), Google Ads, Google Analytics, LinkedIn, Instagram e Notion, além de fluxos de automação. Uma vez conectados, os dados chegam a um único workspace: o Insights lê tráfego, anúncios e conversões em conjunto, e o Assistente de IA responde a perguntas sobre todos eles.",
        },
        {
          q: "Como a Checkgrow monitora os anúncios e as redes sociais dos concorrentes?",
          a: "Em Concorrentes, a pesquisa com IA da Checkgrow acompanha as marcas que você escolher e mostra os anúncios ativos delas na Meta e no LinkedIn, seus seguidores e o crescimento nas redes sociais e os posts com melhor desempenho, ao lado de temas, palavras-chave e notícias. A Barner monitorou 20 concorrentes assim e conseguia ver cerca de 1.000 anúncios ativos em uma só tela, além de perceber mudanças, como um rival que mais que dobrou seus anúncios ativos, na mesma semana.",
        },
        {
          q: "Como uma equipe de marketing pequena pode produzir centenas de criativos de anúncio com IA?",
          a: "Com o Creative Studio, que gera criativos de anúncio a partir da marca, dos produtos e dos públicos do cérebro da empresa, nos idiomas e formatos que cada canal exige. Sua equipe revisa e aprova as peças e depois as envia direto para a campanha, sem remontar anúncios em outra ferramenta. A Barner gerou 423 criativos em croata e enviou 395 para suas campanhas na Meta e no Google Ads, depois usou os relatórios de IA para produzir mais dos anúncios que convertiam.",
        },
        {
          q: "Como ver quais anúncios e canais realmente trazem compras?",
          a: "O Insights da Checkgrow reúne Meta, Google Ads e Google Analytics em um único funil, de impressões e cliques no topo até as compras na base, e mostra de onde veio cada conversão. Ele separa a atribuição por sessão, a visita em que a compra aconteceu, da atribuição por primeiro usuário, o canal que trouxe o cliente pela primeira vez, para que os dois números possam ser interpretados corretamente.",
        },
        {
          q: "O que posso perguntar ao Assistente de IA da Checkgrow?",
          a: "Qualquer coisa sobre sua empresa e o desempenho dela: quais anúncios convertem melhor, como este mês se compara ao anterior, o que um concorrente lançou nesta semana ou quais criativos produzir em seguida. O Assistente de IA responde com base no cérebro da empresa e nas contas conectadas, não na internet aberta. Quando a Barner perguntou quais anúncios estavam convertendo melhor na Meta, ele devolveu, em cerca de 33 segundos, uma tabela com os principais anúncios, com gasto, conversões, custo por conversão, CTR e receita.",
        },
        {
          q: "Em quanto tempo uma empresa vê resultados com a Checkgrow?",
          a: "Depende do mercado, do orçamento e da oferta, e nenhuma plataforma pode prometer um número. Montar o cérebro da empresa e conectar as contas vem primeiro, e a análise de concorrentes e os criativos podem vir logo em seguida. No caso da Barner, o primeiro mês completo do lançamento na Croácia já mostrou compras 160,6% maiores e novos visitantes 119% acima do período anterior.",
        },
      ],
      footnote: "Dados do workspace da Barner na Checkgrow, coletados em 2 de outubro de 2026. A resposta do Assistente de IA cobre de 7 de setembro a 6 de outubro de 2026.",
    },
    {
      slug: "wespa-2028-leads-in-a-month",
      company: "WESPA",
      draft: false,
      title: "Como o WESPA, espaço de coworking e hospitalidade em Zagreb, captou 2.028 leads com marketing baseado em IA",
      description: "Como o WESPA, espaço de coworking e hospitalidade em Zagreb, usou a Checkgrow para análise de concorrentes, auditorias do site, conteúdo com IA e tarefas: 2.028 leads e 6x mais conversas no WhatsApp.",
      kicker: "Coworking e hospitalidade, Croácia",
      publishedAt: "2026-10-14",
      heroStats: [
        {
          value: "2.028",
          label: "leads captados na Checkgrow em sete campanhas",
        },
        {
          value: "+496%",
          label: "de conversas no WhatsApp em um mês, de 99 para 590",
        },
      ],
      features: [
        "Centro de conhecimento",
        "Concorrentes",
        "Redes sociais",
        "Site",
        "Campanhas",
        "Conteúdo",
        "Leads",
        "Tarefas",
        "Insights",
      ],
      hero: {
        src: "/success-stories/wespa-2028-leads-in-a-month/wespa-hospitality-zagreb-live-music-event.webp",
        alt: "WESPA Hospitality, em Zagreb: um DJ e um saxofonista se apresentando sob luz azul em um evento do WESPA, com o logo da WESPA Hospitality",
        width: 1800,
        height: 1200,
      },
      clientMark: "",
      about: {
        summary: "Operador de coworking, escritórios e espaços para eventos em Zagreb, com salas de reunião, uma programação de eventos de hospitalidade e uma comunidade em crescimento.",
        facts: [
          {
            label: "Setor",
            value: "Coworking, escritórios e hospitalidade",
          },
          {
            label: "Localização",
            value: "Zagreb, Croácia",
          },
          {
            label: "Mercado",
            value: "Empresas e profissionais em Zagreb",
          },
          {
            label: "Período analisado",
            value: "2 de setembro a 2 de outubro de 2026",
          },
        ],
      },
      lead: "O WESPA administra espaços de coworking, escritórios privativos, salas de reunião e espaços para eventos em Zagreb, com uma programação de eventos e uma comunidade em crescimento. Tinha os espaços e as pessoas. O que queria era um fluxo constante de gente nova perguntando por eles: uma visita, uma mesa, uma sala para um workshop, um local para uma festa. Com o marketing rodando na Checkgrow, o WESPA captou 2.028 leads em um só lugar, e as conversas no WhatsApp se multiplicaram por seis em um mês.",
      takeaways: [
        "O WESPA montou o cérebro da empresa no Centro de conhecimento da Checkgrow e conectou Google Analytics, Meta, Google Ads e Instagram, para que cada campanha partisse dos mesmos fatos e dados.",
        "Os módulos Concorrentes e Redes sociais monitoraram em um só lugar as redes, o crescimento e os anúncios ativos de nove coworkings rivais, e mostraram o Instagram do WESPA em 2º lugar entre 8 contas locais.",
        "O módulo Site auditou o wespa.hr em conversão, SEO e visibilidade em IA, e o módulo Conteúdo trouxe tendências de mercado prontas para virar posts e artigos com um clique.",
        "O módulo Tarefas transformou tudo isso em uma lista de afazeres priorizada e recomendada pela IA, enquanto cinco campanhas, uma por oferta, levaram cada lead ao módulo Leads da Checkgrow: 2.028 vindos de sete campanhas.",
        "Em todos os canais, 26,8% dos visitantes engajados converteram no fundo do funil, as conversas no WhatsApp subiram 496% e os novos visitantes, 136%.",
      ],
      keywords: [
        "marketing para coworking",
        "marketing para hospitalidade",
        "marketing para espaços de eventos",
        "geração de leads",
        "coworking em Zagreb",
        "auditoria de conversão de site",
        "SEO e GEO",
        "visibilidade em IA",
        "tendências de conteúdo",
        "tarefas de marketing com IA",
        "funil de marketing",
        "leads pelo WhatsApp",
        "análise de concorrentes",
        "WESPA",
        "Checkgrow",
      ],
      sections: [
        {
          label: "O desafio",
          title: "Muito espaço para vender, e nove rivais vendendo o mesmo",
          blocks: [
            {
              type: "p",
              text: "Coworking é um mercado em que todo mundo promete as mesmas três coisas: flexibilidade, comunidade e um bom café. O WESPA oferece mais que uma mesa: seus espaços recebem sessões de fotos, workshops, shows e festas de empresa. Mas, em Zagreb, ele disputava com outros nove operadores os mesmos freelancers, startups e empresas, e alguns deles investiam pesado em anúncios.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-event-space-zagreb-catering-bar.webp",
                alt: "Espaço de eventos do WESPA em Zagreb preparado para um evento corporativo: uma longa mesa de bufê com canapés sob um lustre moderno, um bar rosa iluminado e uma pista de dança com luzes de balada",
                width: 1800,
                height: 1201,
              },
              caption: "O espaço de eventos do WESPA em Zagreb, preparado para uma comemoração de empresa.",
            },
            {
              type: "p",
              text: "A comunidade do WESPA já era um de seus pontos fortes, e o público no Instagram mostrava isso. Mas seguidor não é lead. A pergunta real era como transformar essa atenção em conversas com pessoas prontas para reservar uma visita, uma sala de reunião, uma mesa ou um espaço para eventos, e saber qual mensagem as tinha trazido.",
            },
          ],
        },
        {
          label: "Cérebro da empresa",
          title: "Começar por tudo o que torna o WESPA diferente",
          blocks: [
            {
              type: "p",
              text: "O trabalho começou no Centro de conhecimento, o cérebro da empresa na Checkgrow. Os espaços, planos de assinatura, salas de reunião, eventos e o programa de comunidade do WESPA foram detalhados, com os públicos que cada um atende. O cérebro está hoje 79% completo, o suficiente para que cada campanha e cada texto partam da oferta real do WESPA, e não de um discurso genérico de coworking.",
            },
            {
              type: "p",
              text: "Depois, o WESPA conectou suas contas: Google Analytics, Meta, Google Ads e seu Instagram, @wespa.hr. No Grafo de conhecimento, tudo isso se organiza em torno do próprio WESPA: de um lado, o conhecimento da empresa, com marca, produtos, personas, perfis de cliente ideal, casos de uso, palavras-chave de SEO e estratégia de conversão; do outro, o site, as campanhas, os leads, os concorrentes monitorados, as vendas e as integrações. Todos os recursos de IA da Checkgrow leem esse grafo, e é por isso que as campanhas, os conteúdos e as recomendações que vieram depois soavam como o WESPA.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-knowledge-center-company-brain-knowledge-graph.webp",
                alt: "Centro de conhecimento da Checkgrow para o WESPA Spaces, com 79% de conhecimento, nível Master Knowledge: o Grafo de conhecimento conectando o WESPA ao conhecimento da empresa (marca, produtos, personas, perfis de cliente ideal, casos de uso, palavras-chave de SEO, estratégia de conversão) e ao site, campanhas, leads, empresas monitoradas, concorrentes, vendas, integrações e memórias da IA",
                width: 2000,
                height: 1073,
              },
              caption: "O cérebro da empresa do WESPA como Grafo de conhecimento, no Centro de conhecimento da Checkgrow.",
            },
          ],
        },
        {
          label: "Análise de concorrentes",
          title: "As redes sociais e os anúncios de cada concorrente em um só lugar",
          blocks: [
            {
              type: "p",
              text: "Em seguida, a Checkgrow olhou para fora. Em Concorrentes, o WESPA acompanha, em uma única tabela, os nove operadores de coworking e espaços de trabalho com quem disputa mercado: sites, canais sociais, ritmo de crescimento do público, sede e quantos anúncios estão veiculando. Uma varredura mensal mantém o quadro atualizado, e ninguém precisa conferir à mão nove perfis do Instagram e duas bibliotecas de anúncios.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-competitors-coworking-social-media-ads-tracking.webp",
                alt: "Módulo Concorrentes da Checkgrow para o WESPA Spaces: nove concorrentes de coworking monitorados, entre eles Regus, Impact Hub Zagreb, Instant Office, Rent24, Spaces, STIR UP, Coworking Labin, Terminal Zagreb e MatchBOX Coworking, com sites, canais sociais, crescimento de seguidores, sede, monitoramento automático e anúncios ativos no LinkedIn e na Meta",
                width: 2000,
                height: 1068,
              },
              caption: "Os nove concorrentes monitorados do WESPA, com crescimento nas redes e anúncios ativos, no módulo Concorrentes da Checkgrow.",
            },
            {
              type: "p",
              text: "A tabela deixou o mercado legível num relance. A Regus, a gigante internacional, rodava 98 anúncios na Meta e 45 no LinkedIn, enquanto a maioria dos operadores locais mal anunciava: a Instant Office tinha 3 anúncios ativos na Meta e o Terminal Zagreb, 1. O crescimento do público contava sua própria história, com a Instant Office subindo 3,38% e o Coworking Labin, 1,91%, enquanto o Terminal Zagreb perdia seguidores.",
            },
            {
              type: "p",
              text: "O módulo Redes sociais colocou o próprio Instagram do WESPA nesse contexto, e o quadro era animador. Entre as oito contas locais monitoradas, o WESPA estava em 2º lugar, com 5.000 seguidores, 172,9% acima da mediana dos concorrentes, de 1.800, e à frente de Rent24, MatchBOX Coworking Studio e Coworking Labin. Só o Spaces estava à frente. O WESPA não precisava construir um público do zero; precisava dar ao que já tinha um motivo para entrar em contato.",
            },
          ],
        },
        {
          label: "Site",
          title: "Ver o wespa.hr como os visitantes, os buscadores e a IA o veem",
          blocks: [
            {
              type: "p",
              text: "Anúncios só funcionam se o site converte as pessoas que eles enviam. No módulo Site, a Checkgrow fez uma auditoria completa de conversão do wespa.hr, em várias páginas, no desktop e no celular, e deu notas por área: estratégia de conversão, marca e mensagem, UX e UI, e aderência às boas práticas para empresas de serviços. Ao lado ficam SEO, rastreamento e visibilidade em IA, que mostra como o site aparece nos mecanismos de resposta de IA, além da busca tradicional.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-website-analysis-seo-geo-ai-visibility-conversion-audit.webp",
                alt: "Análise de site da Checkgrow para o wespa.hr: nota de auditoria de conversão de 32 de 100, com notas por área para estratégia de conversão, marca e mensagem, UX e UI e aderência ao playbook, 5 problemas que bloqueiam cadastros, 7 ganhos rápidos, uma verificação de rastreamento server-side e de conformidade, e abas de visibilidade em IA, SEO, rastreamento e concorrentes",
                width: 2000,
                height: 1074,
              },
              caption: "A análise do site wespa.hr na Checkgrow, com visibilidade em IA, SEO e rastreamento ao lado.",
            },
            {
              type: "p",
              text: "A auditoria foi honesta, e é esse o objetivo. Deu ao site nota 32 de 100 e apontou exatamente por quê: um hero no celular sem uma chamada para ação clara, um formulário de contato com 11 campos e nenhuma seção de perguntas frequentes para responder às dúvidas comuns. Também listou o que corrigir primeiro: 5 problemas que bloqueiam cadastros e 7 ganhos rápidos, além de uma verificação de rastreamento que recomendava tagueamento server-side. Para o WESPA, o site deixou de ser um palpite e virou uma lista de correções priorizada.",
            },
          ],
        },
        {
          label: "Campanhas",
          title: "Cinco campanhas, uma para cada motivo de entrar pela porta",
          blocks: [
            {
              type: "p",
              text: "Um coworking vende várias coisas ao mesmo tempo, e um único anúncio genérico não fala com todas elas. Então, em vez de uma campanha só, a Checkgrow planejou uma por oferta. A campanha de marca, Work. Meet. Belong. WESPA., rodou na Meta, acompanhada de mais quatro: uma para eventos, uma para escritórios e salas de reunião, uma para planos de coworking e uma para recrutamento. O Google Ads rodou em paralelo, captando quem já estava buscando.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-coworking-zagreb-photo-shoot-creative-studio-space.webp",
                alt: "Uma sessão de fotos de moda no espaço criativo do WESPA em Zagreb: um fotógrafo, um assistente de iluminação com um flash de sombrinha e um softbox, e uma modelo diante de uma parede de plantas trepadeiras",
                width: 1800,
                height: 1202,
              },
              caption: "Uma sessão de fotos em um dos espaços criativos do WESPA em Zagreb, uma das ofertas que suas campanhas divulgam.",
            },
            {
              type: "p",
              text: "Como todas as campanhas partiam do mesmo cérebro da empresa, cada uma podia dizer algo específico ao seu público sem deixar de soar como o WESPA. Um fundador procurando um escritório privativo e um freelancer procurando uma mesa semanal podiam ver, cada um, um anúncio escrito para ele, da mesma marca.",
            },
          ],
        },
        {
          label: "Conteúdo",
          title: "Conteúdo sobre as tendências do mercado, a um clique",
          blocks: [
            {
              type: "p",
              text: "Uma marca de comunidade precisa de um fluxo constante de coisas que valham a pena postar. No módulo Conteúdo, a Checkgrow pesquisa toda semana as tendências que moldam o mercado do WESPA, para palavras-chave como espaços de coworking e espaços para eventos na Europa, e classifica cada artigo pela relevância para o negócio do WESPA.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-content-trends-coworking-market-ai-articles.webp",
                alt: "Tendências do módulo Conteúdo da Checkgrow para o WESPA Spaces: escolhas da marca com 7 oportunidades prontas para reescrever e 28 artigos em foco sobre espaços de coworking e espaços para eventos na Europa, classificados por relevância, cada um com as ações Ver e Reescrever",
                width: 2000,
                height: 1078,
              },
              caption: "Tendências de mercado para o WESPA no módulo Conteúdo da Checkgrow, classificadas por relevância e prontas para reescrever.",
            },
            {
              type: "p",
              text: "Em vez de começar de uma página em branco, a equipe começa pelo mercado: um relatório segundo o qual o mercado de coworking deve chegar a US$ 17,07 bilhões até 2035, ou uma análise de onde os nômades digitais deveriam se instalar na Europa. Um clique em Reescrever transforma uma tendência em post ou artigo com a voz do WESPA, embasado no cérebro da empresa. Havia sete escolhas da marca prontas para reescrever.",
            },
          ],
        },
        {
          label: "Leads",
          title: "Todos os leads em uma lista, com a campanha que trouxe cada um",
          blocks: [
            {
              type: "p",
              text: "Rodar cinco campanhas só ajuda se você consegue diferenciá-las. No módulo Leads da Checkgrow, cada contato chega a uma única lista, marcado com a campanha que o trouxe. Ninguém no WESPA precisou copiar contatos da Meta, cruzar respostas de formulário com anúncios ou adivinhar a que oferta alguém tinha respondido.",
            },
            {
              type: "p",
              text: "A lista cresceu rápido: 2.028 leads vindos de sete campanhas, 202 deles só na última semana. Para uma equipe que também administra os espaços, os eventos e a comunidade, ter todos os leads em um só lugar, prontos para o follow-up, foi a diferença entre uma caixa de entrada lotada e um pipeline.",
            },
            {
              type: "stats",
              variant: "results",
              items: [
                {
                  value: "2.028",
                  label: "leads no módulo Leads da Checkgrow, cada um vinculado à sua campanha",
                },
                {
                  value: "7",
                  label: "campanhas trazendo leads, na Meta e no Google Ads",
                },
                {
                  value: "202",
                  label: "novos leads na última semana",
                },
              ],
            },
          ],
        },
        {
          label: "Tarefas",
          title: "Uma lista de tarefas com IA para o que importa nesta semana",
          blocks: [
            {
              type: "p",
              text: "Com concorrentes, site, conteúdo e campanhas no mesmo workspace, a pergunta seguinte é sempre a mesma: o que fazer primeiro? O módulo Tarefas responde. A IA da Checkgrow lê tudo o que está conectado ao workspace e recomenda as tarefas que importam para o WESPA naquele momento, cada uma com prioridade, categoria e estimativa de tempo.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-ai-recommended-marketing-tasks.webp",
                alt: "Tarefas recomendadas da Checkgrow para o WESPA: oito tarefas de marketing, análise, design e vendas geradas por IA, com prioridade, categoria e estimativa de tempo, entre elas lançar uma campanha em vídeo de coworking em Zagreb, validar o rastreamento de conversões, montar uma campanha em carrossel com quatro ofertas e criar uma landing page comparativa de coworking",
                width: 2000,
                height: 1265,
              },
              caption: "Tarefas recomendadas pela IA para o WESPA no módulo Tarefas da Checkgrow, atualizadas toda semana.",
            },
            {
              type: "p",
              text: "As recomendações eram específicas para o WESPA, não conselhos genéricos de marketing: lançar uma campanha em vídeo de coworking em Zagreb com € 20 por dia, validar o rastreamento de conversões, montar uma campanha em carrossel com quatro ofertas do WESPA, criar uma landing page comparando planos de coworking, desenvolver um cluster de SEO para buscas por coworking em Zagreb e configurar uma sequência de follow-up para os contatos recebidos. Um clique em Gerar tarefa transforma qualquer uma delas em uma tarefa com o trabalho já definido, e a lista é atualizada toda semana.",
            },
          ],
        },
        {
          label: "Rastreamento e KPIs",
          title: "Um funil que mostra onde as pessoas convertem",
          blocks: [
            {
              type: "p",
              text: "Com Google Analytics, Meta e Google Ads lado a lado no Insights, o WESPA consegue analisar todo o funil em todos os canais, da primeira visita ao momento em que alguém entra em contato. No topo, 71.039 eventos: visualizações de página, sessões e primeiras visitas. No meio, 2.119 ações de engajamento, lideradas por 1.032 interações no WhatsApp, 749 downloads de arquivos e 338 formulários iniciados. Na base, 567 conversões: confirmações e formulários enviados.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-insights-funnel-reporting-conversion-rate.webp",
                alt: "Relatório de funil do Insights da Checkgrow para o WESPA, em todos os canais: 71.039 eventos no topo do funil, 2.119 eventos no meio do funil, liderados por 1.032 interações no WhatsApp, e 567 conversões no fundo do funil, com taxa de 26,8% de visitantes engajados para conversões e a busca paga do Google como principal origem",
                width: 2000,
                height: 612,
              },
              caption: "O funil do WESPA em todos os canais no Insights da Checkgrow, com as taxas de conversão entre as etapas.",
            },
            {
              type: "p",
              text: "O número que se destacou foi o da última etapa. Das pessoas que se engajaram, 26,8% chegaram a converter no fundo do funil, uma taxa forte para um negócio em que cada conversão é um contato real. A busca paga do Google trouxe mais conversões, seguida pela busca orgânica do Google e pelas visitas diretas.",
            },
            {
              type: "p",
              text: "O Insights também mostrou o que levava as pessoas a entrar em contato. Não era a mensagem de marca bem acabada; era a comunidade. Duas versões do criativo community5 .1 trouxeram mais resultados na Meta, 239 e 133, ambas com CTR acima de 3%, e um criativo de um único evento de culinária trouxe sozinho 128 resultados.",
            },
            {
              type: "stats",
              variant: "findings",
              items: [
                {
                  value: "26,8%",
                  label: "dos visitantes engajados converteram no fundo do funil, em todos os canais",
                },
                {
                  value: "1.032",
                  label: "interações no WhatsApp no meio do funil",
                },
                {
                  value: "239",
                  label: "resultados do principal criativo de comunidade, com CTR de 3,56%",
                },
              ],
            },
          ],
        },
        {
          label: "Os resultados",
          title: "Seis vezes mais conversas no WhatsApp",
          blocks: [
            {
              type: "p",
              text: "Para o WESPA, a conversa que mais importa acontece no WhatsApp, onde uma pergunta sobre uma mesa vira uma visita. Em um mês, essas conversas passaram de 99 para 590, alta de 496%, iniciadas por 275 pessoas diferentes. O Smart Reporting mostrou isso automaticamente: o WhatsApp era a principal ação no site do WESPA.",
            },
            {
              type: "stats",
              variant: "results",
              items: [
                {
                  value: "590",
                  label: "conversas no WhatsApp, alta de 496%, de 275 pessoas",
                },
                {
                  value: "+136%",
                  label: "de novos visitantes: 4.963 primeiras visitas contra 2.103 antes",
                },
                {
                  value: "+85,6%",
                  label: "de visualizações de página, chegando a 10.975",
                },
              ],
            },
            {
              type: "p",
              text: "O restante do funil acompanhou. Os novos visitantes subiram 136%, para 4.963, as visualizações de página, 85,6%, para 10.975, e a segunda-feira virou o dia mais movimentado da semana no site.",
            },
            {
              type: "figure",
              variant: "wide",
              image: {
                src: "/success-stories/wespa-2028-leads-in-a-month/wespa-smart-reporting-new-visitors-whatsapp-leads.webp",
                alt: "Smart Reporting da Checkgrow para o WESPA: busca paga do Google como principal fonte de tráfego, novos visitantes em alta de 136%, com 4.963 primeiras visitas contra 2.103, segunda-feira como o dia da semana mais movimentado e o WhatsApp como principal evento de ação, com 590 cliques de 275 usuários",
                width: 852,
                height: 273,
              },
              caption: "Alta de 136% nos novos visitantes e o WhatsApp como principal ação, no Smart Reporting da Checkgrow.",
            },
          ],
        },
      ],
      statement: {
        text: "O WESPA já tinha os espaços e a comunidade. A Checkgrow lhe deu um só lugar para entender o mercado, corrigir o site, publicar o que o mercado estava discutindo, rodar uma campanha para cada oferta e saber o que fazer em seguida, e isso transformou atenção em 2.028 leads e seis vezes mais conversas no WhatsApp.",
        cite: "Checkgrow",
      },
      faq: [
        {
          q: "Como um espaço de coworking pode gerar mais leads com a Checkgrow?",
          a: "Conduzindo o marketing a partir de um único workspace da Checkgrow: descreva os espaços e as ofertas no Centro de conhecimento, pesquise os concorrentes locais, lance uma campanha para cada oferta e reúna todos os contatos no módulo Leads. O WESPA, operador de coworking em Zagreb, captou assim 2.028 leads e aumentou suas conversas no WhatsApp em 496% em um mês.",
        },
        {
          q: "Por que rodar uma campanha separada para cada oferta?",
          a: "Porque quem procura uma sala de reunião, um escritório privativo ou uma mesa de coworking reage a mensagens diferentes. No módulo Campanhas da Checkgrow, cada oferta pode ter sua própria campanha, criada a partir do mesmo cérebro da empresa, para que a marca continue consistente. O WESPA rodou assim cinco campanhas na Meta, para comunidade, eventos, escritórios e salas de reunião, coworking e recrutamento, além do Google Ads.",
        },
        {
          q: "Como o módulo Leads da Checkgrow registra de onde vêm os leads?",
          a: "Cada contato de uma campanha conectada chega a uma única lista no módulo Leads da Checkgrow, marcado com a campanha que o trouxe. Isso elimina o trabalho manual de exportar contatos das plataformas de anúncios e cruzá-los com os anúncios, e mostra a que oferta cada lead respondeu, para que o follow-up comece pela conversa certa.",
        },
        {
          q: "Como a Checkgrow audita um site em conversão, SEO e visibilidade em IA?",
          a: "O módulo Site da Checkgrow faz uma auditoria de conversão em várias páginas, no desktop e no celular, dá nota a cada área, como estratégia de conversão, mensagem e UX, e transforma os achados em uma lista de correções priorizada, com bloqueios e ganhos rápidos. SEO, rastreamento e visibilidade em IA, ou seja, como o site aparece nos mecanismos de resposta de IA, ficam no mesmo lugar. A auditoria do WESPA encontrou 5 problemas que bloqueavam cadastros e 7 ganhos rápidos.",
        },
        {
          q: "Como uma empresa pode criar conteúdo sobre as tendências do seu mercado com IA?",
          a: "O módulo Conteúdo da Checkgrow pesquisa toda semana as notícias e tendências ligadas às suas palavras-chave e classifica cada artigo pela relevância para o seu negócio. Um clique em Reescrever transforma uma tendência em post ou artigo com a sua voz, embasado no cérebro da empresa. É assim que o WESPA acompanha as tendências de coworking e de espaços para eventos na Europa.",
        },
        {
          q: "O que são as tarefas recomendadas por IA na Checkgrow?",
          a: "O módulo Tarefas da Checkgrow lê seus dados conectados, campanhas, auditoria do site e concorrentes, e recomenda as tarefas mais importantes no momento, cada uma com prioridade, categoria e estimativa de tempo. Um clique gera a tarefa completa. Para o WESPA, as recomendações incluíram validar o rastreamento de conversões, uma campanha em vídeo de coworking em Zagreb e uma landing page comparativa.",
        },
        {
          q: "Como comparar meu Instagram com o dos concorrentes?",
          a: "O módulo Redes sociais da Checkgrow classifica seu Instagram em relação às contas dos concorrentes que você monitora, com sua posição, a diferença de seguidores e quanto você está acima ou abaixo da mediana dos concorrentes. O WESPA usou o recurso para ver que estava em 2º lugar entre 8 contas locais de coworking, 172,9% acima da mediana, o que orientou uma estratégia construída sobre a comunidade que já tinha.",
        },
        {
          q: "O que a Checkgrow mostra sobre a publicidade dos concorrentes?",
          a: "O módulo Concorrentes da Checkgrow usa pesquisa com IA para acompanhar as empresas que você escolher e reunir os anúncios ativos delas na Meta e no LinkedIn, junto com o público nas redes sociais, temas e notícias. O WESPA acompanha assim nove coworkings rivais, da Regus, com 143 anúncios ativos, a operadores locais que quase não anunciam, sem conferir cada biblioteca de anúncios à mão.",
        },
        {
          q: "Como saber quais anúncios geram conversas no WhatsApp?",
          a: "O Insights da Checkgrow reúne Google Analytics, Meta e Google Ads em uma única visão e acompanha as ações que importam para o seu negócio, como cliques no WhatsApp, formulários ou reservas, ao lado das campanhas e dos criativos que as geraram. No caso do WESPA, mostrou que os criativos centrados na comunidade e os anúncios do Google para salas de reunião e passes de teste gratuitos iniciaram mais conversas.",
        },
        {
          q: "A Checkgrow é indicada para negócios locais de serviços?",
          a: "Sim. Negócios locais que vendem vários serviços, como espaços de coworking, estúdios, clínicas ou espaços para eventos, ganham ao manter cada oferta, campanha e lead em um único workspace. A Checkgrow dá a uma equipe pequena a análise de concorrentes, o planejamento de campanhas, o acompanhamento de leads e os relatórios que, de outra forma, exigiriam várias ferramentas e especialistas.",
        },
      ],
      footnote: "Dados do workspace do WESPA na Checkgrow, de 2 de setembro a 2 de outubro de 2026.",
    },
  ],
};

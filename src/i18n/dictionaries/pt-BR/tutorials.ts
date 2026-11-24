import type { Localized } from "../../types";
import type { tutorials as source } from "../en/tutorials";

export const tutorials: Localized<typeof source> = {
  items: [
    {
      slug: "sales-outreach",
      title: "Da pesquisa de empresas à prospecção no LinkedIn",
      description: "Aprenda a encontrar empresas relevantes, identificar os tomadores de decisão e preparar uma prospecção personalizada com a suíte de Vendas da Checkgrow.",
      category: "Sales",
      publishedAt: "2026-10-01",
      cover: "/tutorials/sales-outreach/cover.webp",
      introduction: "Uma boa prospecção começa antes da primeira mensagem. Neste tutorial, acompanhe um fluxo real no workspace da Drooms: use o conhecimento da sua empresa para encontrar contas relevantes, distribuí-las para a sua equipe e construir as mensagens em torno das pessoas que você quer alcançar.",
      prerequisites: "Revise seus perfis de cliente ideal no Centro de conhecimento e conecte a conta de LinkedIn de cada vendedor em Integrações.",
      steps: [
        {
          id: "define-your-audience",
          title: "Comece pelo público certo",
          body: "Abra seus perfis de cliente ideal (ICPs) no Centro de conhecimento. Confira os setores, as regiões, o porte das empresas e os cargos-alvo. Esses dados orientam quais empresas e tomadores de decisão a Checkgrow procura, então acerte-os antes de montar uma lista.",
        },
        {
          id: "find-and-track",
          title: "Encontre e acompanhe empresas relevantes",
          body: "Em Alvos, abra Busca e escolha um ICP. Revise as informações da empresa, o site e o perfil no LinkedIn, depois selecione as contas que você quer e escolha Acompanhar. Use a lista de acompanhamento para filtrar as contas e abrir a pesquisa e os tomadores de decisão de cada empresa.",
        },
        {
          id: "assign-your-team",
          title: "Dê um foco a cada vendedor",
          body: "Use o Mission Control para configurar a atribuição automática por setor e região. Abra uma empresa acompanhada para revisar seus tomadores de decisão. Se faltar algum cargo, ajuste as posições e use Encontrar pessoas. Assim, seus vendedores podem trabalhar a partir dos alvos atribuídos a eles em Prospecção.",
        },
        {
          id: "teach-the-brain",
          title: "Ensine ao Brain como você se comunica",
          body: "Abra o perfil do vendedor em Prospecção. Adicione aprendizados úteis e exemplos de conversas que deram certo, depois defina a personalidade, o idioma e o estilo. Teste comentários, primeiras mensagens e follow-ups no playground de mensagens. São rascunhos de treino: edite-os e dê feedback para mostrar ao Brain o que soa certo.",
        },
        {
          id: "review-outreach",
          title: "Revise a prospecção antes do envio",
          body: "Confira os limites de conexão, as configurações de aquecimento e as regras de aprovação. A gravação mostra uma sequência que vai do pedido de conexão a um comentário em um post relevante e depois a uma mensagem. Mantenha a aprovação ativada enquanto ajusta a sua abordagem. Na fila de prospecção ao vivo, aprovar um comentário ou uma mensagem faz o envio, ao contrário dos rascunhos de treino do playground.",
        },
        {
          id: "daily-routine",
          title: "Faça da revisão parte da rotina diária",
          body: "Volte a Prospecção para revisar rascunhos, ajustar o texto ou dar feedback quando uma mensagem não acertar o tom. Confira a atividade dos alvos para ver o que aconteceu e use a visão geral da Força de vendas para ver os alvos atribuídos e a atividade da equipe. Continue ensinando o Brain conforme descobre o que funciona com o seu público.",
        },
      ],
      videos: [
        {
          id: "quick-walkthrough",
          title: "O tour rápido",
          description: "Veja o fluxo completo em poucos minutos: ICPs, acompanhamento de empresas, o Brain e a sua revisão diária da prospecção.",
          src: "/tutorials/sales-outreach/sales-overview.mp4",
          type: "video/mp4",
          poster: "/tutorials/sales-outreach/overview-poster.webp",
          captions: "/tutorials/sales-outreach/overview.en.vtt",
          durationSeconds: 396,
          width: 1280,
          height: 746,
        },
        {
          id: "full-walkthrough",
          title: "O tour completo",
          description: "Acompanhe a explicação mais longa, tela a tela, com mais tempo dedicado à configuração, à segmentação e às configurações de prospecção.",
          src: "/tutorials/sales-outreach/sales-full.webm",
          type: "video/webm",
          poster: "/tutorials/sales-outreach/full-poster.webp",
          captions: "/tutorials/sales-outreach/full.en.vtt",
          durationSeconds: 857,
          width: 1280,
          height: 746,
        },
      ],
      takeaway: "Defina o público uma vez, dê a cada vendedor um foco claro e revise a mensagem antes de enviar. O objetivo é um fluxo de vendas repetível, baseado no conhecimento da sua empresa, e não um briefing novo a cada conversa.",
    },
  ],
};

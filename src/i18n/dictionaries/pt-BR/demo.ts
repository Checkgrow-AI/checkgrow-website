import type { Localized } from "../../types";
import type { demo as source } from "../en/demo";

export const demo: Localized<typeof source> = {
  meta: {
    title: "Fale com a gente | Checkgrow",
    description:
      "Agende uma demo de 30 minutos da Checkgrow. Saia com o onboarding da sua empresa feito, uma estratégia de growth com IA gratuita e a plataforma pronta para rodar, além de uma análise de concorrentes, uma revisão do seu site e 30 dias de acesso grátis.",
    schemaName: "Fale com a Checkgrow",
  },
  page: {
    eyebrow: "Fale com a gente",
    title: "Veja o seu motor de growth funcionando em 30 minutos.",
    lead: "Uma sessão ao vivo sobre a sua empresa, seus concorrentes e seu site. Você sai com a Checkgrow configurada e um plano claro do que fazer em seguida.",
    perksLabel: "O que você leva da demo",
    callResults: [
      "30 minutos mergulhando em resultados",
      "Onboarding na hora, estratégia de IA grátis",
      "Saia pronto para rodar",
    ],
    reassurance: "Sem cartão de crédito · Seus dados continuam seus",
    platformTitle: "Também incluído com a Checkgrow",
    platformPerks: [
      {
        title: "Análise completa de concorrentes",
        body: "Os canais, as mensagens e as campanhas dos seus concorrentes, pesquisados.",
      },
      {
        title: "Revisão do site e do fluxo de conversão",
        body: "Onde os visitantes abandonam e o que corrigir primeiro.",
      },
      {
        title: "30 dias de acesso grátis",
        body: "Teste tudo com a sua equipe. Sem cartão de crédito.",
      },
    ],
  },
  founders: {
    title: "Converse com os fundadores",
    body: "Estamos abrindo vagas especiais para um onboarding exclusivo.",
    alt: "{name}, cofundador da Checkgrow",
  },
  form: {
    stepOf: "Passo {n} de {total} · {name}",
    phases: {
      questions: "Personalize sua demo",
      time: "Agende sua conversa",
    },
    phaseLength: {
      questions: "30 s",
      time: "{n} min",
    },
    intro: {
      questions:
        "Suas respostas preparam o seu onboarding: montamos a análise de concorrentes, a revisão do site e a estratégia de IA antes da conversa.",
      time: "Escolha o horário que funciona melhor para você. O convite e o link da videochamada chegam na hora por e-mail.",
    },
    continue: "Continuar",
    back: "Voltar",
    challenges: {
      title: "O que você quer resolver primeiro?",
      /* the dropdown's empty choice */
      placeholder: "Escolha seu objetivo principal",
      /* keyed by the id sent to the API; the first option is the general one */
      labels: {
        "growth-ops": "Otimizar minha operação de growth marketing",
        leads: "Gerar mais leads qualificados",
        ads: "Reduzir meu CAC com anúncios melhores no Google, Meta ou LinkedIn",
        conversion: "Converter mais visitantes do site em leads",
        outreach: "Melhorar minha prospecção de vendas",
        content: "Criar mais e melhores conteúdos e criativos",
        geo: "Subir no Google e nas buscas com IA (SEO e GEO)",
        agents: "Trazer agentes de IA para o meu time, com segurança",
      },
    },
    spend: {
      title: "Quanto você investe em anúncios por mês?",
      monthly: "Investimento mensal em anúncios",
      around: "Cerca de",
      perMonth: "/ mês",
      less: "Menos",
      more: "Mais",
      valueText: "{amount} por mês",
      noAds: "Ainda sem anúncios ativos",
    },
    contact: {
      title: "Para onde enviamos o seu convite?",
      email: "E-mail corporativo",
      emailPlaceholder: "voce@empresa.com.br",
      phone: "Telefone",
      phonePlaceholder: "+55 11 91234-5678",
      firstName: "Nome",
      lastName: "Sobrenome",
      website: "Site da empresa",
      websitePlaceholder: "empresa.com.br",
      consent: {
        before: "Ao enviar este formulário, você concorda em ser contatado pelo time da Checkgrow e aceita a nossa",
        link: "Política de Privacidade",
        after: ".",
      },
      submit: "Enviar",
      sending: "Enviando…",
    },
    errors: {
      email: "Informe um e-mail corporativo válido",
      companyEmail: "Use o e-mail da sua empresa",
      phoneRequired: "Informe seu telefone",
      phoneInvalid: "Informe um telefone válido, ex.: +55 11 91234-5678",
      firstName: "Informe seu nome",
      lastName: "Informe seu sobrenome",
      websiteRequired: "Informe o site da sua empresa",
      websiteInvalid: "Informe um site como empresa.com.br",
    },
    booking: {
      taken: "Esse horário acabou de ser reservado. Escolha outro, por favor.",
      tooMany: "Muitas tentativas. Tente de novo em alguns minutos.",
      failed: "Não conseguimos reservar esse horário. Tente de novo.",
    },
    time: {
      /* heading of the calendar step: invite the visitor to finish */
      title: "Último passo: agende sua conversa com a gente",
      loading: "Carregando os horários disponíveis",
      loadError: "Não conseguimos carregar a agenda.",
      loadErrorHint: "Suas respostas estão salvas aqui. Tente de novo em instantes.",
      retry: "Tentar de novo",
      confirm: "Agendar minha conversa",
      confirming: "Agendando…",
      tailoredFor: "Personalizada para",
      edit: "Editar",
      noAds: "Sem anúncios ativos",
      spendPerMonth: "{amount} / mês",
      previousMonth: "Mês anterior",
      nextMonth: "Próximo mês",
      dayUnavailable: "{day}, indisponível",
      zone: "Horários no seu fuso: {zone}",
      timesOn: "Horários em {day}",
    },
  },
  confirmation: {
    meta: {
      title: "Demo confirmada | Checkgrow",
      description: "Sua demo da Checkgrow está agendada.",
    },
    eyebrow: "Demo confirmada",
    titleNamed: "Tudo certo, {name}.",
    title: "Sua demo está agendada.",
    thanks: "Obrigado pelo seu tempo. Mal podemos esperar para mostrar a Checkgrow funcionando no seu próprio negócio.",
    inviteTo: {
      before: "O convite da agenda e o link do Meet estão a caminho de",
      after: ".",
    },
    inviteGeneric: "Confira sua caixa de entrada: o convite da agenda e o link do Google Meet estão a caminho.",
    prepTitle: "Antes da conversa, preparamos",
    prep: {
      competitors: {
        title: "Análise de concorrentes",
        body: "Com quem você concorre e como eles fazem marketing.",
        bodyNamed: "Quem concorre com {site} e como essas empresas fazem marketing.",
      },
      website: {
        title: "Revisão do site e da conversão",
        body: "Onde os visitantes abandonam e o que corrigir primeiro.",
      },
      strategy: {
        title: "Sua estratégia de growth com IA",
        body: "Um primeiro plano e um relatório, prontos para analisarmos juntos.",
      },
    },
    exploreFeatures: "Conheça as funcionalidades",
    backHome: "Voltar para a página inicial",
  },
};

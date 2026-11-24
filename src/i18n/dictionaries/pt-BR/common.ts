import type { Localized } from "../../types";
import type { common as source } from "../en/common";

export const common: Localized<typeof source> = {
  nav: {
    homeLabel: "Página inicial da Checkgrow",
    links: {
      platform: "Plataforma",
      solution: "Solução",
      stories: "Histórias reais",
      features: "Funcionalidades",
      pricing: "Preços",
      faq: "FAQ",
    },
    bookDemo: "Agendar uma demo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  skipToContent: "Pular para o conteúdo",
  language: {
    label: "Idioma",
    choose: "Escolher idioma",
    suggestion: "Esta página está disponível em português.",
    switchTo: "Ver em português",
    dismiss: "Dispensar",
  },
  footer: {
    tagline: "Growth marketing nativo em IA. Um só sistema em que conhecimento, pesquisa, execução e mensuração se conectam e se potencializam.",
    links: {
      platform: "Plataforma",
      solution: "Solução",
      stories: "Histórias reais",
      features: "Funcionalidades",
      sales: "Vendas",
      pricing: "Preços",
      faq: "FAQ",
      useCases: "Casos de uso",
      successStories: "Casos de sucesso",
      news: "Novidades",
      bookDemo: "Agendar uma demo",
      documentation: "Documentação",
      changelog: "Histórico de versões",
    },
    copyright: "© Copyright Checkgrow · checkgrow.com",
    backedBy: "Com apoio de",
    euAlt: "Cofinanciado pela União Europeia",
    privacyPolicy: "Política de Privacidade",
    terms: "Termos de Serviço",
    privacySettings: "Configurações de privacidade",
    legal:
      "A Checkgrow d.o.o., registrada em Zagreb, Croácia, com número de IVA HR16006061302, opera de acordo com a regulamentação aplicável da Croácia e da União Europeia. Não coletamos, tratamos nem armazenamos dados pessoais ou empresariais sem o consentimento explícito do usuário ou uma base legal conforme definida pelo Regulamento Geral sobre a Proteção de Dados (GDPR). Todas as integrações e autenticações são feitas com segurança por meio de provedores autorizados, e não armazenamos senhas nem acessamos contas de terceiros sem a devida permissão. Todos os direitos, obrigações, condições de uso de dados, condições de pagamento e detalhes de conformidade estão descritos integralmente em nossos Termos e Condições e na nossa Política de Privacidade. Ao usar a plataforma Checkgrow, você reconhece e aceita essas políticas.",
  },
  notFound: {
    title: "Página não encontrada",
    body: "Esta página não existe ou mudou de endereço. Comece pela página inicial ou confira as Novidades para ver nossos guias e casos de clientes mais recentes.",
    home: "Ir para a página inicial",
    browseNews: "Ver Novidades",
  },
};

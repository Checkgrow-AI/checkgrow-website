import type { Localized } from "../../types";
import type { news as source } from "../en/news";

export const news: Localized<typeof source> = {
  listing: {
    meta: {
      title: "Novidades da Checkgrow | Casos de sucesso, tutoriais e atualizações de segurança",
      description: "Casos de sucesso, tutoriais práticos e atualizações de segurança da Checkgrow. Veja como as equipes crescem com a plataforma e os fluxos de trabalho por trás disso.",
    },
    name: "Novidades da Checkgrow",
    heading: "Novidades",
    introLead: "Por dentro da Checkgrow.",
    introBody: "Guias práticos, a evolução da plataforma e o trabalho por trás do seu workspace.",
    filterLabel: "Filtrar novidades por categoria",
    count: { one: "{n} artigo", other: "{n} artigos" },
  },
  article: {
    metaTitle: "{title} | Novidades da Checkgrow",
    breadcrumbLabel: "Trilha de navegação",
    breadcrumbHome: "Início",
    breadcrumbNews: "Novidades",
    allNews: "Todas as novidades",
    allStories: "Todos os casos de sucesso",
    byline: "Por Checkgrow · {detail}",
    guidedVideos: { one: "{n} vídeo guiado", other: "{n} vídeos guiados" },
    securityByline: "Atualização de segurança",
    contentsLabel: "Nesta página",
    faqLink: "FAQ",
    bookDemo: "Agendar uma demo",
  },
  tutorial: {
    contents: { shortVideo: "Tour rápido", steps: "Passo a passo", fullVideo: "Tour completo" },
    beforeYouBegin: "Antes de começar.",
    stepsTitle: "O fluxo, passo a passo",
    recordingNote: "Gravado no workspace da Drooms. Suas telas podem parecer um pouco diferentes conforme a Checkgrow evolui.",
    takeawayTitle: "Aproveite o que você aprendeu",
  },
  video: {
    captionsLabel: "Inglês (gerado automaticamente)",
    unsupported: "Seu navegador não é compatível com vídeo incorporado. Use o link do vídeo abaixo.",
    play: "Reproduzir {title}",
    playVideo: "Reproduzir vídeo",
    error: { before: "Não foi possível iniciar a reprodução. Tente os controles do player ou ", link: "abra o vídeo diretamente", after: "." },
    watch: "Ver {title}",
  },
  story: {
    takeaways: "Principais aprendizados",
    about: "Sobre {name}",
    featuresUsed: "Funcionalidades da Checkgrow usadas",
    labelSeparator: ": ",
    faq: "Perguntas frequentes",
  },
  categoryLabels: {
    all: "Todas as novidades",
    "success-stories": "Casos de sucesso",
    tutorials: "Tutoriais",
    "security-releases": "Segurança",
  },
  readLink: {
    "success-stories": "Ler o caso de sucesso",
    tutorials: "Assistir ao tutorial",
    "security-releases": "Ler a atualização de segurança",
  },
  security: {
    title: "Proteção reforçada para o seu workspace conectado",
    description: "Uma atualização de segurança de outubro sobre acesso às contas, dados da empresa, credenciais conectadas e as verificações por trás das nossas versões recentes da plataforma.",
    intro: "Seu workspace conecta o conhecimento da empresa, arquivos e ferramentas de negócio. Esta atualização explica os controles de segurança reforçados nas nossas versões recentes, o que cada um faz e as evidências por trás deles.",
    summary: {
      title: "Esta atualização em resumo",
      publishedLabel: "Publicado em",
      items: [
        { label: "Período das versões", value: "De 28 de setembro a 1º de outubro de 2026" },
        { label: "Base das evidências", value: "Revisão interna de segurança, testes direcionados em staging e registros de versões em produção" },
        { label: "Objetivo", value: "Uma visão geral pública para clientes e para revisões de segurança em provas de conceito" },
      ],
    },
    contents: { scope: "Escopo da avaliação", review: "Sua revisão de segurança" },
    scope: {
      title: "O que este resumo da avaliação abrange",
      items: [
        { label: "Autoria e evidências.", detail: "Este é um resumo elaborado pela Checkgrow sobre o trabalho interno de segurança, testes direcionados e registros de versões em produção, atualizado até o período indicado acima." },
        { label: "Escopo da avaliação.", detail: "A avaliação de base analisou o ambiente de staging em 28 de setembro de 2026. Ela testou uma amostra de controles; testes de intrusão em produção ficaram fora do escopo." },
        { label: "Limites da garantia.", detail: "Este não é um relatório independente de teste de intrusão, um atestado de terceiros nem uma certificação de conformidade. Ele não estabelece certificação SOC 2 ou HIPAA nem garante que todas as vulnerabilidades tenham sido eliminadas." },
        { label: "Divulgação responsável.", detail: "Esta visão geral descreve as proteções implementadas sem expor achados detalhados, configurações internas ou informações operacionais." },
      ],
    },
    contact: {
      title: "Planejando uma revisão de segurança ou uma POC?",
      body: "Compartilhe o seu checklist de onboarding e o nível de garantia de que a sua organização precisa. Nosso time pode esclarecer os controles relevantes para o seu caso de uso e discutir o escopo e a disponibilidade das evidências de apoio. Se você precisar de uma avaliação independente, peça para confirmarmos esse requisito separadamente.",
      link: "Converse sobre os seus requisitos de segurança",
    },
    sections: [
      {
        id: "account-access", title: "Autenticação e controle de sessões", shortTitle: "Acesso à conta",
        introduction: "A proteção da conta combina verificação de identidade, políticas da empresa e controle sobre as sessões ativas.",
        changes: [
          { label: "MFA com app autenticador", detail: "Senhas de uso único baseadas em tempo (TOTP) adicionam uma segunda etapa de verificação no login, com códigos de recuperação para recuperar a conta." },
          { label: "Política da empresa aplicada no servidor", detail: "Administradores podem exigir MFA para a empresa. Ações protegidas verificam o nível de autenticação exigido no servidor, não apenas na interface." },
          { label: "Validação de senha mais rigorosa", detail: "As senhas precisam ter pelo menos 12 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais." },
        ],
        table: {
          caption: "Controles de sessão incluídos nestas versões",
          columns: ["Controle", "O que faz"],
          rows: [
            ["Sair de todos os dispositivos", "Permite ao usuário encerrar suas sessões em todos os dispositivos."],
            ["Desligamento de membros", "Encerra as sessões quando um membro é removido."],
            ["Limites de sessão da empresa", "Permite à empresa definir restrições de sessão, junto com tokens de acesso de curta duração e uma renovação de sessão aprimorada."],
          ],
        },
        note: "O MFA está disponível e pode ser configurado por cada empresa. Ele não é ativado automaticamente em todos os workspaces.",
      },
      {
        id: "company-data", title: "Autorização e isolamento dos dados da empresa", shortTitle: "Dados da empresa",
        introduction: "Estar logado não basta para acessar os recursos da empresa. Os fluxos revisados também verificam as permissões de quem faz a chamada no workspace em questão.",
        changes: [
          { label: "Identidade verificada de quem faz a chamada", detail: "As operações protegidas da aplicação autenticam quem faz a chamada antes de verificar o vínculo com a empresa e o acesso aos recursos." },
          { label: "Permissões por empresa", detail: "Controles de acesso no servidor e no banco de dados restringem os recursos revisados aos usuários autorizados da empresa em questão." },
          { label: "Acesso privado a arquivos", detail: "Os anexos de tarefas estão vinculados às permissões da tarefa e da empresa. Os uploads temporários de agentes ficam visíveis apenas para quem os enviou." },
          { label: "Operações internas restritas", detail: "Operações em segundo plano têm requisitos de acesso próprios, em vez de depender do acesso anônimo ou de usuário final comum." },
        ],
        note: "Essas mudanças reforçam os controles revisados. A avaliação testou uma amostra de fluxos; não foi um teste exaustivo de todas as operações da plataforma.",
      },
      {
        id: "connected-services", title: "Criptografia de credenciais e proteções das integrações", shortTitle: "Serviços conectados",
        introduction: "Os serviços conectados precisam de credenciais para funcionar. Estas versões reforçam como essas credenciais são armazenadas, expostas e usadas.",
        changes: [
          { label: "Criptografia autenticada em repouso", detail: "O AES-256-GCM protege as credenciais de integração armazenadas cobertas por esta versão, incluindo Google Ads, Google Analytics, Meta, LinkedIn e Notion." },
          { label: "Menor exposição no navegador", detail: "Credenciais de conexão sensíveis ficam fora das respostas comuns enviadas ao navegador. Os segredos de webhook usam armazenamento protegido de segredos." },
          { label: "Controle administrativo de destinos", detail: "Os destinos de webhooks de CRM são gerenciados por controles exclusivos de administradores." },
          { label: "Validação de endereços de saída", detail: "Verificações de destino validam os endereços resolvidos antes da entrega do webhook, ajudando a restringir as requisições a destinos externos permitidos." },
        ],
      },
      {
        id: "data-lifecycle", title: "Retenção, exclusão e armazenamento de respostas de IA", shortTitle: "Ciclo de vida dos dados",
        introduction: "Verificações programadas de retenção e exclusão tornam mais explícito o ciclo de vida dos registros operacionais.",
        changes: [
          { label: "Limpeza programada de logs", detail: "Um processo recorrente de exclusão aplica os períodos de retenção abaixo aos registros operacionais cobertos." },
          { label: "Remoção da identidade ao excluir a conta", detail: "Os dados que identificam a conta são removidos dos logs de atividade retidos quando uma conta é excluída." },
          { label: "Comprovação da exclusão da empresa", detail: "A exclusão de uma empresa inclui verificações, um e-mail de confirmação e um certificado em PDF gerado pela Checkgrow descrevendo o que foi removido." },
          { label: "Controle do estado das respostas no provedor", detail: "As requisições à OpenAI Responses são configuradas para não armazenar o estado das respostas no provedor." },
        ],
        table: {
          caption: "Retenção dos registros operacionais cobertos por esta atualização",
          columns: ["Tipo de registro", "Período de retenção"],
          rows: [
            ["Logs de atividade", "12 meses, depois exclusão programada."],
            ["Logs de erro", "12 meses, depois exclusão programada."],
            ["Registros de uso de IA", "24 meses, depois exclusão programada."],
          ],
        },
        note: "Esses períodos não descrevem todas as categorias de dados de clientes. A configuração do provedor não significa retenção zero em todos os serviços de IA; as políticas dos provedores e os contratos aplicáveis continuam regendo o tratamento feito por eles. Nossa Política de Privacidade e nossos Termos também foram atualizados para descrever nossas práticas com mais precisão.",
      },
      {
        id: "ongoing-checks", title: "Hardening da aplicação e verificação de segurança", shortTitle: "Verificações contínuas",
        introduction: "Verificações preventivas no fluxo de desenvolvimento complementam os testes direcionados e a verificação das versões.",
        changes: [
          { label: "Monitoramento de dependências e barreiras de auditoria", detail: "Verificações automatizadas identificam alertas conhecidos em pacotes e ajudam a evitar regressões de segurança em dependências durante o desenvolvimento." },
          { label: "Análise estática de segurança", detail: "Verificações no código-fonte procuram padrões relevantes para a segurança antes que as mudanças sejam publicadas." },
          { label: "Cabeçalhos de segurança do navegador", detail: "HSTS, restrições de frames, proteção contra MIME sniffing, Referrer-Policy e Permissions-Policy reforçam o tratamento das respostas da aplicação no navegador." },
          { label: "Testes de papéis e de limites entre empresas", detail: "A avaliação em staging usou revisão de código, análise automatizada e testes direcionados com diferentes papéis de usuário e workspaces. Os achados orientaram mudanças posteriores e testes de regressão." },
          { label: "Verificação das versões em produção", detail: "Os registros de versões confirmam que as mudanças descritas aqui foram publicadas. Um deploy bem-sucedido não equivale a um teste de intrusão independente de todos os fluxos em produção." },
        ],
      },
    ],
  },
};

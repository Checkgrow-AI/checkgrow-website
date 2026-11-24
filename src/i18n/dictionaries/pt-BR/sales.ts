import type { Localized } from "../../types";
import type { sales as source } from "../en/sales";

export const sales: Localized<typeof source> = {
  meta: {
    title: "Checkgrow Sales | O Sales Brain com IA para equipes de go-to-market",
    description:
      "A Checkgrow Sales cria um Sales Brain com IA a partir das suas próprias conversas: listas ranqueadas por ICP, prospecção aprovada no LinkedIn no tom de cada vendedor, respostas organizadas para você e um histórico único que a liderança acompanha.",
  },
  nowrap: "go-to-market",
  hero: {
    eyebrow: "Checkgrow Sales",
    title: "As melhores equipes de go-to-market vendem com a Checkgrow.",
    intro: "Um Sales Brain com IA que aprende como a sua empresa vende, escala uma prospecção consistente entre todos os vendedores e mantém cada conversa em um só histórico que a liderança pode acompanhar.",
    bookDemo: "Agendar uma demo",
    seeHow: "Veja como funciona",
  },
  film: {
    label: "Tour pela Checkgrow Sales",
    watchLabel: "Assista ao tour pela Checkgrow Sales com som",
    watch: "Assista com som",
    length: "3 min",
  },
  proof: {
    label: "O que dizem os líderes de go-to-market",
    quote: "“{quote}”",
    byline: "{role}, {company}",
  },
  overview: {
    eyebrow: "Um cérebro para todos os vendedores",
    title: "Encontre as contas certas, aborde-as bem e melhore a cada semana.",
    intro:
      "Três módulos trabalham a partir do mesmo cérebro da empresa que o seu marketing usa: seus ICPs, personas, produtos e tom de voz. Cada resultado volta para ele.",
  },
  modules: [
    {
      id: "lists",
      name: "Listas",
      promise: "Saiba exatamente quem abordar",
      title: "Seu mercado, ranqueado e com dono.",
      intro: "Transforme seu perfil de cliente ideal em uma lista ranqueada de contas, encontre os tomadores de decisão dentro delas e dê a cada empresa exatamente um dono.",
      functions: [
        {
          mockup: "lists-1",
          title: "Do ICP a uma lista ranqueada",
          body: "Seu ICP preenche a busca. As empresas vão chegando, avaliadas por fit e ordenadas da melhor para a pior, e as principais contas vão direto para a lista de um vendedor em segundos.",
          screen: "Um ICP preenche a busca de empresas; as empresas compatíveis recebem uma nota de fit com o ICP, são ordenadas da melhor para a pior e adicionadas à lista de um vendedor.",
        },
        {
          mockup: "lists-2",
          title: "A pessoa certa primeiro",
          body: "Cada contato é comparado ao seu ICP, os tomadores de decisão são ranqueados e a Checkgrow explica por que cada um vem primeiro, do lead score à atividade recente no LinkedIn.",
          screen: "As pessoas de uma empresa-alvo são comparadas ao ICP e ranqueadas por prioridade, com os sinais que explicam quem contatar primeiro.",
        },
        {
          mockup: "lists-3",
          title: "Listas que se distribuem sozinhas",
          body: "Defina uma regra de atribuição uma vez e as novas empresas compatíveis caem na fila do vendedor certo. Um dono por empresa, sem duplicidade, e clientes ou contas marcadas como não contatar nunca são prospectados.",
          screen: "Uma regra de atribuição automática envia as novas empresas compatíveis para a fila de cada vendedor, enquanto clientes e empresas marcadas como não contatar ficam bloqueados.",
        },
      ],
    },
    {
      id: "outreach",
      name: "Prospecção",
      promise: "Aborde como o seu melhor vendedor",
      title: "Prospecção bem pesquisada, em ritmo humano.",
      intro: "Cada vendedor interage pelo próprio LinkedIn, com a própria voz, e uma pessoa aprova o que sai. O relacionamento começa antes do pitch, e nenhuma resposta fica sem retorno.",
      functions: [
        {
          mockup: "outreach-1",
          title: "Aqueça antes do pitch",
          body: "O Grow escreve um comentário genuíno no post de um prospect e explica por que ele importa. Curtida, comentário, convite, aceite: o relacionamento começa antes da primeira mensagem.",
          screen: "Um post de um prospect no LinkedIn recebe um comentário sugerido, e a jornada avança da curtida ao comentário e a um convite aceito.",
        },
        {
          mockup: "outreach-2",
          title: "Aprove em minutos",
          body: "As primeiras mensagens chegam escritas na voz do vendedor, com as regras do Brain por trás de cada uma. Os vendedores aprovam uma a uma, e uma campanha inteira é agendada em minutos, não em horas.",
          screen: "Um vendedor aprova as primeiras mensagens uma a uma, cada uma mostrando as regras do Sales Brain que usou, até que 41 mensagens estejam agendadas.",
        },
        {
          mockup: "outreach-3",
          title: "Cada resposta lida e organizada",
          body: "As respostas são lidas e classificadas como quentes, mornas, frias ou geladas, com a intenção de cada uma, das mais quentes para as mais frias. Respostas quentes viram reuniões, e as respostas simples são tratadas para você.",
          screen: "As respostas recebidas no LinkedIn são classificadas como quentes, mornas, frias ou geladas, ordenadas das mais quentes para as mais frias, e a resposta quente vira uma reunião.",
        },
      ],
    },
    {
      id: "sales-brain",
      name: "Sales Brain",
      promise: "Melhore a cada conversa",
      title: "Um Sales Brain que pertence à sua empresa.",
      intro: "Cada resposta, edição, comentário e instrução ensina o Brain como a sua empresa vende. O conhecimento se acumula em toda a equipe e fica com você quando as pessoas saem.",
      functions: [
        {
          mockup: "brain-1",
          title: "Seu feedback escreve a próxima mensagem",
          body: "Diga ao Brain o que estava errado, com suas palavras. Ele reescreve a mensagem, transforma o seu feedback em uma regra e, com um clique, compartilha essa regra com todos os vendedores.",
          screen: "Uma mensagem genérica recebe feedback, o Sales Brain a reescreve e o feedback vira uma regra compartilhada com todos os vendedores.",
        },
        {
          mockup: "brain-2",
          title: "Aprende com cada sinal",
          body: "Respostas, comentários, edições, aprovações, instruções e playbooks alimentam o Brain. A cada semana, ele mostra o que aprendeu e de onde veio cada regra.",
          screen: "Respostas, comentários, edições, aprovações, instruções e um playbook alimentam o Sales Brain de um vendedor, que lista as regras aprendidas na semana e suas origens.",
        },
        {
          mockup: "brain-3",
          title: "Mais respostas a cada semana",
          body: "À medida que o Brain aprende, a mesma prospecção gera mais conversas. A liderança vê a curva e os aprendizados por trás de cada etapa.",
          screen: "A taxa de resposta de um vendedor sobe semana a semana, com anotações sobre o que o Sales Brain aprendeu em cada etapa.",
          note: "Dados ilustrativos",
        },
      ],
    },
  ],
  functionsLabel: "Funções de {module}",
  difference: {
    eyebrow: "Por que a Checkgrow Sales",
    title: "A maioria das ferramentas envia mensagens. A Checkgrow constrói o seu Sales Brain.",
    intro:
      "Cada conversa vira conhecimento da empresa: uma base de dados proprietária sobre o que gera resposta dos seus compradores, que pertence a você e se acumula com cada vendedor.",
  },
  pillars: [
    {
      title: "Consistente em qualquer escala",
      body: "Todos os vendedores trabalham com as mesmas regras aprovadas, o mesmo tom e o mesmo playbook, e a qualidade da prospecção deixa de depender de quem envia.",
    },
    {
      title: "Uma base de vendas proprietária",
      body: "Cada conversa, resposta, edição e decisão vira dado estruturado da empresa. O Brain transforma tudo isso no jeito como a sua empresa vende.",
    },
    {
      title: "Visível para a liderança",
      body: "Listas, aprovações, respostas e o que cada Brain aprendeu ficam em um só lugar, e os gestores acompanham o trabalho sem precisar correr atrás de atualizações.",
    },
    {
      title: "Um histórico que fica",
      body: "Todo o histórico de prospecção é centralizado. Quando um vendedor sai, as contas, conversas e aprendizados dele ficam com a empresa.",
    },
  ],
  governance: {
    eyebrow: "Feito para go-to-market enterprise",
    title: "Escale a prospecção sem perder o controle.",
    intro:
      "A liderança define as regras uma vez. Cada vendedor trabalha dentro delas, cada ação é aprovada por uma pessoa e toda a equipe roda em um só sistema governado.",
  },
  controls: [
    {
      icon: "approve",
      title: "Uma pessoa aprova tudo",
      body: "O Brain propõe comentários e mensagens; nada é publicado até que um vendedor aprove, edite ou rejeite.",
    },
    {
      icon: "pace",
      title: "No ritmo de um humano cuidadoso",
      body: "De 3 a 15 pedidos de conexão por vendedor por dia, em dias úteis, das 8h às 19h, um comentário por alvo por dia e um botão de parada de emergência.",
    },
    {
      icon: "linkedin",
      title: "O LinkedIn de cada vendedor",
      body: "Os vendedores conectam a própria conta por uma API em conformidade com o LinkedIn e podem desconectar a qualquer momento, o que interrompe toda a atividade na hora.",
    },
    {
      icon: "owner",
      title: "Um dono por empresa",
      body: "As importações são cruzadas com todos os vendedores, duas pessoas nunca contatam a mesma pessoa e clientes e contas marcadas como não contatar ficam protegidos.",
    },
    {
      icon: "data",
      title: "Seus dados vêm junto",
      body: "Importe até 5.000 empresas ou pessoas de CSV ou Excel, ou traga os dados do HubSpot, Zoho CRM e GoHighLevel.",
    },
    {
      icon: "security",
      title: "Segurança enterprise",
      body: "Papéis e autenticação em dois fatores obrigatória, hospedagem na UE na AWS Frankfurt e criptografia em trânsito e em repouso.",
    },
  ],
  team: {
    eyebrow: "O time por trás da Checkgrow",
    title: "Feito por fanáticos por go-to-market.",
    body: [
      "Passamos quinze anos nas trincheiras de marketing e vendas: fomos agência antes de virar plataforma, tocando campanhas, prospecção e pipeline para nossos clientes, avaliados por uma única coisa, resultado.",
      "A Checkgrow é como transformamos essa obsessão em sistema. Cada módulo desta página nasceu de problemas que resolvemos primeiro na mão, então a sua equipe recebe o método, não só o software.",
    ],
    imageAlt: "O time da Checkgrow revisando juntos o trabalho de go-to-market de um cliente em uma mesa de reunião",
  },
  faqTitle: "Perguntas de líderes de vendas",
  allQuestions: "Todas as perguntas",
  faq: [
    {
      q: "O que é um Sales Brain?",
      a: "Um Sales Brain é a IA que escreve a prospecção dos seus vendedores e aprende como a sua empresa vende. Ele lê o conhecimento da empresa (ICPs, personas, produtos e tom de voz) e aprende com cada resposta, comentário, edição, aprovação e instrução. O que ele aprende vira regras que a equipe pode ver, rastrear até a origem e compartilhar com todos os vendedores.",
    },
    {
      q: "Qual a diferença entre a Checkgrow Sales e uma ferramenta de sales engagement?",
      a: "Ferramentas de cadência enviam templates. A Checkgrow constrói um Sales Brain proprietário a partir das suas próprias conversas, para que a prospecção seja consistente entre todos os vendedores, melhore a cada resposta e edição, e todo o histórico fique centralizado para a liderança, em vez de espalhado por várias caixas de entrada.",
    },
    {
      q: "As mensagens são enviadas sem aprovação?",
      a: "Não. O Brain propõe comentários e mensagens, e cada um aguarda um vendedor aprovar, editar ou rejeitar. Os itens aprovados são enviados em ritmo humano, dentro dos limites diários.",
    },
    {
      q: "Como a prospecção no LinkedIn se mantém segura?",
      a: "A prospecção sai da própria conta de LinkedIn de cada vendedor, por uma API em conformidade com o LinkedIn. Você define um limite diário de 3 a 15 pedidos de conexão, enviados em dias úteis, das 8h às 19h, em intervalos aleatórios, com um comentário por alvo por dia e um botão de parada de emergência. Nenhuma automação é isenta de risco, por isso a atividade fica bem dentro dos padrões profissionais normais.",
    },
    {
      q: "Os gestores conseguem acompanhar o que cada vendedor está fazendo?",
      a: "Sim. Cada vendedor tem o próprio workspace e o próprio Sales Brain, enquanto listas, atribuições, aprovações, respostas e o que cada Brain aprendeu ficam centralizados, para que a liderança acompanhe o trabalho e os resultados de toda a equipe.",
    },
    {
      q: "Podemos trazer as contas e os contatos que já temos?",
      a: "Sim. Importe um arquivo CSV ou Excel com até 5.000 empresas ou pessoas, ou traga os dados do HubSpot, Zoho CRM ou GoHighLevel. Cada importação é cruzada com seus vendedores, para que cada empresa tenha um só dono, e suas conexões atuais do LinkedIn também podem virar uma lista.",
    },
    {
      q: "O que acontece com os nossos dados quando um vendedor sai?",
      a: "Eles ficam com a empresa. Contas, conversas, aprovações e as regras que o Brain aprendeu ficam centralizadas no seu workspace, não em uma caixa de entrada pessoal, e o próximo vendedor começa com todo o histórico.",
    },
  ],
  cta: {
    title: "Vendas que se multiplicam começam aqui.",
    body: "Veja a Checkgrow Sales com o seu próprio ICP, suas contas e seu tom de voz em uma demo de 30 minutos com nosso time.",
    bookDemo: "Agendar uma demo",
  },
  schema: {
    product: "Checkgrow Sales",
    videoName: "Tour pela Checkgrow Sales",
    videoDescription:
      "Um tour pela Checkgrow Sales: o pipeline de LinkedIn da equipe, dos convites às reuniões, respostas organizadas pelo Grow, rascunhos escritos na voz de cada vendedor para aprovação e o Sales Brain que aprende com cada conversa.",
    home: "Início",
    page: "Vendas",
  },
};

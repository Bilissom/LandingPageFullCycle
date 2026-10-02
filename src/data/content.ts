// =============================================================================
// CONTEÚDO EDITÁVEL DA LANDING PAGE — FullCycle Development
// Edite este arquivo para atualizar textos, serviços, etapas e contatos.
// =============================================================================

// -----------------------------------------------------------------------
// HERO
// -----------------------------------------------------------------------
export const HERO = {
  tag: 'Desenvolvimento Digital',
  headline: 'Ideias digitais, construídas de ponta a ponta.',
  subtext:
    'A FullCycle transforma necessidades em projetos funcionais. Do entendimento do problema ao lançamento final.',
  cta_primary: 'Conheça nossas soluções',
  cta_secondary: 'Fale com a FullCycle',
}

// -----------------------------------------------------------------------
// SOBRE
// -----------------------------------------------------------------------
export const ABOUT = {
  label: 'Sobre a FullCycle',
  title: 'Soluções digitais feitas para cada projeto',
  body: [
    'A FullCycle nasce da crença de que cada projeto merece atenção individual. Não trabalhamos com modelos genéricos: entendemos o problema, planejamos com o cliente e construímos o que faz sentido para aquele contexto.',
    'Nossa atuação cobre o processo completo, da definição dos objetivos ao suporte pós-lançamento.',
  ],
  pillars: [
    {
      title: 'Entendimento',
      desc: 'Cada projeto começa com escuta ativa e análise do problema real.',
    },
    {
      title: 'Transparência',
      desc: 'Comunicação clara em todas as etapas, sem surpresas.',
    },
    {
      title: 'Entrega',
      desc: 'Foco em resultados funcionais e prontos para uso.',
    },
  ],
}

// -----------------------------------------------------------------------
// SERVIÇOS
// Para adicionar um serviço: copie um item e ajuste title, desc e tag.
// Para remover: apague o item do array.
// -----------------------------------------------------------------------
export const SERVICES = {
  label: 'Serviços',
  title: 'O que desenvolvemos',
  subtitle: 'Soluções sob medida para diferentes necessidades.',
  items: [
    {
      title: 'Sites e Landing Pages',
      desc: 'Páginas institucionais e de conversão com foco em identidade visual, desempenho e experiência do usuário.',
      tag: 'Web',
    },
    {
      title: 'Sistemas Web',
      desc: 'Aplicações web personalizadas para automatizar processos, gerenciar dados ou dar suporte à operação.',
      tag: 'Aplicação',
    },
    {
      title: 'E-commerce',
      desc: 'Lojas virtuais completas, integradas com pagamento, logística e gestão de produtos.',
      tag: 'Comércio',
    },
    {
      title: 'Soluções Personalizadas',
      desc: 'Desenvolvimento sob demanda para projetos que não se encaixam em categorias padrão.',
      tag: 'Sob medida',
    },
  ],
}

// -----------------------------------------------------------------------
// COMO TRABALHAMOS
// -----------------------------------------------------------------------
export const PROCESS = {
  label: 'Como trabalhamos',
  title: 'Do briefing à entrega',
  subtitle: 'Um processo estruturado que garante clareza, qualidade e resultados alinhados com o que foi combinado.',
  steps: [
    {
      num: '01',
      title: 'Entendimento',
      desc: 'Conversamos sobre o projeto, o contexto e os objetivos. Essa etapa define a direção de tudo que vem depois.',
    },
    {
      num: '02',
      title: 'Planejamento',
      desc: 'Organizamos escopo, funcionalidades e cronograma antes de qualquer linha de código.',
    },
    {
      num: '03',
      title: 'Desenvolvimento',
      desc: 'Construímos com foco em qualidade técnica e aderência ao que foi planejado.',
    },
    {
      num: '04',
      title: 'Entrega e Suporte',
      desc: 'Publicamos, validamos com o cliente e permanecemos disponíveis para ajustes pós-lançamento.',
    },
  ],
}

// -----------------------------------------------------------------------
// PROJETOS
// -----------------------------------------------------------------------
export const PROJECTS = {
  title: 'Projetos',
  subtitle: 'Trabalhos realizados pela FullCycle.',
  placeholderText:
    'Esta seção está preparada para receber projetos reais. Quando finalizados, aparecerão aqui com descrição, tecnologias e link de acesso.',
}

// -----------------------------------------------------------------------
// CONTATO
// Substitua os href quando as informações estiverem disponíveis.
// -----------------------------------------------------------------------
export const CONTACT = {
  label_section: 'Contato',
  title: 'Vamos conversar sobre seu projeto',
  subtitle: 'Conte como podemos ajudar. Não cobramos para entender o que você precisa antes de qualquer proposta.',
  form_note: 'Responderemos em até 1 dia útil.',
  // TODO: Informe o e-mail real e o WhatsApp quando disponíveis:
  email: 'mailto:contato@fullcycle.dev',
  // whatsapp: 'https://wa.me/55XXXXXXXXXXX',
}

// -----------------------------------------------------------------------
// NAVEGAÇÃO
// -----------------------------------------------------------------------
export const NAV_LINKS = [
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Projetos', href: '#projetos' },
]

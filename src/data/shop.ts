export const SHOP = {
  name: import.meta.env.VITE_SHOP_NAME ?? 'Oficina Lume',
  phone: import.meta.env.VITE_SHOP_PHONE ?? '+351 912 345 678',
  email: import.meta.env.VITE_SHOP_EMAIL ?? 'ola@oficinalume.pt',
  address: import.meta.env.VITE_SHOP_ADDRESS ?? 'Rua das Janelas Verdes 42, 1200-690 Lisboa',
  website: 'https://www.oficinalume.pt',
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: 'wrench' | 'gauge' | 'sparkles';
  features: string[];
  duration: string;
};

export const SERVICES: Service[] = [
  {
    id: 'revisao',
    title: 'Revisão Completa',
    description:
      'Diagnóstico total, ajuste de travões e mudanças, lubrificação e verificação estrutural. A tua bicicleta pronta para milhares de quilómetros.',
    icon: 'wrench',
    features: ['Diagnóstico de 40 pontos', 'Ajuste de travões e mudanças', 'Lubrificação de corrente', 'Verificação de estrutura'],
    duration: '90 min',
  },
  {
    id: 'diagnostico',
    title: 'Diagnóstico Express',
    description:
      'Avaliação rápida do estado da bicicleta com relatório detalhado. Ideal antes de uma longa viagem ou compra em segunda mão.',
    icon: 'gauge',
    features: ['Relatório fotográfico', 'Avaliação de componentes', 'Estimativa de reparação', 'Sem compromisso'],
    duration: '30 min',
  },
  {
    id: 'personalizacao',
    title: 'Personalização & Estética',
    description:
      'Envelopamento, iluminação, selins e punhos à medida. Transforma a tua bicicleta numa peça única e visível na cidade.',
    icon: 'sparkles',
    features: ['Envelopamento de quadro', 'Iluminação integrada', 'Selins e punhos premium', 'Acessórios sob medida'],
    duration: '2–4 h',
  },
];

export type Plan = {
  id: string;
  name: string;
  monthly: number;
  tagline: string;
  features: string[];
  highlighted?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'basica',
    name: 'Básica',
    monthly: 29,
    tagline: 'Para quem pedala ao fim de semana',
    features: [
      '1 revisão completa por mês',
      'Diagnóstico express ilimitado',
      'Lubrificação de corrente',
      '10% em acessórios',
      'Marca online prioritária',
    ],
  },
  {
    id: 'completa',
    name: 'Completa',
    monthly: 59,
    tagline: 'Para quem depende da bicicleta todos os dias',
    highlighted: true,
    features: [
      '2 revisões completas por mês',
      'Diagnóstico express ilimitado',
      'Mudança de cabos e borrachas incluída',
      '20% em acessórios',
      'Atendimento em 24 h',
      'Recolha e entrega em Lisboa',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 99,
    tagline: 'Para equipas e utilizadores intensivos',
    features: [
      '4 revisões completas por mês',
      'Manutenção preventiva semanal',
      'Componentes de desgaste incluídos',
      '30% em acessórios',
      'Atendimento no mesmo dia',
      'Frota até 3 bicicletas',
      'Relatórios mensais detalhados',
    ],
  },
];

export type FAQItem = { q: string; a: string };

export const FAQS: FAQItem[] = [
  {
    q: 'Posso cancelar a subscrição a qualquer momento?',
    a: 'Sim. Não há fidelização. Podes cancelar a partir da Área de Cliente ou enviando um email para a oficina. O cancelamento entra em vigor no final do período já pago.',
  },
  {
    q: 'O plano mensal inclui peças de substituição?',
    a: 'O plano Básico e Completa incluem consumíveis (cabos, borrachas de travão, lubrificantes). O plano Pro inclui ainda componentes de desgaste como correntes e pastilhas. Peças maiores como rodas ou quadros são orçamentadas à parte.',
  },
  {
    q: 'O que significa o desconto anual?',
    a: 'Ao pagar anualmente aplicamos 15% de desconto sobre o preço mensal. Poupa o equivalente a quase dois meses por ano.',
  },
  {
    q: 'A recolha e entrega funcionam em toda a Lisboa?',
    a: 'A recolha e entrega estão incluídas nos planos Completa e Pro dentro do concelho de Lisboa. Para outras zonas da Área Metropolitana pedimos um pequeno suplemento — contacta-nos para confirmar.',
  },
  {
    q: 'Os planos são válidos para qualquer tipo de bicicleta?',
    a: 'Sim. Trabalhamos com bicicletas de cidade, estrada, BTT, elétricas e de carga. Para bicicletas elétricas com sistemas de propulsão integrados fazemos parceria com o fabricante para garantir a garantia.',
  },
  {
    q: 'Como faço para marcar uma visita?',
    a: 'Usa a página Marca e escolhe a data e hora que te convêm. Recebes confirmação imediata e podes gerir todas as tuas marcações na Área de Cliente.',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  initials: string;
};

export const TEAM: TeamMember[] = [
  {
    name: 'Marta Cardoso',
    role: 'Fundadora & Mecânica Chefe',
    bio: 'Doze anos a restaurar bicicletas vintage e a preparar ciclistas para longas distâncias. Ex-mecânica de equipa profissional.',
    specialty: 'Bicicletas de estrada & restauração',
    initials: 'MC',
  },
  {
    name: 'Tiago Ribeiro',
    role: 'Especialista em E-Bikes',
    bio: 'Engenheiro eletrotécnico apaixonado por mobilidade urbana. Certificado por Bosch e Shimano em sistemas de propulsão.',
    specialty: 'Bicicletas elétricas & eletrónica',
    initials: 'TR',
  },
  {
    name: 'Sofia Mendes',
    role: 'Mecânica & Personalizadora',
    bio: 'Artista visual que encontrou na bicicleta a sua tela. Especialista em envelopamento e personalização estética.',
    specialty: 'Personalização & estética',
    initials: 'SM',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'João Almeida',
    role: 'Utilizador urbano diário',
    quote:
      'Levei a bicicleta com um ruído estranho e saiu como nova em duas horas. Atendimento honesto e preço justo. Recomendo sem hesitar.',
    rating: 5,
    initials: 'JA',
  },
  {
    name: 'Catarina Sousa',
    role: 'Ciclista de estrada',
    quote:
      'A Marta conhece cada parafuso da minha bicicleta. As revisões periódicas dão-me confiança para fazer longas distâncias sem preocupações.',
    rating: 5,
    initials: 'CS',
  },
  {
    name: 'Pedro Vasconcelos',
    role: 'Subscritor plano Pro',
    quote:
      'A recolha ao escritório é um luxo. Tenho três bicicletas no plano Pro e nunca fiquei sem nenhuma pronta para a próxima viagem.',
    rating: 5,
    initials: 'PV',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Marca online',
    description: 'Escolhe o serviço, data e hora em menos de um minuto. Sem chamadas, sem espera.',
  },
  {
    step: '02',
    title: 'Diagnóstico gratuito',
    description: 'Avaliamos a tua bicicleta e enviamos um relatório com o trabalho necessário e orçamento transparente.',
  },
  {
    step: '03',
    title: 'Reparação e entrega',
    description: 'Executamos o trabalho com peças de qualidade. Levantas a bicicleta pronta ou pedes recolha em casa.',
  },
];

export const HOURS = [
  { day: 'Segunda–Sexta', time: '09:00 – 19:00' },
  { day: 'Sábado', time: '10:00 – 17:00' },
  { day: 'Domingo & feriados', time: 'Encerrado' },
];

export const BIKE_TYPES = [
  'Bicicleta de cidade',
  'Bicicleta de estrada',
  'Bicicleta de BTT',
  'Bicicleta elétrica',
  'Bicicleta de carga',
  'Bicicleta vintage / clássica',
  'Outra',
];

export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export const STATUS_LABELS: Record<BookingStatus, string> = {
  pending: 'Pendente',
  confirmed: 'Confirmada',
  completed: 'Concluída',
  cancelled: 'Cancelada',
};

export const STATUS_COLORS: Record<BookingStatus, string> = {
  pending: 'warning',
  confirmed: 'secondary',
  completed: 'success',
  cancelled: 'error',
};

export type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  bikeType: string;
  service: string;
  date: string; // ISO date
  notes?: string;
  status: BookingStatus;
  createdAt: string; // ISO timestamp
};

export const BOOKING_STATUSES: BookingStatus[] = ['pending', 'confirmed', 'completed', 'cancelled'];

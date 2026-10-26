export type SiteMode = 'demo' | 'production';
export type FormMode = 'mailto' | 'formspree';

const mode: SiteMode = process.env.NEXT_PUBLIC_SITE_MODE === 'production' ? 'production' : 'demo';
const configuredFormMode: FormMode = process.env.NEXT_PUBLIC_FORM_MODE === 'formspree' ? 'formspree' : 'mailto';
const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? '';

export const siteConfig = {
  mode,
  name: 'Bustamante Maquetes',
  shortName: 'Bustamante',
  title: 'Bustamante Maquetes | Maquetes arquitetônicas e industriais',
  description:
    'Maquetes físicas e modelos reduzidos personalizados para arquitetura, engenharia, indústria e urbanismo. Conheça a Bustamante Maquetes, em Joinville.',
  location: 'Joinville, Santa Catarina',
  phone: '+55 47 3435-2000',
  phoneHref: 'tel:+554734352000',
  email: 'comercial@bustamantemaquetes.com.br',
  conceptLabel: 'Conceito de redesign independente — proposta não oficial.',
  founded: '1987',
  optionalWhatsapp: '',
  form: {
    mode: mode === 'production' && configuredFormMode === 'formspree' && Boolean(formEndpoint) ? 'formspree' as const : 'mailto' as const,
    endpoint: formEndpoint,
  },
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'A empresa', href: '#empresa' },
    { label: 'Processo', href: '#processo' },
    { label: 'Contato', href: '#contato' },
  ],
} as const;

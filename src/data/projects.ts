import type { SiteMode } from '@/config/site';

export type ProjectCategory = 'Arquitetura' | 'Indústria' | 'Urbanismo' | 'Infraestrutura' | 'Outros';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  image: string;
  alt: string;
  featured: boolean;
  sourceReference: string;
  sourceUrl: string;
  sourceLicense: string;
  location?: string;
  visualNote: string;
  gallery?: string[];
};

const pexelsLicense = 'Pexels License — demonstrativo, não é trabalho da Bustamante';

// Conteúdo demonstrativo: as fotos são licenciadas pelo Pexels e não estão associadas
// a nenhum projeto ou cliente da Bustamante Maquetes.
export const demoProjects: Project[] = [
  {
    id: 'modelo-arquitetonico-demonstrativo',
    title: 'Modelo arquitetônico',
    category: 'Arquitetura',
    description: 'Detalhes de material, relevo e acabamento em uma maquete física de estudo.',
    image: '/images/projects/architectural-model-closeup.jpg',
    alt: 'Fotografia demonstrativa de uma maquete arquitetônica de madeira em close-up.',
    featured: true,
    sourceReference: 'Pexels · Garrison Gao',
    sourceUrl: 'https://www.pexels.com/photo/wooden-model-in-close-up-7883886/',
    sourceLicense: pexelsLicense,
    visualNote: 'imagem licenciada demonstrativa — não é trabalho Bustamante',
    gallery: ['/images/projects/architectural-model-closeup.jpg', '/images/projects/model-on-table.jpg'],
  },
  {
    id: 'modelo-em-estudio-demonstrativo',
    title: 'Modelo em estúdio',
    category: 'Arquitetura',
    description: 'Uma leitura de conjunto para comunicar volumes, entorno e escala de apresentação.',
    image: '/images/projects/model-on-table.jpg',
    alt: 'Fotografia demonstrativa de uma maquete arquitetônica sobre mesa de trabalho.',
    featured: true,
    sourceReference: 'Pexels · Tima Miroshnichenko',
    sourceUrl: 'https://www.pexels.com/photo/a-model-of-a-building-on-a-table-6614835/',
    sourceLicense: pexelsLicense,
    visualNote: 'imagem licenciada demonstrativa — não é trabalho Bustamante',
  },
  {
    id: 'paisagem-urbana-demonstrativa',
    title: 'Paisagem urbana',
    category: 'Urbanismo',
    description: 'Topografia, implantação e relações urbanas reunidas em uma visão de escala.',
    image: '/images/projects/model-cityscape.jpg',
    alt: 'Fotografia demonstrativa de uma cidade em miniatura com ruas e edifícios.',
    featured: true,
    sourceReference: 'Pexels · Ramon Karolan',
    sourceUrl: 'https://www.pexels.com/photo/detailed-miniature-model-cityscape-display-30266845/',
    sourceLicense: pexelsLicense,
    visualNote: 'imagem licenciada demonstrativa — não é trabalho Bustamante',
  },
  {
    id: 'diorama-de-paisagem-demonstrativo',
    title: 'Diorama de paisagem',
    category: 'Outros',
    description: 'Uma representação sensível de território, vegetação e presença construída.',
    image: '/images/projects/village-diorama.jpg',
    alt: 'Fotografia demonstrativa de um diorama com pequenas construções e paisagem.',
    featured: true,
    sourceReference: 'Pexels · Neville Hawkins',
    sourceUrl: 'https://www.pexels.com/photo/intricate-miniature-village-model-diorama-37441723/',
    sourceLicense: pexelsLicense,
    visualNote: 'imagem licenciada demonstrativa — não é trabalho Bustamante',
  },
  {
    id: 'arquitetura-em-detalhe-demonstrativa',
    title: 'Arquitetura em detalhe',
    category: 'Outros',
    description: 'Escala humana e acabamento aproximados para revelar o cuidado do fazer manual.',
    image: '/images/projects/miniature-architecture.jpg',
    alt: 'Fotografia demonstrativa de uma miniatura arquitetônica com arcos e figuras.',
    featured: false,
    sourceReference: 'Pexels · Yaroslav Chaadaev',
    sourceUrl: 'https://www.pexels.com/photo/old-church-miniature-and-people-figurines-9249845/',
    sourceLicense: pexelsLicense,
    visualNote: 'imagem licenciada demonstrativa — não é trabalho Bustamante',
  },
  {
    id: 'modelo-em-exposicao-demonstrativo',
    title: 'Modelo em exposição',
    category: 'Outros',
    description: 'Uma peça vista como objeto de apresentação, com presença material e acabamento.',
    image: '/images/projects/model-pedestal.jpg',
    alt: 'Fotografia demonstrativa de um modelo arquitetônico em pedestal externo.',
    featured: false,
    sourceReference: 'Pexels · Denys Novikov',
    sourceUrl: 'https://www.pexels.com/photo/miniature-architectural-model-on-stone-pedestal-37621112/',
    sourceLicense: pexelsLicense,
    visualNote: 'imagem licenciada demonstrativa — não é trabalho Bustamante',
  },
];

// Projetos verificados no acervo público, aguardando fotografia oficial aprovada.
// Eles não recebem imagens demonstrativas nem são apresentados como cases ilustrados.
export const verifiedPortfolioReferences: Array<{ title: string; category: ProjectCategory; sourceUrl: string }> = [
  { title: 'Porto Itapoá', category: 'Infraestrutura', sourceUrl: 'https://bustamantemaquetes.com.br/maquetes.html' },
  { title: 'Sede Unimed Joinville', category: 'Arquitetura', sourceUrl: 'https://bustamantemaquetes.com.br/maquetes.html' },
  { title: 'Grand Place Tower', category: 'Arquitetura', sourceUrl: 'https://bustamantemaquetes.com.br/maquetes.html' },
  { title: 'Plataforma FPSO P-74', category: 'Indústria', sourceUrl: 'https://bustamantemaquetes.com.br/maquetes.html' },
  { title: 'Loteamento Nova Barra Velha', category: 'Urbanismo', sourceUrl: 'https://bustamantemaquetes.com.br/maquetes.html' },
  { title: 'Município de Salvador', category: 'Urbanismo', sourceUrl: 'https://bustamantemaquetes.com.br/maquetes.html' },
  { title: 'Centreventos Cau Hansen', category: 'Outros', sourceUrl: 'https://bustamantemaquetes.com.br/maquetes.html' },
  { title: 'Shopping Center Bento Gonçalves', category: 'Arquitetura', sourceUrl: 'https://bustamantemaquetes.com.br/maquetes.html' },
];

export const approvedProjects: Project[] = [];
export const projectFilters = ['Todos', 'Arquitetura', 'Indústria', 'Urbanismo', 'Infraestrutura', 'Outros'] as const;

export function getProjects(mode: SiteMode) {
  return mode === 'production' ? approvedProjects : demoProjects;
}

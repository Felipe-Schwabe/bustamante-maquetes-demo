import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import './globals.css';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ['maquetes', 'maquetes arquitetônicas', 'maquetes industriais', 'modelos reduzidos', 'Joinville'],
  metadataBase: new URL('https://bustamantemaquetes.com.br'),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/images/hero/hero-city-model.jpg', width: 1800, height: 1200, alt: 'Maquete urbana demonstrativa' }],
  },
  robots: { index: siteConfig.mode === 'production', follow: siteConfig.mode === 'production' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

import { ArrowUpRight, CalendarDays, Compass, ScanLine } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function CompanySection() {
  return (
    <section className="section company-section" id="empresa" aria-labelledby="company-title">
      <div className="shell company-section__grid">
        <div className="company-section__visual">
          <div className="company-art company-art--photo"><Image src="/images/company/company-workshop.jpg" alt="Fotografia licenciada demonstrativa de uma pessoa trabalhando em uma maquete arquitetônica." width={1600} height={2400} loading="lazy" /><span className="company-art__label">Desde <strong>1987</strong></span></div>
          <div className="company-section__caption"><span>Trajetória e credibilidade</span><span>{siteConfig.mode === 'demo' ? 'Imagem licenciada demonstrativa' : 'Imagem aprovada'}</span></div>
        </div>
        <div className="company-section__copy">
          <SectionHeading eyebrow="A empresa" title="Experiência que transforma precisão em arte." text="Desde a constituição jurídica em 1º de outubro de 1987, a Bustamante Maquetes desenvolve representações físicas para aproximar pessoas de projetos, espaços e sistemas complexos." />
          <p className="body-copy">O trabalho combina saber arquitetônico, design, engenharia, domínio de materiais e sensibilidade artesanal. Cada peça nasce das necessidades e especificações do projeto — uma síntese visual construída para ser compreendida.</p>
          <div className="company-facts">
            <div><CalendarDays size={19} /><span><strong>Desde 1987</strong><small>trajetória consolidada</small></span></div>
            <div><Compass size={19} /><span><strong>Joinville, SC</strong><small>sede própria desde 1998</small></span></div>
            <div><ScanLine size={19} /><span><strong>Arquitetura + técnica</strong><small>materiais e processos diversos</small></span></div>
          </div>
          <a href="#especialidades" className="text-button text-button--dark">Conhecer especialidades <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </section>
  );
}

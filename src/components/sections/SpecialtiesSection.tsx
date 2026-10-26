 'use client';

import { ArrowUpRight, Box, Building2, Factory, Landmark, Map, Trees } from 'lucide-react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';

const specialties = [
  { icon: Building2, filter: 'Arquitetura', name: 'Arquitetônicas e residenciais', text: 'Edifícios, residências e empreendimentos apresentados com clareza de forma e escala.', image: '/images/specialties/architectural.jpg' },
  { icon: Landmark, filter: 'Outros', name: 'Comerciais e corporativas', text: 'Espaços de uso público e corporativo que precisam comunicar presença e intenção.', image: '/images/specialties/commercial.jpg' },
  { icon: Factory, filter: 'Indústria', name: 'Industriais', text: 'Sistemas, equipamentos e plantas traduzidos em uma leitura técnica e acessível.', image: '/images/specialties/industrial.jpg' },
  { icon: Map, filter: 'Urbanismo', name: 'Urbanísticas', text: 'Loteamentos, municípios e planos que revelam relações entre território e cidade.', image: '/images/specialties/urban.jpg' },
  { icon: Trees, filter: 'Outros', name: 'Ambientais', text: 'Paisagem, infraestrutura e transformação territorial observadas em conjunto.', image: '/images/specialties/environmental.jpg' },
  { icon: Box, filter: 'Outros', name: 'Modelos reduzidos', text: 'Objetos, máquinas e detalhes em escala para explicar o que não cabe em uma planta.', image: '/images/specialties/reduced-models.jpg' },
];

export function SpecialtiesSection() {
  return (
    <section className="section specialties-section" id="especialidades" aria-labelledby="specialties-title">
      <div className="shell">
        <SectionHeading eyebrow="Especialidades" title="A escala muda. O cuidado permanece." text="Uma capacidade técnica diversa, organizada para atender arquitetura, engenharia, indústria e planejamento urbano." />
        <div className="specialties-grid">
          {specialties.map(({ icon: Icon, filter, name, text, image }) => (
            <article className="specialty-card" key={name}>
              <div className="specialty-card__image"><Image src={image} alt={`Fotografia licenciada demonstrativa de ${name.toLowerCase()}.`} width={1200} height={900} loading="lazy" /><span>Imagem demonstrativa</span></div>
              <div className="specialty-card__body"><Icon size={19} strokeWidth={1.5} /><h3>{name}</h3><p>{text}</p><a href="#projetos" onClick={() => window.dispatchEvent(new CustomEvent('portfolio-filter', { detail: filter }))}>Ver referências <ArrowUpRight size={14} /></a></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

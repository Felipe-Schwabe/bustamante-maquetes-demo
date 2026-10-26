import { ArrowDown, ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="shell hero__inner">
        <div className="hero__copy">
          {siteConfig.mode === 'demo' && <div className="concept-tag"><span className="dot dot--light" /> {siteConfig.conceptLabel}</div>}
          <p className="eyebrow eyebrow--light">Maquetes físicas · Joinville, SC</p>
          <h1 id="hero-title">Grandes projetos começam <em>em outra escala.</em></h1>
          <p className="hero__lead">Maquetes físicas que transformam ideias, projetos e estruturas em experiências concretas.</p>
          <div className="hero__actions">
            <a href="#projetos" className="button button--light">Explorar projetos <ArrowRight size={17} /></a>
            <a href="#orcamento" className="button button--outline-light">Solicitar orçamento</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__image-frame"><Image src="/images/hero/hero-city-model.jpg" alt="Fotografia licenciada demonstrativa de uma maquete urbana em escala." width={1800} height={1200} priority /></div>
          <div className="hero__caption"><span><MapPin size={14} /> Bustamante Maquetes</span><span>{siteConfig.mode === 'demo' ? 'Imagem licenciada demonstrativa' : 'Imagem aprovada'}</span></div>
        </div>
        <a className="hero__scroll" href="#empresa"><span>Descer para explorar</span><ArrowDown size={16} /></a>
      </div>
    </section>
  );
}

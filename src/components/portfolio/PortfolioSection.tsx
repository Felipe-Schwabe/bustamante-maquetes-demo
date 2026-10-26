'use client';

import { ArrowRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { siteConfig } from '@/config/site';
import { getProjects, projectFilters, verifiedPortfolioReferences, type Project, type ProjectCategory } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDialog } from './ProjectDialog';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function PortfolioSection() {
  const projects = getProjects(siteConfig.mode);
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>('Todos');
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const handleFilter = (event: Event) => {
      const nextFilter = (event as CustomEvent<(typeof projectFilters)[number]>).detail;
      if (projectFilters.includes(nextFilter)) setFilter(nextFilter);
    };
    window.addEventListener('portfolio-filter', handleFilter);
    return () => window.removeEventListener('portfolio-filter', handleFilter);
  }, []);

  const visibleProjects = useMemo(
    () => filter === 'Todos' ? projects : projects.filter((project) => project.category === filter as ProjectCategory),
    [filter, projects],
  );

  const selectedIndex = selected ? visibleProjects.findIndex((project) => project.id === selected.id) : -1;
  const goPrevious = () => { if (visibleProjects.length) setSelected(visibleProjects[(selectedIndex - 1 + visibleProjects.length) % visibleProjects.length]); };
  const goNext = () => { if (visibleProjects.length) setSelected(visibleProjects[(selectedIndex + 1) % visibleProjects.length]); };

  return (
    <section className="section portfolio-section" id="projetos" aria-labelledby="portfolio-title">
      <div className="shell">
        <div className="portfolio-section__intro">
          <SectionHeading eyebrow="Portfólio em destaque" title="Projetos que ganham forma." text={siteConfig.mode === 'demo' ? 'Uma seleção visual para apresentar o acabamento da experiência. As fotografias são licenciadas e demonstrativas — não representam trabalhos da Bustamante.' : 'Cases oficiais entram aqui após a aprovação das fotografias, títulos e informações de cada projeto.'} />
          <a href="#orcamento" className="text-button text-button--dark">Conversar sobre um projeto <ArrowRight size={17} /></a>
        </div>

        <div className="portfolio-filters" role="group" aria-label="Filtrar projetos por categoria">
          {projectFilters.map((item) => (
            <button key={item} className={filter === item ? 'is-active' : ''} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>
          ))}
        </div>

        {visibleProjects.length > 0 ? <div className="portfolio-grid">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelected} />)}
        </div> : <div className="portfolio-empty"><span className="eyebrow">Aguardando aprovação</span><p>As fotografias e informações oficiais serão adicionadas nesta mesma estrutura quando liberadas pelo cliente.</p></div>}

        {siteConfig.mode === 'demo' && <div className="portfolio-section__note"><span className="dot" /> Fotografias licenciadas para demonstração · não representam trabalhos da Bustamante</div>}
        <div className="verified-references">
          <div><span className="eyebrow">Referências verificadas</span><p>Nomes encontrados no acervo público da empresa, aguardando fotografia oficial autorizada para serem apresentados como cases.</p></div>
          <div className="verified-references__list">{verifiedPortfolioReferences.map((reference) => <a key={reference.title} href={reference.sourceUrl} target="_blank" rel="noreferrer"><span>{reference.category}</span>{reference.title}</a>)}</div>
        </div>
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} onPrevious={goPrevious} onNext={goNext} />
    </section>
  );
}

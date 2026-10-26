import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import type { Project } from '@/data/projects';

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <button className="project-card__visual" type="button" onClick={() => onOpen(project)} aria-label={`Ampliar projeto ${project.title}`}>
        <Image src={project.image} alt={project.alt} width={1200} height={900} sizes="(max-width: 720px) 50vw, (max-width: 960px) 50vw, 60vw" />
        <span className="project-card__zoom" aria-hidden="true"><ArrowUpRight size={18} /></span>
        <span className="visual-note">{project.visualNote}</span>
      </button>
      <div className="project-card__meta">
        <div>
          <span className="project-card__category">{project.category}</span>
          <h3>{project.title}</h3>
        </div>
        {project.location && <span className="project-card__location">{project.location}</span>}
      </div>
      <p>{project.description}</p>
    </article>
  );
}

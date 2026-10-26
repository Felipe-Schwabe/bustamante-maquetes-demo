'use client';

import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Project } from '@/data/projects';

type ProjectDialogProps = {
  project: Project | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function ProjectDialog({ project, onClose, onPrevious, onNext }: ProjectDialogProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = project?.gallery?.length ? project.gallery : project ? [project.image] : [];

  useEffect(() => {
    setImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrevious();
      if (event.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose, onNext, onPrevious]);

  if (!project) return null;

  return (
    <div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
      <button className="project-dialog__scrim" type="button" onClick={onClose} aria-label="Fechar visualização" />
      <div className="project-dialog__panel">
        <div className="project-dialog__toolbar">
          <span className="eyebrow">{project.category} · {project.visualNote}</span>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Fechar"><X size={20} /></button>
        </div>
        <div className="project-dialog__image">
          <Image src={images[imageIndex]} alt={project.alt} width={1200} height={900} />
          {images.length > 1 && <>
            <button className="project-dialog__image-control project-dialog__image-control--left" type="button" onClick={() => setImageIndex((current) => (current - 1 + images.length) % images.length)} aria-label="Fotografia anterior"><ChevronLeft size={21} /></button>
            <button className="project-dialog__image-control project-dialog__image-control--right" type="button" onClick={() => setImageIndex((current) => (current + 1) % images.length)} aria-label="Próxima fotografia"><ChevronRight size={21} /></button>
            <span className="project-dialog__counter">{imageIndex + 1} / {images.length}</span>
          </>}
        </div>
        <div className="project-dialog__info">
          <div><span className="project-card__category">{project.sourceReference}</span><h2 id="project-dialog-title">{project.title}</h2></div>
          <p>{project.description}</p>
        </div>
        <div className="project-dialog__controls">
          <button className="text-button" type="button" onClick={onPrevious}><ChevronLeft size={18} /> Anterior</button>
          <button className="text-button" type="button" onClick={onNext}>Próximo <ChevronRight size={18} /></button>
        </div>
      </div>
    </div>
  );
}

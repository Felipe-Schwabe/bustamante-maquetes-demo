import { ArrowRight, Check, FileText, Hammer, PackageCheck, Ruler, Search } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const steps = [
  { number: '01', title: 'Entendimento do projeto', text: 'Contexto, intenção e materiais disponíveis para começar pela pergunta certa.', icon: Search },
  { number: '02', title: 'Estudo técnico', text: 'Definição da proposta, escala, materiais e nível de detalhamento necessário.', icon: Ruler },
  { number: '03', title: 'Planejamento', text: 'Uma estratégia de representação pensada para cada projeto e sua finalidade.', icon: FileText },
  { number: '04', title: 'Produção e detalhamento', text: 'Tecnologia, mão de obra e atenção aos detalhes dão forma à peça.', icon: Hammer },
  { number: '05', title: 'Finalização e entrega', text: 'Acabamento, embalagem e orientação para que a maquete chegue bem ao destino.', icon: PackageCheck },
];

export function ProcessSection() {
  return (
    <section className="section process-section" id="processo" aria-labelledby="process-title">
      <div className="shell">
        <div className="process-section__head">
          <SectionHeading eyebrow="Como acontece" title="Da ideia à representação física." text="Uma síntese editorial do processo de desenvolvimento. O percurso é ajustado às necessidades e especificações de cada cliente." />
          <div className="process-section__stamp"><span>MAQUETE</span><strong>≠</strong><span>RÉPLICA</span><small>é interpretação</small></div>
        </div>
        <div className="process-list">
          {steps.map(({ number, title, text, icon: Icon }, index) => (
            <article className="process-step" key={number}>
              <div className="process-step__number">{number}</div>
              <div className="process-step__icon"><Icon size={20} strokeWidth={1.5} /></div>
              <div className="process-step__copy"><h3>{title}</h3><p>{text}</p></div>
              {index < steps.length - 1 && <ArrowRight className="process-step__arrow" size={18} aria-hidden="true" />}
            </article>
          ))}
        </div>
        <div className="differentials">
          <span className="eyebrow">O que orienta o trabalho</span>
          <div className="differentials__list">
            {['Experiência consolidada', 'Desenvolvimento personalizado', 'Arquitetura e engenharia integradas', 'Materiais e técnicas diversos', 'Cuidado na finalização e transporte', 'Aplicações em diferentes escalas'].map((item) => <span key={item}><Check size={15} />{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

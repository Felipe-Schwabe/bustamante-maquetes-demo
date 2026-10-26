import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { BrandMark } from './BrandMark';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__top">
          <div>
            <BrandMark />
            <p className="site-footer__intro">Precisão, matéria e escala para tornar projetos compreensíveis.</p>
          </div>
          <div className="site-footer__links">
            <div>
              <span className="eyebrow">Navegação</span>
              {siteConfig.nav.slice(0, 4).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
            </div>
            <div>
              <span className="eyebrow">Contato</span>
              <a href={siteConfig.phoneHref}><Phone size={14} />{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`}><Mail size={14} />{siteConfig.email}</a>
              <span><MapPin size={14} />{siteConfig.location}</span>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          {siteConfig.mode === 'demo' && <span>{siteConfig.conceptLabel}</span>}
          <a href="#inicio" className="back-top">Voltar ao início <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </footer>
  );
}

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ContactSection() {
  return (
    <section className="section contact-section" id="contato" aria-labelledby="contact-title">
      <div className="shell contact-section__grid">
        <div><span className="eyebrow">Contato</span><h2 id="contact-title">Vamos dar forma<br /><em>ao próximo projeto?</em></h2></div>
        <div className="contact-section__details"><p>Para enviar arquivos ou conversar sobre uma proposta, fale diretamente com a Bustamante Maquetes.</p><a href={`mailto:${siteConfig.email}`} className="contact-line"><Mail size={18} /><span><small>E-mail comercial</small>{siteConfig.email}</span><ArrowUpRight size={18} /></a><a href={siteConfig.phoneHref} className="contact-line"><Phone size={18} /><span><small>Telefone institucional</small>{siteConfig.phone}</span><ArrowUpRight size={18} /></a><div className="contact-line"><MapPin size={18} /><span><small>Onde estamos</small>{siteConfig.location}</span></div></div>
      </div>
    </section>
  );
}

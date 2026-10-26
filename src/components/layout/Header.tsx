'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { BrandMark } from './BrandMark';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="shell site-header__inner">
        <a href="#inicio" className="site-header__brand" onClick={closeMenu}>
          <BrandMark />
        </a>

        <nav id="primary-menu" className={`site-nav ${open ? 'site-nav--open' : ''}`} aria-label="Navegação principal">
          <div className="site-nav__links">
            {siteConfig.nav.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
            ))}
          </div>
          <a className="button button--small button--solid site-nav__cta" href="#orcamento" onClick={closeMenu}>
            Solicitar orçamento
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}

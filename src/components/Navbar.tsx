import { useState, useEffect, useCallback } from 'react'
import { NAV_LINKS } from '../data/content'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      {/* Barra de navegação fixa */}
      <header className={`nav-wrap ${scrolled ? 'scrolled' : ''}`} role="banner">
        <nav className="nav" aria-label="Navegação principal">

          {/* Logo — troque por <img> quando tiver o arquivo da logo */}
          <a href="#inicio" className="nav__logo" aria-label="FullCycle Development — Página inicial">
            {/*
              A logo é servida de /public — sem import necessário.
              height: 38px cabe bem na nav de 64px de altura.
          */}
            <img
              src="/fullcycle-development.svg"
              alt="FullCycle Development"
              className="nav__logo-img"
              height="38"
              width="auto"
            />
          </a>

          {/* Links — desktop */}
          <ul className="nav__links" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA — desktop */}
          <a href="#contato" className="btn btn-primary nav__cta">
            Fale conosco
          </a>

          {/* Hambúrguer — mobile */}
          <button
            id="nav-hamburger"
            className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="nav-overlay"
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Menu mobile — overlay de tela cheia */}
      <div
        id="nav-overlay"
        className={`nav__overlay ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Menu de navegação"
      >
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a href="#contato" className="btn btn-primary" onClick={close}
           style={{ marginTop: '0.5rem' }}>
          Fale conosco
        </a>
      </div>
    </>
  )
}

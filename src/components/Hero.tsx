import { HERO } from '../data/content'

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Início">

      {/* Coluna esquerda — texto */}
      <div className="hero__left">
        <div className="reveal-left">
          {/* Etiqueta com traço de cobre */}
          <p className="hero__tag">
            <span className="hero__tag-line" aria-hidden="true" />
            {HERO.tag}
          </p>

          <h1 className="hero__headline">
            {HERO.headline}
          </h1>

          <p className="hero__subtext">
            {HERO.subtext}
          </p>

          <div className="hero__actions">
            <a
              id="hero-cta-primary"
              href="#servicos"
              className="btn btn-primary"
            >
              {HERO.cta_primary}
            </a>
            <a
              id="hero-cta-secondary"
              href="#contato"
              className="btn btn-outline"
            >
              {HERO.cta_secondary}
            </a>
          </div>
        </div>
      </div>

      {/* Coluna direita — fotografia editorial */}
      <div className="hero__right reveal-right" aria-hidden="true">
        <img
          src="/hero-editorial.jpg"
          alt=""
          className="hero__img"
        />
      </div>

    </section>
  )
}

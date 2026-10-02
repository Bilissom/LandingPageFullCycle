import { ABOUT } from '../data/content'

export function About() {
  return (
    <section id="sobre" className="about" aria-label="Sobre a FullCycle">
      <div className="container">
        <div className="about__grid">

          {/* Coluna esquerda — texto principal */}
          <div className="reveal">
            <p className="section-label">{ABOUT.label}</p>
            <h2 className="about__title">{ABOUT.title}</h2>
            {ABOUT.body.map((paragraph, i) => (
              <p key={i} className="about__body">{paragraph}</p>
            ))}
          </div>

          {/* Coluna direita — pilares numerados */}
          <div
            className="about__pillars reveal-stagger"
            role="list"
            aria-label="Pilares da FullCycle"
          >
            {ABOUT.pillars.map((pillar, i) => (
              <div key={pillar.title} className="about__pillar" role="listitem">
                <p className="about__pillar-num">0{i + 1}</p>
                <p className="about__pillar-title">{pillar.title}</p>
                <p className="about__pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

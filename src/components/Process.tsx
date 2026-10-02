import { PROCESS } from '../data/content'

export function Process() {
  return (
    <section id="processo" className="process" aria-label="Como trabalhamos">
      <div className="container">
        <div className="process__layout">

          {/* Coluna esquerda — introdução */}
          <div className="reveal">
            <p className="section-label">{PROCESS.label}</p>
            <h2 className="process__title">{PROCESS.title}</h2>
            <p className="process__sub">{PROCESS.subtitle}</p>
          </div>

          {/* Coluna direita — etapas */}
          <ol
            className="process__steps reveal-stagger"
            aria-label="Etapas do processo"
          >
            {PROCESS.steps.map(step => (
              <li key={step.num} className="process-step">
                <span className="process-step__num" aria-hidden="true">
                  {step.num}
                </span>
                <div>
                  <h3 className="process-step__title">{step.title}</h3>
                  <p className="process-step__desc">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>

        </div>
      </div>
    </section>
  )
}

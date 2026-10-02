import { PROJECTS } from '../data/content'

export function Projects() {
  return (
    <section id="projetos" className="projects" aria-label="Projetos da FullCycle">
      <div className="container">

        <div className="reveal">
          <p className="section-label">Projetos</p>
          <div className="section-head">
            <h2 className="section-head__title">{PROJECTS.title}</h2>
            <p className="section-head__sub">{PROJECTS.subtitle}</p>
          </div>
        </div>

        <div
          className="projects__placeholder reveal"
          role="status"
          aria-label="Projetos em breve"
        >
          <p className="projects__placeholder-title">Em construção</p>
          <p className="projects__placeholder-text">{PROJECTS.placeholderText}</p>
        </div>

      </div>
    </section>
  )
}

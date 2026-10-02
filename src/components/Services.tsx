import { SERVICES } from '../data/content'

export function Services() {
  return (
    <section id="servicos" className="services" aria-label="Serviços da FullCycle">
      <div className="container">

        {/* Cabeçalho — label de cobre + título + subtítulo */}
        <div className="reveal">
          <p className="section-label">{SERVICES.label ?? 'Serviços'}</p>
          <div className="section-head">
            <h2 className="section-head__title">{SERVICES.title}</h2>
            <p className="section-head__sub">{SERVICES.subtitle}</p>
          </div>
        </div>

        {/* Bento assimétrico — 7+5 / 5+7 */}
        <div
          className="services__bento reveal-stagger"
          role="list"
          aria-label="Lista de serviços"
        >
          {SERVICES.items.map((service, i) => (
            <article
              key={service.title}
              className={`svc svc--${i + 1}`}
              role="listitem"
            >
              <p className="svc__num">0{i + 1}</p>
              <h3 className="svc__title">{service.title}</h3>
              <p className="svc__desc">{service.desc}</p>
              <span className="svc__tag">{service.tag}</span>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

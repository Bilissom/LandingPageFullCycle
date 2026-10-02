import { NAV_LINKS } from '../data/content'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">

          <span className="footer__brand">FullCycle Development</span>

          <nav aria-label="Links do rodapé">
            <ul className="footer__links" role="list">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>

          <p className="footer__copy">
            &copy; {year} FullCycle Development
          </p>

        </div>
      </div>
    </footer>
  )
}

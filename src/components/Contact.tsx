import { useState } from 'react'
import { CONTACT } from '../data/content'

type FormState = {
  nome: string
  email: string
  servico: string
  mensagem: string
}

// Opções de tipo de projeto — edite para sincronizar com os serviços reais
const SERVICE_OPTIONS = [
  'Site ou Landing Page',
  'Sistema Web',
  'E-commerce',
  'Solução Personalizada',
  'Ainda não sei, quero conversar',
]

export function Contact() {
  const [form, setForm] = useState<FormState>({
    nome: '',
    email: '',
    servico: '',
    mensagem: '',
  })
  const [submitted, setSubmitted] = useState(false)

  // Tenta carregar a chave da API caso exista. (Definida no arquivo .env)
  const googleMapsKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: integre com Formspree, EmailJS ou backend próprio
    setSubmitted(true)
  }

  return (
    <section id="contato" className="contact" aria-label="Contato">
      <div className="container">

        {/* Cabeçalho da seção agora ocupa a largura total no topo */}
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">{CONTACT.label_section}</p>
          <h2 className="contact__title">{CONTACT.title}</h2>
          <p className="contact__sub">{CONTACT.subtitle}</p>
        </div>

        <div className="contact__grid">

          {/* Coluna esquerda — formulário e informações de contato diretas */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Bloco do Formulário */}
            <div>
              {submitted ? (
                <div className="form-success" role="alert">
                  <p className="form-success__title">Mensagem enviada.</p>
                  <p className="form-success__sub">
                    Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form
                  id="contact-form"
                  className="contact__form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Formulário de contato"
                >
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="contact-nome">Nome</label>
                      <input
                        id="contact-nome"
                        name="nome"
                        type="text"
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-email">E-mail</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-servico">Tipo de projeto</label>
                    <select
                      id="contact-servico"
                      name="servico"
                      value={form.servico}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      {SERVICE_OPTIONS.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="contact-mensagem">Mensagem</label>
                    <textarea
                      id="contact-mensagem"
                      name="mensagem"
                      placeholder="Descreva brevemente o que você precisa..."
                      value={form.mensagem}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <button
                      id="contact-submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Enviar mensagem
                    </button>
                    <p className="form-note" style={{ marginTop: '0.75rem', textAlign: 'left' }}>
                      {CONTACT.form_note}
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Informações de contato diretas */}
            <div style={{ padding: '1.5rem', background: 'var(--bg-elevated)', borderRadius: 'var(--r-md)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 600 }}>Fale diretamente conosco</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <a href={CONTACT.email} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>
                  {CONTACT.email.replace('mailto:', '')}
                </a>
              </p>
            </div>
          </div>

          {/* Coluna direita — mapa */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '450px', borderRadius: 'var(--r-md)', overflow: 'hidden', border: '1px solid var(--border)' }}>
            
            {/* Wrapper do Iframe do Mapa */}
            <div style={{ flex: 1, backgroundColor: 'var(--bg-elevated)', position: 'relative' }}>
              {googleMapsKey ? (
                <iframe
                  title="Localização da FullCycle Development em Ji-Paraná, Rondônia"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsKey}&q=Ji-Paraná,Rondônia`}
                />
              ) : (
                <iframe
                  title="Localização da FullCycle Development em Ji-Paraná, Rondônia (OpenStreetMap)"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-62.18402404785157%2C-11.00234190833299%2C-61.69064025878907%2C-10.75244585147817&amp;layer=mapnik&amp;marker=-10.877399557458284%2C-61.93733215332031"
                />
              )}
            </div>
            
            {/* Rodapé do mapa com a identificação e link */}
            <div style={{ padding: '1rem 1.25rem', background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                   <circle cx="12" cy="10" r="3"></circle>
                 </svg>
                 <span style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                   Ji-Paraná, Rondônia
                 </span>
               </div>
               
               <a 
                 href="https://www.google.com/maps/place/Ji-Paran%C3%A1,+RO/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 style={{ fontSize: '0.8125rem', color: 'var(--accent)', fontWeight: 500, textDecoration: 'none' }}
               >
                 Abrir no Google Maps &rarr;
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

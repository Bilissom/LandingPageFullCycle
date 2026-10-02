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
        <div className="contact__grid">

          {/* Coluna esquerda — texto de chamada */}
          <div className="reveal">
            <p className="section-label">{CONTACT.label_section}</p>
            <h2 className="contact__title">{CONTACT.title}</h2>
            <p className="contact__sub">{CONTACT.subtitle}</p>
          </div>

          {/* Coluna direita — formulário */}
          <div className="reveal">
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
                  <p className="form-note" style={{ marginTop: '0.75rem' }}>
                    {CONTACT.form_note}
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

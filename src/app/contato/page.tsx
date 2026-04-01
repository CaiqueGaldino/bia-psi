'use client'
import { useState } from 'react'
import { IconHeart } from '@/components/Icons'
import styles from './contato.module.css'

export default function ContatoPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Formata a mensagem para WhatsApp
    const assuntoLabel = form.assunto === 'agendamento' ? 'Agendar uma consulta' 
      : form.assunto === 'duvidas' ? 'Tirar dúvidas' 
      : 'Outro assunto'
    
    const mensagemFormatada = `*Novo contato do formulário*\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*Email:* ${form.email}\n` +
      `*Assunto:* ${assuntoLabel}\n` +
      `*Mensagem:*\n${form.mensagem}`
    
    // Link do WhatsApp com mensagem pré-preenchida
    const whatsappUrl = `https://wa.me/5588999133606?text=${encodeURIComponent(mensagemFormatada)}`
    
    // Abre o WhatsApp em nova aba/janela
    window.open(whatsappUrl, '_blank')
    
    // Mostra mensagem de sucesso
    setSent(true)
    
    // Reset do formulário após 3 segundos
    setTimeout(() => {
      setForm({ nome: '', email: '', assunto: '', mensagem: '' })
    }, 3000)
  }

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-tag">Vamos conversar</span>
          <h1>Entre em <span className="text-verde">Contato</span></h1>
          <p>Se você sente que é o momento de cuidar de si, estou aqui para te acompanhar nesse processo.</p>
        </div>
      </section>

      <section className={styles.contatoSection}>
        <div className="container">
          <div className={styles.grid}>

            {/* Info */}
            <div className={styles.info}>
              <h2>Como me encontrar</h2>
              <p>
                Você pode me chamar pelo WhatsApp para marcarmos sua primeira sessão,
                ou me enviar um e-mail. Responderei em até 24 horas.
              </p>

              <div className={styles.links}>
                <a href="https://wa.me/5588988211715" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                  <span className={`${styles.linkIcon} ${styles.wppIcon}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.486 2 2 6.486 2 12c0 1.89.528 3.655 1.438 5.163L2 22l4.977-1.381A9.96 9.96 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18a7.96 7.96 0 01-4.054-1.113l-.29-.172-3.007.834.849-2.93-.19-.301A7.971 7.971 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
                  </span>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>(88) 99913-3606</span>
                  </div>
                </a>

                <a href="mailto:beatrizsilvestrepsi@gmail.com" className={styles.linkItem}>
                  <span className={`${styles.linkIcon} ${styles.emailIcon}`}>✉️</span>
                  <div>
                    <strong>E-mail</strong>
                    <span>beatrizsilvestrepsi@gmail.com</span>
                  </div>
                </a>

                <div className={styles.linkItem} style={{ cursor: 'default' }}>
                  <span className={`${styles.linkIcon} ${styles.localIcon}`}>📍</span>
                  <div>
                    <strong>Presencial</strong>
                    <span>Juazeiro do Norte – Ceará</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/5588988211715"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wpp"
              >
                <svg viewBox="0 0 24 24" fill="white" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.486 2 2 6.486 2 12c0 1.89.528 3.655 1.438 5.163L2 22l4.977-1.381A9.96 9.96 0 0012 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18a7.96 7.96 0 01-4.054-1.113l-.29-.172-3.007.834.849-2.93-.19-.301A7.971 7.971 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg>
                Agendar pelo WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className={styles.formWrap}>
              <h3>Envie uma mensagem</h3>
              {!sent ? (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  <div className={styles.formGroup}>
                    <label htmlFor="nome">Nome completo</label>
                    <input
                      id="nome" name="nome" type="text" required
                      placeholder="Seu nome"
                      value={form.nome} onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="seu@email.com"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="assunto">Assunto</label>
                    <select id="assunto" name="assunto" value={form.assunto} onChange={handleChange}>
                      <option value="">Selecione...</option>
                      <option value="agendamento">Agendar uma consulta</option>
                      <option value="duvidas">Tirar dúvidas</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea
                      id="mensagem" name="mensagem" rows={5} required
                      placeholder="Olá, gostaria de..."
                      value={form.mensagem} onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Enviar mensagem
                  </button>
                </form>
              ) : (
                <div className={styles.success}>
                  <IconHeart size={48} color="var(--accent)" className={styles.successIcon} />
                  <h3>Redirecionando para WhatsApp...</h3>
                  <p>Sua mensagem foi preparada e está sendo enviada via WhatsApp. Responderei assim que possível!</p>
                  <button onClick={() => setSent(false)} className="btn btn-outline" style={{ marginTop: '1rem' }}>
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

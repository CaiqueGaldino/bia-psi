import type { Metadata } from 'next'
import styles from './policy.module.css'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Política de privacidade e proteção de dados – Beatriz Silvestre Lira Psicóloga.',
}

export default function PrivacidadePage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.wrap}`}>
        <span className="section-tag">Transparência</span>
        <h1>Política de Privacidade</h1>
        <p className={styles.updated}>Última atualização: março de 2026</p>

        <div className={styles.content}>
          <h2>1. Coleta de dados</h2>
          <p>Coletamos apenas os dados fornecidos voluntariamente através dos formulários de contato do site (nome, e-mail e mensagem), exclusivamente para fins de comunicação.</p>

          <h2>2. Uso dos dados</h2>
          <p>Os dados são utilizados somente para responder às suas mensagens e, quando autorizado, para envio de informações sobre serviços. Nunca vendemos ou compartilhamos dados com terceiros.</p>

          <h2>3. Armazenamento e segurança</h2>
          <p>Seus dados são armazenados de forma segura e confidencial, de acordo com as melhores práticas de segurança da informação.</p>

          <h2>4. Seus direitos</h2>
          <p>Você pode, a qualquer momento, solicitar acesso, correção ou exclusão dos seus dados pessoais entrando em contato pelo e-mail <a href="mailto:beatrizsilvestrepsi@gmail.com">beatrizsilvestrepsi@gmail.com</a>.</p>

          <h2>5. Contato</h2>
          <p>Dúvidas sobre esta política? Entre em contato: <a href="mailto:beatrizsilvestrepsi@gmail.com">beatrizsilvestrepsi@gmail.com</a></p>
        </div>
      </div>
    </section>
  )
}

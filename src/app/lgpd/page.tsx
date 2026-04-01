import type { Metadata } from 'next'
import styles from '../privacidade/policy.module.css'

export const metadata: Metadata = {
  title: 'LGPD – Lei Geral de Proteção de Dados',
  description: 'Conformidade com a LGPD – Beatriz Silvestre Lira Psicóloga.',
}

export default function LgpdPage() {
  return (
    <section className={styles.page}>
      <div className={`container ${styles.wrap}`}>
        <span className="section-tag">Conformidade Legal</span>
        <h1>LGPD – Proteção de Dados</h1>
        <p className={styles.updated}>Última atualização: março de 2026</p>

        <div className={styles.content}>
          <h2>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</h2>
          <p>Este site está em conformidade com a LGPD. Todos os dados pessoais coletados são tratados com respeito, transparência e finalidade específica.</p>

          <h2>Base legal para tratamento</h2>
          <p>O tratamento dos dados ocorre com base no consentimento do titular, conforme Art. 7º, inciso I da LGPD, ou para execução de contrato (prestação de serviços psicológicos).</p>

          <h2>Seus direitos como titular</h2>
          <ul>
            <li>Confirmar a existência de tratamento de dados</li>
            <li>Acessar seus dados</li>
            <li>Corrigir dados incompletos ou desatualizados</li>
            <li>Solicitar anonimização, bloqueio ou eliminação</li>
            <li>Revogar o consentimento a qualquer momento</li>
          </ul>

          <h2>Encarregado de Proteção de Dados (DPO)</h2>
          <p>Responsável: Beatriz Silvestre Lira<br/>
          E-mail: <a href="mailto:beatrizsilvestrepsi@gmail.com">beatrizsilvestrepsi@gmail.com</a></p>
        </div>
      </div>
    </section>
  )
}

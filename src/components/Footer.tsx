import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'
import { IconPhone, IconMail } from '@/components/Icons'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>

          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <Image
                src="/bia-psi/images/logo-branca.png"
                alt="Beatriz Silvestre - Logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <div className={styles.name}>Beatriz Silvestre</div>
            <div className={styles.crp}>Psicóloga · CRP 11/24329</div>
            <p>
              Atendimento online e presencial em Juazeiro do Norte – CE.
              Especialista em ansiedade e saúde emocional.
            </p>
            <div className={styles.contacts}>
              <a href="https://wa.me/5588988211715" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <IconPhone size={13} color="currentColor" />
                (88) 99913-3606
              </a>
              <a href="mailto:beatrizsilvestrepsi@gmail.com" className={styles.contactItem}>
                <IconMail size={13} color="currentColor" />
                beatrizsilvestrepsi@gmail.com
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Navegação</h4>
            <ul>
              {[['/','/início'], ['/sobre','Sobre'], ['/servicos','Serviços'], ['/blog','Blog'], ['/contato','Contato']].map(([href, label]) => (
                <li key={href}><Link href={href}>{label === '/início' ? 'Início' : label}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacidade">Política de Privacidade</Link></li>
              <li><Link href="/lgpd">LGPD</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2026 Beatriz Silvestre — Todos os direitos reservados</span>
          <div className={styles.bottomLinks}>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/lgpd">LGPD</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

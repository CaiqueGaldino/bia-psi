import styles from './CtaBanner.module.css'
import { IconWhatsApp } from '@/components/Icons'

export default function CtaBanner() {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>Próximo passo</p>
            <h2>Você não precisa lidar<br />com tudo <em>sozinho(a).</em></h2>
            <p className={styles.sub}>
              Dar o primeiro passo é o ato mais corajoso que existe.
              Estou aqui para te acompanhar nessa jornada.
            </p>
          </div>
          <div className={styles.action}>
            <a
              href="https://wa.me/5588988211715"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg"
            >
              <IconWhatsApp size={17} />
              Agendar pelo WhatsApp
            </a>
            <p className={styles.hint}>Respondo em até 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './IntroSection.module.css'

export default function IntroSection() {
  return (
    <section className={styles.intro} id="sobre-intro">
      <div className="container">
        <div className={styles.grid}>

          {/* Photo visual */}
          <div className={styles.photoCol}>
            <Image
              src="/images/foto2.jpg"
              alt="Beatriz Silvestre"
              width={320}
              height={420}
              className={styles.photo}
              priority
            />
          </div>

          {/* Text */}
          <div className={styles.text}>
            <p className="eyebrow">Quem sou eu</p>
            <h2>Olá, sou <em>Beatriz Silvestre</em></h2>
            <div className="divider" />
            <p>
              Atuo com adolescentes e adultos que enfrentam <strong>ansiedade,
              sobrecarga emocional</strong> e dificuldades em encontrar equilíbrio
              na vida pessoal e profissional.
            </p>
            <p style={{ marginTop: '.85rem' }}>
              Meu trabalho é ajudar você a construir uma relação mais saudável com
              seus pensamentos e emoções, para viver com mais{' '}
              <strong>consciência e propósito</strong>.
            </p>
            <Link href="/sobre" className="btn btn-outline" style={{ marginTop: '1.8rem' }}>
              Saiba mais sobre mim
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

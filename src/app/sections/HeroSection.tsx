'use client'
import styles from './HeroSection.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { IconWhatsApp, IconArrow, IconChevronDown, IconShield } from '@/components/Icons'

export default function HeroSection() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.bgLines} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Left — text */}
        <div className={styles.text}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>Psicóloga · CRP 11/24329 · Juazeiro do Norte &amp; Online</span>
          </div>

          <h1 className={styles.title}>
            Psicoterapia para viver com mais<br />
            <em>leveza, clareza</em> e <em>propósito</em>
          </h1>

          <p className={styles.subtitle}>
            Atendimento psicológico para adolescentes e adultos, com foco em
            ansiedade, autocobrança e construção de uma vida com mais sentido.
          </p>

          <div className={styles.ctas}>
            <a
              href="https://wa.me/5588988211715"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <IconWhatsApp size={16} />
              Agendar consulta
            </a>
            <Link href="/sobre" className="btn btn-ghost btn-lg">
              Conheça meu trabalho
              <IconArrow size={15} />
            </Link>
          </div>

          <div className={styles.pills}>
            <span className={styles.pill}>Atendimento online</span>
            <span className={styles.pill}>Presencial em Juazeiro do Norte</span>
            <span className={styles.pill}>Abordagem ACT</span>
          </div>
        </div>

        {/* Right — photo */}
        <div className={styles.photoCol}>
          <div className={styles.photoFrame}>
            {/* Foto da psicóloga para a hero section */}
            <Image
              src="/images/foto.jpg"
              alt="Beatriz Silvestre Lira, psicóloga CRP 11/24329"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              onError={(e) => {
                // show placeholder when image is missing
                const t = e.currentTarget as HTMLImageElement
                t.style.display = 'none'
              }}
            />
          </div>

          {/* Floating badge */}
          <div className={styles.badge}>
            <IconShield size={14} color="var(--accent-dark)" />
            <div>
              <div className={styles.badgeLabel}>Registro profissional</div>
              <div className={styles.badgeVal}>CRP 11/24329</div>
            </div>
          </div>

          {/* Deco ring */}
          <div className={styles.ring} aria-hidden="true" />
        </div>
      </div>

      <a href="#sobre-intro" className={styles.scroll} aria-label="Rolar para baixo">
        <IconChevronDown size={16} color="var(--text-muted)" />
      </a>
    </section>
  )
}

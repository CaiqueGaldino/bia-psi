import type { Metadata } from 'next'
import styles from './sobre.module.css'
import Link from 'next/link'
import { IconShield, IconCheck, IconWhatsApp, IconEar, IconUsers, IconBriefcase, IconGlobe, IconTarget } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Sobre – Psicóloga Beatriz Silvestre',
  description: 'Conheça Beatriz Silvestre, psicóloga CRP 11/24329. Abordagem ACT, atendimento humanizado em Juazeiro do Norte e online.',
}

const act = [
  { num: '01', title: 'Valores', desc: 'Identificamos o que realmente importa para você e o que dá sentido à sua vida.' },
  { num: '02', title: 'Aceitação', desc: 'Aprender a sentir sem fugir — as emoções difíceis ganham lugar na sua história.' },
  { num: '03', title: 'Presença', desc: 'Desenvolver atenção plena para viver o momento com mais clareza e intenção.' },
  { num: '04', title: 'Compromisso', desc: 'Construir ações concretas que aproximem você de quem você quer ser.' },
]

const diferenciais = [
  { Icon: IconEar,       title: 'Escuta ativa e acolhedora',     desc: 'Espaço seguro, sem julgamentos. Cada sessão começa pelo que você traz.' },
  { Icon: IconUsers,     title: 'Foco em mulheres e jovens',      desc: 'Experiência especial no cuidado de mulheres em transição e jovens adultos.' },
  { Icon: IconBriefcase, title: 'Psicologia organizacional',      desc: 'Formação adicional que enriquece o olhar sobre carreira e identidade.' },
  { Icon: IconGlobe,     title: 'Online e presencial',            desc: 'Flexibilidade total. Atendo onde for melhor para você.' },
]

export default function SobrePage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <p className="eyebrow">Conheça meu trabalho</p>
          <h1>Beatriz <em>Silvestre</em></h1>
          <div className={styles.heroBadge}>
            <IconShield size={14} color="var(--accent-dark)" />
            Psicóloga · CRP 11/24329
          </div>
          <p className={styles.heroSub}>
            Psicóloga apaixonada pelo cuidado emocional e pela construção de vidas com mais significado.
          </p>
        </div>
      </section>

      {/* About */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textWrap}>
              <p className="eyebrow">Minha história</p>
              <h2>Uma psicóloga que <em>acredita na sua transformação</em></h2>
              <div className="divider" />
              <p>Sou psicóloga com atuação voltada ao cuidado emocional de adolescentes e adultos, especialmente <strong>mulheres em fases de transição e construção de identidade</strong>.</p>
              <p>Acredito que cada pessoa carrega uma capacidade imensa de ressignificar experiências e criar uma vida mais plena — meu papel é caminhar ao seu lado nesse processo.</p>
              <p>Tenho experiência em psicologia organizacional, o que me permite compreender os desafios da vida moderna: pressão profissional, autocobrança, dificuldades de identidade e sobrecarga emocional.</p>
            </div>

            <div className={styles.valuesCard}>
              <div className={styles.valuesTop}>
                <div className={styles.valuesTitle}>Valores que guiam meu trabalho</div>
                {['Acolhimento', 'Escuta ativa', 'Humanização', 'Presença', 'Propósito', 'Sem julgamentos'].map(v => (
                  <div key={v} className={styles.valueRow}>
                    <IconCheck size={14} color="var(--accent-dark)" />
                    {v}
                  </div>
                ))}
              </div>
              <div className={styles.valuesBadge}>
                <IconShield size={13} color="var(--accent-dark)" />
                CRP 11/24329 – Conselho Regional de Psicologia
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACT */}
      <section className={styles.actSection}>
        <div className="container">
          <div className={styles.actHeader}>
            <div>
              <p className="eyebrow">Abordagem terapêutica</p>
              <h2>Terapia de Aceitação<br />e Compromisso <em>(ACT)</em></h2>
            </div>
            <p className={styles.actSub}>
              Uma abordagem que ajuda você a lidar com pensamentos difíceis e emoções intensas, sem tentar suprimir o que sente.
            </p>
          </div>
          <div className={styles.actGrid}>
            {act.map(item => (
              <div key={item.num} className={styles.actCard}>
                <div className={styles.actNum}>{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className={styles.diferenciaisSection}>
        <div className="container">
          <p className="eyebrow">Por que me escolher</p>
          <h2 className={styles.difTitle}>Meus <em>diferenciais</em></h2>
          <div className={styles.diferenciaisGrid}>
            {diferenciais.map(d => (
              <div key={d.title} className={styles.diferencialCard}>
                <div className={styles.dIcon}>
                  <d.Icon size={18} color="var(--accent-dark)" />
                </div>
                <div>
                  <strong>{d.title}</strong>
                  <span>{d.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Pronta para dar<br />o primeiro passo?</h2>
              <p>Entre em contato e vamos conversar sobre como posso te ajudar.</p>
            </div>
            <div className={styles.ctaBtns}>
              <a href="https://wa.me/5588988211715" target="_blank" rel="noopener noreferrer" className="btn btn-wpp btn-lg">
                <IconWhatsApp size={17} />
                WhatsApp
              </a>
              <Link href="/contato" className="btn btn-ghost btn-lg">Ver formulário</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

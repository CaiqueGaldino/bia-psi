import Link from 'next/link'
import styles from './ServicesSnippet.module.css'
import { IconBrain, IconLeaf, IconMonitor, IconArrow } from '@/components/Icons'

const cards = [
  {
    Icon: IconBrain,
    title: 'Psicoterapia Individual',
    desc: 'Espaço seguro para compreender suas emoções, pensamentos e comportamentos — e construir uma vida mais alinhada com seus valores.',
    tag: 'Adultos',
  },
  {
    Icon: IconLeaf,
    title: 'Terapia para Adolescentes',
    desc: 'Apoio especializado no desenvolvimento emocional, identidade e nos desafios únicos da adolescência.',
    tag: 'Jovens',
  },
  {
    Icon: IconMonitor,
    title: 'Atendimento Online',
    desc: 'Sessões pelo conforto da sua casa, com a mesma qualidade e cuidado do atendimento presencial.',
    tag: 'Flexível',
  },
]

export default function ServicesSnippet() {
  return (
    <section className={styles.section} id="servicos-home">
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className="eyebrow">O que ofereço</p>
            <h2 className="section-title">Como posso<br />te ajudar</h2>
          </div>
          <Link href="/servicos" className="btn btn-ghost">
            Ver todos os serviços
            <IconArrow size={15} />
          </Link>
        </div>

        <div className={styles.grid}>
          {cards.map((c, i) => (
            <div key={c.title} className={styles.card} style={{ transitionDelay: `${i * .08}s` }}>
              <div className={styles.iconWrap}>
                <c.Icon size={20} color="var(--accent-dark)" />
              </div>
              <span className={styles.tag}>{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

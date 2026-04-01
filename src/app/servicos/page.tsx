import type { Metadata } from 'next'
import { AppImage } from '@/components/AppImage'
import styles from './servicos.module.css'
import Link from 'next/link'
import { IconCalendar, IconClock, IconMonitor, IconPin } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Serviços – Psicoterapia Individual e Terapia para Adolescentes',
  description:
    'Conheça os serviços de psicoterapia individual, terapia para adolescentes e atendimento online oferecidos pela psicóloga Beatriz Silvestre Lira em Juazeiro do Norte.',
}

const servicos = [
  {
    icon: '/images/coracao.png',
    title: 'Psicoterapia Individual',
    desc: 'Um espaço seguro, acolhedor e confidencial para você compreender suas emoções, pensamentos e padrões de comportamento. Trabalhamos juntas para que você desenvolva recursos internos e construa uma vida mais alinhada com seus valores.',
    items: [
      'Ansiedade e estresse crônico',
      'Autocobrança e perfeccionismo',
      'Dificuldades de relacionamento',
      'Transições de vida e identidade',
      'Baixa autoestima',
      'Sobrecarga emocional',
    ],
  },
  {
    icon: '/images/planta.png',
    title: 'Terapia para Adolescentes',
    desc: 'A adolescência é uma fase de descobertas, mas também de muitos desafios. Ofereço um espaço de escuta ativa e acolhimento para jovens que precisam de apoio emocional para navegar essa fase com mais equilíbrio.',
    items: [
      'Construção de identidade',
      'Pressão escolar e social',
      'Conflitos familiares',
      'Ansiedade e insegurança',
      'Auto-conhecimento',
      'Habilidades socioemocionais',
    ],
  },
]

const passos = [
  { num: '1', title: 'Primeiro contato', desc: 'Me mande uma mensagem pelo WhatsApp ou formulário. Conversamos sobre suas necessidades.' },
  { num: '2', title: 'Sessão inicial', desc: 'Marcamos a primeira sessão para nos conhecermos e definir os objetivos do seu processo.' },
  { num: '3', title: 'Processo terapêutico', desc: 'Sessões semanais de 50 minutos, online ou presencial, no seu ritmo.' },
  { num: '4', title: 'Evolução contínua', desc: 'Avaliamos juntos o progresso e ajustamos o percurso conforme seu desenvolvimento.' },
]

export default function ServicosPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-tag">O que ofereço</span>
          <h1>Serviços de <span className="text-verde">Psicoterapia</span></h1>
          <p>Atendimento humanizado e especializado, presencial em Juazeiro do Norte e online para todo o Brasil.</p>
        </div>
      </section>

      <section className={styles.servicosSection}>
        <div className="container">
          {servicos.map((s, i) => (
            <div key={s.title} className={`${styles.servicoItem} ${i % 2 !== 0 ? styles.reverse : ''}`}>
              <div className={styles.servicoVisual}>
                <AppImage
                  src={s.icon}
                  alt={s.title}
                  width={400}
                  height={400}
                  className={styles.animationIcon}
                  priority={i === 0}
                />
              </div>
              <div className={styles.servicoText}>
                <span className="section-tag">{i === 0 ? 'Adultos' : 'Adolescentes'}</span>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <ul className={styles.servicoList}>
                  {s.items.map(item => (
                    <li key={item}>
                      <span className={styles.check} aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contato" className="btn btn-primary">Agendar consulta</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className={styles.comoFunciona}>
        <div className="container">
          <span className="section-tag" style={{ display: 'block', textAlign: 'center' }}>Passo a passo</span>
          <h2 className="section-heading">Como funciona o processo</h2>
          <p className="section-sub">Cada jornada é única. Aqui você encontra clareza sobre como começar.</p>
          <div className={styles.passosGrid}>
            {passos.map(p => (
              <div key={p.num} className={styles.passoCard}>
                <div className={styles.passoNum}>{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Session info */}
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <IconCalendar size={32} color="var(--accent)" className={styles.infoIcon} />
              <span className={styles.infoLabel}>Frequência</span>
              <span className={styles.infoValue}>Sessões semanais</span>
            </div>
            <div className={styles.infoCard}>
              <IconClock size={32} color="var(--accent)" className={styles.infoIcon} />
              <span className={styles.infoLabel}>Duração</span>
              <span className={styles.infoValue}>50 minutos por sessão</span>
            </div>
            <div className={styles.infoCard}>
              <IconMonitor size={32} color="var(--accent)" className={styles.infoIcon} />
              <span className={styles.infoLabel}>Modalidade</span>
              <span className={styles.infoValue}>Online ou presencial</span>
            </div>
            <div className={styles.infoCard}>
              <IconPin size={32} color="var(--accent)" className={styles.infoIcon} />
              <span className={styles.infoLabel}>Local</span>
              <span className={styles.infoValue}>Juazeiro do Norte – CE</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

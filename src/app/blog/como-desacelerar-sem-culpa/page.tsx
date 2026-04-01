import styles from '../blog-post.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Como desacelerar sem culpa',
  description: 'Por que descansar é uma necessidade — não preguiça. Por Beatriz Silvestre, psicóloga CRP 11/24329.',
}

export default function PostDesacelerar() {
  return (
    <article className={styles.article}>
      <div className={styles.hero} style={{ background: '#E8F5EE' }}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>← Voltar ao Blog</Link>
          <span className={styles.tag}>Equilíbrio</span>
          <h1>Como desacelerar sem culpa</h1>
          <div className={styles.meta}>
            <span>Por Beatriz Silvestre · CRP 11/24329</span>
            <span>·</span>
            <span>⏱ 5 min de leitura</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.lead}>
          Vivemos numa cultura que glorifica a produtividade. Estar ocupada virou sinônimo de ter valor. Descansar virou luxo. E aí, quando finalmente paramos, vem a culpa: <em>"Deveria estar fazendo alguma coisa."</em>
        </p>

        <h2>A cultura da produtividade e seus custos</h2>
        <p>
          "Hustle culture", "você tem as mesmas 24 horas que a Beyoncé", "descanse quando morrer" — essas frases, que parecem motivacionais, na verdade comunicam uma ideia perigosa: seu valor está atrelado à sua produção.
        </p>
        <p>
          O resultado disso são pessoas exaustas, ansiosas, que não conseguem parar — e quando param, se sentem culpadas. Um ciclo que lentamente vai erodindo a saúde mental e física.
        </p>

        <h2>O descanso é uma necessidade biológica</h2>
        <p>
          Não estou falando de filosofia — estou falando de ciência. O cérebro precisa de períodos de inatividade para consolidar memórias, processar emoções e se restaurar. A privação crônica de descanso está associada a maior risco de ansiedade, depressão, problemas cardiovasculares e queda de produtividade.
        </p>
        <p>
          Ou seja: descansar não é preguiça. É manutenção obrigatória.
        </p>

        <div className={styles.highlight}>
          <p>🌿 <strong>Reflita:</strong> Você consegue ficar parada sem se sentir culpada? Se não consegue, de onde vem essa crença de que você precisa estar sempre produzindo?</p>
        </div>

        <h2>Descanso não é só dormir</h2>
        <p>Existem diferentes tipos de descanso que precisamos:</p>
        <ul className={styles.list}>
          <li><strong>Físico:</strong> sono de qualidade, pausas ao longo do dia</li>
          <li><strong>Mental:</strong> tempo longe de telas, leituras leves, meditação</li>
          <li><strong>Social:</strong> tempo sozinha, sem precisar performar para ninguém</li>
          <li><strong>Emocional:</strong> espaço para sentir sem ter que ser forte o tempo todo</li>
          <li><strong>Criativo:</strong> atividades que você faz pelo prazer, não pela performance</li>
        </ul>

        <h2>Como começar a desacelerar</h2>
        <p>
          Comece pequeno. Cinco minutos sem tela. Uma refeição sem celular. Uma caminhada sem fone de ouvido. O descanso é uma habilidade que precisa ser praticada.
        </p>
        <p>
          E quando a culpa aparecer — porque vai aparecer — observe-a. Não a alimente. Lembre-se: descansar é parte do trabalho, não o oposto dele.
        </p>

        <div className={styles.ctaBox}>
          <p>Se você não consegue descansar sem culpa, isso pode ser algo valioso para explorar em terapia. 🌿</p>
          <a href="https://wa.me/5588988211715" target="_blank" rel="noopener noreferrer" className="btn btn-wpp">
            Agendar uma sessão
          </a>
        </div>
      </div>
    </article>
  )
}

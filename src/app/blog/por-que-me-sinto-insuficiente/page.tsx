import styles from '../blog-post.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Por que me sinto sempre insuficiente?',
  description: 'Entenda as raízes da sensação de insuficiência e como trabalhar a autoestima na terapia. Por Beatriz Silvestre, psicóloga CRP 11/24329.',
}

export default function PostInsuficiente() {
  return (
    <article className={styles.article}>
      <div className={styles.hero} style={{ background: '#FFF8E8' }}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>← Voltar ao Blog</Link>
          <span className={styles.tag}>Autoestima</span>
          <h1>Por que me sinto sempre insuficiente?</h1>
          <div className={styles.meta}>
            <span>Por Beatriz Silvestre · CRP 11/24329</span>
            <span>·</span>
            <span>⏱ 5 min de leitura</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.lead}>
          A sensação de não ser suficiente — não ser boa o bastante, bonita o bastante, produtiva o bastante — é uma das queixas mais frequentes que escuto no consultório. E se você sente isso, saiba: você não está sozinha.
        </p>

        <h2>De onde vem essa sensação?</h2>
        <p>
          A ideia de "não ser suficiente" raramente nasce de um único evento. Ela é construída ao longo do tempo, através de mensagens que recebemos em casa, na escola, nas nossas relações — muitas vezes de forma sutil, sem intenção de machucar.
        </p>
        <p>
          Comentários como "você poderia se esforçar mais", comparações constantes com irmãos ou colegas, afeto condicionado ao desempenho — tudo isso vai moldando uma crença central: <em>sou insuficiente.</em>
        </p>

        <h2>A armadilha da comparação</h2>
        <p>
          Vivemos numa era em que a comparação está ao alcance de um scroll. As redes sociais nos mostram os melhores momentos de todo mundo — as conquistas, as viagens, os corpos, as carreiras — e nossa mente automaticamente faz a conta: <em>eles têm tudo isso, e eu?</em>
        </p>
        <p>
          O problema é que estamos comparando o nosso <strong>bastidor</strong> com o <strong>palco</strong> dos outros. E essa conta nunca vai fechar.
        </p>

        <div className={styles.highlight}>
          <p>💛 <strong>Para refletir:</strong> Você aplicaria o mesmo nível de crítica que se aplica a si mesma a alguém que você ama? Se não, por que você merece menos compaixão do que as outras pessoas?</p>
        </div>

        <h2>O perfeccionismo como mecanismo de proteção</h2>
        <p>
          Muitas vezes, a autocobrança excessiva é uma tentativa de evitar críticas externas. Se eu me criticar primeiro, a dor da crítica alheia vai doer menos. Faz sentido como estratégia de sobrevivência — mas a longo prazo, ela nos esgota.
        </p>

        <h2>O que a terapia pode fazer?</h2>
        <p>
          Na terapia, trabalhamos para identificar essas crenças centrais — esse "eu não sou suficiente" — e questionar a sua veracidade. Não se trata de criar uma positividade artificial, mas de desenvolver uma visão mais realista e compassiva de si mesma.
        </p>
        <p>
          Aprendemos também a separar o seu valor como pessoa dos seus resultados, aparência ou produtividade. Você vale — simplesmente por existir.
        </p>

        <div className={styles.ctaBox}>
          <p>Se você se identificou com esse texto, talvez seja hora de conversar. Estou aqui. 💛</p>
          <a href="https://wa.me/5588988211715" target="_blank" rel="noopener noreferrer" className="btn btn-wpp">
            Falar com a Beatriz
          </a>
        </div>
      </div>
    </article>
  )
}

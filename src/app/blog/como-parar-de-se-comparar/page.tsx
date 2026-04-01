import styles from '../blog-post.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Como parar de se comparar com outras pessoas',
  description: 'A comparação nas redes sociais e como sair desse ciclo. Por Beatriz Silvestre, psicóloga CRP 11/24329.',
}

export default function PostComparar() {
  return (
    <article className={styles.article}>
      <div className={styles.hero} style={{ background: '#F0EBF5' }}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>← Voltar ao Blog</Link>
          <span className={styles.tag}>Autoconhecimento</span>
          <h1>Como parar de se comparar com outras pessoas</h1>
          <div className={styles.meta}>
            <span>Por Beatriz Silvestre · CRP 11/24329</span>
            <span>·</span>
            <span>⏱ 7 min de leitura</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.lead}>
          Você abre o Instagram e em 30 segundos viu alguém com um corpo que você gostaria de ter, uma carreira que você admira, um relacionamento que parece perfeito e uma viagem que você nunca faria. E aí vem a pergunta: <em>e eu, o que estou fazendo com a minha vida?</em>
        </p>

        <h2>Por que nos comparamos?</h2>
        <p>
          A comparação social é um comportamento humano natural, descrito pelo psicólogo Leon Festinger ainda na década de 50. Comparar-se com outros é uma forma que o cérebro usa para avaliar onde estamos, o que nos falta e como podemos crescer.
        </p>
        <p>
          O problema é que as redes sociais transformaram esse mecanismo em algo constante, infinito e — muitas vezes — distorcido. Nunca na história da humanidade estivemos expostos a tantos "melhores momentos alheios" de forma tão intensa.
        </p>

        <h2>A comparação que machuca e a que ajuda</h2>
        <p>
          Nem toda comparação é prejudicial. Quando nos inspiramos em alguém e isso nos motiva a crescer, a comparação está a nosso favor. Mas quando olhamos para o outro e concluímos que <strong>somos menos</strong>, aí ela vira veneno.
        </p>

        <div className={styles.highlight}>
          <p>🔍 <strong>Pergunta para refletir:</strong> Quando você se compara a alguém, você conclui "quero aprender com ela" ou "eu nunca vou conseguir"? A resposta revela muito sobre como você está se sentindo em relação a si mesma.</p>
        </div>

        <h2>Estratégias práticas para sair do ciclo</h2>

        <h3>1. Cuide do que você consome</h3>
        <p>Você não precisa seguir todo mundo. Revise quais perfis te fazem sentir mal e dê unfollow sem culpa. Seu feed deve ser um espaço que te nutre, não que te esgota.</p>

        <h3>2. Compare-se com quem você era ontem</h3>
        <p>A única comparação que faz sentido é com a sua versão anterior. Você cresceu? Aprendeu algo novo? Superou algo difícil? Isso é progresso real.</p>

        <h3>3. Pratique a gratidão específica</h3>
        <p>Ao invés de listas genéricas, anote três coisas específicas que só você tem: uma qualidade sua, um relacionamento especial, uma conquista — por menor que pareça.</p>

        <h3>4. Entenda que você está vendo o palco, não o bastidor</h3>
        <p>Aquela pessoa que parece ter tudo também tem dias difíceis, medos e inseguranças. A diferença é que ela não posta isso.</p>

        <div className={styles.ctaBox}>
          <p>A comparação constante pode ser um sinal de que algo mais profundo precisa de atenção. Posso te ajudar a entender isso. 🌿</p>
          <a href="https://wa.me/5588988211715" target="_blank" rel="noopener noreferrer" className="btn btn-wpp">
            Conversar com a Beatriz
          </a>
        </div>
      </div>
    </article>
  )
}

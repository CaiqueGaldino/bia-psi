import styles from '../blog-post.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estou atrasada na vida?',
  description: 'Não existe prazo universal para conquistas. Entenda por que essa crença gera ansiedade. Por Beatriz Silvestre, psicóloga CRP 11/24329.',
}

export default function PostAtrasada() {
  return (
    <article className={styles.article}>
      <div className={styles.hero} style={{ background: '#FFF0F0' }}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>← Voltar ao Blog</Link>
          <span className={styles.tag}>Autocobrança</span>
          <h1>Estou atrasada na vida?</h1>
          <div className={styles.meta}>
            <span>Por Beatriz Silvestre · CRP 11/24329</span>
            <span>·</span>
            <span>⏱ 6 min de leitura</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.lead}>
          Você já olhou ao redor e teve aquela sensação de que todos estão "adiantados" enquanto você ficou para trás? Emprego, relacionamento, casa própria, filhos — parece que existe um cronograma que você está perdendo.
        </p>

        <h2>De onde vem esse "cronograma da vida"?</h2>
        <p>
          Esse roteiro — escola, faculdade, emprego estável, casamento, filhos, casa — é uma construção social. Ele foi criado em contextos históricos e econômicos muito diferentes do que vivemos hoje. E mesmo assim, internalizamos esse script como se fosse uma lei da natureza.
        </p>
        <p>
          Quando não seguimos esse roteiro no tempo "esperado", a sensação é de fracasso. Mas quem decidiu que 30 anos é o prazo para casar? Ou que 25 anos é tarde demais para mudar de carreira?
        </p>

        <div className={styles.highlight}>
          <p>⏰ <strong>Para refletir:</strong> Se não existisse esse cronograma social, você ainda se sentiria "atrasada"? Ou você estaria exatamente onde faz sentido para a sua vida?</p>
        </div>

        <h2>A comparação intergeracional</h2>
        <p>
          "Com a minha idade, minha mãe já tinha dois filhos e casa própria." Esse é um dos pensamentos mais comuns que escuto. E é verdade — mas em contextos muito diferentes: moradia mais acessível, mercado de trabalho diferente, expectativas sociais distintas.
        </p>
        <p>
          Comparar sua trajetória com a de gerações anteriores é comparar realidades incomparáveis.
        </p>

        <h2>Cada vida tem seu próprio ritmo</h2>
        <p>
          Algumas das histórias mais inspiradoras da humanidade são de pessoas que "começaram tarde": Vera Wang criou seu primeiro vestido de noiva aos 40. Julia Child publicou seu primeiro livro de culinária aos 49. Charles Darwin publicou A Origem das Espécies aos 50.
        </p>
        <p>
          Isso não quer dizer que você precisa de grandes conquistas para se sentir válida. Quer dizer que não existe um único caminho, nem um único prazo.
        </p>

        <h2>O que fazer com essa sensação?</h2>
        <p>
          Em terapia, trabalhamos para questionar essas crenças — não para fingir que tudo está bem, mas para entender de onde vêm e se elas realmente pertencem a você ou foram impostas.
        </p>
        <p>
          A pergunta mais importante não é "estou atrasada?", mas: <strong>"Estou vivendo de acordo com o que realmente importa para mim?"</strong>
        </p>

        <div className={styles.ctaBox}>
          <p>Se a sensação de "estar atrasada" está pesando sobre você, a terapia pode te ajudar a ressignificar isso. Vamos conversar? 💙</p>
          <a href="https://wa.me/5588988211715" target="_blank" rel="noopener noreferrer" className="btn btn-wpp">
            Conversar com a Beatriz
          </a>
        </div>
      </div>
    </article>
  )
}

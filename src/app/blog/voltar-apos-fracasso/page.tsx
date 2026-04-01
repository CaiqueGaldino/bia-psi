import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Como Voltar a Viver Depois de um Fracasso',
  description:
    'O fracasso não define quem você é — apenas revela onde você pode crescer. Descubra como reconstruir depois de uma queda.',
  keywords: ['fracasso', 'resiliência', 'recomeço', 'crescimento pessoal', 'saúde mental'],
}

export default function VoltarAposFracassoPost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="Como Voltar a Viver Depois de um Fracasso"
          excerpt="O fracasso não define quem você é — apenas revela onde você pode crescer. Descubra como reconstruir."
          publishedDate="2026-04-01"
          slug="voltar-apos-fracasso"
          readTime="8"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Resiliência</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />8 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>Como Voltar a Viver Depois de um Fracasso</h1>
          <p className={styles.excerpt}>
            O fracasso não define quem você é — apenas revela onde você pode crescer. Descubra como reconstruir.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            O fracasso dói. Aquele projeto que você acreditava que funcionaria... não funcionou. O relacionamento que você pensava que era sólido... desabou. A carreira que você planejava... mudou de direção.
          </p>

          <p>
            E agora você está aqui, perguntando-se: "Por onde começo?"
          </p>

          <h2>Primeira coisa: permita-se sofrer</h2>
          <p>
            Fracasso envolve luto. Você perdeu algo que era importante para você. Então chore. Fique com raiva. Fique decepcionado. Mas estabeleça um tempo limite para isso — digamos, 48 horas de luto puro.
          </p>

          <p>
            Depois disso, você precisa começar a se mover, mesmo que lentamente.
          </p>

          <h2>Por que focamos demais no fracasso</h2>
          <p>
            Tanto sucesso quanto fracasso são temporários. Mas nossa mente fixa-se no fracasso porque parece pessoal. "Falhei" torna-se "Sou um fracasso". "Meu projeto não funcionou" torna-se "Eu nunca vou conseguir".
          </p>

          <p>
            Isso é o viés cognitivo. E é falso.
          </p>

          <h2>Passos para reconstruir</h2>
          <h3>1. Separe o evento do significado</h3>
          <p>
            O que aconteceu: Um projeto falhou.
            Significado falso: Você é um fracasso.
            Significado real: Você tentou algo e aprendeu.
          </p>

          <h3>2. Faça uma análise honesta (mas compassiva)</h3>
          <p>
            O que correu errado? Eram fatores fora de seu controle? Você fez o melhor que pôde com as informações que tinha? Houve erros? Ok — quais foram?
          </p>

          <p>
            A ideia aqui é aprender, não se auto-flagelar.
          </p>

          <h3>3. Crie um plano de reconstrução pequeno</h3>
          <p>
            Não tente consertar tudo de uma vez. Escolha uma coisa pequena que você pode fazer amanhã. Depois outra para o próximo dia. Momentum é construído com pequenos passos.
          </p>

          <h3>4. Busque apoio</h3>
          <p>
            Não atravesse isso sozinho. Converse com alguém que você confia. Um amigo. Um membro da família. Um terapeuta. Apenas não carregue sozinho.
          </p>

          <h3>5. Reclame sua narrativa</h3>
          <p>
            Em vez de "Falhei", tente: "Tentei algo desafiador. Não saiu como esperado. Agora estou aprendendo e tentando de novo." Essa é uma narrativa de resiliência, não de fracasso.
          </p>

          <h2>O que muda quando você volta</h2>
          <h3>Você desenvolve resiliência</h3>
          <p>
            Cada vez que você cai e se levanta, você prova para si mesmo que é possível sobreviver a dificuldades. Isso é poder.
          </p>

          <h3>Você compreende o que realmente importa</h3>
          <p>
            Fracasso tem um jeito de revelar o que é essencial. Relacionamentos saem mais fortes. Objetivos se realinham. Você sabe mais sobre quem você é.
          </p>

          <h3>Você se torna mais empático</h3>
          <p>
            Quando você fracassa, você compreende que fracasso não é fraqueza — é parte da vida. Você se torna menos crítico com outras pessoas que também estão lutando.
          </p>

          <h3>Você desenvolve coragem real</h3>
          <p>
            Coragem não é ausência de medo. É agir apesar do medo. Depois de um fracasso, quando você volta a tentar... então sim, isso é coragem.
          </p>

          <h2>O que as pessoas bem-sucedidas sabem</h2>
          <p>
            Cada pessoa que você admira fracassou muitas vezes. JK Rowling foi rejeitada 12 vezes. Steve Jobs foi expulso de sua própria empresa. Oprah foi demitida. Michael Jordan perdeu mais jogos que venceu.
          </p>

          <p>
            A diferença entre eles e as pessoas que se rendem? Eles voltaram a tentar.
          </p>

          <h2>Sua próxima volta para casa</h2>
          <p>
            Você é mais forte do que você acha. Você já capturou a tormenta emocional — agora é hora de um próximo passo.
          </p>

          <p>
            Comece pequeno. Seja gentil com você mesmo. E saiba que esse fracasso não é o encerramento da sua história — é apenas o fim de um capítulo.
          </p>

          <p>Ainda há muito a ser escrito.</p>
        </div>

        <footer className={styles.footer}>
          <Link href="/blog" className={styles.backLink}>
            <span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}>
              <IconArrow size={14} />
            </span>
            Voltar para o blog
          </Link>

          <div className={styles.cta}>
            <p>Lutando para se levantar depois de uma dificuldade?</p>
            <Link href="/contato" className="btn btn-primary">
              Eu estou aqui para ajudar
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

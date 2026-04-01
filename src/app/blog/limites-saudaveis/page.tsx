import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Limites Saudáveis: A Chave para o Bem-estar',
  description:
    'Dizer não não é egoísmo — é um ato de amor por si mesmo. Aprenda a estabelecer limites sem culpa.',
  keywords: ['limites saudáveis', 'relacionamentos', 'autoestima', 'bem-estar'],
}

export default function LimitesPost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="Limites Saudáveis: A Chave para o Bem-estar"
          excerpt="Dizer não não é egoísmo — é um ato de amor por si mesmo. Aprenda a estabelecer limites sem culpa."
          publishedDate="2026-04-01"
          slug="limites-saudaveis"
          readTime="6"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Relacionamentos</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />6 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>Limites Saudáveis: A Chave para o Bem-estar</h1>
          <p className={styles.excerpt}>
            Dizer não não é egoísmo — é um ato de amor por si mesmo. Aprenda a estabelecer limites sem culpa.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Se há um assunto que vejo causando mais sofrimento em sessão, é a dificuldade em estabelecer limites. As pessoas dirão sim quando querem dizer não. Manterão relacionamentos tóxicos por culpa. Sacrificarão sua paz em nome do que acham que é "ser legal".
          </p>

          <h2>Por que limites são difíceis</h2>
          <h3>Mensagens antigas</h3>
          <p>
            Muitas pessoas cresceram ouvindo: "Você é egoísta se disser não", "Pessoas boas pensam nos outros primeiro", "Limites são rudes".
          </p>

          <h3>Medo de rejeição</h3>
          <p>
            Se você disser não, a pessoa não vai gostar de você? Vai desistir? Essa é a verdadeira pergunta por trás da dificuldade de estabelecer limites.
          </p>

          <h3>Ansiedade de culpa</h3>
          <p>
            Há uma culpa tóxica que surge quando você coloca suas necessidades em primeiro lugar. Essa culpa não é realista — é um resquício emocional.
          </p>

          <h2>Por que limites são tão importante</h2>
          <p>
            Limites não são paredes — são portas com trancas. Elas permitem que pessoas certas entrem e coisas prejudiciais saiam.
          </p>

          <ul>
            <li>Protegem sua energia mental e emocional</li>
            <li>Mantém relacionamentos saudáveis e respeitosos</li>
            <li>Aumentam autoestima (você está priorizando você)</li>
            <li>Reduzem ressentimento</li>
            <li>Criam espaço para pessoas que são boas para você</li>
          </ul>

          <h2>Como estabelecer limites com amor</h2>
          <h3>1. Seja claro e direto</h3>
          <p>
            Não seja vago. "Não posso nesse momento" é vago. "Não posso mais ouvir críticas sobre meus escolhas" é claro.
          </p>

          <h3>2. Não se justifique excessivamente</h3>
          <p>
            Você não precisa de razões válidas. "Não" é uma sentença completa. Explicar muito parece que você está pedindo permissão.
          </p>

          <h3>3. Seja consistente</h3>
          <p>
            Se você estabelece um limite e depois o quebra, está ensinando que os limites não importam. Mantenha a mesma postura.
          </p>

          <h3>4. Prepare-se para resistência</h3>
          <p>
            Pessoas que se beneficiavam de você sem limites não vão gostar da mudança. Espere isso. Não é sinal de que você está fazendo algo errado.
          </p>

          <h3>5. Use "Eu" statements</h3>
          <p>
            "Eu preciso desse tempo para mim" ao invés de "Você não para de me incomodar". Responsabiliza você pela sua necessidade, sem atacar.
          </p>

          <h2>Exemplos de limites</h2>
          <ul>
            <li>"Não vou responder mensagens de trabalho após as 18h"</li>
            <li>"Não vou mais falar sobre a situação do meu ex"</li>
            <li>"Vou visitar a família apenas uma vez por mês"</li>
            <li>"Não vou emprestar dinheiro novamente"</li>
            <li>"Preciso de uma semana antes de posso ajudar com mudança"</li>
          </ul>

          <h2>Lembre-se</h2>
          <p>
            Limites não são rudes. Relacionamentos tóxicos são. Você está apenas cuidando de si mesmo. E pessoas que te amam respeitarão isso.
          </p>
        </div>

        <footer className={styles.footer}>
          <Link href="/blog" className={styles.backLink}>
            <span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}>
              <IconArrow size={14} />
            </span>
            Voltar para o blog
          </Link>

          <div className={styles.cta}>
            <p>Dificuldade em dizer não?</p>
            <Link href="/contato" className="btn btn-primary">
              Vamos trabalharo isso juntos
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

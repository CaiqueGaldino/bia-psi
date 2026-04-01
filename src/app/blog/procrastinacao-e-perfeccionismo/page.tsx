import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Procrastinação e Perfeccionismo: A Tríade Mortal',
  description:
    'Por que o perfeccionismo nos impede de agir? Entenda a relação entre autoexigência, procrastinação e perfectonismo.',
  keywords: ['procrastinação', 'perfeccionismo', 'produtividade', 'autoexigência'],
}

export default function ProcrastinacaoPost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="Procrastinação e Perfeccionismo: A Tríade Mortal"
          excerpt="Por que o perfeccionismo nos impede de agir? Entenda a relação entre autoexigência e adiamento."
          publishedDate="2026-04-01"
          slug="procrastinacao-e-perfeccionismo"
          readTime="6"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Produtividade</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />6 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>Procrastinação e Perfeccionismo: A Tríade Mortal</h1>
          <p className={styles.excerpt}>
            Por que o perfeccionismo nos impede de agir? Entenda a relação entre autoexigência e adiamento.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Você já notou que algumas das pessoas mais perfeccionistas são também as maiores procrastinadoras? Isso não é coincidência. Existe uma relação profunda entre perfeccionismo e adiamento:
          </p>

          <h2>Como o perfeccionismo leva à procrastinação</h2>
          <p>
            Quando você define padrões impossíveis de alcançar em sua mente, qualquer ação menos que perfeita soa intolerável. Então você não age. Você espera pelo "momento certo" quando terá inspiração perfeita, tempo perfeito, circunstâncias perfeitas.
          </p>

          <p>
            Esse momento raramente chega. E enquanto você espera, a ansiedade cresce.
          </p>

          <h2>O ciclo vicioso</h2>
          <ul>
            <li>Você quer fazer algo bem</li>
            <li>Sua mente estabelece um padrão muito alto</li>
            <li>A tarefa parece monumental</li>
            <li>Você adia porque tem medo de não atingir o padrão</li>
            <li>Culpa e ansiedade crescem</li>
            <li>Você se prova (pelo menos para você) que "realmente não é esse tipo de pessoa"</li>
            <li>Volta ao passo 1</li>
          </ul>

          <h2>O real problema não é o trabalho</h2>
          <p>
            O perfeccionismo não é sobre altos padrões. É sobre medo. Medo de ser visto como incompetente. Medo de que se você não for perfeito, então não vale a pena. Medo de rejeição.
          </p>

          <h2>Como quebrar o ciclo</h2>
          <h3>1. Reconheça que "perfeito" não existe</h3>
          <p>
            Toda pessoa, obra e realização tem imperfeiçõespublicidade. Isso não as torna menos valiosas. A Mona Lisa tem "erros". Edison teve centenas de tentativas fracassadas.
          </p>

          <h3>2. Comece com "bom o suficiente"</h3>
          <p>
            Estabeleça um padrão de "bom o suficiente" não "perfeito" de antemão. 80% feito é melhor que 100% perfeito que nunca sai do papel.
          </p>

          <h3>3. Divida a tarefa em partes menores</h3>
          <p>
            Uma tarefa grande é paralisante. Tarefas pequenas são menores. Comece com apenas 15 minutos. Frequentemente você continua porque começou é a parte mais difícil.
          </p>

          <h3>4. Permita-se falhar e aprender</h3>
          <p>
            Falhas são edições futuras. São feedback. Não são reflexo de quem você é. Você pode começar de novo amanhã.
          </p>

          <h3>5. Busque apoio profissional se necessário</h3>
          <p>
            O perfeccionismo frequentemente vem de crenças centrais profundas. Trabalhar com um psicólogo pode ajudar a desenterrar a raiz por trás da autoexigência extrema.
          </p>

          <h2>Lembre-se</h2>
          <p>
            Perfeição é a morte da criação. Progresso é o seu verdadeiro amigo. Comece agora, melhore depois. Você e o mundo ficarão grato por isso.
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
            <p>Preso no ciclo de perfeccionismo?</p>
            <Link href="/contato" className="btn btn-primary">
              Vamos trabalhar nisso juntos
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

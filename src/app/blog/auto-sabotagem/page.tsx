import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Auto-Sabotagem: Por Que Boicotamos Nosso Sucesso?',
  description:
    'Reconheça os padrões de auto-sabotagem e descubra como o medo nos impede de viver como merecemos.',
  keywords: ['auto-sabotagem', 'medo do sucesso', 'autossabotagem', 'psicologia', 'crescimento pessoal'],
}

export default function AutoSabotagePost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="Auto-sabotagem: Por Que Boicotamos Nosso Sucesso?"
          excerpt="Reconheça os padrões de auto-sabotagem e descubra como o medo nos impede de viver como merecemos."
          publishedDate="2026-04-01"
          slug="auto-sabotagem"
          readTime="7"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Autoconhecimento</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />7 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>Auto-Sabotagem: Por Que Boicotamos Nosso Sucesso?</h1>
          <p className={styles.excerpt}>
            Reconheça os padrões de auto-sabotagem e descubra como o medo nos impede de viver como merecemos.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Você está indo bem em seu trabalho. Repentinamente, você comete um "erro" que prejudica sua progressão. Ou quando está em um relacionamento amoroso saudável, você provoca uma briga desnecessária. Ou quando finalmente tem dinheiro, você gasta impulsivamente. Isso é auto-sabotagem.
          </p>

          <h2>O que é auto-sabotagem?</h2>
          <p>
            Auto-sabotagem é quando inconscientemente fazemos coisas que nos prejudicam ou interferem em nossos objetivos. É como se houvesse uma parte de você que não quer sucesso, felicidade ou progresso.
          </p>

          <h2>Por que fazemos isso?</h2>
          <h3>Medo do desconhecido</h3>
          <p>
            O fracasso é conhecido. O sucesso assusta porque muda tudo. Melhor volver ao conforto do familiar, mesmo que seja desconfortável.
          </p>

          <h3>Síndrome do Impostor</h3>
          <p>
            Você não acredita que "merece" o sucesso. Então sabota antes que os outros descubram que é um "fraude".
          </p>

          <h3>Crenças Limitantes Antigas</h3>
          <p>
            Mensagens que recebeu na infância: "Pessoas como nós não conseguem essas coisas". "Sucesso é para outras pessoas". Essas crenças rodamno fundo de sua mente, sabotando silenciosamente.
          </p>

          <h3>Identificação com o Problema</h3>
          <p>
            Se você foi "o problemático" da família, ou "a vítima", talvez sua identidade esteja vinculada a isso. Sucesso significaria abandonar essa identidade — e isso é assustador.
          </p>

          <h2>Manifestações comuns de auto-sabotagem</h2>
          <ul>
            <li>Colocar obstáculos no caminho de seus objetivos</li>
            <li>Procrastinação crônica</li>
            <li>Autoflagelo verbal (crítica interna constante)</li>
            <li>Relacionamentos tóxicos repetitivos</li>
            <li>Impulsividade que prejudica seus planos</li>
            <li>Comportamentos autodestrutivos (álcool, drogas, comida)</li>
            <li>Rejeitar ajuda ou apoio</li>
          </ul>

          <h2>Como reconhecer seus padrões</h2>
          <p>
            O primeiro passo é a observação sem julgamento. Quando você está perto de sucesso ou felicidade, o que acontece? Qual é o padrão? Qual emoção emerge antes do comportamento sabotador?
          </p>

          <h2>Como transformar isso</h2>
          <h3>1. Identifique a emoção por trás disso</h3>
          <p>
            Auto-sabotagem nunca é lógica. É emocional. Quando você sente o impulso de sabotar, pergunte-se: Qual emoção estou sentindo? Medo? Ansiedade? Culpa?
          </p>

          <h3>2. Questione suas crenças</h3>
          <p>
            "Eu realmente não mereço sucesso?" Está verdade? Ou é algo que aprendeu? Existe evidência? Pode haver uma interpretação diferente?
          </p>

          <h3>3. Comece pequeno</h3>
          <p>
            Não tente anular anos de padrões da noite para o dia. Comece reconhecendo quando está sabotando. Depois, tente fazer uma coisa diferente. Pequenas mudanças criam grandes resultados.
          </p>

          <h3>4. Busque apoio profissional</h3>
          <p>
            Auto-sabotagem frequentemente enraíza-se em traumas ou feridas antigas. Um psicólogo pode ajudá-lo a desenterrar a origem e construir novas estruturas de crença.
          </p>

          <h2>Você merece sucesso</h2>
          <p>
            O fato de você estar lendo isso significa que parte de você quer mudança. Ouça essa parte. Ela sabe qual é o seu verdadeiro caminho.
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
            <p>Pronto para quebrar padrões autodestrutivos?</p>
            <Link href="/contato" className="btn btn-primary">
              Marque uma sessão
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Como Construir Relacionamentos Mais Saudáveis',
  description:
    'Relacionamentos significativos exigem autenticidade, comunicação clara e limites saudáveis. Saiba como cultivá-los em sua vida.',
  keywords: ['relacionamentos', 'comunicação', 'limites', 'relacionamentos saudáveis'],
}

export default function RelacionamentosSaudaveisPost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="Como Construir Relacionamentos Mais Saudáveis"
          excerpt="Relacionamentos significativos exigem autenticidade, comunicação clara e limite saudáveis. Saiba como cultivá-los."
          publishedDate="2026-04-01"
          slug="relacionamentos-saudaveis"
          readTime="8"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Relacionamentos</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />8 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>Como Construir Relacionamentos Mais Saudáveis</h1>
          <p className={styles.excerpt}>
            Relacionamentos significativos exigem autenticidade, comunicação clara e limites saudáveis. Saiba como cultivá-los.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Construir relacionamentos saudáveis é uma das habilidades mais importantes para o bem-estar emocional. Mas o que torna um relacionamento "saudável"? E como cultivamos isso?
          </p>

          <h2>Os pilares de um relacionamento saudável</h2>
          <h3>Comunicação autêntica</h3>
          <p>
            Comunicação não é apenas falar. É ouvir atentamente, expressar seus sentimentos com clareza e estar disposto a ser vulnerável. Relacionamentos saudáveis permitem espaço para difícil das conversas.
          </p>

          <h3>Confiança e respeito mútuo</h3>
          <p>
            Confiança é construída através da consistência. Você faz o que promete? Está presente? Respeita os limites da outra pessoa? Confiança não é automática — é cultivada dia após dia.
          </p>

          <h3>Apoio genuíno</h3>
          <p>
            Pessoas saudáveis em suas vidas apoiam-se mutuamente. Mas apoio não significa "fazer tudo pelo outro". Significa estar presente, acreditar na capacidade do outro e permitir que ele encontre suas próprias respostas.
          </p>

          <h3>Espaço pessoal e interdependência</h3>
          <p>
            Relacionamentos não significam fusão. Cada pessoa conserva sua individualidade, seus hobbies, suas amizades. A interdependência (dependência saudável) é diferente de codependência.
          </p>

          <h2>Sinais de alerta em relacionamentos</h2>
          <ul>
            <li>Você perde-se tentando agradar a outra pessoa</li>
            <li>Há falta de respeito pelos seus limites</li>
            <li>Comunicação é frequentemente defensiva ou agressiva</li>
            <li>Você se culpa por problemas que não são sua responsabilidade</li>
            <li>Há falta de reciprocidade (você dá mais do que recebe)</li>
          </ul>

          <h2>Como melhorar seus relacionamentos</h2>
          <h3>1. Aprenda a comunicar seus sentimentos</h3>
          <p>
            Use a fórmula: "Quando [situação], eu sinto [emoção] porque [razão]. Eu preciso de [necessidade]."
          </p>

          <h3>2. Estabeleça e respeite limites</h3>
          <p>
            Limites claros protegem a relação. Diga não quando precisar. A outra pessoa que o ama respeitará seus limites.
          </p>

          <h3>3. Ouça para compreender, não para responder</h3>
          <p>
            Quando alguém partilha algo, tente não imediatamente oferecer soluções. Às vezes, tudo que precisamos é ser ouvidos.
          </p>

          <h3>4. Invista tempo de qualidade</h3>
          <p>
            Relacionamentos precisam de tempo e atenção. Celular guardado, presença plena. Qualidade sobre quantidade.
          </p>

          <h2>Quando é hora de deixar ir</h2>
          <p>
            Nem todo relacionamento é para ser mantido. Se depois de uma comunicação honesta a outra pessoa não está disposta a melhorar, ou se o relacionamento é consistentemente prejudicial, pode ser hora de reconsiderar.
          </p>

          <p>
            Relacionamentos saudáveis começam com você sendo saudável dentro de si mesmo. Invista em você primeiro.
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
            <p>Lutando com relacionamentos complexos?</p>
            <Link href="/contato" className="btn btn-primary">
              Converse comigo
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

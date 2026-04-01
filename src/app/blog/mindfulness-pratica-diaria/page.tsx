import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Mindfulness: Guia Prático para Começar Agora',
  description:
    'Meditação e atenção plena não precisam ser complicadas. Começar pode ser mais simples do que você pensa.',
  keywords: ['mindfulness', 'meditação', 'bem-estar', 'atenção plena', 'saúde mental'],
}

export default function MindfullnessPost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="Mindfulness: Guia Prático para Começar Agora"
          excerpt="Meditação e atenção plena não precisam ser complicadas. Começar pode ser mais simples do que você pensa."
          publishedDate="2026-04-01"
          slug="mindfulness-pratica-diaria"
          readTime="5"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Bem-estar</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />5 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>Mindfulness: Guia Prático para Começar Agora</h1>
          <p className={styles.excerpt}>
            Meditação e atenção plena não precisam ser complicadas. Começar pode ser mais simples do que você pensa.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Mindfulness ou "atenção plena" tornou-se uma palavra-chave no bem-estar, mas muitas pessoas pensam que é algo misterioso ou complicado. Na verdade, é a coisa mais simples do mundo:
          </p>

          <p>
            <strong>Estar presente no presente.</strong>
          </p>

          <h2>Por que mindfulness é tão poderoso</h2>
          <p>
            Nossa mente passa 80% do tempo no passado (ruminação) ou no futuro (ansiedade). Raramente estamos aqui, agora. E é precisamente aqui e agora que a vida acontece.
          </p>

          <p>
            Mindfulness nos traz de volta para este momento. E quando você está presente, ansiedade diminui, e paz aumenta.
          </p>

          <h2>Como começar: Prática de 3 minutos</h2>
          <p>
            Você não precisa de uma almofada especial ou ambiente perfeito. Você só precisa de 3 minutos.
          </p>

          <ol>
            <li>Sente-se confortavelmente. Costas retas (não precisa ser rigidez, apenas ereto)</li>
            <li>Feche os olhos (ou deixe os olhos um pouco abertos, focados para baixo)</li>
            <li>Respire naturalmente e simplesmente observe sua respiração</li>
            <li>Quando sua mente vaguear (e ela vai), sem julgamento, retorne a atenção à respiração</li>
            <li>Faça isso por 3 minutos</li>
          </ol>

          <h2>Dicas Práticas</h2>
          <h3>1. Comece pequeno</h3>
          <p>
            3-5 minutos diários são melhores que 1 hora uma vez por mês. A consistência é mais importante que a quantidade.
          </p>

          <h3>2. Não há "fazer certo"</h3>
          <p>
            Se sua mente vagueia 100 vezes, isso não é fracasso. Trazer sua atenção de volta 100 vezes É a prática.
          </p>

          <h3>3. Use pontos de âncora</h3>
          <p>
            Respiração é a mais comum, mas você pode também usar sons, sensações corporais, ou qualquer coisa que o traga para o presente.
          </p>

          <h3>4. Pratique em qualquer lugar</h3>
          <p>
            Ônibus, fila de supermercado, antes de dormir. Mindfulness não é reservado para ambientes especiais.
          </p>

          <h3>5. Observe, não julgue</h3>
          <p>
            Se pensamentos surgem, observe-os como nuvens passando no céu. Não "bom" pensamento, não "ruim" pensamento. Apenas pensamentos.
          </p>

          <h2>Benefícios que você pode esperar</h2>
          <ul>
            <li>Redução de ansiedade e estresse</li>
            <li>Melhor foco e concentração</li>
            <li>Sono mais profundo</li>
            <li>Maior clareza emocional</li>
            <li>Aceitação de emoções difíceis (em vez de evitá-las)</li>
          </ul>

          <h2>Comece agora</h2>
          <p>
            Você literalmente pode começar nos próximos 3 minutos. Feche este artigo. Sente-se. Respire. Observe. Bem-vindo à prática.
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
            <p>Quer desenvolver uma prática mais profunda?</p>
            <Link href="/contato" className="btn btn-primary">
              Converse comigo sobre isso
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

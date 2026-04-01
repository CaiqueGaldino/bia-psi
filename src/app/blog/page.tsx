import type { Metadata } from 'next'
import styles from './blog.module.css'
import Link from 'next/link'
import { IconClock, IconArrow } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Blog – Saúde Mental e Bem-Estar Emocional',
  description: 'Artigos sobre ansiedade, autocobrança e saúde mental escritos pela psicóloga Beatriz Silvestre.',
}

const posts = [
  {
    slug: 'como-lidar-com-ansiedade',
    tag: 'Ansiedade',
    title: 'Como lidar com a ansiedade no dia a dia',
    excerpt: 'A ansiedade faz parte da vida humana — mas quando ela passa a controlar suas decisões, é hora de agir. Conheça estratégias baseadas na ACT.',
    readTime: '6',
    featured: true,
  },
  {
    slug: 'por-que-me-sinto-insuficiente',
    tag: 'Autoestima',
    title: 'Por que me sinto sempre insuficiente?',
    excerpt: 'A sensação de não ser suficiente é mais comum do que parece — e tem raízes que a gente nem imagina.',
    readTime: '5',
  },
  {
    slug: 'como-parar-de-se-comparar',
    tag: 'Autoconhecimento',
    title: 'Como parar de se comparar com outras pessoas',
    excerpt: 'As redes sociais tornaram a comparação um hábito automático. Mas existe uma saída — e ela começa com autoconhecimento.',
    readTime: '7',
  },
  {
    slug: 'como-desacelerar-sem-culpa',
    tag: 'Equilíbrio',
    title: 'Como desacelerar sem culpa',
    excerpt: 'Vivemos numa cultura que glorifica a produtividade. Mas descansar não é preguiça — é uma necessidade biológica.',
    readTime: '5',
  },
  {
    slug: 'estou-atrasada-na-vida',
    tag: 'Autocobrança',
    title: 'Estou atrasada na vida?',
    excerpt: 'Não existe um prazo universal para conquistas. Essa crença é um dos maiores geradores de ansiedade na vida adulta.',
    readTime: '6',
  },
  {
    slug: 'impostor-syndrome',
    tag: 'Autoconfiança',
    title: 'Síndrome do Impostor: Como Reconhecer e Superar',
    excerpt: 'Você se sente como uma fraude mesmo tendo competência? Conheça a síndrome do impostor e saiba como lidar com ela.',
    readTime: '7',
  },
  {
    slug: 'relacionamentos-saudaveis',
    tag: 'Relacionamentos',
    title: 'Como Construir Relacionamentos Mais Saudáveis',
    excerpt: 'Relacionamentos significativos exigem autenticidade, comunicação clara e limite saudáveis. Saiba como cultivá-los.',
    readTime: '8',
  },
  {
    slug: 'procrastinacao-e-perfeccionismo',
    tag: 'Produtividade',
    title: 'Procrastinação e Perfeccionismo: A Tríade Mortal',
    excerpt: 'Por que o perfeccionismo nos impede de agir? Entenda a relação entre autoexigência e adiamento.',
    readTime: '6',
  },
  {
    slug: 'auto-sabotagem',
    tag: 'Autoconhecimento',
    title: 'Auto-sabotagem: Por Que Boicotamos Nosso Sucesso?',
    excerpt: 'Reconheça os padrões de auto-sabotagem e descubra como o medo nos impede de viver como merecemos.',
    readTime: '7',
  },
  {
    slug: 'mindfulness-pratica-diaria',
    tag: 'Bem-estar',
    title: 'Mindfulness: Guia Prático para Começar Agora',
    excerpt: 'Meditação e atenção plena não precisam ser complicadas. Começar pode ser mais simples do que você pensa.',
    readTime: '5',
  },
  {
    slug: 'lidar-com-fomo',
    tag: 'Saúde Mental',
    title: 'FOMO (Medo de Ficar de Fora): Realidade ou Ilusão?',
    excerpt: 'A cultura das redes sociais alimenta o medo de perder. Descubra como lidar com essa emoção tóxica.',
    readTime: '6',
  },
  {
    slug: 'limites-saudaveis',
    tag: 'Relacionamentos',
    title: 'Limites Saudáveis: A Chave para o Bem-estar',
    excerpt: 'Dizer não não é egoísmo — é um ato de amor por si mesmo. Aprenda a estabelecer limites sem culpa.',
    readTime: '6',
  },
  {
    slug: 'gestao-emocional',
    tag: 'Emoções',
    title: 'Gestão Emocional: Entender para Transformar',
    excerpt: 'As emoções não são obstáculos — são mensageiras. Aprenda a compreendê-las e usá-las a seu favor.',
    readTime: '7',
  },
  {
    slug: 'voltar-apos-fracasso',
    tag: 'Resiliência',
    title: 'Como Voltar a Viver Depois de um Fracasso',
    excerpt: 'O fracasso não define quem você é — apenas revela onde você pode crescer. Descubra como reconstruir.',
    readTime: '8',
  },
]

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <p className="eyebrow">Reflexões e aprendizados</p>
          <h1>Blog de <em>saúde mental</em></h1>
          <p className={styles.heroSub}>Conteúdo para te ajudar a entender suas emoções e viver com mais leveza.</p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className="container">
          {/* Featured */}
          <Link href={`/blog/${featured.slug}`} className={styles.featured}>
            <div className={styles.featuredMeta}>
              <span className={styles.tag}>{featured.tag}</span>
              <span className={styles.readTime}>
                <IconClock size={12} color="currentColor" />
                {featured.readTime} min
              </span>
            </div>
            <h2 className={styles.featuredTitle}>{featured.title}</h2>
            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
            <span className={styles.readMore}>
              Ler artigo <IconArrow size={14} />
            </span>
          </Link>

          {/* Grid */}
          <div className={styles.grid}>
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardMeta}>
                  <span className={styles.tag}>{post.tag}</span>
                  <span className={styles.readTime}>
                    <IconClock size={11} color="currentColor" />
                    {post.readTime} min
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.readMore}>
                  Ler artigo <IconArrow size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

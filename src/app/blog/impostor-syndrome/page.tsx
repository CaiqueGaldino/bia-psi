import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Síndrome do Impostor: Como Reconhecer e Superar',
  description:
    'Você se sente como uma fraude mesmo tendo competência? Conheça a síndrome do impostor, como reconhecê-la e estratégias práticas para superá-la.',
  keywords: ['síndrome do impostor', 'autoconfiança', 'insegurança profissional', 'psicologia'],
}

export default function ImpostorSyndromePost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="Síndrome do Impostor: Como Reconhecer e Superar"
          excerpt="Você se sente como uma fraude mesmo tendo competência? Conheça a síndrome do impostor e saiba como lidar com ela."
          publishedDate="2026-04-01"
          slug="impostor-syndrome"
          readTime="7"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Autoconfiança</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />7 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>Síndrome do Impostor: Como Reconhecer e Superar</h1>
          <p className={styles.excerpt}>
            Você se sente como uma fraude mesmo tendo competência? Conheça a síndrome do impostor, como reconhecê-la e estratégias práticas para superá-la.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            A síndrome do impostor é um padrão psicológico onde uma pessoa duvida de suas realizações e sente um medo persistente de ser "descoberta" como uma fraude, apesar de ter evidências claras de competência.
          </p>

          <h2>Sinais de que você pode estar vivendo isso</h2>
          <ul>
            <li>Atribui seus sucessos à sorte ou circunstâncias externas</li>
            <li>Sente pânico ao receber elogios</li>
            <li>Trabalha em excesso para "provar" sua competência</li>
            <li>Compara-se constantemente com outras pessoas</li>
            <li>Tem medo de falhar ou ser exposto</li>
            <li>Sente que não merece suas conquistas</li>
          </ul>

          <h2>Por que isso acontece?</h2>
          <p>
            A síndrome do impostor frequentemente origina-se em experiências de infância, especialmente quando houve:
          </p>
          <ul>
            <li>Pressão constante para ser perfeito</li>
            <li>Elogios condicionados ao desempenho</li>
            <li>Falta de reconhecimento genuíno do esforço</li>
            <li>Expectativas inalcançáveis dos pais ou cuidadores</li>
          </ul>

          <h2>Estratégias para superar</h2>
          <h3>1. Reconheça seus sucessos documentados</h3>
          <p>Comece a manter um registro de suas conquistas, feedback positivo e resultados alcançados. Quando a síndrome do impostor bater, consulte esse registro.</p>

          <h3>2. Separe autocobrança de competência</h3>
          <p>
            Você pode ser alguém que se cobra muito mas isso não significa que é incompetente. De fato, pessoas com síndrome do impostor costumam ser altamente competentes. O problema é que movem-se por medo, não por confiança.
          </p>

          <h3>3. Compartilhe com outras pessoas</h3>
          <p>
            Muitas pessoas experenciam isso. Conversar sobre seus sentimentos com mentores, amigos ou um psicólogo pode ajudar a normalizar e processar essas emoções.
          </p>

          <h3>4. Questione seus pensamentos</h3>
          <p>
            Quando surgir o pensamento "sou uma fraude", pergunte-se: Que evidência tenho disso? O que alguém que me conhece bem diria? Sou realmente a única pessoa que sente isso?
          </p>

          <h3>5. Falhe propositalmente e aprenda</h3>
          <p>
            Você tem medo de fracassar porque acha que isso provaria é um impostor. Mas fracassar é parte de aprender. Propositalmente encare desafios menores, falhe, aprenda e veja que você continua aqui, competente e vivo.
          </p>

          <h2>Lembre-se</h2>
          <p>
            A síndrome do impostor não é um diagnóstico — é um padrão de pensamento que pode ser reconhecido e transformado. Sua competência é real. Seus successos são seus. E você merece estar exatamente onde está.
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
            <p>Quer trabalhar isso com profundidade?</p>
            <Link href="/contato" className="btn btn-primary">
              Vamos conversar
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

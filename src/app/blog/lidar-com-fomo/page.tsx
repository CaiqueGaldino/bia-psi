import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'FOMO (Medo de Ficar de Fora): Realidade ou Ilusão?',
  description:
    'A cultura das redes sociais alimenta o medo de perder. Descubra como lidar com essa emoção tóxica.',
  keywords: ['FOMO', 'redes sociais', 'medo de ficar de fora', 'ansiedade digital', 'bem-estar'],
}

export default function FOPOPost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="FOMO (Medo de Ficar de Fora): Realidade ou Ilusão?"
          excerpt="A cultura das redes sociais alimenta o medo de perder. Descubra como lidar com essa emoção tóxica."
          publishedDate="2026-04-01"
          slug="lidar-com-fomo"
          readTime="6"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Saúde Mental</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />6 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>FOMO: Medo de Ficar de Fora — Realidade ou Ilusão?</h1>
          <p className={styles.excerpt}>
            A cultura das redes sociais alimenta o medo de perder. Descubra como lidar com essa emoção tóxica.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            FOMO — "Fear of Missing Out" (Medo de Ficar de Fora) — é um sentimento de ansiedade social que surge quando você sente que está perdendo experiências que outras pessoas estão vivendo.
          </p>

          <p>Sem redes sociais, FOMO tinha limites. Agora? Você sabe de tudo. E quanto mais sabe, mais parece estar perdendo.</p>

          <h2>Como as redes sociais amplificam FOMO</h2>
          <p>
            As redes sociais mostram os melhores momentos das pessoas. Você vê férias épicas, jantares chiques, promoções, relacionamentos perfeitos. Você não vê os dias normais, as dificuldades, os momentos chatos.
          </p>

          <p>
            Comparar seu dia comum com o melhor dia editado de outras pessoas é uma receita para FOMO.
          </p>

          <h2>O custo emocional do FOMO</h2>
          <ul>
            <li>Ansiedade constante sobre estar "por dentro"</li>
            <li>Despertar no meio da noite para verificar notificações</li>
            <li>Incapacidade de estar presente em atividades porque você está pensando no que mais está happening</li>
            <li>Comparação constante com outras pessoas</li>
            <li>Sensação de inadequação</li>
            <li>Compulsão de compartilhar experiências para "provar" que você existe</li>
          </ul>

          <h2>A realidade que FOMO ignora</h2>
          <p>
            Você não pode estar em 10 lugares ao mesmo tempo. Escolher estar em um lugar significa não estar em outros. Sempre será assim. FOMO tenta convencer você de que é possível estar em todos os lugares. Não é.
          </p>

          <p>
            E sabe o que é importante? A profundidade da experiência, não a quantidade. Um café recheado de presença e atenção vale mais que 10 eventos half-hearted.
          </p>

          <h2>Como lidar com FOMO</h2>
          <h3>1. Vigie suas redes sociais</h3>
          <p>
            Defina limites de tempo. Use aplicativos que bloqueiam após 30 minutos. Quando você sente FOMO surgindo, pause. Feche o app.
          </p>

          <h3>2. Lembre-se: Está tudo curado</h3>
          <p>
            Ninguém posta sua pior foto. Ninguém compartilha que o café foi ruim. Você está vendo ficção. Bonita, mas ficção.
          </p>

          <h3>3. Questione o impulso</h3>
          <p>
            "Realmente quero ir neste evento? Ou apenas tenho medo de perder?" Há uma grande diferença. Um é entusiasmo. O outro é medo.
          </p>

          <h3>4. Escolha sua ausência conscientemente</h3>
          <p>
            Quando você percebe que não pode estar em todos os lugares, transforme de "estou perdendo" para "estou escolhendo estar aqui". Poder recusatório é liberação.
          </p>

          <h3>5. Cultive gratidão pelo que você TEM</h3>
          <p>
            Ao invés de focar no que está perdendo, foque no que tem. Relacionamento saudável? Hobbies que ama? Saúde? Todas são vitórias.
          </p>

          <h2>A verdade final</h2>
          <p>
            A vida completa não significa estar em todos os lugares. Significa estar plenamente onde você escolheu estar. Com quem você ama. Fazendo o que o preenche.
          </p>

          <p>Isso é suficiente. E sempre foi.</p>
        </div>

        <footer className={styles.footer}>
          <Link href="/blog" className={styles.backLink}>
            <span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}>
              <IconArrow size={14} />
            </span>
            Voltar para o blog
          </Link>

          <div className={styles.cta}>
            <p>FOMO afetando sua qualidade de vida?</p>
            <Link href="/contato" className="btn btn-primary">
              Vamos conversar sobre isso
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

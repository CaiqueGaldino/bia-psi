import type { Metadata } from 'next'
import styles from '../blog-post.module.css'
import Link from 'next/link'
import { IconArrow, IconClock } from '@/components/Icons'
import { BlogPostSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Gestão Emocional: Entender para Transformar',
  description:
    'As emoções não são obstáculos — são mensageiras. Aprenda a compreendê-las e usá-las a seu favor.',
  keywords: ['gestão emocional', 'emoções', 'bem-estar', 'autoconhecimento', 'inteligência emocional'],
}

export default function GestaoEmocionalPost() {
  return (
    <>
      <article className={styles.post}>
        <BlogPostSchema
          title="Gestão Emocional: Entender para Transformar"
          excerpt="As emoções não são obstáculos — são mensageiras. Aprenda a compreendê-las e usá-las a seu favor."
          publishedDate="2026-04-01"
          slug="gestao-emocional"
          readTime="7"
        />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.tag}>Emoções</span>
            <span className={styles.readTime}>
              <IconClock size={14} color="currentColor" />7 min de leitura
            </span>
          </div>
          <h1 className={styles.title}>Gestão Emocional: Entender para Transformar</h1>
          <p className={styles.excerpt}>
            As emoções não são obstáculos — são mensageiras. Aprenda a compreendê-las e usá-las a seu favor.
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Muitas pessoas tentam "controlar" ou "eliminar" emoções difíceis. Raiva é "ruim". Tristeza é "fraqueza". Medo é "para covardes".
          </p>

          <p>
            Isso está errado. Emoções não são inimigas. São mensagens.
          </p>

          <h2>O que emoções realmente são</h2>
          <p>
            Emoções são respostas do corpo a estímulos externos. Elas têm função evolutiva:
          </p>

          <ul>
            <li>
              <strong>Medo:</strong> Avisa que há perigo. Prepara você para lutar ou fugir.
            </li>
            <li>
              <strong>Raiva:</strong> Sinaliza que seus limites foram violados. Proporciona energia para tomar ação.
            </li>
            <li>
              <strong>Tristeza:</strong> Indica perda e permite processamento emocional.
            </li>
            <li>
              <strong>Alegria:</strong> Reforça comportamentos saudáveis e conexões.
            </li>
          </ul>

          <h2>O problema: Repressão emocional</h2>
          <p>
            Quando você rejeita ou reprime uma emoção, ela não desaparece. Ela fica presa no corpo. Músculos tensionados. Cortisol elevado. Problemas digestivos. Ansiedade crônica.
          </p>

          <p>
            Emoções ignoradas tendem a explodir — frequentemente de formas destrutivas.
          </p>

          <h2>O modelo de gestão emocional saudável</h2>
          <h3>1. Reconheça</h3>
          <p>
            Nomeie a emoção. "Estou angustiada." "Estou assustada." Simplesmente nomear já reduz a intensidade.
          </p>

          <h3>2. Permita</h3>
          <p>
            Deixe a emoção estar ali. Você não precisa agir sobre ela. Não precisa resolvê-la imediatamente. Simplesmente deixe-a existir.
          </p>

          <h3>3. Investigue</h3>
          <p>
            Por que estou sentindo isso? Qual é a mensagem? Meus limites foram violados? Tenho uma necessidade não atendida? Há perigo real?
          </p>

          <h3>4. Expresse</h3>
          <p>
            Escreva. Converse. Chore. Cante. Mova seu corpo. Diferentes emoções precisam de diferentes formas de expressão.
          </p>

          <h3>5. Integre</h3>
          <p>
            Pergunte-se: O que devo aprender com isso? Como vou agir diferente da próxima vez? Agora deixe ir.
          </p>

          <h2>Ferramentas práticas</h2>
          <h3>O "STOP" técnica</h3>
          <p>
            <strong>S</strong> - Stop (Pause)
            <strong>T</strong> - Take a breath (Respire)
            <strong>O</strong> - Observe (Note o que está sentindo)
            <strong>P</strong> - Proceed (Após observar, proceda com intenção)
          </p>

          <h3>Journaling de emoções</h3>
          <p>
            Escreva livremente sobre o que está sentindo. Sem filtro. Sem considerar como soa. Só deixe sair do seu corpo e para o papel.
          </p>

          <h3>Movimento corporal</h3>
          <p>
            Caminhe. Dance. Faça alongamentos. O corpo armazena emoções — movimento libera.
          </p>

          <h2>Quando buscar ajuda profissional</h2>
          <p>
            Se você cronicamente sente:
          </p>
          <ul>
            <li>Entorpecimento emocional (nenhuma emoção)</li>
            <li>Explosões emocionais que você não consegue controlar</li>
            <li>Uso de substâncias para evitar emoções</li>
            <li>Auto-isolamento como resposta a emoções</li>
          </ul>

          <p>
            Esses são sinais de que você poderia se beneficiar de suporte profissional para desenvolver ferramentas de regulação emocional.
          </p>

          <h2>Lembre-se</h2>
          <p>
            Emocões difíceis não significam que há algo errado com você. Significam que você é humano — e você está vivo o suficiente para sentir. Isso é uma vitória.
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
            <p>Deseja aprofundar sua inteligência emocional?</p>
            <Link href="/contato" className="btn btn-primary">
              Agende uma sessão
            </Link>
          </div>
        </footer>
      </article>
    </>
  )
}

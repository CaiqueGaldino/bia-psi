import styles from '../blog-post.module.css'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Como lidar com a ansiedade no dia a dia',
  description: 'Estratégias baseadas na Terapia ACT para lidar com a ansiedade sem suprimí-la. Por Beatriz Silvestre, psicóloga CRP 11/24329.',
}

export default function PostAnsiedade() {
  return (
    <article className={styles.article}>
      <div className={styles.hero} style={{ background: '#E8F4F5' }}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>← Voltar ao Blog</Link>
          <span className={styles.tag}>Ansiedade</span>
          <h1>Como lidar com a ansiedade no dia a dia</h1>
          <div className={styles.meta}>
            <span>Por Beatriz Silvestre · CRP 11/24329</span>
            <span>·</span>
            <span>⏱ 6 min de leitura</span>
          </div>
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <p className={styles.lead}>
          A ansiedade faz parte da experiência humana. Ela existe para nos proteger, nos alertar sobre perigos e nos preparar para desafios. O problema não é sentir ansiedade — é quando ela começa a controlar nossas escolhas, nos paralisa ou nos impede de viver plenamente.
        </p>

        <h2>Você não está "louco(a)" — sua mente está fazendo o que foi programada para fazer</h2>
        <p>
          Antes de mais nada, preciso te dizer algo importante: sentir ansiedade não significa que há algo errado com você. O cérebro humano foi moldado ao longo de milênios para detectar ameaças — e ele faz isso muito bem, às vezes até bem demais.
        </p>
        <p>
          O que acontece com muitas pessoas hoje é que esse sistema de alarme fica ativado o tempo todo, mesmo em situações que não representam perigo real. Reuniões de trabalho, julgamentos alheios, incertezas sobre o futuro — tudo vira motivo de alerta.
        </p>

        <h2>O que a Terapia ACT nos ensina sobre ansiedade</h2>
        <p>
          Na abordagem que eu utilizo — a Terapia de Aceitação e Compromisso (ACT) — a proposta não é eliminar a ansiedade, mas mudar a sua relação com ela.
        </p>
        <p>
          Em vez de lutar contra seus pensamentos ansiosos (o que geralmente os intensifica), a ACT propõe que você aprenda a <strong>observar seus pensamentos sem se fundir com eles</strong>. Você não é seus pensamentos. Você é quem os observa.
        </p>

        <div className={styles.highlight}>
          <p>💡 <strong>Exercício prático:</strong> Da próxima vez que sentir ansiedade, ao invés de lutar contra ela, tente nomeá-la: <em>"Estou notando que minha mente está me dizendo que algo vai dar errado."</em> Apenas observe, sem julgamento.</p>
        </div>

        <h2>3 estratégias que fazem diferença no dia a dia</h2>

        <h3>1. Respiração diafragmática</h3>
        <p>
          Quando a ansiedade aparece, o sistema nervoso simpático (aquele que nos prepara para "lutar ou fugir") entra em ação. A respiração fica mais rápida e superficial.
        </p>
        <p>
          Respirar de forma lenta e profunda ativa o sistema nervoso parassimpático — o que nos acalma. Inspire contando até 4, segure por 4, expire contando até 6. Repita 5 vezes.
        </p>

        <h3>2. Grounding (aterramento)</h3>
        <p>
          Quando a mente está acelerada pensando no futuro, trazer a atenção para o presente ajuda muito. A técnica 5-4-3-2-1 é simples: observe 5 coisas que você vê, 4 que pode tocar, 3 que ouve, 2 que cheira, 1 que sente o sabor.
        </p>

        <h3>3. Questionar os pensamentos, não suprimi-los</h3>
        <p>
          Ao invés de tentar parar um pensamento ansioso, pergunte a si mesmo: <em>"Esse pensamento é um fato ou uma interpretação? O que eu diria a uma amiga que estivesse pensando isso?"</em>
        </p>

        <h2>Quando buscar ajuda profissional?</h2>
        <p>
          Se a ansiedade está interferindo no seu trabalho, nos seus relacionamentos, no seu sono ou na sua qualidade de vida de forma consistente, esse é o sinal de que vale procurar apoio de uma psicóloga.
        </p>
        <p>
          A terapia não é um sinal de fraqueza — é um ato de autocuidado e coragem.
        </p>

        <div className={styles.ctaBox}>
          <p>Se você se identificou com esse texto e quer conversar sobre como a terapia pode te ajudar, entre em contato. 🌿</p>
          <a href="https://wa.me/5588988211715" target="_blank" rel="noopener noreferrer" className="btn btn-wpp">
            Agendar uma conversa
          </a>
        </div>
      </div>
    </article>
  )
}

'use client'

import { BASE_URL, PUBLIC_URL } from '@/lib/constants'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BASE_URL,
    name: 'Beatriz Silvestre - Psicóloga CRP 11/24329',
    description: 'Psicóloga especializada em ansiedade, autocobrança e saúde emocional para adolescentes e adultos em Juazeiro do Norte e online.',
    image: `${PUBLIC_URL}/foto.jpg`,
    url: BASE_URL,
    telephone: '+5588999133606',
    email: 'beatrizsilvestrepsi@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'BR',
      addressLocality: 'Juazeiro do Norte',
      addressRegion: 'CE',
    },
    sameAs: [
      'https://instagram.com/beatrizsilvestrepsi',
      'https://facebook.com/beatrizsilvestrepsi',
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProfessionalSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Beatriz Silvestre - Psicóloga CRP 11/24329',
    url: BASE_URL,
    telephone: '+5588999133606',
    email: 'beatrizsilvestrepsi@gmail.com',
    knowsAbout: [
      'Psicoterapia',
      'Ansiedade',
      'Terapia para adolescentes',
      'ACT - Acceptance and Commitment Therapy',
      'Saúde mental',
      'Bem-estar emocional',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Juazeiro do Norte',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BlogPostSchemaProps {
  title: string
  excerpt: string
  publishedDate: string
  author?: string
  slug: string
  readTime: string
}

export function BlogPostSchema({
  title,
  excerpt,
  publishedDate,
  author = 'Beatriz Silvestre',
  slug,
  readTime,
}: BlogPostSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: excerpt,
    image: 'https://beatrizsilvestrelira.com.br/images/blog-default.jpg',
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://beatrizsilvestrelira.com.br',
    },
    url: `https://beatrizsilvestrelira.com.br/blog/${slug}`,
    articleBody: excerpt,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Como funciona a psicoterapia online?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'As sessões online funcionam através de videochamada segura e confidencial. As sessões têm 50 minutos e podem ser semanais ou mensais, conforme sua necessidade.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual é o valor das consultas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Os valores variam conforme a abordagem e frequência. Entre em contato pelo WhatsApp para conhecer as opções de valores.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como agendar uma sessão?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Você pode agendar pelo WhatsApp (88) 99913-3606 ou através do formulário de contato no site.',
        },
      },
      {
        '@type': 'Question',
        name: 'Qual é a sua experiência?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sou psicóloga registrada no CRP 11/24329, com especialização em Terapia de Aceitação e Compromisso (ACT) e experiência em atendimento a adolescentes e adultos.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Beatriz Silvestre - Psicóloga',
    url: BASE_URL,
    logo: `${PUBLIC_URL}/logo.png`,
    sameAs: [
      'https://instagram.com/beatrizsilvestrepsi',
      'https://facebook.com/beatrizsilvestrepsi',
      'https://wa.me/5588999133606',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+5588999133606',
      contactType: 'Customer Service',
      email: 'beatrizsilvestrepsi@gmail.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

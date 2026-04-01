import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://beatrizsilvestrelira.com.br'

  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/lgpd`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  const blogPosts = [
    'como-lidar-com-ansiedade',
    'por-que-me-sinto-insuficiente',
    'como-parar-de-se-comparar',
    'como-desacelerar-sem-culpa',
    'estou-atrasada-na-vida',
    'impostor-syndrome',
    'relacionamentos-saudaveis',
    'procrastinacao-e-perfeccionismo',
    'auto-sabotagem',
    'mindfulness-pratica-diaria',
    'lidar-com-fomo',
    'establecer-limites-saudaveis',
    'gestao-emocional',
    'voltar-apos-fracasso',
  ]

  const blogSitemaps = blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...blogSitemaps]
}

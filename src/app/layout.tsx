import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Footer from '@/components/Footer'
import {
  LocalBusinessSchema,
  ProfessionalSchema,
  FAQSchema,
  OrganizationSchema,
} from '@/components/StructuredData'

const baseUrl = 'https://beatrizsilvestrelira.com.br'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Beatriz Silvestre – Psicóloga em Juazeiro do Norte | CRP 11/24329',
    template: '%s | Beatriz Silvestre – Psicóloga',
  },
  description:
    'Psicóloga em Juazeiro do Norte e atendimento online. Beatriz Silvestre (CRP 11/24329) atende adolescentes e adultos com foco em ansiedade, autocobrança e bem-estar emocional.',
  keywords: [
    'psicóloga em Juazeiro do Norte',
    'terapia online',
    'psicóloga para mulheres',
    'psicóloga para ansiedade',
    'psicoterapia individual',
    'terapia para adolescentes',
    'ACT',
    'Beatriz Silvestre Lira',
    'psicólogo Ceará',
    'terapia ACT online',
  ],
  authors: [{ name: 'Beatriz Silvestre Lira' }],
  creator: 'Beatriz Silvestre Lira',
  publisher: 'Beatriz Silvestre Lira',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Beatriz Silvestre Lira – Psicóloga',
    title: 'Beatriz Silvestre Lira – Psicóloga CRP 11/24329',
    description:
      'Atendimento psicológico para adolescentes e adultos, com foco em ansiedade, autocobrança e construção de uma vida com mais sentido.',
    url: baseUrl,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Beatriz Silvestre - Psicóloga',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beatriz Silvestre – Psicóloga em Juazeiro do Norte',
    description:
      'Psicoterapia para viver com mais leveza, clareza e propósito.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  verification: {
    google: 'google-site-verification-code',
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Structured Data Schemas */}
        <LocalBusinessSchema />
        <ProfessionalSchema />
        <FAQSchema />
        <OrganizationSchema />

        {/* Verification and Additional Meta */}
        <link rel="canonical" href="https://beatrizsilvestrelira.com.br" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#537F80" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}

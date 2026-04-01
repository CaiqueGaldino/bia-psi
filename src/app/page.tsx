import type { Metadata } from 'next'
import HeroSection from './sections/HeroSection'
import IntroSection from './sections/IntroSection'
import ServicesSnippet from './sections/ServicesSnippet'
import CtaBanner from './sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Beatriz Silvestre – Psicóloga em Juazeiro do Norte | CRP 11/24329',
  description:
    'Psicóloga em Juazeiro do Norte com atendimento online. Especialista em ansiedade, autocobrança e saúde emocional para adolescentes e adultos. CRP 11/24329.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesSnippet />
      <CtaBanner />
    </>
  )
}

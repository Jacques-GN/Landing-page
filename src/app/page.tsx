import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { VideoDemos } from '@/components/landing/video-demos'
import { Toolkit } from '@/components/landing/toolkit'
import { UseCases } from '@/components/landing/use-cases'
import { FinalCta } from '@/components/landing/final-cta'
import { AfterPurchase } from '@/components/landing/after-purchase'
import { Faq } from '@/components/landing/faq'
import { Footer } from '@/components/landing/footer'
import { StickyCta } from '@/components/landing/sticky-cta'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <VideoDemos />
        <Toolkit />
        <UseCases />
        {/* L'offre (seule zone où le prix est affiché) puis le mode
d'emploi post-achat → rassure au moment de la décision */}
        <FinalCta />
        <AfterPurchase />
        <Faq />
      </main>

      <Footer />

      {/* Barre d'offre fixe — mobile uniquement (99 % de la cible) */}
      <StickyCta />
    </div>
  )
}

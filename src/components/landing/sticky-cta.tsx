'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ============================================================
   BARRE CTA STICKY — MOBILE UNIQUEMENT
   99 % de la cible est sur téléphone : cette barre garde
   l'offre sous le pouce pendant tout le scroll. SANS prix
   (le prix ne se révèle qu'en bas de page, dans la section
   offre). Elle disparaît quand la section #offre est visible
   (le gros bouton y est déjà) et respecte la zone de sécurité
   iOS (encoche home).
   ============================================================ */

export function StickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const offer = document.getElementById('offre')
    let offerInView = false

    const update = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.55
      setVisible(pastHero && !offerInView)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        offerInView = entry?.isIntersecting ?? false
        update()
      },
      { threshold: 0.08 }
    )

    if (offer) observer.observe(offer)

    window.addEventListener('scroll', update, { passive: true })
    update()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', update)
    }
  }, [])

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ease-out md:hidden',
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      )}
      aria-hidden={visible ? undefined : true}
    >
      <div className="border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_32px_-16px_oklch(0_0_0/0.6)] backdrop-blur-md">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-display text-xl leading-none text-foreground">
              L’édition <span className="italic text-accent">privée</span>
            </p>
            <p className="mt-1.5 font-mono text-[9px] uppercase leading-snug tracking-[0.12em] text-muted-foreground">
              Paiement unique · clôture 24&nbsp;déc.
            </p>
          </div>
          <a
            href="#offre"
            className="group inline-flex h-11 shrink-0 items-center gap-1.5 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            J&apos;en profite
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

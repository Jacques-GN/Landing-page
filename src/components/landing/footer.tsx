'use client'

import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Sur cette page',
    links: [
      { label: 'Les démos', href: '#demos' },
      { label: 'La boîte à outils', href: '#outils' },
      { label: 'Ce que ça change', href: '#methode' },
      { label: 'Questions fréquentes', href: '#faq' },
    ],
  },
  {
    heading: 'Liens officiels',
    links: [
      { label: 'Google One AI Premium', href: 'https://one.google.com/about/ai-premium', external: true },
      { label: 'NotebookLM', href: 'https://notebooklm.google.com', external: true },
      { label: 'Google Flow', href: 'https://labs.google/flow', external: true },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-border max-md:pb-16">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Marque typographique */}
          <div>
            <p className="font-display text-lg font-medium tracking-tight text-foreground">
              PlusHaut
            </p>
            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              L’IA de Google pour un an, payée en FCFA
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Un service d’activation local : on débloque l’accès complet à l’IA de Google —
              études, contenu, business — pour 12 mois, sans carte bancaire internationale,
              payé une seule fois — Wave, Mobile Money ou carte — avec suivi toute
              l’année.
            </p>
          </div>

          {/* Colonnes */}
          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={`Liens : ${col.heading}`}>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="link-editorial inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <ArrowUpRight className="h-3 w-3 opacity-50" aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Mentions */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground/70">
            © {new Date().getFullYear()} PlusHaut — service d’activation indépendant, non affilié
            à Google. Gemini, Veo, NotebookLM et Google One sont des marques de Google LLC.
            L’accès est soumis aux conditions officielles de Google ; offre annuelle à paiement
            unique valable jusqu’au 24 décembre 2026 ; paiements traités via une plateforme
            sécurisée — code de paiement envoyé par e-mail après chaque achat.
          </p>
        </div>
      </div>
    </footer>
  )
}

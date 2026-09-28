'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#demos', label: 'Démos' },
  { href: '#outils', label: 'Outils' },
  { href: '#methode', label: 'Méthode' },
  { href: '#faq', label: 'FAQ' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Bande de fond au scroll — uni, filet inférieur */}
      <div
        className={cn(
          'border-b transition-all duration-300',
          scrolled
            ? 'border-border bg-background/88 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        )}
        aria-hidden="true"
      />

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Wordmark typographique — aligné sur la marque de la page de paiement (PlusHaut) */}
        <a href="#" className="group flex items-baseline gap-2" aria-label="PlusHaut — Accueil">
          <span className="font-display text-lg font-medium tracking-tight text-foreground">
            PlusHaut
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            / gemini&nbsp;advanced
          </span>
        </a>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-editorial text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#offre"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Réserver ma place
            <ArrowUpRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </nav>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-secondary md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Menu mobile */}
      {mobileOpen && (
        <nav
          className="border-b border-border bg-background px-5 pb-6 pt-2 md:hidden"
          aria-label="Navigation mobile"
        >
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-baseline gap-3 border-b border-border/60 py-3.5 last:border-0"
            >
              <span className="font-mono text-[10px] text-muted-foreground/70">0{i + 1}</span>
              <span className="font-display text-lg text-foreground">{link.label}</span>
            </a>
          ))}
          <a
            href="#offre"
            onClick={() => setMobileOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
          >
            Réserver ma place
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  )
}

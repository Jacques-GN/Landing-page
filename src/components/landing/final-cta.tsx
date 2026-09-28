'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, Lock, ShieldCheck, Timer } from 'lucide-react'
import { Countdown } from './countdown'

/* ============================================================
   L'OFFRE — structure « Grand Slam Offer » (Alex Hormozi) :
   1. Value stack ligne par ligne (le reçu)      → valeur perçue
   2. Ancrage : 222 000 F de valeur → 15 000 F  → prix dérisoire
   3. Garantie activation 48 h                   → risque zéro
   4. Compte à rebours 24 déc. 2026             → urgence (réelle)
   5. Suivi personnel = places limitées         → rareté (réelle)
   6. Bonus nommés : Le Suivi, Les Surprises IA → no-brainer
   Paiement : page Chario sécurisée (Wave, Mobile Money, carte).
   Le processus post-achat est détaillé juste après (AfterPurchase).
   C’est la SEULE zone de la page où le prix est affiché.
   ============================================================ */

const stack = [
  {
    num: '01',
    name: 'Accès Google AI Premium — 12 mois',
    detail:
      'NotebookLM pour tes PDF de cours, Gemini Advanced avec limites 2x, Veo & Flow pour les vidéos, 400 Go de stockage, Gmail & Docs — sur ton propre compte, à ton nom, jamais partagé.',
    value: '156\u00a0000\u00a0F',
  },
  {
    num: '02',
    name: 'Activation clé en main',
    detail:
      'Vérification, compte, configuration : on paramètre tout avec toi, en direct sur WhatsApp. Tu n’as rien à faire seul.',
    value: '15\u00a0000\u00a0F',
  },
  {
    num: '03',
    name: 'Le Suivi — 12 mois',
    detail:
      'Un numéro WhatsApp dédié : tes questions IA répondues toute l\u2019année, chaque nouveauté expliquée en premier.',
    value: '36\u00a0000\u00a0F',
  },
  {
    num: '04',
    name: 'Les Surprises IA',
    detail:
      'Au moins 3 bonus débloqués au fil de l\u2019année. On ne spoil pas la liste — c\u2019est aussi ça, s\u2019inscrire tôt.',
    value: '15\u00a0000\u00a0F',
  },
]

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export function FinalCta() {
  return (
    <section id="offre" className="relative py-20 sm:py-28" aria-labelledby="offre-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ---- En-tête ---- */}
        <motion.div {...reveal} className="max-w-2xl">
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            L&apos;offre — édition privée
          </p>
          <h2
            id="offre-title"
            className="font-display mt-5 text-3xl font-light leading-[1.12] tracking-[-0.015em] text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Ton année scolaire, transformée.
            <br />
            Payée <em className="italic text-accent">une seule fois</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Pas d&apos;abonnement, pas de reconduction : un paiement, douze mois
            d&apos;accès, un suivi qui t&apos;accompagne. Voilà, ligne par ligne, ce que tu
            reçois — pour tes notes, pour ton argent de poche — et ce que ça vaut.
          </p>
        </motion.div>

        {/* ---- Reçu + Prix ---- */}
        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8"
        >
          {/* ============ Colonne gauche : LE REÇU ============ */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-card p-5 sm:p-8">
            <div className="pointer-events-none absolute inset-0 paper-noise" aria-hidden="true" />

            <p className="relative flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-block h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
              Le reçu — tout ce que tu reçois
            </p>

            <ul className="relative mt-4 divide-y divide-border border-t border-border">
              {stack.map((row) => (
                <li key={row.num} className="py-5 first:pt-6 last:pb-6">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-accent">
                      {row.num}
                    </span>
                    <p className="text-sm font-medium text-foreground sm:text-[0.95rem]">
                      {row.name}
                    </p>
                    <span
                      className="mx-1 hidden h-px min-w-6 flex-1 translate-y-[-3px] border-b border-dotted border-foreground/25 sm:block"
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs whitespace-nowrap text-muted-foreground sm:text-sm">
                      {row.value}
                    </span>
                  </div>
                  <p className="mt-1.5 pl-6 text-xs leading-relaxed text-muted-foreground sm:pl-7 sm:text-[13px]">
                    {row.detail}
                  </p>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="relative flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-t-2 border-dashed border-foreground/20 pt-5">
              <p className="text-sm font-medium text-foreground">
                Valeur totale, achetée séparément
              </p>
              <p className="font-mono text-lg text-muted-foreground line-through decoration-accent/70 decoration-2">
                222&nbsp;000&nbsp;F
              </p>
            </div>
            <p className="relative mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/60">
              Valeurs au tarif officiel du forfait et des services, sur 12 mois
            </p>
          </div>

          {/* ============ Colonne droite : LE PRIX ============ */}
          <div className="relative flex flex-col overflow-hidden rounded-xl border border-border border-t-2 border-t-accent bg-card p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 paper-noise" aria-hidden="true" />

            <p className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Édition annuelle — ton prix
            </p>
            <p className="font-display relative mt-3 text-5xl font-light leading-none text-foreground sm:text-6xl">
              15&nbsp;000{' '}
              <span className="text-2xl italic text-muted-foreground sm:text-3xl">FCFA</span>
            </p>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
              Paiement unique. Plus rien à payer pendant 12 mois complets —{' '}
              <span className="mark font-medium text-foreground">
                l&apos;année au prix de 5 mensualités
              </span>
              .
            </p>
            <p className="relative mt-2 text-sm italic text-accent">
              = 1&nbsp;250&nbsp;F / mois · 41&nbsp;F / jour — moins que ton goûter.
            </p>

            {/* ROI — le calcul de l'étudiant malin */}
            <div className="relative mt-5 border-t border-dashed border-foreground/20 pt-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Le calcul de l&apos;étudiant malin
              </p>
              <ul className="mt-2.5 space-y-2 text-[13px] leading-relaxed text-muted-foreground">
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Une séance de répétiteur coûte plus cher que ton mois d&apos;IA ici.</span>
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    Ton premier client freelance (créa, vidéo, post) :{' '}
                    <span className="font-medium text-foreground">l&apos;année remboursée</span>.
                  </span>
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>Redoubler une année : le seul prix vraiment difficile à payer.</span>
                </li>
              </ul>
            </div>

            {/* Compte à rebours */}
            <div className="relative mt-6 border-t border-dashed border-foreground/20 pt-5">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                <Timer className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                Clôture : 24&nbsp;déc.&nbsp;2026 — 23&nbsp;h&nbsp;59
              </p>
              <div className="mt-3">
                <Countdown />
              </div>
            </div>

            {/* Garantie — scopée à la mise en service (ce qui dépend de nous) */}
            <div className="relative mt-6 flex gap-3.5 rounded-lg border border-accent/30 bg-accent/5 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Garantie d&apos;activation — zéro risque
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                  Ton compte prêt, configuré et vérifié avec toi en 48&nbsp;h chrono —
                  sinon, intégralement remboursé. Vérification refusée&nbsp;? Remboursé
                  aussi, sans discussion.
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground/70">
                  La garantie porte sur la mise en service de ton accès.
                </p>
              </div>
            </div>

            {/* CTA — page de paiement */}
            {/* 🔗 PAGE DE PAIEMENT (Chario) — modifie cette URL si l'offre change */}
            <a
              href="https://gjxgkakr.mychariow.co/geminipro/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Payer et activer mon année
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <p className="relative mt-3 flex items-center justify-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/80">
              <Lock className="h-3 w-3 text-accent" aria-hidden="true" />
              Paiement sécurisé — Wave, Mobile Money ou carte
            </p>
            <a
              href="#faq"
              className="link-editorial relative mt-4 self-center text-sm font-medium text-foreground"
            >
              D&apos;abord, mes questions
              <ArrowUpRight className="ml-1 inline h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
            </a>

            {/* Rareté */}
            <p className="relative mt-6 border-t border-border pt-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground/80 sm:text-[10px]">
              Suivi personnel → places limitées. Quota plein = édition fermée, même avant
              le&nbsp;24&nbsp;déc.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

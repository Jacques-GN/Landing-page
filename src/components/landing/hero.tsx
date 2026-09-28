'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'

const included = [
  'NotebookLM — tes PDF en fiches',
  'Gemini Advanced — limites 2x',
  'Gemini Live — réviser à l’oral',
  'Gemini dans Gmail & Docs',
  'Veo & Flow — vidéos IA',
  '400 Go de stockage Drive',
  'Suivi & surprises IA',
]

const stats = [
  { value: '9/10', unit: 'étudiants', label: 's’aident déjà de l’IA pour étudier — la plupart en version gratuite, avec ses limites' },
  { value: '2×', unit: 'de limites', label: 'que le gratuit : plus de « quota atteint » en pleine révision' },
  { value: '12', unit: 'mois', label: 'd’accès complet et de suivi — d’un seul tenant, activés avec toi' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}
const ticketV = {
  hidden: { opacity: 0, y: 30, rotate: -6 },
  show: {
    opacity: 1,
    y: 0,
    rotate: -2.4,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-0 sm:pt-40" aria-labelledby="hero-title">
      {/* ---- Fond : affiche imprimée ---- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Projecteur chaud + reflets */}
        <div className="absolute inset-0 hero-spotlight" />
        {/* Grille papier */}
        <div className="absolute inset-0 paper-grid-wide" />
        {/* Trame halftone — coin supérieur droit */}
        <div className="absolute inset-0 halftone" />
        {/* Grain papier */}
        <div className="absolute inset-0 paper-noise" />
        {/* Astérisque géant — filigrane typographique */}
        <span className="poster-mark absolute right-[6%] top-[54%] hidden select-none text-[21rem] lg:block">
          *
        </span>
      </div>

      {/* Annotation verticale — marge droite */}
      <p
        className="absolute right-6 top-[40%] hidden font-mono text-[10px] uppercase tracking-[0.32em] text-foreground/35 [writing-mode:vertical-rl] xl:block"
        aria-hidden="true"
      >
        Campagne 26·12 — Places limitées
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-6xl px-5 sm:px-8"
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* ================= Colonne éditoriale ================= */}
          <div>
            {/* Eyebrow */}
            <motion.p variants={item} className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
              Google AI Premium — édition privée
            </motion.p>

            {/* Titre serif éditorial */}
            <motion.h1
              id="hero-title"
              variants={item}
              className="font-display mt-5 max-w-2xl text-[2.65rem] font-light leading-[1.06] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[4.2rem]"
            >
              De <em className="font-normal italic">meilleures notes</em>.
              <br />
              <span className="text-muted-foreground">
                Sans y passer tes <em className="font-normal italic text-accent">nuits</em>.
              </span>
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Tu demandes déjà tout à ChatGPT&nbsp;? Passe à la version payante de
              Google.{' '}
              <span className="mark font-medium text-foreground">NotebookLM</span> avale
              tes PDF de cours et t’en fait des fiches, des quiz, même un podcast à
              écouter dans le bus. Le soir, les mêmes outils te rapportent tes
              premiers billets. Un seul paiement, sans carte bancaire, sur ton
              propre compte.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#offre"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Réserver ma place
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#demos"
                className="link-editorial inline-flex h-12 items-center gap-1.5 self-start text-base font-medium text-foreground sm:self-auto"
              >
                Voir les démos — 30 secondes chacune
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Garantie — réassurance directe sous le CTA */}
            <motion.p
              variants={item}
              className="mt-5 flex items-start gap-2 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground/80"
            >
              <ShieldCheck className="mt-px h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              Garantie d&apos;activation — ton compte prêt et vérifié avec toi, ou
              remboursé
            </motion.p>
          </div>

          {/* ================= Colonne visuelle : le ticket ================= */}
          <motion.div variants={ticketV} className="relative mx-auto w-full max-w-[23rem] lg:justify-self-end">
            {/* Papier de dessous — effet pile */}
            <div
              className="absolute inset-0 translate-x-3.5 translate-y-3.5 rounded-xl border border-foreground/10 bg-secondary/40"
              aria-hidden="true"
            />

            {/* Ticket */}
            <div className="ticket relative flex rounded-xl border border-foreground/20 bg-card shadow-[0_28px_70px_-28px_oklch(0.08_0.03_55/0.8),0_2px_10px_-4px_oklch(0_0_0/0.4)]">
              {/* Partie principale */}
              <div className="flex-1 p-6 sm:p-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Google AI Premium — édition 26·12
                </p>
                <p className="font-display mt-4 text-[3.1rem] font-light leading-none text-foreground sm:text-[3.4rem]">
                  12 <span className="text-xl italic text-muted-foreground">mois</span>
                </p>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-sm italic text-accent">un seul paiement</span>
                  <span className="text-sm text-muted-foreground">— sans renouvellement</span>
                </div>
                <p className="mt-5 border-t border-foreground/10 pt-3 text-xs leading-relaxed text-muted-foreground">
                  NotebookLM · Gemini Omni · Veo &amp; Flow · 400&nbsp;Go · suivi inclus —
                  sur ton propre compte
                </p>
              </div>

              {/* Talon détachable */}
              <div className="relative flex w-[29%] flex-col items-center justify-between py-6 pl-5 pr-4">
                <p className="rotate-180 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground [writing-mode:vertical-rl]">
                  Clôture le 24·12
                </p>
                <div className="barcode h-11 w-full text-foreground/60" aria-hidden="true" />
                <p className="font-mono text-[9px] tracking-[0.12em] text-muted-foreground">
                  N°&nbsp;ADV·2412
                </p>
                {/* Perforation */}
                <span
                  className="absolute inset-y-2 left-0 border-l border-dashed border-foreground/25"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Tampon circulaire rotatif */}
            <div
              className="absolute -top-8 -right-3 z-10 h-20 w-20 sm:-right-6 sm:h-24 sm:w-24 lg:-right-8 lg:h-28 lg:w-28"
              style={{ transform: 'rotate(-12deg)' }}
            >
              <svg
                viewBox="0 0 100 100"
                className="animate-spin-slow h-full w-full text-accent"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="stamp-arc"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                    fill="none"
                  />
                </defs>
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle
                  cx="50"
                  cy="50"
                  r="26.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                  opacity="0.75"
                />
                <text
                  fontSize="7.3"
                  fill="currentColor"
                  style={{ fontFamily: 'var(--font-plex-mono), ui-monospace, monospace' }}
                >
                  <textPath href="#stamp-arc" textLength="228" lengthAdjust="spacingAndGlyphs">
                    COMPTE UNIQUE • À TON NOM • JAMAIS PARTAGÉ •
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 grid place-items-center">
                <span className="font-display text-[0.9rem] font-light italic leading-none text-accent sm:text-[1.1rem] lg:text-[1.25rem]">
                  le&nbsp;tien
                </span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bandeau « ce qui est inclus » — filets, pas de glass */}
        <motion.div
          variants={item}
          className="mt-16 border-y border-border py-5 sm:mt-20"
          aria-label="Outils inclus dans l'offre"
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">
              Inclus dans l&apos;offre
            </span>
            {included.map((tool) => (
              <span key={tool} className="inline-flex items-center gap-1.5 text-sm text-foreground/85">
                <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Bandeau de stats */}
        <motion.dl
          variants={item}
          className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-baseline gap-3 px-0 py-6 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl font-light text-foreground sm:text-5xl">
                {stat.value}
                <span className="ml-1 text-lg italic text-accent">{stat.unit}</span>
              </dd>
              <dd className="max-w-[10rem] text-sm font-medium leading-snug text-foreground/75">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  )
}

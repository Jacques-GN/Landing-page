'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Compass, Mail, MessageCircle, Settings } from 'lucide-react'

/* ============================================================
   APRÈS L'ACHAT — « le mode d'emploi »
   La question que tout acheteur se pose avant de payer :
   « qu'est-ce qui se passe une fois que j'ai payé ? »
   Réponse en 4 étapes scannables (e-mail → code → WhatsApp →
   activation ensemble → accompagnement 12 mois).
   Placée juste après la section offre : elle rassure AU moment
   de la décision, puis le CTA final relance la conversion.
   ============================================================ */

/* 🔗 PAGE DE PAIEMENT (Chario) — modifie cette URL si l'offre change */
const CHECKOUT_URL = 'https://gjxgkakr.mychariow.co/geminipro/checkout'

const steps = [
  {
    num: '01',
    title: 'Ton code arrive par e-mail',
    text: 'Dès que ton paiement est confirmé, un e-mail t’est envoyé avec ton code de paiement. Avant toute chose : ouvre-le, copie ce code — c’est ta preuve d’achat, et ta clé pour démarrer.',
    icon: Mail,
  },
  {
    num: '02',
    title: 'Tu arrives directement sur mon WhatsApp',
    text: 'Après le paiement, tu es dirigé sur mon profil WhatsApp — c’est prévu comme ça. Colle ton code dans ton premier message et envoie-le-moi : je te reconnais en quelques secondes, et on démarre.',
    icon: MessageCircle,
  },
  {
    num: '03',
    title: 'On règle ton compte, ensemble',
    text: 'On traite ton compte pour le bon fonctionnement : vérification, configuration, premier essai — étape par étape, en direct. Aucune compétence technique requise, tu suis et c’est réglé.',
    icon: Settings,
  },
  {
    num: '04',
    title: 'Tu es accompagné pendant 1 an',
    text: 'Des conseils sur les IA et sur la façon de les utiliser, pour tes cours comme pour tes projets. Et d’autres surprises sur l’IA en route — tu n’es jamais seul face aux outils.',
    icon: Compass,
  },
]

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
}

export function AfterPurchase() {
  return (
    <section
      id="apres-achat"
      className="relative border-t border-border py-20 sm:py-28"
      aria-labelledby="apres-achat-title"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* ---- En-tête ---- */}
        <motion.div {...reveal}>
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            Après le paiement — le mode d’emploi
          </p>
          <h2
            id="apres-achat-title"
            className="font-display mt-5 text-3xl font-light leading-[1.12] tracking-[-0.015em] text-foreground sm:text-4xl"
          >
            Et après l’achat, <em className="italic text-accent">il se passe quoi</em> ?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Pas de labyrinthe, pas d’attente interminable : quatre étapes claires, et ton
            année d’IA démarre le jour même. Voilà exactement le chemin, de ton paiement
            à ton premier résultat.
          </p>
        </motion.div>

        {/* ---- Les 4 étapes ---- */}
        <ol className="mt-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.num}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.07 }}
                className="relative flex gap-5 pb-10 last:pb-0 sm:gap-7"
              >
                {/* Rail pointillé entre les pastilles */}
                {i < steps.length - 1 && (
                  <span
                    className="absolute bottom-0 left-6 top-14 border-l border-dashed border-foreground/20"
                    aria-hidden="true"
                  />
                )}

                {/* Pastille numéro */}
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-foreground/15 bg-card font-mono text-xs tracking-[0.12em] text-accent">
                  {step.num}
                </span>

                {/* Contenu */}
                <div className="min-w-0 pt-1">
                  <h3 className="font-display text-lg font-normal leading-snug text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                    {step.text}
                  </p>
                </div>

                {/* Icône discrète — marge droite desktop */}
                <Icon
                  className="mt-2 hidden h-4 w-4 shrink-0 text-muted-foreground/40 sm:ml-auto sm:block"
                  aria-hidden="true"
                />
              </motion.li>
            )
          })}
        </ol>

        {/* ---- Relance douce ---- */}
        <motion.div
          {...reveal}
          className="mt-12 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Tout est clair ? Ton année d’IA peut démarrer{' '}
            <span className="mark font-medium text-foreground">aujourd’hui</span> —
            code par e-mail, activation ensemble, suivi pendant 12 mois.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-base font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Démarrer maintenant
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

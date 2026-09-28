'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const transformations = [
  {
    label: 'Contenu',
    before: 'Une semaine pour produire 3 posts',
    after: 'Un après-midi pour un mois de contenu',
    description:
      'Flow pour les clips, Nano Banana pour les visuels, Gemini pour les légendes. Ta production passe en mode lot.',
  },
  {
    label: 'Révisions',
    before: 'Relire 40 PDF en boucle',
    after: 'Écouter ses cours en podcast',
    description:
      'NotebookLM transforme tes documents en résumés, quiz et épisodes audio. Tu révises en transport, en sport, en marchant.',
  },
  {
    label: 'Étude de marché',
    before: 'Une agence, plusieurs semaines',
    after: 'Deep Research, une vingtaine de minutes',
    description:
      'Un dossier sourcé sur ta niche : client cible, concurrence, tendances. De quoi valider une idée avant d’y passer des mois.',
  },
]

const quote = {
  text: 'L’accès se règle en FCFA. Ce que tu construis avec, ça t’appartient pour toujours.',
  author: 'Le principe',
  role: 'de cette page',
}

export function UseCases() {
  return (
    <section id="methode" className="relative py-20 sm:py-28" aria-labelledby="methode-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            Chapitre 03 — Ce que ça change
          </p>
          <h2
            id="methode-title"
            className="font-display mt-5 text-3xl font-light leading-tight tracking-[-0.015em] text-foreground sm:text-5xl"
          >
            La méthode,
            <br />
            pas <em className="italic text-accent">la magie</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Pas de promesses vides : voici trois transformations concrètes, celles qu&apos;on
            constate dès les premières semaines d&apos;utilisation.
          </p>
        </motion.div>

        {/* Trois transformations avant → après */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {transformations.map((t, i) => (
            <motion.article
              key={t.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card p-7"
              aria-labelledby={`transf-${i}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{t.label}</p>

              <div className="mt-5 space-y-3">
                <p className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span
                    className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60"
                    aria-hidden="true"
                  >
                    Avant
                  </span>
                  <span className="line-through decoration-foreground/25">{t.before}</span>
                </p>
                <ArrowRight className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <p className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-accent"
                    aria-hidden="true"
                  >
                    Après
                  </span>
                  <span id={`transf-${i}`} className="font-display text-lg font-normal leading-snug text-foreground">
                    {t.after}
                  </span>
                </p>
              </div>

              <p className="mt-5 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                {t.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Citation éditoriale */}
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-16 max-w-2xl border-l-2 border-accent pl-6 sm:pl-8"
        >
          <p className="font-display text-xl font-light italic leading-relaxed text-foreground sm:text-2xl">
            «&nbsp;{quote.text}&nbsp;»
          </p>
          <footer className="mt-4">
            <cite className="font-mono text-[11px] uppercase not-italic tracking-[0.16em] text-muted-foreground">
              {quote.author} — {quote.role}
            </cite>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}

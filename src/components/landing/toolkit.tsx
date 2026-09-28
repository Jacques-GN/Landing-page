'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/* Outils Google par situation — côté études */
const etudesTools = [
  {
    situation: 'La veille d’examen, 40 PDF à revoir',
    tool: 'NotebookLM',
    description:
      'Dépose tes cours : NotebookLM génère résumés, quiz, flashcards et même un podcast audio. Tu révises en marchant.',
  },
  {
    situation: 'Une dissertation à structurer',
    tool: 'Gemini dans Docs',
    description:
      'Plan détaillé, arguments, contre-arguments, reformulation élégante — sans quitter Google Docs.',
  },
  {
    situation: 'Un mémoire à documenter',
    tool: 'Deep Research',
    description:
      'Gemini explore des centaines de sources et rend un dossier structuré, avec citations vérifiables.',
  },
  {
    situation: 'Candidater à un stage ou un alternance',
    tool: 'Gemini dans Gmail',
    description:
      'Lettres de motivation personnalisées, relances au bon ton, suivi de tes candidatures.',
  },
]

/* Outils Google par situation — côté vente / marketing digital */
const venteTools = [
  {
    situation: 'Lancer une pub vidéo sans caméra',
    tool: 'Flow (Veo)',
    description:
      'Décris ta scène, obtiens des clips verticaux prêts pour TikTok, Reels et Shorts. Scripts et storyboards inclus.',
  },
  {
    situation: 'Produire des créas chaque semaine',
    tool: 'Nano Banana',
    description:
      'Mockups produits, visuels de posts, miniatures YouTube — cohérents avec ta charte, en quelques secondes.',
  },
  {
    situation: 'Une page de vente à écrire',
    tool: 'Gemini 2.5 Pro',
    description:
      'Promesses, preuves, traitement des objections : travaille tes angles marketing et tes hooks comme un copywriter.',
  },
  {
    situation: 'Surveiller la concurrence',
    tool: 'NotebookLM',
    description:
      'Charge les pages, prix et avis de tes concurrents : tableau comparatif et argumentaire de vente en sortie.',
  },
  {
    situation: 'Comprendre ton marché',
    tool: 'Deep Research',
    description:
      'Étude de marché, personas, tendances de ta niche — le travail d’une agence, en une vingtaine de minutes.',
  },
  {
    situation: 'Analyser tes ventes',
    tool: 'Gemini dans Sheets',
    description:
      'Tes tableaux de ventes transformés en synthèses claires : meilleurs produits, canaux, prévisions simples.',
  },
]

function ToolRow({
  situation,
  tool,
  description,
  delay,
}: {
  situation: string
  tool: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group border-b border-border py-5 last:border-b-0"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-lg font-normal leading-snug text-foreground sm:text-xl">
          {situation}
        </h3>
        <span className="shrink-0 rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          {tool}
        </span>
      </div>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
    </motion.div>
  )
}

export function Toolkit() {
  return (
    <section id="outils" className="relative py-20 sm:py-28" aria-labelledby="outils-title">
      {/* Filet supérieur */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            Chapitre 02 — La boîte à outils
          </p>
          <h2
            id="outils-title"
            className="font-display mt-5 text-3xl font-light leading-tight tracking-[-0.015em] text-foreground sm:text-5xl"
          >
            Le bon outil,
            <br />
            pour <em className="italic text-accent">chaque situation</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Même offre, deux emplois. On a listé les situations que tu rencontres chaque semaine —
            et l&apos;outil Google exact qui les résout.
          </p>
        </motion.div>

        {/* Deux chapitres en colonnes */}
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-0">
          {/* I. Pendant les cours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pr-12"
          >
            <div className="flex items-baseline gap-4 border-b-2 border-foreground/15 pb-4">
              <span className="chapter-numeral text-4xl sm:text-5xl" aria-hidden="true">
                I.
              </span>
              <div>
                <h3 className="font-display text-2xl font-normal text-foreground">Pendant les cours</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Réviser, rédiger, documenter
                </p>
              </div>
            </div>
            <div className="mt-2">
              {etudesTools.map((t, i) => (
                <ToolRow key={t.tool + i} {...t} delay={i * 0.06} />
              ))}
            </div>
          </motion.div>

          {/* II. Pendant la vente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:pl-12 lg:border-l lg:border-border"
          >
            <div className="flex items-baseline gap-4 border-b-2 border-foreground/15 pb-4">
              <span className="chapter-numeral text-4xl sm:text-5xl" aria-hidden="true">
                II.
              </span>
              <div>
                <h3 className="font-display text-2xl font-normal text-foreground">Pendant la vente</h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Marketing digital · contenu · data
                </p>
              </div>
            </div>
            <div className="mt-2">
              {venteTools.map((t, i) => (
                <ToolRow key={t.tool + i} {...t} delay={i * 0.06} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lien vers l'offre */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex items-center gap-3"
        >
          <ArrowRight className="h-4 w-4 text-accent" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            Tous ces outils sont inclus dans le même accès —{' '}
            <a href="#offre" className="link-editorial font-medium text-foreground">
              voir comment l’activer
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'

/* ============================================================
   CONFIG DES 5 DÉMOS
   Dépose tes vidéos dans /public/videos/ puis renseigne `src`.
   Exemple : src: '/videos/notebooklm.mp4'
   Titres et descriptions : modifie title / description ci-dessous.
   Tant que `src` est vide, un placeholder soigné s'affiche.
   Voir public/videos/README.md pour la procédure complète.
   ============================================================ */
const demos = [
  {
    id: 'notebooklm',
    tool: 'NotebookLM',
    situation: 'Réviser',
    title: 'Tes PDF de cours, résumés en 10 secondes',
    description:
      'NotebookLM lit tes documents et te rend résumés, flashcards, quiz et même un podcast audio. Tu révises en marchant.',
    duration: '0:45',
    src: '',
    poster: '',
  },
  {
    id: 'flow',
    tool: 'Google Flow',
    situation: 'Créer',
    title: 'Les vidéos IA que tu vois sur TikTok',
    description:
      'Le studio propulsé par Veo : décris ta scène, obtiens des clips verticaux prêts pour TikTok, Reels et Shorts — sans caméra ni monteur.',
    duration: '0:38',
    src: '',
    poster: '',
  },
  {
    id: 'banana',
    tool: 'Nano Banana',
    situation: 'Vendre',
    title: 'Des visuels qui arrêtent le scroll',
    description:
      'Mockups produits, créas publicitaires, miniatures : Nano Banana génère des images prêtes à publier en quelques secondes, dans ta charte.',
    duration: '0:52',
    src: '',
    poster: '',
  },
  {
    id: 'deepresearch',
    tool: 'Deep Research',
    situation: 'Rédiger',
    title: 'Un dossier de recherche sourcé, pendant que tu dînes',
    description:
      'Décris ton sujet : Gemini fouille des dizaines de sources et te rend un rapport structuré, avec les citations. Ton exposé est prêt avant la fin de la série que tu regardes.',
    duration: '1:05',
    src: '',
    poster: '',
  },
  {
    id: 'gemini',
    tool: 'Gemini',
    situation: 'Au quotidien',
    title: 'Le ChatGPT que tu connais, en bien plus puissant',
    description:
      'Tu demandes tout à ChatGPT ? Passe à sa version premium : réponses en profondeur, mémoire de tes discussions, fichiers joints — et des limites doublées pour les étudiants.',
    duration: '0:41',
    src: '',
    poster: '',
  },
] as const

type Demo = (typeof demos)[number]

function DemoCard({ demo, index }: { demo: Demo; index: number }) {
  const hasVideo = demo.src.length > 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
      aria-labelledby={`demo-${demo.id}-title`}
    >
      {/* Cadre vidéo 9:16 */}
      <div
        className={cn(
          'relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-card',
          'transition-all duration-300 group-hover:-translate-y-1 group-hover:border-foreground/25',
          'group-hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.6)]'
        )}
      >
        {/* Numéro éditorial en coin */}
        <span
          className="absolute left-4 top-3.5 z-10 font-mono text-[11px] tracking-[0.15em] text-foreground/40"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Badge situation */}
        <span className="absolute right-4 top-3 z-10 rounded-full border border-border bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/70 backdrop-blur-sm">
          {demo.situation}
        </span>

        {hasVideo ? (
          <video
            className="h-full w-full object-cover"
            src={demo.src}
            poster={demo.poster || undefined}
            controls
            playsInline
            preload="metadata"
            aria-label={`Démonstration : ${demo.title}`}
          />
        ) : (
          <div
            className="relative flex h-full w-full flex-col items-center justify-center gap-5 p-6"
            role="img"
            aria-label={`Emplacement vidéo : ${demo.title}`}
          >
            <div className="pointer-events-none absolute inset-0 paper-grid opacity-60" aria-hidden="true" />

            {/* Faux bouton lecture — purement décoratif tant que la vidéo n'est pas branchée */}
            <div
              aria-hidden="true"
              className="relative flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20 bg-background/60 text-foreground backdrop-blur-sm transition-all duration-300 group-hover:border-accent group-hover:text-accent"
            >
              <Play className="ml-0.5 h-5 w-5 fill-current" />
            </div>

            <div className="relative text-center">
              <p className="font-display text-lg italic text-foreground/80">{demo.tool}</p>
              <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/80">
                Emplacement vidéo · {demo.duration}
              </p>
              <p className="mt-3 font-mono text-[10px] tracking-wide text-muted-foreground/50">
                /public/videos/{demo.id}.mp4
              </p>
            </div>

            {/* Barre timing discrète */}
            <div className="absolute inset-x-5 bottom-5">
              <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground/60">
                <span>00:00</span>
                <span>{demo.duration}</span>
              </div>
              <div className="mt-1.5 h-px w-full bg-foreground/10">
                <div className="h-full w-[18%] bg-accent" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Légende sous la vidéo */}
      <div className="mt-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {demo.tool}
        </p>
        <h3
          id={`demo-${demo.id}-title`}
          className="font-display mt-2 text-xl font-normal leading-snug text-foreground"
        >
          {demo.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{demo.description}</p>
      </div>
    </motion.article>
  )
}

export function VideoDemos() {
  return (
    <section id="demos" className="relative py-20 sm:py-28" aria-labelledby="demos-title">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* En-tête de section : filet + numéro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            Chapitre 01 — Les démos
          </p>
          <h2
            id="demos-title"
            className="font-display mt-5 text-3xl font-light leading-tight tracking-[-0.015em] text-foreground sm:text-5xl"
          >
            Trente secondes valent mieux
            <br />
            que <em className="italic text-accent">mille mots</em>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Cinq outils inclus dans l&apos;offre, filmés en situation réelle. Format vertical, lecture
            directement dans la page.
          </p>
        </motion.div>

        {/* Grille des 5 vidéos */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {demos.map((demo, i) => (
            <DemoCard key={demo.id} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

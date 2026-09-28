'use client'

import { useSyncExternalStore } from 'react'

/* ============================================================
   COMPTE À REBOURS — clôture de l'édition annuelle
   Date limite : 24 décembre 2026, 23 h 59 (heure d'Afrique de
   l'Ouest / Paris, UTC+1 en décembre).
   Abonnement à l'horloge via useSyncExternalStore :
   - rendu serveur / hydratation neutres (« -- »),
   - aucune écriture d'état synchrone dans un effet.
   ============================================================ */

const DEADLINE = new Date('2026-12-24T23:59:59+01:00').getTime()

type Remaining = { d: number; h: number; m: number; s: number }

function getRemaining(): Remaining {
  const ms = Math.max(0, DEADLINE - Date.now())
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor(ms / 3_600_000) % 24,
    m: Math.floor(ms / 60_000) % 60,
    s: Math.floor(ms / 1_000) % 60,
  }
}

/* getSnapshot doit renvoyer une référence stable tant que la seconde
   n'a pas changé (exigence de useSyncExternalStore) → cache par seconde. */
let cached: { second: number; value: Remaining } | null = null

function getSnapshot(): Remaining {
  const sec = Math.floor(Date.now() / 1000)
  if (!cached || cached.second !== sec) {
    cached = { second: sec, value: getRemaining() }
  }
  return cached.value
}

function subscribe(onChange: () => void): () => void {
  const id = setInterval(onChange, 1000)
  return () => clearInterval(id)
}

const pad = (n: number) => String(n).padStart(2, '0')

export function Countdown() {
  const t = useSyncExternalStore(subscribe, getSnapshot, () => null)

  const cells: Array<{ v: string; l: string }> = t
    ? [
        { v: String(t.d), l: 'jours' },
        { v: pad(t.h), l: 'heures' },
        { v: pad(t.m), l: 'min' },
        { v: pad(t.s), l: 'sec' },
      ]
    : [
        { v: '--', l: 'jours' },
        { v: '--', l: 'heures' },
        { v: '--', l: 'min' },
        { v: '--', l: 'sec' },
      ]

  return (
    <div
      className="grid grid-cols-4 gap-2 sm:gap-2.5"
      role="timer"
      aria-label="Compte à rebours avant la clôture de l'offre annuelle"
    >
      {cells.map((cell) => (
        <div
          key={cell.l}
          className="rounded-lg border border-foreground/15 bg-background/60 px-1 py-2 text-center sm:py-2.5"
        >
          <p className="font-mono text-lg leading-none tabular-nums text-foreground sm:text-xl">
            {cell.v}
          </p>
          <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-muted-foreground sm:text-[9px]">
            {cell.l}
          </p>
        </div>
      ))}
    </div>
  )
}

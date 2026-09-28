# 📹 Dossier des vidéos de démonstration

Dépose ici tes 3 vidéos verticales (format **9:16** — Shorts / Reels / TikTok).

## Correspondance fichiers ↔ cartes de la landing

| Fichier à déposer | Carte | Titre affiché |
| ----------------- | ----- | ------------- |
| `notebooklm.mp4`  | 01 (Réviser) | Tes PDF de cours, résumés en 10 secondes |
| `flow.mp4`        | 02 (Créer)  | Les vidéos IA que tu vois sur TikTok |
| `banana.mp4`      | 03 (Vendre)  | Des visuels qui arrêtent le scroll |

## Comment activer une vidéo

1. Dépose le fichier `.mp4` dans ce dossier (`public/videos/`).
2. Ouvre `src/components/landing/video-demos.tsx`.
3. Dans le tableau `demos`, renseigne le champ `src` de la carte concernée :

```ts
{
  id: 'notebooklm',
  // ...
  src: '/videos/notebooklm.mp4',          // ← chemin de la vidéo
  poster: '/videos/notebooklm-poster.jpg', // (optionnel) image de couverture
}
```

4. Sauvegarde : le placeholder est automatiquement remplacé par ta vidéo
   (contrôles natifs, coins arrondis et effets de survol conservés).

## Conseils d'encodage

- Résolution recommandée : **1080 × 1920** (9:16)
- Codec : H.264, MP4, poids < 8 Mo par vidéo
  (`ffmpeg -i input.mov -vcodec h264 -crf 28 -vf scale=1080:-2 output.mp4`)
- Ajoute un `poster` JPEG pour un rendu propre avant lecture.

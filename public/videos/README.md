# 📹 Vidéos de démonstration

Ce dossier accueille les **5 vidéos verticales** (format **9:16** — Shorts / Reels / TikTok) affichées dans la section « Les démos » de la landing page.

Tant qu'une vidéo n'est pas déposée, la landing affiche un **placeholder soigné** à sa place — tu peux donc mettre le site en ligne sans attendre, puis ajouter les vidéos une par une, quand tu veux.

Tout se configure dans **un seul fichier** : `src/components/landing/video-demos.tsx` (tableau `demos`, tout en haut du fichier).

## Les 5 emplacements

| # | Fichier à déposer | Outil | Badge | Titre affiché |
| --- | --- | --- | --- | --- |
| 01 | `notebooklm.mp4` | NotebookLM | Réviser | Tes PDF de cours, résumés en 10 secondes |
| 02 | `flow.mp4` | Google Flow | Créer | Les vidéos IA que tu vois sur TikTok |
| 03 | `banana.mp4` | Nano Banana | Vendre | Des visuels qui arrêtent le scroll |
| 04 | `deepresearch.mp4` | Deep Research | Rédiger | Un dossier de recherche sourcé, pendant que tu dînes |
| 05 | `gemini.mp4` | Gemini | Au quotidien | Le ChatGPT que tu connais, en bien plus puissant |

## Comment ajouter une vidéo

1. **Dépose le fichier** `.mp4` dans ce dossier, nommé comme dans le tableau ci-dessus.
   Exemple : `public/videos/notebooklm.mp4`
2. **Ouvre `src/components/landing/video-demos.tsx`** et, dans le tableau `demos`, renseigne le champ `src` de la carte concernée :

   ```ts
   {
     id: 'notebooklm',
     // ...
     src: '/videos/notebooklm.mp4',            // ← chemin de la vidéo (indispensable)
     poster: '/videos/notebooklm-poster.jpg',  // (optionnel) image de couverture avant lecture
   }
   ```

3. **Sauvegarde** : le placeholder est automatiquement remplacé par ta vidéo (contrôles natifs, coins arrondis et effets de survol conservés).

> 💡 Le nom du fichier peut être différent du tableau (ex. `revision.mp4`) : adapte simplement le chemin dans `src: '/videos/revision.mp4'`.

## Comment modifier le titre et la description d'une vidéo

Les textes affichés **sous chaque vidéo** se modifient dans le même tableau `demos` de `src/components/landing/video-demos.tsx` :

```ts
{
  id: 'notebooklm',
  tool: 'NotebookLM',         // petit label au-dessus du titre
  situation: 'Réviser',       // badge en haut à droite de la vidéo
  title: 'Tes PDF de cours, résumés en 10 secondes',   // ← LE TITRE (grand, en serif)
  description:
    'NotebookLM lit tes documents et te rend résumés, flashcards, quiz et même un podcast audio. Tu révises en marchant.',   // ← LA DESCRIPTION
  duration: '0:45',           // durée affichée sur le placeholder
}
```

- **`title`** : une phrase courte et concrète, centrée sur le résultat pour l'étudiant (« Tes PDF… résumés en 10 secondes » plutôt que « Fonctionnalité de résumé »).
- **`description`** : une à deux phrases, action + bénéfice concret. Reste sous ~180 caractères pour que le texte ne devienne pas trop long sur mobile.
- **`tool`** : nom de l'outil, affiché en tout petit au-dessus du titre.
- **`situation`** : le mot du badge en haut à droite de la vidéo (Réviser, Créer, Vendre, Rédiger, Au quotidien…).
- **`duration`** : ajuste-la à la durée réelle de la vidéo une fois déposée.

## Conseils d'encodage

- Résolution recommandée : **1080 × 1920** (9:16)
- Codec : H.264, MP4, poids < 8 Mo par vidéo
  (`ffmpeg -i input.mov -vcodec h264 -crf 28 -vf scale=1080:-2 output.mp4`)
- Ajoute un `poster` JPEG pour un rendu propre avant la première lecture.

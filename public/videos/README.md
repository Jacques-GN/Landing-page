# 📹 Vidéos de démonstration

Ce dossier accueille les **5 vidéos verticales** (format **9:16** — Shorts / Reels / TikTok) affichées dans la section « Les démos » de la landing page. **Les 5 emplacements sont pourvus.**

Tant qu'une vidéo n'est pas déposée, la landing affiche un **placeholder soigné** à sa place — pratique si tu veux en remplacer une plus tard.

Tout se configure dans **un seul fichier** : `src/components/landing/video-demos.tsx` (tableau `demos`, tout en haut du fichier). L'ordre du tableau = l'ordre d'affichage, **du plus pertinent au moins pertinent** (l'ordre actuel est pensé pour capter l'attention : révision → ChatGPT → argent → création).

## Les 5 emplacements

| # | Fichier | Outil | Badge | Titre affiché |
| --- | --- | --- | --- | --- |
| 01 | `reviser.mp4` | Gemini | Réviser | Examen demain ? Ton PDF devient fiches et quiz |
| 02 | `gemini.mp4` | Gemini 2.5 Pro | Au quotidien | Le ChatGPT que tu connais, en bien plus puissant |
| 03 | `banana.mp4` | Nano Banana | Vendre | Des visuels qui arrêtent le scroll |
| 04 | `veo.mp4` | Veo | Imaginer | Une pub animée complète, à partir d'un simple texte |
| 05 | `flow.mp4` | Google Flow | Créer | Les vidéos IA que tu vois sur TikTok |

## Comment remplacer ou ajouter une vidéo

1. **Dépose le fichier** `.mp4` dans ce dossier, nommé comme dans le tableau ci-dessus.
   Exemple : `public/videos/reviser.mp4`
2. **Ouvre `src/components/landing/video-demos.tsx`** et, dans le tableau `demos`, renseigne le champ `src` de la carte concernée :

   ```ts
   {
     id: 'reviser',
     // ...
     src: '/videos/reviser.mp4',           // ← chemin de la vidéo (indispensable)
     poster: '/videos/reviser-poster.jpg', // (optionnel) image de couverture avant lecture
   }
   ```

3. **Sauvegarde** : le placeholder est automatiquement remplacé par ta vidéo (contrôles natifs, coins arrondis et effets de survol conservés).

> 💡 Le nom du fichier peut être différent du tableau (ex. `revision.mp4`) : adapte simplement le chemin dans `src: '/videos/revision.mp4'`.

## Comment modifier le titre et la description d'une vidéo

Les textes affichés **sous chaque vidéo** se modifient dans le même tableau `demos` de `src/components/landing/video-demos.tsx` :

```ts
{
  id: 'reviser',
  tool: 'Gemini',            // petit label au-dessus du titre
  situation: 'Réviser',      // badge en haut à droite de la vidéo
  title: 'Examen demain ? Ton PDF devient fiches et quiz',   // ← LE TITRE (grand, en serif)
  description:
    'La veille de son partiel, une étudiante glisse son PDF de cours dans Gemini : résumé en points clés, quiz pour se tester. Zéro surligneur, zéro nuit blanche.',   // ← LA DESCRIPTION
  duration: '0:51',          // durée affichée sur le placeholder
}
```

- **`title`** : une phrase courte et concrète, centrée sur le résultat pour l'étudiant (« Tes PDF… résumés en 10 secondes » plutôt que « Fonctionnalité de résumé »).
- **`description`** : une à deux phrases, action + bénéfice concret. Reste sous ~180 caractères pour que le texte ne devienne pas trop long sur mobile.
- **`tool`** : nom de l'outil, affiché en tout petit au-dessus du titre.
- **`situation`** : le mot du badge en haut à droite de la vidéo (Réviser, Au quotidien, Vendre, Imaginer, Créer…).
- **`duration`** : ajuste-la à la durée réelle de la vidéo une fois déposée.

## Poids des vidéos : les vraies limites et la solution

**Pourquoi viser ~8 Mo ?** Ce n'est pas une limite du site, c'est une **recommandation pour tes visiteurs** :

- Les vidéos démarrent **automatiquement** pendant le scroll. Un visiteur qui parcourt la page télécharge chaque vidéo : 6 vidéos × 30 Mo = **180 Mo de data mobile** pour une seule visite. Sur forfait limité, personne ne reste.
- Une vidéo de 8 Mo se lance en ~2 s en 4G ; à 30 Mo, elle met 8–10 s à démarrer — le visiteur a déjà scrollé.

**La limite qui bloque réellement : GitHub.** L'upload via le site web de GitHub **refuse les fichiers de plus de 25 Mo**. C'est pour ça que des vidéos de 30 Mo ne passent pas. (En ligne de commande git, la limite est 100 Mo — mais le dépôt devient très lourd, à éviter aussi.)

**La solution : compresser.** Une vidéo 9:16 destinée à un écran de téléphone n'a pas besoin de 30 Mo — la différence est invisible à l'œil une fois compressée proprement :

```bash
# Compresse n'importe quelle vidéo vers ~5–8 Mo (qualité excellente sur mobile)
ffmpeg -i TA_VIDEO.mp4 -vcodec libx264 -crf 30 -vf scale=720:-2 -acodec aac -b:a 96k -movflags +faststart sortie.mp4
```

- `-crf 30` : niveau de compression (28 = très haute qualité, 30 = parfait pour mobile, 32 = plus petit encore)
- `scale=720:-2` : 720 px de large suffit largement sur téléphone
- `+faststart` : lecture instantanée (index en tête de fichier)

**Ou plus simple : envoie-moi les vidéos directement dans la conversation** — je les compresse, les optimise et les branche à ta place.

> ⚠️ **Ne renomme jamais un fichier vidéo via le site web de GitHub** (bouton crayon) : ça détruit le contenu binaire. Uploade le fichier sous son bon nom directement, ou passe par moi.

## Lecture automatique au scroll

**Rien à configurer — c'est automatique.** Chaque vidéo branchée (champ `src` renseigné) se comporte comme sur TikTok :

- Elle **démarre toute seule (en muet, en boucle)** dès qu'elle entre dans la zone centrale de l'écran pendant le scroll.
- Elle **se met en pause** dès qu'elle sort de l'écran — pas de data gaspillée sur mobile.
- Le visiteur peut **activer le son** ou avancer dans la vidéo via les contrôles natifs.
- S'il met lui-même une vidéo en pause, **elle ne redémarre pas toute seule** au prochain passage (son choix est respecté).
- Les appareils configurés en « animation réduite » (accessibilité) ne déclenchent pas d'auto-lecture ; le bouton play reste disponible.

## Conseils d'encodage

- Résolution recommandée : **1080 × 1920** ou **720 × 1280** (9:16)
- Codec : H.264, MP4, poids visé **~8 Mo max par vidéo** (voir la section « Poids des vidéos » au-dessus)
  (`ffmpeg -i input.mov -vcodec h264 -crf 28 -vf scale=1080:-2 output.mp4`)
- Ajoute un `poster` JPEG pour un rendu propre avant la première lecture.

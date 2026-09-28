'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Je suis déjà sur ChatGPT gratuit. Pourquoi je paierais pour ça ?',
    answer:
      'Comme presque tout le monde — 9 étudiants sur 10 s’aident déjà de l’IA. Mais la version gratuite tombe en panne au pire moment : le fameux « quota atteint » en pleine révision. Et surtout, elle ne connaît rien de tes cours. Ici, tu passes à la version payante de Google : Gemini Advanced avec des limites doublées, NotebookLM qui lit tes PDF entiers et t’en fait des fiches, des quiz et même des podcasts, Veo pour les vidéos, 400 Go de stockage. Le tout activé sur ton propre compte, sans carte bancaire, avec un an de suivi. ChatGPT gratuit répond à tout le monde. Ça, c’est à toi.',
  },
  {
    question: 'C\u2019est quoi exactement que je paie ?',
    answer:
      'L\u2019accès complet au forfait Google AI Premium pendant 12 mois : Gemini Advanced avec des limites d\u2019utilisation doublées, la génération vidéo avec Veo dans Flow, NotebookLM pour résumer tes PDF et livres entiers, Gemini intégré dans Gmail et Docs, et 400 Go de stockage cloud. En plus : on active tout avec toi, et on te suit sur WhatsApp pendant toute l\u2019année. Tu paies une seule fois, à l\u2019inscription — plus rien après.',
  },
  {
    question: 'C\u2019est quoi les surprises IA ?',
    answer:
      'Au moins trois bonus, débloqués au fil de l\u2019année pour les membres : les nouveaux outils Google dès leur sortie, des mini-formats pour t\u2019y mettre en 10 minutes, des prompts prêts à l\u2019emploi pour tes études et tes ventes. On ne spoil pas la liste complète — s\u2019inscrire tôt fait partie du jeu.',
  },
  {
    question: 'Le suivi, ça marche concrètement ?',
    answer:
      'Un numéro WhatsApp dédié, pendant 12 mois. Tu bloques sur un outil ? Tu demandes, on répond. Une nouveauté IA sort ? Tu es parmi les premiers à savoir t\u2019en servir. C\u2019est la différence entre acheter un accès et être accompagné — c\u2019est ce qui fait que tu l\u2019utiliseras vraiment.',
  },
  {
    question: 'Vraiment pas besoin de carte bancaire ?',
    answer:
      'Vraiment. L\u2019abonnement officiel se paie en dollars avec une carte Visa ou Mastercard internationale. Ici, la page de paiement accepte Wave et le Mobile Money depuis ton numéro — et la carte bancaire aussi, si tu en as une, mais elle n\u2019est pas obligatoire. Tu paies en FCFA, une seule fois, et ton code de paiement t\u2019est envoyé par e-mail.',
  },
  {
    question: 'Comment se passe l\u2019activation, concrètement ?',
    answer:
      'Trois temps : tu paies sur la page sécurisée, tu reçois ton code de paiement par e-mail, puis tu me l\u2019envoies sur WhatsApp — on active ton compte ensemble, étape par étape. Ton suivi de 12 mois démarre le jour même. Ensuite, tu te connectes avec ton compte Google et tout est déjà débloqué.',
  },
  {
    question: 'Pourquoi la date du 24 décembre ?',
    answer:
      'C\u2019est la clôture de cette édition annuelle : après le 24 décembre à 23 h 59, plus d\u2019activation à ce prix — la campagne ferme et ne reviendra qu\u2019à la prochaine édition, à des conditions différentes. À noter : la date limite concerne l\u2019achat, pas l\u2019usage. Ton accès reste actif 12 mois complets à partir de ton activation, quoi qu\u2019il arrive. Et comme le suivi est personnel, les places peuvent même fermer avant le 24 décembre.',
  },
  {
    question: 'Mes données et mon compte sont-ils en sécurité ?',
    answer:
      'Oui. Ton accès fonctionne sur un compte Google standard : tes conversations, tes fichiers et tes photos restent sous la protection des conditions officielles de Google, pas les nôtres. Nous ne voyons ni ne stockons tes données personnelles — on s\u2019occupe uniquement de l\u2019activation.',
  },
  {
    question: 'Le compte est-il partagé avec d\u2019autres personnes ?',
    answer:
      'Non — un compte, une personne. Ton accès est activé sur ton propre compte Google, à ton nom : tes conversations, tes fichiers et ton stockage sont les tiens, et personne d\u2019autre ne se connecte dessus. Pas de compte revendu à plusieurs, pas de profil partagé entre clients : tu as le tien, tout simplement. C\u2019est aussi pour ça que l\u2019activation se fait avec toi, étape par étape.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow flex items-center gap-3">
            <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
            Chapitre 04 — Questions fréquentes
          </p>
          <h2
            id="faq-title"
            className="font-display mt-5 text-3xl font-light leading-tight tracking-[-0.015em] text-foreground sm:text-4xl"
          >
            Ce qu&apos;on nous demande
            <br />
            <em className="italic text-accent">avant de se lancer</em>.
          </h2>
        </motion.div>

        {/* Accordéon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 border-t border-border"
        >
          <Accordion type="single" collapsible className="divide-y divide-border">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`} className="border-0">
                <AccordionTrigger className="py-5 text-left font-display text-base font-normal text-foreground hover:no-underline hover:text-accent sm:text-lg [&[data-state=open]>svg]:text-accent [&>svg]:h-4 [&>svg]:w-4">
                  <span className="pr-4 leading-snug">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

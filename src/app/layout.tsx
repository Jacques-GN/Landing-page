import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlusHaut — De meilleures notes avec l'IA : Gemini Advanced, NotebookLM, Veo",
  description:
    "Tes PDF de cours résumés en fiches et podcasts, Gemini Advanced avec limites doublées, Veo pour les vidéos — pendant 12 mois, activé avec toi, suivi toute l'année. Paiement unique en FCFA, sans carte bancaire. Clôture le 24 décembre.",
  keywords: [
    "Gemini Advanced FCFA",
    "NotebookLM étudiants",
    "réviser avec l'IA",
    "résumé PDF cours",
    "accès Gemini Afrique",
    "Veo génération vidéo",
    "Mobile Money IA",
    "sans carte bancaire",
    "offre annuelle IA étudiant",
  ],
  authors: [{ name: "PlusHaut" }],
  openGraph: {
    title: "PlusHaut — De meilleures notes, sans y passer tes nuits",
    description:
      "NotebookLM transforme tes PDF en fiches et podcasts, Gemini Advanced avec limites 2x, Veo pour les vidéos — 12 mois, activation accompagnée et suivi. Paiement unique en FCFA, clôture le 24 décembre.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlusHaut — De meilleures notes, sans y passer tes nuits",
    description:
      "NotebookLM transforme tes PDF en fiches et podcasts, Gemini Advanced avec limites 2x, Veo pour les vidéos — 12 mois, activation accompagnée et suivi. Paiement unique en FCFA, clôture le 24 décembre.",
  },
};

export const viewport: Viewport = {
  themeColor: "#17150f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} font-sans antialiased bg-background text-foreground overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}

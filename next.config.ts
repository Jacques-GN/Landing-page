import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès au serveur de dev depuis les domaines de prévisualisation.
  allowedDevOrigins: ["https://*.space-z.ai"],
  // Masque l'indicateur flottant de Next.js en dev (pollution visuelle).
  devIndicators: false,
};

export default nextConfig;

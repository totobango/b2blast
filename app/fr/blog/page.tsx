import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog", description: "Insights paid ads B2B pour les marchés Français ↔ Anglais." };

export default function BlogFR() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-surface">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">Blog</h1>
        <p className="mt-4 text-lg text-gray-400">Bientôt disponible — Insights ads B2B pour les entreprises qui se développent entre les marchés français et anglais.</p>
      </div>
    </section>
  );
}
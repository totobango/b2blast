"use client";

import { useState } from "react";

const products = [
  {
    category: "Formation",
    title: "LinkedIn Ads pour SaaS Français à l'International",
    description: "Playbook étape par étape pour lancer et scaler des campagnes LinkedIn sur les marchés FR ↔ EN.",
    price: "€149",
  },
  {
    category: "Formation",
    title: "Google Ads B2B : Le Playbook Marchés Bilingues",
    description: "Stratégie mots-clés, ad copy et enchères pour le search B2B dans deux langues.",
    price: "€99",
  },
  {
    category: "Templates",
    title: "Templates Ad Copy B2B FR ↔ EN",
    description: "50+ templates d'ad copy éprouvés pour LinkedIn & Google Ads, écrits nativement dans les deux langues.",
    price: "€49",
  },
  {
    category: "Templates",
    title: "Frameworks de Ciblage Audience",
    description: "Frameworks de ciblage prêts à l'emploi pour LinkedIn, Google & Microsoft Ads en B2B.",
    price: "€39",
  },
  {
    category: "Bundle",
    title: "La Toolkit B2B Ads International",
    description: "Toutes les formations + tous les templates. Tout pour gérer vos ads B2B bilingues en interne.",
    price: "€299",
  },
];

export default function ResourcesFR() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) {
      console.log("📬 Resources waitlist:", email);
      setSubmitted(true);
    }
  }

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-light mb-6">
            <span className="inline-block w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            Bientôt disponible
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Formations & Templates
          </h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Tout ce qu'il faut pour gérer des ads B2B bilingues performantes — que vous le fassiez en interne ou pour monter en compétence votre équipe.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <div key={product.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 opacity-80">
              <span className="absolute top-4 right-4 rounded-full bg-brand/10 border border-brand/30 px-3 py-0.5 text-xs font-medium text-brand-light">
                Bientôt
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">{product.category}</span>
              <h3 className="font-heading text-lg font-semibold text-white mt-2 mb-2 pr-12">{product.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{product.description}</p>
              <p className="font-heading text-2xl font-bold text-brand">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-brand/10 border border-brand/20 px-8 py-14 sm:px-16 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Soyez prévenu au lancement
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-400">
            Soyez le premier à accéder à nos formations et templates. Pas de spam — juste un email quand c'est prêt.
          </p>

          {submitted ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand/20 border border-brand/30 px-6 py-3">
              <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span className="text-sm font-medium text-white">Vous êtes sur la liste !</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" required className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors" />
              <button type="submit" className="btn-magnetic rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30">Me prévenir</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

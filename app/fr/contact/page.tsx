"use client";

import { useState } from "react";
import { getContent } from "@/lib/content";
import type { FormEvent } from "react";

export default function ContactFR() {
  const t = getContent("fr");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) { setStatus("success"); form.reset(); } else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">{t.contact.title}</h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.name}</label>
                  <input id="name" name="name" type="text" required autoComplete="name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand transition-colors" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.email}</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand transition-colors" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.company}</label>
                  <input id="company" name="company" type="text" autoComplete="organization" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand transition-colors" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.budget}</label>
                  <select id="budget" name="budget" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand transition-colors">
                    <option value="" className="bg-black">—</option>
                    {t.contact.form.budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-black">{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.message}</label>
                  <textarea id="message" name="message" rows={4} required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand transition-colors resize-none" />
                </div>
                <button type="submit" disabled={status === "loading"} className="btn-magnetic w-full rounded-lg bg-brand px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-light disabled:opacity-50 transition-all">
                  {status === "loading" ? "..." : t.contact.form.submit}
                </button>
                {status === "success" && <p className="text-green-400 text-sm font-medium">{t.contact.form.success}</p>}
                {status === "error" && <p className="text-red-400 text-sm">Une erreur est survenue. Contactez-moi directement à thomas@b2blast.com</p>}
              </form>
            </div>

            <div className="space-y-8">
              <div id="calendly" className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="font-heading text-lg font-semibold text-white mb-3">{t.contact.calendly}</h3>
                <p className="text-sm text-gray-400 mb-6">Appel stratégie gratuit de 30 minutes. Sans engagement.</p>
                <a href="https://calendly.com/b2blast" target="_blank" rel="noopener noreferrer" className="btn-magnetic block w-full rounded-lg border-2 border-brand bg-brand/10 px-6 py-4 text-center text-base font-semibold text-brand hover:bg-brand hover:text-white transition-all">
                  Réserver sur Calendly →
                </a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="font-heading text-base font-semibold text-white mb-4">Ou par email</h3>
                <a href="mailto:thomas@b2blast.com" className="text-brand hover:text-brand-light transition-colors font-medium">thomas@b2blast.com</a>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-500">Temps de réponse habituel : moins de 24h.</p>
                  <p className="text-sm text-gray-500 mt-1">Langues : Français, English.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

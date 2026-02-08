"use client";

import { useState } from "react";
import { getContent } from "@/lib/content";

export default function ContactEN() {
  const t = getContent("en");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (res.ok) setSubmitted(true);
    } catch { /* silent */ } finally { setLoading(false); }
  }

  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-black">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">{t.contact.title}</h1>
          <p className="mt-3 text-lg text-gray-400">{t.contact.subtitle}</p>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-brand/10 border border-brand/30 p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/20 mb-4">
              <svg className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            </div>
            <p className="font-heading text-lg font-semibold text-white">{t.contact.form.success}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.name}</label>
              <input type="text" id="name" name="name" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.email}</label>
              <input type="email" id="email" name="email" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.company}</label>
              <input type="text" id="company" name="company" required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">{t.contact.form.message}</label>
              <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors resize-none" />
            </div>
            <button type="submit" disabled={loading} className="btn-magnetic w-full rounded-lg bg-brand px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand-light transition-all disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? "..." : t.contact.form.submit}
            </button>
          </form>
        )}

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <a href="mailto:thomas@b2blast.com" className="text-sm font-medium text-brand hover:text-brand-light transition-colors">thomas@b2blast.com</a>
        </div>
      </div>
    </section>
  );
}

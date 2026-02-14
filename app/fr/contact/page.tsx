import { getContent } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact", description: "Contactez-nous pour votre stratégie paid ads B2B. Plan de croissance gratuit et appel stratégie 30 min disponibles." };

export default function ContactFR() {
  const t = getContent("fr");

  return (
    <>
      <section className="pt-32 pb-10 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading fluid-h1 font-bold text-cream">{t.contact.title}</h1>
            <p className="mt-5 text-xl text-gray-400 leading-relaxed">{t.contact.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <ScrollReveal className="lg:col-span-3">
              <div className=" rounded-2xl bg-cream p-8 sm:p-10">
                <form action="/api/contact" method="POST" className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-surface mb-1.5">{t.contact.form.name}</label>
                      <input id="name" name="name" type="text" required className="w-full rounded-xl border border-surface/15 bg-white px-4 py-3 text-sm text-surface placeholder-surface/40 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-surface mb-1.5">{t.contact.form.email}</label>
                      <input id="email" name="email" type="email" required className="w-full rounded-xl border border-surface/15 bg-white px-4 py-3 text-sm text-surface placeholder-surface/40 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-surface mb-1.5">{t.contact.form.company}</label>
                      <input id="company" name="company" type="text" className="w-full rounded-xl border border-surface/15 bg-white px-4 py-3 text-sm text-surface placeholder-surface/40 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-surface mb-1.5">{t.contact.form.budget}</label>
                      <select id="budget" name="budget" className="w-full rounded-xl border border-surface/15 bg-white px-4 py-3 text-sm text-surface focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all appearance-none">
                        <option value="">—</option>
                        {t.contact.form.budgetOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-surface mb-1.5">{t.contact.form.message}</label>
                    <textarea id="message" name="message" rows={5} required className="w-full rounded-xl border border-surface/15 bg-white px-4 py-3 text-sm text-surface placeholder-surface/40 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none" />
                  </div>
                  <button type="submit" className="btn-magnetic w-full rounded-xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-light transition-colors">
                    {t.contact.form.submit}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} className="lg:col-span-2">
              <div className=" space-y-6">
                <div id="calendly" className="rounded-2xl border border-white/[0.06] bg-surface-light p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-cream">{t.contact.calendly}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-5">Appel stratégie 30 min. Sans engagement.</p>
                  <a href="https://calendly.com/b2blast" target="_blank" rel="noopener noreferrer" className="btn-magnetic block w-full rounded-xl border border-brand/30 bg-brand/10 px-5 py-3.5 text-center text-sm font-semibold text-brand hover:bg-brand/20 transition-all">
                    Réserver un appel →
                  </a>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-surface-light p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-cream">Email</h3>
                  </div>
                  <a href="mailto:thomas@b2blast.com" className="text-brand hover:text-brand-light transition-colors font-medium">thomas@b2blast.com</a>
                  <p className="mt-3 text-xs text-gray-500">Réponse sous 24h. Français & Anglais.</p>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-surface-light p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-cream">Localisation</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Dublin, Irlande 🇮🇪</p>
                  <p className="text-gray-500 text-xs mt-1">100% remote — clients en Europe & US</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
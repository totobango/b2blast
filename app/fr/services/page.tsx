import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { ServicesSchema, ServicesFAQSchema } from "@/components/StructuredData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services", description: "Gestion paid ads B2B sur LinkedIn, Google, Microsoft & Reddit. Expertise bilingue Français ↔ Anglais. Packages à partir de €2K/mois." };

export default function ServicesFR() {
  const t = getContent("fr");
  return (
    <>
      <ServicesSchema />
      <ServicesFAQSchema locale="fr" />

      <section className="pt-32 pb-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading fluid-h1 font-bold text-cream">{t.services.title}</h1>
            <p className="mt-6 text-xl text-gray-400 leading-relaxed">{t.services.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><h2 className="font-heading fluid-h2 font-bold text-surface mb-12">{t.services.platformsTitle}</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.platforms.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 80}>
                <div className="rounded-2xl border border-surface/10 bg-white/60 p-6 h-full hover:border-brand/30 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src={`/images/platforms/${p.icon}.png`} alt={p.name} width={28} height={28} className="h-7 w-7 rounded object-contain" />
                    <h3 className="font-heading text-lg font-semibold text-surface">{p.name}</h3>
                  </div>
                  <p className="text-sm text-surface/60 leading-relaxed">{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><h2 className="font-heading fluid-h2 font-bold text-cream mb-4">{t.services.pricingTitle}</h2></ScrollReveal>
          <ScrollReveal><p className="text-lg text-gray-400 mb-16 max-w-2xl">{t.services.pricingSubtitle}</p></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 120}>
                <div className={`relative rounded-2xl p-8 flex flex-col h-full ${pkg.popular ? "bg-brand text-white ring-1 ring-brand-light shadow-2xl shadow-brand/20" : "bg-surface-light border border-white/[0.06]"}`}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cream px-4 py-1 text-xs font-bold text-brand shadow-lg z-10">Populaire</span>}
                  <h3 className="font-heading text-xl font-semibold text-cream">{pkg.name}</h3>
                  <p className="mt-4"><span className={`font-heading text-4xl font-bold ${pkg.popular ? "text-white" : "text-gradient-brand"}`}>{pkg.price}</span><span className={`text-sm ${pkg.popular ? "text-white/60" : "text-gray-500"}`}>{pkg.period}</span></p>
                  <p className={`mt-2 text-sm font-medium ${pkg.popular ? "text-white/80" : "text-brand"}`}>{pkg.outcome}</p>
                  <ul className="mt-8 space-y-3 flex-1">{pkg.features.map((f) => (<li key={f} className="flex items-start gap-2.5"><svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.popular ? "text-white" : "text-brand"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><span className={`text-sm ${pkg.popular ? "text-white/80" : "text-gray-400"}`}>{f}</span></li>))}</ul>
                  <Link href="/fr/contact" className={`btn-magnetic mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${pkg.popular ? "bg-cream text-brand hover:bg-white" : "bg-brand text-white hover:bg-brand-light"}`}>{pkg.cta}</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><h2 className="font-heading fluid-h2 font-bold text-surface mb-12">{t.services.includesTitle}</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.includes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}><div className="flex items-start gap-3 p-5 rounded-xl bg-white/60 border border-surface/10"><svg className="mt-0.5 h-5 w-5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><span className="text-sm text-surface/80">{item}</span></div></ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><h2 className="font-heading fluid-h2 font-bold text-cream mb-12">{t.services.clientNeedsTitle}</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {t.services.clientNeeds.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}><div className="flex items-start gap-4 rounded-2xl bg-surface-light border border-white/[0.06] p-6 card-hover"><span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-heading font-bold">{i + 1}</span><p className="text-gray-400 leading-relaxed">{item}</p></div></ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><h2 className="font-heading fluid-h2 font-bold text-surface mb-14">{t.services.faqTitle}</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {t.services.faq.map((item, i) => (
              <ScrollReveal key={i} delay={i * 50}><div className="rounded-2xl border border-surface/10 bg-white/60 p-6 h-full hover:border-brand/30 transition-colors"><h3 className="font-heading text-base font-semibold text-surface mb-3">{item.question}</h3><p className="text-sm text-surface/60 leading-relaxed">{item.answer}</p></div></ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading fluid-h2 font-bold text-cream">{t.cta.title}</h2>
            <p className="mt-4 text-lg text-gray-400">{t.cta.subtitle}</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/fr/contact" className="btn-magnetic inline-flex items-center rounded-xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25">{t.cta.button}</Link>
              <Link href="/fr/contact#calendly" className="inline-flex items-center rounded-xl border border-white/10 px-8 py-4 text-base font-semibold text-gray-300 hover:border-brand/40 hover:text-white transition-all">{t.cta.buttonSecondary}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
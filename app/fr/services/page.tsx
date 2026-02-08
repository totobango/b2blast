import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { ServicesSchema, ServicesFAQSchema } from "@/components/StructuredData";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Services", description: "Gestion paid ads B2B sur LinkedIn, Google, Microsoft & Reddit. Expertise bilingue Français ↔ Anglais. Packages à partir de €2K/mois." };

export default function ServicesFR() {
  const t = getContent("fr");

  return (
    <>
      <ServicesSchema locale="fr" />
      <ServicesFAQSchema locale="fr" />

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">{t.services.title}</h1>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">{t.services.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="pb-16 sm:pb-20 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.services.platforms.map((p) => (
              <div key={p.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 card-hover h-full">
                <div className="flex items-center gap-3 mb-2">
                  <Image src={`/images/platforms/${p.icon}.png`} alt={`${p.name} logo`} width={24} height={24} className="h-6 w-6 rounded object-contain" />
                  <h3 className="font-heading text-lg font-semibold text-white">{p.name}</h3>
                </div>
                <p className="text-sm text-gray-500">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20 bg-black border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.packages.map((pkg) => (
              <div key={pkg.name} className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${pkg.popular ? "bg-brand text-white ring-2 ring-brand-light shadow-xl shadow-brand/20" : "bg-white/[0.03] border border-white/10"}`}>
                {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-brand z-10">Le + populaire</span>}
                <h3 className="font-heading text-lg font-semibold text-white">{pkg.name}</h3>
                <p className="mt-3"><span className={`font-heading text-3xl font-bold ${pkg.popular ? "text-white" : "text-brand"}`}>{pkg.price}</span><span className={`text-sm ${pkg.popular ? "text-white/70" : "text-gray-500"}`}>{pkg.period}</span></p>
                <p className={`mt-2 text-sm font-medium ${pkg.popular ? "text-white/80" : "text-brand-light"}`}>{pkg.outcome}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.popular ? "text-white" : "text-brand"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                      <span className={`text-sm ${pkg.popular ? "text-white/80" : "text-gray-400"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/fr/contact" className={`btn-magnetic mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold ${pkg.popular ? "bg-white text-brand hover:bg-gray-100" : "bg-brand text-white hover:bg-brand-light"}`}>{pkg.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-16 sm:py-20 bg-black border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">{t.services.includes.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.services.includes.items.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-5 h-full">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                <span className="text-sm text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we need from you */}
      <section className="py-16 sm:py-20 bg-black border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">{t.services.clientNeeds.title}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.services.clientNeeds.items.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-5">
                <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
                <span className="text-sm text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="py-16 sm:py-20 bg-black border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">{t.services.faq.title}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {t.services.faq.items.map((item, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6 h-full">
                <h3 className="font-heading text-base font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand/10 border border-brand/20 px-8 py-16 sm:px-16 text-center">
            <h2 className="font-heading text-3xl font-bold text-white">{t.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">{t.cta.subtitle}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/fr/contact" className="btn-magnetic inline-flex items-center rounded-lg bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30">{t.cta.button}</Link>
              <Link href="/fr/contact#calendly" className="text-sm text-gray-400 hover:text-brand transition-colors">{t.cta.buttonSecondary}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

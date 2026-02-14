import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { FAQSchema } from "@/components/StructuredData";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedStat from "@/components/ui/AnimatedStat";

export default function HomeEN() {
  const t = getContent("en");

  return (
    <>
      <FAQSchema locale="en" />

      {/* ========== HERO — Editorial, high-contrast ========== */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-surface">
        {/* Ambient glows — orange instead of violet */}
        <div className="absolute top-20 right-[5%] w-[500px] h-[500px] bg-brand/8 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] animate-float-slow" />
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="hero-animate hero-delay-1 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-light mb-8">
              <span className="inline-block w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
              B2B Only — French ↔ English
            </div>

            {/* H1 — Serif, editorial, fluid */}
            <h1 className="hero-animate hero-delay-2 font-heading fluid-h1 font-bold text-cream leading-[1.05]">
              Your ads work at home.<br />
              <span className="text-gradient-brand">They fail abroad.</span>
            </h1>

            <p className="hero-animate hero-delay-3 mt-8 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Wrong tone, wrong targeting, wrong cultural signals — money wasted. I fix that. Native bilingual French ↔ English. Ex-LinkedIn, ex-Google.
            </p>

            <p className="hero-animate hero-delay-4 mt-4 text-base text-brand font-medium tracking-wide">
              LinkedIn · Google · Microsoft · Reddit Ads
            </p>

            {/* Dual CTAs */}
            <div className="hero-animate hero-delay-5 mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/en/contact" className="btn-magnetic inline-flex items-center justify-center rounded-xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25">
                {t.hero.cta}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link href="/en/contact#calendly" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-8 py-4 text-base font-semibold text-gray-300 hover:border-brand/40 hover:text-white transition-all">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="hero-animate hero-delay-6 mt-24 pt-8 border-t border-white/[0.06]">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-600 font-medium mb-5">{t.trust.label}</p>
            <div className="flex flex-wrap items-center gap-8">
              {t.trust.employers.map((emp) => (
                <Image key={emp.name} src={emp.logo} alt={`${emp.name} logo`} width={32} height={32} className="h-8 w-8 rounded-md object-contain opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== DIVIDER ========== */}
      <div className="divider-animated mx-auto max-w-6xl" />

      {/* ========== PROBLEM — Stacking cards ========== */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <h2 className="font-heading fluid-h2 font-bold text-cream">{t.problem.title}</h2>
            </div>
          </ScrollReveal>

          {/* Stacking cards */}
          <div className="space-y-6">
            {t.problem.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="stacking-card rounded-2xl border border-white/[0.06] bg-surface-light p-8 sm:p-10 card-hover">
                  <div className="flex items-start gap-6">
                    <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand font-heading text-xl font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-cream mb-2">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed max-w-xl">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SOLUTION — Bento grid stats ========== */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-heading fluid-h2 font-bold text-surface">{t.solution.title}</h2>
              <p className="mt-5 text-lg text-surface/60 leading-relaxed">{t.solution.subtitle}</p>
            </div>
          </ScrollReveal>

          {/* Bento Grid Stats */}
          <div className="bento-grid">
            {t.solution.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="scale" className={`${i === 0 ? "col-span-12 md:col-span-7" : i === 1 ? "col-span-12 md:col-span-5" : i === 2 ? "col-span-12 md:col-span-5" : "col-span-12 md:col-span-7"}`}>
                <AnimatedStat value={stat.value} label={stat.label} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS — Timeline with numbers ========== */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-16">
              <h2 className="font-heading fluid-h2 font-bold text-cream">{t.process.title}</h2>
              <p className="mt-4 text-lg text-gray-400">{t.process.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
            {t.process.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="bg-surface p-8 h-full group hover:bg-surface-light transition-colors duration-500">
                  <div className="flex items-baseline gap-3 mb-5">
                    <span className="font-heading text-5xl font-bold text-brand/20 group-hover:text-brand/40 transition-colors">{step.step}</span>
                    <span className="text-xs text-brand font-semibold uppercase tracking-wider">{step.duration}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-cream mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES — Platforms + Pricing ========== */}
      <section className="py-24 sm:py-32 bg-surface border-t border-white/[0.04]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading fluid-h2 font-bold text-cream">{t.services.title}</h2>
              <p className="mt-3 text-lg text-gray-400">{t.services.subtitle}</p>
            </div>
          </ScrollReveal>

          {/* Platform pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {t.services.platforms.map((platform, i) => (
              <ScrollReveal key={platform.name} delay={i * 60}>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-surface-light px-5 py-3 card-hover">
                  <Image src={`/images/platforms/${platform.icon}.png`} alt={`${platform.name} logo`} width={20} height={20} className="h-5 w-5 rounded object-contain" />
                  <div>
                    <span className="font-heading text-sm font-semibold text-cream">{platform.name}</span>
                    <span className="hidden sm:inline text-xs text-gray-500 ml-2">— {platform.description}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 120}>
                <div className={`relative rounded-2xl p-8 flex flex-col h-full ${
                  pkg.popular
                    ? "bg-brand text-white ring-1 ring-brand-light shadow-2xl shadow-brand/20"
                    : "bg-surface-light border border-white/[0.06]"
                }`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cream px-4 py-1 text-xs font-bold text-brand shadow-lg z-10">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-xl font-semibold text-cream">{pkg.name}</h3>
                  <p className="mt-4">
                    <span className={`font-heading text-4xl font-bold ${pkg.popular ? "text-white" : "text-gradient-brand"}`}>{pkg.price}</span>
                    <span className={`text-sm ${pkg.popular ? "text-white/60" : "text-gray-500"}`}>{pkg.period}</span>
                  </p>
                  <p className={`mt-2 text-sm font-medium ${pkg.popular ? "text-white/80" : "text-brand"}`}>{pkg.outcome}</p>

                  <ul className="mt-8 space-y-3 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.popular ? "text-white" : "text-brand"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                        <span className={`text-sm ${pkg.popular ? "text-white/80" : "text-gray-400"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/en/contact" className={`btn-magnetic mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                    pkg.popular ? "bg-cream text-brand hover:bg-white" : "bg-brand text-white hover:bg-brand-light"
                  }`}>{pkg.cta}</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ — Cream section ========== */}
      <section className="py-24 sm:py-32 bg-cream">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <h2 className="font-heading fluid-h2 font-bold text-surface">{t.faq.title}</h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {t.faq.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="rounded-2xl border border-surface/10 bg-white/60 backdrop-blur-sm p-6 h-full hover:border-brand/30 transition-colors duration-300">
                  <h3 className="font-heading text-base font-semibold text-surface mb-3">{item.question}</h3>
                  <p className="text-sm text-surface/60 leading-relaxed">{item.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA — Full impact ========== */}
      <section className="py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand/20 via-surface-light to-surface-light px-8 py-20 sm:px-16 sm:py-28 text-center border border-brand/10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand/15 rounded-full blur-[120px] animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand/8 rounded-full blur-[100px]" />
              <div className="relative">
                <h2 className="font-heading fluid-h2 font-bold text-cream">{t.cta.title}</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400 leading-relaxed">{t.cta.subtitle}</p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/en/contact" className="btn-magnetic inline-flex items-center rounded-xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/25">
                    {t.cta.button}
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                  <Link href="/en/contact#calendly" className="inline-flex items-center rounded-xl border border-white/10 px-8 py-4 text-base font-semibold text-gray-300 hover:border-brand/40 hover:text-white transition-all">
                    {t.cta.buttonSecondary}
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
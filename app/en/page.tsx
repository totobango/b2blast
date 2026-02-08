import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TiltCard from "@/components/ui/TiltCard";
import AnimatedStat from "@/components/ui/AnimatedStat";

export default function HomeEN() {
  const t = getContent("en");

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-10 left-[5%] w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-3xl">
            <div className="hero-animate hero-delay-1 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-light mb-8">
              <span className="inline-block w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
              B2B Only — French ↔ English
            </div>
            <h1 className="hero-animate hero-delay-2 font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.05]">{t.hero.title}</h1>
            <p className="hero-animate hero-delay-3 mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">{t.hero.subtitle}</p>
            <p className="hero-animate hero-delay-4 mt-3 text-base text-brand-light font-medium">{t.hero.description}</p>
            <div className="hero-animate hero-delay-5 mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/en/contact" className="btn-magnetic inline-flex items-center justify-center rounded-lg bg-brand px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30">
                {t.hero.cta}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <Link href="/en/services" className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-7 py-4 text-base font-semibold text-gray-300 hover:border-brand/50 hover:text-white transition-all">{t.hero.ctaSecondary}</Link>
            </div>
          </div>

          {/* Trust bar — employer logos, uniform 32×32 */}
          <div className="hero-animate hero-delay-6 mt-20 pt-8 border-t border-white/5">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium mb-5">{t.trust.label}</p>
            <div className="flex flex-wrap items-center gap-8">
              {t.trust.employers.map((emp) => (
                <Image key={emp.name} src={emp.logo} alt={`${emp.name} logo — previous employer of Thomas Germain`} width={32} height={32} className="h-8 w-8 rounded-md object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM ==================== */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="max-w-2xl mb-14"><h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">{t.problem.title}</h2></div></ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {t.problem.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <TiltCard className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 card-hover h-full" tiltAmount={4}>
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-brand/10 text-brand text-sm font-bold">{i + 1}</span>
                    <div><h3 className="font-heading text-lg font-semibold text-white mb-2">{item.title}</h3><p className="text-gray-400 leading-relaxed">{item.description}</p></div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SOLUTION ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="max-w-2xl mb-14"><h2 className="font-heading text-3xl sm:text-4xl font-bold text-black tracking-tight">{t.solution.title}</h2><p className="mt-4 text-lg text-gray-600 leading-relaxed">{t.solution.subtitle}</p></div></ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.solution.stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 120} direction="scale"><AnimatedStat value={stat.value} label={stat.label} /></ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-24 sm:py-32 bg-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-14"><h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">{t.services.title}</h2><p className="mt-3 text-lg text-gray-400">{t.services.subtitle}</p></div></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {t.services.platforms.map((platform, i) => (
              <ScrollReveal key={platform.name} delay={i * 80}>
                <TiltCard className="rounded-xl border border-white/10 bg-white/[0.03] p-5 card-hover h-full" tiltAmount={5} glare={false}>
                  <div className="flex items-center gap-3 mb-2">
                    <Image src={`/images/platforms/${platform.icon}.png`} alt={`${platform.name} logo`} width={24} height={24} className="h-6 w-6 rounded object-contain" />
                    <h3 className="font-heading font-semibold text-white">{platform.name}</h3>
                  </div>
                  <p className="text-sm text-gray-500">{platform.description}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.services.packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 120}>
                <TiltCard className={`relative rounded-2xl p-6 sm:p-8 h-full ${pkg.popular ? "bg-brand text-white ring-2 ring-brand-light shadow-xl shadow-brand/20" : "bg-white/[0.03] border border-white/10"}`} tiltAmount={3}>
                  {pkg.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-brand shadow-lg">Most Popular</span>}
                  <h3 className="font-heading text-lg font-semibold text-white">{pkg.name}</h3>
                  <p className="mt-3"><span className={`font-heading text-3xl font-bold ${pkg.popular ? "text-white" : "text-brand"}`}>{pkg.price}</span><span className={`text-sm ${pkg.popular ? "text-white/70" : "text-gray-500"}`}>{pkg.period}</span></p>
                  <ul className="mt-6 space-y-3">{pkg.features.map((f) => (<li key={f} className="flex items-start gap-2"><svg className={`mt-0.5 h-4 w-4 flex-shrink-0 ${pkg.popular ? "text-white" : "text-brand"}`} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg><span className={`text-sm ${pkg.popular ? "text-white/80" : "text-gray-400"}`}>{f}</span></li>))}</ul>
                  <Link href="/en/contact" className={`btn-magnetic mt-8 block w-full rounded-lg py-3 text-center text-sm font-semibold transition-all ${pkg.popular ? "bg-white text-brand hover:bg-gray-100" : "bg-brand text-white hover:bg-brand-light"}`}>{pkg.cta}</Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="scale">
            <div className="relative overflow-hidden rounded-3xl bg-black px-8 py-20 sm:px-16 sm:py-24 text-center">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand/20 rounded-full blur-[100px] animate-pulse-glow" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand/10 rounded-full blur-[80px]" />
              <div className="relative">
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">{t.cta.title}</h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400 leading-relaxed">{t.cta.subtitle}</p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/en/contact" className="btn-magnetic inline-flex items-center rounded-lg bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30">{t.cta.button}<svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Link>
                  <a href={`mailto:${t.cta.email}`} className="text-sm text-gray-500 hover:text-brand transition-colors">{t.cta.email}</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

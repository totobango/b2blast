import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Thomas Germain — B2B Ads Expert",
  description: "Native bilingual French/English B2B paid ads expert. Ex-Google, ex-LinkedIn, ex-Pinterest. 6+ years managing B2B campaigns across EMEA. Based in Dublin.",
};

export default function AboutEN() {
  const t = getContent("en");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            {/* Photo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/thomas.jpg"
                alt="Thomas Germain — Founder of B2BLAST, B2B paid ads expert"
                width={160}
                height={160}
                priority
                className="rounded-full w-32 h-32 sm:w-40 sm:h-40 object-cover"
              />
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">{t.about.title}</h1>
              <p className="mt-4 text-lg text-gray-400 leading-relaxed">{t.about.intro}</p>
              <a
                href={t.about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-brand-light transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="pb-16 sm:pb-20 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-white mb-8">Experience</h2>
          <div className="space-y-6">
            {t.about.experience.map((exp) => (
              <div key={exp.company} className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 card-hover">
                <div className="flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-semibold text-white">
                    {exp.role} <span className="text-brand">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">{exp.duration}</p>
                  <p className="text-gray-400 mt-2 leading-relaxed">{exp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="pb-16 sm:pb-20 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-8 sm:p-10">
            <h2 className="font-heading text-xl font-bold text-white mb-3">Location & Availability</h2>
            <p className="text-gray-400 leading-relaxed">{t.about.location}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 sm:pb-28 bg-black">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand/10 border border-brand/20 px-8 py-16 sm:px-16 text-center">
            <h2 className="font-heading text-3xl font-bold text-white">{t.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">{t.cta.subtitle}</p>
            <Link href="/en/contact" className="btn-magnetic mt-8 inline-flex items-center rounded-lg bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30">{t.cta.button}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";

const products = [
  {
    category: "Course",
    title: "LinkedIn Ads for French SaaS Going International",
    description: "Step-by-step playbook to launch and scale LinkedIn campaigns across FR ↔ EN markets.",
    price: "€149",
  },
  {
    category: "Course",
    title: "B2B Google Ads: The Bilingual Markets Playbook",
    description: "Keyword strategy, ad copy, and bidding tactics for B2B search across two languages.",
    price: "€99",
  },
  {
    category: "Template Pack",
    title: "B2B Ad Copy Templates FR ↔ EN",
    description: "50+ proven ad copy templates for LinkedIn & Google Ads, natively written in both languages.",
    price: "€49",
  },
  {
    category: "Template Pack",
    title: "Audience Targeting Frameworks",
    description: "Ready-to-use targeting frameworks for LinkedIn, Google & Microsoft Ads across B2B verticals.",
    price: "€39",
  },
  {
    category: "Bundle",
    title: "The International B2B Ads Toolkit",
    description: "All courses + all templates. Everything you need to run bilingual B2B ads in-house.",
    price: "€299",
  },
];

export default function ResourcesEN() {
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
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand-light mb-6">
            <span className="inline-block w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            Coming Soon
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Courses & Templates
          </h1>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Everything you need to run high-performance bilingual B2B ads — whether you DIY or want to level up your team.
          </p>
        </div>

        {/* Product preview cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => (
            <div
              key={product.title}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 opacity-80"
            >
              {/* Coming Soon badge */}
              <span className="absolute top-4 right-4 rounded-full bg-brand/10 border border-brand/30 px-3 py-0.5 text-xs font-medium text-brand-light">
                Soon
              </span>

              <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                {product.category}
              </span>
              <h3 className="font-heading text-lg font-semibold text-white mt-2 mb-2 pr-12">
                {product.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="font-heading text-2xl font-bold text-brand">
                {product.price}
              </p>
            </div>
          ))}
        </div>

        {/* Email capture */}
        <div className="rounded-3xl bg-brand/10 border border-brand/20 px-8 py-14 sm:px-16 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
            Get notified when we launch
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-gray-400">
            Be the first to access our courses and templates. No spam — just a single email when they're ready.
          </p>

          {submitted ? (
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand/20 border border-brand/30 px-6 py-3">
              <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-sm font-medium text-white">You're on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-colors"
              />
              <button
                type="submit"
                className="btn-magnetic rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
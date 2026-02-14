"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getContent, type Locale } from "@/lib/content";

export default function Header({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const alt = locale === "en" ? "fr" : "en";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/95 backdrop-blur-md border-b border-cream-dark/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="B2BLAST" width={120} height={32} priority className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href={`/${locale}/services`} className="px-3 py-2 text-sm font-medium text-surface hover:text-brand transition-colors rounded-md hover:bg-brand/5">{t.nav.services}</Link>

            {/* Resources Dropdown */}
            <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="px-3 py-2 text-sm font-medium text-surface hover:text-brand transition-colors rounded-md hover:bg-brand/5 flex items-center gap-1">
                {t.nav.resources}
                <svg className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 rounded-xl bg-cream border border-cream-dark/60 shadow-xl shadow-black/5 p-2">
                  <Link href={`/${locale}/resources`} className="block px-3 py-2 text-sm text-surface hover:text-brand hover:bg-brand/5 rounded-lg transition-colors">{t.nav.resourcesItems.courses}</Link>
                  <Link href={`/${locale}/resources`} className="block px-3 py-2 text-sm text-surface hover:text-brand hover:bg-brand/5 rounded-lg transition-colors">{t.nav.resourcesItems.templates}</Link>
                </div>
              )}
            </div>

            <Link href={`/${locale}/about`} className="px-3 py-2 text-sm font-medium text-surface hover:text-brand transition-colors rounded-md hover:bg-brand/5">{t.nav.about}</Link>
            <Link href={`/${locale}/blog`} className="px-3 py-2 text-sm font-medium text-surface hover:text-brand transition-colors rounded-md hover:bg-brand/5">{t.nav.blog}</Link>
            <Link href={`/${locale}/contact`} className="px-3 py-2 text-sm font-medium text-surface hover:text-brand transition-colors rounded-md hover:bg-brand/5">{t.nav.contact}</Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link href={`/${alt}`} className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-surface/60 hover:text-brand border border-surface/10 hover:border-brand/30 rounded-md transition-all">
              {alt.toUpperCase()}
            </Link>
            <Link href={`/${locale}/contact`} className="hidden md:inline-flex btn-magnetic items-center rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/20">
              {t.nav.cta}
            </Link>

            {/* Mobile burger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-surface" aria-label="Menu">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-cream-dark/60">
          <div className="px-4 py-4 space-y-1">
            <Link href={`/${locale}/services`} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-surface hover:text-brand rounded-lg hover:bg-brand/5">{t.nav.services}</Link>
            <Link href={`/${locale}/resources`} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-surface hover:text-brand rounded-lg hover:bg-brand/5">{t.nav.resources}</Link>
            <Link href={`/${locale}/about`} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-surface hover:text-brand rounded-lg hover:bg-brand/5">{t.nav.about}</Link>
            <Link href={`/${locale}/blog`} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-surface hover:text-brand rounded-lg hover:bg-brand/5">{t.nav.blog}</Link>
            <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-surface hover:text-brand rounded-lg hover:bg-brand/5">{t.nav.contact}</Link>
            <div className="pt-3 flex gap-3">
              <Link href={`/${alt}`} className="flex-1 text-center px-3 py-2.5 text-xs font-semibold uppercase text-surface/60 border border-surface/10 rounded-lg">{alt.toUpperCase()}</Link>
              <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)} className="flex-1 text-center px-3 py-2.5 text-sm font-semibold bg-brand text-white rounded-lg">{t.nav.cta}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
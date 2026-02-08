"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getContent, type Locale } from "@/lib/content";

export default function Header({ locale }: { locale: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = getContent(locale);
  const otherLocale = locale === "en" ? "fr" : "en";
  const otherLabel = locale === "en" ? "FR" : "EN";

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/services`, label: t.nav.services },
    { href: `/${locale}/about`, label: t.nav.about },
    { href: `/${locale}/blog`, label: t.nav.blog },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <Image src="/images/logo.png" alt="B2BLAST — B2B Paid Ads Agency" width={140} height={36} priority className="h-8 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">{link.label}</Link>
            ))}

            {/* Resources dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black transition-colors"
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
              >
                {t.nav.resources}
                <svg className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 rounded-xl border border-gray-200 bg-white shadow-lg shadow-black/5 py-2">
                  <Link
                    href={`/${locale}/resources#courses`}
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                  >
                    <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" /></svg>
                    {t.nav.resourcesItems.courses}
                  </Link>
                  <Link
                    href={`/${locale}/resources#templates`}
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                  >
                    <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                    {t.nav.resourcesItems.templates}
                  </Link>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">{link.label}</Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <Link href={`/${otherLocale}`} className="text-sm font-medium text-gray-500 hover:text-brand transition-colors px-2 py-1 rounded border border-gray-300 hover:border-brand">{otherLabel}</Link>
            <Link href={`/${locale}/contact`} className="btn-magnetic inline-flex items-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white">{t.nav.cta}</Link>
          </div>

          {/* Mobile menu button */}
          <button type="button" className="md:hidden p-2 text-gray-600" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              {mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">{link.label}</Link>
            ))}
            {/* Resources sub-items mobile */}
            <div className="px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{t.nav.resources}</p>
              <Link href={`/${locale}/resources#courses`} onClick={() => setMobileOpen(false)} className="block pl-3 py-1.5 text-base font-medium text-gray-700 hover:text-brand">{t.nav.resourcesItems.courses}</Link>
              <Link href={`/${locale}/resources#templates`} onClick={() => setMobileOpen(false)} className="block pl-3 py-1.5 text-base font-medium text-gray-700 hover:text-brand">{t.nav.resourcesItems.templates}</Link>
            </div>
            {navLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">{link.label}</Link>
            ))}
            <div className="flex items-center gap-3 px-3 pt-3 border-t border-gray-200 mt-3">
              <Link href={`/${otherLocale}`} className="text-sm font-medium text-gray-500 hover:text-brand px-3 py-2 border border-gray-300 rounded-lg">{otherLabel}</Link>
              <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)} className="flex-1 text-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white">{t.nav.cta}</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

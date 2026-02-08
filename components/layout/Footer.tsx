import Link from "next/link";
import Image from "next/image";
import { getContent, type Locale } from "@/lib/content";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <Link href={`/${locale}`} className="inline-block">
              <Image src="/images/logo.png" alt="B2BLAST" width={120} height={32} className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">{t.footer.tagline}</p>
            {/* Social */}
            <div className="flex items-center gap-4 pt-1">
              <a href={t.footer.social.b2blastLinkedin} target="_blank" rel="noopener noreferrer" aria-label="B2BLAST LinkedIn" className="text-gray-400 hover:text-brand transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href={t.footer.social.thomasLinkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-brand transition-colors">
                Thomas Germain
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">Pages</h3>
              <div className="flex flex-col gap-2">
                <Link href={`/${locale}/services`} className="text-sm text-gray-500 hover:text-brand transition-colors">{t.footer.links.services}</Link>
                <Link href={`/${locale}/resources`} className="text-sm text-gray-500 hover:text-brand transition-colors">{t.footer.links.resources}</Link>
                <Link href={`/${locale}/about`} className="text-sm text-gray-500 hover:text-brand transition-colors">{t.footer.links.about}</Link>
                <Link href={`/${locale}/blog`} className="text-sm text-gray-500 hover:text-brand transition-colors">{t.footer.links.blog}</Link>
                <Link href={`/${locale}/contact`} className="text-sm text-gray-500 hover:text-brand transition-colors">{t.footer.links.contact}</Link>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900">{locale === "en" ? "Connect" : "Contact"}</h3>
              <div className="flex flex-col gap-2">
                <a href="mailto:thomas@b2blast.com" className="text-sm text-gray-500 hover:text-brand transition-colors">thomas@b2blast.com</a>
                <a href={t.footer.social.b2blastLinkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-brand transition-colors">LinkedIn B2BLAST</a>
                <a href={t.footer.social.thomasLinkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-brand transition-colors">LinkedIn Thomas</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-gray-400">{t.footer.copyright}</p>
          <Link href={`/${locale}`} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">{t.footer.links.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}

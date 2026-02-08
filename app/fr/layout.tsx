import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/StructuredData";

const sora = Sora({ subsets: ["latin"], variable: "--font-heading", display: "swap", weight: ["400", "500", "600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "B2BLAST — Paid Ads B2B Marchés Français ↔ Anglais", template: "%s | B2BLAST" },
  description: "Expert paid ads B2B bilingue natif. LinkedIn, Google, Microsoft Ads pour SaaS français en expansion UK/US et entreprises internationales entrant en France.",
  keywords: ["ads B2B", "LinkedIn ads", "Google ads B2B", "marketing bilingue", "SaaS français", "expansion internationale", "agence paid ads"],
  authors: [{ name: "Thomas Germain", url: "https://b2blast.com/fr/about" }],
  creator: "Thomas Germain",
  publisher: "B2BLAST",
  robots: "index, follow",
  openGraph: { type: "website", locale: "fr_FR", alternateLocale: ["en_US"], url: "https://b2blast.com/fr", siteName: "B2BLAST", title: "B2BLAST — Paid Ads B2B Marchés Français ↔ Anglais", description: "Expert paid ads B2B bilingue natif. Ex-LinkedIn, ex-Google.", images: [{ url: "/og-image-fr.png", width: 1200, height: 630, alt: "B2BLAST — Agence Paid Ads B2B" }] },
  twitter: { card: "summary_large_image", title: "B2BLAST — Paid Ads B2B", description: "Expert paid ads B2B bilingue natif.", images: ["/og-image-fr.png"] },
  alternates: { canonical: "https://b2blast.com/fr", languages: { en: "https://b2blast.com/en", fr: "https://b2blast.com/fr" } },
};

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="grain font-body bg-black text-white antialiased">
        <a href="#main" className="skip-link">Aller au contenu principal</a>
        <OrganizationSchema />
        <Header locale="fr" />
        <main id="main">{children}</main>
        <Footer locale="fr" />
      </body>
    </html>
  );
}
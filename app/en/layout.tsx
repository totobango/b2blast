import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/StructuredData";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", display: "swap", weight: ["400", "500", "600", "700", "800", "900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap", weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "B2BLAST — B2B Paid Ads French ↔ English Markets", template: "%s | B2BLAST" },
  description: "Native bilingual B2B paid ads expert. LinkedIn, Google, Microsoft Ads for French SaaS expanding to UK/US and international companies entering France.",
  keywords: ["B2B ads", "LinkedIn ads", "Google ads B2B", "bilingual marketing", "French SaaS", "international expansion", "paid ads agency"],
  authors: [{ name: "Thomas Germain", url: "https://b2blast.com/en/about" }],
  creator: "Thomas Germain",
  publisher: "B2BLAST",
  robots: "index, follow",
  openGraph: { type: "website", locale: "en_US", alternateLocale: ["fr_FR"], url: "https://b2blast.com/en", siteName: "B2BLAST", title: "B2BLAST — B2B Paid Ads French ↔ English Markets", description: "Native bilingual B2B paid ads expert. Ex-LinkedIn, ex-Google.", images: [{ url: "/og-image-en.png", width: 1200, height: 630, alt: "B2BLAST — B2B Paid Ads Agency" }] },
  twitter: { card: "summary_large_image", title: "B2BLAST — B2B Paid Ads", description: "Native bilingual B2B paid ads expert.", images: ["/og-image-en.png"] },
  alternates: { canonical: "https://b2blast.com/en", languages: { en: "https://b2blast.com/en", fr: "https://b2blast.com/fr" } },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="grain font-body bg-surface text-white antialiased">
        <a href="#main" className="skip-link">Skip to main content</a>
        <OrganizationSchema />
        <Header locale="en" />
        <main id="main">{children}</main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
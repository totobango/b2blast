import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B2BLAST - B2B Paid Ads French ↔ English Markets",
  description: "Native bilingual B2B paid ads expert. LinkedIn, Google, Microsoft Ads.",
  metadataBase: new URL("https://b2blast.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
import { getContent, type Locale } from "@/lib/content";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "B2BLAST",
    description: "B2B paid ads agency specializing in bilingual French ↔ English markets. LinkedIn Ads, Google Ads, Microsoft Ads management for SaaS companies expanding internationally.",
    url: "https://b2blast.com",
    logo: "https://b2blast.com/images/logo.png",
    image: "https://b2blast.com/og-image-en.png",
    founder: {
      "@type": "Person",
      name: "Thomas Germain",
      jobTitle: "Founder & B2B Ads Expert",
      url: "https://b2blast.com/en/about",
      sameAs: ["https://www.linkedin.com/in/thomasgermain5/"],
      knowsLanguage: ["French", "English"],
      alumniOf: [
        { "@type": "Organization", name: "LinkedIn" },
        { "@type": "Organization", name: "Google" },
        { "@type": "Organization", name: "Pinterest" },
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Ireland" },
    ],
    serviceType: [
      "LinkedIn Ads Management",
      "Google Ads B2B",
      "Microsoft Ads",
      "Reddit Ads",
      "B2B Paid Advertising",
      "Bilingual Ad Campaign Management",
      "International Market Expansion",
    ],
    knowsLanguage: ["French", "English"],
    priceRange: "€2,000–€8,000/month",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "thomas@b2blast.com",
      availableLanguage: ["French", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/b2blast1",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServicesFAQSchema({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.services.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServicesSchema({ locale }: { locale: Locale }) {
  const t = getContent(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "B2B Paid Advertising Management",
    provider: {
      "@type": "ProfessionalService",
      name: "B2BLAST",
      url: "https://b2blast.com",
    },
    areaServed: ["France", "United Kingdom", "United States", "Ireland"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://b2blast.com/${locale}/contact`,
    },
    offers: t.services.packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      price: pkg.price.replace("€", ""),
      priceCurrency: "EUR",
      description: pkg.features.join(". "),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

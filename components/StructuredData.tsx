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
      knowsLanguage: ["French", "English"],
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
    ],
    knowsLanguage: ["French", "English"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "thomas@b2blast.com",
      availableLanguage: ["French", "English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

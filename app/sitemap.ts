import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://b2blast.com";
  const pages = ["", "/services", "/resources", "/about", "/contact", "/blog"];
  const entries: MetadataRoute.Sitemap = [];

  for (const p of pages) {
    for (const locale of ["en", "fr"]) {
      entries.push({
        url: `${base}/${locale}${p}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: p === "" ? 1 : 0.8,
        alternates: { languages: { en: `${base}/en${p}`, fr: `${base}/fr${p}` } },
      });
    }
  }
  return entries;
}

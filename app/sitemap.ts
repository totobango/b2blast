import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://b2blast.com";
  const pages = ["", "/services", "/about", "/contact", "/resources", "/blog", "/privacy", "/legal"];
  const now = new Date().toISOString();

  return pages.flatMap((page) => [
    {
      url: `${base}/en${page}`,
      lastModified: now,
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : page === "/services" ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${base}/en${page}`,
          fr: `${base}/fr${page}`,
        },
      },
    },
    {
      url: `${base}/fr${page}`,
      lastModified: now,
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : page === "/services" ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${base}/en${page}`,
          fr: `${base}/fr${page}`,
        },
      },
    },
  ]);
}

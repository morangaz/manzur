import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.manzur.co.il",
      lastModified: new Date("2026-05-20"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.manzur.co.il/catalog",
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

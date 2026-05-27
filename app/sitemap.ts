import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-05-27");
  return [
    {
      url: "https://www.manzur.co.il",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.manzur.co.il/catalog",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.manzur.co.il/blog",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.manzur.co.il/blog/fence-law-shared-neighbors-rights",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.manzur.co.il/blog/diy-aluminum-fence-installation-guide",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.manzur.co.il/blog/choosing-aluminum-fence-model-styles",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.manzur.co.il/blog/aluminum-fence-maintenance-seasonal-care",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.manzur.co.il/blog/aluminum-vs-iron-wood-pvc-fence-comparison",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.manzur.co.il/blog/aluminum-fence-color-guide-ral-powder-coating",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api/", "/opengraph-image"],
      },
    ],
    sitemap: "https://www.manzur.co.il/sitemap.xml",
    host: "https://www.manzur.co.il",
  };
}

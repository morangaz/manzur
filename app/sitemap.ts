import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const mostRecentPostDate = BLOG_POSTS.reduce(
    (latest, post) => (post.dateISO > latest ? post.dateISO : latest),
    "2026-05-17"
  );

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `https://www.manzur.co.il/blog/${post.slug}`,
    lastModified: new Date(post.dateISO),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.manzur.co.il/",
      lastModified: new Date("2026-05-17"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://www.manzur.co.il/catalog",
      lastModified: new Date("2026-05-17"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.manzur.co.il/about",
      lastModified: new Date("2026-06-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://www.manzur.co.il/contact",
      lastModified: new Date("2026-06-10"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://www.manzur.co.il/blog",
      lastModified: new Date(mostRecentPostDate),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ];
}

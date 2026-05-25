import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogCard from "@/components/blog/BlogCard";
import FaqAccordion from "@/components/blog/FaqAccordion";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/lib/blog-posts";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `https://www.manzur.co.il/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "he_IL",
      url: `https://www.manzur.co.il/blog/${post.slug}`,
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.dateISO,
      authors: ["מנצור אלומיניום"],
      images: [
        {
          url: `https://www.manzur.co.il${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.relatedSlugs);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `https://www.manzur.co.il${post.image}`,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Organization",
      name: "מנצור אלומיניום",
      url: "https://www.manzur.co.il",
    },
    publisher: {
      "@type": "Organization",
      name: "מנצור אלומיניום",
      logo: {
        "@type": "ImageObject",
        url: "https://www.manzur.co.il/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.manzur.co.il/blog/${post.slug}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: "https://www.manzur.co.il" },
      { "@type": "ListItem", position: 2, name: "בלוג", item: "https://www.manzur.co.il/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.manzur.co.il/blog/${post.slug}` },
    ],
  };

  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `שלום, קראתי את המאמר "${post.title}" ואני מעוניין לדעת יותר`
  )}`;

  return (
    <div className="min-h-screen" dir="rtl">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-36 pb-0" style={{ background: "var(--cream)" }}>
        <div className="container">
          <nav className="flex items-center gap-2 text-sm flex-row-reverse justify-end" aria-label="breadcrumb">
            <a href="/" style={{ color: "var(--muted-foreground)" }} className="hover:opacity-70">
              דף הבית
            </a>
            <span style={{ color: "var(--border)" }}>›</span>
            <a href="/blog" style={{ color: "var(--muted-foreground)" }} className="hover:opacity-70">
              בלוג
            </a>
            <span style={{ color: "var(--border)" }}>›</span>
            <span style={{ color: "var(--deep-charcoal)" }} className="font-semibold truncate max-w-xs">
              {post.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article header */}
      <article>
        <header className="py-10 text-right" style={{ background: "var(--cream)" }}>
          <div className="container max-w-4xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 justify-end">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{ color: "var(--earth)", borderColor: "var(--earth)", background: "oklch(0.97 0.01 145)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight"
              style={{ color: "var(--deep-charcoal)", letterSpacing: "-0.02em" }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div
              className="flex flex-wrap items-center gap-4 text-sm justify-end"
              style={{ color: "var(--muted-foreground)" }}
            >
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
              <span>·</span>
              <span>צוות מנצור אלומיניום</span>
            </div>
          </div>
        </header>

        {/* Hero image */}
        <div className="relative w-full" style={{ aspectRatio: "21/9", maxHeight: "480px", overflow: "hidden" }}>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            preload
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, transparent 60%, oklch(0.98 0.008 80 / 0.5) 100%)" }}
          />
        </div>

        {/* Article body */}
        <div className="py-12" style={{ background: "var(--cream)" }}>
          <div className="container max-w-3xl">
            {/* Excerpt / intro */}
            <p
              className="text-lg leading-relaxed mb-10 pb-8 border-b text-right font-semibold"
              style={{ color: "var(--muted-foreground)", borderColor: "var(--border)" }}
            >
              {post.excerpt}
            </p>

            {/* Sections */}
            <div className="space-y-10">
              {post.sections.map((section, i) => (
                <div key={i}>
                  <h2
                    className="text-2xl font-black mb-4 text-right"
                    style={{ color: "var(--deep-charcoal)" }}
                  >
                    {section.heading}
                  </h2>
                  <div
                    className="text-base leading-relaxed text-right prose-rtl"
                    style={{ color: "var(--deep-charcoal)" }}
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />

                  {/* Inline WhatsApp CTA after section 2 */}
                  {i === 1 && (
                    <div
                      className="mt-6 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 flex-row-reverse"
                      style={{ background: "var(--warm-sand)", border: "1px solid var(--border)" }}
                    >
                      <div className="text-right">
                        <p className="font-bold text-sm" style={{ color: "var(--deep-charcoal)" }}>
                          יש לכם שאלה? אנחנו כאן
                        </p>
                        <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                          ייעוץ מקצועי חינם בוואטסאפ
                        </p>
                      </div>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp text-sm flex-shrink-0"
                        data-gtm-category="blog"
                        data-gtm-label={post.slug}
                      >
                        דברו איתנו
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Q&A Section */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container max-w-3xl">
          <div className="section-label mb-3 text-right">שאלות ותשובות</div>
          <h2
            className="text-2xl md:text-3xl font-black mb-8 text-right"
            style={{ color: "var(--deep-charcoal)" }}
          >
            שאלות נפוצות בנושא
          </h2>
          <FaqAccordion items={post.faq} />
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="section-label mb-3 text-right">כתבות נוספות</div>
            <h2
              className="text-2xl font-black mb-8 text-right"
              style={{ color: "var(--deep-charcoal)" }}
            >
              מאמרים שיעניינו אתכם
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <BlogCard key={rp.slug} post={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "var(--deep-charcoal)" }}
      >
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-black text-white mb-3">
            רוצים לקבל הצעת מחיר מותאמת?
          </h2>
          <p className="mb-6" style={{ color: "oklch(0.72 0.015 60)" }}>
            צרו קשר עם מנצור אלומיניום — 35 שנות ניסיון, ייעוץ חינם
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              data-gtm-category="blog"
              data-gtm-label={`${post.slug}-bottom-cta`}
            >
              בקשו הצעת מחיר בוואטסאפ
            </a>
            <a href="/#contact" className="btn-outline" style={{ color: "white", borderColor: "white" }}>
              טופס יצירת קשר
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

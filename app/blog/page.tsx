import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { BLOG_POSTS } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "בלוג | מנצור אלומיניום — טיפים, מדריכים וחדשות על גדרות אלומיניום",
  description:
    "מדריכים מקצועיים על גדרות אלומיניום: חוק גדרות בין שכנים, התקנה עצמית DIY, בחירת דגם מתאים ותחזוקה שנתית לשמירת הגדר לאורך שנים.",
  alternates: { canonical: "https://www.manzur.co.il/blog" },
  keywords: [
    "בלוג גדרות אלומיניום",
    "מדריך גדרות",
    "חוק גדרות ישראל",
    "התקנת גדר עצמית",
    "תחזוקת גדר",
    "בחירת גדר",
  ],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://www.manzur.co.il/blog",
    title: "בלוג | מנצור אלומיניום",
    description: "מדריכים מקצועיים על גדרות אלומיניום — מחוק השכנים ועד התקנה עצמית.",
  },
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />

      {/* Hero */}
      <section
        className="pt-40 pb-16 text-right"
        style={{ background: "var(--deep-charcoal)" }}
      >
        <div className="container">
          <div className="section-label mb-3" style={{ color: "oklch(0.85 0.15 85)" }}>
            בלוג · {BLOG_POSTS.length} מאמרים
          </div>
          <h1
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ letterSpacing: "-0.02em" }}
          >
            המדריכים שלנו
          </h1>
          <p className="text-lg max-w-xl" style={{ color: "oklch(0.72 0.015 60)" }}>
            הכל על גדרות אלומיניום — מהצד המשפטי, דרך בחירת הדגם הנכון ועד טיפים לתחזוקה שנתית.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-24" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ background: "var(--deep-charcoal)" }}
      >
        <div className="container">
          <h2 className="text-2xl font-black text-white mb-3">
            יש לכם שאלה שלא מצאתם תשובה?
          </h2>
          <p className="mb-6" style={{ color: "oklch(0.72 0.015 60)" }}>
            צוות מנצור אלומיניום זמין לייעוץ אישי — בטלפון או בוואטסאפ
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://wa.me/972504646536?text=שלום, קראתי את הבלוג שלכם ויש לי שאלה"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              data-gtm-category="blog"
              data-gtm-label="blog-index-cta"
            >
              שאלו בוואטסאפ
            </a>
            <a href="tel:050-4646536" className="btn-outline" style={{ color: "white", borderColor: "white" }}>
              050-4646536
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Models from "@/components/sections/Models";
import Paths from "@/components/sections/Paths";
import HowItWorks from "@/components/sections/HowItWorks";
import Kit from "@/components/sections/Kit";
import Gallery from "@/components/sections/Gallery";
import Special from "@/components/sections/Special";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingSidebar from "@/components/FloatingSidebar";

export const metadata: Metadata = {
  title: "מנצור אלומיניום | גדרות אלומיניום איכותיות ברעננה",
  description:
    "מנצור אלומיניום - 35 שנות ניסיון בייצור והתקנת גדרות אלומיניום. גדר קלאסית, כפרית, היי-טק ולייזר. ערכות DIY חתוכות למידה. אזור המרכז.",
  alternates: { canonical: "https://www.manzur.co.il/" },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.manzur.co.il/#webpage",
  url: "https://www.manzur.co.il/",
  name: "מנצור אלומיניום | גדרות אלומיניום איכותיות ברעננה",
  description:
    "מנצור אלומיניום - 35 שנות ניסיון בייצור והתקנת גדרות אלומיניום. מגוון דגמים, מחירים תחרותיים, התקנה עצמית (DIY) ומקצועית באיזור המרכז.",
  inLanguage: "he",
  isPartOf: { "@id": "https://www.manzur.co.il" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "כמה עולה גדר אלומיניום?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "מחיר גדר אלומיניום תלוי בדגם, גובה וכמות המטרים. ערכות DIY מתחילות מ-₪150 למטר; התקנה מקצועית מלאה מתחילה מ-₪300 למטר כולל חומרים.",
      },
    },
    {
      "@type": "Question",
      name: "האם ניתן להרכיב גדר אלומיניום לבד?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן. ערכות ה-DIY של מנצור אלומיניום מגיעות חתוכות למידה המדויק של החצר שלכם עם הוראות הרכבה. רוב הלקוחות מסיימים בסוף שבוע.",
      },
    },
    {
      "@type": "Question",
      name: "מה ההבדל בין גדר קלאסית לגדר היי-טק?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "גדר קלאסית כוללת קישוטים מסולסלים עם אופי מסורתי; גדר היי-טק היא קווים נקיים וסגנון מודרני. שתיהן עשויות אלומיניום באותה עמידות.",
      },
    },
    {
      "@type": "Question",
      name: "כמה זמן אורכת ההתקנה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "התקנה מקצועית של גדר סטנדרטית בגודל חצר ממוצע (20–30 מטר) נמשכת בדרך כלל יום עבודה אחד.",
      },
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.manzur.co.il/#organization",
  name: "מנצור אלומיניום",
  legalName: "מנצור אלומיניום",
  url: "https://www.manzur.co.il/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.manzur.co.il/images/logo.png",
    width: 300,
    height: 60,
  },
  foundingDate: "1991",
  telephone: "09-7603602",
  email: "info@manzur.co.il",
  description:
    "מפעל ייצור והתקנת גדרות, שערים ופרגולות אלומיניום ברעננה. 35 שנות ניסיון, מאות פרויקטים מבוצעים באזור המרכז.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "החרושת 2",
    addressLocality: "רעננה",
    addressRegion: "המרכז",
    postalCode: "4310201",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.1847,
    longitude: 34.8713,
  },
  areaServed: [
    { "@type": "City", name: "רעננה" },
    { "@type": "City", name: "כפר סבא" },
    { "@type": "City", name: "הרצליה" },
    { "@type": "City", name: "נתניה" },
    { "@type": "City", name: "תל אביב" },
    { "@type": "City", name: "פתח תקווה" },
  ],
  sameAs: ["https://wa.me/972504646536"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "09-7603602",
    contactType: "customer service",
    availableLanguage: "Hebrew",
    areaServed: "IL",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen" dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Navbar />
      <main>
        <Hero />
        <Models />
        <Paths />
        <HowItWorks />
        <Kit />
        <Gallery />
        <Special />
        <Contact />
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
      <FloatingSidebar />
    </div>
  );
}

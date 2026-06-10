import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "אודות מנצור אלומיניום | 35 שנות ניסיון ברעננה",
  description:
    "מנצור אלומיניום — מפעל ייצור גדרות, שערים ופרגולות אלומיניום ברעננה מאז 1991. 35 שנות ניסיון, 300+ פרויקטים מבוצעים באזור המרכז.",
  alternates: { canonical: "https://www.manzur.co.il/about" },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.manzur.co.il/#business",
  name: "מנצור אלומיניום",
  description:
    "מפעל ייצור גדרות, שערים ופרגולות אלומיניום ברעננה. פועל מאז 1991 עם 35 שנות ניסיון ומאות פרויקטים מבוצעים באזור המרכז.",
  url: "https://www.manzur.co.il/",
  telephone: "09-7603602",
  email: "info@manzur.co.il",
  foundingDate: "1991",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "החרושת 2",
    addressLocality: "רעננה",
    addressRegion: "המרכז",
    addressCountry: "IL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.1847,
    longitude: 34.8713,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "₪₪",
  image: "https://www.manzur.co.il/images/logo.png",
  sameAs: ["https://wa.me/972504646536"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: "https://www.manzur.co.il" },
    { "@type": "ListItem", position: 2, name: "אודות", item: "https://www.manzur.co.il/about" },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </div>
  );
}

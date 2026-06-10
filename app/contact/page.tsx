import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "צרו קשר | מנצור אלומיניום — גדרות, שערים ופרגולות",
  description:
    "צרו קשר עם מנצור אלומיניום: 09-7603602 | וואטסאפ 050-4646536 | החרושת 2, רעננה. ייעוץ חינם, הצעת מחיר תוך יום עסקים.",
  alternates: { canonical: "https://www.manzur.co.il/contact" },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.manzur.co.il/#business",
  name: "מנצור אלומיניום",
  description:
    "ייצור והתקנת גדרות, שערים ופרגולות אלומיניום ברעננה. 35 שנות ניסיון, הצעת מחיר תוך יום עסקים.",
  url: "https://www.manzur.co.il/",
  telephone: "09-7603602",
  email: "info@manzur.co.il",
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "09-7603602",
    contactType: "customer service",
    availableLanguage: "Hebrew",
    areaServed: "IL",
  },
  priceRange: "₪₪",
  image: "https://www.manzur.co.il/images/logo.png",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: "https://www.manzur.co.il" },
    { "@type": "ListItem", position: 2, name: "צרו קשר", item: "https://www.manzur.co.il/contact" },
  ],
};

export default function ContactPage() {
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
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

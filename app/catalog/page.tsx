import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "קטלוג גדרות אלומיניום | מנצור אלומיניום",
  description:
    "כל הדגמים, הגוונים והמידות של גדרות האלומיניום של מנצור. גדר קלאסית, כפרית, היי-טק ולייזר. ערכות DIY וייצור והתקנה מקצועית בכל אזור המרכז.",
  keywords: [
    "קטלוג גדרות אלומיניום",
    "דגמי גדרות אלומיניום",
    "גדר קלאסית",
    "גדר כפרית",
    "גדר היי-טק",
    "גדר חיתוכי לייזר",
    "ערכת DIY גדר אלומיניום",
    "גדרות אלומיניום מחיר",
    "גדרות אלומיניום מנצור",
  ],
  alternates: { canonical: "https://www.manzur.co.il/catalog" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://www.manzur.co.il/catalog",
    title: "קטלוג גדרות אלומיניום | מנצור אלומיניום",
    description:
      "4 סדרות גדרות אלומיניום — קלאסי, כפרי, היי-טק ולייזר. כל הצבעים, הגדלים, ואפשרויות ה-DIY.",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "קטלוג גדרות אלומיניום — מנצור אלומיניום",
  description:
    "4 סדרות גדרות אלומיניום איכותיות לבית הפרטי — קלאסי, כפרי, היי-טק ולייזר",
  url: "https://www.manzur.co.il/catalog",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "גדר קלאסית",
        description:
          "פסי אלומיניום אנכיים בצבעים ומרווחים שונים — אווירה של הגדר הקלאסית. פרטיות בינונית.",
        image: "https://www.manzur.co.il/images/fence-classic.png",
        brand: { "@type": "Brand", name: "מנצור אלומיניום" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "ILS",
          seller: { "@type": "Organization", name: "מנצור אלומיניום" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "גדר כפרית",
        description:
          "פרופילי אלומיניום ברוחב שונה במגוון צבעים — מראה חם וכפרי. פרטיות גבוהה.",
        image: "https://www.manzur.co.il/images/fence-rural.webp",
        brand: { "@type": "Brand", name: "מנצור אלומיניום" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "ILS",
          seller: { "@type": "Organization", name: "מנצור אלומיניום" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "גדר היי-טק מודרני",
        description:
          "פסי אלומיניום משופעים לכיסוי מלא — מראה מודרני, מתכתי ונועז. פרטיות מלאה.",
        image: "https://www.manzur.co.il/images/fence-hitech-slope.png",
        brand: { "@type": "Brand", name: "מנצור אלומיניום" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "ILS",
          seller: { "@type": "Organization", name: "מנצור אלומיניום" },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "גדר חיתוכי לייזר",
        description:
          "פאנלים עם חיתוכי לייזר גיאומטריים — אופציה לתאורה משולבת ומראה אדריכלי ייחודי.",
        image: "https://www.manzur.co.il/images/fence-laser.webp",
        brand: { "@type": "Brand", name: "מנצור אלומיניום" },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "ILS",
          seller: { "@type": "Organization", name: "מנצור אלומיניום" },
        },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: "https://www.manzur.co.il" },
    { "@type": "ListItem", position: 2, name: "קטלוג גדרות", item: "https://www.manzur.co.il/catalog" },
  ],
};

export default function CatalogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Server-rendered intro — visible to Googlebot first-wave crawl without JS */}
      <h1 className="sr-only">קטלוג גדרות אלומיניום — מנצור אלומיניום</h1>
      <CatalogClient />
    </>
  );
}

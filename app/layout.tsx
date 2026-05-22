import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
  variable: "--font-heebo",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.manzur.co.il"),
  title: {
    default: "מנצור אלומיניום | גדרות אלומיניום איכותיות ברעננה",
    template: "%s | מנצור אלומיניום",
  },
  description:
    "מנצור אלומיניום - 35 שנות ניסיון בייצור והתקנת גדרות אלומיניום. מגוון דגמים, מחירים תחרותיים, התקנה עצמית (DIY) ומקצועית באיזור המרכז.",
  keywords: [
    "גדרות אלומיניום",
    "גדר אלומיניום",
    "גדרות רעננה",
    "מנצור אלומיניום",
    "גדר לבית",
    "גדר היי-טק",
    "גדר קלאסית",
    "ערכת DIY גדר",
    "גדרות מחיר",
    "גדרות התקנה",
    "אלומיניום רעננה",
    "שער אלומיניום",
    "פרגולת אלומיניום",
  ],
  authors: [{ name: "מנצור אלומיניום" }],
  creator: "מנצור אלומיניום",
  publisher: "מנצור אלומיניום",
  alternates: {
    canonical: "https://www.manzur.co.il",
    languages: { he: "https://www.manzur.co.il" },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://www.manzur.co.il",
    siteName: "מנצור אלומיניום",
    title: "מנצור אלומיניום | גדרות אלומיניום איכותיות ברעננה",
    description:
      "35 שנות ניסיון בגדרות אלומיניום. ערכות DIY חתוכות למידה, התקנה מקצועית, 300+ פרויקטים.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "מנצור אלומיניום — גדרות אלומיניום ברעננה",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "מנצור אלומיניום | גדרות אלומיניום איכותיות ברעננה",
    description: "35 שנות ניסיון בגדרות אלומיניום. ערכות DIY חתוכות למידה, התקנה מקצועית.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "ee5f61c0e8a1cf54",
  },
  other: {
    "geo.region": "IL-M",
    "geo.placename": "רעננה, ישראל",
    "geo.position": "32.1847;34.8711",
    ICBM: "32.1847, 34.8711",
    language: "Hebrew",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.manzur.co.il",
  name: "מנצור אלומיניום",
  description: "ייצור והתקנת גדרות אלומיניום איכותיות — 35 שנות ניסיון ברעננה",
  url: "https://www.manzur.co.il",
  telephone: ["050-4646536", "09-7603602"],
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
    longitude: 34.8711,
  },
  image: "https://www.manzur.co.il/images/logo.png",
  logo: "https://www.manzur.co.il/images/logo.png",
  sameAs: [
    "https://www.instagram.com/alumni_fence/",
    "https://www.facebook.com/profile.php?id=61589011094917",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  priceRange: "₪₪",
  areaServed: [
    { "@type": "City", name: "רעננה" },
    { "@type": "City", name: "כפר סבא" },
    { "@type": "City", name: "הרצליה" },
    { "@type": "AdministrativeArea", name: "מרכז ישראל" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "דגמי גדרות אלומיניום",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "גדר קלאסית" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "גדר כפרית" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "גדר היי-טק מודרנית" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "גדר חיתוכי לייזר" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','AW-18167940874');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-18167940874"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  );
}

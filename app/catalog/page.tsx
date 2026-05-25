import type { Metadata } from "next";
import CatalogClient from "./CatalogClient";

export const metadata: Metadata = {
  title: "קטלוג גדרות אלומיניום | מנצור אלומיניום",
  description:
    "כל הדגמים, הגוונים והמידות של גדרות האלומיניום של מנצור. שלבים אופקיים, אנכיים, פרופיל הייטק ועבודות מיוחדות. הזמינו ערכת DIY או קבעו התקנה מקצועית.",
  alternates: { canonical: "https://www.manzur.co.il/catalog" },
  robots: { index: true, follow: true },
};

export default function CatalogPage() {
  return <CatalogClient />;
}

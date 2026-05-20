import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "דף לא נמצא",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-right"
      dir="rtl"
      style={{ background: "var(--cream)" }}
    >
      <div className="text-center p-8">
        <div className="text-8xl font-black mb-4" style={{ color: "var(--earth)" }}>
          404
        </div>
        <h1 className="text-3xl font-black mb-4" style={{ color: "var(--deep-charcoal)" }}>
          הדף לא נמצא
        </h1>
        <p className="text-lg mb-8" style={{ color: "var(--muted-foreground)" }}>
          הדף שחיפשתם אינו קיים. ייתכן שהוא הועבר או נמחק.
        </p>
        <Link href="/" className="btn-primary">
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}

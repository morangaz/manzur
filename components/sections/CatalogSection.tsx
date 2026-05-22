"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/constants";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const COLORS = [
  { name: "אנתרציט", hex: "#3d3d3d" },
  { name: "לבן", hex: "#f5f5f0" },
  { name: "חום עץ", hex: "#7a5c3a" },
  { name: "אפור בהיר", hex: "#9e9e9e" },
  { name: "שחור", hex: "#1a1a1a" },
  { name: "בז׳ חם", hex: "#c8b89a" },
  { name: "ירוק כהה", hex: "#3a5a40" },
  { name: "כסוף", hex: "#b0b8c1" },
];

const CATALOG_SECTIONS = [
  {
    id: "horizontal",
    title: "שלבים אופקיים",
    icon: "▬",
    badge: "הכי פופולרי",
    image: "/images/fence-classic.png",
    desc: "שלבים אופקיים בעובי ומרווחים שונים — מראה קלאסי ופרטיות גבוהה. מתאים לכל סגנון אדריכלי.",
    dimensions: "שלב: 80–120×20 מ״מ | גובה: 80–220 ס״מ | עד 6 מ׳",
    colors: ["#3d3d3d", "#f5f5f0", "#7a5c3a", "#9e9e9e", "#1a1a1a", "#c8b89a"],
  },
  {
    id: "vertical",
    title: "שלבים אנכיים",
    icon: "▮",
    badge: null,
    image: "/images/fence-classic.png",
    desc: "גדר אנכית בעובי אחיד — מראה נקי ומודרני. מתאים במיוחד לשערים ולגדרות כניסה.",
    dimensions: "שלב: 20×40 מ״מ | גובה: 80–250 ס״מ | עד 4 מ׳",
    colors: ["#3d3d3d", "#f5f5f0", "#1a1a1a", "#b0b8c1", "#9e9e9e"],
  },
  {
    id: "hitech",
    title: "פרופיל הייטק",
    icon: "◈",
    badge: "חדש",
    image: "/images/fence-laser.webp",
    desc: "פאנלים עם חיתוכי לייזר גיאומטריים — מראה אדריכלי ייחודי. אפשרות לתאורה LED משולבת.",
    dimensions: "פאנל: 200×100 ס״מ | עובי: 3 מ״מ | גובה עד 250 ס״מ",
    colors: ["#3d3d3d", "#1a1a1a", "#b0b8c1"],
  },
  {
    id: "hitech-slope",
    title: "הייטק משופע",
    icon: "◇",
    badge: null,
    image: "/images/fence-hitech-slope.png",
    desc: "פסי אלומיניום משופעים לכיסוי מלא — מראה מודרני, מתכתי ונועז. פרטיות מלאה.",
    dimensions: "פס: 70×20 מ״מ | גובה: 100–220 ס״מ | עד 6 מ׳",
    colors: ["#3d3d3d", "#1a1a1a", "#9e9e9e"],
  },
  {
    id: "rural",
    title: "סדרה כפרית",
    icon: "⬡",
    badge: null,
    image: "/images/fence-rural.webp",
    desc: "פרופילי אלומיניום 1.2 מ״מ ברוחב שונה — מראה חם וכפרי שמשתלב בסביבה ירוקה.",
    dimensions: "פרופיל: 80–120 מ״מ | גובה: 80–200 ס״מ | עד 6 מ׳",
    colors: ["#7a5c3a", "#3a5a40", "#c8b89a", "#3d3d3d"],
  },
  {
    id: "special",
    title: "עבודות מיוחדות",
    icon: "✦",
    badge: null,
    image: "/images/pergola.webp",
    desc: "פרגולות, שערים ומסתורים — תכנון וביצוע של מעטפת חיצונית שלמה בקו עיצובי אחיד.",
    dimensions: "לפי מידות הפרויקט | תכנון מותאם אישית",
    colors: ["#3d3d3d", "#1a1a1a", "#7a5c3a", "#9e9e9e"],
  },
];

function ProductCard({ item, index }: { item: typeof CATALOG_SECTIONS[0]; index: number }) {
  const ref = useFadeUp();
  return (
    <div
      ref={ref}
      className="fade-up bg-white rounded-2xl overflow-hidden shadow-sm border text-right"
      style={{ borderColor: "var(--border)", animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <div className="relative" style={{ aspectRatio: "4/3" }}>
        <Image
          src={item.image}
          alt={`${item.title} — מנצור אלומיניום`}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, oklch(0.18 0.02 60 / 0.55) 0%, transparent 50%)" }}
        />
        <div className="absolute bottom-0 right-0 left-0 p-4 text-white">
          <div className="flex items-center justify-between flex-row-reverse">
            <span className="text-2xl">{item.icon}</span>
            {item.badge && (
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: "var(--earth)", color: "white" }}
              >
                {item.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-black mb-2" style={{ color: "var(--deep-charcoal)" }}>
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
          {item.desc}
        </p>

        {/* Dimensions */}
        <div
          className="text-xs font-mono p-3 rounded-xl mb-4"
          style={{ background: "var(--warm-sand)", color: "var(--deep-charcoal)" }}
        >
          {item.dimensions}
        </div>

        {/* Colors */}
        <div className="flex flex-wrap gap-2 mb-4 flex-row-reverse">
          {item.colors.map((hex) => {
            const c = COLORS.find((c) => c.hex === hex);
            return (
              <div
                key={hex}
                className="w-6 h-6 rounded-full border-2"
                style={{ background: hex, borderColor: "var(--border)" }}
                title={c?.name ?? hex}
              />
            );
          })}
        </div>

        {/* CTA */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`שלום, אני מעוניין ב${item.title}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full text-center block text-sm"
        >
          בקש הצעת מחיר
        </a>
      </div>
    </div>
  );
}

export default function CatalogSection() {
  const headerRef = useFadeUp();

  return (
    <section id="catalog" className="py-20 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div ref={headerRef} className="fade-up text-right mb-14">
          <div className="section-label mb-3">קטלוג מוצרים · {CATALOG_SECTIONS.length} סדרות</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            כל הסדרות.
            <br />
            כל הגוונים.
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            שלבים אופקיים ואנכיים, פרופילי הייטק, עבודות מיוחדות — כל מה שצריך לבחור ולהזמין.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CATALOG_SECTIONS.map((item, i) => (
            <ProductCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Link to full interactive catalog */}
        <div className="text-center">
          <a
            href="/catalog"
            className="btn-primary inline-block px-10 py-4 text-base font-bold"
          >
            לקטלוג המלא והאינטראקטיבי ←
          </a>
        </div>
      </div>
    </section>
  );
}

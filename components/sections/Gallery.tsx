"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { GALLERY_IMGS, TESTIMONIALS } from "@/lib/constants";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Gallery() {
  const ref = useFadeUp();
  const [activeImg, setActiveImg] = useState<string | null>(null);

  // Close lightbox on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveImg(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-28" style={{ background: "var(--warm-sand)" }}>
      <div className="container">
        <div ref={ref} className="fade-up text-right mb-14">
          <div className="section-label mb-3">גלריה · פרויקטים</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            עבודות שדיברו
            <br />
            בעד עצמן.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16" role="list" aria-label="גלריית פרויקטים">
          {GALLERY_IMGS.map((g, i) => (
            <button
              key={i}
              className="relative overflow-hidden rounded-2xl cursor-pointer group focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
              style={{ aspectRatio: i === 0 || i === 3 ? "4/3" : "1/1" }}
              onClick={() => setActiveImg(g.url)}
              aria-label={`הצג תמונה מוגדלת: ${g.label}`}
            >
              <Image
                src={g.url}
                alt={g.label}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, oklch(0.18 0.02 60 / 0.7), transparent)",
                }}
              >
                <span className="text-white text-sm font-semibold">{g.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {activeImg && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="תמונה מוגדלת מהגלריה"
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "oklch(0 0 0 / 0.85)" }}
            onClick={() => setActiveImg(null)}
          >
            <button
              className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setActiveImg(null)}
              aria-label="סגור תמונה"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 1l14 14M15 1L1 15" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <Image
              src={activeImg}
              alt="תמונה מוגדלת מגלריית הפרויקטים"
              width={1200}
              height={800}
              className="max-w-full max-h-full rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Testimonials */}
        <div className="section-label text-right mb-8">המלצות לקוחות</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card text-right">
              <div className="flex gap-1 mb-3 justify-end">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-sm" aria-label="כוכב">★</span>
                ))}
              </div>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "var(--deep-charcoal)" }}
              >
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-3 flex-row-reverse">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                  style={{ background: "var(--earth)", color: "white" }}
                >
                  {t.name[0]}
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">
                    {t.name}, {t.city}
                  </div>
                  <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                    {t.model}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

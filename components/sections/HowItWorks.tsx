"use client";

import { useEffect, useRef } from "react";
import { STEPS } from "@/lib/constants";

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

export default function HowItWorks() {
  const ref = useFadeUp();

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28"
      style={{ background: "var(--deep-charcoal)", color: "var(--cream)" }}
    >
      <div className="container">
        <div ref={ref} className="fade-up text-right mb-14">
          <div className="section-label mb-3" style={{ color: "oklch(0.85 0.15 85)" }}>
            שיטת עשה זאת בעצמך · 04 שלבים
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            מהבחירה ועד
            <br />
            שאתם מרכיבים בעצמכם
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "oklch(0.75 0 0)" }}>
            תהליך קצר וברור. בלי תיאומים אינסופיים — רק אתם, החצר שלכם והערכה.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl"
              style={{
                background: "oklch(0.26 0.02 60)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <div
                className="text-5xl font-black mb-4 text-right"
                style={{ color: "oklch(1 0 0 / 0.08)" }}
              >
                {s.n}
              </div>
              <h3 className="text-xl font-black mb-2 text-right">{s.title}</h3>
              <p className="text-sm leading-relaxed text-right" style={{ color: "oklch(0.75 0 0)" }}>
                {s.text}
              </p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/20 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

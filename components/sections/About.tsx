"use client";

import { useEffect, useRef } from "react";

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

export default function About() {
  const ref = useFadeUp();

  return (
    <section id="about" className="py-20 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div ref={ref} className="fade-up">
          <div
            className="section-label mb-3 text-right"
            style={{ color: "oklch(0.85 0.15 85)" }}
          >
            אודות
          </div>
          <h2
            className="text-4xl md:text-5xl font-black mb-10 text-right"
            style={{ color: "var(--deep-charcoal)" }}
          >
            החברה שלנו
          </h2>

          <div className="flex flex-col gap-10">
            <div className="text-right space-y-5">
              <p className="text-lg leading-relaxed" style={{ color: "var(--deep-charcoal)" }}>
                חברת מנצור אלומיניום הינו מפעל אלומיניום ברעננה שפועל מעל ל-35 שנה.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                אנו מתמחים בייבוא ושיווק של אלומיניום לבעלי מקצוע ורשתות.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                אנו פועלים במגזר הפרטי מעל ל-35 שנה בתחום הגדרות, שערים, הצללות וכיסוי מסתורים.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                אנו מאמינים ששיתוף פעולה עם הלקוח מיצר מערכת יחסים מקצועית, אמינה ומוצלחת.
              </p>
              <p className="text-xl font-black" style={{ color: "var(--deep-charcoal)" }}>
                נשמח לשרת גם אתכם! 🌟
              </p>

              {/* Stats */}
              <div className="flex flex-row-reverse gap-8 pt-2">
                <div className="text-right">
                  <div
                    className="text-3xl font-black"
                    style={{ color: "oklch(0.85 0.15 85)" }}
                  >
                    35+
                  </div>
                  <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    שנות ניסיון
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-3xl font-black"
                    style={{ color: "oklch(0.85 0.15 85)" }}
                  >
                    300+
                  </div>
                  <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    פרויקטים
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className="text-3xl font-black"
                    style={{ color: "oklch(0.85 0.15 85)" }}
                  >
                    4
                  </div>
                  <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                    סדרות דגמים
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

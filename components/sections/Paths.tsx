"use client";

import { useEffect, useRef } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

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

export default function Paths() {
  const ref = useFadeUp();

  return (
    <section id="paths" className="py-20 md:py-28" style={{ background: "var(--warm-sand)" }}>
      <div className="container">
        <div ref={ref} className="fade-up text-right mb-12">
          <div className="section-label mb-3">בחרו את המסלול שלכם</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">איך תרצו להתקין?</h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            לפני שמתחילים — בחרו מסלול. כל מסלול מוביל לאותה גדר יפה, בדרך שמתאימה לכם.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Path A */}
          <div
            className="p-8 rounded-3xl text-right"
            style={{ background: "var(--deep-charcoal)", color: "var(--cream)" }}
          >
            <div className="section-label mb-3" style={{ color: "oklch(0.85 0.15 85)" }}>
              מסלול א׳
            </div>
            <h3 className="text-2xl font-black mb-4">
              אתם מרכיבים,
              <br />
              אנחנו זמינים
            </h3>
            <ul className="rtl-bullet-list space-y-3 mb-8">
              {[
                "ערכה מקצועית חתוכה למידה, מוכנה להרכבה",
                "צוות ההתקנות שלנו זמין להדרכה בוואטסאפ",
                "השכרת כלי עבודה — מקדחה, פלס, מסור",
              ].map((item, j) => (
                <li key={j} className="gold-dot" style={{ color: "oklch(0.82 0 0)" }}>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#how-it-works" className="btn-primary inline-flex">
              לארבעת השלבים ←
            </a>
          </div>

          {/* Path B */}
          <div
            className="p-8 rounded-3xl text-right border-2"
            style={{ background: "white", borderColor: "var(--deep-charcoal)" }}
          >
            <div className="section-label mb-3">מסלול ב׳</div>
            <h3 className="text-2xl font-black mb-4">
              אנחנו עושים
              <br />
              בשבילכם
            </h3>
            <ul className="rtl-bullet-list space-y-3 mb-8">
              {[
                "צוות מתקינים מוסמכים מטעמנו",
                "תיאום, מדידה וביצוע — הכול עלינו",
                "אפשרות לפרויקט מעטפת שלם: גדר, שער, פרגולה",
                "ליווי מקצועי מהתכנון ועד הסיום",
              ].map((item, j) => (
                <li key={j} className="earth-dot" style={{ color: "var(--muted-foreground)" }}>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <WhatsAppIcon /> דברו איתנו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

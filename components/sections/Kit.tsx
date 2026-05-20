"use client";

import { useEffect, useRef } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { KIT_ITEMS, WHATSAPP_URL } from "@/lib/constants";

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

export default function Kit() {
  const ref = useFadeUp();

  return (
    <section id="kit" className="py-20 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div ref={ref} className="fade-up text-right mb-12">
          <div className="section-label mb-3">מה מקבלים בערכה</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            מה מקבלים בערכה
            <br />
            להרכבה עצמית
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            הערכה מגיעה חתוכה למידה, מוכנה להרכבה. אנחנו לא משאירים אתכם לבד.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {KIT_ITEMS.map((item, i) => (
            <div key={i} className="kit-item">
              <div className="kit-text">
                <div className="font-bold text-sm mb-1">{item.title}</div>
                <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <WhatsAppIcon /> שאלות? דברו איתנו
          </a>
        </div>
      </div>
    </section>
  );
}

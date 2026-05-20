"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { MODELS, WHATSAPP_URL } from "@/lib/constants";

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Models() {
  const ref = useFadeUp();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="models" className="py-20 md:py-28" style={{ background: "var(--cream)" }}>
      <div className="container">
        <div ref={ref} className="fade-up text-right mb-14">
          <div className="section-label mb-3">דגמי גדר · 04 סדרות</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            ארבע סדרות.
            <br />
            אופי שונה לכל בית.
          </h2>
          <p className="text-lg max-w-xl" style={{ color: "var(--muted-foreground)" }}>
            בחירה ברורה ופשוטה — מהקלאסי הרגוע, העץ הכפרי, ועד פאנלים בחיתוך לייזר אדריכלי.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MODELS.map((m, i) => (
            <div
              key={m.id}
              className={`card-fence ${selected === m.id ? "ring-2 ring-offset-2" : ""}`}
              style={{ animationDelay: `${i * 80}ms` }}
              onClick={() => setSelected(selected === m.id ? null : m.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={m.img}
                  alt={`גדר ${m.name} — מנצור אלומיניום`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {m.badge && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "var(--earth)", color: "white" }}
                  >
                    {m.badge}
                  </span>
                )}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.18 0.02 60 / 0.75) 0%, transparent 55%)",
                  }}
                />
                <div className="absolute bottom-0 right-0 left-0 p-5 text-white text-right">
                  <div
                    className="text-xs font-medium tracking-widest uppercase mb-1"
                    style={{ color: "oklch(0.85 0.15 85)" }}
                  >
                    סדרה / {m.id}
                  </div>
                  <h3 className="text-2xl font-black mb-1">{m.name}</h3>
                  <p className="text-sm font-light">{m.sub}</p>
                </div>
              </div>
              <div className="p-5 text-right" style={{ background: "white" }}>
                <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
                  {m.desc}
                </p>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: "var(--warm-sand)", color: "var(--deep-charcoal)" }}
                >
                  {m.privacy}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-right mt-8 text-sm" style={{ color: "var(--muted-foreground)" }}>
          לא בטוחים מה מתאים?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-2"
            style={{ color: "var(--earth)" }}
          >
            שלחו תמונה של החזית בוואטסאפ ונכוון אתכם.
          </a>
        </p>
      </div>
    </section>
  );
}

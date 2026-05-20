"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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

export default function Special() {
  const ref = useFadeUp();

  return (
    <section
      id="special"
      className="py-20 md:py-28 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={ref} className="fade-up text-right">
            <div className="section-label mb-3">עבודות מיוחדות · end to end</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              פרגולות, שערים
              <br />
              ופרויקטים
              <br />
              בהתאמה אישית
            </h2>
            <p className="text-lg mb-3" style={{ color: "var(--muted-foreground)" }}>
              לא כל עבודה היא מוצר מדף. יש פרויקטים שבהם הלקוח רוצה אחידות לכל המעטפת
              החיצונית של הבית — שער כניסה, פרגולה, גדר ומסתור.
            </p>
            <p className="text-base mb-6 font-semibold" style={{ color: "var(--deep-charcoal)" }}>
              בשיתוף עם{" "}
              <a
                href="https://www.keshatot.co.il/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: "var(--earth)" }}
              >
                קשתות פרגולות והצללה
              </a>
            </p>
            <ul className="rtl-bullet-list space-y-3 mb-8">
              {[
                "פתרון חוץ אחיד — גדר, שער, מסתור פח, פרגולות וחדרי חוץ עם סגירת זכוכית",
                "תכנון בהתאמה אישית",
                "ניהול מלא של הביצוע",
                "פתרון חוץ שלם: גדרות, שערים, פרגולות והצללה",
              ].map((item, i) => (
                <li key={i} className="earth-dot font-semibold">
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
              <WhatsAppIcon /> לתיאום ייעוץ לפרויקט מיוחד
            </a>
          </div>

          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/pergola.webp"
              alt="פרגולה ושער כניסה ראשי בקו עיצובי אחיד — מנצור אלומיניום"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, oklch(0.18 0.02 60 / 0.4), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

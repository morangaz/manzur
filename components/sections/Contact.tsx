"use client";

import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL, WAZE_URL, EMAIL_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/constants";
import { submitContact } from "@/actions/contact";

type FormData = {
  model: string;
  length: string;
  height: string;
  name: string;
  phone: string;
  email: string;
  privacy: string;
  notes: string;
  marketing: boolean;
};
type FormErrors = Partial<Record<keyof Omit<FormData, "marketing">, string>>;

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

export default function Contact() {
  const ref = useFadeUp();
  const [form, setForm] = useState<FormData>({
    model: "",
    length: "",
    height: "",
    name: "",
    phone: "",
    email: "",
    privacy: "",
    notes: "",
    marketing: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (submitted) dialogRef.current?.focus();
  }, [submitted]);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = "אנא הזינו שם מלא";
    const phonePattern = /^0[0-9]{2}-[0-9]{7}$/;
    if (!phonePattern.test(form.phone)) {
      errs.phone = "זהו שדה חובה יש להקפיד להקליד את מספר הטלפון בפורמט XXX-XXXXXXX";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const msg = encodeURIComponent(
      `שלום, אני מתעניין/ת בגדר אלומיניום:\n• שם: ${form.name}\n• טלפון: ${form.phone}${form.model ? `\n• דגם: ${form.model}` : ""}${form.privacy ? `\n• פרטיות: ${form.privacy}` : ""}${form.length ? `\n• אורך: ${form.length} מ׳` : ""}${form.height ? `\n• גובה: ${form.height} ס״מ` : ""}${form.notes ? `\n• הערות: ${form.notes}` : ""}${form.marketing ? "\n• אישר קבלת דיוור שיווקי" : ""}`
    );
    try {
      await submitContact({
        name: form.name,
        phone: form.phone,
        email: form.email || undefined,
        model: form.model || undefined,
        privacy: form.privacy || undefined,
        length: form.length || undefined,
        height: form.height || undefined,
        notes: form.notes || undefined,
        marketing: form.marketing,
      });
    } catch (err) {
      console.warn("[Contact] Server action failed:", err);
    }
    setLoading(false);
    setSubmitted(true);
    toast.success("הפרטים נשלחו! נחזור אליכם בהקדם.");
    window.open(`https://wa.me/972504646536?text=${msg}`, "_blank");
  };

  const set =
    (k: keyof Omit<FormData, "marketing">) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
    };

  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ background: "var(--deep-charcoal)", color: "var(--cream)" }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Contact form card */}
            <div
              className="p-8 rounded-3xl"
              style={{ background: "white", color: "var(--deep-charcoal)" }}
            >
              <div className="section-label mb-2" style={{ color: "oklch(0.42 0.08 145)" }}>
                צור קשר · הצעת מחיר
              </div>
              <h2 className="text-3xl font-black mb-6 text-right">
                בנו את הערכה
                <br />
                שלכם.
              </h2>

              {/* Thank-you modal */}
              {submitted && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  style={{ background: "oklch(0 0 0 / 0.6)", backdropFilter: "blur(4px)" }}
                  onClick={() => setSubmitted(false)}
                >
                  <div
                    ref={dialogRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-dialog-title"
                    tabIndex={-1}
                    className="relative max-w-md w-full p-8 rounded-3xl text-right shadow-2xl focus:outline-none"
                    style={{ background: "white", color: "var(--deep-charcoal)" }}
                    dir="rtl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => { setSubmitted(false); submitBtnRef.current?.focus(); }}
                      className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
                      style={{ background: "var(--warm-sand)" }}
                      aria-label="סגור חלון תודה"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M1 1l12 12M13 1L1 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <div className="text-5xl mb-4">🎁</div>
                    <h3 id="contact-dialog-title" className="text-2xl font-black mb-4">תודה על פנייתכם</h3>
                    <div className="space-y-3 text-base leading-relaxed">
                      <p>צוות המומחים שלנו יצור איתכם קשר עד יום העסקים הבא</p>
                      <p className="font-semibold">
                        לא רוצים לחכות... אנחנו זמינים בטלפון{" "}
                        <a
                          href="tel:0504646536"
                          className="underline underline-offset-2"
                          style={{ color: "var(--earth)" }}
                        >
                          050-4646536
                        </a>
                      </p>
                      <p style={{ color: "var(--muted-foreground)" }}>
                        אנו עושים כל מאמץ להתאים לדרישות הלקוח בקו העיצובי, מחיר וזמני אספקה
                      </p>
                      <p className="font-bold pt-2">
                        שלכם,
                        <br />
                        צוות מנצור אלומיניום 🌟
                      </p>
                    </div>
                    <button
                      onClick={() => { setSubmitted(false); submitBtnRef.current?.focus(); }}
                      className="mt-6 w-full py-3 rounded-full font-bold text-base hover:opacity-90 transition-opacity"
                      style={{ background: "var(--earth)", color: "white" }}
                    >
                      סגור
                    </button>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5 text-right"
                aria-label="טופס הצעת מחיר"
              >
                <h3 className="text-xl font-black mb-1">שלחו פרטים ונחזור אליכם</h3>
                <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
                  שדות חובה: שם וטלפון. השאר אופציונלי.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-field">
                    <label htmlFor="name">שם *</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="השם המלא"
                      value={form.name}
                      onChange={set("name")}
                      className={errors.name ? "error" : ""}
                      aria-required="true"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <span className="error-msg" role="alert">
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">טלפון *</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="050-1234567"
                      value={form.phone}
                      onChange={set("phone")}
                      className={errors.phone ? "error" : ""}
                      aria-required="true"
                      autoComplete="tel"
                    />
                    {errors.phone ? (
                      <span className="error-msg flex items-start gap-1" role="alert">
                        <span className="text-red-500 font-bold flex-shrink-0">*</span>
                        {errors.phone}
                      </span>
                    ) : (
                      <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                        פורמט: 050-1234567
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">אימייל (אופציונלי)</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={form.email}
                    onChange={set("email")}
                    autoComplete="email"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="model">דגם גדר (אופציונלי)</label>
                  <select
                    id="model"
                    value={form.model}
                    onChange={set("model")}
                    aria-label="בחירת דגם גדר"
                  >
                    <option value="">בחרו דגם...</option>
                    <option value="קלאסי">קלאסי</option>
                    <option value="כפרי">כפרי</option>
                    <option value="היי-טק מודרני">היי-טק מודרני</option>
                    <option value="חיתוכי לייזר">חיתוכי לייזר</option>
                    <option value="עדיין לא בטוח">עדיין לא בטוח</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="privacy">רמת פרטיות רצויה (אופציונלי)</label>
                  <select
                    id="privacy"
                    value={form.privacy}
                    onChange={set("privacy")}
                    aria-label="רמת פרטיות"
                  >
                    <option value="">בחרו רמת פרטיות...</option>
                    <option value="פרטיות מלאה">פרטיות מלאה</option>
                    <option value="פרטיות חלקית">פרטיות חלקית</option>
                    <option value="פרטיות מועטה">פרטיות מועטה</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-field">
                    <label htmlFor="length">אורך (מ׳)</label>
                    <input
                      id="length"
                      type="number"
                      min="1"
                      max="200"
                      placeholder="למשל 12"
                      value={form.length}
                      onChange={set("length")}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="height">גובה (ס״מ)</label>
                    <input
                      id="height"
                      type="number"
                      min="50"
                      max="300"
                      placeholder="למשל 180"
                      value={form.height}
                      onChange={set("height")}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="notes">הערות (אופציונלי)</label>
                  <textarea
                    id="notes"
                    rows={2}
                    placeholder="שטח לא ישר, שיפוע, מספר שערים, גוון רצוי..."
                    value={form.notes}
                    onChange={set("notes")}
                  />
                </div>

                <label
                  className="flex items-start gap-3 cursor-pointer text-right"
                  style={{ direction: "rtl" }}
                >
                  <input
                    type="checkbox"
                    checked={form.marketing}
                    onChange={(e) => setForm((f) => ({ ...f, marketing: e.target.checked }))}
                    className="mt-1 w-5 h-5 rounded flex-shrink-0 cursor-pointer"
                    style={{ accentColor: "var(--earth)" }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                    אני מאשר/ת קבלת דיוור שיווקי, מבצעים וקוד קופון למוצרים ועיצובי חוץ
                  </span>
                </label>

                <button
                  ref={submitBtnRef}
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-base py-4"
                  aria-label="שלחו את הטופס"
                >
                  {loading ? "שולחים..." : "שלחו את הטופס"}
                </button>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                  <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                    או
                  </span>
                  <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-base py-4"
                >
                  <WhatsAppIcon /> המשיכו בוואטסאפ
                </a>
                <p className="text-xs text-center" style={{ color: "var(--muted-foreground)" }}>
                  שליחת הפרטים אינה מחייבת. נחזור אליכם לאימות מידות והצעת מחיר.
                </p>
              </form>
            </div>

            {/* Contact info */}
            <div ref={ref} className="fade-up">
              <div className="section-label mb-5" style={{ color: "oklch(0.85 0.15 85)" }}>
                דרכי יצירת קשר
              </div>

              <div className="space-y-3 mb-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kit-item hover:opacity-90 transition-opacity"
                  style={{ background: "var(--warm-sand)" }}
                >
                  <div
                    className="kit-icon w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#25D366" }}
                  >
                    <WhatsAppIcon />
                  </div>
                  <div className="kit-text">
                    <div className="font-bold text-sm" style={{ color: "var(--deep-charcoal)" }}>
                      050-4646536
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      כתבו לנו בוואטסאפ
                    </div>
                  </div>
                </a>

                <a
                  href="tel:0504646536"
                  className="kit-item hover:opacity-90 transition-opacity"
                  style={{ background: "var(--warm-sand)" }}
                >
                  <div
                    className="kit-icon w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.85 0.15 85)" }}
                  >
                    <PhoneIcon />
                  </div>
                  <div className="kit-text">
                    <div className="font-bold text-sm" style={{ color: "var(--deep-charcoal)" }}>
                      050-4646536
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      טלפון נייד / מכירות
                    </div>
                  </div>
                </a>

                <a
                  href="tel:0976036020"
                  className="kit-item hover:opacity-90 transition-opacity"
                  style={{ background: "var(--warm-sand)" }}
                >
                  <div
                    className="kit-icon w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.85 0.15 85)" }}
                  >
                    <PhoneOfficeIcon />
                  </div>
                  <div className="kit-text">
                    <div className="font-bold text-sm" style={{ color: "var(--deep-charcoal)" }}>
                      09-7603602
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      טלפון משרד
                    </div>
                  </div>
                </a>

                <a
                  href={EMAIL_URL}
                  className="kit-item hover:opacity-90 transition-opacity"
                  style={{ background: "var(--warm-sand)" }}
                >
                  <div
                    className="kit-icon w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.85 0.15 85)" }}
                  >
                    <EmailIcon />
                  </div>
                  <div className="kit-text">
                    <div className="font-bold text-sm" style={{ color: "var(--deep-charcoal)" }}>
                      info@manzur.co.il
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      אימייל
                    </div>
                  </div>
                </a>

                <a
                  href={WAZE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kit-item hover:opacity-90 transition-opacity"
                  style={{ background: "var(--warm-sand)" }}
                >
                  <div
                    className="kit-icon w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                    style={{ background: "#33CCFF" }}
                  >
                    <WazeIcon />
                  </div>
                  <div className="kit-text">
                    <div className="font-bold text-sm" style={{ color: "var(--deep-charcoal)" }}>
                      החרושת 2, רעננה
                    </div>
                    <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                      נווט בוויז
                    </div>
                  </div>
                </a>
              </div>

              {/* Social */}
              <div className="text-xs mb-3 text-right" style={{ color: "oklch(0.65 0 0)" }}>
                עקבו אחרינו ברשתות
              </div>
              <div className="flex gap-3 justify-end">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{
                    background:
                      "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                    color: "white",
                  }}
                >
                  <InstagramIcon /> Instagram
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{ background: "#1877F2", color: "white" }}
                >
                  <FacebookIcon /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="oklch(0.18 0.02 60)" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function PhoneOfficeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="oklch(0.18 0.02 60)" aria-hidden="true">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="oklch(0.18 0.02 60)" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function WazeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <ellipse cx="24" cy="22" rx="18" ry="16" fill="white" />
      <path
        d="M24 38c-2 0-4-1-4-1l-6 3 1.5-5.5C13 32 6 27.5 6 22 6 13.16 14.06 6 24 6s18 7.16 18 16c0 5.5-7 10-7 10l1.5 5.5-6-3s-2 1-4 1z"
        fill="white"
        stroke="#33CCFF"
        strokeWidth="1.5"
      />
      <circle cx="17" cy="20" r="2.5" fill="#1a1a2e" />
      <circle cx="31" cy="20" r="2.5" fill="#1a1a2e" />
      <path d="M18 26c1.5 2 10.5 2 12 0" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "הצהרת נגישות | מנצור אלומיניום",
  description:
    "הצהרת נגישות של אתר מנצור אלומיניום — מחויבותנו לנגישות דיגיטלית בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות ותקן ישראלי 5568.",
  alternates: { canonical: "https://www.manzur.co.il/accessibility" },
  robots: { index: true, follow: true },
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <main id="main-content" className="pt-40 pb-20" style={{ background: "var(--cream)" }}>
        <div className="container max-w-3xl text-right">

          <h1 className="text-4xl font-black mb-3" style={{ color: "var(--deep-charcoal)" }}>
            הצהרת נגישות
          </h1>
          <p className="text-sm mb-10" style={{ color: "var(--muted-foreground)" }}>
            עודכן לאחרונה: יוני 2026
          </p>

          {/* Legal basis */}
          <section aria-labelledby="legal-heading" className="mb-10">
            <h2 id="legal-heading" className="text-2xl font-bold mb-4" style={{ color: "var(--deep-charcoal)" }}>
              מחויבות לנגישות
            </h2>
            <p className="leading-relaxed mb-4">
              מנצור אלומיניום מחויבת לנגישות דיגיטלית לכלל הציבור, לרבות אנשים עם מוגבלויות. אנו פועלים
              להנגשת האתר בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998, ותקנות שוויון זכויות
              לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג-2013, הדורשות עמידה בתקן ישראלי 5568 (המבוסס
              על הנחיות WCAG 2.1 ברמה AA).
            </p>
          </section>

          {/* Compliance level */}
          <section aria-labelledby="compliance-heading" className="mb-10">
            <h2 id="compliance-heading" className="text-2xl font-bold mb-4" style={{ color: "var(--deep-charcoal)" }}>
              רמת הנגישות
            </h2>
            <p className="leading-relaxed mb-4">
              אתר זה עומד בהתאמות נגישות ברמת AA של תקן WCAG 2.1 / תקן ישראלי 5568 באופן חלקי.
              אנו ממשיכים לשפר את הנגישות ולפתור ליקויים שנתגלו.
            </p>
          </section>

          {/* Accessible features */}
          <section aria-labelledby="features-heading" className="mb-10">
            <h2 id="features-heading" className="text-2xl font-bold mb-4" style={{ color: "var(--deep-charcoal)" }}>
              התאמות נגישות באתר
            </h2>
            <ul className="space-y-2 leading-relaxed list-disc list-inside" style={{ color: "var(--deep-charcoal)" }}>
              <li>האתר מוצג בעברית עם הגדרת שפה וכיוון RTL תקינים</li>
              <li>קיים קישור דילוג לתוכן הראשי (Skip to main content) בראש כל עמוד</li>
              <li>כל התמונות באתר כוללות טקסט חלופי (alt text) תיאורי</li>
              <li>כל שדות הטפסים מסומנים בתוויות (labels) מקושרות</li>
              <li>שגיאות בטפסים מדווחות בצורה ברורה עם הסבר לתיקון</li>
              <li>כפתורים ואיקונים אינטראקטיביים כוללים תיאורי aria-label לקוראי מסך</li>
              <li>אלמנטים דקורטיביים מסומנים aria-hidden ומוסתרים מקוראי מסך</li>
              <li>ניתן לנווט באתר באמצעות מקלדת בלבד</li>
              <li>הניגודיות בין הטקסט לרקע עומדת בדרישות תקן AA</li>
              <li>מבנה כותרות היררכי ועקבי בכל עמודי האתר</li>
              <li>מגנון הנפתח (FAQ) מוצג עם מצב aria-expanded ברור</li>
              <li>תפריט הניווט הנייד מסומן עם מצב פתוח/סגור לקוראי מסך</li>
            </ul>
          </section>

          {/* Known limitations */}
          <section aria-labelledby="limitations-heading" className="mb-10">
            <h2 id="limitations-heading" className="text-2xl font-bold mb-4" style={{ color: "var(--deep-charcoal)" }}>
              ליקויים ידועים
            </h2>
            <p className="leading-relaxed mb-3">
              להלן רשימת הליקויים הידועים שאנו עובדים על פתרונם:
            </p>
            <ul className="space-y-2 leading-relaxed list-disc list-inside" style={{ color: "var(--deep-charcoal)" }}>
              <li>חלק מהתכנים בגלריית הפרויקטים עשויים שלא להיות נגישים במלואם לכלל טכנולוגיות העזר</li>
              <li>תוכן וידאו, אם יתווסף בעתיד, ייכלל עם כתוביות</li>
            </ul>
          </section>

          {/* Browser and assistive tech */}
          <section aria-labelledby="tech-heading" className="mb-10">
            <h2 id="tech-heading" className="text-2xl font-bold mb-4" style={{ color: "var(--deep-charcoal)" }}>
              טכנולוגיות עזר תומכות
            </h2>
            <p className="leading-relaxed mb-3">האתר נבדק ונתמך בשילובים הבאים:</p>
            <ul className="space-y-2 leading-relaxed list-disc list-inside" style={{ color: "var(--deep-charcoal)" }}>
              <li>NVDA + Firefox (Windows)</li>
              <li>VoiceOver + Safari (macOS / iOS)</li>
              <li>TalkBack + Chrome (Android)</li>
              <li>ניווט מקלדת בדפדפנים Chrome, Firefox, Safari, Edge</li>
            </ul>
          </section>

          {/* Coordinator */}
          <section aria-labelledby="coordinator-heading" className="mb-10">
            <h2 id="coordinator-heading" className="text-2xl font-bold mb-4" style={{ color: "var(--deep-charcoal)" }}>
              רכז נגישות ויצירת קשר
            </h2>
            <p className="leading-relaxed mb-4">
              מונה רכז נגישות מטעם מנצור אלומיניום. לדיווח על בעיות נגישות, בקשות להתאמות, או כל פנייה
              הקשורה לנגישות האתר:
            </p>
            <div
              className="p-6 rounded-2xl"
              style={{ background: "oklch(0.95 0.01 80)", border: "1px solid var(--border)" }}
            >
              <p className="font-bold text-lg mb-1" style={{ color: "var(--deep-charcoal)" }}>
                מנצור אלומיניום — רכז נגישות
              </p>
              <p className="mb-1">
                <a
                  href="tel:097603602"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: "var(--earth)" }}
                >
                  09-7603602
                </a>
              </p>
              <p className="mb-1">
                <a
                  href="mailto:info@manzur.co.il"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: "var(--earth)" }}
                >
                  info@manzur.co.il
                </a>
              </p>
              <p style={{ color: "var(--muted-foreground)" }}>
                שעות מענה: ראשון–חמישי 08:00–17:00, שישי 08:00–14:00
              </p>
            </div>
            <p className="text-sm mt-4 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              נשתדל להשיב לפניות נגישות תוך 5 ימי עסקים. אם לא קיבלתם מענה מספק, ניתן לפנות לנציבות שוויון
              זכויות לאנשים עם מוגבלות במשרד המשפטים.
            </p>
          </section>

          {/* Physical accessibility */}
          <section aria-labelledby="physical-heading" className="mb-10">
            <h2 id="physical-heading" className="text-2xl font-bold mb-4" style={{ color: "var(--deep-charcoal)" }}>
              נגישות פיזית למפעל
            </h2>
            <p className="leading-relaxed">
              המפעל ממוקם ברחוב החרושת 2, רעננה. לבירור לגבי נגישות פיזית לאתר העסק, צרו קשר בטלפון{" "}
              <a href="tel:097603602" className="font-semibold underline underline-offset-2" style={{ color: "var(--earth)" }}>
                09-7603602
              </a>{" "}
              מראש.
            </p>
          </section>

          {/* Complaint pathway */}
          <section aria-labelledby="complaint-heading" className="mb-6">
            <h2 id="complaint-heading" className="text-2xl font-bold mb-4" style={{ color: "var(--deep-charcoal)" }}>
              הגשת תלונה
            </h2>
            <p className="leading-relaxed">
              אם ניסיתם לדווח על בעיית נגישות ולא קיבלתם מענה מספק, ניתן לפנות לנציבות שוויון זכויות לאנשים
              עם מוגבלות: טלפון 02-6495100, אתר{" "}
              <a
                href="https://www.justice.gov.il/Units/NetzivutShivyon"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: "var(--earth)" }}
              >
                משרד המשפטים — נציבות שוויון
              </a>
              .
            </p>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

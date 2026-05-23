"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER } from "@/lib/constants";

// ─── Color palette ────────────────────────────────────────────────────────────
const COLORS = [
  { name: "אנתרציט", hex: "#3d3d3d", label: "7016 Anthracite" },
  { name: "לבן", hex: "#f5f5f0", label: "9016 Traffic White" },
  { name: "חום עץ", hex: "#7a5c3a", label: "8017 Chocolate Brown" },
  { name: "אפור בהיר", hex: "#9e9e9e", label: "7040 Window Grey" },
  { name: "שחור", hex: "#1a1a1a", label: "9005 Jet Black" },
  { name: "בז׳ חם", hex: "#c8b89a", label: "1001 Beige" },
  { name: "ירוק כהה", hex: "#3a5a40", label: "6009 Fir Green" },
  { name: "כסוף", hex: "#b0b8c1", label: "Silver Anodized" },
];

type Product = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  dimensions: string;
  colors: string[];
  notes: string;
  image: string;
  badge?: string;
};

type Section = {
  id: string;
  title: string;
  icon: string;
  products: Product[];
};

const DEFAULT_SECTIONS: Section[] = [
  {
    id: "horizontal",
    title: "שלבים אופקיים",
    icon: "▬",
    products: [
      {
        id: "h1",
        name: "עינת קלאסי",
        subtitle: "שלבים אופקיים — מרווח אחיד",
        description: "גדר אופקית עם שלבים בעובי אחיד ומרווחים שווים. מראה רגוע וקלאסי שמשתלב בכל סגנון אדריכלי. מתאים לגדרות חצר, גבולות מגרש ומסתורים.",
        dimensions: "שלב: 80×20 מ״מ | מרווח: 30 מ״מ | גובה: 80–200 ס״מ | אורך מקסימלי: 6 מ׳",
        colors: ["#3d3d3d", "#f5f5f0", "#7a5c3a", "#9e9e9e"],
        notes: "זמן אספקה: 10–14 ימי עסקים",
        image: "/images/fence-classic.png",
        badge: "הכי פופולרי",
      },
      {
        id: "h2",
        name: "ורד — שלב רחב",
        subtitle: "שלבים אופקיים — פאסיה רחבה",
        description: "שלבים רחבים עם מרווחים קטנים. מסך אחיד שיוצר תחושת חצר אינטימית ופרטיות מלאה. מומלץ לחצרות שדורשות הסתרה מרבית.",
        dimensions: "שלב: 120×20 מ״מ | מרווח: 10 מ״מ | גובה: 100–220 ס״מ | אורך מקסימלי: 6 מ׳",
        colors: ["#3d3d3d", "#7a5c3a", "#1a1a1a", "#c8b89a"],
        notes: "פרטיות גבוהה — מרווח מינימלי",
        image: "/images/fence-classic.png",
      },
    ],
  },
  {
    id: "vertical",
    title: "שלבים אנכיים",
    icon: "▮",
    products: [
      {
        id: "v1",
        name: "שלב אנכי קלאסי",
        subtitle: "שלבים אנכיים — מרווח אחיד",
        description: "גדר אנכית עם שלבים בעובי אחיד. מראה נקי ומודרני, מתאים במיוחד לשערים ולגדרות כניסה. יוצר תחושה של גובה ויוקרה.",
        dimensions: "שלב: 20×40 מ״מ | מרווח: 25 מ״מ | גובה: 80–250 ס״מ | אורך מקסימלי: 4 מ׳",
        colors: ["#3d3d3d", "#f5f5f0", "#1a1a1a", "#b0b8c1"],
        notes: "מתאים במיוחד לשערים",
        image: "/images/fence-classic.png",
      },
      {
        id: "v2",
        name: "שלב אנכי צפוף",
        subtitle: "שלבים אנכיים — פרטיות גבוהה",
        description: "שלבים אנכיים צפופים עם מרווח מינימלי. מתאים לגדרות שדורשות פרטיות מלאה עם מראה אנכי מודרני.",
        dimensions: "שלב: 20×40 מ״מ | מרווח: 8 מ״מ | גובה: 100–250 ס״מ | אורך מקסימלי: 4 מ׳",
        colors: ["#3d3d3d", "#1a1a1a", "#9e9e9e"],
        notes: "פרטיות מרבית",
        image: "/images/fence-classic.png",
      },
    ],
  },
  {
    id: "hitech",
    title: "פרופיל הייטק",
    icon: "◈",
    products: [
      {
        id: "ht1",
        name: "הייטק — חיתוך גיאומטרי",
        subtitle: "פאנל לייזר — דגם גיאומטרי",
        description: "פאנל אלומיניום עם חיתוכי לייזר גיאומטריים. מראה אדריכלי ייחודי, אפשרות לתאורה משולבת מאחורי הפאנל. מתאים לחזיתות בית, שערים ומסתורים.",
        dimensions: "פאנל: 200×100 ס״מ | עובי: 3 מ״מ | גובה מקסימלי: 250 ס״מ | רוחב מקסימלי: 300 ס״מ",
        colors: ["#3d3d3d", "#1a1a1a", "#b0b8c1"],
        notes: "אפשרות לתאורה LED משולבת",
        image: "/images/fence-laser.webp",
        badge: "חדש",
      },
    ],
  },
  {
    id: "hitech-angled",
    title: "פרופיל הייטק משופע",
    icon: "◇",
    products: [
      {
        id: "hta1",
        name: "הייטק שברון",
        subtitle: "פאנל לייזר — דגם שברון אלכסוני",
        description: "פאנל אלומיניום עם חיתוכי לייזר אלכסוניים בדגם שברון. תנועה ודינמיות ויזואלית. מתאים לחזיתות מודרניות ולפרויקטים אדריכליים ייחודיים.",
        dimensions: "פאנל: 200×100 ס״מ | עובי: 3 מ״מ | גובה מקסימלי: 250 ס״מ | רוחב מקסימלי: 300 ס״מ",
        colors: ["#3d3d3d", "#1a1a1a"],
        notes: "ניתן להתאמה אישית של זווית החיתוך",
        image: "/images/fence-hitech-slope.png",
      },
    ],
  },
  {
    id: "special",
    title: "עבודות מיוחדות",
    icon: "✦",
    products: [
      {
        id: "sp1",
        name: "פרגולה + שער + גדר",
        subtitle: "פרויקט מעטפת חיצונית שלמה",
        description: "תכנון וביצוע של מעטפת חיצונית שלמה בקו עיצובי אחיד: שער כניסה, גדר, פרגולה ומסתורים. מאפיון הצרכים ועד ניהול הביצוע.",
        dimensions: "לפי מידות הפרויקט | תכנון מותאם אישית",
        colors: ["#3d3d3d", "#1a1a1a", "#7a5c3a", "#9e9e9e"],
        notes: "כולל ייעוץ עיצובי ותכנון | זמן ביצוע: לפי היקף הפרויקט",
        image: "/images/pergola.webp",
      },
    ],
  },
];

// ─── Editable text ─────────────────────────────────────────────────────────────
function EditableText({
  value,
  onChange,
  className,
  multiline = false,
  placeholder,
  editMode,
}: {
  value: string;
  onChange: (v: string) => void;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  editMode: boolean;
}) {
  const [editing, setEditing] = useState(false);

  if (!editMode) {
    return <span className={className}>{value}</span>;
  }

  if (editing) {
    if (multiline) {
      return (
        <textarea
          autoFocus
          className={`${className} border-2 rounded-lg p-1 w-full resize-none outline-none`}
          style={{ borderColor: "var(--earth)", fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
          value={value}
          rows={4}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setEditing(false)}
        />
      );
    }
    return (
      <input
        autoFocus
        type="text"
        className={`${className} border-2 rounded-lg px-2 py-0.5 w-full outline-none`}
        style={{ borderColor: "var(--earth)", fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setEditing(false)}
        onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
      />
    );
  }

  return (
    <span
      className={`${className} cursor-text hover:bg-yellow-50 hover:outline hover:outline-2 hover:outline-dashed rounded transition-all`}
      style={{ outlineColor: "var(--earth)" }}
      onClick={() => setEditing(true)}
      title="לחצו לעריכה"
    >
      {value || <span className="text-gray-400 italic">{placeholder}</span>}
    </span>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────
function ProductCard({
  product,
  editMode,
  onUpdate,
}: {
  product: Product;
  editMode: boolean;
  onUpdate: (field: keyof Product, value: string | string[]) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImgSrc(url);
    onUpdate("image", url);
  };

  const toggleColor = (hex: string) => {
    const next = product.colors.includes(hex)
      ? product.colors.filter((c) => c !== hex)
      : [...product.colors, hex];
    onUpdate("colors", next);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: "var(--border)" }}>
      {/* Image */}
      <div className="relative group" style={{ aspectRatio: "4/3" }}>
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {product.badge && (
          <span
            className="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white"
            style={{ background: "var(--earth)" }}
          >
            {product.badge}
          </span>
        )}
        {editMode && (
          <button
            onClick={() => fileRef.current?.click()}
            className="absolute bottom-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: "oklch(0.22 0.02 60 / 0.85)" }}
          >
            📷 החלף תמונה
          </button>
        )}
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <EditableText
          editMode={editMode}
          value={product.name}
          onChange={(v) => onUpdate("name", v)}
          className="block text-xl font-black mb-1"
          placeholder="שם המוצר"
        />

        {/* Subtitle */}
        <EditableText
          editMode={editMode}
          value={product.subtitle}
          onChange={(v) => onUpdate("subtitle", v)}
          className="block text-sm font-semibold mb-3"
          placeholder="כותרת משנה"
        />

        {/* Description */}
        <div className="mb-4">
          <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--muted-foreground)" }}>
            תיאור
          </div>
          <EditableText
            editMode={editMode}
            value={product.description}
            onChange={(v) => onUpdate("description", v)}
            className="block text-sm leading-relaxed"
            multiline
            placeholder="תיאור המוצר"
          />
        </div>

        {/* Dimensions */}
        <div className="mb-4 p-3 rounded-xl" style={{ background: "var(--cream)" }}>
          <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--muted-foreground)" }}>
            מידות
          </div>
          <EditableText
            editMode={editMode}
            value={product.dimensions}
            onChange={(v) => onUpdate("dimensions", v)}
            className="block text-sm font-mono font-semibold"
            placeholder="מידות המוצר"
          />
        </div>

        {/* Colors */}
        <div className="mb-4">
          <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--muted-foreground)" }}>
            גוונים זמינים
          </div>
          <div className="flex flex-wrap gap-2">
            {editMode
              ? COLORS.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => toggleColor(c.hex)}
                    className="w-7 h-7 rounded-full border-2 transition-all"
                    style={{
                      background: c.hex,
                      borderColor: product.colors.includes(c.hex) ? "var(--earth)" : "transparent",
                      outline: product.colors.includes(c.hex) ? "2px solid var(--earth)" : "none",
                      outlineOffset: "2px",
                    }}
                    title={`${c.name} — ${c.label}`}
                  />
                ))
              : product.colors.map((hex) => {
                  const color = COLORS.find((c) => c.hex === hex);
                  return (
                    <div
                      key={hex}
                      className="w-7 h-7 rounded-full border-2"
                      style={{ background: hex, borderColor: "oklch(0.88 0.012 80)" }}
                      title={color ? `${color.name} — ${color.label}` : hex}
                    />
                  );
                })}
          </div>
        </div>

        {/* Notes */}
        {(editMode || product.notes) && (
          <div className="text-xs rounded-xl p-3" style={{ background: "oklch(0.94 0.015 80 / 0.5)", color: "var(--muted-foreground)" }}>
            <EditableText
              editMode={editMode}
              value={product.notes}
              onChange={(v) => onUpdate("notes", v)}
              className="block"
              placeholder="הערות"
            />
          </div>
        )}

        {/* CTA */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`שלום, אני מעוניין במוצר: ${product.name}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full text-center block mt-4 text-sm"
        >
          ☎ בקש הצעת מחיר
        </a>
      </div>
    </div>
  );
}

// ─── Main Catalog Client ───────────────────────────────────────────────────────
export default function CatalogClient() {
  const [sections, setSections] = useState<Section[]>(DEFAULT_SECTIONS);
  const [editMode, setEditMode] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const updateProduct = (sectionId: string, productId: string, field: keyof Product, value: string | string[]) => {
    setSections((prev) =>
      prev.map((s) =>
        s.id !== sectionId
          ? s
          : {
              ...s,
              products: s.products.map((p) =>
                p.id !== productId ? p : { ...p, [field]: value }
              ),
            }
      )
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: "קטלוג מנצור אלומיניום", url });
    } else {
      navigator.clipboard.writeText(url).then(() => alert("הקישור הועתק!"));
    }
  };

  const visibleSections = activeSection
    ? sections.filter((s) => s.id === activeSection)
    : sections;

  return (
    <div className="min-h-screen" dir="rtl" style={{ background: "var(--cream)" }}>
      {/* Print CSS */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          .print-break { page-break-before: always; }
        }
      `}</style>

      {/* Header */}
      <div className="no-print sticky top-0 z-40 border-b" style={{ background: "var(--cream)", borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-row-reverse">
          <div className="flex items-center gap-3 flex-row-reverse">
            <Image src="/images/logo.png" alt="מנצור אלומיניום" width={48} height={48} className="object-contain" />
            <div>
              <div className="font-black text-lg" style={{ color: "var(--deep-charcoal)" }}>
                קטלוג מוצרים
              </div>
              <div className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                מנצור אלומיניום · {sections.reduce((n, s) => n + s.products.length, 0)} מוצרים
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-row-reverse">
            <button
              onClick={() => setEditMode((v) => !v)}
              className="btn-primary text-sm px-4 py-2"
            >
              {editMode ? "✓ סיום עריכה" : "✏ עריכה"}
            </button>
            <button onClick={handlePrint} className="btn-secondary text-sm px-4 py-2">
              🖨 הדפסה
            </button>
            <button onClick={handleShare} className="btn-secondary text-sm px-4 py-2">
              🔗 שיתוף
            </button>
          </div>
        </div>

        {/* Section filters */}
        <div className="max-w-6xl mx-auto px-4 pb-3 flex gap-2 flex-wrap flex-row-reverse">
          <button
            onClick={() => setActiveSection(null)}
            className="text-xs px-3 py-1.5 rounded-full font-semibold transition-all"
            style={{
              background: !activeSection ? "var(--earth)" : "white",
              color: !activeSection ? "white" : "var(--deep-charcoal)",
              border: "1px solid var(--border)",
            }}
          >
            הכל
          </button>
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(activeSection === s.id ? null : s.id)}
              className="text-xs px-3 py-1.5 rounded-full font-semibold transition-all"
              style={{
                background: activeSection === s.id ? "var(--earth)" : "white",
                color: activeSection === s.id ? "white" : "var(--deep-charcoal)",
                border: "1px solid var(--border)",
              }}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Edit mode banner */}
      {editMode && (
        <div
          className="no-print text-center py-2 text-sm font-semibold"
          style={{ background: "oklch(0.96 0.03 145)", color: "var(--earth)" }}
        >
          ✏ מצב עריכה — לחצו על כל טקסט לעריכה, ועל עיגולי הצבע להוספה/הסרה
        </div>
      )}

      {/* Catalog content */}
      <div className="max-w-6xl mx-auto px-4 py-8" ref={printRef}>
        {visibleSections.map((section) => (
          <div key={section.id} className="mb-12 print-break">
            <div className="flex items-center gap-3 mb-6 flex-row-reverse">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="text-2xl font-black" style={{ color: "var(--deep-charcoal)" }}>
                {section.title}
              </h2>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  editMode={editMode}
                  onUpdate={(field, value) => updateProduct(section.id, product.id, field, value)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="no-print border-t py-12 text-center" style={{ borderColor: "var(--border)", background: "var(--deep-charcoal)" }}>
        <div className="text-2xl font-black text-white mb-2">מעוניינים? נשמח לעזור!</div>
        <div className="text-sm mb-6" style={{ color: "oklch(0.7 0.02 60)" }}>
          צרו קשר לקבלת הצעת מחיר מותאמת
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("שלום, ראיתי את הקטלוג ואני מעוניין לקבל הצעת מחיר")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp inline-block px-8 py-3"
        >
          דברו איתנו בוואטסאפ
        </a>
      </div>

      {/* Back to site */}
      <div className="no-print text-center py-4" style={{ background: "var(--cream)" }}>
        <a href="/" className="text-sm" style={{ color: "var(--earth)" }}>
          ← חזרה לאתר
        </a>
      </div>
    </div>
  );
}

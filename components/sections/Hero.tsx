import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32">
      {/* Background image — priority for LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="גדר אלומיניום מודרנית בכניסה לבית פרטי ברעננה"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, oklch(0.12 0.02 60 / 0.82) 0%, oklch(0.12 0.02 60 / 0.55) 55%, oklch(0.12 0.02 60 / 0.2) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex justify-start">
        <div className="max-w-xl text-right" style={{ color: "white" }}>
          <div className="section-label mb-4" style={{ color: "oklch(0.85 0.15 85)" }}>
            DIY · אלומיניום · רעננה
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            style={{
              textShadow: "0 2px 20px oklch(0 0 0 / 0.7)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
            }}
          >
            ״כל בית
            <br />
            והגדר שלו...״
          </h1>
          <p
            className="text-xl md:text-2xl font-bold mb-8 leading-relaxed"
            style={{ color: "white", textShadow: "0 1px 10px oklch(0 0 0 / 0.65)" }}
          >
            הסיפור של הבית שלכם מתחיל מהחזית הראשונית —
            <br />
            בואו ליצור אווירה מהרגע הראשון.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { label: "איכות ושירות", icon: <StarIcon /> },
              { label: "אספקה מהירה", icon: <TruckIcon /> },
              { label: "אחריות ואמינות", icon: <ShieldIcon /> },
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full"
                style={{
                  background: "oklch(0.85 0.15 85 / 0.9)",
                  border: "1px solid oklch(0.85 0.15 85)",
                  color: "oklch(0.18 0.02 60)",
                  backdropFilter: "blur(6px)",
                }}
              >
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <a href="#paths" className="btn-primary">
              בנו את הערכה שלכם
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#models"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-xs font-medium tracking-widest uppercase"
        aria-label="גלילה למטה"
      >
        <span>גלילה</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce">
          <path
            d="M10 4v12M4 10l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 5v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

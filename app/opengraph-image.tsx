import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "מנצור אלומיניום — גדרות אלומיניום ברעננה";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          background: "#1a1714",
          padding: "60px 72px",
          direction: "rtl",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Green accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 8,
            height: "100%",
            background: "#4a7c59",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            background: "#4a7c59",
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            padding: "8px 20px",
            borderRadius: 100,
            marginBottom: 24,
          }}
        >
          35 שנות ניסיון · רעננה, ישראל
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 20,
            textAlign: "right",
          }}
        >
          מנצור אלומיניום
        </div>

        {/* Sub heading */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 400,
            color: "#a89880",
            marginBottom: 40,
            textAlign: "right",
          }}
        >
          גדרות אלומיניום איכותיות · התקנה מקצועית
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48, flexDirection: "row-reverse" }}>
          {[
            { n: "300+", label: "פרויקטים" },
            { n: "35", label: "שנות ניסיון" },
            { n: "4", label: "דגמי גדר" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div style={{ fontSize: 48, fontWeight: 900, color: "#4a7c59" }}>
                {item.n}
              </div>
              <div style={{ fontSize: 18, color: "#8a7a6a" }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Phone */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 72,
            fontSize: 22,
            color: "#7a6a5a",
            display: "flex",
            gap: 8,
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <span>050-4646536 | 09-7603602</span>
          <span>📞</span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 72,
            fontSize: 20,
            color: "#6a5a4a",
          }}
        >
          manzur.co.il
        </div>
      </div>
    ),
    { ...size }
  );
}

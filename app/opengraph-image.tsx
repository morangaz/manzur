import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "מנצור אלומיניום — גדרות אלומיניום ברעננה";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Satori renders Hebrew LTR — reversing the string makes it display correctly
function rtl(str: string) {
  return str.split("").reverse().join("");
}

export default function OgImage() {
  const heeboHebrew = readFileSync(join(process.cwd(), "public/fonts/heebo-hebrew-900.woff"));
  const heeboLatin = readFileSync(join(process.cwd(), "public/fonts/heebo-latin-900.woff"));

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
          padding: "60px 80px",
          fontFamily: "Heebo, Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Green accent bar on right edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 10,
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
            fontSize: 20,
            fontWeight: 900,
            padding: "10px 28px",
            borderRadius: 100,
            marginBottom: 32,
          }}
        >
          {rtl("רעננה, ישראל · 35 שנות ניסיון")}
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 84,
            fontWeight: 900,
            color: "white",
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          {rtl("מנצור אלומיניום")}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 34,
            fontWeight: 900,
            color: "#a89880",
            marginBottom: 52,
          }}
        >
          {rtl("גדרות אלומיניום איכותיות · התקנה מקצועית")}
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 60,
          }}
        >
          {[
            { n: "300+", label: rtl("פרויקטים") },
            { n: "35", label: rtl("שנות ניסיון") },
            { n: "4", label: rtl("דגמי גדר") },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  fontSize: 54,
                  fontWeight: 900,
                  color: "#4a7c59",
                  lineHeight: 1,
                }}
              >
                {item.n}
              </div>
              <div style={{ fontSize: 20, color: "#8a7a6a" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Phone bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 22,
            color: "#7a6a5a",
          }}
        >
          050-4646536 | 09-7603602
        </div>

        {/* URL bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 80,
            fontSize: 20,
            color: "#6a5a4a",
          }}
        >
          manzur.co.il
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Heebo",
          data: heeboHebrew.buffer as ArrayBuffer,
          weight: 900,
          style: "normal",
        },
        {
          name: "Heebo",
          data: heeboLatin.buffer as ArrayBuffer,
          weight: 900,
          style: "normal",
        },
      ],
    }
  );
}

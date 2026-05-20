import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "מנצור אלומיניום",
    short_name: "מנצור",
    description: "גדרות אלומיניום איכותיות ברעננה — 35 שנות ניסיון",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#2e2a24",
    lang: "he",
    dir: "rtl",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}

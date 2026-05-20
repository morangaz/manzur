import Image from "next/image";
import { WAZE_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{ background: "oklch(0.12 0.01 60)", color: "oklch(0.65 0 0)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="מנצור אלומיניום"
              width={160}
              height={48}
              className="h-12 w-auto object-contain opacity-90"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-right">
            <a href="tel:0504646536" className="hover:text-white transition-colors">
              050-4646536
            </a>
            <a
              href={WAZE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              החרושת 2, רעננה
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
          <div className="text-xs text-center">כל הזכויות שמורות · מנצור אלומיניום · 2026</div>
        </div>
      </div>
    </footer>
  );
}

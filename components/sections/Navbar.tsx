"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/constants";

const links = [
  { label: "דגמי גדר", href: "#models" },
  { label: "איך זה עובד", href: "#how-it-works" },
  { label: "גלריה", href: "#gallery" },
  { label: "קטלוג", href: "#catalog" },
  { label: "עבודות מיוחדות", href: "#special" },
  { label: "אודות", href: "#about" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
      style={{
        background: scrolled ? "oklch(0.98 0.008 80 / 1)" : "oklch(0.98 0.008 80 / 0.96)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid oklch(0.9 0.01 80)" : "none",
      }}
    >
      <div className="container flex flex-row-reverse items-center justify-between h-32">
        {/* Logo — right side (RTL: visually right = logo) */}
        <a href="/" aria-label="מנצור אלומיניום" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="מנצור אלומיניום"
            width={320}
            height={128}
            priority
            className="h-32 w-auto object-contain"
          />
        </a>

        {/* Desktop links — RTL order */}
        <div className="hidden md:flex flex-row items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold hover:opacity-70 transition-opacity"
              style={{ color: "var(--deep-charcoal)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="תפריט"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 rounded transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "var(--deep-charcoal)" }}
            />
            <span
              className={`block h-0.5 rounded transition-all duration-200 ${open ? "opacity-0" : ""}`}
              style={{ background: "var(--deep-charcoal)" }}
            />
            <span
              className={`block h-0.5 rounded transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "var(--deep-charcoal)" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3 text-right"
          style={{ background: "oklch(0.98 0.008 80)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-semibold border-b"
              style={{ color: "var(--deep-charcoal)", borderColor: "var(--border)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm mt-2 justify-center"
          >
            <WhatsAppIcon /> לתיאום ייעוץ
          </a>
        </div>
      )}
    </nav>
  );
}

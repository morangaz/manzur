"use client";

import { useEffect, useRef, useState } from "react";

type ColorScheme = "normal" | "high-contrast" | "dark" | "bright";

type Settings = {
  fontSize: 0 | 1 | 2 | 3;
  colorScheme: ColorScheme;
  underlineLinks: boolean;
  noAnimations: boolean;
};

const DEFAULT: Settings = {
  fontSize: 0,
  colorScheme: "normal",
  underlineLinks: false,
  noAnimations: false,
};

const FONT_SIZES = ["100%", "120%", "140%", "160%"];
const COLOR_CLASSES: ColorScheme[] = ["normal", "high-contrast", "dark", "bright"];

function applySettings(s: Settings) {
  const html = document.documentElement;

  // Font size
  html.style.fontSize = FONT_SIZES[s.fontSize];

  // Color scheme — toggle exactly one class
  COLOR_CLASSES.forEach((c) => html.classList.remove(`a11y-color-${c}`));
  if (s.colorScheme !== "normal") html.classList.add(`a11y-color-${s.colorScheme}`);

  // Toggles
  html.classList.toggle("a11y-underline-links", s.underlineLinks);
  html.classList.toggle("a11y-no-animations", s.noAnimations);
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [s, setS] = useState<Settings>(DEFAULT);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Load saved settings
  useEffect(() => {
    try {
      const raw = localStorage.getItem("manzur-a11y");
      if (raw) {
        const saved: Settings = { ...DEFAULT, ...JSON.parse(raw) };
        setS(saved);
        applySettings(saved);
      }
    } catch {}
  }, []);

  // Apply on every change
  useEffect(() => {
    applySettings(s);
    try {
      localStorage.setItem("manzur-a11y", JSON.stringify(s));
    } catch {}
  }, [s]);

  // Focus panel on open
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  // Escape key closes panel
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const update = (patch: Partial<Settings>) => setS((prev) => ({ ...prev, ...patch }));

  const reset = () => {
    setS(DEFAULT);
    applySettings(DEFAULT);
    try {
      localStorage.removeItem("manzur-a11y");
    } catch {}
  };

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      {/* Floating trigger */}
      <button
        ref={triggerRef}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "סגור תפריט נגישות" : "פתח תפריט נגישות"}
        aria-expanded={open}
        aria-controls="a11y-panel"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full shadow-xl flex flex-col items-center justify-center gap-0.5 transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-amber-400"
        style={{ background: "var(--earth)", color: "white" }}
      >
        <PersonIcon />
        <span className="text-[9px] font-bold leading-none select-none">נגישות</span>
      </button>

      {/* Panel */}
      {open && (
        <div
          id="a11y-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="כלי נגישות"
          tabIndex={-1}
          dir="rtl"
          className="fixed bottom-24 right-6 z-[9998] w-72 rounded-2xl shadow-2xl overflow-hidden focus:outline-none"
          style={{ background: "white", color: "var(--deep-charcoal)", border: "1px solid var(--border)" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ background: "var(--earth)", color: "white" }}
          >
            <div className="flex items-center gap-2">
              <PersonIcon />
              <span className="font-bold text-sm">כלי נגישות</span>
            </div>
            <button
              onClick={close}
              aria-label="סגור כלי נגישות"
              className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="p-4 space-y-5 max-h-[72vh] overflow-y-auto">
            {/* Font size */}
            <fieldset>
              <legend
                className="text-xs font-bold mb-2.5 block w-full text-right"
                style={{ color: "var(--muted-foreground)" }}
              >
                גודל גופן
              </legend>
              <div className="grid grid-cols-4 gap-1.5">
                {(
                  [
                    [0, "A", "רגיל"],
                    [1, "A+", "גדול"],
                    [2, "A++", "גדול מאוד"],
                    [3, "A+++", "ענק"],
                  ] as [0 | 1 | 2 | 3, string, string][]
                ).map(([val, label, desc]) => (
                  <button
                    key={val}
                    onClick={() => update({ fontSize: val })}
                    aria-pressed={s.fontSize === val}
                    aria-label={`גודל גופן: ${desc}`}
                    className="py-2 rounded-xl text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    style={
                      s.fontSize === val
                        ? { background: "var(--earth)", color: "white" }
                        : { background: "var(--warm-sand)", color: "var(--deep-charcoal)" }
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Color scheme */}
            <fieldset>
              <legend
                className="text-xs font-bold mb-2.5 block w-full text-right"
                style={{ color: "var(--muted-foreground)" }}
              >
                צבע ובהירות
              </legend>
              <div className="grid grid-cols-2 gap-1.5">
                {(
                  [
                    ["normal", "רגיל", "🌿"],
                    ["high-contrast", "ניגודיות גבוהה", "⚫"],
                    ["dark", "מצב כהה", "🌙"],
                    ["bright", "מצב בהיר", "☀"],
                  ] as [ColorScheme, string, string][]
                ).map(([val, label, icon]) => (
                  <button
                    key={val}
                    onClick={() => update({ colorScheme: val })}
                    aria-pressed={s.colorScheme === val}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 text-right"
                    style={
                      s.colorScheme === val
                        ? { background: "var(--earth)", color: "white" }
                        : { background: "var(--warm-sand)", color: "var(--deep-charcoal)" }
                    }
                  >
                    <span aria-hidden="true">{icon}</span>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Toggles */}
            <fieldset>
              <legend
                className="text-xs font-bold mb-2.5 block w-full text-right"
                style={{ color: "var(--muted-foreground)" }}
              >
                אפשרויות נוספות
              </legend>
              <div className="space-y-2">
                {(
                  [
                    ["underlineLinks", "🔗 הדגש קישורים"],
                    ["noAnimations", "⏸ עצור אנימציות"],
                  ] as [keyof Pick<Settings, "underlineLinks" | "noAnimations">, string][]
                ).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => update({ [key]: !s[key] })}
                    aria-pressed={s[key]}
                    className="w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    style={
                      s[key]
                        ? { background: "var(--earth)", color: "white" }
                        : { background: "var(--warm-sand)", color: "var(--deep-charcoal)" }
                    }
                  >
                    <span
                      className="w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center"
                      style={{ borderColor: s[key] ? "white" : "var(--muted-foreground)" }}
                      aria-hidden="true"
                    >
                      {s[key] && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M1.5 5l2.5 2.5 5-5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="flex-1 text-right">{label}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Footer */}
            <div className="space-y-2 pt-1 border-t" style={{ borderColor: "var(--border)" }}>
              <button
                onClick={reset}
                className="w-full py-2.5 rounded-xl text-sm font-bold border-2 transition-colors hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                style={{ borderColor: "var(--earth)", color: "var(--earth)", background: "white" }}
              >
                איפוס הגדרות
              </button>
              <a
                href="/accessibility"
                className="block text-center w-full py-2.5 rounded-xl text-sm font-bold transition-colors hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                style={{ background: "var(--warm-sand)", color: "var(--deep-charcoal)" }}
              >
                הצהרת נגישות
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PersonIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

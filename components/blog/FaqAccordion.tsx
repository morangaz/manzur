"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/blog-posts";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="border rounded-xl overflow-hidden"
          style={{ borderColor: "var(--border)" }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-right font-bold transition-colors"
            style={{
              background: open === i ? "var(--warm-sand)" : "white",
              color: "var(--deep-charcoal)",
            }}
            aria-expanded={open === i}
          >
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-black transition-transform duration-200"
              style={{
                background: "var(--earth)",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
              aria-hidden="true"
            >
              +
            </span>
            <span className="flex-1">{item.q}</span>
          </button>
          {open === i && (
            <div
              className="px-5 py-4 text-right text-sm leading-relaxed border-t"
              style={{ color: "var(--muted-foreground)", borderColor: "var(--border)", background: "white" }}
            >
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

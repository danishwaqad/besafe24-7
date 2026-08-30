"use client";

import { useState } from "react";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-900/10 rounded-3xl border border-ink-900/10 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold">{item.q}</span>
              <span className="text-ember-500">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-4 text-sm leading-relaxed text-ink-700">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

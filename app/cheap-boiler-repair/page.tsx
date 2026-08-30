"use client";

import { site } from "@/lib/site";
import { useQuote } from "@/components/QuoteDrawer";

export default function CheapBoilerRepairPage() {
  const { openQuote } = useQuote();

  return (
    <div>
      <section className="mesh text-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-400">Clear prices · No call-out surprises</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">
            Emergency boiler repair in Glasgow — 24/7
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-200/90">
            Fast, local service from Gas Safe engineers. Same-day repairs. You approve an itemised price before work starts — no hidden extras.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneHref}`} className="btn-ember">Call {site.phone}</a>
            <button type="button" onClick={() => openQuote("Boiler Repair")} className="btn-outline">
              Get a fast quote
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-6">
        <h2 className="font-display text-3xl">Honest pricing, not cheap shortcuts</h2>
        <p className="mt-4 text-ink-700">
          “Cheap” should mean transparent — not corners cut. Call-out and diagnostics are typically £60–£90. Labour is £80–£110 per hour. Parts are quoted by make and model. You always see the full figure before we start.
        </p>
        <p className="mt-4 text-ink-700">
          Genuine breakdowns are prioritised for same-day attendance. Out-of-hours surcharges may apply, and they are shown upfront.
        </p>
      </section>
    </div>
  );
}

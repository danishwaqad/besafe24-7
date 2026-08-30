"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/services";
import { allAreas } from "@/lib/areas";
import { FAQ } from "@/components/FAQ";
import { useQuote } from "@/components/QuoteDrawer";

const faqs = [
  {
    q: "Do you offer same-day appointments?",
    a: "Yes. We prioritise no-heat/no-hot-water faults and offer today PM or tomorrow AM/PM slots.",
  },
  {
    q: "Are your engineers Gas Safe?",
    a: `Yes — all gas work is completed by Gas Safe Registered engineers (${site.gasSafe}), and we provide documentation to keep warranties valid.`,
  },
  {
    q: "How does pricing work?",
    a: "We diagnose first, then provide an itemised, fixed price for approval. No hidden extras.",
  },
  {
    q: "Which boiler brands do you repair?",
    a: "Worcester Bosch, Vaillant, Ideal, Baxi, Glow-worm and most modern condensing boilers (combi, system, regular).",
  },
  {
    q: "Do you cover my area?",
    a: "Yes — Greater Glasgow and surrounding towns. Message us your postcode for an ETA.",
  },
  {
    q: "Do you do plumbing and drainage too?",
    a: "Yes — taps, toilets, pipework leaks, and fast drain unblocking and repairs.",
  },
];

export default function ServicesPage() {
  const { openQuote } = useQuote();

  return (
    <div>
      <section className="mesh text-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-400">Heating · Plumbing · Gas · Drainage</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">
            Heating, plumbing, gas & drainage services in Glasgow
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-200/90">
            From emergency boiler repairs to annual servicing and new installs — plus plumbing, gas and drainage — our local team keeps your home safe, warm and compliant.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneHref}`} className="btn-ember">Call {site.phone}</a>
            <button type="button" onClick={() => openQuote()} className="btn-outline">Get a fast quote</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.href} className="rounded-3xl bg-white p-7 shadow-sm">
              <h2 className="font-display text-3xl">{s.title}</h2>
              <p className="mt-3 text-ink-700">{s.summary}</p>
              <div className="mt-5 flex gap-3">
                <Link href={s.href} className="btn-dark">View service</Link>
                <button type="button" onClick={() => openQuote(s.shortTitle)} className="text-sm font-bold text-ember-500">
                  Quote
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
        <h2 className="mb-4 font-display text-3xl">How booking works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Call / WhatsApp / Book", "Share symptoms, photos and preferred times."],
            ["Diagnose", "The engineer arrives with stocked parts, confirms the fault and price."],
            ["Fix & safety", "Repair completed, then gas tightness, flue and combustion checks, controls demo and documentation."],
          ].map(([t, d]) => (
            <article key={t} className="rounded-3xl bg-ink-900 p-6 text-cream-50">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-cream-200/80">{d}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-700">Areas: {allAreas.slice(0, 16).join(", ")}.</p>
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </section>
    </div>
  );
}

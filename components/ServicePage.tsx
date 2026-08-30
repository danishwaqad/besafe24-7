"use client";

import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { allAreas } from "@/lib/areas";
import { FAQ } from "./FAQ";
import { useQuote } from "./QuoteDrawer";
import type { Service } from "@/lib/services";

export function ServicePage({ service }: { service: Service }) {
  const { openQuote } = useQuote();

  return (
    <div>
      <section className="mesh text-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-ember-400">BeSafe 24-7 · Glasgow</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">{service.hero}</h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-200/90">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneHref}`} className="btn-ember">
              Call {site.phone}
            </a>
            <a href={whatsappUrl()} className="btn-outline" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <button type="button" onClick={() => openQuote(service.shortTitle)} className="btn-outline">
              Get a fast quote
            </button>
          </div>
        </div>
      </section>

      {service.emergency && (
        <div className="bg-ember-400 text-ink-950">
          <div className="mx-auto max-w-7xl px-4 py-3 text-sm font-semibold lg:px-6">
            Smell gas or suspect carbon monoxide? Leave the property and call {site.gasEmergency}. We attend for repairs once it is safe.
          </div>
        </div>
      )}

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-2 lg:px-6">
        <div>
          <h2 className="font-display text-3xl">What we do</h2>
          <ul className="mt-5 space-y-2 text-ink-800">
            {service.problems.map((p) => (
              <li key={p} className="rounded-xl bg-white px-4 py-3 shadow-sm">
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl">What’s included</h2>
          <ul className="mt-5 space-y-2 text-ink-800">
            {service.includes.map((p) => (
              <li key={p} className="rounded-xl bg-white px-4 py-3 shadow-sm">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink-900 text-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <h2 className="font-display text-3xl">How the visit works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.process.map((step, i) => (
              <article key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-ember-400">0{i + 1}</p>
                <h3 className="mt-2 font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm text-cream-200/80">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-2 lg:px-6">
        <div>
          <h2 className="font-display text-3xl">Timing & pricing</h2>
          <ul className="mt-5 space-y-2">
            {(service.pricing || service.times).map((p) => (
              <li key={p} className="rounded-xl border border-ink-900/10 bg-white px-4 py-3">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-ink-700">
            You’ll always receive a clear, itemised quote before work starts — no hidden extras. Out-of-hours surcharges (if applicable) are shown upfront.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl">Also worth knowing</h2>
          <ul className="mt-5 space-y-2">
            {service.extras.map((p) => (
              <li key={p} className="rounded-xl border border-ink-900/10 bg-white px-4 py-3">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.cases && (
        <section className="mx-auto max-w-7xl px-4 pb-8 lg:px-6">
          <h2 className="font-display text-3xl">Recent jobs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {service.cases.map((c) => (
              <article key={c.title} className="rounded-3xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{c.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <h2 className="mb-5 font-display text-3xl">FAQs</h2>
        <FAQ items={service.faqs} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
        <h2 className="font-display text-3xl">Areas we cover</h2>
        <p className="mt-3 max-w-3xl text-ink-700">
          Greater Glasgow and nearby towns, including {allAreas.slice(0, 12).join(", ")} and more. Send your postcode for an ETA.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {service.related.map((r) => (
            <Link key={r.href} href={r.href} className="btn-dark">
              {r.label}
            </Link>
          ))}
          <Link href="/areas-we-cover" className="btn-ember">
            All areas
          </Link>
        </div>
      </section>
    </div>
  );
}

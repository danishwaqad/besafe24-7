"use client";

import Link from "next/link";
import { brands, homeFaqs, pricingGuide, site, whatsappUrl, whyChoose } from "@/lib/site";
import { services } from "@/lib/services";
import { allAreas } from "@/lib/areas";
import { FAQ } from "@/components/FAQ";
import { useQuote } from "@/components/QuoteDrawer";

export default function HomePage() {
  const { openQuote } = useQuote();

  return (
    <div>
      <section className="mesh relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-6 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sea-800/15 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-sea-800">
              Glasgow · 24/7 · Gas Safe {site.gasSafe}
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-ink-900 md:text-7xl">
              Heat back on.
              <span className="block text-ember-400">Same day.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-700">
              Emergency boiler repair in Glasgow from Gas Safe engineers. Same-day repairs, no hidden extras, and two appointment options before we leave the yard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phoneHref}`} className="btn-ember">
                Call {site.phone}
              </a>
              <a href={whatsappUrl()} className="btn-outline" target="_blank" rel="noreferrer">
                WhatsApp {site.mobile}
              </a>
              <button type="button" onClick={() => openQuote()} className="btn-outline">
                Get a fast quote
              </button>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["24/7", "Emergency cover"],
                [site.gasSafe, "Gas Safe"],
                ["2 slots", "AM / PM"],
                ["12 mo", "Guarantee"],
              ].map(([k, v]) => (
                <div key={v} className="rounded-2xl border border-sea-800/10 bg-white p-4">
                  <dt className="font-display text-2xl text-sea-700">{k}</dt>
                  <dd className="text-xs uppercase tracking-widest text-ink-700">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-[2rem] border border-sea-800/10 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sea-700">3-step booking</p>
            <ol className="mt-6 space-y-5">
              {[
                ["Quick triage", "Postcode, issue, urgency — plus photos if you have them."],
                ["Two time options", "Today after 4pm or tomorrow AM/PM."],
                ["Up-front pricing", "Confirmed on site before work starts."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember-400 font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-display text-xl">{t}</span>
                    <span className="text-sm text-ink-700">{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-500">Our services</p>
            <h2 className="font-display text-4xl">High-quality boiler & plumbing</h2>
          </div>
          <Link href="/services" className="hidden text-sm font-semibold text-ember-500 md:inline">
            View all services →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <article key={s.href} className="card-lift flex flex-col rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="font-display text-2xl">{s.shortTitle}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{s.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href={s.href} className="text-sm font-bold text-ember-500">
                  View service
                </Link>
                {s.emergency && (
                  <a href={`tel:${site.phoneHref}`} className="text-sm font-bold text-ink-900">
                    Call now
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-500">Our experience</p>
            <h2 className="mt-2 font-display text-4xl">Residential boiler & heating experts</h2>
            <p className="mt-4 text-ink-700">
              We specialise in domestic heating across Glasgow — from emergency boiler repairs to annual servicing and new installs. Clear pricing, tidy work, and fast booking.
            </p>
            <ul className="mt-6 space-y-2">
              {whyChoose.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span className="mt-1 h-2 w-2 rounded-full bg-ember-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Same-day call-outs", "We’ll offer two appointment options (today/tomorrow — AM or PM)."],
              ["Upfront pricing", "An engineer diagnoses first. You approve a clear price before any work starts."],
              ["Gas Safe engineers", `All boiler work is carried out by qualified Gas Safe engineers (${site.gasSafe}).`],
              ["Tidy work & guarantee", "We protect your home, clean up properly, and guarantee workmanship for 12 months."],
            ].map(([t, d]) => (
              <article key={t} className="rounded-3xl bg-cream-100 p-5">
                <h3 className="font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm text-ink-700">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <h2 className="font-display text-3xl">Transparent pricing guide</h2>
        <p className="mt-2 text-ink-700">You’ll always get an itemised quote on-site before work proceeds — no hidden extras.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Call-out & diagnostics", pricingGuide.callout],
            ["Labour", pricingGuide.labour],
            ["Typical small parts", pricingGuide.smallParts],
          ].map(([t, d]) => (
            <article key={t} className="rounded-3xl bg-white p-6 shadow-sm">
              <h3 className="text-sm uppercase tracking-widest text-sea-700">{t}</h3>
              <p className="mt-3 font-display text-2xl">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sea-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <h2 className="font-display text-3xl">Brands we repair</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {brands.map((b) => (
              <span key={b} className="rounded-full border border-sea-800/15 bg-white px-4 py-2 text-sm">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2 lg:px-6">
        <div>
          <h2 className="font-display text-4xl">Glasgow’s trusted boiler & heating engineers</h2>
          <p className="mt-4 text-ink-700">
            Besafe 247 Boiler Repair Glasgow is a Glasgow-based team of Gas Safe engineers helping homes and landlords get back to heat and hot water without the hassle. We focus on clear communication, upfront pricing and tidy work — so you always know what’s happening, when and why.
          </p>
          <blockquote className="mt-6 border-l-4 border-ember-400 pl-4 font-display text-2xl">
            “Thanks for trusting us with your home. If you ever need help, we’re one call away.”
            <footer className="mt-2 text-base font-sans text-ink-700">— {site.owner}, Owner</footer>
          </blockquote>
        </div>
        <FAQ items={homeFaqs} />
      </section>

      <section className="bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <h2 className="font-display text-3xl">Areas we cover</h2>
          <p className="mt-3 max-w-3xl text-ink-700">
            {allAreas.slice(0, 18).join(", ")} and the rest of Greater Glasgow. Not sure? Send your postcode.
          </p>
          <Link href="/areas-we-cover" className="btn-dark mt-6">
            See all areas
          </Link>
        </div>
      </section>
    </div>
  );
}

"use client";

import { site, whyChoose } from "@/lib/site";
import { useQuote } from "@/components/QuoteDrawer";

export default function AboutPage() {
  const { openQuote } = useQuote();

  return (
    <div>
      <section className="mesh text-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ember-400">About BeSafe 24-7</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl md:text-6xl">
            Trusted boiler & heating engineers in Glasgow
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-cream-200/90">
            BeSafe 24-7 is a Glasgow-based team of Gas Safe Registered engineers helping homeowners with boiler repairs, servicing/CP12, new installs, plumbing, gas and drainage. We prioritise safety, tidy work and clear pricing — so you always know where you stand.
          </p>
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
        <ul className="space-y-3">
          {whyChoose.map((item) => (
            <li key={item} className="rounded-2xl bg-white px-4 py-3 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink-900 text-cream-50">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
          {[
            ["24/7", "Emergency availability"],
            [site.gasSafe, "Gas Safe Register"],
            ["2 options", "AM/PM appointments"],
            ["12 months", "Workmanship guarantee"],
          ].map(([k, v]) => (
            <div key={v} className="rounded-3xl border border-white/10 p-6">
              <p className="font-display text-3xl text-ember-400">{k}</p>
              <p className="mt-2 text-sm">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-6">
        <h2 className="font-display text-3xl">Need help today?</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a href={`tel:${site.phoneHref}`} className="btn-ember">Call {site.phone}</a>
          <button type="button" onClick={() => openQuote()} className="btn-dark">Get a quote</button>
        </div>
      </section>
    </div>
  );
}

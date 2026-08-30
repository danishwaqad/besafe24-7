"use client";

import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { areaGroups } from "@/lib/areas";
import { useQuote } from "@/components/QuoteDrawer";

export default function AreasPage() {
  const { openQuote } = useQuote();

  return (
    <div>
      <section className="mesh text-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <h1 className="font-display text-4xl md:text-6xl">Areas we cover</h1>
          <p className="mt-4 max-w-3xl text-lg text-cream-200/90">
            Fast, local help when your heating stops. BeSafe 24-7 delivers same-day boiler repair across Greater Glasgow and surrounding towns. Prefer WhatsApp? We’ll reply with two booking options.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneHref}`} className="btn-ember">Call {site.phone}</a>
            <a href={whatsappUrl()} className="btn-outline" target="_blank" rel="noreferrer">WhatsApp</a>
            <button type="button" onClick={() => openQuote()} className="btn-outline">Book now</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areaGroups.map((group) => (
            <article key={group.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="font-display text-2xl">{group.title}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.areas.map((area) => (
                  <li key={area}>
                    <Link href="/contact-us" className="inline-block rounded-full bg-cream-100 px-3 py-1.5 text-sm hover:bg-ember-400/30">
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-ink-700">
          Not sure if we cover your street? We probably do. Call {site.phone} or WhatsApp your postcode, boiler brand/model and any error codes.
        </p>
      </section>
    </div>
  );
}

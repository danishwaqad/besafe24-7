"use client";

import { site, whatsappUrl } from "@/lib/site";
import { QuoteForm } from "@/components/QuoteForm";

export default function ContactPage() {
  return (
    <div>
      <section className="mesh">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
          <h1 className="font-display text-4xl md:text-6xl">Contact BeSafe 24-7</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-700">
            Need help now? Call {site.phone} or send a message — our Gas Safe engineers respond quickly with clear prices before work begins.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
        <aside className="space-y-4">
          <article className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl">Call us now</h2>
            <a href={`tel:${site.phoneHref}`} className="mt-2 block text-xl font-bold text-ember-500">
              {site.phone}
            </a>
            <p className="mt-2 text-sm text-ink-700">{site.hours}</p>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl">WhatsApp</h2>
            <a href={whatsappUrl()} className="mt-2 block font-bold text-ember-500" target="_blank" rel="noreferrer">
              {site.mobile}
            </a>
          </article>
          <article className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl">Visit / write</h2>
            <p className="mt-2 text-sm">{site.address}</p>
            <a href={`mailto:${site.email}`} className="mt-2 block font-semibold">{site.email}</a>
          </article>
          <p className="rounded-2xl bg-ember-400/20 p-4 text-sm">
            If you smell gas or suspect CO, call {site.gasEmergency} first.
          </p>
        </aside>
        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mb-5 font-display text-3xl">Send a job request</h2>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}

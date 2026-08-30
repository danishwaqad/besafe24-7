"use client";

import { brands, site, whatsappUrl } from "@/lib/site";
import { useQuote } from "@/components/QuoteDrawer";

export default function GlasgowPage() {
  const { openQuote } = useQuote();

  return (
    <div>
      <section className="mesh text-cream-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-24">
          <h1 className="max-w-4xl font-display text-4xl md:text-6xl">24/7 emergency boiler repair in Glasgow</h1>
          <p className="mt-5 max-w-3xl text-lg text-cream-200/90">
            No heat or hot water? BeSafe 24-7 provides fast, reliable boiler repair across Glasgow — day or night. Our Gas Safe-registered engineers ({site.gasSafe}) diagnose and fix faults quickly, from pressure drops and ignition issues to leaks and error codes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${site.phoneHref}`} className="btn-ember">Call {site.phone}</a>
            <a href={whatsappUrl()} className="btn-outline" target="_blank" rel="noreferrer">WhatsApp</a>
            <button type="button" onClick={() => openQuote()} className="btn-outline">Two time options</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <h2 className="font-display text-3xl">Rapid response across Glasgow</h2>
        <p className="mt-4 max-w-3xl text-ink-700">
          We cover Glasgow City Centre, Merchant City, Finnieston, Partick, Hillhead, Bearsden, Milngavie, Bishopbriggs, Shawlands, Pollokshields, Govan, Ibrox, Giffnock, Clarkston, Rutherglen, Cambuslang, Dennistoun, Bridgeton and beyond. Near the M8, M77 and M74, our engineers keep you updated on ETAs.
        </p>
        <h2 className="mt-10 font-display text-3xl">Faults we fix every day</h2>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {[
            "No heat / no hot water",
            "Low pressure / constant pressure loss",
            "Ignition faults, lockouts and resets",
            "Error codes (Worcester, Ideal, Vaillant, Baxi, Glow-worm, Vokera, Viessmann, Alpha and more)",
            "Leaks, dripping or corroded pipework",
            "Noisy operation (kettling, banging, gurgling)",
            "Radiators not heating, cold spots, balancing issues",
            "Thermostat, valve and pump faults",
            "Flue and condensate problems, frozen or blocked pipe",
          ].map((item) => (
            <li key={item} className="rounded-xl bg-white px-4 py-3">{item}</li>
          ))}
        </ul>
        <h2 className="mt-10 font-display text-3xl">Brands we work with</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {brands.map((b) => (
            <span key={b} className="rounded-full bg-white px-4 py-2 text-sm">{b}</span>
          ))}
        </div>
      </section>
    </div>
  );
}

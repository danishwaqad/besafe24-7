"use client";

import { FormEvent, useState } from "react";
import { jobTypes, site, whatsappUrl } from "@/lib/site";

type Props = {
  defaultJobType?: string;
  onDone?: () => void;
};

export function QuoteForm({ defaultJobType = "Boiler Repair", onDone }: Props) {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [whatsapp, setWhatsapp] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      jobType: String(data.get("jobType") || ""),
      street: String(data.get("street") || ""),
      city: String(data.get("city") || ""),
      postcode: String(data.get("postcode") || ""),
      brand: String(data.get("brand") || ""),
      symptoms: String(data.get("symptoms") || ""),
      photoName: (data.get("photo") as File | null)?.name || "",
    };

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      setStatus("error");
      return;
    }

    const json = await res.json();
    setWhatsapp(json.whatsapp as string);
    setStatus("ok");
    form.reset();
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-white p-6 text-center">
        <p className="font-display text-2xl">Request received</p>
        <p className="mt-2 text-sm text-ink-700">
          We’ll reply with two appointment options (today PM / tomorrow AM/PM). You can also send this on WhatsApp now.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href={whatsapp || whatsappUrl()} className="btn-ember" target="_blank" rel="noreferrer">
            Continue on WhatsApp
          </a>
          <a href={`tel:${site.phoneHref}`} className="btn-dark">
            Call {site.phone}
          </a>
        </div>
        {onDone && (
          <button type="button" className="mt-4 text-sm underline" onClick={onDone}>
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Full name *
          <input required name="name" className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal" />
        </label>
        <label className="text-sm font-semibold">
          Phone *
          <input required name="phone" type="tel" className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal" />
        </label>
      </div>
      <label className="text-sm font-semibold">
        Email *
        <input required name="email" type="email" className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal" />
      </label>
      <label className="text-sm font-semibold">
        Job type
        <select name="jobType" defaultValue={defaultJobType} className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal">
          {jobTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-semibold sm:col-span-2">
          Street address
          <input name="street" className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal" />
        </label>
        <label className="text-sm font-semibold">
          City
          <input name="city" defaultValue="Glasgow" className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal" />
        </label>
      </div>
      <label className="text-sm font-semibold">
        Postal code
        <input name="postcode" placeholder="G77 6LX" className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal" />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Brand / model
          <input name="brand" placeholder="Worcester Bosch, Vaillant…" className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal" />
        </label>
        <label className="text-sm font-semibold">
          Photo (PDF, DOC, JPG, PNG)
          <input name="photo" type="file" accept=".pdf,.doc,.docx,.xls,.csv,.jpg,.jpeg,.png,.gif" className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal file:mr-3 file:rounded-full file:border-0 file:bg-ink-900 file:px-3 file:py-1 file:text-xs file:text-white" />
        </label>
      </div>
      <label className="text-sm font-semibold">
        Error code / symptoms
        <textarea name="symptoms" rows={4} className="mt-1 w-full rounded-xl border border-ink-900/10 bg-white px-3 py-2.5 font-normal" placeholder="No heat, E01 lockout, leak, low pressure…" />
      </label>
      {status === "error" && <p className="text-sm text-red-700">Please complete the required fields and try again.</p>}
      <button type="submit" className="btn-ember w-full">
        Submit request
      </button>
      <p className="text-xs text-ink-700/70">
        By submitting you agree to our <a className="underline" href="/privacy">Privacy Policy</a> and{" "}
        <a className="underline" href="/terms">Terms of Service</a>.
      </p>
    </form>
  );
}

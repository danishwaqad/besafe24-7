import { site } from "@/lib/site";

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <h1 className="font-display text-4xl">Terms of service</h1>
      <p className="mt-6 text-ink-700">
        Quotes on this site are guides. The engineer confirms a fixed, itemised price on site before work begins. Out-of-hours surcharges, if they apply, are shown in advance.
      </p>
      <p className="mt-4 text-ink-700">
        All gas work is carried out by Gas Safe Registered engineers ({site.gasSafe}). Workmanship is guaranteed for 12 months. Parts guarantees follow manufacturer terms and are listed on your invoice.
      </p>
      <p className="mt-4 text-ink-700">
        If you smell gas or suspect carbon monoxide, leave the property and call {site.gasEmergency} before contacting us.
      </p>
      <p className="mt-4 text-ink-700">Card payments are accepted on completion.</p>
    </article>
  );
}

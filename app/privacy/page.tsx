import { site } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 lg:px-6">
      <h1 className="font-display text-4xl">Privacy policy</h1>
      <p className="mt-6 text-ink-700">
        {site.legalName} (“we”) collects the information you submit on this website so we can respond to booking and quote requests. That typically includes your name, phone, email, address, job type, boiler brand/model, symptoms, and any files you upload.
      </p>
      <p className="mt-4 text-ink-700">
        We use this data only to contact you about the job, schedule appointments, and keep service records (including CP12 and warranty documentation). We do not sell your details.
      </p>
      <p className="mt-4 text-ink-700">
        You can ask us to update or delete your contact details by emailing {site.email} or calling {site.phone}.
      </p>
      <p className="mt-4 text-ink-700">Registered address: {site.address}.</p>
    </article>
  );
}

import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.phone || !body?.email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const lines = [
    `New BeSafe 24-7 booking request`,
    `Name: ${body.name}`,
    `Phone: ${body.phone}`,
    `Email: ${body.email}`,
    `Job: ${body.jobType || "Not specified"}`,
    `Address: ${[body.street, body.city, body.postcode].filter(Boolean).join(", ") || "Not given"}`,
    `Brand/model: ${body.brand || "Not given"}`,
    `Symptoms: ${body.symptoms || "Not given"}`,
    body.photoName ? `Photo attached name: ${body.photoName}` : "",
    `Please send two appointment options (today PM / tomorrow AM/PM).`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines)}`;

  return NextResponse.json({ ok: true, whatsapp });
}

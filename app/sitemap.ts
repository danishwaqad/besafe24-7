import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/about-us",
    "/contact-us",
    "/areas-we-cover",
    "/glasgow",
    "/cheap-boiler-repair",
    "/privacy",
    "/terms",
    "/guides/call-out-charges",
    ...services.map((s) => s.href),
  ];

  return paths.map((path) => ({
    url: `https://besafe24-7.co.uk${path}`,
    lastModified: new Date(),
  }));
}

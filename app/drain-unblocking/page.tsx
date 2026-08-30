import { ServicePage } from "@/components/ServicePage";
import { getService } from "@/lib/services";
import { notFound } from "next/navigation";

export default function Page() {
  const service = getService("drain-unblocking");
  if (!service) notFound();
  return <ServicePage service={service} />;
}

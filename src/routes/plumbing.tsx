import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/services";
import { serviceHead } from "@/lib/service-route";

export const Route = createFileRoute("/plumbing")({
  head: () => serviceHead("plumbing"),
  component: () => <ServicePage s={SERVICES.plumbing} />,
});

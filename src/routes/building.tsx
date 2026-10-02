import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/services";
import { serviceHead } from "@/lib/service-route";

export const Route = createFileRoute("/building")({
  head: () => serviceHead("building"),
  component: () => <ServicePage s={SERVICES.building} />,
});

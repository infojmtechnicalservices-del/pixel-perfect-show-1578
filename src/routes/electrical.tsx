import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SERVICES } from "@/lib/services";
import { serviceHead } from "@/lib/service-route";

export const Route = createFileRoute("/electrical")({
  head: () => serviceHead("electrical"),
  component: () => <ServicePage s={SERVICES.electrical} />,
});

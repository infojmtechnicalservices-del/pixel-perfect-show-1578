import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { SITE, pageHead, waHref } from "@/lib/site";
import { SERVICE_LIST } from "@/lib/services";
import { btn } from "@/components/site/Cta";

export const Route = createFileRoute("/quote")({
  head: () =>
    pageHead({
      title: "Request a Quote – Electrical, Plumbing, Welding & Building | JM Technical",
      description:
        "Request a free quote from JM Technical Services in Cape Town for electrical, plumbing, welding or building work. Send your details via WhatsApp or email.",
      path: "/quote/",
    }),
  component: Quote,
});

const field = "mt-1.5 w-full rounded-md border border-input bg-card px-3 py-2.5 focus:border-primary focus:outline-none";

function Quote() {
  const [error, setError] = useState("");

  function build(form: HTMLFormElement) {
    const d = new FormData(form);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    if (!get("name") || !get("phone") || !get("details")) {
      setError("Please add your name, phone number and a short description.");
      return null;
    }
    setError("");
    return [
      "Hi JM Technical Services, I'd like a quote.",
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Service: ${get("service")}`,
      `Area: ${get("area") || "-"}`,
      `Urgency: ${get("urgency")}`,
      `Details: ${get("details")}`,
    ].join("\n");
  }

  function onWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const msg = build(e.currentTarget);
    if (msg) window.open(waHref(msg), "_blank", "noopener");
  }

  function onEmail(form: HTMLFormElement | null) {
    if (!form) return;
    const msg = build(form);
    if (msg) window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Quote request")}&body=${encodeURIComponent(msg)}`;
  }

  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="eyebrow text-primary">Free quote</p>
          <h1 className="mt-4 text-4xl md:text-5xl">Request a Quote</h1>
          <p className="mt-4 max-w-xl text-steel-light">Tell us about the job. Your details are sent straight to us on WhatsApp or email.</p>
        </div>
      </section>
      <section className="mx-auto max-w-2xl px-5 py-14">
        <form onSubmit={onWhatsApp} className="space-y-5 rounded-md border bg-card p-6 shadow-card md:p-8" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">Name *<input name="name" required autoComplete="name" className={field} /></label>
            <label className="block text-sm font-semibold">Phone *<input name="phone" type="tel" required autoComplete="tel" className={field} /></label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">Service
              <select name="service" className={field}>
                {SERVICE_LIST.map((s) => <option key={s.key}>{s.name}</option>)}
                <option>Other / not sure</option>
              </select>
            </label>
            <label className="block text-sm font-semibold">Suburb<input name="area" placeholder="e.g. Goodwood" className={field} /></label>
          </div>
          <label className="block text-sm font-semibold">How urgent?
            <select name="urgency" className={field}>
              <option>Emergency – today</option>
              <option>This week</option>
              <option>Planning ahead</option>
            </select>
          </label>
          <label className="block text-sm font-semibold">Describe the job *<textarea name="details" rows={5} required className={field} /></label>
          {error && <p role="alert" className="text-sm font-semibold text-destructive">{error}</p>}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" className={btn.whatsapp + " flex-1"}><MessageCircle className="size-4" /> Send via WhatsApp</button>
            <button type="button" onClick={(e) => onEmail(e.currentTarget.form)} className={btn.outline + " flex-1"}><Mail className="size-4" /> Send via Email</button>
          </div>
          <p className="text-xs text-muted-foreground">Tip: after sending on WhatsApp, attach photos of the problem.</p>
        </form>
      </section>
    </>
  );
}

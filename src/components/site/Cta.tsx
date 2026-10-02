import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { SITE, telHref, waHref } from "@/lib/site";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md border-2 px-5 py-3 text-sm font-bold uppercase tracking-wide transition-colors";

export const btn = {
  whatsapp: cn(base, "border-whatsapp bg-whatsapp text-whatsapp-foreground hover:brightness-95"),
  primary: cn(base, "border-navy bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"),
  outlineDark: cn(base, "border-steel-light bg-transparent text-navy-foreground hover:border-primary hover:text-primary"),
  outline: cn(base, "border-navy bg-transparent text-navy hover:bg-navy hover:text-navy-foreground"),
};

export function CtaGroup({ message, dark = true, className }: { message?: string | undefined; dark?: boolean; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <a href={waHref(message)} target="_blank" rel="noopener noreferrer" className={btn.whatsapp}>
        <MessageCircle className="size-4" /> WhatsApp Us
      </a>
      <a href={telHref} className={dark ? btn.outlineDark : btn.outline}>
        <Phone className="size-4" /> Call {SITE.phoneDisplay}
      </a>
      <Link to="/quote/" className={btn.primary}>
        <FileText className="size-4" /> Request a Quote
      </Link>
    </div>
  );
}

export function FinalCta({ message, heading = "Need a tradesman today?" }: { message?: string | undefined; heading?: string }) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="hazard h-2" />
      <div className="mx-auto max-w-6xl px-5 py-16 md:flex md:items-center md:justify-between md:gap-10">
        <div>
          <p className="eyebrow text-primary">24/7 call-outs</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-xl text-steel-light">
            Tell us what's wrong and where you are. We'll respond as quickly as possible.
          </p>
        </div>
        <CtaGroup message={message} className="mt-8 md:mt-0 md:max-w-md md:justify-end" />
      </div>
    </section>
  );
}

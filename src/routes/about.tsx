import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/site";
import { SERVICE_LIST } from "@/lib/services";
import { FinalCta } from "@/components/site/Cta";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About JM Technical Services and Projects | Cape Town Trades Team",
      description:
        "JM Technical Services and Projects is a Cape Town team offering electrical, plumbing, welding and building services with 24/7 call-outs.",
      path: "/about/",
    }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-primary">About us</p>
          <h1 className="mt-4 max-w-3xl text-4xl md:text-6xl">One Cape Town team for every technical job</h1>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg text-muted-foreground">
          <h2 className="text-3xl text-foreground">Who we are</h2>
          <p>
            JM Technical Services and Projects is a Cape Town-based business offering electrical, plumbing, welding and building services. Instead of finding a different contractor for every problem, you can call one team.
          </p>
          <p>
            We work with homeowners, landlords and businesses, and we offer 24/7 call-outs for urgent problems. Most customers reach us on WhatsApp — it's quick, and photos help us understand the job before we arrive.
          </p>
          <h2 className="pt-4 text-3xl text-foreground">How we work</h2>
          <p>Clear communication, a clear quote before work starts, and a tidy finish when we leave.</p>
        </div>
        <aside className="rounded-md border-t-4 border-primary bg-card p-6 shadow-card">
          <h2 className="text-xl">Our services</h2>
          <ul className="mt-4 space-y-3">
            {SERVICE_LIST.map((s) => (
              <li key={s.key}><Link to={s.path} className="font-semibold text-accent hover:underline">{s.name}</Link></li>
            ))}
          </ul>
        </aside>
      </section>
      <FinalCta heading="Let's sort out your job" />
    </>
  );
}

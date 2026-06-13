import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brandev Solutions — Our Story, Mission & Team" },
      { name: "description", content: "Meet the builders, designers, and AI specialists at Brandev Solutions turning startup ideas into launched products across 5+ countries." },
      { property: "og:title", content: "About — Brandev Solutions" },
      { property: "og:description", content: "Meet the team behind Brandev Solutions." },
      { property: "og:url", content: "https://brandevsolutions.com/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://brandevsolutions.com/about" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        url: "https://brandevsolutions.com/about",
        mainEntity: { "@type": "Organization", name: "Brandev Solutions", url: "https://brandevsolutions.com" },
      }),
    }],
  }),
  component: About,
});

const team = [
  { name: "Founder & Lead Developer", initial: "F" },
  { name: "UX Designer", initial: "U" },
  { name: "Mobile Developer", initial: "M" },
  { name: "Web Developer", initial: "W" },
  { name: "AI Specialist", initial: "A" },
];

const values = [
  { title: "Speed without shortcuts", desc: "We ship fast, but we don't cut corners that matter." },
  { title: "Honest communication, always", desc: "Clear updates, no jargon, no surprises." },
  { title: "Client success is our success", desc: "We win when your product wins." },
  { title: "Build with purpose, not just code", desc: "Every feature exists for a reason your users care about." },
];

function About() {
  return (
    <PageShell>
      <section className="container-x pt-20 pb-12 md:pt-28 text-center relative">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(700px circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)" }} />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">We Are Brandev Solutions</h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">A team of builders, designers, and AI specialists obsessed with turning ideas into products.</p>
        </Reveal>
      </section>

      <section className="container-x py-16 max-w-3xl">
        <Reveal>
          <h2 className="text-sm uppercase tracking-widest text-[#3b82f6] font-semibold">Our Story</h2>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Brandev Solutions was founded by a developer who was tired of watching great startup ideas fail — not because of bad ideas, but bad execution. We built this agency to give founders and businesses access to a reliable technical team that delivers fast, communicates clearly, and genuinely cares about outcomes. Today we're a team of mobile developers, web engineers, UX designers, and AI specialists building products that matter.
          </p>
        </Reveal>
      </section>

      <section className="container-x py-12">
        <Reveal variant="slide-left">
          <div className="card-surface p-10 md:p-14 max-w-4xl">
            <h2 className="text-sm uppercase tracking-widest text-[#3b82f6] font-semibold">Mission</h2>
            <p className="mt-4 text-2xl md:text-3xl font-semibold leading-snug">
              To help startups and small businesses launch world-class digital products — without the cost, confusion, or delays of traditional development.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container-x py-16">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { v: 30, suffix: "+", label: "Projects Delivered" },
            { v: 5,  suffix: "+", label: "Countries Served" },
            { v: 98, suffix: "%", label: "Client Satisfaction" },
            { v: 3,  suffix: "wks", label: "Avg MVP Delivery" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-bold text-[#3b82f6]">
                <CountUp end={s.v} suffix={s.suffix === "wks" ? "" : s.suffix} />
                {s.suffix === "wks" && <span className="text-2xl md:text-3xl ml-1">wks</span>}
              </div>
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">The People Behind Your Product</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="card-surface p-6 text-center transition-transform duration-500 hover:-translate-y-2 hover:animate-float-slow hover:border-[#3b82f6]/40">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-[#3b82f6]/40 to-[#1a2548] border border-white/10 flex items-center justify-center text-3xl font-bold text-white/70">
                  {m.initial}
                </div>
                <h3 className="mt-4 font-medium text-sm">{m.name}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">Our Values</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 120}>
              <div className="card-surface p-7 h-full">
                <div className="text-[#3b82f6] text-3xl font-bold">0{i + 1}</div>
                <h3 className="mt-3 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-white/65">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}

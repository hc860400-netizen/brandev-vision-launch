import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Brandev Solutions" },
      { name: "description", content: "Real projects built for real clients — from MVPs to full-scale products." },
      { property: "og:title", content: "Portfolio — Brandev Solutions" },
      { property: "og:description", content: "Mobile apps, PWAs, AI projects, and SaaS products we've built." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { name: "FoodieApp",   tag: "Mobile App",  cat: "mobile", desc: "Restaurant ordering app",         stack: "React Native, Node.js, AI recommendations", gradient: "from-orange-500/30 to-red-500/20" },
  { name: "MediBook",    tag: "PWA",         cat: "pwa",    desc: "Doctor appointment booking",      stack: "Vue.js, Firebase, Push notifications",      gradient: "from-cyan-500/30 to-blue-500/20" },
  { name: "SalesBot AI", tag: "AI Project",  cat: "ai",     desc: "AI sales chatbot for ecommerce",  stack: "Python, OpenAI, Shopify integration",       gradient: "from-violet-500/30 to-blue-500/20" },
  { name: "LaunchPad",   tag: "MVP",         cat: "mvp",    desc: "Project management SaaS",         stack: "React, Node.js, PostgreSQL",                gradient: "from-emerald-500/30 to-cyan-500/20" },
  { name: "StyleMe",     tag: "Mobile App",  cat: "mobile", desc: "Fashion and lifestyle app",       stack: "Flutter, Firebase, AI styling engine",      gradient: "from-pink-500/30 to-fuchsia-500/20" },
  { name: "RetailDash",  tag: "Web App",     cat: "web",    desc: "B2B retail management dashboard", stack: "React, REST API, data visualization",       gradient: "from-blue-500/30 to-indigo-500/20" },
];

const filters = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Web Apps" },
  { id: "ai", label: "AI Projects" },
  { id: "mvp", label: "MVP" },
  { id: "pwa", label: "PWA" },
];

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => filter === "all" || p.cat === filter);

  return (
    <PageShell>
      <section className="container-x pt-20 pb-10 md:pt-28 text-center relative">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(700px circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)" }} />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Work</h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">Real projects built for real clients — from MVPs to full-scale products.</p>
        </Reveal>
      </section>

      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 border ${
                  filter === f.id
                    ? "bg-[#3b82f6] border-[#3b82f6] text-white shadow-[0_0_24px_-4px_rgba(59,130,246,0.7)]"
                    : "border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <section className="container-x py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article
                data-category={p.cat}
                className="card-surface card-hover-glow overflow-hidden h-full flex flex-col animate-fade-in"
                style={{ transition: "opacity 200ms ease, transform 200ms ease" }}
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white/20">{p.name.charAt(0)}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#3b82f6] font-semibold">{p.tag}</span>
                  <h3 className="mt-2 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/65">{p.desc}</p>
                  <p className="mt-3 text-xs text-white/45">{p.stack}</p>
                  <button className="mt-5 text-sm text-white/85 inline-flex items-center gap-1 self-start hover:text-[#3b82f6] transition-colors">
                    View Case Study <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        headline="Have a project in mind? Let's build it together."
        subtext="Pricing is tailored to your project. Book a free call to get a custom quote."
        button="Start Your Project"
      />
    </PageShell>
  );
}

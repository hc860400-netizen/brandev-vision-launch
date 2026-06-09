import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { CALENDLY_URL } from "@/lib/constants";
import { Smartphone, Rocket, Bot, Globe, Code2, Palette, Check, Clock } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Brandev Solutions" },
      { name: "description", content: "Mobile app, MVP, AI, PWA, web development, and UX design — everything you need to launch." },
      { property: "og:title", content: "Services — Brandev Solutions" },
      { property: "og:description", content: "End-to-end product development for startups and small businesses." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Smartphone,
    name: "Mobile App Development",
    who: "Startups and businesses ready to reach users on iOS and Android.",
    bullets: [
      "Cross-platform development with React Native or Flutter",
      "Custom UI designed to match your brand",
      "Backend API integration",
      "App Store + Google Play submission",
      "30-day post-launch support",
    ],
    timeline: "4–8 weeks depending on complexity",
  },
  {
    icon: Rocket,
    name: "MVP Development",
    who: "Founders who need to validate an idea fast without burning budget.",
    bullets: [
      "Product scoping and feature prioritization",
      "UX wireframes and interactive prototype",
      "Core feature development only",
      "Cloud deployment and QA testing",
      "Investor-ready demo",
    ],
    timeline: "3–6 weeks",
  },
  {
    icon: Bot,
    name: "AI Integration & Chatbots",
    who: "Businesses automating support, sales, or internal workflows with AI.",
    bullets: [
      "Custom AI chatbot trained on your data",
      "Integration with your existing app or website",
      "Natural language processing",
      "Analytics dashboard",
      "Ongoing model improvement",
    ],
    timeline: "2–4 weeks",
  },
  {
    icon: Globe,
    name: "PWA Development",
    who: "Businesses wanting an app experience without native development cost.",
    bullets: [
      "Fully responsive progressive web app",
      "Offline functionality",
      "Push notifications",
      "Mobile installability",
      "Cross-browser compatibility",
    ],
    timeline: "3–5 weeks",
  },
  {
    icon: Code2,
    name: "Web Development",
    who: "Startups needing a powerful web platform, dashboard, or SaaS interface.",
    bullets: [
      "Custom frontend and backend development",
      "Database design and API architecture",
      "Authentication and user management",
      "Admin dashboard",
      "SEO-optimized structure",
    ],
    timeline: "4–8 weeks",
  },
  {
    icon: Palette,
    name: "UX & Product Design",
    who: "Founders who want to validate design before development begins.",
    bullets: [
      "User research and persona creation",
      "Information architecture",
      "Wireframes and clickable prototype",
      "High-fidelity UI in Figma",
      "Developer-ready design handoff",
    ],
    timeline: "2–3 weeks",
  },
];

function Services() {
  return (
    <PageShell>
      <section className="container-x pt-20 pb-12 md:pt-28 text-center relative">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(700px circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)" }} />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Our Services</h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">Everything you need to go from idea to launched product — design, development, and AI.</p>
        </Reveal>
      </section>

      <div className="container-x py-12 grid gap-8 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 50}>
            <section className="card-surface p-8 md:p-10 h-full relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]/40 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]">
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)" }} />
              <div className="flex items-start justify-between gap-4 relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30">
                  <s.icon size={24} />
                </div>
                <span className="text-xs font-mono text-white/40">0{i + 1}</span>
              </div>
              <h2 className="mt-5 text-2xl font-bold tracking-tight">{s.name}</h2>
              <p className="mt-3 text-sm text-white/65">{s.who}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/70 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Clock size={12} className="text-[#3b82f6]" />
                <span>{s.timeline}</span>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <h3 className="text-xs uppercase tracking-widest text-white/55 font-semibold">What's included</h3>
                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-white/80">
                      <Check size={16} className="text-[#3b82f6] flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>
        ))}
      </div>


      <CtaBanner
        headline="Every project is different. Let's talk about yours."
        subtext="Pricing is tailored to your project. Book a free call to get a custom quote."
        button="Book Free Call"
      />
    </PageShell>
  );
}

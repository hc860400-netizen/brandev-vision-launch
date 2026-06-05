import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Particles } from "@/components/Particles";
import { Typewriter } from "@/components/Typewriter";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CtaBanner } from "@/components/CtaBanner";
import { CALENDLY_URL, LINKEDIN_URL, INSTAGRAM_URL } from "@/lib/constants";
import {
  Smartphone, Rocket, Bot, Globe, Code2, Palette,
  Compass, PenTool, Hammer, Send, ArrowRight, Check,
  Calendar, Linkedin, Instagram
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brandev Solutions — AI-Powered Apps, Built Fast" },
      { name: "description", content: "Brandev Solutions builds mobile apps, PWAs, and AI integrations for startups and small businesses — from idea to launch in weeks." },
      { property: "og:title", content: "Brandev Solutions — AI-Powered Apps, Built Fast" },
      { property: "og:description", content: "Mobile, web, and AI development for startups ready to launch fast." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android, built for performance and scale." },
  { icon: Rocket,     title: "MVP Development",         desc: "Launch your idea fast with a lean, functional MVP that attracts investors and early users." },
  { icon: Bot,        title: "AI Integration & Chatbots", desc: "Embed intelligent AI features and chatbots into your product to automate and engage." },
  { icon: Globe,      title: "PWA Development",         desc: "App-like experiences without the app store — fast, installable, and offline-ready." },
  { icon: Code2,      title: "Web Development",         desc: "Custom web platforms, dashboards, and SaaS interfaces built for speed and conversion." },
  { icon: Palette,    title: "UX & Product Design",     desc: "User-centered design that makes your product intuitive and beautiful from day one." },
];

const steps = [
  { icon: Compass, title: "Discovery", desc: "We learn your idea, goals, and users in a free 30-minute call." },
  { icon: PenTool, title: "Design",    desc: "We create wireframes and prototypes you approve before any code is written." },
  { icon: Hammer,  title: "Build",     desc: "We develop in sprints with weekly updates so you always know progress." },
  { icon: Send,    title: "Launch",    desc: "We deploy, test, and support your launch — then stay available for growth." },
];

const why = [
  { title: "Fast Delivery", desc: "MVPs delivered in 3–6 weeks, not 6 months." },
  { title: "AI-Native", desc: "AI is built in from day one, not added as an afterthought." },
  { title: "Full-Service Team", desc: "Design, development, and strategy under one roof." },
  { title: "Transparent Process", desc: "Clear milestones upfront. No surprises, no delays." },
  { title: "Startup-Friendly", desc: "We understand the budgets and timelines that matter to founders." },
];

const projects = [
  {
    name: "Pro Automotive Reconditioning",
    tag: "Mobile App",
    desc: "Automotive reconditioning and transport management app for fleet teams.",
    figma: "https://www.figma.com/design/GKzUnAoa1c2M5RoE9TZjp2/Pro-Automotive-Reconditioning-Transport-App--Copy-?node-id=0-1&t=KQss7Xox8z2yGbaj-1",
    thumb: "https://www.figma.com/file/GKzUnAoa1c2M5RoE9TZjp2/thumbnail",
  },
  {
    name: "HeartPad",
    tag: "Mobile App",
    desc: "Clean and minimal digital notepad app for capturing thoughts and ideas.",
    figma: "https://www.figma.com/design/OAYQYTbfi8qvEOEPFoRtvE/HeartPad-V1?node-id=0-1&t=SPrCEittRbt8WqpQ-1",
    thumb: "https://www.figma.com/file/OAYQYTbfi8qvEOEPFoRtvE/thumbnail",
  },
  {
    name: "AI Pet Tracker",
    tag: "AI · Mobile App",
    desc: "AI-powered pet tracking and health monitoring app for pet owners.",
    figma: "https://www.figma.com/design/f5F8xp1z7pA6OC18Wpfvpq/AI-Pet-Tracker?node-id=0-1&t=QgW4VK1C2ILVCYLv-1",
    thumb: "https://www.figma.com/file/f5F8xp1z7pA6OC18Wpfvpq/thumbnail",
  },
];

const testimonials = [
  { quote: "Brandev shipped our MVP in 4 weeks. We raised our seed round a month later.", name: "Sarah K.", company: "Founder, Lumen Health" },
  { quote: "The AI chatbot they built handles 70% of our support tickets. Game changer.", name: "Marcus T.", company: "CEO, RetailFlow" },
  { quote: "Best dev team we've worked with. Clear, fast, and they genuinely care.", name: "Aisha P.", company: "Co-founder, Tessera" },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* LAYER 1 — main glow */}
        <div
          className="absolute"
          style={{
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "600px",
            background: "radial-gradient(ellipse at center top, rgba(59,130,246,0.45) 0%, transparent 65%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        {/* LAYER 2 — bright core */}
        <div
          className="absolute"
          style={{
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "400px",
            height: "300px",
            background: "radial-gradient(ellipse at center top, rgba(59,130,246,0.3) 0%, transparent 60%)",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <Particles />
        </div>
        <div className="container-x relative z-[1] pt-20 pb-28 md:pt-32 md:pb-40 text-center">
          <Reveal variant="fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />
              Now booking Q3 2026 projects
            </span>
          </Reveal>
          <h1 className="mt-6 mx-auto max-w-4xl text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            <Typewriter text="We Build AI-Powered Apps That Launch Your Vision Fast" />
          </h1>
          <Reveal delay={300}>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
              Brandev Solutions helps startups and small businesses build mobile apps, PWAs, and AI integrations — from idea to launch in weeks, not months.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-primary-hover">
                Book a Free Call <ArrowRight size={16} />
              </a>
              <Link to="/portfolio" className="btn-ghost btn-ghost-hover">See Our Work</Link>
            </div>
            <div className="mt-8 flex items-center justify-center" style={{ gap: 20 }}>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" aria-label="Book a Call" className="text-white/50 hover:text-white transition-colors duration-200">
                <Calendar size={18} />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/50 hover:text-white transition-colors duration-200">
                <Linkedin size={18} />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/50 hover:text-white transition-colors duration-200">
                <Instagram size={18} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="container-x py-12 border-y border-white/5">
        <Reveal variant="slide-left">
          <p className="text-center text-sm text-white/55 mb-6">Trusted by founders and businesses across 5+ countries</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-white/70">
            {[{i:Smartphone,l:"Mobile App"},{i:Globe,l:"Web App"},{i:Bot,l:"AI Integration"},{i:Rocket,l:"MVP Development"}].map(({i:I,l}) => (
              <div key={l} className="flex items-center gap-2 text-sm">
                <I size={18} className="text-[#3b82f6]" />
                <span>{l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-x py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What We Build</h2>
            <p className="mt-4 text-white/65">End-to-end development for startups and businesses ready to grow.</p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="card-surface card-hover-glow p-7 h-full">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Process — Simple and Transparent</h2>
          </div>
        </Reveal>
        <div className="mt-14 space-y-6 max-w-4xl mx-auto">
          {steps.map((s, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <Reveal key={s.title} variant={fromLeft ? "slide-left" : "slide-right"}>
                <div className={`card-surface p-6 md:p-8 flex gap-5 md:gap-8 items-center ${fromLeft ? "" : "md:flex-row-reverse md:text-right"}`}>
                  <div className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30">
                    <s.icon size={24} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#3b82f6] font-semibold">Step {i + 1}</div>
                    <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-1 text-white/65">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* WHY */}
      <section className="container-x py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Startups Choose Brandev Solutions</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <div className="card-surface p-7 h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3b82f6]/15 text-[#3b82f6] border border-[#3b82f6]/30">
                    <Check size={16} />
                  </span>
                  <h3 className="font-semibold">{w.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-20">
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

      {/* PORTFOLIO PREVIEW */}
      <section className="container-x py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 max-w-3xl">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Recent Work</h2>
              <p className="mt-3 text-white/65">A few projects we're proud of.</p>
            </div>
            <Link to="/portfolio" className="text-sm text-[#3b82f6] hover:text-white inline-flex items-center gap-1">
              See all <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className="block card-surface card-hover-glow overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/3] bg-[#0a0f1e] relative overflow-hidden">
                  <img
                    src={p.thumb}
                    alt={`${p.name} cover`}
                    loading="lazy"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const fb = img.nextElementSibling as HTMLElement | null;
                      if (fb) fb.style.display = "flex";
                    }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 hidden items-center justify-center px-6 text-center text-2xl md:text-3xl font-bold text-[#3b82f6]">
                    {p.name}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#3b82f6] font-semibold">{p.tag}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                  <a
                    href={p.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm text-white/80 inline-flex items-center gap-1 self-start hover:text-[#3b82f6] transition-colors"
                  >
                    View Design <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      <CtaBanner />
    </PageShell>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="container-x py-24">
      <Reveal>
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-tight">What Our Clients Say</h2>
      </Reveal>
      <div className="mt-12 max-w-3xl mx-auto relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${i * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.name} className="w-full flex-shrink-0 px-2">
                <div className="card-surface p-8 md:p-12 text-center">
                  <p className="text-lg md:text-xl text-white/85 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-white/55">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[#3b82f6]" : "w-4 bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { ArrowRight } from "lucide-react";
import proAutoCover from "@/assets/pro-auto-cover.png.asset.json";
import zamaanCover from "@/assets/zamaan-cover.png.asset.json";
import pawpalCover from "@/assets/pawpal-cover.png.asset.json";
import awdaCover from "@/assets/awda-cover.png.asset.json";

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

const FIGMA_KEYS = {
  proAuto: "GKzUnAoa1c2M5RoE9TZjp2",
  heartPad: "OAYQYTbfi8qvEOEPFoRtvE",
  petTracker: "f5F8xp1z7pA6OC18Wpfvpq",
  awda: "467MFmraWnHT59jyiZj5TP",
  mwStudio: "zDjFu6Rdlto2vfnpxE5rfH",
};

const projects = [
  {
    name: "Pro Automotive Reconditioning",
    tag: "Mobile App",
    cat: "mobile",
    desc: "Automotive reconditioning and transport management app for fleet teams.",
    figma: "https://www.figma.com/design/GKzUnAoa1c2M5RoE9TZjp2/Pro-Automotive-Reconditioning-Transport-App--Copy-?node-id=0-1&t=KQss7Xox8z2yGbaj-1",
    thumb: proAutoCover.url,
  },
  {
    name: "HeartPad",
    tag: "Mobile App",
    cat: "mobile",
    desc: "Clean and minimal digital notepad app for capturing thoughts and ideas.",
    figma: "https://www.figma.com/design/OAYQYTbfi8qvEOEPFoRtvE/HeartPad-V1?node-id=0-1&t=SPrCEittRbt8WqpQ-1",
    thumb: zamaanCover.url,
  },
  {
    name: "AI Pet Tracker",
    tag: "AI · Mobile App",
    cat: "ai",
    desc: "AI-powered pet tracking and health monitoring app for pet owners.",
    figma: "https://www.figma.com/design/f5F8xp1z7pA6OC18Wpfvpq/AI-Pet-Tracker?node-id=0-1&t=QgW4VK1C2ILVCYLv-1",
    thumb: pawpalCover.url,
  },
  {
    name: "Awda Smart Prayer Lock",
    tag: "Mobile App",
    cat: "mobile",
    desc: "Smart prayer time lock app for focused and mindful daily worship.",
    figma: "https://www.figma.com/design/467MFmraWnHT59jyiZj5TP/Awda-smart-prayer-lock-app?node-id=0-1&t=57dKzAsKe9Y3Bcec-1",
    thumb: awdaCover.url,
  },
  {
    name: "MW Studio Dashboard",
    tag: "Web App",
    cat: "web",
    desc: "Marketing operations dashboard for campaign tracking and workflow management.",
    figma: "https://www.figma.com/design/zDjFu6Rdlto2vfnpxE5rfH/MW-Studio-%E2%80%94-Marketing-Operations-Dashboard?t=57dKzAsKe9Y3Bcec-1",
    thumb: `https://www.figma.com/file/${FIGMA_KEYS.mwStudio}/thumbnail`,
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile App" },
  { id: "web", label: "Web App" },
  { id: "ai", label: "AI" },
];

function ProjectCover({ name, thumb }: { name: string; thumb: string }) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div className="aspect-[4/3] bg-[#0a0f1e] relative flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-bold text-[#3b82f6] text-center px-6">{name}</span>
      </div>
    );
  }
  return (
    <div className="aspect-[4/3] bg-[#0a0f1e] relative overflow-hidden">
      <img
        src={thumb}
        alt={`${name} cover`}
        loading="lazy"
        onError={() => setErrored(true)}
        className="absolute inset-0 w-full h-full object-contain"
      />
    </div>
  );
}

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
                <ProjectCover name={p.name} thumb={p.thumb} />
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-[#3b82f6] font-semibold">{p.tag}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/65">{p.desc}</p>
                  <a
                    href={p.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 text-sm text-white/85 inline-flex items-center gap-1 self-start hover:text-[#3b82f6] transition-colors"
                  >
                    View Design <ArrowRight size={14} />
                  </a>
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

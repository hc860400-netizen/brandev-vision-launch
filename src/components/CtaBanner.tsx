import { CALENDLY_URL } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function CtaBanner({
  headline = "Ready to Build Something Great?",
  subtext = "Book a free 30-minute discovery call. No commitment — just a conversation about your idea.",
  button = "Book Free Call",
}: {
  headline?: string;
  subtext?: string;
  button?: string;
}) {
  return (
    <section className="container-x py-24">
      <Reveal variant="fade-in">
        <div className="relative overflow-hidden rounded-3xl border border-[#3b82f6]/30 bg-gradient-to-br from-[#0f1830] to-[#0a0f1e] p-10 md:p-16 text-center animate-glow-pulse">
          <div className="absolute inset-0 -z-10 opacity-40" style={{ background: "radial-gradient(600px circle at 50% 0%, rgba(59,130,246,0.35), transparent 60%)" }} />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{headline}</h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">{subtext}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary btn-primary-hover mt-8">
            {button}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

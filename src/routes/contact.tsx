import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CALENDLY_URL, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/constants";
import { Mail, Linkedin, Calendar, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Brandev Solutions" },
      { name: "description", content: "Tell us about your project. We respond within 24 hours." },
      { property: "og:title", content: "Contact — Brandev Solutions" },
      { property: "og:description", content: "Get in touch with Brandev Solutions." },
    ],
  }),
  component: Contact,
});

const SERVICES = ["Mobile App", "MVP", "AI Integration", "PWA", "Web Development", "UX Design", "Not Sure"];

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell>
      <section className="container-x pt-20 pb-10 md:pt-28 text-center relative">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(700px circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)" }} />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Let's Build Something Together</h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">Tell us about your project and we'll respond within 24 hours.</p>
        </Reveal>
      </section>

      <section className="container-x py-12 grid gap-8 lg:grid-cols-2">
        <Reveal variant="slide-left">
          <form onSubmit={onSubmit} className="card-surface p-8 md:p-10">
            <h2 className="text-2xl font-semibold">Send us a message</h2>
            {sent ? (
              <div className="mt-8 text-center py-12">
                <div className="mx-auto h-14 w-14 rounded-full bg-[#3b82f6]/15 border border-[#3b82f6]/40 text-[#3b82f6] flex items-center justify-center">
                  <Check size={28} />
                </div>
                <p className="mt-4 text-lg font-medium">Message sent</p>
                <p className="mt-1 text-sm text-white/60">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="mt-6 space-y-5">
                <Field label="Full Name" required>
                  <input required type="text" className={inputCls} />
                </Field>
                <Field label="Email Address" required>
                  <input required type="email" className={inputCls} />
                </Field>
                <Field label="Company / Startup Name">
                  <input type="text" className={inputCls} />
                </Field>
                <Field label="Service Needed" required>
                  <select required className={inputCls}>
                    <option value="" className="bg-[#0a0f1e]">Select a service</option>
                    {SERVICES.map((s) => <option key={s} className="bg-[#0a0f1e]">{s}</option>)}
                  </select>
                </Field>
                <Field label="Project description" required>
                  <textarea required rows={5} className={inputCls} placeholder="Tell us about your project..." />
                </Field>
                <button type="submit" className="btn-primary btn-primary-hover w-full mt-2 hover:animate-glow-pulse">
                  Send Message
                </button>
                <p className="text-xs text-white/50 text-center">No commitment required. Just a conversation about your idea.</p>
              </div>
            )}
          </form>
        </Reveal>

        <Reveal variant="slide-right">
          <div className="card-surface p-8 md:p-10 h-full flex flex-col">
            <h2 className="text-2xl font-semibold">Prefer to talk directly?</h2>
            <p className="mt-2 text-white/65 text-sm">Book a 30-minute call or reach out — whichever works best.</p>

            <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="btn-primary btn-primary-hover mt-6 w-full">
              <Calendar size={16} /> Book a Free Call
            </a>

            <div className="mt-6 rounded-xl border border-white/10 overflow-hidden">
              <iframe
                src={`${CALENDLY_URL}?embed_domain=brandevsolutions.com&embed_type=Inline&hide_event_type_details=1`}
                title="Book a call"
                className="w-full"
                style={{ height: 480, border: 0, background: "#0a0f1e" }}
              />
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-white/80 hover:text-[#3b82f6] transition-colors">
                <Mail size={16} className="text-[#3b82f6]" /> {CONTACT_EMAIL}
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-[#3b82f6] transition-colors">
                <Linkedin size={16} className="text-[#3b82f6]" /> linkedin.com/company/brandevsolutions
              </a>
            </div>
            <p className="mt-6 text-xs text-white/55">We reply within 24 hours.</p>
          </div>
        </Reveal>
      </section>

      <p className="container-x text-center text-sm text-white/55 pb-16">
        No commitment required. Just a conversation about your idea.
      </p>
    </PageShell>
  );
}

const inputCls =
  "w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-[#3b82f6] focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]";

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm text-white/75">
        {label}{required && <span className="text-[#3b82f6]"> *</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

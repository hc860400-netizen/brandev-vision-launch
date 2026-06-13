import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { posts } from "@/lib/posts";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Insights on MVPs, AI & Product | Brandev Solutions" },
      { name: "description", content: "Practical playbooks on shipping MVPs, AI features that move metrics, and conversion tips for startups and small businesses." },
      { name: "keywords", content: "startup blog, MVP playbook, AI integration, product development, web development insights" },
      { property: "og:title", content: "Brandev Solutions Blog" },
      { property: "og:description", content: "Insights on MVPs, AI integrations, and product strategy from the Brandev team." },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Brandev Solutions Blog" },
      { name: "twitter:description", content: "Insights on MVPs, AI integrations, and product strategy." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `${SITE_NAME} Blog`,
        url: `${SITE_URL}/blog`,
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          author: { "@type": "Organization", name: p.author },
          url: `${SITE_URL}/blog/${p.slug}`,
        })),
      }),
    }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageShell>
      <section className="container-x pt-20 pb-12 md:pt-28 text-center relative">
        <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(700px circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)" }} />
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Insights & Playbooks</h1>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            Field notes from building MVPs, shipping AI features, and helping founders launch faster.
          </p>
        </Reveal>
      </section>

      <section className="container-x py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="card-surface p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]/40 hover:shadow-[0_20px_60px_-20px_rgba(59,130,246,0.35)]"
              >
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider px-2 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm text-white/65 flex-1">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-white/50">
                  <span className="inline-flex items-center gap-1.5"><Calendar size={12} />{new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock size={12} />{p.readTime}</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-[#3b82f6] font-medium">
                  Read article <ArrowRight size={14} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}

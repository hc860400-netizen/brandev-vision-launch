import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";
import { getPost, posts } from "@/lib/posts";
import { SITE_URL, SITE_NAME, OG_IMAGE } from "@/lib/constants";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    const post = loaderData?.post;
    const title = post ? `${post.title} | ${SITE_NAME} Blog` : "Article | Brandev Solutions";
    const description = post?.excerpt ?? "Insights from Brandev Solutions.";
    const url = `${SITE_URL}/blog/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: post?.tags.join(", ") ?? "" },
        { name: "author", content: post?.author ?? SITE_NAME },
        { property: "og:title", content: post?.title ?? title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "article:published_time", content: post?.date ?? "" },
        { property: "article:author", content: post?.author ?? SITE_NAME },
        { name: "twitter:title", content: post?.title ?? title },
        { name: "twitter:description", content: description },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: post ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: post.author, url: SITE_URL },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: OG_IMAGE },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
          image: OG_IMAGE,
          keywords: post.tags.join(", "),
        }),
      }] : [],
    };
  },
  component: BlogPost,
});

function renderContent(content: string) {
  return content.split(/\n\n+/).map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl md:text-3xl font-semibold tracking-tight mt-10 mb-4">
          {block.replace(/^##\s+/, "")}
        </h2>
      );
    }
    return (
      <p key={i} className="text-white/80 leading-relaxed mb-5">
        {block}
      </p>
    );
  });
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageShell>
      <article className="container-x pt-20 pb-12 md:pt-28 max-w-3xl">
        <Reveal>
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white">
            <ArrowLeft size={14} /> All articles
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="text-[11px] uppercase tracking-wider px-2 py-1 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-5 text-sm text-white/55">
            <span className="inline-flex items-center gap-1.5"><Calendar size={14} />{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 text-lg">{renderContent(post.content)}</div>
        </Reveal>
      </article>

      {related.length > 0 && (
        <section className="container-x py-16">
          <h3 className="text-2xl font-semibold mb-6">Keep reading</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="card-surface p-6 hover:-translate-y-1 hover:border-[#3b82f6]/40 transition-all duration-300"
              >
                <h4 className="font-semibold leading-snug">{p.title}</h4>
                <p className="mt-2 text-sm text-white/60">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBanner />
    </PageShell>
  );
}

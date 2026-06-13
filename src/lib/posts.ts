export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  author: string;
  tags: string[];
  content: string; // simple markdown-ish: paragraphs separated by blank lines, ## headings
}

export const posts: Post[] = [
  {
    slug: "how-to-launch-an-mvp-in-3-weeks",
    title: "How to Launch a Startup MVP in 3 Weeks (Without Cutting Corners)",
    excerpt:
      "A practical playbook we use at Brandev Solutions to ship investor-ready MVPs in under a month — scope, stack, and shipping discipline.",
    date: "2026-05-20",
    readTime: "6 min read",
    author: "Brandev Solutions",
    tags: ["MVP", "Startups", "Product"],
    content: `Most founders don't fail because they pick the wrong idea. They fail because the gap between idea and product takes 9 months instead of 3 weeks. Here's the exact process we use to ship MVPs that get funded.

## 1. Cut scope until it hurts
Your v1 should do one thing remarkably well. Not three things adequately. List every feature, then delete two-thirds. The ones that survive are your MVP.

## 2. Pick a boring stack on purpose
We use TypeScript, React, and a managed Postgres. Boring is fast. Boring has docs. Boring doesn't break at 2am the day before your demo.

## 3. Ship every Friday
A weekly demo to the founder forces decisions. No "we'll figure that out later." Later is now.

## 4. Instrument from day one
You can't iterate on what you can't measure. Add analytics in week one, not week ten.

## 5. Launch ugly, iterate fast
A live product with three users beats a beautiful prototype with zero. Get it in front of real people and let them tell you what's broken.`,
  },
  {
    slug: "ai-features-that-actually-move-the-needle",
    title: "AI Features That Actually Move the Needle for Small Businesses",
    excerpt:
      "Not every product needs a chatbot. Here are the AI integrations we've shipped that measurably increased conversion, retention, or revenue.",
    date: "2026-04-12",
    readTime: "5 min read",
    author: "Brandev Solutions",
    tags: ["AI", "Product", "Conversion"],
    content: `Everyone wants to "add AI." Most of those features get used twice and forgotten. The ones below moved real metrics for our clients.

## Smart search that understands intent
Replacing keyword search with semantic search dropped "no results" rates by 60% on one e-commerce client. Users found what they meant, not what they typed.

## Auto-generated drafts
For a content app we built, generating a first-draft post from a one-line prompt tripled weekly active creators. The bar to start matters more than the bar to finish.

## Personalized onboarding
Instead of a fixed tour, we used the user's stated goal to surface only the relevant features. Activation jumped 28%.

## What we stopped recommending
Generic chatbots. Vague "AI insights" dashboards. AI features that exist for the press release, not the user.`,
  },
  {
    slug: "why-your-website-isnt-converting",
    title: "Why Your Website Isn't Converting (And How to Fix It This Week)",
    excerpt:
      "Five conversion mistakes we see on almost every small-business website, and the quick fixes that move the needle without a redesign.",
    date: "2026-03-03",
    readTime: "4 min read",
    author: "Brandev Solutions",
    tags: ["Web", "Conversion", "Design"],
    content: `You don't need a redesign. You need to fix five things.

## 1. Your hero doesn't say what you do
Visitors decide in 3 seconds. If your hero says "Empowering tomorrow" instead of "We build mobile apps for startups," they leave.

## 2. Your CTA is buried
One primary action, above the fold, in a color that contrasts with everything else. Not three buttons of equal weight.

## 3. You're loading 8MB of images
Compress. Use modern formats. Lazy-load below-the-fold. A fast site converts better than a pretty slow one.

## 4. No social proof in the first viewport
Logos, a quote, a number. Something that says other people trusted you and lived.

## 5. Your contact form has 11 fields
Ask for name, email, and one sentence. Everything else can come later.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

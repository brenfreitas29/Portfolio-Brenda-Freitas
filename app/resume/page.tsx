import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Brenda Freitas — Full Stack Developer",
  description: "Full Stack Developer resume focused on Next.js, React, TypeScript, Supabase, SaaS products and AI automation.",
};

const groups = [
  ["Frontend", "Next.js · React · TypeScript · JavaScript · HTML5 · CSS3 · Tailwind CSS"],
  ["Backend & Data", "Supabase · PostgreSQL · REST APIs · Authentication · RLS · Database Design"],
  ["Product", "SaaS · CRM workflows · Multi-tenant architecture · Stripe · AI automation · Responsive UI"],
  ["Tools", "Git · GitHub · Vercel · API integrations · Technical documentation"],
];

const projects = [
  {
    name: "FlowDesk",
    type: "Multi-tenant SaaS / CRM",
    description: "Built a WhatsApp-centered CRM product connecting authentication, lead management, Kanban pipeline workflows, conversations, scheduling, automation and analytics in one workspace.",
    stack: "Next.js · React · TypeScript · Supabase · PostgreSQL · RLS · Stripe · Vercel",
    href: "/projects/flowdesk",
  },
  {
    name: "VivaTrip",
    type: "Travel SaaS / Full Stack",
    description: "Built a connected travel-planning experience with SSR authentication, protected routes, persistent sessions, saved trip context and destination-aware pre-trip workflows.",
    stack: "Next.js · React · TypeScript · Supabase · PostgreSQL · SSR Auth · Vercel",
    href: "/projects/vivatrip",
  },
  {
    name: "Hair & Skin Clinic",
    type: "Multilingual web platform",
    description: "Developed a responsive service platform with reusable React components, multilingual content structure and conversion-focused UX across desktop and mobile.",
    stack: "Next.js · React · TypeScript · Responsive UI · Multilingual UX · Vercel",
    href: "/projects/hair-skin-clinic",
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f8f7fb] px-5 py-8 text-[#24194f] md:px-10 md:py-12 print:bg-white print:px-0 print:py-0">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-7 shadow-[0_30px_100px_rgba(36,25,79,0.10)] md:p-12 print:max-w-none print:rounded-none print:p-0 print:shadow-none">
        <header className="flex flex-col gap-7 border-b border-[#24194f]/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="text-xs uppercase tracking-[0.25em] text-[#5748b9] print:hidden">← Portfolio</Link>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Brenda Freitas</h1>
            <p className="mt-3 text-lg text-[#24194f]/70">Full Stack Developer · SaaS · AI Automation</p>
            <p className="mt-2 text-sm text-[#24194f]/50">React · Next.js · TypeScript · Supabase · PostgreSQL</p>
          </div>
          <div className="flex flex-wrap gap-3 print:hidden">
            <a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#24194f]/15 px-5 py-2.5 text-sm font-medium transition hover:border-[#5748b9]/40">GitHub ↗</a>
            <Link href="/#contact" className="rounded-full bg-[#5748b9] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#4639a0]">Contact</Link>
          </div>
        </header>

        <section className="grid gap-8 border-b border-[#24194f]/10 py-10 md:grid-cols-[0.65fr_1.35fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5748b9]">Profile</h2>
          <div>
            <p className="text-base leading-8 text-[#24194f]/75">Full Stack Developer building modern web applications and SaaS products from interface to production. Focused on React and Next.js applications with TypeScript, Supabase/PostgreSQL, authentication, database-backed workflows, responsive UI and cloud deployment.</p>
            <p className="mt-4 text-base leading-8 text-[#24194f]/75">Product-minded approach: turning business requirements into maintainable interfaces, connected data flows and practical user experiences.</p>
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#24194f]/10 py-10 md:grid-cols-[0.65fr_1.35fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5748b9]">Selected projects</h2>
          <div className="space-y-9">
            {projects.map((project) => (
              <article key={project.name}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#5748b9]/70">{project.type}</span>
                </div>
                <p className="mt-2 leading-7 text-[#24194f]/70">{project.description}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-[#24194f]/55">{project.stack}</p>
                <Link href={project.href} className="mt-3 inline-block text-sm font-medium text-[#5748b9] print:hidden">View case study →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 border-b border-[#24194f]/10 py-10 md:grid-cols-[0.65fr_1.35fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5748b9]">Technical skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {groups.map(([title, skills]) => <div key={title}><h3 className="font-semibold">{title}</h3><p className="mt-2 leading-7 text-[#24194f]/70">{skills}</p></div>)}
          </div>
        </section>

        <section className="grid gap-8 py-10 md:grid-cols-[0.65fr_1.35fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5748b9]">What I bring</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["End-to-end product implementation", "Responsive and reusable React interfaces", "Authentication and data-backed workflows", "SaaS architecture and product thinking", "API and third-party integrations", "Production deployment and iteration"].map((item) => <p key={item} className="border-t border-[#24194f]/10 pt-3 text-sm leading-6 text-[#24194f]/70">{item}</p>)}
          </div>
        </section>
      </div>
    </main>
  );
}

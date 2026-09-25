import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Resume | Brenda Freitas — Junior Full Stack Developer",
  description: "Brenda Freitas's junior full stack developer resume: React, Next.js, TypeScript, Supabase and selected real projects.",
};

const groups = [
  ["Frontend", "Next.js · React · TypeScript · JavaScript · HTML5 · CSS3 · Tailwind CSS"],
  ["Backend & Data", "Supabase · PostgreSQL · REST APIs · Authentication · RLS · Database Design"],
  ["Product", "SaaS · CRM workflows · Multi-tenant architecture · Stripe · AI automation · Responsive UI"],
  ["Tools", "Git · GitHub · Vercel · API integrations · Technical documentation"],
];

const projects = [
  {
    name: "VivaTrip",
    type: "Travel SaaS / Full Stack · In progress",
    description: "Developing a connected travel-planning experience with authentication, saved trip context and destination-aware pre-trip workflows.",
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
  {
    name: "Revilo Hair Transplant",
    type: "Clinic website · In progress",
    description: "Developing a responsive website for a hair transplant clinic, focused on clear treatment information and a welcoming consultation journey.",
    stack: "Next.js · React · Responsive UI",
    href: "/projects/revilo",
  },
];

export default function ResumePage() {
  return (
    <main className="br-resume min-h-screen px-5 py-8 md:px-10 md:py-12 print:px-0 print:py-0">
      <div className="br-resume-inner mx-auto max-w-6xl py-5 md:py-10 print:max-w-none print:p-0">
        <header className="br-resume-header flex flex-col gap-7 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="text-xs uppercase tracking-[0.25em] text-[#9d5e48] print:hidden">← Portfolio</Link>
            <span className="br-resume-kicker mt-16 block text-xs font-bold uppercase tracking-[0.22em]">DEVELOPER / BUENOS AIRES</span>
            <h1 className="mt-5 text-5xl font-black leading-[.92] tracking-[-0.075em] md:text-8xl">Brenda <span>Freitas.</span></h1>
            <p className="br-resume-role mt-7 text-xl md:text-2xl">Junior Full Stack Developer</p>
            <p className="br-resume-subtitle mt-3 text-sm">React · Next.js · TypeScript · Supabase · PostgreSQL</p>
          </div>
          <div className="flex flex-wrap gap-3 print:hidden">
            <a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#18211f]/15 px-5 py-2.5 text-sm font-medium transition hover:border-[#9d5e48]/40">GitHub ↗</a>
            <a href="mailto:brenda.micaela80@gmail.com" className="br-resume-contact rounded-full px-5 py-2.5 text-sm font-medium transition">Email me ↗</a>
          </div>
        </header>

        <div className="br-resume-walk" aria-hidden="true">
          <span className="br-resume-walk-label">FROM IDEA TO BUILD <span>↗</span></span>
          <span className="br-resume-walker"><Image src="/brenda-walk.webp" alt="" width={110} height={165} sizes="110px" className="br-resume-walker-image" /></span>
        </div>

        <section className="br-resume-section grid gap-8 py-10 md:grid-cols-[0.55fr_1.45fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9d5e48]">Profile</h2>
          <div>
            <p className="text-base leading-8">I build responsive web applications with React, Next.js and TypeScript, connecting interfaces to authentication, APIs and Supabase/PostgreSQL data.</p>
            <p className="mt-4 text-base leading-8">My background in customer support helps me understand users and turn complex workflows into practical experiences. Based in Buenos Aires and open to remote junior roles.</p>
          </div>
        </section>

        <section className="br-resume-section grid gap-8 py-10 md:grid-cols-[0.55fr_1.45fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9d5e48]">Selected projects</h2>
          <div className="space-y-9">
            {projects.map((project) => (
              <article key={project.name} className="br-resume-project">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="text-xs uppercase tracking-[0.16em] text-[#9d5e48]/70">{project.type}</span>
                </div>
                <p className="mt-2 leading-7 text-[#18211f]/70">{project.description}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-[#18211f]/55">{project.stack}</p>
                <Link href={project.href} className="mt-3 inline-block text-sm font-medium text-[#9d5e48] print:hidden">View case study →</Link>
              </article>
            ))}
          </div>
        </section>

        <section className="br-resume-section grid gap-8 py-10 md:grid-cols-[0.55fr_1.45fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9d5e48]">Technical skills</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {groups.map(([title, skills]) => <div key={title}><h3 className="font-semibold">{title}</h3><p className="mt-2 leading-7 text-[#18211f]/70">{skills}</p></div>)}
          </div>
        </section>

        <section className="br-resume-section grid gap-8 py-10 md:grid-cols-[0.55fr_1.45fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9d5e48]">What I bring</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["End-to-end product implementation", "Responsive and reusable React interfaces", "Authentication and data-backed workflows", "SaaS architecture and product thinking", "API and third-party integrations", "Production deployment and iteration"].map((item) => <p key={item} className="border-t border-[#18211f]/10 pt-3 text-sm leading-6 text-[#18211f]/70">{item}</p>)}
          </div>
        </section>
      </div>
    </main>
  );
}

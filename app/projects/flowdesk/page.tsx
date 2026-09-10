import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FlowDesk — Multi-Tenant CRM SaaS | Brenda Freitas",
  description: "Case study of FlowDesk, a multi-tenant CRM SaaS built with Next.js, React, Supabase, PostgreSQL, Stripe and AI-enabled workflows.",
};

const features = [
  ["01", "Leads & conversations", "Keep lead context, conversations and follow-ups connected in one workspace."],
  ["02", "Smart scheduling", "Bring appointments and customer activity into the same operational flow."],
  ["03", "Automation-ready", "Structure repetitive CRM tasks so they can be supported by automation and AI workflows."],
  ["04", "Analytics & pipeline", "Track lead stages, activity and team workflows without jumping between tools."],
  ["05", "Multi-tenant SaaS", "Tenant-aware architecture designed for multiple companies using one product securely."],
];

const stack = ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Stripe", "Tailwind CSS", "AI Workflows"];

export default function FlowDeskProjectPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100b24] text-white">
      <section className="relative border-b border-white/[.08] bg-[radial-gradient(circle_at_76%_22%,rgba(124,91,255,.18),transparent_32%),linear-gradient(135deg,#17102f_0%,#23174f_55%,#140d2d_100%)]">
        <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-[#efb7df]/[.06] blur-[120px]" />
        <div className="mx-auto max-w-[1450px] px-5 pb-16 pt-7 sm:px-6 md:px-10 md:pb-20">
          <div className="flex items-center justify-between gap-6">
            <Link href="/#work" className="text-[10px] uppercase tracking-[.28em] text-white/55 transition hover:text-white">← Back to work</Link>
            <span className="text-[10px] uppercase tracking-[.28em] text-white/32">Case study · 01 / 02</span>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[.34em] text-[#cfc3f5]/55">AI-powered SaaS / CRM</p>
              <h1 className="mt-5 text-[clamp(4.5rem,9vw,8rem)] font-medium leading-[.82] tracking-[-.075em]">FlowDesk</h1>
              <p className="mt-7 text-xl font-medium tracking-[-.025em] text-[#efb7df] md:text-2xl">Turn conversations into growth.</p>
              <p className="mt-4 max-w-xl text-base leading-8 text-[#cfc3f5]/62 md:text-lg">A multi-tenant CRM that brings leads, conversations, scheduling, automation and analytics into one focused workspace for modern service businesses.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://whats-app-crm-system-architecture.vercel.app" target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#24194f] transition hover:-translate-y-0.5">Live product ↗</a>
                <a href="https://github.com/brenfreitas29/FlowDesk" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/[.025] px-6 py-3 text-sm text-white/72 transition hover:border-white/30 hover:text-white">View code ↗</a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#8f71ff]/[.09] blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[#1a113a]/90 p-3 shadow-[0_34px_100px_rgba(5,1,24,.42)] md:p-5">
                <div className="flex h-9 items-center gap-2 border-b border-white/[.08] px-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f2abc9]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e6cb8f]/65" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9bd5a5]/65" />
                  <span className="ml-auto text-[8px] uppercase tracking-[.23em] text-white/22">Product preview</span>
                </div>
                <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-[1.3rem] bg-white">
                  <Image src="/projects/flowdesk-dashboard.jpg" alt="FlowDesk CRM dashboard" fill priority className="object-contain" sizes="(max-width:1024px) 100vw,60vw" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(([n, title, text]) => (
              <article key={title} className="rounded-[1.25rem] border border-white/[.08] bg-white/[.025] p-5">
                <p className="text-[9px] uppercase tracking-[.24em] text-[#efb7df]/55">{n}</p>
                <h2 className="mt-4 text-base font-medium">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#cfc3f5]/48">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.08] bg-[#0f0a22]">
        <div className="mx-auto max-w-[1450px] px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
            <article className="lg:border-r lg:border-white/[.08] lg:pr-10">
              <p className="text-[10px] uppercase tracking-[.3em] text-[#cfc3f5]/38">01 · The problem</p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-.045em]">Too many disconnected tools.</h2>
              <p className="mt-4 text-sm leading-7 text-[#cfc3f5]/52">Service teams can lose context when leads, conversations, appointments and follow-ups live in separate places.</p>
            </article>

            <article className="lg:border-r lg:border-white/[.08] lg:px-10">
              <p className="text-[10px] uppercase tracking-[.3em] text-[#cfc3f5]/38">02 · The solution</p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-.045em]">One operational workspace.</h2>
              <p className="mt-4 text-sm leading-7 text-[#cfc3f5]/52">FlowDesk connects lead status, conversations, scheduling, customer records and automation inside one product.</p>
            </article>

            <article className="lg:pl-10">
              <p className="text-[10px] uppercase tracking-[.3em] text-[#cfc3f5]/38">03 · Product direction</p>
              <h2 className="mt-5 text-3xl font-medium tracking-[-.045em]">Built to scale with teams.</h2>
              <p className="mt-4 text-sm leading-7 text-[#cfc3f5]/52">The architecture is designed around multi-tenant data, secure access, subscription flows and automation-ready workflows.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#130d2a]">
        <div className="mx-auto max-w-[1450px] px-5 py-16 sm:px-6 md:px-10 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-[10px] uppercase tracking-[.3em] text-[#cfc3f5]/38">Engineering</p>
              <h2 className="mt-5 text-[clamp(2.8rem,5vw,4.8rem)] font-medium leading-[.95] tracking-[-.055em]">A real SaaS foundation,<span className="block font-normal italic text-[#efb7df]">not just a dashboard.</span></h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-[1.3rem] border border-white/[.08] bg-[#1d1640]/55 p-6">
                <p className="text-[10px] uppercase tracking-[.22em] text-[#efb7df]/55">Architecture</p>
                <h3 className="mt-4 text-xl font-medium">Multi-tenant by design</h3>
                <p className="mt-3 text-sm leading-7 text-[#cfc3f5]/52">Tenant-aware product structure with authentication and row-level security patterns designed around company boundaries.</p>
              </article>
              <article className="rounded-[1.3rem] border border-white/[.08] bg-[#1d1640]/55 p-6">
                <p className="text-[10px] uppercase tracking-[.22em] text-[#efb7df]/55">Product systems</p>
                <h3 className="mt-4 text-xl font-medium">Billing, workflows and automation</h3>
                <p className="mt-3 text-sm leading-7 text-[#cfc3f5]/52">Stripe-ready subscription flows, connected CRM workflows and an architecture prepared for AI-assisted operations.</p>
              </article>
            </div>
          </div>

          <div className="mt-14 border-t border-white/[.08] pt-8">
            <p className="text-[10px] uppercase tracking-[.28em] text-[#cfc3f5]/35">Tech stack</p>
            <div className="mt-5 flex flex-wrap gap-2">{stack.map(item => <span key={item} className="rounded-full border border-white/10 bg-white/[.025] px-4 py-2 text-xs text-[#cfc3f5]/65">{item}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[.08] bg-[#0b0718]">
        <div className="mx-auto flex max-w-[1450px] flex-col gap-8 px-5 py-14 sm:px-6 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[.3em] text-[#cfc3f5]/35">Built for real workflows</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-.05em] md:text-5xl">FlowDesk · Product engineering</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#work" className="rounded-full border border-white/12 px-5 py-3 text-sm text-white/68">Back to work</Link>
            <a href="https://whats-app-crm-system-architecture.vercel.app" target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#24194f]">Open product ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}

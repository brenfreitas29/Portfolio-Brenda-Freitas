import StudioHero from "@/components/StudioHero";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import Magnetic from "@/components/Magnetic";
import SideAtmosphere from "@/components/SideAtmosphere";

const projects = [
  { number: "01", title: "FlowDesk", category: "FEATURED · AI SAAS / CRM", description: "Multi-tenant CRM for real business workflows — leads, Kanban pipeline, conversations, scheduling, automation, analytics and subscription-ready architecture.", tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "RLS", "AI Automation"], image: "/projects/flowdesk-dashboard.jpg", previewUrl: "https://whats-app-crm-system-architecture.vercel.app", href: "/projects/flowdesk", liveUrl: "https://whats-app-crm-system-architecture.vercel.app", codeUrl: "https://github.com/brenfreitas29/FlowDesk" },
  { number: "02", title: "Hair & Skin Clinic", category: "BUSINESS WEBSITE / UX", description: "Responsive multilingual clinic experience built around credibility, clear service discovery and conversion-focused user journeys.", tags: ["Next.js", "React", "TypeScript", "Responsive UI", "Multilingual"], image: "/projects/hair-skin-clinic.png", href: "/projects/hair-skin-clinic", liveUrl: "https://graftclinic.vercel.app", codeUrl: "https://github.com/brenfreitas29/graftclinic" },
];

const capabilities = [
  ["01","SaaS products","Authentication, multi-tenant data, dashboards, subscriptions and production deployment."],
  ["02","AI automation","AI-enabled workflows and API integrations that connect product and business operations."],
  ["03","Full-stack apps","Responsive React interfaces backed by application logic, data and secure user flows."],
  ["04","Product engineering","Features, UX refinement and stronger technical foundations for products already in motion."],
];

export default function Home(){
  return <main className="min-h-screen overflow-hidden bg-[#100b24] text-white">
    <SideAtmosphere/>
    <StudioHero/>

    <section id="work" className="relative border-t border-white/[.07] bg-gradient-to-b from-[#17102f] via-[#130d2a] to-[#100b24] px-5 py-20 sm:px-6 md:px-10 md:py-28">
      <div className="pointer-events-none absolute left-[10%] top-20 h-72 w-72 rounded-full bg-[#8067d9]/[.07] blur-[110px]"/>
      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="mb-12 grid gap-7 md:mb-16 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
          <p className="text-[10px] uppercase tracking-[.34em] text-[#cfc3f5]/45 sm:text-xs">Selected work · 2026</p>
          <div>
            <h2 className="max-w-5xl text-[clamp(3.1rem,7vw,5.5rem)] font-medium leading-[.95] tracking-[-.055em]">Products with design on the surface.<span className="block font-normal italic text-[#efb7df]">Engineering underneath.</span></h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#cfc3f5]/58 sm:text-base">Live products across SaaS and business platforms — built with real authentication, databases, integrations and deployment.</p>
          </div>
        </div>
        <div className="flex flex-col gap-7 md:gap-9">{projects.map(project=><ProjectCard key={project.number} project={project}/>)}</div>
      </div>
    </section>

    <section className="relative border-t border-white/[.07] bg-[#100b24] px-5 py-20 sm:px-6 md:px-10 md:py-28">
      <div className="relative mx-auto max-w-[1450px]">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs uppercase tracking-[.35em] text-[#cfc3f5]/45">Capabilities</p>
            <h2 className="mt-6 text-[clamp(3rem,6vw,4rem)] font-medium leading-[.98] tracking-[-.055em]">From idea to<span className="block font-normal italic text-[#efb7df]">working product.</span></h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#cfc3f5]/55">I work across interface, application logic and data to turn business requirements into software people can actually use.</p>
          </div>
          <div>{capabilities.map(([n,t,d])=><article key={t} className="group grid gap-4 border-t border-white/[.09] py-7 sm:grid-cols-[70px_1fr]"><span className="text-xs tracking-[.18em] text-[#cfc3f5]/28">{n}</span><div><h3 className="text-2xl font-medium text-white transition-colors group-hover:text-[#efb7df] md:text-3xl">{t}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-[#cfc3f5]/52">{d}</p></div></article>)}</div>
        </div>
      </div>
    </section>

    <SkillsSection/>

    <section id="about" className="relative border-t border-white/[.07] bg-[#130d2a] px-5 py-20 sm:px-6 md:px-10 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid gap-10 lg:grid-cols-[.58fr_1.42fr] lg:gap-20">
          <div><p className="text-xs uppercase tracking-[.35em] text-[#cfc3f5]/38">About / Availability</p><p className="mt-7 max-w-xs text-sm leading-7 text-[#cfc3f5]/45">Full Stack · Frontend · SaaS · AI Automation · Remote</p></div>
          <div>
            <h2 className="max-w-5xl text-[clamp(3.2rem,7vw,5.8rem)] font-medium leading-[.94] tracking-[-.055em]">I like turning messy ideas into<span className="block font-normal italic text-[#efb7df]">clear, usable products.</span></h2>
            <div className="mt-9 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.3rem] border border-white/[.08] bg-[#1d1640]/55 p-6"><p className="text-[10px] uppercase tracking-[.22em] text-[#cfc3f5]/35">What I build</p><p className="mt-4 text-base leading-7 text-[#cfc3f5]/62">Modern SaaS products, web applications and AI-enabled workflows with a strong focus on usability and visual identity.</p></div>
              <div className="rounded-[1.3rem] border border-white/[.08] bg-[#1d1640]/55 p-6"><p className="text-[10px] uppercase tracking-[.22em] text-[#cfc3f5]/35">Open to</p><p className="mt-4 text-base leading-7 text-[#cfc3f5]/62">Remote Full Stack, Frontend and product-focused roles, plus selected freelance product work.</p></div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3"><a href="/resume" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#1b1238]">View resume ↗</a><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm text-[#cfc3f5]/75">GitHub ↗</a></div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="relative overflow-hidden border-t border-white/[.07] bg-[#0d081d]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7457ff]/[.065] blur-[140px]"/>
      <div className="relative z-10 mx-auto max-w-[1450px] px-5 py-24 sm:px-6 md:px-10 md:py-32">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[.34em] text-[#cfc3f5]/45 sm:text-xs">Available for selected work</p>
            <h2 className="max-w-5xl text-[clamp(4rem,10vw,8rem)] font-semibold leading-[.86] tracking-[-.07em]">Let&apos;s build<span className="block font-normal italic text-[#efb7df]">something useful.</span></h2>
          </div>
          <div className="lg:pb-3">
            <p className="max-w-md text-base leading-8 text-[#cfc3f5]/58">Need a SaaS product, polished frontend or AI-enabled workflow? I can help turn the idea into something real and shippable.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Magnetic strength={.2}><a href="/start-a-project" className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#1b1238]">Start a project ↗</a></Magnetic><a href="https://www.linkedin.com/in/brenda-freitas29" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-white/15 px-8 py-4 text-sm text-[#cfc3f5]/75">LinkedIn ↗</a></div>
          </div>
        </div>
        <div className="mt-14 border-t border-white/[.09] pt-6"><div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><p className="text-[10px] uppercase tracking-[.24em] text-[#cfc3f5]/28">Brenda Studio · Product Engineering</p><div className="flex flex-wrap gap-6 text-xs text-[#cfc3f5]/42"><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/brenda-freitas29" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://www.fiverr.com/brendafreita29" target="_blank" rel="noopener noreferrer">Fiverr ↗</a></div></div></div>
      </div>
    </section>

    <footer className="border-t border-white/[.07] bg-[#080512]"><div className="mx-auto flex max-w-[1450px] flex-col gap-3 px-5 py-6 text-[10px] uppercase tracking-[.2em] text-[#cfc3f5]/22 sm:px-6 md:flex-row md:items-center md:justify-between md:px-10"><p>© 2026 Brenda Studio</p><p>Remote · Argentina / LATAM</p></div></footer>
  </main>
}

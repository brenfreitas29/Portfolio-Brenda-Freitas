import StudioHero from "@/components/StudioHero";
import ProjectCard from "@/components/ProjectCard";
import SkillsSection from "@/components/SkillsSection";
import Magnetic from "@/components/Magnetic";

const projects = [
  { number: "01", title: "FlowDesk", category: "FEATURED · AI SAAS / CRM", description: "Multi-tenant CRM for real business workflows — leads, Kanban pipeline, conversations, scheduling, automation, analytics and subscription-ready architecture.", tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "RLS", "AI Automation"], image: "/projects/flowdesk-dashboard.jpg", previewUrl: "https://whats-app-crm-system-architecture.vercel.app", href: "/projects/flowdesk", liveUrl: "https://whats-app-crm-system-architecture.vercel.app", codeUrl: "https://github.com/brenfreitas29/FlowDesk" },
  { number: "02", title: "VivaTrip", category: "FEATURED · TRAVEL PRODUCT", description: "Full-stack travel product combining flight discovery, cash-versus-miles comparison, protected user flows and affiliate-ready booking experiences.", tags: ["Next.js", "React", "TypeScript", "Supabase", "SSR Auth", "Travel Tech"], image: "/projects/vivatrip-portfolio.jpg", previewUrl: "https://vivatrip.vercel.app", href: "/projects/vivatrip", liveUrl: "https://vivatrip.vercel.app", codeUrl: "https://github.com/brenfreitas29/VivaTrip" },
  { number: "03", title: "Hair & Skin Clinic", category: "BUSINESS WEBSITE / UX", description: "Responsive multilingual clinic experience built around credibility, clear service discovery and conversion-focused user journeys.", tags: ["Next.js", "React", "TypeScript", "Responsive UI", "Multilingual"], image: "/projects/hair-skin-clinic.png", href: "/projects/hair-skin-clinic", liveUrl: "https://graftclinic.vercel.app", codeUrl: "https://github.com/brenfreitas29/graftclinic" },
];

const capabilities = [
  ["01", "SaaS products", "Authentication, multi-tenant data, dashboards, subscriptions and production deployment."],
  ["02", "AI automation", "AI-enabled workflows and API integrations that connect product and business operations."],
  ["03", "Full-stack apps", "Responsive React interfaces backed by application logic, data and secure user flows."],
  ["04", "Product engineering", "Features, UX refinement and stronger technical foundations for products already in motion."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#181232] text-white">
      <StudioHero />

      <section id="work" className="relative overflow-hidden border-t border-white/[.08] bg-gradient-to-b from-[#21184f] via-[#21194b] to-[#181232] px-6 py-28 md:px-10 md:py-40">
        <div className="pointer-events-none absolute left-[8%] top-10 h-[500px] w-[500px] rounded-full bg-[#8067d9]/10 blur-[170px]" />
        <div className="relative z-10 mx-auto max-w-[1450px]">
          <div className="mb-20 grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-end md:mb-28">
            <div><p className="text-xs uppercase tracking-[0.38em] text-[#d4c9f1]/48">Selected work · 2026</p></div>
            <div><h2 className="max-w-5xl text-5xl font-medium leading-[.96] tracking-[-0.055em] md:text-7xl lg:text-[5.5rem]">Products with design on the surface.<span className="block font-normal italic text-[#efb7df]">Engineering underneath.</span></h2><p className="mt-7 max-w-2xl text-base leading-7 text-[#ddd5f3]/58">Live products across SaaS, travel tech and business platforms — built with real authentication, databases, integrations and deployment.</p></div>
          </div>
          <div className="flex flex-col gap-20 md:gap-28">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
        </div>
      </section>

      <section className="relative border-t border-white/[.08] bg-[#181232] px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1450px]">
          <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
            <div className="lg:sticky lg:top-28 lg:self-start"><p className="text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/45">Capabilities</p><h2 className="mt-7 text-5xl font-medium leading-[.98] tracking-[-0.055em] md:text-6xl">From idea to<span className="block font-normal italic text-[#efb7df]">working product.</span></h2><p className="mt-7 max-w-md text-base leading-8 text-[#ddd5f3]/55">I work across interface, application logic and data to turn business requirements into software people can actually use.</p></div>
            <div>{capabilities.map(([number,title,description]) => <article key={title} className="group grid gap-4 border-t border-white/10 py-8 sm:grid-cols-[70px_1fr] md:py-10"><span className="text-xs tracking-[.18em] text-white/25">{number}</span><div><h3 className="text-2xl font-medium tracking-[-.025em] text-white transition group-hover:text-[#efb7df] md:text-3xl">{title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-[#ddd5f3]/52">{description}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <SkillsSection />

      <section id="about" className="border-t border-white/[.08] bg-[#1d163e] px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1450px] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <p className="text-xs uppercase tracking-[.35em] text-white/38">About / Availability</p>
          <div><h2 className="max-w-4xl text-4xl font-medium leading-[1.03] tracking-[-.045em] md:text-6xl">Full-stack development with a<span className="text-[#efb7df]"> product mindset.</span></h2><div className="mt-9 grid gap-8 md:grid-cols-2"><p className="text-base leading-8 text-white/58">I build modern SaaS products, websites and AI-enabled workflows with a focus on usability, visual identity and real business needs.</p><p className="text-base leading-8 text-white/58">Available for remote Full Stack, Frontend and product-focused roles, as well as selected freelance product work.</p></div><div className="mt-10 flex flex-wrap gap-3"><a href="/resume" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#24194f]">View resume ↗</a><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/72">GitHub ↗</a></div></div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/[.08] bg-[#15102d]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f67d9]/12 blur-[190px]"/>
        <div className="relative z-10 mx-auto max-w-[1450px] px-6 py-32 text-center md:px-10 md:py-48"><p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/45">Have a product in mind?</p><h2 className="mx-auto max-w-6xl text-6xl font-semibold leading-[.88] tracking-[-0.065em] md:text-8xl lg:text-[8.5rem]">Let&apos;s build<span className="block font-normal italic text-[#efb7df]">something useful.</span></h2><p className="mx-auto mt-9 max-w-xl text-base leading-7 text-[#ddd5f3]/55">SaaS · Full Stack · Frontend · AI Automation. From first interface to production deployment.</p><div className="mt-11 flex flex-wrap justify-center gap-3"><Magnetic strength={0.3}><a href="/start-a-project" className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#24194f] transition hover:bg-[#f5d6ef]">Start a project ↗</a></Magnetic><a href="/resume" className="inline-flex items-center rounded-full border border-white/15 px-8 py-4 text-sm font-medium text-white/75">View resume</a></div><p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-white/25">Remote · Argentina / LATAM</p></div>
      </section>

      <footer className="border-t border-white/[.08] bg-[#110d25]"><div className="mx-auto max-w-[1450px] px-6 py-10 md:px-10"><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="text-[10px] uppercase tracking-[0.28em] text-white/25">Find me online</p><div className="mt-5 flex flex-wrap gap-x-7 gap-y-4"><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/55 hover:text-white">GitHub ↗</a><a href="https://www.linkedin.com/in/brenda-freitas29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/55 hover:text-white">LinkedIn ↗</a><a href="https://www.fiverr.com/brendafreita29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/55 hover:text-white">Fiverr ↗</a><a href="https://www.upwork.com/freelancers/~01df086fbcd7634d5f" target="_blank" rel="noopener noreferrer" className="text-sm text-white/55 hover:text-white">Upwork ↗</a></div></div><div className="flex flex-col gap-5 md:items-end"><nav className="flex flex-wrap gap-5 text-xs text-white/38"><a href="#work">Work</a><a href="#skills">Stack</a><a href="#about">About</a><a href="/resume">Resume</a><a href="#contact">Contact</a></nav><p className="text-xs text-white/25">© 2026 Brenda Studio</p></div></div></div></footer>
    </main>
  );
}

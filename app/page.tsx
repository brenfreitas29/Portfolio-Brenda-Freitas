import StudioHero from "@/components/StudioHero";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import Magnetic from "@/components/Magnetic";

const projects = [
  { number: "01", title: "FlowDesk", category: "FEATURED · AI SAAS / CRM", description: "Multi-tenant CRM for real business workflows — leads, Kanban pipeline, conversations, scheduling, automation, analytics and subscription-ready architecture.", tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "RLS", "AI Automation"], image: "/projects/flowdesk-dashboard.jpg", href: "/projects/flowdesk", liveUrl: "https://whats-app-crm-system-architecture.vercel.app", codeUrl: "https://github.com/brenfreitas29/FlowDesk" },
  { number: "02", title: "VivaTrip", category: "FEATURED · TRAVEL PRODUCT", description: "Full-stack travel product combining flight discovery, cash-versus-miles comparison, protected user flows and affiliate-ready booking experiences.", tags: ["Next.js", "React", "TypeScript", "Supabase", "SSR Auth", "Travel Tech"], image: "/projects/vivatrip-portfolio.jpg", href: "/projects/vivatrip", liveUrl: "https://vivatrip.vercel.app", codeUrl: "https://github.com/brenfreitas29/VivaTrip" },
  { number: "03", title: "Hair & Skin Clinic", category: "BUSINESS WEBSITE / UX", description: "Responsive multilingual clinic experience built around credibility, clear service discovery and conversion-focused user journeys.", tags: ["Next.js", "React", "TypeScript", "Responsive UI", "Multilingual"], image: "/projects/hair-skin-clinic.png", href: "/projects/hair-skin-clinic", liveUrl: "https://graftclinic.vercel.app", codeUrl: "https://github.com/brenfreitas29/graftclinic" },
];

const capabilities = [
  ["SaaS products", "Authentication, multi-tenant data, dashboards, subscriptions and production deployment."],
  ["AI automation", "AI-enabled workflows and API integrations that connect product and business operations."],
  ["Full-stack web apps", "Responsive React interfaces backed by real application logic, data and secure user flows."],
  ["Product improvements", "New features, UX refinement, responsive fixes and stronger technical foundations for existing products."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-white">
      <StudioHero />
      <section id="work" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#5748b9] via-[#3c2f86] to-[#291f62] px-6 py-28 md:px-10 md:py-36">
        <div className="pointer-events-none absolute -left-52 top-20 h-[600px] w-[600px] rounded-full bg-[#9276ff]/20 blur-[160px]" />
        <div className="pointer-events-none absolute -right-52 top-[35%] h-[650px] w-[650px] rounded-full bg-[#e493d5]/15 blur-[160px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 md:mb-28"><p className="mb-5 text-xs uppercase tracking-[0.38em] text-[#d4c9f1]/70">Featured products</p><h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] md:text-6xl lg:text-7xl">I design the experience.<span className="block bg-gradient-to-r from-[#f3acd9] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">Then I engineer the product.</span></h2><p className="mt-7 max-w-2xl text-base leading-7 text-[#ddd5f3]/65">Selected production work across SaaS, travel tech and business platforms — with authentication, databases, integrations, responsive UX and live deployments.</p></div>
          <div className="flex flex-col gap-16 md:gap-24">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-[#291f62] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/60">What I build</p><h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-6xl">From product idea to<span className="block text-[#f0b7e1]">production software.</span></h2><p className="mt-7 max-w-lg text-base leading-8 text-[#ddd5f3]/65">I work across frontend, backend and product decisions to ship complete web experiences — not just polished screens.</p></div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">{capabilities.map(([title, description]) => <article key={title} className="border-t border-white/15 pt-6"><h3 className="text-xl font-medium text-white">{title}</h3><p className="mt-4 text-sm leading-7 text-[#ddd5f3]/65">{description}</p></article>)}</div>
          </div>
          <div className="mt-14 flex flex-wrap gap-3"><a href="#contact" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">Work with me ↗</a><a href="/resume" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition hover:bg-white/[0.05]">View resume</a></div>
        </div>
      </section>

      <SkillsSection /><AboutSection />
      <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#362776] via-[#2e216b] to-[#24194f]">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center md:px-10 md:py-44"><p className="mb-7 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/65">Available for remote opportunities & selected projects</p><h2 className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-8xl">Need a product that<span className="mt-2 block bg-gradient-to-r from-[#f0a6da] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">actually ships?</span></h2><p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#ddd5f3]/70">Full Stack · Frontend · SaaS · AI Automation. I build production-ready web products with React, Next.js, TypeScript, Supabase and modern product workflows.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><Magnetic strength={0.3}><a href="/start-a-project" className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">Start a project ↗</a></Magnetic><a href="/resume" className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white/85">View resume</a><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white/85">GitHub ↗</a></div><p className="mt-7 text-[10px] uppercase tracking-[0.24em] text-white/35">Remote · Argentina / LATAM · Freelance & product roles</p></div>
      </section>
      <footer className="border-t border-white/10 bg-[#24194f]"><div className="mx-auto max-w-7xl px-6 py-10 md:px-10"><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="text-[10px] uppercase tracking-[0.28em] text-white/30">Find me online</p><div className="mt-5 flex flex-wrap gap-x-7 gap-y-4"><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">GitHub ↗</a><a href="https://www.linkedin.com/in/brenda-freitas29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">LinkedIn ↗</a><a href="https://www.fiverr.com/brendafreita29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">Fiverr ↗</a><a href="https://www.upwork.com/freelancers/~01df086fbcd7634d5f" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">Upwork ↗</a></div></div><div className="flex flex-col gap-5 md:items-end"><nav className="flex flex-wrap gap-5 text-xs text-[#d6cced]/55"><a href="#work">Work</a><a href="#skills">Skills</a><a href="#about">About</a><a href="/resume">Resume</a><a href="#contact">Contact</a></nav><p className="text-xs text-[#d6cced]/35">© 2026 Brenda Studio</p></div></div></div></footer>
    </main>
  );
}

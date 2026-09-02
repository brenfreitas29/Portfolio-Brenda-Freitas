import StudioHero from "@/components/StudioHero";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import Magnetic from "@/components/Magnetic";

const projects = [
  { number: "01", title: "FlowDesk", category: "AI-POWERED SAAS / CRM", description: "Multi-tenant CRM connecting leads, Kanban pipeline workflows, conversations, scheduling, automation and analytics in one product.", tags: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "RLS"], image: "/projects/flowdesk-dashboard.jpg", href: "/projects/flowdesk", liveUrl: "https://whats-app-crm-system-architecture.vercel.app", codeUrl: "https://github.com/brenfreitas29/FlowDesk" },
  { number: "02", title: "VivaTrip", category: "TRAVEL SAAS / FULL STACK", description: "A connected travel planning product with SSR authentication, protected routes, saved trip context and destination-aware pre-trip workflows.", tags: ["Next.js", "React", "TypeScript", "Supabase", "SSR Auth"], image: "/projects/vivatrip-portfolio.svg", href: "/projects/vivatrip", liveUrl: "https://vivatrip.vercel.app", codeUrl: "https://github.com/brenfreitas29/VivaTrip" },
  { number: "03", title: "Hair & Skin Clinic", category: "BUSINESS WEBSITE / UX", description: "Responsive multilingual platform built with reusable React components and conversion-focused UX for a modern clinic experience.", tags: ["Next.js", "React", "TypeScript", "Responsive UI", "Multilingual"], image: "/projects/hair-skin-clinic.png", href: "/projects/hair-skin-clinic", liveUrl: "https://graftclinic.vercel.app", codeUrl: "https://github.com/brenfreitas29/graftclinic" },
];

const capabilities = [
  ["SaaS MVPs", "From authentication and database architecture to dashboards, subscriptions and production deployment."],
  ["Business websites", "Fast, responsive websites and landing pages designed around credibility, conversion and clear calls to action."],
  ["AI & automation", "AI-enabled workflows, API integrations and automations that reduce repetitive work and connect business processes."],
  ["Product engineering", "Frontend and full-stack development for existing products that need new features, cleaner UX or a stronger technical foundation."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-white">
      <StudioHero />
      <section id="work" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#5748b9] via-[#3c2f86] to-[#291f62] px-6 py-28 md:px-10 md:py-36">
        <div className="pointer-events-none absolute -left-52 top-20 h-[600px] w-[600px] rounded-full bg-[#9276ff]/20 blur-[160px]" />
        <div className="pointer-events-none absolute -right-52 top-[35%] h-[650px] w-[650px] rounded-full bg-[#e493d5]/15 blur-[160px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 md:mb-28"><p className="mb-5 text-xs uppercase tracking-[0.38em] text-[#d4c9f1]/70">Selected Work</p><h2 className="max-w-5xl text-4xl font-medium tracking-[-0.045em] md:text-6xl lg:text-7xl">Products with real<span className="block bg-gradient-to-r from-[#f3acd9] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">engineering behind the interface.</span></h2><p className="mt-7 max-w-2xl text-base leading-7 text-[#ddd5f3]/65">Production projects demonstrating authentication, databases, SaaS architecture, business workflows, responsive UX and deployment — with live products and source code.</p></div>
          <div className="flex flex-col gap-16 md:gap-24">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
        </div>
      </section>

      <section className="relative border-t border-white/10 bg-[#291f62] px-6 py-28 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/60">What I can build for you</p><h2 className="mt-6 text-4xl font-medium tracking-[-0.045em] md:text-6xl">From an idea to a<span className="block text-[#f0b7e1]">working product.</span></h2><p className="mt-7 max-w-lg text-base leading-8 text-[#ddd5f3]/65">I work across product, frontend and backend to turn business requirements into software people can actually use.</p></div>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">{capabilities.map(([title, description]) => <article key={title} className="border-t border-white/15 pt-6"><h3 className="text-xl font-medium text-white">{title}</h3><p className="mt-4 text-sm leading-7 text-[#ddd5f3]/65">{description}</p></article>)}</div>
          </div>
          <div className="mt-14 flex flex-wrap gap-3"><a href="/start-a-project" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">Start a project ↗</a><a href="#work" className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80">See case studies</a></div>
        </div>
      </section>

      <SkillsSection /><AboutSection /><CareerSection /><ServicesSection />
      <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#362776] via-[#2e216b] to-[#24194f]">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center md:px-10 md:py-48"><p className="mb-7 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/65">Have a project in mind?</p><h2 className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-8xl">Tell me what you need.<span className="mt-2 block bg-gradient-to-r from-[#f0a6da] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">I&apos;ll help you build it.</span></h2><p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#ddd5f3]/70">Available for SaaS MVPs, business websites, product development, AI automation and selected Full Stack opportunities.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><Magnetic strength={0.3}><a href="/start-a-project" className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">Start a project ↗</a></Magnetic><a href="/resume" className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white/85">View resume</a><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white/85">GitHub ↗</a></div><p className="mt-7 text-[10px] uppercase tracking-[0.24em] text-white/35">Remote · Argentina / LATAM · Freelance & product roles</p></div>
      </section>
      <footer className="border-t border-white/10 bg-[#24194f]"><div className="mx-auto max-w-7xl px-6 py-10 md:px-10"><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="text-[10px] uppercase tracking-[0.28em] text-white/30">Find me online</p><div className="mt-5 flex flex-wrap gap-x-7 gap-y-4"><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">GitHub ↗</a><a href="https://www.linkedin.com/in/brenda-freitas29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">LinkedIn ↗</a><a href="https://www.fiverr.com/brendafreita29" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">Fiverr ↗</a><a href="https://www.upwork.com/freelancers/~01df086fbcd7634d5f" target="_blank" rel="noopener noreferrer" className="text-sm text-white/65 hover:text-white">Upwork ↗</a></div></div><div className="flex flex-col gap-5 md:items-end"><nav className="flex flex-wrap gap-5 text-xs text-[#d6cced]/55"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="/resume">Resume</a><a href="#contact">Contact</a></nav><p className="text-xs text-[#d6cced]/35">© 2026 Brenda Studio</p></div></div></div></footer>
    </main>
  );
}

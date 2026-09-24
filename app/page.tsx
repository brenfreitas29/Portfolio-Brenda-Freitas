import StudioHero from "@/components/StudioHero";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const projects = [
  { number: "01", title: "FlowDesk", category: "FEATURED · AI SAAS / CRM", description: "Multi-tenant CRM for real business workflows — leads, Kanban pipeline, conversations, scheduling, automation, analytics and subscription-ready architecture.", tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "RLS", "AI Automation"], image: "/projects/flowdesk-dashboard.jpg", previewUrl: "https://whats-app-crm-system-architecture.vercel.app", href: "/projects/flowdesk", liveUrl: "https://whats-app-crm-system-architecture.vercel.app", codeUrl: "https://github.com/brenfreitas29/FlowDesk" },
  { number: "02", title: "Hair & Skin Clinic", category: "BUSINESS WEBSITE / UX", description: "Responsive multilingual clinic experience built around credibility, clear service discovery and conversion-focused user journeys.", tags: ["Next.js", "React", "TypeScript", "Responsive UI", "Multilingual"], image: "/projects/hair-skin-clinic.png", href: "/projects/hair-skin-clinic", liveUrl: "https://graftclinic.vercel.app", codeUrl: "https://github.com/brenfreitas29/graftclinic" },
  { number: "03", title: "VivaTrip", category: "TRAVEL APP / FULL STACK", description: "Travel planning app with authenticated journeys, saved trips and a connected pre-travel experience.", tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Authentication"], image: "/projects/vivatrip-portfolio.jpg", href: "/projects/vivatrip", liveUrl: "https://vivatrip.vercel.app", codeUrl: "https://github.com/brenfreitas29/VivaTrip" },
];

export default function Home() {
  return <main className="editorial-page">
    <StudioHero />
    <section id="work" className="editorial-work editorial-container" aria-labelledby="work-title">
      <div className="editorial-section-heading"><span>Selected work / 2026</span><h2 id="work-title">Projects that <em>work in practice.</em></h2><p>Three real projects, from SaaS workflows to customer-facing experiences. Hover, focus or tap a project to explore it.</p></div>
      <div className="editorial-project-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div>
    </section>
    <section id="skills" className="editorial-band"><div className="editorial-container editorial-skills"><div><span className="editorial-label">What I work with</span><h2>From interface <em>to data.</em></h2></div><div className="editorial-skill-list"><p><strong>Frontend</strong><span>React · Next.js · TypeScript · Tailwind CSS</span></p><p><strong>Backend & data</strong><span>Supabase · PostgreSQL · Authentication · REST APIs</span></p><p><strong>Workflow</strong><span>Git · GitHub · Vercel · Responsive UI</span></p></div></div></section>
    <section id="about" className="editorial-about editorial-container"><span className="editorial-label">A little about me</span><div><h2>Curious about people. <em>Driven to build.</em></h2><p>I'm Brenda, a junior full stack developer based in Buenos Aires. After working in customer support and business operations, I moved into software development. I bring that experience into every project: understanding the problem, building a clear interface and connecting the pieces behind it.</p><p>I'm open to remote junior developer roles and freelance website and SaaS projects. I work in Portuguese and Spanish.</p><Link href="/resume">View résumé ↗</Link></div></section>
    <section id="contact" className="editorial-contact"><div className="editorial-container"><span className="editorial-label">Let's talk</span><h2>Have a project or <em>an opportunity?</em></h2><a href="mailto:brenda.micaela80@gmail.com" className="editorial-primary">Email Brenda ↗</a><div className="editorial-social"><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/brenda-freitas29" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link href="/start-a-project">Start a project ↗</Link></div></div></section>
    <footer className="editorial-footer editorial-container"><span>© 2026 Brenda Freitas</span><span>Buenos Aires · Remote</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}

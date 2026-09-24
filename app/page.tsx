import Image from "next/image";
import Link from "next/link";
import StudioHero from "@/components/StudioHero";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { number: "01", title: "FlowDesk", category: "CRM / SAAS", description: "A CRM for managing leads, pipeline stages, conversations and follow-ups in one workspace.", tags: ["Next.js", "TypeScript", "Supabase", "Stripe", "RLS"], image: "/projects/flowdesk-dashboard.jpg", href: "/projects/flowdesk", liveUrl: "https://whats-app-crm-system-architecture.vercel.app", codeUrl: "https://github.com/brenfreitas29/FlowDesk" },
  { number: "02", title: "Hair & Skin Clinic", category: "BUSINESS WEBSITE", description: "A multilingual clinic website with clear service discovery and responsive booking journeys.", tags: ["Next.js", "React", "TypeScript", "Responsive UI"], image: "/projects/hair-skin-clinic.png", href: "/projects/hair-skin-clinic", liveUrl: "https://graftclinic.vercel.app", codeUrl: "https://github.com/brenfreitas29/graftclinic" },
  { number: "03", title: "VivaTrip", category: "TRAVEL APP", description: "A travel planning product with authentication, saved trips and pre-travel workflows.", tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"], image: "/projects/vivatrip-current.webp", href: "/projects/vivatrip", liveUrl: "https://vivatrip.vercel.app", codeUrl: "https://github.com/brenfreitas29/VivaTrip" },
];

export default function Home() {
  return <main className="br-site">
    <StudioHero />
    <section id="about" className="br-about br-container" aria-labelledby="about-title">
      <div className="br-about-top"><span>01 / ABOUT ME</span><span>BUENOS AIRES · AVAILABLE REMOTELY</span></div>
      <div className="br-about-stage">
        <div className="br-about-visual"><Image src="/brenda-3d-avatar-reference.webp" alt="Retrato ilustrado de Brenda Freitas" fill sizes="(max-width: 800px) 90vw, 40vw" quality={90}/><span className="br-about-visual-caption">BRENDA FREITAS <span>↗</span><small>JUNIOR FULL STACK DEVELOPER</small></span></div>
        <div className="br-about-story"><span className="br-about-intro">HELLO, I&apos;M BRENDA <span aria-hidden="true">✳</span></span><h2 id="about-title">From listening<br/>to <span>building.</span></h2><div className="br-about-copy"><p>I&apos;m a junior full stack developer based in Buenos Aires. I create responsive web experiences with React, Next.js, TypeScript and Supabase.</p><p>My background in customer support taught me to understand the person behind every request. Now I bring that perspective to interfaces, connected systems and the details that make a product useful.</p></div><div className="br-about-actions"><Link href="#work" className="br-about-primary">EXPLORE MY WORK <span aria-hidden="true">↗</span></Link><Link href="/resume" className="br-about-secondary">VIEW RÉSUMÉ ↗</Link></div></div>
      </div>
      <div className="br-about-facts"><div><span>BASED IN</span><strong>BUENOS AIRES, AR</strong></div><div><span>WHAT I BUILD</span><strong>WEB APPS &amp; SAAS</strong></div><div><span>OPEN TO</span><strong>REMOTE JUNIOR ROLES</strong></div></div>
    </section>
    <section id="skills" className="br-services" aria-labelledby="skills-title"><div className="br-container"><div className="br-section-top"><span>02 / WHAT I DO</span><span>FRONTEND · BACKEND · PRODUCT</span></div><h2 id="skills-title">WHAT I <span>BUILD</span></h2><div className="br-services-grid"><article><span>01 / INTERFACES</span><h3>Frontend</h3><p>Responsive React and Next.js interfaces built for clarity and real tasks.</p><small>REACT · TYPESCRIPT · TAILWIND</small></article><article><span>02 / SYSTEMS</span><h3>Full stack</h3><p>Authentication, databases, APIs and practical workflows that connect the product.</p><small>SUPABASE · POSTGRESQL · REST APIS</small></article><article><span>03 / DELIVERY</span><h3>Product</h3><p>From an initial need to a usable, deployed experience that can improve over time.</p><small>GIT · VERCEL · UX</small></article></div></div></section>
    <section id="work" className="br-work br-container" aria-labelledby="work-title"><div className="br-section-top"><span>03 / SELECTED WORK</span><span>REAL PROJECTS / REAL CODE</span></div><h2 id="work-title">PROJECTS<span>↘</span></h2><div className="br-project-list">{projects.map(project => <ProjectCard key={project.number} project={project}/>)}</div></section>
    <section id="contact" className="br-contact"><div className="br-container"><div className="br-section-top"><span>04 / GET IN TOUCH</span><span>BUENOS AIRES · REMOTE</span></div><h2>LET&apos;S MAKE<br/><span>IT WORK.</span></h2><div className="br-contact-row"><a href="mailto:brenda.micaela80@gmail.com">BRENDA.MICAELA80@GMAIL.COM ↗</a><Link href="/start-a-project" className="br-pill br-pill-dark">START A PROJECT ↗</Link></div><div className="br-social"><a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/brenda-freitas29" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a><Link href="/resume">RÉSUMÉ ↗</Link></div><div className="br-glyphs" aria-hidden="true"><span>✳</span><span>●</span><span>◒</span><span>◆</span><span>✦</span><span>◉</span></div></div></section>
    <footer className="br-footer br-container"><span>© 2026 BRENDA FREITAS</span><span>DESIGNED & BUILT WITH CARE</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}

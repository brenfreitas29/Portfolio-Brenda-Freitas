import StudioHero from "@/components/StudioHero";
import ProjectCard from "@/components/ProjectCard";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import Magnetic from "@/components/Magnetic";

const projects = [
  {
    number: "01",
    title: "FlowDesk",
    category: "AI-POWERED SAAS / CRM",
    description:
      "An intelligent WhatsApp CRM designed to transform conversations into organized leads, pipelines and opportunities.",
    tags: ["Next.js", "React", "Supabase", "Stripe", "AI"],
    image: "/projects/flowdesk-dashboard.jpg",
    href: "/projects/flowdesk",
  },
  {
    number: "02",
    title: "VivaTrip",
    category: "TRAVEL SAAS / FULL STACK",
    description:
      "A connected travel planning product with secure authentication, saved trips, itinerary workflows and destination-aware pre-trip preparation.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "SSR Auth"],
    image: "/projects/vivatrip-preview-en.jpg",
    href: "/projects/vivatrip",
  },
  {
    number: "03",
    title: "Hair & Skin Clinic",
    category: "WEB EXPERIENCE",
    description:
      "A premium multilingual digital experience designed for a modern hair and skin clinic.",
    tags: ["Next.js", "Web Design", "Responsive", "Multilingual"],
    image: "/projects/hair-skin-clinic.png",
    href: "/projects/hair-skin-clinic",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden text-white">
      <StudioHero />

      <section id="work" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#5748b9] via-[#3c2f86] to-[#291f62] px-6 py-28 md:px-10 md:py-36">
        <div className="pointer-events-none absolute -left-52 top-20 h-[600px] w-[600px] rounded-full bg-[#9276ff]/20 blur-[160px]" />
        <div className="pointer-events-none absolute -right-52 top-[35%] h-[650px] w-[650px] rounded-full bg-[#e493d5]/15 blur-[160px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 md:mb-28">
            <p className="mb-5 text-xs uppercase tracking-[0.38em] text-[#d4c9f1]/70">Selected Work</p>
            <h2 className="max-w-4xl text-4xl font-medium tracking-[-0.045em] md:text-6xl lg:text-7xl">
              Digital products built
              <span className="block bg-gradient-to-r from-[#f3acd9] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">to feel different.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-16 md:gap-24">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </div>
      </section>

      <SkillsSection />
      <AboutSection />
      <CareerSection />
      <ServicesSection />

      <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#362776] via-[#2e216b] to-[#24194f]">
        <div className="pointer-events-none absolute bottom-[-300px] left-1/2 h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[#e49acb]/15 blur-[170px]" />
        <div className="pointer-events-none absolute left-[10%] top-[20%] h-[350px] w-[350px] rounded-full bg-[#8f72ff]/10 blur-[140px]" />
        <div className="pointer-events-none absolute right-[8%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#e99bd5]/10 blur-[130px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center md:px-10 md:py-48">
          <p className="mb-7 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/65">Let&apos;s work together</p>
          <h2 className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-8xl">
            Let&apos;s build something
            <span className="mt-2 block bg-gradient-to-r from-[#f0a6da] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">worth remembering.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-[#ddd5f3]/70">Open to Full Stack, Frontend and product-focused engineering opportunities, as well as selected freelance projects.</p>
          <div className="mt-10 flex justify-center">
            <Magnetic strength={0.3}>
              <a href="/start-a-project" data-cursor="interactive" className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#2d2168] shadow-[0_15px_50px_rgba(210,170,255,0.15)] transition duration-300 hover:scale-105 hover:bg-[#f5d6ef] hover:shadow-[0_20px_60px_rgba(230,160,220,0.25)]">
                Get in touch <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </Magnetic>
          </div>
          <p className="mt-7 text-[10px] uppercase tracking-[0.24em] text-white/35">Open to remote roles · Argentina / LATAM · Freelance</p>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#24194f]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/30">Find me online</p>
              <div className="mt-5 flex flex-wrap gap-x-7 gap-y-4">
                <a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white">GitHub <span className="text-[#e8b9e5]/60">↗</span></a>
                <a href="https://www.fiverr.com/brendafreita29" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white">Fiverr <span className="text-[#e8b9e5]/60">↗</span></a>
                <a href="https://www.upwork.com/freelancers/~01df086fbcd7634d5f" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white">Upwork <span className="text-[#e8b9e5]/60">↗</span></a>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:items-end">
              <nav className="flex flex-wrap gap-5 text-xs text-[#d6cced]/55">
                <a href="#work" className="transition-colors duration-300 hover:text-white">Work</a>
                <a href="#about" className="transition-colors duration-300 hover:text-white">About</a>
                <a href="#services" className="transition-colors duration-300 hover:text-white">Services</a>
                <a href="#contact" className="transition-colors duration-300 hover:text-white">Contact</a>
              </nav>
              <p className="text-xs text-[#d6cced]/35">© 2026 Brenda Studio</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

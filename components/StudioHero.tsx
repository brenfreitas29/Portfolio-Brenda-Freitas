import Link from "next/link";

export default function StudioHero() {
  return (
    <section className="relative overflow-hidden bg-[#0d081d] px-5 pb-16 pt-5 text-white sm:px-6 md:px-10 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(239,183,223,.12),transparent_35%),radial-gradient(circle_at_12%_85%,rgba(116,87,255,.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-[1450px]">
        <header className="flex flex-wrap items-center justify-between gap-5 border-b border-white/15 pb-5">
          <Link href="/" className="text-base font-semibold tracking-tight">Brenda Freitas<span className="ml-2 text-[#efb7df]">/ Dev</span></Link>
          <nav aria-label="Main navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#e7dffa]">
            <a href="#work">Projects</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
        </header>
        <div className="grid items-end gap-12 py-16 md:py-24 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
          <div>
            <p className="mb-7 text-sm font-medium uppercase tracking-[.18em] text-[#efb7df]">Junior Full Stack Developer · Buenos Aires</p>
            <h1 className="max-w-5xl text-[clamp(3.4rem,8vw,7.8rem)] font-semibold leading-[.96] tracking-[-.065em]">I build web apps<span className="block font-normal italic text-[#efb7df]">people can use.</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#e7dffa]">I turn user needs into responsive React and Next.js interfaces, connected to authentication, databases and APIs. Explore the projects I built and the decisions behind them.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1b1238]">Explore projects ↓</a>
              <Link href="/resume" className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium">View résumé ↗</Link>
            </div>
          </div>
          <aside className="rounded-[1.5rem] border border-white/15 bg-[#1d1640]/80 p-7 shadow-[0_24px_80px_rgba(0,0,0,.2)]">
            <p className="text-sm font-semibold uppercase tracking-[.15em] text-[#efb7df]">Currently</p>
            <p className="mt-5 text-2xl font-medium leading-snug">Building SaaS products and business websites.</p>
            <p className="mt-5 text-base leading-7 text-[#e7dffa]">Open to remote junior developer opportunities and freelance work. Portuguese and Spanish.</p>
            <a href="mailto:brenda.micaela80@gmail.com" className="mt-7 inline-block text-sm font-semibold text-white underline decoration-[#efb7df] underline-offset-8">Get in touch ↗</a>
          </aside>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-5 text-sm text-[#e7dffa]"><span>Next.js + React</span><span>TypeScript</span><span>Supabase + PostgreSQL</span><span>API integrations</span></div>
      </div>
    </section>
  );
}

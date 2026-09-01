import Link from "next/link";

export default function CareerSection() {
  return (
    <section id="career" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#31236f] to-[#362776]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 rounded-[2rem] border border-white/15 bg-white/[0.035] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">Open to opportunities</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-medium tracking-[-0.035em] md:text-5xl">
              Full Stack, Frontend and product-focused engineering roles.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#ddd5f3]/70">
              Remote roles, product teams and selected freelance projects where I can contribute with React, Next.js, SaaS development and automation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/resume" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">
              View resume
            </Link>
            <a href="https://github.com/brenfreitas29" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/[0.05]">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

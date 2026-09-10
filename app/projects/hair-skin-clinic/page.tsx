import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hair & Skin Clinic — Multilingual Web Experience",
  description: "Case study of a premium multilingual clinic web experience built with Next.js, React and TypeScript.",
};

const features = [
  ["Clear service discovery", "A focused hierarchy helps visitors understand treatments quickly without feeling overwhelmed."],
  ["Multilingual content", "Reusable content patterns keep the experience consistent across languages and screen sizes."],
  ["Conversion paths", "Appointments, WhatsApp and treatment discovery remain visible throughout the experience."],
  ["Responsive UI", "Typography, media and spacing adapt cleanly from large desktop screens to mobile devices."],
  ["Reusable architecture", "React components make the interface easier to maintain, extend and reuse."],
];

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI", "Multilingual UX", "Vercel"];

export default function HairSkinClinicProjectPage() {
  return (
    <main className="min-h-screen bg-[#120b2b] text-white">
      <section className="relative overflow-hidden border-b border-white/[.08] bg-[radial-gradient(circle_at_78%_14%,rgba(163,112,255,.18),transparent_34%),radial-gradient(circle_at_14%_70%,rgba(239,183,223,.11),transparent_34%),linear-gradient(180deg,#33247d_0%,#221755_58%,#171039_100%)]">
        <div className="pointer-events-none absolute inset-0 opacity-[.05]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.35) 1px,transparent 1px)",backgroundSize:"72px 72px"}} />
        <div className="relative mx-auto max-w-[1450px] px-5 pb-20 pt-8 sm:px-6 md:px-10 md:pb-24">
          <div className="flex items-center justify-between gap-6">
            <Link href="/#work" className="text-[10px] uppercase tracking-[.28em] text-white/55 transition-colors hover:text-white sm:text-xs">← Back to work</Link>
            <span className="text-[10px] uppercase tracking-[.28em] text-white/35 sm:text-xs">Case study · 02 / 02</span>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:mt-20 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
            <div>
              <p className="text-[10px] uppercase tracking-[.34em] text-[#d7cdf2]/55 sm:text-xs">Multilingual clinic experience</p>
              <h1 className="mt-5 max-w-3xl text-[clamp(4rem,8vw,7.2rem)] font-medium leading-[.87] tracking-[-.07em]">Hair & Skin<span className="block font-normal italic text-[#efb7df]">Clinic.</span></h1>
              <p className="mt-6 max-w-xl text-xl font-medium tracking-[-.025em] text-white/88">Trust first. Conversion second. Complexity hidden.</p>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#ddd5f3]/68 md:text-lg md:leading-8">A premium healthcare website designed to make complex services easier to understand, while keeping appointment paths, multilingual content and responsive usability clear across the experience.</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://graftclinic.vercel.app" target="_blank" rel="noreferrer" className="rounded-full bg-gradient-to-r from-white to-[#efb7df] px-6 py-3.5 text-sm font-semibold text-[#27175c] shadow-[0_12px_36px_rgba(239,183,223,.18)] transition-transform hover:-translate-y-0.5">Live product ↗</a>
                <a href="https://github.com/brenfreitas29/graftclinic" target="_blank" rel="noreferrer" className="rounded-full border border-white/16 bg-white/[.025] px-6 py-3.5 text-sm text-white/78 transition-colors hover:bg-white/[.06]">View code ↗</a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
                {[["Responsive","All screens"],["Multilingual","Content ready"],["Conversion","CTA focused"]].map(([a,b])=><div key={a} className="rounded-[1.1rem] border border-white/[.09] bg-white/[.025] px-4 py-4"><p className="text-sm font-medium text-white/90">{a}</p><p className="mt-1 text-[10px] uppercase tracking-[.18em] text-[#cfc3f5]/38">{b}</p></div>)}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-[3rem] bg-[#936dff]/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/[.13] bg-[#1d1347]/88 p-3 shadow-[0_40px_120px_rgba(3,1,16,.45)] sm:p-4 md:p-6">
                <div className="mb-3 flex h-8 items-center gap-2 px-1"><span className="h-2.5 w-2.5 rounded-full bg-[#f2abc9]/75"/><span className="h-2.5 w-2.5 rounded-full bg-[#e6cb8f]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#9bd5a5]/70"/><span className="ml-auto text-[8px] uppercase tracking-[.23em] text-white/24">Clinic web experience</span></div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.35rem] bg-[#eef2f5]"><Image src="/projects/hair-skin-clinic.png" alt="Hair and Skin Clinic website" fill priority className="object-cover" sizes="(max-width:1024px) 100vw,58vw"/></div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {features.map(([title,text])=><article key={title} className="rounded-[1.2rem] border border-white/[.08] bg-white/[.025] p-5"><div className="mb-4 h-9 w-9 rounded-xl border border-[#efb7df]/18 bg-[#efb7df]/[.07]"/><h2 className="text-sm font-medium text-white/88">{title}</h2><p className="mt-2 text-xs leading-6 text-[#d7cdf2]/48">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[.08] bg-[#171039]">
        <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-6 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-0">
            <article className="lg:pr-10"><p className="text-[10px] uppercase tracking-[.28em] text-[#cfc3f5]/42">01. The problem</p><h2 className="mt-4 text-2xl font-medium tracking-[-.035em]">Medical websites can feel dense, generic and difficult to navigate.</h2><p className="mt-4 text-sm leading-7 text-[#d7cdf2]/54">Visitors need to understand services quickly, trust the clinic and find a clear next action without being buried in information.</p></article>
            <article className="border-white/[.09] lg:border-x lg:px-10"><p className="text-[10px] uppercase tracking-[.28em] text-[#cfc3f5]/42">02. The solution</p><h2 className="mt-4 text-2xl font-medium tracking-[-.035em]">A calm visual system built around clarity and action.</h2><p className="mt-4 text-sm leading-7 text-[#d7cdf2]/54">The experience combines focused messaging, modular sections, consistent CTA placement and multilingual-ready content architecture.</p></article>
            <article className="lg:pl-10"><p className="text-[10px] uppercase tracking-[.28em] text-[#cfc3f5]/42">03. The result</p><h2 className="mt-4 text-2xl font-medium tracking-[-.035em]">A website that feels more credible, easier to scan and easier to use.</h2><p className="mt-4 text-sm leading-7 text-[#d7cdf2]/54">The final product supports service discovery, contact intent and future content growth without sacrificing visual consistency.</p></article>
          </div>
        </div>
      </section>

      <section className="bg-[#120b2b]">
        <div className="mx-auto max-w-[1450px] px-5 py-20 sm:px-6 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-[.3em] text-[#cfc3f5]/42">Engineering reflection</p>
              <h2 className="mt-5 text-[clamp(3rem,5vw,4.8rem)] font-medium leading-[.96] tracking-[-.055em]">Designing for trust<span className="block font-normal italic text-[#efb7df]">across every screen.</span></h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="border-t border-white/[.1] pt-6"><p className="text-[10px] uppercase tracking-[.22em] text-[#efb7df]/70">Challenge</p><h3 className="mt-4 text-xl font-medium">Consistency across languages</h3><p className="mt-4 text-sm leading-7 text-white/52">Different text lengths can destabilize layouts, so components and spacing had to remain flexible rather than depend on fixed content.</p></article>
              <article className="border-t border-white/[.1] pt-6"><p className="text-[10px] uppercase tracking-[.22em] text-[#efb7df]/70">Learning</p><h3 className="mt-4 text-xl font-medium">Reusable systems scale better</h3><p className="mt-4 text-sm leading-7 text-white/52">Treating the interface as a reusable component system made responsive behavior and future content changes easier to control.</p></article>
              <article className="border-t border-white/[.1] pt-6"><p className="text-[10px] uppercase tracking-[.22em] text-[#efb7df]/70">Next iteration</p><h3 className="mt-4 text-xl font-medium">Accessibility and performance</h3><p className="mt-4 text-sm leading-7 text-white/52">A future iteration would deepen keyboard testing, accessibility validation and performance budgets across key journeys.</p></article>
            </div>
          </div>

          <div className="mt-16 border-t border-white/[.09] pt-8">
            <p className="text-[10px] uppercase tracking-[.28em] text-[#cfc3f5]/38">Tech stack</p>
            <div className="mt-5 flex flex-wrap gap-2.5">{stack.map(item=><span key={item} className="rounded-full border border-white/[.11] bg-white/[.025] px-4 py-2 text-xs text-white/64">{item}</span>)}</div>
          </div>

          <div className="mt-16 rounded-[1.8rem] border border-white/[.09] bg-gradient-to-r from-[#241753] to-[#1b123f] p-7 md:flex md:items-center md:justify-between md:p-10">
            <div><p className="text-[10px] uppercase tracking-[.28em] text-[#cfc3f5]/40">Built for real users</p><h2 className="mt-3 text-3xl font-medium tracking-[-.045em] md:text-4xl">Clear information. Stronger trust. Better journeys.</h2></div>
            <a href="https://graftclinic.vercel.app" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#241753] md:mt-0">Open live site ↗</a>
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Hair & Skin Clinic — Multilingual Web Experience",
  description:
    "Case study of a premium multilingual clinic web experience built with Next.js, React and TypeScript, focused on responsive UX, reusable components and conversion.",
  keywords: [
    "Hair and Skin Clinic",
    "Clinic Website",
    "Next.js",
    "React",
    "TypeScript",
    "Responsive Web Design",
    "Multilingual Website",
    "UI UX",
    "Frontend Development",
  ],
  openGraph: {
    title: "Hair & Skin Clinic — Multilingual Web Experience",
    description:
      "A responsive multilingual clinic platform focused on clarity, trust, conversion and reusable frontend architecture.",
    type: "article",
    images: [
      {
        url: "/projects/hair-skin-clinic.png",
        width: 1600,
        height: 900,
        alt: "Hair and Skin Clinic website interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair & Skin Clinic — Multilingual Web Experience",
    description:
      "Next.js clinic web experience focused on responsive UX, multilingual content and reusable components.",
    images: ["/projects/hair-skin-clinic.png"],
  },
};

const highlights = [
  ["Conversion-focused UX", "Information hierarchy and calls to action were designed to help visitors understand services and move naturally toward contact or booking."],
  ["Multilingual experience", "A reusable content structure supports multiple languages without fragmenting the visual experience."],
  ["Responsive interface", "Layouts, typography and media adapt across desktop, tablet and mobile while preserving the premium visual system."],
  ["Reusable components", "Sections and UI patterns are structured as reusable React components for easier maintenance and future expansion."],
  ["Trust-oriented design", "Clear content, restrained motion and focused visual hierarchy support credibility in a service-oriented experience."],
  ["Production deployment", "Built with a modern Next.js workflow and deployed as a production web experience."],
];

const stack = ["Next.js", "React", "TypeScript", "Responsive UI", "Multilingual UX", "Reusable Components", "Accessibility", "Vercel"];

export default function HairSkinClinicProjectPage() {
  return (
    <main className="min-h-screen bg-[#24194f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#5748b9] via-[#3c2f86] to-[#291f62]">
        <div className="pointer-events-none absolute -left-52 top-10 h-[600px] w-[600px] rounded-full bg-[#9276ff]/20 blur-[160px]" />
        <div className="pointer-events-none absolute -right-52 top-[20%] h-[600px] w-[600px] rounded-full bg-[#e493d5]/15 blur-[160px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-36">
          <div className="flex items-center justify-between">
            <Link href="/#work" className="text-xs uppercase tracking-[0.24em] text-white/65 transition hover:text-white">← Back to work</Link>
            <span className="text-xs uppercase tracking-[0.24em] text-white/45">Case study · 03</span>
          </div>

          <div className="mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <ScrollReveal>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">Multilingual web experience</p>
                <h1 className="mt-6 max-w-3xl text-5xl font-medium leading-[0.96] tracking-[-0.06em] md:text-7xl">Hair & Skin Clinic</h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-[#ddd5f3]/75">A premium clinic experience designed around clarity, trust and conversion — combining responsive UI, multilingual content and reusable frontend architecture.</p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="https://graftclinic.vercel.app" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#2d2168] transition hover:scale-[1.02]">Live product ↗</a>
                  <a href="https://github.com/brenfreitas29/graftclinic" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:border-white/40 hover:text-white">View code ↗</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} y={45}>
              <div className="rounded-[2rem] border border-white/15 bg-[#281d61]/60 p-4 shadow-[0_40px_120px_rgba(20,10,60,0.35)] backdrop-blur-xl md:p-7">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#21174b]">
                  <div className="flex h-11 items-center gap-2 border-b border-white/10 px-4"><span className="h-2.5 w-2.5 rounded-full bg-[#f1a4c8]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#e8ce8d]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#9fd8a5]/70"/></div>
                  <div className="relative aspect-[16/9] bg-[#f5f6fa]"><Image src="/projects/hair-skin-clinic.png" alt="Hair and Skin Clinic website" fill priority className="object-contain object-center" sizes="(max-width:768px) 100vw, 1200px" /></div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[["Role","Full Stack + UI"],["Product type","Clinic web platform"],["Focus","UX · Responsive · Multilingual"]].map(([label,value]) => <div key={label}><p className="text-[10px] uppercase tracking-[0.22em] text-white/35">{label}</p><p className="mt-3 text-sm text-white/80">{value}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#291f62] to-[#332674]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:px-10 md:py-36 lg:grid-cols-[0.7fr_1.3fr]">
          <ScrollReveal><div><p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">The product problem</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">Service websites need to inform without overwhelming.</h2></div></ScrollReveal>
          <ScrollReveal delay={0.12}><p className="max-w-2xl text-lg leading-8 text-[#ddd5f3]/72">The experience needed to communicate services clearly, feel premium and credible, work across languages and remain easy to navigate on smaller screens. The solution prioritizes readable content, intentional spacing and consistent calls to action.</p></ScrollReveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-[#332674] to-[#40318b]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <ScrollReveal><p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">Technical highlights</p><h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">Designed as a maintainable product experience, not a static brochure.</h2></ScrollReveal>
          <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map(([title,text],i) => <ScrollReveal key={title} delay={i*0.05} y={24}><article className="h-full border-t border-white/15 pt-6"><h3 className="text-lg font-medium">{title}</h3><p className="mt-3 text-sm leading-7 text-[#ddd5f3]/68">{text}</p></article></ScrollReveal>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#40318b] to-[#362776]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          <ScrollReveal><div className="mb-10"><p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">Detail experience</p><h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">Consistent hierarchy from discovery to deeper service content.</h2></div></ScrollReveal>
          <ScrollReveal delay={0.1} y={50}><div className="rounded-[2rem] border border-white/15 bg-[#281d61]/60 p-4 md:p-7"><div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#21174b]"><div className="relative aspect-[16/9] bg-[#f5f6fa]"><Image src="/projects/hair-skin-detail.jpg" alt="Hair and Skin Clinic detail interface" fill className="object-contain object-center" sizes="(max-width:768px) 100vw, 1200px" /></div></div></div></ScrollReveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#362776]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d7cdf2]/60">Stack & product skills</p>
          <div className="mt-6 flex flex-wrap gap-3">{stack.map(item => <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">{item}</span>)}</div>
          <div className="mt-16 flex flex-col justify-between gap-7 border-t border-white/10 pt-10 md:flex-row md:items-center"><div><p className="text-sm text-white/45">Explore another case</p><p className="mt-2 text-3xl font-medium">FlowDesk</p></div><Link href="/projects/flowdesk" className="text-sm font-medium text-[#f0a6da]">View FlowDesk case study ↗</Link></div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Revilo Hair Transplant — In progress",
  description: "A responsive website for Revilo Hair Transplant, currently in progress.",
};

export default function ReviloProjectPage() {
  return <main className="min-h-screen bg-[#ebe8df] text-[#192521]">
    <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
      <nav className="flex items-center justify-between border-b border-[#192521]/30 pb-6 text-xs font-bold uppercase tracking-[.18em]">
        <Link href="/#work" className="hover:text-[#a75e50]">← Back to work</Link><span>BRENDA / PORTFOLIO</span>
      </nav>
      <section className="grid gap-12 py-20 md:grid-cols-[1.2fr_.8fr] md:items-end md:py-28">
        <div><span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-[#a75e50]"><span className="h-2 w-2 rounded-full bg-current"/> In progress / 2026</span><h1 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-black leading-[.85] tracking-[-.085em]">REVILO<span className="text-[#a75e50]">.</span></h1><p className="mt-7 text-xs font-bold uppercase tracking-[.2em]">Hair Transplant · Website</p></div>
        <p className="max-w-md text-lg leading-relaxed text-[#46524b]">A responsive website designed to explain hair treatments clearly and make the path to a consultation feel simple. This project is in progress; this page will evolve as the work develops.</p>
      </section>
      <figure className="border border-[#192521]/20 bg-white p-2 md:p-4"><Image src="/projects/revilo-preview.jpg" alt="Screenshot of the Revilo Hair Transplant website showing its navigation, hair restoration introduction and before-and-after gallery" width={1910} height={920} sizes="(max-width: 768px) 100vw, 1200px" quality={90} className="h-auto w-full"/><figcaption className="px-2 pb-2 pt-4 text-xs font-bold uppercase tracking-[.15em] text-[#53605a]">Current website preview · In progress</figcaption></figure>
      <div className="grid gap-0 border-y border-[#192521]/30 py-8 text-xs font-bold uppercase tracking-[.18em] md:grid-cols-3"><span>01 / CLINIC WEBSITE</span><span>02 / RESPONSIVE UX</span><span>03 / NEXT.JS + REACT</span></div>
      <div className="py-16"><Link href="/#work" className="inline-flex border-b border-current pb-2 text-xs font-bold uppercase tracking-[.18em]">Explore more projects ↗</Link></div>
    </div>
  </main>;
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function StudioHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const backgroundY = useSpring(useTransform(scrollYProgress,[0,1],[0,42]),{stiffness:80,damping:24});
  const contentY = useSpring(useTransform(scrollYProgress,[0,1],[0,-58]),{stiffness:85,damping:25});
  const contentOpacity = useSpring(useTransform(scrollYProgress,[0,.62,1],[1,.96,0]),{stiffness:90,damping:25});
  const backgroundScale = useSpring(useTransform(scrollYProgress,[0,1],[1,1.055]),{stiffness:80,damping:25});

  return <section ref={heroRef} className="relative min-h-[100svh] w-full overflow-hidden bg-[#17122f] text-white md:min-h-screen">
    <motion.div style={{y:backgroundY,scale:backgroundScale}} className="absolute inset-0 z-0">
      <Image src="/hero/vaporwave-hero.png" alt="" fill priority quality={100} className="object-cover object-[52%_center] opacity-75 md:object-center" sizes="100vw"/>
    </motion.div>
    <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(17,12,42,.92)_0%,rgba(31,22,70,.72)_42%,rgba(64,38,104,.24)_72%,rgba(21,14,48,.34)_100%)]"/>
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[42%] bg-gradient-to-t from-[#21184f] via-[#21184f]/45 to-transparent"/>
    <motion.div style={{y:contentY,opacity:contentOpacity}} className="relative z-20 mx-auto flex min-h-[100svh] max-w-[1680px] flex-col px-5 pb-8 pt-6 sm:px-8 md:min-h-screen md:px-12 lg:px-16">
      <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
        <a href="#" className="text-[11px] font-semibold uppercase tracking-[.2em] text-white">Brenda Freitas</a>
        <nav className="flex gap-4 text-[9px] uppercase tracking-[.14em] text-white/62 sm:gap-7 sm:text-[10px]"><a href="#work" className="transition hover:text-white">Work</a><a href="#skills" className="transition hover:text-white">Stack</a><a href="#about" className="transition hover:text-white">About</a><a href="#contact" className="transition hover:text-white">Contact</a></nav>
      </header>

      <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-10">
        <div className="max-w-[1050px]">
          <div className="mb-7 flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#f0b5df] shadow-[0_0_20px_rgba(240,181,223,.9)]"/><span className="text-[10px] font-semibold uppercase tracking-[.24em] text-white/65">Full Stack · SaaS · AI Product Engineering</span></div>
          <h1 className="max-w-[950px] text-[clamp(3.6rem,14vw,6rem)] font-medium leading-[.86] tracking-[-.07em] sm:text-[clamp(5rem,9vw,7rem)] md:text-[clamp(5.6rem,7.7vw,8.8rem)]"><span className="block">I build products</span><span className="block text-white/92">people can</span><span className="block font-normal italic text-[#f2b9df]">actually use.</span></h1>
          <p className="mt-8 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">Production-ready SaaS, web apps and AI-enabled workflows — from interface and authentication to databases, integrations and deployment.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Magnetic strength={.24}><a href="#work" className="inline-flex rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#24194f] transition hover:bg-[#f8d9ef]">Explore selected work ↓</a></Magnetic><a href="/resume" className="inline-flex rounded-full border border-white/18 bg-white/[.04] px-7 py-3.5 text-sm font-medium text-white/85 backdrop-blur transition hover:bg-white/10">Resume ↗</a></div>
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <div className="w-full max-w-[420px] rounded-[2rem] border border-white/12 bg-[#17122f]/48 p-7 shadow-[0_30px_100px_rgba(10,5,35,.35)] backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[.25em] text-white/42">Currently building</p>
            <div className="mt-6 space-y-6">
              <div><p className="text-2xl font-medium tracking-[-.035em]">FlowDesk</p><p className="mt-2 text-sm leading-6 text-white/55">Multi-tenant CRM · Supabase · Stripe · AI workflows</p></div>
              <div className="h-px bg-white/10"/>
              <div><p className="text-2xl font-medium tracking-[-.035em]">VivaTrip</p><p className="mt-2 text-sm leading-6 text-white/55">Travel product · Auth · Flight discovery · Affiliate flows</p></div>
            </div>
            <a href="#work" className="mt-8 inline-flex text-xs font-medium uppercase tracking-[.18em] text-[#f2b9df] hover:text-white">View product cases ↘</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-xl text-xs leading-5 text-white/48">Next.js · React · TypeScript · Supabase · PostgreSQL · AI Automation</p><p className="text-[9px] font-medium uppercase tracking-[.22em] text-white/38 sm:text-[10px]">Remote · Argentina / LATAM</p></div>
    </motion.div>
  </section>;
}

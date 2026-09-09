"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function StudioHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const panelY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -90]), { stiffness: 70, damping: 25 });
  const titleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -145]), { stiffness: 70, damping: 24 });
  const decorY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), { stiffness: 55, damping: 25 });
  const decorRotate = useTransform(scrollYProgress, [0, 1], [-8, 18]);
  const fade = useTransform(scrollYProgress, [0, .7, 1], [1, .75, 0]);

  return (
    <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-[#17102f] px-4 pb-6 pt-4 text-white sm:px-6 md:px-8 md:pb-8 md:pt-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(222,155,219,.22),transparent_27%),radial-gradient(circle_at_20%_72%,rgba(123,91,205,.16),transparent_25%)]" />

      <motion.div style={{ y: decorY, rotate: decorRotate }} className="pointer-events-none absolute -left-24 top-[38%] z-20 hidden h-64 w-64 md:block">
        <div className="absolute left-1/2 top-1/2 h-24 w-44 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[50%] bg-gradient-to-r from-[#f0b9de]/40 to-[#7a59c3]/10 blur-[1px]"/>
        <div className="absolute left-1/2 top-1/2 h-24 w-44 -translate-x-1/2 -translate-y-1/2 -rotate-[42deg] rounded-[50%] bg-gradient-to-r from-[#c28bcb]/25 to-[#f4c6e5]/35"/>
        <div className="absolute left-1/2 top-1/2 h-24 w-44 -translate-x-1/2 -translate-y-1/2 rotate-[62deg] rounded-[50%] bg-gradient-to-r from-[#8064c7]/20 to-[#f5cce8]/35"/>
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5c9e4]/80 shadow-[0_0_35px_rgba(245,201,228,.55)]"/>
      </motion.div>

      <motion.div style={{ y: panelY, opacity: fade }} className="relative z-10 mx-auto min-h-[calc(100svh-2rem)] max-w-[1640px] overflow-hidden rounded-[2.2rem] border border-white/14 bg-[#221746]/82 shadow-[0_40px_140px_rgba(9,4,31,.38)] backdrop-blur-xl">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,.025),transparent_30%,rgba(233,171,226,.05)_72%,transparent)]"/>
        <div className="absolute -right-20 -top-28 h-[520px] w-[520px] rounded-full bg-[#d89ad3]/12 blur-[110px]"/>

        <header className="relative z-30 flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8 md:px-10">
          <a href="#" className="text-[10px] font-semibold uppercase tracking-[.24em]">Brenda Freitas</a>
          <nav className="flex gap-4 text-[9px] uppercase tracking-[.16em] text-white/55 sm:gap-7"><a href="#work">Work</a><a href="#skills">Stack</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        </header>

        <div className="relative min-h-[calc(100svh-7rem)] px-5 pb-8 pt-10 sm:px-8 md:px-10 md:pt-8">
          <motion.div style={{ y: titleY }} className="pointer-events-none absolute left-5 right-5 top-4 z-0 overflow-hidden sm:left-8 sm:right-8 md:left-10 md:right-10">
            <p className="whitespace-nowrap text-[clamp(5.5rem,16vw,16rem)] font-medium leading-[.72] tracking-[-.085em] text-white/[.055]">PORTFOLIO</p>
          </motion.div>

          <div className="relative z-10 grid min-h-[calc(100svh-10rem)] items-center gap-10 lg:grid-cols-[.42fr_1.18fr_.58fr]">
            <div className="self-center lg:pt-24">
              <p className="text-[clamp(2.4rem,5vw,4.7rem)] font-semibold leading-[.88] tracking-[-.06em]">FULL<br/>STACK<br/>AI</p>
              <p className="mt-6 max-w-[190px] text-xs leading-6 text-white/45">SaaS · web products · automation · interfaces</p>
            </div>

            <div className="relative flex min-h-[470px] items-center justify-center md:min-h-[560px]">
              <div className="absolute h-[80%] w-[78%] rounded-[45%] bg-[radial-gradient(circle_at_50%_40%,rgba(240,183,223,.24),rgba(91,62,164,.14)_48%,transparent_72%)] blur-[1px]"/>
              <motion.div animate={{ y: [0,-12,0], rotate: [-1.5,1,-1.5] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative w-full max-w-[720px] rounded-[1.6rem] border border-white/16 bg-[#15102d]/82 p-4 shadow-[0_38px_120px_rgba(7,3,25,.48)] backdrop-blur-xl sm:p-5">
                <div className="flex h-10 items-center gap-2 border-b border-white/10 px-1"><span className="h-2.5 w-2.5 rounded-full bg-[#f1a6ca]/75"/><span className="h-2.5 w-2.5 rounded-full bg-[#e9ce8e]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#9fd7a8]/70"/><span className="ml-3 text-[9px] uppercase tracking-[.22em] text-white/28">brenda-studio.dev</span></div>
                <div className="grid gap-5 py-7 sm:grid-cols-[1.1fr_.9fr] sm:items-end">
                  <div><p className="text-[10px] uppercase tracking-[.25em] text-[#efb7df]/75">Product engineering</p><h1 className="mt-4 text-[clamp(3.2rem,7vw,6.8rem)] font-medium leading-[.82] tracking-[-.075em]">I build<br/><span className="font-normal italic text-[#f0badf]">useful</span><br/>products.</h1></div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/[.035] p-5"><p className="text-[10px] uppercase tracking-[.22em] text-white/35">Currently building</p><div className="mt-4 space-y-4"><div><p className="text-lg font-medium">FlowDesk</p><p className="mt-1 text-xs leading-5 text-white/42">CRM · AI workflows · Supabase · Stripe</p></div><div className="h-px bg-white/8"/><div><p className="text-lg font-medium">VivaTrip</p><p className="mt-1 text-xs leading-5 text-white/42">Travel product · Auth · Search · Affiliate</p></div></div></div>
                </div>
              </motion.div>
            </div>

            <div className="self-end pb-5 lg:pb-16">
              <p className="text-[10px] uppercase tracking-[.24em] text-white/35">01 — Selected profile</p>
              <p className="mt-4 text-sm leading-7 text-white/58">Production-ready SaaS, web apps and AI-enabled workflows — from interface and authentication to databases, integrations and deployment.</p>
              <div className="mt-7 flex flex-wrap gap-3"><Magnetic strength={.22}><a href="#work" className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#24194f]">View work ↓</a></Magnetic><a href="/resume" className="inline-flex rounded-full border border-white/15 px-5 py-3 text-xs text-white/70">Resume ↗</a></div>
            </div>
          </div>

          <div className="relative z-20 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between"><p className="text-[10px] uppercase tracking-[.2em] text-white/30">Next.js · React · TypeScript · Supabase · AI Automation</p><p className="text-[9px] uppercase tracking-[.2em] text-white/25">Remote · Argentina / LATAM</p></div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function StudioHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const backgroundY = useSpring(useTransform(scrollYProgress,[0,1],[0,45]),{stiffness:80,damping:24});
  const cloudsY = useSpring(useTransform(scrollYProgress,[0,1],[0,105]),{stiffness:75,damping:24});
  const contentY = useSpring(useTransform(scrollYProgress,[0,1],[0,-70]),{stiffness:85,damping:25});
  const contentOpacity = useSpring(useTransform(scrollYProgress,[0,.58,1],[1,.94,0]),{stiffness:90,damping:25});
  const backgroundScale = useSpring(useTransform(scrollYProgress,[0,1],[1,1.07]),{stiffness:80,damping:25});

  return <section ref={heroRef} className="relative min-h-[100svh] w-full overflow-hidden bg-[#7568d7] text-white md:min-h-screen">
    <motion.div style={{y:backgroundY,scale:backgroundScale}} className="absolute inset-0 z-0"><Image src="/hero/vaporwave-hero.png" alt="" fill priority quality={100} className="object-cover object-[46%_center] md:object-center" sizes="100vw"/></motion.div>
    <motion.div style={{y:cloudsY}} className="pointer-events-none absolute -left-[12%] top-[5%] z-10 w-[58vw] opacity-55 md:-left-[3%] md:w-[27vw]"><motion.div animate={{x:[0,-90,18,0]}} transition={{duration:22,repeat:Infinity,ease:"easeInOut"}}><Image src="/hero/01-high-clouds-left.png" alt="" width={1200} height={500} className="h-auto w-full"/></motion.div></motion.div>
    <motion.div style={{y:cloudsY}} className="pointer-events-none absolute -right-[12%] top-[7%] z-10 w-[58vw] opacity-50 md:-right-[3%] md:w-[26vw]"><motion.div animate={{x:[0,90,-15,0]}} transition={{duration:25,repeat:Infinity,ease:"easeInOut"}}><Image src="/hero/03-high-clouds-right.png" alt="" width={1200} height={500} className="h-auto w-full"/></motion.div></motion.div>
    <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(45,32,126,.30),rgba(67,49,150,.06)_50%,rgba(208,127,219,.10))]"/>
    <motion.div style={{y:contentY,opacity:contentOpacity}} className="relative z-30 mx-auto flex min-h-[100svh] max-w-[1680px] flex-col justify-between px-5 pb-7 pt-6 sm:px-7 sm:pb-10 sm:pt-8 md:min-h-screen md:px-12 lg:px-16">
      <div className="flex items-center justify-between gap-4"><span className="shrink-0 text-[10px] font-semibold uppercase tracking-[.18em] text-white/85 sm:text-[11px]">Brenda Freitas</span><nav className="flex gap-4 text-[9px] uppercase tracking-[.13em] text-white/70 sm:gap-7 sm:text-[11px]"><a href="#work" className="transition hover:text-white">Work</a><a href="#skills" className="transition hover:text-white">Skills</a><a href="#about" className="transition hover:text-white">About</a><a href="#contact" className="transition hover:text-white">Contact</a></nav></div>
      <div className="max-w-[1050px] pb-[2vh] md:pb-[6vh]">
        <div className="mb-5 flex flex-wrap gap-2"><span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] backdrop-blur">Full Stack Developer</span><span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] backdrop-blur">SaaS</span><span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[.16em] backdrop-blur">AI Automation</span></div>
        <h1 className="text-[clamp(3.2rem,14vw,5rem)] font-medium leading-[.88] tracking-[-.065em] sm:text-[clamp(4.2rem,9vw,6rem)] md:text-[clamp(4.4rem,7vw,7.6rem)]"><span className="block">I build SaaS &</span><span className="block">AI products that</span><span className="block font-normal italic text-[#ffd0ee]">ship.</span></h1>
        <p className="mt-7 max-w-2xl text-[13px] leading-6 text-white/82 sm:text-base sm:leading-7">Full-stack web products built from interface to database — with React, Next.js, TypeScript, Supabase and production-ready product workflows.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Magnetic strength={.24}><a href="#work" className="inline-flex rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#31236f] transition hover:bg-[#f8d9ef]">View featured work ↓</a></Magnetic><a href="/resume" className="inline-flex rounded-full border border-white/25 bg-white/[.06] px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">View resume</a></div>
      </div>
      <div className="flex flex-col gap-4 border-t border-white/20 pt-5 text-white/72 sm:flex-row sm:items-end sm:justify-between"><p className="max-w-xl text-xs leading-5 sm:text-sm">Production projects across SaaS, travel tech, CRM, business platforms and AI-enabled workflows.</p><p className="text-[9px] font-medium uppercase tracking-[.22em] text-white/55 sm:text-[10px]">Remote · Argentina / LATAM</p></div>
    </motion.div>
  </section>;
}

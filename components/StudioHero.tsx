"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function StudioHero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const stageY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), { stiffness: 65, damping: 24 });
  const stageScale = useSpring(useTransform(scrollYProgress, [0, .7, 1], [1, .98, .9]), { stiffness: 70, damping: 25 });
  const giantY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -220]), { stiffness: 50, damping: 24 });
  const floatLeftY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 170]), { stiffness: 52, damping: 24 });
  const floatRightY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -130]), { stiffness: 52, damping: 24 });
  const fade = useTransform(scrollYProgress, [0, .78, 1], [1, .8, 0]);

  return (
    <section ref={ref} className="relative min-h-[110svh] overflow-hidden bg-[#120c29] px-3 pb-8 pt-3 text-white sm:px-5 md:px-8 md:pt-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_18%,rgba(238,175,222,.18),transparent_28%),radial-gradient(circle_at_18%_78%,rgba(111,82,204,.22),transparent_30%),linear-gradient(180deg,#160f31_0%,#120c29_78%,#1d1540_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[.055]" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.22) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.22) 1px,transparent 1px)",backgroundSize:"70px 70px"}} />

      <motion.div style={{ y: giantY, opacity: fade }} className="pointer-events-none absolute left-1/2 top-[12vh] z-0 -translate-x-1/2 whitespace-nowrap text-[clamp(8rem,25vw,25rem)] font-semibold leading-none tracking-[-.095em] text-white/[.035]">BRENDA</motion.div>

      <motion.div style={{ y: stageY, scale: stageScale, opacity: fade }} className="relative z-10 mx-auto min-h-[calc(100svh-2rem)] max-w-[1660px] overflow-hidden rounded-[2.4rem] border border-white/12 bg-[#1b1238]/72 shadow-[0_50px_160px_rgba(4,1,20,.5)] backdrop-blur-xl">
        <header className="relative z-30 flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-9">
          <div><p className="text-[10px] font-semibold uppercase tracking-[.26em]">Brenda Freitas</p><p className="mt-1 text-[8px] uppercase tracking-[.2em] text-white/28">Full Stack · AI Product</p></div>
          <nav className="flex gap-4 text-[9px] uppercase tracking-[.16em] text-white/48 sm:gap-7"><a href="#work">Work</a><a href="#skills">Stack</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        </header>

        <div className="relative min-h-[calc(100svh-7rem)] px-5 py-10 md:px-9 lg:py-8">
          <div className="relative z-10 grid min-h-[760px] items-center gap-8 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[.54fr_1.3fr_.52fr]">
            <motion.aside style={{ y: floatLeftY }} className="relative z-20 self-start pt-6 lg:self-center lg:pt-0">
              <p className="text-[9px] uppercase tracking-[.28em] text-white/30">Portfolio / 2026</p>
              <p className="mt-5 text-[clamp(3rem,5.6vw,6.2rem)] font-semibold leading-[.82] tracking-[-.065em]">FULL<br/>STACK<br/><span className="font-normal italic text-[#efb8de]">AI</span></p>
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#efb8de]/60 to-transparent" />
              <p className="mt-6 max-w-[190px] text-xs leading-6 text-white/38">Interfaces, systems and automation designed as one product experience.</p>
            </motion.aside>

            <div className="relative flex min-h-[560px] items-center justify-center lg:min-h-[690px]">
              <div className="absolute h-[72%] w-[84%] rounded-[46%] bg-[radial-gradient(circle_at_50%_44%,rgba(244,183,225,.21),rgba(107,72,183,.10)_45%,transparent_72%)] blur-[6px]" />

              <motion.div animate={{ y:[0,-14,0], rotate:[-1.2,.8,-1.2] }} transition={{duration:8,repeat:Infinity,ease:"easeInOut"}} className="relative z-20 w-full max-w-[760px] overflow-hidden rounded-[1.8rem] border border-white/16 bg-[#110b26]/90 shadow-[0_45px_140px_rgba(4,1,18,.62)] backdrop-blur-xl">
                <div className="flex h-11 items-center gap-2 border-b border-white/10 px-5"><span className="h-2.5 w-2.5 rounded-full bg-[#f2a9cb]/75"/><span className="h-2.5 w-2.5 rounded-full bg-[#e8cc8d]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#9ed6a5]/70"/><span className="ml-3 text-[8px] uppercase tracking-[.22em] text-white/22">brenda-studio / selected work</span></div>
                <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.16fr_.84fr] md:p-10">
                  <div><p className="text-[10px] uppercase tracking-[.28em] text-[#efb7df]/68">Product engineering</p><h1 className="mt-5 text-[clamp(4rem,8vw,8rem)] font-medium leading-[.78] tracking-[-.085em]">I build<br/><span className="font-normal italic text-[#f0badf]">useful</span><br/>products.</h1><p className="mt-7 max-w-md text-sm leading-7 text-white/48">SaaS, full-stack apps and AI-enabled workflows — designed, engineered and shipped as real products.</p></div>
                  <div className="flex flex-col justify-end gap-5">
                    <div className="rounded-[1.2rem] border border-white/10 bg-white/[.03] p-5"><p className="text-[9px] uppercase tracking-[.22em] text-white/30">01 · FlowDesk</p><p className="mt-3 text-lg font-medium">AI SaaS / CRM</p><p className="mt-2 text-xs leading-5 text-white/38">Multi-tenant product · Supabase · Stripe · Automation</p></div>
                    <div className="rounded-[1.2rem] border border-white/10 bg-white/[.03] p-5"><p className="text-[9px] uppercase tracking-[.22em] text-white/30">02 · VivaTrip</p><p className="mt-3 text-lg font-medium">Travel product</p><p className="mt-2 text-xs leading-5 text-white/38">Auth · Flight discovery · Cash vs miles</p></div>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{y:[0,-20,0],rotate:[8,11,8]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}} className="absolute -right-2 top-[14%] z-30 hidden w-40 rounded-[1.2rem] border border-white/14 bg-[#2b1d59]/70 p-4 shadow-[0_22px_60px_rgba(6,2,24,.38)] backdrop-blur lg:block"><p className="text-[8px] uppercase tracking-[.2em] text-white/28">Stack</p><p className="mt-3 text-sm leading-6 text-white/72">Next.js<br/>TypeScript<br/>Supabase<br/>AI</p></motion.div>
              <motion.div animate={{y:[0,16,0],rotate:[-9,-5,-9]}} transition={{duration:8.5,repeat:Infinity,ease:"easeInOut"}} className="absolute -left-4 bottom-[10%] z-30 hidden rounded-[1.2rem] border border-white/14 bg-[#24184d]/75 px-5 py-4 shadow-[0_22px_60px_rgba(6,2,24,.38)] backdrop-blur lg:block"><p className="text-[8px] uppercase tracking-[.22em] text-white/28">Based in</p><p className="mt-2 text-sm text-[#f0badf]">Argentina / LATAM</p></motion.div>
            </div>

            <motion.aside style={{ y: floatRightY }} className="relative z-20 self-end pb-5 lg:pb-12">
              <p className="text-[9px] uppercase tracking-[.26em] text-white/28">Available for</p><p className="mt-4 text-sm leading-7 text-white/50">Remote Full Stack, Frontend and product-focused roles, plus selected freelance product work.</p><div className="mt-7 flex flex-wrap gap-3"><Magnetic strength={.22}><a href="#work" className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#24194f]">Enter portfolio ↓</a></Magnetic><a href="/resume" className="inline-flex rounded-full border border-white/14 px-5 py-3 text-xs text-white/65">Resume ↗</a></div>
            </motion.aside>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

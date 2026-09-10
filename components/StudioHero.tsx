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
    <section ref={ref} className="relative min-h-[110svh] overflow-hidden bg-[#0d081d] px-3 pb-8 pt-3 text-white sm:px-5 md:px-8 md:pt-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_18%,rgba(239,183,223,.13),transparent_27%),radial-gradient(circle_at_18%_78%,rgba(116,87,255,.15),transparent_31%),linear-gradient(180deg,#100b24_0%,#0d081d_72%,#130d2a_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[.04]" style={{backgroundImage:"linear-gradient(rgba(207,195,245,.20) 1px,transparent 1px),linear-gradient(90deg,rgba(207,195,245,.20) 1px,transparent 1px)",backgroundSize:"70px 70px"}} />
      <motion.div style={{ y: giantY, opacity: fade }} className="pointer-events-none absolute left-1/2 top-[12vh] z-0 -translate-x-1/2 whitespace-nowrap text-[clamp(8rem,25vw,25rem)] font-semibold leading-none tracking-[-.095em] text-[#cfc3f5]/[.028]">BRENDA</motion.div>

      <motion.div style={{ y: stageY, scale: stageScale, opacity: fade }} className="relative z-10 mx-auto min-h-[calc(100svh-2rem)] max-w-[1660px] overflow-hidden rounded-[2.4rem] border border-white/[.09] bg-[#130d2a]/82 shadow-[0_50px_180px_rgba(2,0,14,.68)] backdrop-blur-xl">
        <header className="relative z-30 flex items-center justify-between border-b border-white/[.08] px-5 py-5 md:px-9">
          <div><p className="text-[10px] font-semibold uppercase tracking-[.26em]">Brenda Freitas</p><p className="mt-1 text-[8px] uppercase tracking-[.2em] text-[#cfc3f5]/32">Full Stack · AI Product</p></div>
          <nav className="flex gap-4 text-[9px] uppercase tracking-[.16em] text-[#cfc3f5]/52 sm:gap-7"><a href="#work">Work</a><a href="#skills">Stack</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        </header>

        <div className="relative min-h-[calc(100svh-7rem)] px-5 py-10 md:px-9 lg:py-8">
          <div className="relative z-10 grid min-h-[760px] items-center gap-8 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[.54fr_1.3fr_.52fr]">
            <motion.aside style={{ y: floatLeftY }} className="relative z-20 self-start pt-6 lg:self-center lg:pt-0">
              <p className="text-[9px] uppercase tracking-[.28em] text-[#cfc3f5]/34">Portfolio / 2026</p>
              <p className="mt-5 text-[clamp(3rem,5.6vw,6.2rem)] font-semibold leading-[.82] tracking-[-.065em]">FULL<br/>STACK<br/><span className="font-normal italic text-[#efb7df]">AI</span></p>
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-[#efb7df]/65 to-transparent"/>
              <p className="mt-6 max-w-[190px] text-xs leading-6 text-[#cfc3f5]/44">Interfaces, systems and automation designed as one product experience.</p>
            </motion.aside>

            <div className="relative flex min-h-[560px] items-center justify-center lg:min-h-[690px]">
              <div className="absolute h-[72%] w-[84%] rounded-[46%] bg-[radial-gradient(circle_at_50%_44%,rgba(239,183,223,.15),rgba(116,87,255,.075)_45%,transparent_72%)] blur-[6px]"/>
              <motion.div animate={{ y:[0,-14,0], rotate:[-1.2,.8,-1.2] }} transition={{duration:8,repeat:Infinity,ease:"easeInOut"}} className="relative z-20 w-full max-w-[790px] overflow-hidden rounded-[1.8rem] border border-white/[.11] bg-[#0b0719]/94 shadow-[0_45px_150px_rgba(2,0,12,.72)] backdrop-blur-xl">
                <div className="flex h-11 items-center gap-2 border-b border-white/[.08] px-5"><span className="h-2.5 w-2.5 rounded-full bg-[#efb7df]/80"/><span className="h-2.5 w-2.5 rounded-full bg-[#d9c58b]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#94cda0]/70"/><span className="ml-3 text-[8px] uppercase tracking-[.22em] text-[#cfc3f5]/25">brenda-studio / selected work</span></div>
                <div className="grid items-stretch gap-8 p-6 sm:p-8 md:grid-cols-[1.08fr_.92fr] md:p-10">
                  <div className="flex flex-col justify-center"><p className="text-[10px] uppercase tracking-[.28em] text-[#efb7df]/72">Product engineering</p><h1 className="mt-5 text-[clamp(4rem,8vw,8rem)] font-medium leading-[.78] tracking-[-.085em]">I build<br/><span className="font-normal italic text-[#efb7df]">useful</span><br/>products.</h1><p className="mt-7 max-w-md text-sm leading-7 text-[#cfc3f5]/52">SaaS, full-stack apps and AI-enabled workflows — designed, engineered and shipped as real products.</p></div>
                  <div className="relative min-h-[430px] overflow-hidden rounded-[1.35rem] border border-white/[.10] bg-[#1d1640]">
                    <img src="/brenda-profile.svg" alt="Brenda Freitas" className="absolute inset-0 h-full w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#100b24]/90 via-transparent to-transparent"/>
                    <div className="absolute inset-x-0 bottom-0 p-5"><p className="text-[9px] uppercase tracking-[.22em] text-[#cfc3f5]/55">Brenda Freitas</p><p className="mt-2 text-lg font-medium">Full Stack · AI Product</p></div>
                  </div>
                </div>
              </motion.div>

              <motion.div animate={{y:[0,-20,0],rotate:[8,11,8]}} transition={{duration:7,repeat:Infinity,ease:"easeInOut"}} className="absolute -right-2 top-[14%] z-30 hidden w-40 rounded-[1.2rem] border border-white/[.10] bg-[#1d1640]/82 p-4 shadow-[0_22px_60px_rgba(3,1,18,.5)] backdrop-blur lg:block"><p className="text-[8px] uppercase tracking-[.2em] text-[#cfc3f5]/32">Stack</p><p className="mt-3 text-sm leading-6 text-[#cfc3f5]/78">Next.js<br/>TypeScript<br/>Supabase<br/>AI</p></motion.div>
              <motion.div animate={{y:[0,16,0],rotate:[-9,-5,-9]}} transition={{duration:8.5,repeat:Infinity,ease:"easeInOut"}} className="absolute -left-4 bottom-[10%] z-30 hidden rounded-[1.2rem] border border-white/[.10] bg-[#1d1640]/82 px-5 py-4 shadow-[0_22px_60px_rgba(3,1,18,.5)] backdrop-blur lg:block"><p className="text-[8px] uppercase tracking-[.22em] text-[#cfc3f5]/32">Based in</p><p className="mt-2 text-sm text-[#efb7df]">Argentina / LATAM</p></motion.div>
            </div>

            <motion.aside style={{ y: floatRightY }} className="relative z-20 self-end pb-5 lg:pb-12"><p className="text-[9px] uppercase tracking-[.26em] text-[#cfc3f5]/32">Available for</p><p className="mt-4 text-sm leading-7 text-[#cfc3f5]/54">Remote Full Stack, Frontend and product-focused roles, plus selected freelance product work.</p><div className="mt-7 flex flex-wrap gap-3"><Magnetic strength={.22}><a href="#work" className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#1b1238]">Enter portfolio ↓</a></Magnetic><a href="/resume" className="inline-flex rounded-full border border-white/14 px-5 py-3 text-xs text-[#cfc3f5]/70">Resume ↗</a></div></motion.aside>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

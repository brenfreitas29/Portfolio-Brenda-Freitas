"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

type Project = { number:string; title:string; category:string; description:string; tags:string[]; image:string; previewUrl?:string; href:string; liveUrl:string; codeUrl:string };
type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset:["start end","end start"] });
  const flip = Number(project.number) % 2 === 0;
  const sceneY = useSpring(useTransform(scrollYProgress,[0,.5,1],[70,0,-70]),{stiffness:62,damping:26});
  const sceneScale = useSpring(useTransform(scrollYProgress,[0,.46,.66,1],[.94,1,1,.96]),{stiffness:62,damping:25});
  const previewY = useSpring(useTransform(scrollYProgress,[0,.5,1],[52,0,-58]),{stiffness:58,damping:24});
  const previewX = useSpring(useTransform(scrollYProgress,[0,.5,1],[flip?52:-52,0,flip?-20:20]),{stiffness:55,damping:24});
  const previewRotate = useSpring(useTransform(scrollYProgress,[0,.5,1],[flip?-3.2:3.2,0,flip?1.2:-1.2]),{stiffness:52,damping:23});
  const giantX = useSpring(useTransform(scrollYProgress,[0,1],[flip?90:-90,flip?-110:110]),{stiffness:36,damping:25});
  const isRemoteImage = project.image.startsWith("http");
  const livePreviewUrl = project.previewUrl || (["FlowDesk","VivaTrip"].includes(project.title) ? project.liveUrl : undefined);

  return (
    <motion.article ref={ref} style={{ y:sceneY }} className="relative min-h-[100vh] lg:min-h-[108vh]">
      <div className="sticky top-6 flex min-h-[calc(100vh-3rem)] items-center overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#170f31]/80 shadow-[0_34px_110px_rgba(5,1,24,.32)] backdrop-blur-xl">
        <motion.div style={{ x:giantX }} className="pointer-events-none absolute inset-x-0 top-[8%] whitespace-nowrap text-center text-[clamp(6rem,18vw,18rem)] font-semibold leading-none tracking-[-.1em] text-white/[.028]">{project.title.toUpperCase()}</motion.div>
        <div className={`relative z-10 grid w-full items-center gap-8 px-6 py-8 md:px-9 lg:grid-cols-[.42fr_1.18fr] lg:px-10 xl:px-14 ${flip ? "lg:grid-cols-[1.18fr_.42fr]" : ""}`}>
          <motion.div style={{ scale:sceneScale }} className={`${flip ? "lg:order-2" : ""}`}>
            <p className="text-[9px] uppercase tracking-[.28em] text-white/28">Project {project.number} / 03</p>
            <p className="mt-4 text-[10px] uppercase tracking-[.24em] text-[#efb7df]/62">{project.category}</p>
            <h3 className="mt-4 text-[clamp(3rem,5.3vw,6.4rem)] font-medium leading-[.86] tracking-[-.07em]">{project.title}</h3>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/52 md:text-base">{project.description}</p>
            <div className="mt-6 flex max-w-md flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="rounded-full border border-white/10 bg-white/[.025] px-3 py-1.5 text-[9px] uppercase tracking-[.15em] text-white/40">{tag}</span>)}</div>
            <div className="mt-8 flex flex-wrap gap-3"><Magnetic strength={.2}><Link href={project.href} className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#24194f]">Case study ↗</Link></Magnetic><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-white/14 px-5 py-3 text-xs text-white/70">Open product ↗</a></div>
          </motion.div>

          <motion.div style={{ y:previewY, x:previewX, rotate:previewRotate, scale:sceneScale }} className={`relative ${flip ? "lg:order-1" : ""}`}>
            <div className="absolute -inset-10 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(235,173,225,.16),transparent_62%)] blur-3xl"/>
            <Link href={project.href} className="relative block overflow-hidden rounded-[1.7rem] border border-white/14 bg-[#0f0a23] p-3 shadow-[0_48px_130px_rgba(4,1,19,.52)] md:p-4" aria-label={`View ${project.title}`}>
              <div className="flex h-10 items-center gap-2 border-b border-white/8 px-2"><span className="h-2.5 w-2.5 rounded-full bg-[#f2abc9]/75"/><span className="h-2.5 w-2.5 rounded-full bg-[#e6cb8f]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#9bd5a5]/70"/><span className="ml-auto text-[8px] uppercase tracking-[.2em] text-white/22">Live showcase</span></div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.05rem] bg-white">
                {livePreviewUrl ? <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white"><iframe src={livePreviewUrl} title={`${project.title} live preview`} loading="lazy" tabIndex={-1} className="absolute left-0 top-0 h-[900px] w-[1600px] origin-top-left border-0" style={{transform:"scale(.44)",transformOrigin:"top left"}}/></div> : isRemoteImage ? <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover" loading="lazy"/> : <Image src={project.image} alt={`${project.title} preview`} fill className="object-contain" sizes="(max-width:1024px) 100vw,58vw"/>}
              </div>
            </Link>
            <motion.div animate={{y:[0,-10,0],rotate:[0,4,0]}} transition={{duration:6.5,repeat:Infinity,ease:"easeInOut"}} className={`absolute ${flip?"-left-4":"-right-4"} -top-5 hidden rounded-[1rem] border border-white/12 bg-[#26194e]/80 px-4 py-3 text-[8px] uppercase tracking-[.23em] text-[#efbddf]/62 shadow-[0_16px_40px_rgba(5,2,24,.32)] backdrop-blur lg:block`}>Selected / {project.number}</motion.div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

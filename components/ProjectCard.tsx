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
  const sceneY = useSpring(useTransform(scrollYProgress,[0,.5,1],[120,0,-120]),{stiffness:58,damping:26});
  const sceneScale = useSpring(useTransform(scrollYProgress,[0,.46,.62,1],[.9,1,1,.93]),{stiffness:60,damping:25});
  const previewY = useSpring(useTransform(scrollYProgress,[0,.5,1],[85,0,-90]),{stiffness:55,damping:24});
  const previewX = useSpring(useTransform(scrollYProgress,[0,.5,1],[flip?70:-70,0,flip?-30:30]),{stiffness:52,damping:24});
  const previewRotate = useSpring(useTransform(scrollYProgress,[0,.5,1],[flip?-5:5,0,flip?2:-2]),{stiffness:50,damping:23});
  const giantX = useSpring(useTransform(scrollYProgress,[0,1],[flip?120:-120,flip?-160:160]),{stiffness:34,damping:25});
  const isRemoteImage = project.image.startsWith("http");
  const livePreviewUrl = project.previewUrl || (["FlowDesk","VivaTrip"].includes(project.title) ? project.liveUrl : undefined);

  return (
    <motion.article ref={ref} style={{ y:sceneY }} className="relative min-h-[120vh] lg:min-h-[135vh]">
      <div className="sticky top-10 flex min-h-[calc(100vh-5rem)] items-center overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#170f31]/76 shadow-[0_40px_140px_rgba(5,1,24,.34)] backdrop-blur-xl">
        <motion.div style={{ x:giantX }} className="pointer-events-none absolute inset-x-0 top-[7%] whitespace-nowrap text-center text-[clamp(7rem,21vw,21rem)] font-semibold leading-none tracking-[-.1em] text-white/[.03]">{project.title.toUpperCase()}</motion.div>
        <div className={`relative z-10 grid w-full items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-[.42fr_1.18fr] lg:px-12 xl:px-16 ${flip ? "lg:grid-cols-[1.18fr_.42fr]" : ""}`}>
          <motion.div style={{ scale:sceneScale }} className={`${flip ? "lg:order-2" : ""}`}>
            <p className="text-[9px] uppercase tracking-[.28em] text-white/28">Project {project.number} / 03</p>
            <p className="mt-5 text-[10px] uppercase tracking-[.24em] text-[#efb7df]/62">{project.category}</p>
            <h3 className="mt-4 text-[clamp(3.4rem,6vw,7.2rem)] font-medium leading-[.84] tracking-[-.075em]">{project.title}</h3>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/50 md:text-base">{project.description}</p>
            <div className="mt-7 flex max-w-md flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="rounded-full border border-white/10 bg-white/[.025] px-3 py-1.5 text-[9px] uppercase tracking-[.15em] text-white/38">{tag}</span>)}</div>
            <div className="mt-9 flex flex-wrap gap-3"><Magnetic strength={.2}><Link href={project.href} className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#24194f]">Case study ↗</Link></Magnetic><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-white/14 px-5 py-3 text-xs text-white/68">Open product ↗</a></div>
          </motion.div>

          <motion.div style={{ y:previewY, x:previewX, rotate:previewRotate, scale:sceneScale }} className={`relative ${flip ? "lg:order-1" : ""}`}>
            <div className="absolute -inset-14 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(235,173,225,.18),transparent_62%)] blur-3xl"/>
            <Link href={project.href} className="relative block overflow-hidden rounded-[1.8rem] border border-white/14 bg-[#0f0a23] p-3 shadow-[0_55px_160px_rgba(4,1,19,.58)] md:p-4" aria-label={`View ${project.title}`}>
              <div className="flex h-11 items-center gap-2 border-b border-white/8 px-2"><span className="h-2.5 w-2.5 rounded-full bg-[#f2abc9]/75"/><span className="h-2.5 w-2.5 rounded-full bg-[#e6cb8f]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#9bd5a5]/70"/><span className="ml-auto text-[8px] uppercase tracking-[.2em] text-white/22">Live showcase</span></div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.1rem] bg-white">
                {livePreviewUrl ? <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white"><iframe src={livePreviewUrl} title={`${project.title} live preview`} loading="lazy" tabIndex={-1} className="absolute left-0 top-0 h-[900px] w-[1600px] origin-top-left border-0" style={{transform:"scale(.44)",transformOrigin:"top left"}}/></div> : isRemoteImage ? <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover" loading="lazy"/> : <Image src={project.image} alt={`${project.title} preview`} fill className="object-contain" sizes="(max-width:1024px) 100vw,58vw"/>}
              </div>
            </Link>
            <motion.div animate={{y:[0,-12,0],rotate:[0,4,0]}} transition={{duration:6.5,repeat:Infinity,ease:"easeInOut"}} className={`absolute ${flip?"-left-5":"-right-5"} -top-6 hidden rounded-[1rem] border border-white/12 bg-[#26194e]/80 px-4 py-3 text-[8px] uppercase tracking-[.23em] text-[#efbddf]/62 shadow-[0_16px_40px_rgba(5,2,24,.32)] backdrop-blur lg:block`}>Selected / {project.number}</motion.div>
            <motion.div animate={{y:[0,10,0],rotate:[-3,2,-3]}} transition={{duration:7.5,repeat:Infinity,ease:"easeInOut"}} className={`absolute ${flip?"-right-7":"-left-7"} -bottom-7 hidden h-24 w-24 rounded-[34%] border border-white/12 bg-gradient-to-br from-[#f0badf]/10 to-[#7458c4]/10 shadow-[0_0_50px_rgba(220,156,255,.08)] backdrop-blur lg:block`} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

type Project = { number:string; title:string; category:string; description:string; tags:string[]; image:string; previewUrl?:string; href:string; liveUrl:string; codeUrl:string };
type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset:["start end","end start"] });
  const flip = Number(project.number) % 2 === 0;
  const y = useSpring(useTransform(scrollYProgress,[0,.5,1],[100,0,-80]),{stiffness:70,damping:26});
  const previewY = useSpring(useTransform(scrollYProgress,[0,.5,1],[65,0,-65]),{stiffness:65,damping:25});
  const previewRotate = useSpring(useTransform(scrollYProgress,[0,.5,1],[flip?-2.8:2.8,0,flip?1.2:-1.2]),{stiffness:60,damping:24});
  const scale = useSpring(useTransform(scrollYProgress,[0,.5,1],[.95,1,.98]),{stiffness:75,damping:25});
  const isRemoteImage = project.image.startsWith("http");
  const livePreviewUrl = project.previewUrl || (["FlowDesk","VivaTrip"].includes(project.title) ? project.liveUrl : undefined);

  return (
    <motion.article ref={cardRef} style={{ y }} className="relative">
      <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <motion.div initial={{opacity:0,x:flip?60:-60}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.3}} transition={{duration:.85,ease:[.22,1,.36,1]}} className="relative rounded-[1.6rem] border border-white/12 bg-[#201642]/78 p-7 shadow-[0_26px_90px_rgba(10,4,35,.24)] backdrop-blur-md md:p-9">
          <div className="absolute -top-4 left-6 rounded-full border border-white/10 bg-[#17102f] px-4 py-2 text-[9px] uppercase tracking-[.22em] text-white/35">Project {project.number}</div>
          <p className="mt-5 text-[10px] uppercase tracking-[.25em] text-[#e9b5dc]/60">{project.category}</p>
          <h3 className="mt-4 text-4xl font-medium leading-[.95] tracking-[-.05em] md:text-6xl">{project.title}</h3>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-[10px] uppercase tracking-[.12em] text-white/45">{tag}</span>)}</div>
          <div className="mt-9 flex flex-wrap gap-3"><Magnetic strength={.2}><Link href={project.href} className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#24194f]">Case study ↗</Link></Magnetic><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-white/14 px-5 py-3 text-xs text-white/70">Open product ↗</a></div>
          <div className="pointer-events-none absolute -bottom-10 -right-8 h-32 w-32 rounded-full bg-[#d78ecf]/10 blur-[38px]"/>
        </motion.div>

        <motion.div style={{ y:previewY, rotate:previewRotate, scale }} initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.25}} transition={{duration:1,ease:[.22,1,.36,1]}} className="relative">
          <div className="absolute -inset-7 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_50%,rgba(229,169,224,.14),transparent_65%)] blur-2xl"/>
          <Link href={project.href} className="relative block overflow-hidden rounded-[1.6rem] border border-white/14 bg-[#130e2b] p-3 shadow-[0_35px_110px_rgba(8,3,28,.42)] md:p-4" aria-label={`View ${project.title}`}>
            <div className="flex h-10 items-center gap-2 border-b border-white/8 px-2"><span className="h-2.5 w-2.5 rounded-full bg-[#f2abc9]/75"/><span className="h-2.5 w-2.5 rounded-full bg-[#e6cb8f]/70"/><span className="h-2.5 w-2.5 rounded-full bg-[#9bd5a5]/70"/><span className="ml-auto text-[8px] uppercase tracking-[.2em] text-white/22">Live showcase</span></div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-b-[1.1rem] bg-white">
              {livePreviewUrl ? <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white"><iframe src={livePreviewUrl} title={`${project.title} live preview`} loading="lazy" tabIndex={-1} className="absolute left-0 top-0 h-[900px] w-[1600px] origin-top-left border-0" style={{transform:"scale(.44)",transformOrigin:"top left"}}/></div> : isRemoteImage ? <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover" loading="lazy"/> : <Image src={project.image} alt={`${project.title} preview`} fill className="object-contain" sizes="(max-width:1024px) 100vw,50vw"/>}
            </div>
          </Link>
          <motion.div animate={{y:[0,-10,0],rotate:[0,4,0]}} transition={{duration:6,repeat:Infinity,ease:"easeInOut"}} className={`absolute ${flip?"-left-7":"-right-7"} -top-7 hidden rounded-full border border-white/12 bg-[#24184e]/80 px-4 py-2 text-[9px] uppercase tracking-[.22em] text-[#efbddf]/65 shadow-[0_12px_35px_rgba(9,4,28,.3)] backdrop-blur lg:block`}>{project.number} / 03</motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
}

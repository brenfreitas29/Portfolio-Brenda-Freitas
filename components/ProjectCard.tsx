"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Magnetic from "@/components/Magnetic";

type Project = { number:string; title:string; category:string; description:string; tags:string[]; image:string; previewUrl?:string; href:string; liveUrl:string; codeUrl:string };
type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const flip = Number(project.number) % 2 === 0;
  const isRemoteImage = project.image.startsWith("http");

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .16 }}
      transition={{ duration: .62, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-[1.8rem] border border-white/[.09] bg-[#170f31] shadow-[0_20px_60px_rgba(5,1,24,.22)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#7f68d7]/[.06] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[#efb7df]/[.045] blur-[90px]" />

        <div className={`relative z-10 grid gap-8 p-6 sm:p-8 lg:grid-cols-[.44fr_1.06fr] lg:items-center lg:p-10 xl:p-12 ${flip ? "lg:grid-cols-[1.06fr_.44fr]" : ""}`}>
          <div className={flip ? "lg:order-2" : ""}>
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[.24em] text-white/30">
              <span>Project {project.number}</span><span className="h-px w-8 bg-white/15"/><span>03</span>
            </div>
            <p className="mt-5 text-[10px] uppercase tracking-[.24em] text-[#efb7df]/68">{project.category}</p>
            <h3 className="mt-4 text-[clamp(3rem,5vw,5.8rem)] font-medium leading-[.88] tracking-[-.065em]">{project.title}</h3>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#cfc3f5]/58 md:text-base">{project.description}</p>

            <div className="mt-7 flex max-w-lg flex-wrap gap-2">
              {project.tags.map(tag => <span key={tag} className="rounded-full border border-white/[.09] bg-white/[.025] px-3 py-1.5 text-[9px] uppercase tracking-[.14em] text-[#cfc3f5]/45">{tag}</span>)}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic strength={.14}><Link href={project.href} className="inline-flex rounded-full bg-white px-5 py-3 text-xs font-semibold text-[#24194f] transition-transform duration-200 hover:-translate-y-0.5">Case study ↗</Link></Magnetic>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-white/14 px-5 py-3 text-xs text-white/70 transition-colors hover:border-white/25 hover:text-white">Open product ↗</a>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-3 text-xs text-[#cfc3f5]/42 transition-colors hover:text-[#efb7df]">Code ↗</a>
            </div>
          </div>

          <div className={`relative ${flip ? "lg:order-1" : ""}`}>
            <Link href={project.href} className="group relative block overflow-hidden rounded-[1.45rem] border border-white/[.11] bg-[#0f0a23] p-3 shadow-[0_24px_70px_rgba(4,1,19,.34)] md:p-4" aria-label={`View ${project.title}`}>
              <div className="flex h-9 items-center gap-2 border-b border-white/[.07] px-1">
                <span className="h-2 w-2 rounded-full bg-[#f2abc9]/70"/><span className="h-2 w-2 rounded-full bg-[#e6cb8f]/65"/><span className="h-2 w-2 rounded-full bg-[#9bd5a5]/65"/>
                <span className="ml-auto text-[8px] uppercase tracking-[.18em] text-white/20">Selected work / {project.number}</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-[.95rem] bg-white">
                {isRemoteImage ? <img src={project.image} alt={`${project.title} preview`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]" loading="lazy"/> : <Image src={project.image} alt={`${project.title} preview`} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.015]" sizes="(max-width:1024px) 100vw,58vw" quality={78}/>}              
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

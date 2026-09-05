"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Magnetic from "@/components/Magnetic";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  previewUrl?: string;
  href: string;
  liveUrl: string;
  codeUrl: string;
};

type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 0.5, 1], [65, 0, -45]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.985]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.65, 1, 1, 0.75]);
  const rawVisualY = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -30]);
  const y = useSpring(rawY, { stiffness: 90, damping: 25, mass: 0.5 });
  const scale = useSpring(rawScale, { stiffness: 100, damping: 25, mass: 0.5 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 25 });
  const visualY = useSpring(rawVisualY, { stiffness: 80, damping: 24, mass: 0.5 });
  const isRemoteImage = project.image.startsWith("http");

  return (
    <motion.article ref={cardRef} style={{ y, scale, opacity }} className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#281d61]/60 p-7 shadow-[0_30px_100px_rgba(22,13,65,0.25)] backdrop-blur-xl transition-colors duration-500 hover:border-[#efb9e5]/35 hover:bg-[#30236f]/70 md:p-10 lg:p-14">
      <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#d493ff]/0 blur-[100px] transition-all duration-700 group-hover:bg-[#d493ff]/20" />
      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <div className="mb-10 flex items-center gap-5"><span className="text-xs tracking-[0.2em] text-[#c7bce8]/55">{project.number}</span><span className="h-px w-10 bg-white/15"/><span className="text-xs uppercase tracking-[0.28em] text-[#c7bce8]/65">{project.category}</span></div>
          <h3 className="text-4xl font-medium tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#f8d7f1] md:text-5xl">{project.title}</h3>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#d9d0f3]/75 md:text-lg">{project.description}</p>
          <div className="mt-8 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/15 bg-white/[0.035] px-4 py-2 text-xs text-[#ded5f3]/75">{tag}</span>)}</div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.22}><Link href={project.href} data-cursor="interactive" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">Case study ↗</Link></Magnetic>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/85 transition hover:border-white/40 hover:bg-white/[0.05]">Live demo ↗</a>
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm text-white/60 transition hover:border-white/35 hover:text-white">GitHub ↗</a>
          </div>
        </div>
        <Link href={project.href} data-cursor="view" className="block" aria-label={`View ${project.title} project`}>
          <motion.div style={{ y: visualY }} className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-white/15 bg-gradient-to-br from-[#5141a7] via-[#342776] to-[#21174b] p-5 shadow-[0_25px_70px_rgba(20,10,60,0.25)] transition-all duration-500 group-hover:border-[#e9b4e3]/35 md:p-7">
            <div className="relative z-10 h-full overflow-hidden rounded-xl border border-white/15 bg-[#21174b] shadow-2xl transition-transform duration-700 group-hover:scale-[1.015]">
              <div className="relative flex h-11 items-center border-b border-white/10 bg-[#21174b]/95 px-4"><div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#f1a4c8]/60"/><span className="h-2.5 w-2.5 rounded-full bg-[#e8ce8d]/60"/><span className="h-2.5 w-2.5 rounded-full bg-[#9fd8a5]/60"/></div><div className="absolute left-1/2 h-2 w-[30%] -translate-x-1/2 rounded-full bg-white/[0.07]"/></div>
              <div className="relative h-[calc(100%-2.75rem)] overflow-hidden bg-[#f5f6fa]">
                {project.previewUrl ? (
                  <div className="pointer-events-none absolute inset-0 overflow-hidden bg-white">
                    <iframe
                      src={project.previewUrl}
                      title={`${project.title} live preview`}
                      loading="lazy"
                      tabIndex={-1}
                      className="absolute left-0 top-0 h-[900px] w-[1600px] origin-top-left border-0"
                      style={{ transform: "scale(0.42)", transformOrigin: "top left" }}
                    />
                  </div>
                ) : isRemoteImage ? (
                  <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover object-center transition-transform duration-[1200ms] group-hover:scale-[1.025]"/>
                ) : (
                  <Image src={project.image} alt={`${project.title} project preview`} fill className="object-contain object-center transition-transform duration-[1200ms] group-hover:scale-[1.025]" sizes="(max-width: 1024px) 100vw, 55vw"/>
                )}
              </div>
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.article>
  );
}

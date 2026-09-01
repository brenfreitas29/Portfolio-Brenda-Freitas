"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Magnetic from "@/components/Magnetic";

/* =========================================================
   TYPES
========================================================= */

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  visual?: string;
};

type ProjectCardProps = {
  project: Project;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  /* =====================================================
     SCROLL PROGRESS
  ====================================================== */

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  /* =====================================================
     CARD PARALLAX
  ====================================================== */

  const rawY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [65, 0, -45]
  );

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.97, 1, 0.985]
  );

  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    [0.65, 1, 1, 0.75]
  );

  /* =====================================================
     IMAGE PARALLAX
  ====================================================== */

  const rawVisualY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [30, 0, -30]
  );

  /* =====================================================
     SPRINGS
  ====================================================== */

  const y = useSpring(rawY, {
    stiffness: 90,
    damping: 25,
    mass: 0.5,
  });

  const scale = useSpring(rawScale, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  });

  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 25,
  });

  const visualY = useSpring(rawVisualY, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
  });

  return (
    <motion.article
      ref={cardRef}
      style={{
        y,
        scale,
        opacity,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-white/15
        bg-[#281d61]/60
        p-7
        shadow-[0_30px_100px_rgba(22,13,65,0.25)]
        backdrop-blur-xl
        transition-colors
        duration-500
        hover:border-[#efb9e5]/35
        hover:bg-[#30236f]/70
        hover:shadow-[0_35px_120px_rgba(158,103,255,0.20)]
        md:p-10
        lg:p-14
      "
    >
      {/* =====================================================
          CARD GLOW — RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-28
          -top-28
          h-80
          w-80
          rounded-full
          bg-[#d493ff]/0
          blur-[100px]
          transition-all
          duration-700
          group-hover:bg-[#d493ff]/20
        "
      />

      {/* =====================================================
          CARD GLOW — LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-20
          h-72
          w-72
          rounded-full
          bg-[#e493d5]/0
          blur-[110px]
          transition-all
          duration-700
          group-hover:bg-[#e493d5]/10
        "
      />

      {/* =====================================================
          CONTENT GRID
      ====================================================== */}

      <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div>
          {/* NUMBER + CATEGORY */}

          <div className="mb-10 flex items-center gap-5">
            <span className="text-xs tracking-[0.2em] text-[#c7bce8]/55">
              {project.number}
            </span>

            <span className="h-px w-10 bg-white/15" />

            <span className="text-xs uppercase tracking-[0.28em] text-[#c7bce8]/65">
              {project.category}
            </span>
          </div>

          {/* TITLE */}

          <h3
            className="
              text-4xl
              font-medium
              tracking-[-0.04em]
              text-white
              transition-colors
              duration-300
              group-hover:text-[#f8d7f1]
              md:text-5xl
            "
          >
            {project.title}
          </h3>

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-lg text-base leading-8 text-[#d9d0f3]/75 md:text-lg">
            {project.description}
          </p>

          {/* =================================================
              TAGS
          ================================================== */}

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.035]
                  px-4
                  py-2
                  text-xs
                  text-[#ded5f3]/75
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:border-[#e9b4e3]/25
                  group-hover:bg-white/[0.06]
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* =================================================
              MAGNETIC VIEW PROJECT
          ================================================== */}

          <div className="mt-10">
            <Magnetic strength={0.22}>
              <Link
                href={project.href}
                data-cursor="interactive"
                className="
                  group/link
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  font-medium
                  text-white
                  transition
                  duration-300
                  hover:text-[#f0a6da]
                "
              >
                View project

                <span
                  className="
                    text-[#f0a6da]
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-1
                    group-hover/link:-translate-y-1
                  "
                >
                  ↗
                </span>
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* =================================================
            PROJECT VISUAL
        ================================================== */}

        <Link
          href={project.href}
          data-cursor="view"
          className="block"
          aria-label={`View ${project.title} project`}
        >
          <motion.div
            style={{
              y: visualY,
            }}
            className="
              relative
              aspect-[16/10]
              overflow-hidden
              rounded-[1.5rem]
              border
              border-white/15
              bg-gradient-to-br
              from-[#5141a7]
              via-[#342776]
              to-[#21174b]
              p-5
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_25px_70px_rgba(20,10,60,0.25)]
              transition-all
              duration-500
              group-hover:border-[#e9b4e3]/35
              group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_90px_rgba(180,110,255,0.20)]
              md:p-7
            "
          >
            {/* =================================================
                IMAGE GLOW
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[70%]
                w-[70%]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#a56cff]/15
                blur-[85px]
                transition-all
                duration-700
                group-hover:bg-[#d58ee8]/20
              "
            />

            {/* =================================================
                BROWSER WINDOW
            ================================================== */}

            <div
              className="
                relative
                z-10
                h-full
                overflow-hidden
                rounded-xl
                border
                border-white/15
                bg-[#21174b]
                shadow-2xl
                transition-transform
                duration-700
                group-hover:scale-[1.015]
              "
            >
              {/* browser bar */}

              <div className="relative flex h-11 items-center border-b border-white/10 bg-[#21174b]/95 px-4">
                {/* dots */}

                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f1a4c8]/60" />

                  <span className="h-2.5 w-2.5 rounded-full bg-[#e8ce8d]/60" />

                  <span className="h-2.5 w-2.5 rounded-full bg-[#9fd8a5]/60" />
                </div>

                {/* fake address bar */}

                <div
                  className="
                    absolute
                    left-1/2
                    h-2
                    w-[30%]
                    -translate-x-1/2
                    rounded-full
                    bg-white/[0.07]
                  "
                />
              </div>

              {/* =================================================
                  SCREENSHOT
              ================================================== */}

              <div className="relative h-[calc(100%-2.75rem)] overflow-hidden bg-[#f5f6fa]">
                {project.visual === "vivatrip" ? (
                  <div className="h-full bg-gradient-to-br from-[#f7f5ff] via-white to-[#fceff8] p-5 text-[#2d2168] md:p-7">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#7569ac]">Upcoming trip</p>
                        <p className="mt-1 text-lg font-semibold">Tokyo, Japan</p>
                      </div>
                      <span className="rounded-full bg-[#ebe6ff] px-3 py-1 text-[9px] font-medium">6 days</span>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-[#eeeaff] p-4"><p className="text-[9px] text-[#7569ac]">Checklist</p><p className="mt-2 text-xl font-semibold">6 / 8</p></div>
                      <div className="rounded-xl bg-[#fff0f8] p-4"><p className="text-[9px] text-[#986386]">Trip context</p><p className="mt-2 text-xs font-semibold">Synced</p></div>
                    </div>
                    <div className="mt-3 rounded-xl border border-[#2d2168]/10 bg-white p-4 text-[10px]">
                      <p className="font-semibold">Prepare before you go</p>
                      <div className="mt-3 space-y-2 text-[#2d2168]/60"><p>✓ Travel documents</p><p>✓ Essential apps</p><p>○ Entry requirements</p></div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    className="object-contain object-center transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#8e6ee8]/5 via-transparent to-[#efacd9]/5" />
              </div>
            </div>
          </motion.div>
        </Link>
      </div>

      {/* =====================================================
          BOTTOM LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-[12%]
          bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#f0b6eb]/0
          to-transparent
          transition-all
          duration-700
          group-hover:via-[#f0b6eb]/30
        "
      />
    </motion.article>
  );
}
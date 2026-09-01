"use client";

import Image from "next/image";
import { useRef } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import Magnetic from "@/components/Magnetic";

export default function StudioHero() {
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* =========================================================
     VERTICAL PARALLAX
  ========================================================= */

  const backgroundRawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 45]
  );

  const highCloudsRawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 105]
  );

  const starRawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 60]
  );

  const midCloudsRawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 150]
  );

  const mistRawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 185]
  );

  const contentRawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80]
  );

  const foregroundRawY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 225]
  );

  /* =========================================================
     SCALE / OPACITY
  ========================================================= */

  const backgroundRawScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const foregroundRawScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.05]
  );

  const contentRawOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 1],
    [1, 0.9, 0]
  );

  /* =========================================================
     SPRINGS
  ========================================================= */

  const backgroundY = useSpring(backgroundRawY, {
    stiffness: 80,
    damping: 24,
  });

  const highCloudsY = useSpring(highCloudsRawY, {
    stiffness: 75,
    damping: 24,
  });

  const starY = useSpring(starRawY, {
    stiffness: 80,
    damping: 24,
  });

  const midCloudsY = useSpring(midCloudsRawY, {
    stiffness: 70,
    damping: 24,
  });

  const mistY = useSpring(mistRawY, {
    stiffness: 60,
    damping: 24,
  });

  const contentY = useSpring(contentRawY, {
    stiffness: 85,
    damping: 25,
  });

  const foregroundY = useSpring(foregroundRawY, {
    stiffness: 55,
    damping: 24,
  });

  const backgroundScale = useSpring(backgroundRawScale, {
    stiffness: 80,
    damping: 25,
  });

  const foregroundScale = useSpring(foregroundRawScale, {
    stiffness: 65,
    damping: 25,
  });

  const contentOpacity = useSpring(contentRawOpacity, {
    stiffness: 90,
    damping: 25,
  });

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#7568d7] text-white md:min-h-screen"
    >
      {/* BACKGROUND / FUJI */}

      <motion.div
        style={{
          y: backgroundY,
          scale: backgroundScale,
        }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero/vaporwave-hero.png"
          alt=""
          fill
          priority
          quality={100}
          className="object-cover object-[46%_center] md:object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* HIGH CLOUD LEFT */}

      <motion.div
        style={{ y: highCloudsY }}
        className="pointer-events-none absolute left-[-18%] top-[6%] z-10 w-[70vw] opacity-65 sm:left-[-10%] sm:w-[45vw] md:left-[-3%] md:top-[4%] md:w-[27vw]"
      >
        <motion.div
          animate={{
            x: [0, -95, 20, 0],
            y: [0, -5, 3, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/01-high-clouds-left.png"
            alt=""
            width={1200}
            height={500}
            className="h-auto w-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* HIGH CLOUD CENTER */}

      <motion.div
        style={{ y: highCloudsY }}
        className="pointer-events-none absolute left-[28%] top-[7%] z-10 w-[65vw] opacity-55 sm:left-[32%] sm:w-[42vw] md:left-[35%] md:top-[5%] md:w-[28vw]"
      >
        <motion.div
          animate={{
            x: [0, 70, -30, 0],
            y: [0, 4, -3, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/02-high-clouds-center.png"
            alt=""
            width={1200}
            height={500}
            className="h-auto w-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* HIGH CLOUD RIGHT */}

      <motion.div
        style={{ y: highCloudsY }}
        className="pointer-events-none absolute right-[-22%] top-[6%] z-10 w-[68vw] opacity-55 sm:right-[-12%] sm:w-[44vw] md:right-[-3%] md:top-[5%] md:w-[26vw]"
      >
        <motion.div
          animate={{
            x: [0, 100, -15, 0],
            y: [0, -4, 2, 0],
          }}
          transition={{
            duration: 23,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/03-high-clouds-right.png"
            alt=""
            width={1200}
            height={500}
            className="h-auto w-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* SHOOTING STAR */}

      <motion.div
        style={{ y: starY }}
        className="pointer-events-none absolute right-[1%] top-[12%] z-20 w-[38vw] sm:right-[4%] sm:top-[10%] sm:w-[25vw] md:right-[7%] md:top-[8%] md:w-[17vw]"
      >
        <motion.div
          initial={{
            opacity: 0,
            x: 120,
            y: -60,
            scale: 0.8,
          }}
          animate={{
            opacity: [0, 0, 1, 1, 0],
            x: [120, 120, 20, -170, -280],
            y: [-60, -60, -10, 65, 110],
            scale: [0.8, 0.8, 1, 1, 0.9],
          }}
          transition={{
            duration: 4.3,
            times: [0, 0.28, 0.42, 0.78, 1],
            repeat: Infinity,
            repeatDelay: 6,
            ease: "easeOut",
          }}
        >
          <Image
            src="/hero/04-shooting-star.png"
            alt=""
            width={1000}
            height={300}
            className="h-auto w-full"
            priority
          />
        </motion.div>
      </motion.div>

      {/* MID CLOUD LEFT */}

      <motion.div
        style={{ y: midCloudsY }}
        className="pointer-events-none absolute left-[-30%] top-[45%] z-20 w-[85vw] opacity-60 sm:left-[-15%] sm:w-[55vw] md:left-[-7%] md:top-[43%] md:w-[34vw]"
      >
        <motion.div
          animate={{
            x: [0, -130, 30, 0],
            y: [0, 4, -2, 0],
          }}
          transition={{
            duration: 29,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/12-fuji-cloud-center.png"
            alt=""
            width={1600}
            height={700}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* MID CLOUD RIGHT */}

      <motion.div
        style={{ y: midCloudsY }}
        className="pointer-events-none absolute right-[-30%] top-[44%] z-20 w-[85vw] opacity-60 sm:right-[-15%] sm:w-[55vw] md:right-[-8%] md:top-[42%] md:w-[34vw]"
      >
        <motion.div
          animate={{
            x: [0, 135, -25, 0],
            y: [0, -3, 2, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/13-fuji-cloud-right.png"
            alt=""
            width={1600}
            height={700}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* MIST LEFT */}

      <motion.div
        style={{ y: mistY }}
        className="pointer-events-none absolute bottom-[18%] left-[-38%] z-20 w-[110vw] sm:left-[-22%] sm:w-[75vw] md:bottom-[20%] md:left-[-12%] md:w-[47vw]"
      >
        <motion.div
          animate={{
            x: [0, -150, 40, 0],
            opacity: [0.22, 0.4, 0.26, 0.22],
          }}
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/14-mist-fog-left.png"
            alt=""
            width={1800}
            height={700}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* MIST RIGHT */}

      <motion.div
        style={{ y: mistY }}
        className="pointer-events-none absolute bottom-[16%] right-[-42%] z-20 w-[115vw] sm:right-[-24%] sm:w-[78vw] md:bottom-[18%] md:right-[-14%] md:w-[50vw]"
      >
        <motion.div
          animate={{
            x: [0, 160, -35, 0],
            opacity: [0.2, 0.34, 0.24, 0.2],
          }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/15-mist-fog-center.png"
            alt=""
            width={1800}
            height={700}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* SOFT OVERLAY */}

      <div className="pointer-events-none absolute inset-0 z-30 bg-[linear-gradient(90deg,rgba(57,43,139,0.12),transparent_38%,transparent_68%,rgba(206,128,221,0.08))]" />

      {/* CONTENT */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-40 mx-auto flex min-h-[100svh] max-w-[1680px] flex-col justify-between px-5 pb-7 pt-6 sm:px-7 sm:pb-10 sm:pt-8 md:min-h-screen md:px-12 lg:px-16"
      >
        {/* NAV */}

        <div className="flex items-center justify-between gap-4">
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 sm:text-[11px] sm:tracking-[0.18em]">
            Brenda Freitas
          </span>

          <nav className="flex gap-4 text-[9px] uppercase tracking-[0.13em] text-white/65 sm:gap-7 sm:text-[11px] sm:tracking-[0.16em]">
            <a
              href="#work"
              data-cursor="interactive"
              className="transition duration-300 hover:text-white"
            >
              Work
            </a>

            <a
              href="#skills"
              data-cursor="interactive"
              className="transition duration-300 hover:text-white"
            >
              Skills
            </a>

            <a
              href="#about"
              data-cursor="interactive"
              className="transition duration-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#contact"
              data-cursor="interactive"
              className="transition duration-300 hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* MAIN COPY */}

        <div className="mb-0 max-w-[900px] sm:mb-[5vh] md:mb-[9vh]">
          <p className="mb-4 max-w-[330px] text-[9px] font-medium uppercase leading-[1.6] tracking-[0.2em] text-white/70 sm:mb-5 sm:max-w-none sm:text-[11px] sm:tracking-[0.25em]">
            Full Stack Developer · Product Thinker · AI Automation
          </p>

          <h1 className="text-[clamp(3.35rem,15vw,5.1rem)] font-medium leading-[0.86] tracking-[-0.065em] text-white sm:text-[clamp(4.2rem,10vw,6rem)] md:text-[clamp(4.2rem,7vw,7.8rem)]">
            <span className="block">
              I build digital
            </span>

            <span className="block">
              products that
            </span>

            <span className="block font-normal italic text-[#ffd0ee]">
              scale.
            </span>
          </h1>
        </div>

        {/* BOTTOM */}

        <div className="flex flex-col gap-5 border-t border-white/20 pt-5 sm:gap-7 sm:pt-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="max-w-[360px] text-[12px] leading-[1.6] text-white/80 sm:max-w-xl sm:text-sm sm:leading-6 md:text-base">
              SaaS, dashboards, CRM, web apps and AI-enabled workflows —
              designed, built and deployed as real digital products.
            </p>

            <p className="mt-3 text-[9px] uppercase leading-relaxed tracking-[0.18em] text-white/55 sm:mt-4 sm:text-[10px] sm:tracking-[0.22em]">
              SaaS / Dashboards / CRM / Web Apps / AI
            </p>
          </div>

          <Magnetic strength={0.2}>
            <a
              href="#work"
              data-cursor="interactive"
              className="group inline-flex w-fit items-center gap-2 py-2 text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-[#ffd0ee] sm:text-xs sm:tracking-[0.22em]"
            >
              See my work

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
                ↘
              </span>
            </a>
          </Magnetic>
        </div>
      </motion.div>

      {/* FOREGROUND LEFT */}

      <motion.div
        style={{
          y: foregroundY,
          scale: foregroundScale,
        }}
        className="pointer-events-none absolute bottom-[-7%] left-[-38%] z-50 w-[78vw] opacity-70 sm:left-[-22%] sm:w-[50vw] md:bottom-[-10%] md:left-[-12%] md:w-[32vw] md:opacity-72"
      >
        <motion.div
          animate={{
            x: [0, -65, 12, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/20-foreground-cloud-left.png"
            alt=""
            width={1800}
            height={900}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* FOREGROUND CENTER */}

      <motion.div
        style={{
          y: foregroundY,
          scale: foregroundScale,
        }}
        className="pointer-events-none absolute bottom-[-11%] left-1/2 z-50 w-[70vw] -translate-x-1/2 opacity-45 sm:w-[45vw] md:bottom-[-17%] md:w-[27vw] md:opacity-48"
      >
        <motion.div
          animate={{
            x: [0, 35, -25, 0],
          }}
          transition={{
            duration: 33,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/21-foreground-cloud-center.png"
            alt=""
            width={1800}
            height={900}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* FOREGROUND RIGHT */}

      <motion.div
        style={{
          y: foregroundY,
          scale: foregroundScale,
        }}
        className="pointer-events-none absolute bottom-[-7%] right-[-38%] z-50 w-[78vw] opacity-70 sm:right-[-22%] sm:w-[50vw] md:bottom-[-10%] md:right-[-12%] md:w-[32vw] md:opacity-72"
      >
        <motion.div
          animate={{
            x: [0, 70, -12, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero/22-foreground-cloud-right.png"
            alt=""
            width={1800}
            height={900}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* TRANSITION */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[55] h-20 bg-gradient-to-t from-[#5748b9] to-transparent sm:h-24" />
    </section>
  );
}
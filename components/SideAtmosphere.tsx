"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const particles = [
  { side: "left", top: "13%", size: 3, delay: 0 },
  { side: "left", top: "31%", size: 2, delay: 1.8 },
  { side: "left", top: "58%", size: 4, delay: 3.1 },
  { side: "left", top: "78%", size: 2, delay: 4.7 },
  { side: "right", top: "18%", size: 2, delay: 1.1 },
  { side: "right", top: "42%", size: 3, delay: 2.6 },
  { side: "right", top: "66%", size: 2, delay: 4.1 },
  { side: "right", top: "84%", size: 4, delay: 5.2 },
];

export default function SideAtmosphere() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const railY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), {
    stiffness: 70,
    damping: 22,
  });
  const leftGlowY = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 240]), {
    stiffness: 45,
    damping: 22,
  });
  const rightGlowY = useSpring(useTransform(scrollYProgress, [0, 1], [180, -160]), {
    stiffness: 45,
    damping: 22,
  });
  const progressScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const auroraOneY = useSpring(useTransform(scrollYProgress, [0, 0.45, 1], [-100, 160, -40]), {
    stiffness: 38,
    damping: 24,
  });
  const auroraTwoY = useSpring(useTransform(scrollYProgress, [0, 0.55, 1], [180, -90, 130]), {
    stiffness: 34,
    damping: 24,
  });
  const auroraOneX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [-80, 120, -30]), {
    stiffness: 34,
    damping: 24,
  });
  const auroraTwoX = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [100, -140, 60]), {
    stiffness: 34,
    damping: 24,
  });
  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [-7, 8]);

  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(35);
  const smoothPointerX = useSpring(pointerX, { stiffness: 45, damping: 28, mass: 0.6 });
  const smoothPointerY = useSpring(pointerY, { stiffness: 45, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX.set((event.clientX / window.innerWidth) * 100);
      pointerY.set((event.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [pointerX, pointerY, reduceMotion]);

  const spotlightBackground = useTransform(
    [smoothPointerX, smoothPointerY],
    ([x, y]) =>
      `radial-gradient(520px circle at ${x}% ${y}%, rgba(224, 151, 255, 0.12), transparent 58%)`
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(96,67,196,0.035),transparent_38%,rgba(238,144,211,0.035)_72%,transparent)]" />

      <motion.div
        style={{ backgroundImage: spotlightBackground }}
        className="absolute inset-0 hidden lg:block"
      />

      <motion.div
        style={{ x: reduceMotion ? 0 : auroraOneX, y: reduceMotion ? 0 : auroraOneY, rotate: reduceMotion ? 0 : backgroundRotate }}
        animate={reduceMotion ? undefined : { scale: [1, 1.12, 0.98, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8vw] top-[14vh] h-[48rem] w-[48rem] rounded-[42%] bg-[radial-gradient(circle_at_32%_32%,rgba(128,103,217,.18),rgba(103,71,194,.08)_42%,transparent_70%)] blur-[38px] mix-blend-screen"
      />

      <motion.div
        style={{ x: reduceMotion ? 0 : auroraTwoX, y: reduceMotion ? 0 : auroraTwoY }}
        animate={reduceMotion ? undefined : { scale: [0.95, 1.08, 1, 0.95], rotate: [0, 8, -5, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[2vw] top-[42vh] h-[44rem] w-[44rem] rounded-[46%] bg-[radial-gradient(circle_at_55%_45%,rgba(239,183,223,.14),rgba(189,115,220,.07)_44%,transparent_70%)] blur-[46px] mix-blend-screen"
      />

      <motion.div
        animate={reduceMotion ? undefined : { opacity: [0.16, 0.32, 0.18], scale: [0.96, 1.05, 0.96] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[68vh] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#7457ff]/8 blur-[150px]"
      />

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.42) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.42) 1px, transparent 1px)",
          backgroundSize: "88px 88px",
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      <div className="hidden lg:block">
        <motion.div
          style={{ y: leftGlowY }}
          className="absolute -left-40 top-[16vh] h-[48vh] w-[280px] rounded-full bg-[#7457ff]/16 blur-[110px]"
        />
        <motion.div
          style={{ y: rightGlowY }}
          className="absolute -right-44 top-[42vh] h-[52vh] w-[300px] rounded-full bg-[#ed8fd3]/14 blur-[120px]"
        />

        <div className="absolute left-7 top-1/2 h-[44vh] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/14 to-transparent xl:left-9" />
        <div className="absolute right-7 top-1/2 h-[44vh] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/12 to-transparent xl:right-9" />

        <div className="absolute left-[26px] top-1/2 h-[44vh] w-[3px] -translate-y-1/2 overflow-hidden rounded-full xl:left-[34px]">
          <motion.div
            style={{ scaleY: progressScale, transformOrigin: "top" }}
            className="h-full w-full bg-gradient-to-b from-[#b9a5ff] via-[#ed9ed4] to-[#b9a5ff]"
          />
        </div>

        <motion.div style={{ y: railY }} className="absolute left-10 top-[30vh] flex flex-col gap-9 xl:left-12">
          {["01", "02", "03"].map((n) => (
            <div key={n} className="flex items-center gap-3">
              <span className="h-px w-5 bg-white/18" />
              <span className="text-[9px] font-medium tracking-[.22em] text-white/28">{n}</span>
            </div>
          ))}
        </motion.div>

        {particles.map((particle, index) => (
          <motion.span
            key={`${particle.side}-${index}`}
            className={`absolute rounded-full bg-white/65 shadow-[0_0_16px_rgba(255,255,255,.55)] ${
              particle.side === "left" ? "left-[4.5vw]" : "right-[4.5vw]"
            }`}
            style={{ top: particle.top, width: particle.size, height: particle.size }}
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -18, 7, 0], opacity: [0.18, 0.75, 0.32, 0.18], scale: [0.9, 1.3, 1, 0.9] }
            }
            transition={{ duration: 7 + index * 0.65, repeat: Infinity, ease: "easeInOut", delay: particle.delay }}
          />
        ))}

        <div className="absolute bottom-8 left-9 origin-left -rotate-90 text-[8px] uppercase tracking-[.32em] text-white/18 xl:left-11">
          Brenda Studio · Product Engineering
        </div>
        <div className="absolute bottom-8 right-9 origin-right rotate-90 text-[8px] uppercase tracking-[.32em] text-white/16 xl:right-11">
          Scroll to explore
        </div>
      </div>
    </div>
  );
}

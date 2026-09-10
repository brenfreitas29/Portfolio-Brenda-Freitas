"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function SideAtmosphere() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(35);

  useEffect(() => {
    if (reduceMotion) return;
    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        pointerX.set((event.clientX / window.innerWidth) * 100);
        pointerY.set((event.clientY / window.innerHeight) * 100);
      });
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [pointerX, pointerY, reduceMotion]);

  const spotlightBackground = useTransform(
    [pointerX, pointerY],
    ([x, y]) => `radial-gradient(420px circle at ${x}% ${y}%, rgba(224,151,255,.10), transparent 60%)`
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(96,67,196,.03),transparent_42%,rgba(238,144,211,.025)_74%,transparent)]" />
      <motion.div style={{ backgroundImage: spotlightBackground }} className="absolute inset-0 hidden lg:block" />

      <div className="absolute left-[5vw] top-[16vh] h-[28rem] w-[28rem] rounded-full bg-[#7457ff]/[.055] blur-[90px]" />
      <div className="absolute right-[4vw] top-[48vh] h-[24rem] w-[24rem] rounded-full bg-[#efb7df]/[.045] blur-[90px]" />

      <div
        className="absolute inset-0 opacity-[.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.32) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.32) 1px,transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage: "linear-gradient(to bottom,transparent,black 20%,black 80%,transparent)",
          WebkitMaskImage: "linear-gradient(to bottom,transparent,black 20%,black 80%,transparent)",
        }}
      />

      <div className="hidden lg:block">
        <div className="absolute left-7 top-1/2 h-[42vh] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent xl:left-9" />
        <div className="absolute right-7 top-1/2 h-[42vh] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/9 to-transparent xl:right-9" />

        <div className="absolute left-[26px] top-1/2 h-[42vh] w-[2px] -translate-y-1/2 overflow-hidden rounded-full xl:left-[34px]">
          <motion.div style={{ scaleY: progressScale, transformOrigin: "top" }} className="h-full w-full bg-gradient-to-b from-[#b9a5ff] via-[#ed9ed4] to-[#b9a5ff]" />
        </div>

        <div className="absolute left-10 top-[30vh] flex flex-col gap-9 xl:left-12">
          {["01", "02", "03"].map((n) => (
            <div key={n} className="flex items-center gap-3"><span className="h-px w-5 bg-white/14" /><span className="text-[9px] font-medium tracking-[.22em] text-white/24">{n}</span></div>
          ))}
        </div>

        <div className="absolute bottom-8 left-9 origin-left -rotate-90 text-[8px] uppercase tracking-[.32em] text-white/14 xl:left-11">Brenda Studio · Product Engineering</div>
        <div className="absolute bottom-8 right-9 origin-right rotate-90 text-[8px] uppercase tracking-[.32em] text-white/13 xl:right-11">Scroll to explore</div>
      </div>
    </div>
  );
}

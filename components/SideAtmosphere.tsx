"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

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
  const { scrollYProgress } = useScroll();
  const railY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 180]), { stiffness: 70, damping: 22 });
  const leftGlowY = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 240]), { stiffness: 45, damping: 22 });
  const rightGlowY = useSpring(useTransform(scrollYProgress, [0, 1], [180, -160]), { stiffness: 45, damping: 22 });
  const progressScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] hidden overflow-hidden lg:block" aria-hidden="true">
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
          className={`absolute rounded-full bg-white/65 shadow-[0_0_16px_rgba(255,255,255,.55)] ${particle.side === "left" ? "left-[4.5vw]" : "right-[4.5vw]"}`}
          style={{ top: particle.top, width: particle.size, height: particle.size }}
          animate={{ y: [0, -18, 7, 0], opacity: [0.18, 0.75, 0.32, 0.18], scale: [0.9, 1.3, 1, 0.9] }}
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
  );
}

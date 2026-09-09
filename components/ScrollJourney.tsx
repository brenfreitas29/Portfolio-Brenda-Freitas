"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollJourney() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const orbY = useSpring(useTransform(scrollYProgress, [0, 1], [180, -1280]), { stiffness: 28, damping: 26 });
  const orbX = useSpring(useTransform(scrollYProgress, [0, .45, 1], [-40, 120, -80]), { stiffness: 26, damping: 24 });
  const glassY = useSpring(useTransform(scrollYProgress, [0, 1], [760, -950]), { stiffness: 27, damping: 26 });
  const glassX = useSpring(useTransform(scrollYProgress, [0, .5, 1], [70, -160, 80]), { stiffness: 25, damping: 24 });
  const ringY = useSpring(useTransform(scrollYProgress, [0, 1], [400, -1150]), { stiffness: 26, damping: 26 });
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-18, 240]);
  const labelOneY = useSpring(useTransform(scrollYProgress, [0, 1], [280, -900]), { stiffness: 25, damping: 24 });
  const labelTwoY = useSpring(useTransform(scrollYProgress, [0, 1], [620, -760]), { stiffness: 24, damping: 24 });
  const beamY = useTransform(scrollYProgress, [0, 1], ["8%", "76%"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[7] hidden overflow-hidden lg:block" aria-hidden="true">
      <motion.div style={{ top: beamY }} className="absolute left-1/2 h-[36vh] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#efc0e5]/24 to-transparent" />

      <motion.div style={{ y: reduce ? 0 : orbY, x: reduce ? 0 : orbX }} animate={reduce ? undefined : { rotate: [0, 360] }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} className="absolute -left-24 top-[56vh] h-72 w-72 rounded-full border border-white/16 bg-[radial-gradient(circle_at_34%_28%,rgba(255,255,255,.25),rgba(235,176,226,.10)_23%,rgba(111,75,186,.06)_48%,transparent_70%)] shadow-[inset_-38px_-38px_90px_rgba(86,52,168,.12),0_0_120px_rgba(218,155,255,.14)] backdrop-blur-[2px]">
        <div className="absolute inset-8 rounded-full border border-dashed border-white/12" />
        <div className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-[#ffd0ed] shadow-[0_0_30px_rgba(255,191,233,1)]" />
      </motion.div>

      <motion.div style={{ y: reduce ? 0 : glassY, x: reduce ? 0 : glassX }} animate={reduce ? undefined : { rotate: [10, -7, 10] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-16 top-[64vh] h-60 w-60 rounded-[30%] border border-white/14 bg-gradient-to-br from-white/[.08] via-[#d99ee2]/[.04] to-[#6f56bc]/[.06] shadow-[0_0_120px_rgba(220,157,255,.12)] backdrop-blur-md">
        <div className="absolute inset-8 rotate-45 rounded-[28%] border border-white/10" />
      </motion.div>

      <motion.div style={{ y: reduce ? 0 : ringY, rotate: reduce ? 0 : ringRotate }} className="absolute right-[11vw] top-[42vh] h-44 w-80 rounded-[50%] border border-[#f2c7e7]/20 shadow-[0_0_70px_rgba(228,164,220,.10)]">
        <div className="absolute inset-5 rounded-[50%] border border-dashed border-white/10" />
        <span className="absolute left-[17%] top-0 h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_22px_rgba(255,255,255,.85)]" />
      </motion.div>

      <motion.div style={{ y: reduce ? 0 : labelOneY }} className="absolute left-[8vw] top-[30vh] rotate-[-10deg] rounded-full border border-white/12 bg-[#211643]/60 px-5 py-2.5 text-[9px] uppercase tracking-[.3em] text-white/34 shadow-[0_18px_50px_rgba(5,2,22,.3)] backdrop-blur-lg">Product systems</motion.div>
      <motion.div style={{ y: reduce ? 0 : labelTwoY }} className="absolute right-[9vw] top-[55vh] rotate-[9deg] rounded-full border border-white/12 bg-[#211643]/60 px-5 py-2.5 text-[9px] uppercase tracking-[.3em] text-white/34 shadow-[0_18px_50px_rgba(5,2,22,.3)] backdrop-blur-lg">AI + full stack</motion.div>
    </div>
  );
}

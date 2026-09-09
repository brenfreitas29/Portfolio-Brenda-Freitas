"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const chips = [
  { text: "PRODUCT", left: "8%", top: "18%", r: -13 },
  { text: "NEXT.JS", left: "82%", top: "30%", r: 12 },
  { text: "AI", left: "11%", top: "62%", r: 9 },
  { text: "SUPABASE", left: "80%", top: "74%", r: -9 },
];

export default function ScrollJourney() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const orbOneY = useSpring(useTransform(scrollYProgress, [0, 1], [100, -1050]), { stiffness: 32, damping: 25 });
  const orbOneX = useSpring(useTransform(scrollYProgress, [0, .5, 1], [-20, 110, -50]), { stiffness: 28, damping: 24 });
  const orbTwoY = useSpring(useTransform(scrollYProgress, [0, 1], [650, -700]), { stiffness: 30, damping: 25 });
  const orbTwoX = useSpring(useTransform(scrollYProgress, [0, .5, 1], [20, -130, 60]), { stiffness: 28, damping: 24 });
  const ringY = useSpring(useTransform(scrollYProgress, [0, 1], [350, -900]), { stiffness: 28, damping: 26 });
  const ringRotate = useTransform(scrollYProgress, [0, 1], [-20, 210]);
  const beamY = useTransform(scrollYProgress, [0, 1], ["10%", "78%"]);

  return <div className="pointer-events-none fixed inset-0 z-[6] hidden overflow-hidden lg:block" aria-hidden="true">
    <motion.div style={{ top: beamY }} className="absolute left-1/2 h-[34vh] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#e7b8ff]/25 to-transparent blur-[.5px]" />

    <motion.div style={{ y: reduce ? 0 : orbOneY, x: reduce ? 0 : orbOneX }} animate={reduce ? undefined : { rotate: [0, 360] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }} className="absolute -left-16 top-[52vh] h-64 w-64 rounded-full border border-[#f0c9ff]/20 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.22),rgba(185,119,255,.10)_24%,rgba(94,56,181,.04)_52%,transparent_70%)] shadow-[inset_-30px_-30px_80px_rgba(112,69,196,.12),0_0_90px_rgba(206,145,255,.12)] backdrop-blur-[2px]">
      <div className="absolute inset-7 rounded-full border border-dashed border-white/15"/><div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#ffd0ef] shadow-[0_0_28px_rgba(255,183,230,1)]"/>
    </motion.div>

    <motion.div style={{ y: reduce ? 0 : orbTwoY, x: reduce ? 0 : orbTwoX }} animate={reduce ? undefined : { rotate: [360, 0] }} transition={{ duration: 42, repeat: Infinity, ease: "linear" }} className="absolute -right-12 top-[70vh] h-52 w-52 rounded-[38%] border border-[#cab8ff]/20 bg-gradient-to-br from-[#dba4ff]/10 via-transparent to-[#8d72ff]/10 shadow-[0_0_100px_rgba(211,145,255,.13)] backdrop-blur-[3px]">
      <div className="absolute inset-8 rotate-45 rounded-[30%] border border-white/12"/>
    </motion.div>

    <motion.div style={{ y: reduce ? 0 : ringY, rotate: reduce ? 0 : ringRotate }} className="absolute right-[12vw] top-[48vh] h-44 w-80 rounded-[50%] border border-[#f1c9e8]/18 shadow-[0_0_55px_rgba(231,159,218,.09)]">
      <div className="absolute inset-4 rounded-[50%] border border-dashed border-white/10"/><span className="absolute left-[16%] top-0 h-2.5 w-2.5 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,.8)]"/>
    </motion.div>

    {chips.map((chip, i) => {
      const y = useTransform(scrollYProgress, [0, 1], [i * 170 + 150, -(700 + i * 120)]);
      const rotate = useTransform(scrollYProgress, [0, 1], [chip.r, chip.r + (i % 2 ? 25 : -25)]);
      return <motion.div key={chip.text} style={{ left: chip.left, top: chip.top, y: reduce ? 0 : y, rotate: reduce ? chip.r : rotate }} className="absolute rounded-full border border-white/12 bg-[#24184e]/45 px-4 py-2 text-[9px] font-medium tracking-[.28em] text-white/35 shadow-[0_15px_45px_rgba(13,8,39,.25)] backdrop-blur-md">{chip.text}</motion.div>;
    })}
  </div>;
}

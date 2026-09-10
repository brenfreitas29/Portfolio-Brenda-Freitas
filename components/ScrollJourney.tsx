"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function ScrollJourney() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const orbY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [120, -760]);
  const glassY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [520, -620]);
  const ringY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [300, -720]);
  const ringRotate = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-8, 110]);
  const beamY = useTransform(scrollYProgress, [0, 1], ["10%", "72%"]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[7] hidden overflow-hidden xl:block" aria-hidden="true">
      <motion.div style={{ top: beamY }} className="absolute left-1/2 h-[28vh] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#efc0e5]/16 to-transparent" />
      <motion.div style={{ y: orbY }} className="absolute -left-20 top-[58vh] h-56 w-56 rounded-full border border-white/10 bg-[radial-gradient(circle_at_34%_28%,rgba(255,255,255,.14),rgba(111,75,186,.05)_46%,transparent_70%)] shadow-[0_0_70px_rgba(218,155,255,.08)]" />
      <motion.div style={{ y: glassY }} className="absolute -right-12 top-[66vh] h-44 w-44 rotate-[10deg] rounded-[28%] border border-white/10 bg-gradient-to-br from-white/[.045] to-[#6f56bc]/[.04]" />
      <motion.div style={{ y: ringY, rotate: ringRotate }} className="absolute right-[10vw] top-[44vh] h-32 w-60 rounded-[50%] border border-[#f2c7e7]/14">
        <div className="absolute inset-4 rounded-[50%] border border-dashed border-white/[.07]" />
      </motion.div>
    </div>
  );
}

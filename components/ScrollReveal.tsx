"use client";

import { motion } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  y = 35,
  className = "",
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        filter: "blur(5px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawTitleY = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [80, 0, -35]
  );

  const rawAccentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [45, 0, -55]
  );

  const rawTextY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [55, 0, -25]
  );

  const rawGlowX = useTransform(
    scrollYProgress,
    [0, 1],
    ["-12%", "10%"]
  );

  const rawGlowY = useTransform(
    scrollYProgress,
    [0, 1],
    ["8%", "-12%"]
  );

  const titleY = useSpring(rawTitleY, {
    stiffness: 85,
    damping: 24,
    mass: 0.5,
  });

  const accentY = useSpring(rawAccentY, {
    stiffness: 75,
    damping: 24,
    mass: 0.5,
  });

  const textY = useSpring(rawTextY, {
    stiffness: 90,
    damping: 26,
    mass: 0.5,
  });

  const glowX = useSpring(rawGlowX, {
    stiffness: 45,
    damping: 28,
  });

  const glowY = useSpring(rawGlowY, {
    stiffness: 45,
    damping: 28,
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-gradient-to-b
        from-[#291f62]
        via-[#332674]
        to-[#40318b]
      "
    >
      {/* background glow */}

      <motion.div
        style={{
          x: glowX,
          y: glowY,
        }}
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[12%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#9878f4]/15
          blur-[170px]
        "
      />

      <motion.div
        animate={{
          x: ["-4%", "4%", "-4%"],
          y: ["2%", "-2%", "2%"],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[-20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#eb91d4]/15
          blur-[160px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* label */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/65">
              About
            </p>
          </motion.div>

          {/* content */}

          <div>
            <motion.h2
              style={{
                y: titleY,
              }}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
                max-w-4xl
                text-4xl
                font-medium
                leading-[1.08]
                tracking-[-0.04em]
                md:text-6xl
              "
            >
              I build digital experiences where{" "}

              <motion.span
                style={{
                  y: accentY,
                }}
                className="
                  inline-block
                  bg-gradient-to-r
                  from-[#d8b4ff]
                  via-[#f0a6da]
                  to-[#aaa0ff]
                  bg-clip-text
                  text-transparent
                "
              >
                design, technology and automation
              </motion.span>{" "}

              meet.
            </motion.h2>

            <motion.div
              style={{
                y: textY,
              }}
              className="mt-12 grid gap-8 md:grid-cols-2"
            >
              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                className="text-base leading-7 text-[#ddd5f3]/70"
              >
                I create modern websites, SaaS products and digital
                experiences with a strong focus on usability, visual identity
                and real business needs.
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.22,
                  ease: "easeOut",
                }}
                className="text-base leading-7 text-[#ddd5f3]/70"
              >
                From the first interface to databases, authentication and
                automation, I enjoy turning ideas into complete digital
                products.
              </motion.p>
            </motion.div>

            {/* small capabilities strip */}

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.9,
                delay: 0.3,
              }}
              className="
                mt-16
                grid
                border-y
                border-white/10
                sm:grid-cols-3
              "
            >
              {[
                ["01", "Product Thinking"],
                ["02", "Full Stack"],
                ["03", "AI Automation"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  data-cursor="interactive"
                  className="
                    group
                    border-b
                    border-white/10
                    py-6
                    transition-colors
                    duration-300
                    last:border-b-0
                    hover:bg-white/[0.025]
                    sm:border-b-0
                    sm:border-r
                    sm:px-6
                    sm:last:border-r-0
                  "
                >
                  <span className="text-[10px] tracking-[0.18em] text-[#c7bce8]/45">
                    {number}
                  </span>

                  <p className="mt-3 text-sm text-[#eee7fa]/75 transition-colors group-hover:text-white">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
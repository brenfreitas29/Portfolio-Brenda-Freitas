"use client";

import {
  useRef,
  type MouseEvent,
  type ReactNode,
} from "react";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

export default function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  /* =========================================================
     MOTION VALUES
  ========================================================= */

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  /* =========================================================
     SPRING

     Faz o elemento voltar suavemente para a posição original.
  ========================================================= */

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
    mass: 0.25,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
    mass: 0.25,
  });

  /* =========================================================
     MOUSE MOVE
  ========================================================= */

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = event.clientX - centerX;
    const distanceY = event.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  /* =========================================================
     RESET
  ========================================================= */

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
}
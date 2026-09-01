"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type CursorMode = "default" | "hover" | "view";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [ringPosition, setRingPosition] = useState({
    x: -100,
    y: -100,
  });

  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    setMounted(true);

    let animationFrame = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      setPosition({
        x,
        y,
      });

      setVisible(true);

      const target = event.target as HTMLElement | null;

      if (target) {
        const viewElement = target.closest(
          '[data-cursor="view"]'
        );

        const interactiveElement = target.closest(
          'a, button, [role="button"], [data-cursor="interactive"]'
        );

        if (viewElement) {
          setMode("view");
        } else if (interactiveElement) {
          setMode("hover");
        } else {
          setMode("default");
        }
      }

      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setRingPosition((previous) => ({
          x: previous.x + (x - previous.x) * 0.28,
          y: previous.y + (y - previous.y) * 0.28,
        }));
      });
    };

    const handleMouseDown = () => {
      setClicking(true);
    };

    const handleMouseUp = () => {
      setClicking(false);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, []);

  /*
   * Impede o cursor customizado de ser renderizado
   * no servidor.
   *
   * Isso evita hydration mismatch.
   */
  if (!mounted) {
    return null;
  }

  const ringSize =
    mode === "view"
      ? 92
      : mode === "hover"
      ? 64
      : 40;

  return (
    <>
      {/* =====================================================
          GLASS RING
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          z-[999998]
          hidden
          items-center
          justify-center
          rounded-full
          border
          border-[#f3c4ff]/70
          bg-[#d9b4ff]/[0.07]
          backdrop-blur-[3px]
          md:flex
        "
        style={{
          left: ringPosition.x,
          top: ringPosition.y,
          width: ringSize,
          height: ringSize,
          transform: "translate(-50%, -50%)",
          boxShadow:
            mode === "view"
              ? "0 0 22px rgba(255,190,235,.55), 0 0 60px rgba(185,125,255,.35)"
              : mode === "hover"
              ? "0 0 20px rgba(230,180,255,.45), 0 0 45px rgba(185,125,255,.28)"
              : "0 0 18px rgba(220,180,255,.30)",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.72 : 1,
        }}
        transition={{
          opacity: {
            duration: 0.12,
          },

          scale: {
            type: "spring",
            stiffness: 500,
            damping: 25,
          },
        }}
      >
        <motion.span
          className="
            select-none
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-white
          "
          animate={{
            opacity: mode === "view" ? 1 : 0,
            scale: mode === "view" ? 1 : 0.75,
          }}
          transition={{
            duration: 0.18,
          }}
        >
          VIEW
        </motion.span>
      </motion.div>

      {/* =====================================================
          CENTER DOT
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          z-[999999]
          hidden
          h-[8px]
          w-[8px]
          rounded-full
          bg-[#ffd5f2]
          md:block
        "
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          boxShadow:
            "0 0 7px #ffffff, 0 0 16px rgba(255,190,235,.95), 0 0 30px rgba(195,135,255,.75)",
        }}
        animate={{
          opacity: visible ? 1 : 0,

          scale: clicking
            ? 1.7
            : mode === "hover"
            ? 1.25
            : 1,
        }}
        transition={{
          opacity: {
            duration: 0.12,
          },

          scale: {
            type: "spring",
            stiffness: 500,
            damping: 25,
          },
        }}
      />

      {/* =====================================================
          CLICK RIPPLE
      ====================================================== */}

      {clicking && visible && (
        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            fixed
            z-[999997]
            hidden
            h-10
            w-10
            rounded-full
            border
            border-[#ffd0ee]/80
            md:block
          "
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{
            scale: 0.4,
            opacity: 0.9,
          }}
          animate={{
            scale: 2.4,
            opacity: 0,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
        />
      )}
    </>
  );
}
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PreviewData = {
  title: string;
  image: string;
};

type ServicePreviewProps = {
  preview: PreviewData | null;
};

export default function ServicePreview({
  preview,
}: ServicePreviewProps) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <AnimatePresence>
      {preview && (
        <motion.div
          key={preview.title}
          initial={{
            opacity: 0,
            scale: 0.9,
            rotate: -2,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            rotate: 2,
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            left: position.x + 35,
            top: position.y - 120,
          }}
          className="
            pointer-events-none
            fixed
            z-[999]
            hidden
            w-[320px]
            overflow-hidden
            rounded-[1.4rem]
            border
            border-white/20
            bg-[#291f62]/85
            p-3
            shadow-[0_30px_90px_rgba(30,15,90,0.45)]
            backdrop-blur-xl
            lg:block
          "
        >
          {/* glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-[#d493ff]/20
              blur-[70px]
            "
          />

          {/* browser frame */}

          <div className="relative z-10 overflow-hidden rounded-[1rem] border border-white/10 bg-[#21174b]">
            <div className="relative flex h-9 items-center border-b border-white/10 px-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#f1a4c8]/70" />
                <span className="h-2 w-2 rounded-full bg-[#e8ce8d]/70" />
                <span className="h-2 w-2 rounded-full bg-[#9fd8a5]/70" />
              </div>

              <div className="absolute left-1/2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/[0.08]" />
            </div>

            <div className="relative aspect-[16/10] bg-[#f5f6fa]">
              <Image
                src={preview.image}
                alt={preview.title}
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
          </div>

          {/* title */}

          <div className="relative z-10 flex items-center justify-between px-2 pb-1 pt-3">
            <span className="text-xs font-medium text-white/80">
              {preview.title}
            </span>

            <span className="text-xs text-[#f0b6e5]">
              ↗
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
"use client";

import { useState } from "react";
import ServicePreview from "@/components/ServicePreview";

type PreviewData = {
  title: string;
  image: string;
};

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern, responsive and high-performance websites.",
    href: "#work",
    preview: {
      title: "Hair & Skin Clinic",
      image: "/projects/hair-skin-clinic.png",
    },
  },

  {
    number: "02",
    title: "SaaS Products",
    description: "Scalable digital products built for real businesses.",
    href: "/projects/flowdesk",
    preview: {
      title: "FlowDesk",
      image: "/projects/flowdesk-dashboard.jpg",
    },
  },

  {
    number: "03",
    title: "AI & Automation",
    description: "Intelligent workflows that reduce repetitive work.",
    href: "/projects/flowdesk",
    preview: {
      title: "FlowDesk Automation",
      image: "/projects/flowdesk-dashboard.jpg",
    },
  },

  {
    number: "04",
    title: "UI / UX",
    description: "Interfaces designed around clarity and experience.",
    href: "/projects/hair-skin-clinic",
    preview: {
      title: "Hair & Skin Clinic",
      image: "/projects/hair-skin-clinic.png",
    },
  },
];

export default function ServicesSection() {
  const [preview, setPreview] = useState<PreviewData | null>(null);

  return (
    <>
      <section
        id="services"
        className="
          relative
          overflow-hidden
          border-t
          border-white/10
          bg-gradient-to-b
          from-[#40318b]
          via-[#49389c]
          to-[#362776]
        "
      >
        {/* =====================================================
            BACKGROUND GLOWS
        ====================================================== */}

        <div className="pointer-events-none absolute -left-52 top-[15%] h-[500px] w-[500px] rounded-full bg-[#8e70ef]/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-52 bottom-[5%] h-[550px] w-[550px] rounded-full bg-[#e493d5]/10 blur-[160px]" />

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          {/* HEADER */}

          <div className="mb-16">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/65">
              What I do
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              From idea to
              <span className="text-[#d8b4ff]/70">
                {" "}
                product.
              </span>
            </h2>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div
            className="border-y border-white/15"
            onMouseLeave={() => setPreview(null)}
          >
            {services.map((service) => (
              <a
                key={service.number}
                href={service.href}
                data-cursor="interactive"
                onMouseEnter={() => setPreview(service.preview)}
                className="
                  group
                  relative
                  grid
                  gap-5
                  border-b
                  border-white/15
                  py-8
                  transition-all
                  duration-500
                  last:border-b-0
                  hover:bg-white/[0.035]
                  md:grid-cols-[80px_1fr_1fr_40px]
                  md:items-center
                  md:px-5
                  md:py-10
                "
              >
                {/* NUMBER */}

                <span
                  className="
                    text-xs
                    text-[#cfc3ed]/55
                    transition-all
                    duration-300
                    group-hover:text-[#f0b6e5]
                  "
                >
                  {service.number}
                </span>

                {/* TITLE */}

                <h3
                  className="
                    text-2xl
                    tracking-tight
                    transition-all
                    duration-500
                    group-hover:translate-x-2
                    group-hover:text-[#f8d7f1]
                    md:text-3xl
                    lg:text-4xl
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    max-w-md
                    text-sm
                    leading-6
                    text-[#ddd5f3]/65
                    transition-colors
                    duration-300
                    group-hover:text-[#eee7fa]/85
                  "
                >
                  {service.description}
                </p>

                {/* ARROW */}

                <span
                  className="
                    text-xl
                    text-[#e3c9f3]/45
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#f4c7e8]
                  "
                >
                  ↗
                </span>

                {/* HOVER GRADIENT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                >
                  <div className="absolute left-[15%] top-1/2 h-28 w-[45%] -translate-y-1/2 rounded-full bg-[#b27bff]/5 blur-[60px]" />

                  <div className="absolute right-[5%] top-1/2 h-24 w-[30%] -translate-y-1/2 rounded-full bg-[#e998d3]/5 blur-[55px]" />
                </div>

                {/* BOTTOM LIGHT */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-px
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-transparent
                    via-[#eab6e4]/40
                    to-transparent
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FLOATING PREVIEW
      ====================================================== */}

      <ServicePreview preview={preview} />
    </>
  );
}
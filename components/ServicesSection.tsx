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
    title: "Business Websites",
    description: "Responsive websites and landing pages built to make your business look credible and turn visits into enquiries.",
    href: "/projects/hair-skin-clinic",
    preview: {
      title: "Hair & Skin Clinic",
      image: "/projects/hair-skin-clinic.png",
    },
  },
  {
    number: "02",
    title: "SaaS MVP Development",
    description: "Production-ready MVPs with authentication, databases, dashboards, subscriptions and scalable product foundations.",
    href: "/projects/flowdesk",
    preview: {
      title: "FlowDesk",
      image: "/projects/flowdesk-dashboard.jpg",
    },
  },
  {
    number: "03",
    title: "AI & Business Automation",
    description: "AI-assisted workflows, API integrations and automations designed to reduce repetitive work and connect your operations.",
    href: "/projects/flowdesk",
    preview: {
      title: "FlowDesk Automation",
      image: "/projects/flowdesk-dashboard.jpg",
    },
  },
  {
    number: "04",
    title: "Product Improvements",
    description: "New features, responsive fixes, UX improvements and frontend or full-stack development for products already in motion.",
    href: "/#work",
    preview: {
      title: "VivaTrip",
      image: "/projects/vivatrip-portfolio.svg",
    },
  },
];

export default function ServicesSection() {
  const [preview, setPreview] = useState<PreviewData | null>(null);

  return (
    <>
      <section
        id="services"
        className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#40318b] via-[#49389c] to-[#362776]"
      >
        <div className="pointer-events-none absolute -left-52 top-[15%] h-[500px] w-[500px] rounded-full bg-[#8e70ef]/10 blur-[150px]" />
        <div className="pointer-events-none absolute -right-52 bottom-[5%] h-[550px] w-[550px] rounded-full bg-[#e493d5]/10 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/65">Ways I can help</p>
              <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Hire me to build,
                <span className="block text-[#d8b4ff]/80">launch or improve.</span>
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#ddd5f3]/68 lg:justify-self-end">
              I work with founders, small businesses and product teams that need more than a polished screen — they need something that works in production.
            </p>
          </div>

          <div className="border-y border-white/15" onMouseLeave={() => setPreview(null)}>
            {services.map((service) => (
              <a
                key={service.number}
                href={service.href}
                data-cursor="interactive"
                onMouseEnter={() => setPreview(service.preview)}
                className="group relative grid gap-5 border-b border-white/15 py-8 transition-all duration-500 last:border-b-0 hover:bg-white/[0.035] md:grid-cols-[80px_1fr_1fr_40px] md:items-center md:px-5 md:py-10"
              >
                <span className="text-xs text-[#cfc3ed]/55 transition-all duration-300 group-hover:text-[#f0b6e5]">{service.number}</span>
                <h3 className="text-2xl tracking-tight transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#f8d7f1] md:text-3xl lg:text-4xl">{service.title}</h3>
                <p className="max-w-md text-sm leading-6 text-[#ddd5f3]/65 transition-colors duration-300 group-hover:text-[#eee7fa]/85">{service.description}</p>
                <span className="text-xl text-[#e3c9f3]/45 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f4c7e8]">↗</span>

                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute left-[15%] top-1/2 h-28 w-[45%] -translate-y-1/2 rounded-full bg-[#b27bff]/5 blur-[60px]" />
                  <div className="absolute right-[5%] top-1/2 h-24 w-[30%] -translate-y-1/2 rounded-full bg-[#e998d3]/5 blur-[55px]" />
                </div>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#eab6e4]/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8">
            <p className="max-w-xl text-sm leading-7 text-white/55">Not sure what you need yet? Send me the problem, current website or product idea and I can help define the right first version.</p>
            <a href="/start-a-project" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">Discuss your project ↗</a>
          </div>
        </div>
      </section>

      <ServicePreview preview={preview} />
    </>
  );
}

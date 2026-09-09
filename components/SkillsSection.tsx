"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { number: "01", title: "Frontend", skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { number: "02", title: "Backend & Data", skills: ["Supabase", "PostgreSQL", "REST APIs", "Authentication", "Row Level Security", "Database Design"] },
  { number: "03", title: "Product & SaaS", skills: ["SaaS Products", "Multi-tenant Architecture", "CRM Workflows", "Stripe", "AI Automation", "Responsive UI"] },
  { number: "04", title: "Workflow", skills: ["Git", "GitHub", "Vercel", "API Integrations", "Product Thinking", "Technical Documentation"] },
];

const marquee = ["NEXT.JS", "REACT", "TYPESCRIPT", "SUPABASE", "POSTGRESQL", "AI AUTOMATION", "SAAS", "VERCEL"];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-white/10 bg-[#261b58]">
      <div className="pointer-events-none absolute -left-20 top-20 h-[360px] w-[360px] rounded-full bg-[#8d70ff]/12 blur-[130px]" />
      <div className="pointer-events-none absolute right-[8%] bottom-10 h-[300px] w-[300px] rounded-full bg-[#efb7df]/10 blur-[120px]" />

      <div className="border-y border-white/10 py-4">
        <motion.div animate={{ x: [0, -1100] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="flex w-max items-center gap-8 whitespace-nowrap pl-8">
          {[...marquee, ...marquee].map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-8">
              <span className="text-[11px] font-medium uppercase tracking-[.28em] text-white/35">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#efb7df]/55" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-6 py-24 md:px-10 md:py-30">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs uppercase tracking-[.35em] text-[#d7cdf2]/45">Technical stack</p>
            <h2 className="mt-6 max-w-xl text-5xl font-medium leading-[.93] tracking-[-.06em] md:text-7xl">
              Built across the
              <span className="block font-normal italic text-[#efb7df]">whole product.</span>
            </h2>
            <p className="mt-7 max-w-md text-base leading-8 text-white/52">Interface, application logic, data, integrations and deployment — connected as one product experience.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .25 }}
                transition={{ duration: .7, delay: index * .08, ease: [.22, 1, .36, 1] }}
                className="group relative min-h-[250px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[.035] p-6 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#efb7df]/25 hover:bg-white/[.055] md:p-7"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#b18cff]/0 blur-3xl transition duration-500 group-hover:bg-[#b18cff]/15" />
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] tracking-[.22em] text-white/25">{group.number}</span>
                  <span className="h-px flex-1 bg-white/8" />
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-[-.035em] text-white md:text-3xl">{group.title}</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-[#17112f]/35 px-3 py-1.5 text-[10px] tracking-[.08em] text-white/55">{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

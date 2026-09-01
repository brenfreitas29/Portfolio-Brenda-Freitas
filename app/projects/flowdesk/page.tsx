import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function FlowDeskProjectPage() {
  return (
    <main className="min-h-screen bg-[#24194f] text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#5748b9] via-[#3c2f86] to-[#291f62]">
        {/* BACKGROUND GLOWS */}

        <div className="pointer-events-none absolute -left-52 top-10 h-[600px] w-[600px] rounded-full bg-[#9276ff]/20 blur-[160px]" />

        <div className="pointer-events-none absolute -right-52 top-[20%] h-[600px] w-[600px] rounded-full bg-[#e493d5]/15 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-32">
          {/* =================================================
              TOP BAR
          ================================================== */}

          <div className="mb-20 flex items-center justify-between">
            <Link
              href="/"
              data-cursor="interactive"
              className="text-[11px] uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
            >
              ← Back to portfolio
            </Link>

            <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
              Project 01
            </span>
          </div>

          {/* =================================================
              PROJECT INTRO
          ================================================== */}

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            {/* LEFT */}

            <ScrollReveal>
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/65">
                  AI-Powered SaaS / CRM
                </p>

                <h1 className="text-6xl font-medium tracking-[-0.055em] md:text-8xl">
                  FlowDesk
                </h1>

                <p className="mt-8 max-w-xl text-lg leading-8 text-[#ddd5f3]/75">
                  An intelligent WhatsApp CRM designed to transform
                  conversations into organized leads, pipelines and business
                  opportunities.
                </p>
              </div>
            </ScrollReveal>

            {/* RIGHT INFO */}

            <div className="grid gap-6 sm:grid-cols-3">
              <ScrollReveal delay={0.08}>
                <div className="border-t border-white/15 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Type
                  </p>

                  <p className="mt-3 text-sm text-white/80">
                    SaaS Product
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.16}>
                <div className="border-t border-white/15 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Role
                  </p>

                  <p className="mt-3 text-sm text-white/80">
                    Full Stack
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.24}>
                <div className="border-t border-white/15 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                    Focus
                  </p>

                  <p className="mt-3 text-sm text-white/80">
                    CRM + Automation
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* =================================================
              MAIN DASHBOARD
          ================================================== */}

          <ScrollReveal delay={0.12} y={50}>
            <div className="mt-20 rounded-[2rem] border border-white/15 bg-[#281d61]/60 p-4 shadow-[0_40px_120px_rgba(20,10,60,0.35)] backdrop-blur-xl md:p-7">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#21174b]">
                {/* browser top bar */}

                <div className="relative flex h-12 items-center border-b border-white/10 px-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f1a4c8]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e8ce8d]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9fd8a5]/70" />
                  </div>

                  <div className="absolute left-1/2 h-2 w-[28%] -translate-x-1/2 rounded-full bg-white/[0.07]" />
                </div>

                {/* screenshot */}

                <div className="relative aspect-[16/9] overflow-hidden bg-[#f5f6fa]">
                  <Image
                    src="/projects/flowdesk-dashboard.jpg"
                    alt="FlowDesk dashboard"
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      <section className="relative bg-gradient-to-b from-[#291f62] to-[#332674]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:px-10 md:py-36 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          {/* LABEL */}

          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/60">
              Overview
            </p>
          </ScrollReveal>

          {/* CONTENT */}

          <div>
            <ScrollReveal>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] md:text-6xl">
                A CRM designed around{" "}
                <span className="bg-gradient-to-r from-[#d8b4ff] via-[#f0a6da] to-[#aaa0ff] bg-clip-text text-transparent">
                  conversations.
                </span>
              </h2>
            </ScrollReveal>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <ScrollReveal delay={0.1}>
                <p className="text-base leading-7 text-[#ddd5f3]/70">
                  FlowDesk brings leads, conversations, pipeline management,
                  appointments and automations into one centralized workspace.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-base leading-7 text-[#ddd5f3]/70">
                  The product was designed to make WhatsApp-driven sales
                  workflows easier to organize while keeping the interface
                  simple and scalable.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHALLENGE + SOLUTION
      ====================================================== */}

      <section className="border-t border-white/10 bg-gradient-to-b from-[#332674] to-[#40318b]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* CHALLENGE */}

            <ScrollReveal y={45}>
              <div
                data-cursor="interactive"
                className="
                  h-full
                  rounded-[2rem]
                  border
                  border-white/15
                  bg-white/[0.035]
                  p-8
                  backdrop-blur-xl
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:border-white/25
                  hover:bg-white/[0.05]
                  md:p-10
                "
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#d7cdf2]/60">
                  The challenge
                </p>

                <h3 className="mt-6 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  Conversations become difficult to manage as businesses grow.
                </h3>

                <p className="mt-6 leading-7 text-[#ddd5f3]/70">
                  Leads can easily get lost between messages, follow-ups and
                  different stages of the sales process. FlowDesk organizes
                  that information into a structured workflow.
                </p>
              </div>
            </ScrollReveal>

            {/* SOLUTION */}

            <ScrollReveal delay={0.14} y={45}>
              <div
                data-cursor="interactive"
                className="
                  h-full
                  rounded-[2rem]
                  border
                  border-[#efb9e5]/20
                  bg-[#4a3696]/35
                  p-8
                  shadow-[0_30px_100px_rgba(155,100,255,0.12)]
                  backdrop-blur-xl
                  transition
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#efb9e5]/35
                  hover:bg-[#4f3aa0]/40
                  md:p-10
                "
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#f1c5e8]/65">
                  The solution
                </p>

                <h3 className="mt-6 text-3xl font-medium tracking-[-0.035em] md:text-4xl">
                  One workspace for leads, pipelines, conversations and
                  automation.
                </h3>

                <p className="mt-6 leading-7 text-[#eee6fa]/75">
                  The interface prioritizes clarity: important information
                  stays visible while repetitive processes can be automated
                  behind the scenes.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOGIN / AUTHENTICATION
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#40318b] to-[#362776]">
        {/* glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d78bd7]/10 blur-[180px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          {/* TITLE */}

          <ScrollReveal>
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/60">
                Authentication
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
                A clean entry point into the product.
              </h2>
            </div>
          </ScrollReveal>

          {/* SCREENSHOT */}

          <ScrollReveal delay={0.1} y={55}>
            <div className="rounded-[2rem] border border-white/15 bg-[#281d61]/60 p-4 shadow-[0_35px_110px_rgba(20,10,60,0.35)] md:p-7">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#21174b]">
                {/* browser bar */}

                <div className="relative flex h-12 items-center border-b border-white/10 px-4">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f1a4c8]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e8ce8d]/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9fd8a5]/70" />
                  </div>

                  <div className="absolute left-1/2 h-2 w-[28%] -translate-x-1/2 rounded-full bg-white/[0.07]" />
                </div>

                {/* login screenshot */}

                <div className="relative aspect-[16/9] overflow-hidden bg-[#f5f6fa]">
                  <Image
                    src="/projects/flowdesk-login.png"
                    alt="FlowDesk login interface"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY
      ====================================================== */}

      <section className="border-t border-white/10 bg-gradient-to-b from-[#362776] to-[#2e216b]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <ScrollReveal>
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/60">
              Technology
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="max-w-3xl text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Built with a modern SaaS stack.
            </h2>
          </ScrollReveal>

          {/* TECH TAGS */}

          <div className="mt-14 flex flex-wrap gap-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Supabase",
              "Stripe",
              "Tailwind CSS",
              "AI",
              "Automation",
            ].map((item, index) => (
              <ScrollReveal
                key={item}
                delay={index * 0.05}
                y={20}
              >
                <span
                  data-cursor="interactive"
                  className="
                    inline-block
                    rounded-full
                    border
                    border-white/15
                    bg-white/[0.035]
                    px-5
                    py-3
                    text-sm
                    text-[#ded5f3]/75
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#efb9e5]/35
                    hover:bg-white/[0.07]
                    hover:text-white
                  "
                >
                  {item}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT PROJECT
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 bg-[#24194f]">
        {/* glow */}

        <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#d78bd7]/10 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 text-center md:px-10 md:py-40">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/60">
              Next project
            </p>

            <Link
              href="/projects/hair-skin-clinic"
              data-cursor="view"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-5
                text-4xl
                font-medium
                tracking-[-0.04em]
                transition
                hover:text-[#f0a6da]
                md:text-6xl
              "
            >
              Hair & Skin Clinic

              <span className="text-[#f0a6da] transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="border-t border-white/10 bg-[#24194f]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-xs text-[#d6cced]/60 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 Brenda Studio</p>

          <Link
            href="/"
            data-cursor="interactive"
            className="transition-colors duration-300 hover:text-white"
          >
            Back to portfolio ↑
          </Link>
        </div>
      </footer>
    </main>
  );
}
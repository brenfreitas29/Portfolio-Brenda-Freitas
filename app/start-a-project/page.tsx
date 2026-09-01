"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ProjectForm = {
  service: string;
  stage: string;
  goal: string;
  budget: string;
  details: string;
  name: string;
  email: string;
  company: string;
};

const services = [
  {
    title: "Website / Landing Page",
    description:
      "A polished website built to communicate clearly and convert visitors.",
    icon: "↗",
  },
  {
    title: "SaaS Product",
    description:
      "A complete digital product with authentication, database and scalable architecture.",
    icon: "◈",
  },
  {
    title: "CRM / Dashboard",
    description:
      "Organize customers, workflows, data and operations in one place.",
    icon: "⌗",
  },
  {
    title: "AI & Automation",
    description:
      "Automate repetitive workflows and connect the tools your business already uses.",
    icon: "✦",
  },
  {
    title: "UI / UX",
    description:
      "Improve the experience, usability and visual quality of your digital product.",
    icon: "◎",
  },
  {
    title: "Other",
    description: "Something different? Tell me what you're building.",
    icon: "+",
  },
];

const stages = [
  "Just an idea",
  "I already have designs",
  "I have an existing product",
  "I need a redesign / improvements",
];

const goals = [
  "Launch a new product",
  "Generate leads",
  "Automate processes",
  "Improve user experience",
  "Build an MVP",
  "Scale an existing product",
];

const budgets = [
  {
    title: "Under $300",
    description: "For smaller budgets and focused requests.",
  },
  {
    title: "$300 – $700",
    description: "A smaller project or clearly defined scope.",
  },
  {
    title: "$700 – $1,500",
    description: "A more complete custom project.",
  },
  {
    title: "$1,500 – $3,000",
    description: "For larger or more complex builds.",
  },
  {
    title: "$3,000+",
    description: "For advanced custom products and ongoing development.",
  },
  {
    title: "Not sure yet",
    description: "We can define the right scope together.",
  },
];

const initialForm: ProjectForm = {
  service: "",
  stage: "",
  goal: "",
  budget: "",
  details: "",
  name: "",
  email: "",
  company: "",
};

export default function StartProjectPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ProjectForm>(initialForm);

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [sendError, setSendError] = useState("");

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const selectedService = useMemo(
    () => services.find((item) => item.title === form.service),
    [form.service]
  );

  const canContinue = useMemo(() => {
    if (step === 1) {
      return Boolean(form.service);
    }

    if (step === 2) {
      return Boolean(form.stage);
    }

    if (step === 3) {
      return Boolean(form.goal && form.budget);
    }

    if (step === 4) {
      return form.details.trim().length >= 5;
    }

    return Boolean(
      form.name.trim() &&
        form.email.trim() &&
        form.email.includes("@")
    );
  }, [form, step]);

  function nextStep() {
    if (!canContinue) return;

    if (step < totalSteps) {
      setStep((current) => current + 1);
    }
  }

  function previousStep() {
    if (step > 1) {
      setStep((current) => current - 1);
    }
  }

  async function sendBrief() {
    if (!canContinue || isSending) return;

    try {
      setIsSending(true);
      setSendError("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Unable to send your project brief."
        );
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Project brief error:", error);

      setSendError(
        "Something went wrong while sending your project. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  function resetForm() {
    setForm(initialForm);
    setStep(1);
    setIsSuccess(false);
    setSendError("");
  }

  /* =========================================================
     SUCCESS
  ========================================================= */

  if (isSuccess) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#24194f] px-6 text-white">
        <div className="pointer-events-none absolute -left-52 top-20 h-[650px] w-[650px] rounded-full bg-[#8870ff]/15 blur-[170px]" />

        <div className="pointer-events-none absolute -right-56 bottom-[-120px] h-[700px] w-[700px] rounded-full bg-[#e895d2]/15 blur-[180px]" />

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 mx-auto w-full max-w-3xl text-center"
        >
          <motion.div
            initial={{
              scale: 0,
              rotate: -15,
            }}
            animate={{
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 180,
              damping: 16,
            }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#f0b6e5]/35 bg-[#7258c5]/30 text-2xl text-[#f5c7e8]"
          >
            ✓
          </motion.div>

          <p className="mt-9 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/55">
            Project received
          </p>

          <h1 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
            Thanks, {form.name}.

            <span className="mt-2 block bg-gradient-to-r from-[#f0a6da] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">
              Let&apos;s build something great.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/55">
            Your project brief has been sent successfully. I&apos;ll review
            the details and get back to you at {form.email}.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              data-cursor="interactive"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#31236c] transition duration-300 hover:scale-[1.03] hover:bg-[#f5d8ef]"
            >
              Back to portfolio
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <button
              type="button"
              onClick={resetForm}
              data-cursor="interactive"
              className="rounded-full border border-white/15 px-7 py-4 text-xs uppercase tracking-[0.16em] text-white/60 transition hover:border-white/30 hover:bg-white/[0.05] hover:text-white"
            >
              Start another project
            </button>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#24194f] text-white">
      {/* BACKGROUND */}

      <div className="pointer-events-none fixed -left-52 top-20 h-[650px] w-[650px] rounded-full bg-[#8870ff]/15 blur-[170px]" />

      <div className="pointer-events-none fixed -right-56 bottom-[-120px] h-[700px] w-[700px] rounded-full bg-[#e895d2]/15 blur-[180px]" />

      <div className="pointer-events-none fixed left-1/2 top-[40%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#a77cff]/10 blur-[170px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-12 pt-8 md:px-10">
        {/* HEADER */}

        <header className="flex items-center justify-between">
          <Link
            href="/"
            data-cursor="interactive"
            className="text-[11px] uppercase tracking-[0.2em] text-white/65 transition hover:text-white"
          >
            ← Brenda Studio
          </Link>

          <span className="text-[10px] uppercase tracking-[0.22em] text-white/35">
            Start a Project
          </span>
        </header>

        {/* PROGRESS */}

        <div className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
              Step {String(step).padStart(2, "0")} /{" "}
              {String(totalSteps).padStart(2, "0")}
            </span>

            <span className="text-[10px] uppercase tracking-[0.22em] text-[#e8b9e5]/60">
              {Math.round(progress)}%
            </span>
          </div>

          <div className="h-px overflow-hidden bg-white/10">
            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full bg-gradient-to-r from-[#aa92ff] via-[#d8b4ff] to-[#f0a6da]"
            />
          </div>
        </div>

        {/* FORM */}

        <div className="flex flex-1 items-center py-16 md:py-20">
          <div className="w-full">
            <AnimatePresence mode="wait">
              {/* STEP 1 */}

              {step === 1 && (
                <motion.section
                  key="step-1"
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    filter: "blur(5px)",
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/55">
                    Project Type
                  </p>

                  <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.05em] md:text-7xl">
                    What do you want

                    <span className="block bg-gradient-to-r from-[#f0a6da] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">
                      to build?
                    </span>
                  </h1>

                  <p className="mt-7 max-w-xl leading-7 text-white/55">
                    Choose the option that best matches your project.
                    It doesn&apos;t need to be perfect — we can refine the
                    scope later.
                  </p>

                  <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                      const selected =
                        form.service === service.title;

                      return (
                        <button
                          key={service.title}
                          type="button"
                          data-cursor="interactive"
                          onClick={() =>
                            setForm((current) => ({
                              ...current,
                              service: service.title,
                            }))
                          }
                          className={`
                            group relative min-h-[190px] overflow-hidden
                            rounded-[1.5rem] border p-6 text-left
                            backdrop-blur-xl transition-all duration-500
                            ${
                              selected
                                ? "border-[#f0b6e5]/55 bg-[#6a50be]/35 shadow-[0_20px_70px_rgba(205,135,255,0.20)]"
                                : "border-white/12 bg-white/[0.035] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.055]"
                            }
                          `}
                        >
                          <div className="flex items-start justify-between">
                            <span className="text-xl text-[#e9b9e5]/70">
                              {service.icon}
                            </span>

                            <motion.span
                              animate={{
                                scale: selected ? 1 : 0.7,
                                opacity: selected ? 1 : 0,
                              }}
                              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#f0b6e5]/50 bg-[#f0b6e5]/10 text-[10px]"
                            >
                              ✓
                            </motion.span>
                          </div>

                          <h2 className="mt-8 text-xl font-medium">
                            {service.title}
                          </h2>

                          <p className="mt-3 text-sm leading-6 text-white/50">
                            {service.description}
                          </p>

                          <div
                            className={`
                              pointer-events-none absolute -bottom-20 -right-20
                              h-40 w-40 rounded-full blur-[70px]
                              transition-opacity duration-500
                              ${
                                selected
                                  ? "bg-[#e39ad6]/25 opacity-100"
                                  : "bg-[#a57cff]/20 opacity-0 group-hover:opacity-100"
                              }
                            `}
                          />
                        </button>
                      );
                    })}
                  </div>

                  {selectedService && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="mt-8 border-l border-[#e8b9e5]/30 pl-5"
                    >
                      <p className="text-sm leading-6 text-[#e9def6]/65">
                        {selectedService.description}
                      </p>
                    </motion.div>
                  )}
                </motion.section>
              )}

              {/* STEP 2 */}

              {step === 2 && (
                <motion.section
                  key="step-2"
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/55">
                    Project Stage
                  </p>

                  <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.05em] md:text-7xl">
                    Where are you
                    <span className="text-[#d8b4ff]/70">
                      {" "}
                      right now?
                    </span>
                  </h2>

                  <div className="mt-12 grid gap-4 md:grid-cols-2">
                    {stages.map((stage, index) => {
                      const selected = form.stage === stage;

                      return (
                        <button
                          key={stage}
                          type="button"
                          data-cursor="interactive"
                          onClick={() =>
                            setForm((current) => ({
                              ...current,
                              stage,
                            }))
                          }
                          className={`
                            group flex min-h-[120px] items-center
                            justify-between rounded-[1.5rem] border
                            px-7 text-left transition-all duration-500
                            ${
                              selected
                                ? "border-[#e8b9e5]/45 bg-[#6650b7]/35"
                                : "border-white/12 bg-white/[0.03] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"
                            }
                          `}
                        >
                          <div className="flex items-center gap-6">
                            <span className="text-xs text-white/30">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-lg text-white/85">
                              {stage}
                            </span>
                          </div>

                          <span
                            className={
                              selected
                                ? "text-[#f0b6e5]"
                                : "text-white/25 transition group-hover:text-white"
                            }
                          >
                            {selected ? "✓" : "↗"}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {/* STEP 3 */}

              {step === 3 && (
                <motion.section
                  key="step-3"
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -30,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >
                  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/55">
                    Project Direction
                  </p>

                  <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.05em] md:text-7xl">
                    What&apos;s the main
                    <span className="text-[#f0a6da]/80">
                      {" "}
                      goal?
                    </span>
                  </h2>

                  <div className="mt-12">
                    <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/35">
                      Main goal
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {goals.map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          data-cursor="interactive"
                          onClick={() =>
                            setForm((current) => ({
                              ...current,
                              goal,
                            }))
                          }
                          className={`
                            rounded-full border px-5 py-3 text-sm
                            transition-all duration-300
                            ${
                              form.goal === goal
                                ? "border-[#f0b6e5]/55 bg-[#7258c5]/45 text-white"
                                : "border-white/15 bg-white/[0.03] text-white/60 hover:border-white/30 hover:text-white"
                            }
                          `}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-14">
                    <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/35">
                      Estimated budget
                    </p>

                    <p className="mb-6 max-w-xl text-sm leading-6 text-white/40">
                      What budget range are you considering for this project?
                    </p>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {budgets.map((budget) => {
                        const selected =
                          form.budget === budget.title;

                        return (
                          <button
                            key={budget.title}
                            type="button"
                            data-cursor="interactive"
                            onClick={() =>
                              setForm((current) => ({
                                ...current,
                                budget: budget.title,
                              }))
                            }
                            className={`
                              group relative min-h-[130px] overflow-hidden
                              rounded-[1.4rem] border p-5 text-left
                              transition-all duration-500
                              ${
                                selected
                                  ? "border-[#f0b6e5]/50 bg-[#6650b7]/35 shadow-[0_15px_50px_rgba(205,135,255,0.10)]"
                                  : "border-white/12 bg-white/[0.03] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"
                              }
                            `}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <p className="font-medium text-white">
                                {budget.title}
                              </p>

                              <span
                                className={
                                  selected
                                    ? "text-[#f0b6e5]"
                                    : "text-white/20 transition group-hover:text-white/60"
                                }
                              >
                                {selected ? "✓" : "↗"}
                              </span>
                            </div>

                            <p className="mt-3 text-xs leading-5 text-white/45">
                              {budget.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>
              )}

              {/* STEP 4 */}

              {step === 4 && (
                <motion.section
                  key="step-4"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                >
                  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/55">
                    Your Idea
                  </p>

                  <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.05em] md:text-7xl">
                    Tell me about
                    <span className="text-[#d8b4ff]/75">
                      {" "}
                      the project.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-xl leading-7 text-white/50">
                    A few sentences are enough. What do you want to build,
                    improve or automate?
                  </p>

                  <div className="mt-12">
                    <textarea
                      value={form.details}
                      onChange={(event) =>
                        setForm((current) => ({
                          ...current,
                          details: event.target.value,
                        }))
                      }
                      rows={8}
                      placeholder="Tell me about your idea, business, problem or product..."
                      className="
                        w-full resize-none rounded-[1.75rem]
                        border border-white/15 bg-white/[0.035]
                        p-7 text-base leading-7 text-white
                        outline-none backdrop-blur-xl transition
                        placeholder:text-white/25
                        focus:border-[#e8b9e5]/40
                        focus:bg-white/[0.05]
                        focus:shadow-[0_20px_70px_rgba(190,130,255,0.10)]
                      "
                    />

                    <p className="mt-3 text-right text-[10px] uppercase tracking-[0.18em] text-white/25">
                      {form.details.length} characters
                    </p>
                  </div>
                </motion.section>
              )}

              {/* STEP 5 */}

              {step === 5 && (
                <motion.section
                  key="step-5"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                >
                  <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/55">
                    Contact
                  </p>

                  <h2 className="max-w-4xl text-5xl font-medium tracking-[-0.05em] md:text-7xl">
                    Your project brief

                    <span className="block bg-gradient-to-r from-[#f0a6da] via-[#d8b4ff] to-[#aaa0ff] bg-clip-text text-transparent">
                      is almost ready.
                    </span>
                  </h2>

                  <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
                    <div className="space-y-5">
                      <input
                        value={form.name}
                        onChange={(event) =>
                          setForm((current) => ({
                            ...current,
                            name: event.target.value,
                          }))
                        }
                        placeholder="Your name"
                        className="
                          w-full border-b border-white/15 bg-transparent
                          px-1 py-5 text-lg text-white outline-none
                          transition placeholder:text-white/30
                          focus:border-[#e8b9e5]/50
                        "
                      />

                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                          setForm((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                        placeholder="Email"
                        className="
                          w-full border-b border-white/15 bg-transparent
                          px-1 py-5 text-lg text-white outline-none
                          transition placeholder:text-white/30
                          focus:border-[#e8b9e5]/50
                        "
                      />

                      <input
                        value={form.company}
                        onChange={(event) =>
                          setForm((current) => ({
                            ...current,
                            company: event.target.value,
                          }))
                        }
                        placeholder="Company — optional"
                        className="
                          w-full border-b border-white/15 bg-transparent
                          px-1 py-5 text-lg text-white outline-none
                          transition placeholder:text-white/30
                          focus:border-[#e8b9e5]/50
                        "
                      />

                      <AnimatePresence>
                        {sendError && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                            }}
                            className="rounded-xl border border-red-300/15 bg-red-300/[0.06] px-4 py-3"
                          >
                            <p className="text-sm leading-6 text-red-100/75">
                              {sendError}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/15 bg-white/[0.035] p-7 backdrop-blur-xl">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#d7cdf2]/45">
                        Project Brief
                      </p>

                      <div className="mt-7 space-y-5">
                        <SummaryItem
                          label="Service"
                          value={form.service}
                        />

                        <SummaryItem
                          label="Stage"
                          value={form.stage}
                        />

                        <SummaryItem
                          label="Goal"
                          value={form.goal}
                        />

                        <SummaryItem
                          label="Estimated Budget"
                          value={form.budget}
                        />
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CONTROLS */}

        <footer className="flex items-center justify-between border-t border-white/10 pt-7">
          <button
            type="button"
            onClick={previousStep}
            disabled={step === 1 || isSending}
            data-cursor="interactive"
            className="
              text-xs uppercase tracking-[0.2em]
              text-white/45 transition hover:text-white
              disabled:pointer-events-none disabled:opacity-0
            "
          >
            ← Back
          </button>

          {step < totalSteps ? (
            <button
              type="button"
              onClick={nextStep}
              disabled={!canContinue}
              data-cursor="interactive"
              className="
                group inline-flex items-center gap-4
                rounded-full bg-white px-7 py-4
                text-xs font-medium uppercase tracking-[0.16em]
                text-[#31236c] transition duration-300
                hover:scale-[1.03] hover:bg-[#f5d8ef]
                disabled:pointer-events-none disabled:opacity-30
              "
            >
              Continue

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          ) : (
            <button
              type="button"
              onClick={sendBrief}
              disabled={!canContinue || isSending}
              data-cursor="interactive"
              className="
                group inline-flex min-w-[210px] items-center
                justify-center gap-4 rounded-full bg-white
                px-7 py-4 text-xs font-medium uppercase
                tracking-[0.16em] text-[#31236c]
                shadow-[0_15px_60px_rgba(225,165,220,0.15)]
                transition duration-300
                hover:scale-[1.03] hover:bg-[#f5d8ef]
                hover:shadow-[0_20px_80px_rgba(225,165,220,0.25)]
                disabled:pointer-events-none disabled:opacity-40
              "
            >
              {isSending ? (
                <>
                  <motion.span
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="h-3 w-3 rounded-full border border-[#31236c]/30 border-t-[#31236c]"
                  />

                  Sending...
                </>
              ) : (
                <>
                  Send project brief

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </>
              )}
            </button>
          )}
        </footer>
      </div>
    </main>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-white/10 pb-4 last:border-none last:pb-0">
      <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">
        {label}
      </p>

      <p className="mt-2 text-sm text-white/75">
        {value || "—"}
      </p>
    </div>
  );
}
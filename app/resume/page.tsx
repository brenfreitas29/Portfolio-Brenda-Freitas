import Link from "next/link";

const groups = [
  ["Frontend", "Next.js · React · TypeScript · JavaScript · HTML5 · CSS3 · Tailwind CSS"],
  ["Backend & Data", "Supabase · PostgreSQL · REST APIs · Authentication · RLS · Database Design"],
  ["Product", "SaaS · CRM workflows · Multi-tenant architecture · Stripe · AI automation · Responsive UI"],
  ["Tools", "Git · GitHub · Vercel · API integrations · Technical documentation"],
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f8f7fb] px-5 py-8 text-[#24194f] md:px-10 md:py-12">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-7 shadow-[0_30px_100px_rgba(36,25,79,0.10)] md:p-12 print:shadow-none">
        <div className="flex flex-col gap-6 border-b border-[#24194f]/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Link href="/" className="text-xs uppercase tracking-[0.25em] text-[#5748b9] print:hidden">← Portfolio</Link>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Brenda Freitas</h1>
            <p className="mt-3 text-lg text-[#24194f]/70">Full Stack Developer · SaaS · AI Automation</p>
          </div>
          <button onClick={undefined} className="hidden" aria-hidden="true" />
        </div>

        <section className="grid gap-10 border-b border-[#24194f]/10 py-10 md:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5748b9]">Profile</h2>
          <p className="text-base leading-8 text-[#24194f]/75">
            Full Stack Developer focused on modern web applications, SaaS products, dashboards and business automation. Hands-on experience building with Next.js, React, TypeScript, Supabase and PostgreSQL, including authentication, database integration, responsive interfaces and production deployment.
          </p>
        </section>

        <section className="grid gap-10 border-b border-[#24194f]/10 py-10 md:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5748b9]">Selected projects</h2>
          <div className="space-y-8">
            <div><h3 className="text-xl font-semibold">FlowDesk</h3><p className="mt-2 leading-7 text-[#24194f]/70">AI-powered WhatsApp CRM SaaS with authentication, lead management, pipeline workflows, conversations, scheduling, automation and analytics.</p></div>
            <div><h3 className="text-xl font-semibold">VivaTrip</h3><p className="mt-2 leading-7 text-[#24194f]/70">Travel web application with secure authentication, saved trips, personalized itinerary workflows and pre-trip planning.</p></div>
            <div><h3 className="text-xl font-semibold">Hair & Skin Clinic</h3><p className="mt-2 leading-7 text-[#24194f]/70">Responsive multilingual web experience focused on clarity, conversion and premium service presentation.</p></div>
          </div>
        </section>

        <section className="grid gap-10 py-10 md:grid-cols-[0.75fr_1.25fr]">
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#5748b9]">Technical skills</h2>
          <div className="space-y-5">
            {groups.map(([title, skills]) => <div key={title}><h3 className="font-semibold">{title}</h3><p className="mt-1 leading-7 text-[#24194f]/70">{skills}</p></div>)}
          </div>
        </section>
      </div>
    </main>
  );
}

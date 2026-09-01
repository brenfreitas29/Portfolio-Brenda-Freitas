const skillGroups = [
  {
    title: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & Data",
    skills: ["Supabase", "PostgreSQL", "REST APIs", "Authentication", "Row Level Security", "Database Design"],
  },
  {
    title: "Product & SaaS",
    skills: ["SaaS Products", "Multi-tenant Architecture", "CRM Workflows", "Stripe", "AI Automation", "Responsive UI"],
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub", "Vercel", "API Integrations", "Product Thinking", "Technical Documentation"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#40318b] via-[#382a7d] to-[#31236f]">
      <div className="pointer-events-none absolute left-[12%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#9b7aff]/10 blur-[150px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#d7cdf2]/65">Technical skills</p>
            <h2 className="mt-5 max-w-md text-4xl font-medium tracking-[-0.04em] md:text-5xl">
              The stack behind the products.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#ddd5f3]/70">
              I work across interface, application logic, data and deployment — with a focus on shipping complete, usable web products.
            </p>
          </div>

          <div className="border-y border-white/12">
            {skillGroups.map((group) => (
              <div key={group.title} className="grid gap-5 border-b border-white/10 py-7 last:border-b-0 md:grid-cols-[180px_1fr] md:items-start">
                <h3 className="text-sm font-medium text-white/90">{group.title}</h3>
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="text-sm text-[#ddd5f3]/68">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

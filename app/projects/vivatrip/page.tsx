import Image from "next/image";
import Link from "next/link";

const features = [
  ["Secure authentication", "SSR authentication with protected routes, cookie-based sessions and password recovery flows."],
  ["Saved trip context", "Trip data feeds planning screens directly, reducing duplicate information and keeping the experience consistent."],
  ["Pre-trip planning", "Checklist-driven preparation designed around the actual destination and travel context."],
  ["Scalable product foundation", "Structured to grow into itinerary editing, destination discovery, alerts and paid travel-planning features."],
];

const technicalHighlights = [
  "Next.js App Router with protected routes",
  "Supabase authentication and persistent sessions",
  "Server-side auth checks for private screens",
  "Reusable trip and profile UI components",
  "Responsive layouts for desktop and mobile",
  "Production deployment with Vercel",
];

export default function VivaTripProjectPage() {
  return (
    <main className="min-h-screen bg-[#24194f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#5748b9] via-[#3c2f86] to-[#291f62]">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-36">
          <div className="flex items-center justify-between gap-6">
            <Link href="/#work" className="text-xs uppercase tracking-[0.24em] text-white/65 transition hover:text-white">← Back to work</Link>
            <span className="text-xs uppercase tracking-[0.24em] text-white/45">Case study · 02</span>
          </div>

          <div className="mt-24 grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">Travel SaaS / Full stack</p>
              <h1 className="mt-6 text-6xl font-medium tracking-[-0.06em] md:text-8xl">VivaTrip</h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#ddd5f3]/75">
                A full-stack travel product that brings authentication, saved trips, itinerary workflows and pre-travel preparation into one connected experience.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="https://vivatrip.vercel.app" target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">Live product ↗</a>
                <a href="https://github.com/brenfreitas29/VivaTrip" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white">View code ↗</a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-7 text-sm">
                <div><p className="text-white/40">Role</p><p className="mt-2 text-white/85">Full Stack Developer</p></div>
                <div><p className="text-white/40">Focus</p><p className="mt-2 text-white/85">Product · Auth · UX</p></div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#7f72e4] via-[#5b4abd] to-[#30236f] p-4 shadow-[0_35px_110px_rgba(20,10,60,0.35)] md:p-6">
              <div className="overflow-hidden rounded-[1.4rem] border border-white/15 bg-[#17132d] shadow-2xl">
                <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#21174b] px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f1a4c8]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e8ce8d]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#9fd8a5]/70" />
                </div>
                <div className="relative aspect-[16/10] w-full bg-[#f5f6fa]">
                  <Image
                    src="/projects/vivatrip-preview-en.jpg"
                    alt="VivaTrip product interface in English"
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>
              <p className="mt-4 px-2 text-xs leading-5 text-white/45">English product preview stored locally in the portfolio for reliable loading.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#291f62] to-[#40318b]">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">The challenge</p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">Travel information is fragmented. The product should not be.</h2>
              <p className="mt-6 max-w-xl leading-7 text-[#ddd5f3]/65">VivaTrip was designed around a single source of trip context so each planning screen can feel connected instead of behaving like an isolated tool.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map(([title, text]) => (
                <article key={title} className="border-t border-white/15 pt-6">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#ddd5f3]/68">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#31236f]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-28 md:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d7cdf2]/60">Technical highlights</p>
            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">Built as a real product, not a static concept.</h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {technicalHighlights.map((item) => <p key={item} className="py-4 text-sm text-white/75">{item}</p>)}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#362776]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d7cdf2]/60">Stack</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "SSR Auth", "Responsive UI", "Vercel"].map((x) => (
              <span key={x} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">{x}</span>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <a href="https://vivatrip.vercel.app" target="_blank" rel="noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2d2168] transition hover:bg-[#f5d6ef]">Open VivaTrip ↗</a>
            <Link href="/#work" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white">Back to projects</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

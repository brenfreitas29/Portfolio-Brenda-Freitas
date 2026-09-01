import Link from "next/link";

const features = [
  ["Secure authentication", "SSR authentication with protected routes, cookie-based sessions and password recovery flows."],
  ["Saved trip context", "Trip data feeds planning screens directly, reducing duplicate information and keeping the experience consistent."],
  ["Pre-trip planning", "Checklist-driven preparation designed around the actual destination and travel context."],
  ["Product foundation", "Built to grow into itinerary editing, destination discovery, alerts and paid travel-planning features."],
];

export default function VivaTripProjectPage() {
  return (
    <main className="min-h-screen bg-[#24194f] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#5748b9] via-[#3c2f86] to-[#291f62]">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 md:pb-36">
          <div className="flex items-center justify-between"><Link href="/#work" className="text-xs uppercase tracking-[0.24em] text-white/65 hover:text-white">← Back to work</Link><span className="text-xs uppercase tracking-[0.24em] text-white/45">Case study · 02</span></div>
          <div className="mt-24 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">Travel product / Full stack</p><h1 className="mt-6 text-6xl font-medium tracking-[-0.06em] md:text-8xl">VivaTrip</h1><p className="mt-7 max-w-xl text-lg leading-8 text-[#ddd5f3]/75">A full-stack travel product designed to turn trip planning into one connected experience — from authentication and saved trips to personalized pre-travel preparation.</p></div>
            <div className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#7f72e4] via-[#5b4abd] to-[#30236f] p-6 shadow-[0_35px_110px_rgba(20,10,60,0.35)] md:p-9">
              <div className="rounded-[1.4rem] border border-white/15 bg-[#faf9ff] p-5 text-[#2d2168] md:p-8">
                <div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[0.2em] text-[#766db0]">Upcoming trip</p><h2 className="mt-2 text-2xl font-semibold">Tokyo, Japan</h2></div><div className="rounded-full bg-[#efeafe] px-4 py-2 text-xs font-medium">6 days</div></div>
                <div className="mt-7 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-[#f0edff] p-5"><p className="text-xs text-[#766db0]">Pre-trip checklist</p><p className="mt-3 text-2xl font-semibold">6 / 8</p></div><div className="rounded-2xl bg-[#fff0f8] p-5"><p className="text-xs text-[#986386]">Trip context</p><p className="mt-3 font-semibold">City + country synced</p></div></div>
                <div className="mt-4 rounded-2xl border border-[#2d2168]/10 p-5"><p className="text-sm font-medium">Prepare before you go</p><div className="mt-4 space-y-3 text-sm text-[#2d2168]/65"><p>✓ Travel documents</p><p>✓ Connectivity & essential apps</p><p>○ Entry requirements verification</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#291f62] to-[#40318b]"><div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-40"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-xs uppercase tracking-[0.32em] text-[#d7cdf2]/60">The challenge</p><h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-5xl">Travel information is fragmented. The product should not be.</h2></div><div className="grid gap-6 sm:grid-cols-2">{features.map(([title, text]) => <article key={title} className="border-t border-white/15 pt-6"><h3 className="text-lg font-medium">{title}</h3><p className="mt-3 text-sm leading-7 text-[#ddd5f3]/68">{text}</p></article>)}</div></div></div></section>

      <section className="border-t border-white/10 bg-[#362776]"><div className="mx-auto max-w-7xl px-6 py-24 md:px-10"><p className="text-xs uppercase tracking-[0.3em] text-[#d7cdf2]/60">Stack</p><div className="mt-6 flex flex-wrap gap-3">{["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "SSR Auth", "Responsive UI"].map(x => <span key={x} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">{x}</span>)}</div></div></section>
    </main>
  );
}

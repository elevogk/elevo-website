import { Reveal } from './Reveal'

const testimonials = [
  {
    quote: '"Turned our 4-hour daily reporting process into a fully automated pipeline. We haven\'t touched it in 3 months."',
    attribution: 'Operations Manager, UK',
  },
  {
    quote: '"We were sceptical about AI automation. Elevo changed that. They built something that actually works and saves us hours every week."',
    attribution: 'Business Owner, London',
  },
  {
    quote: '"The audit alone was worth it. They found processes we didn\'t realise were manual. Three months later everything runs automatically."',
    attribution: 'Practice Manager, Manchester',
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative z-[1] px-[clamp(20px,5vw,60px)] py-[clamp(60px,8vw,100px)]"
    >
      <div className="max-w-content mx-auto">
        <Reveal className="text-center flex flex-col items-center mb-14">
          <p className="font-mono text-xs tracking-[3px] text-elevo-blue uppercase mb-4">
            Client feedback
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-tight">
            What our clients say
          </h2>
        </Reveal>

        {/* ── Mobile: horizontal swipe carousel ──────────────────── */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-[85vw] border border-white/10 rounded-2xl p-6
                flex flex-col"
            >
              <div className="flex gap-0.5 text-elevo-teal text-sm mb-4">★★★★★</div>
              <p className="text-[15px] text-white leading-[1.7] mb-6 flex-1">{t.quote}</p>
              <p className="text-xs text-white/40 font-mono mt-auto">{t.attribution}</p>
            </div>
          ))}
        </div>

        {/* ── Desktop: 3-column grid ──────────────────────────────── */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <div className="h-full flex flex-col bg-elevo-card border border-elevo-border
                rounded-xl p-7 transition-all duration-300
                hover:border-elevo-blue/30 hover:-translate-y-1">
                <div className="flex gap-0.5 text-elevo-teal text-sm mb-4">★★★★★</div>
                <p className="text-[15px] text-white leading-[1.7] mb-6 flex-1">{t.quote}</p>
                <p className="text-xs text-elevo-grey-dim font-mono mt-auto">{t.attribution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

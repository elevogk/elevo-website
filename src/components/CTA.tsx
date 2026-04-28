import { Reveal } from './Reveal'
import { ShinyButton } from '@/components/ui/shiny-button'

export function CTA() {
  return (
    <section id="cta" className="relative z-[1] px-[clamp(20px,5vw,60px)] py-[clamp(60px,8vw,100px)] text-center">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="relative p-[clamp(48px,6vw,80px)]">

            {/* ambient glow blobs — no box, no border */}
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full
              bg-[radial-gradient(circle,rgba(74,144,217,0.1),transparent_70%)]
              pointer-events-none blur-[60px]" />
            <div className="absolute -bottom-20 -left-20 w-[320px] h-[320px] rounded-full
              bg-[radial-gradient(circle,rgba(0,212,170,0.07),transparent_70%)]
              pointer-events-none blur-[60px]" />

            <p className="relative font-mono text-xs tracking-[3px] text-elevo-teal uppercase mb-5">
              Ready to automate?
            </p>
            <h2 className="relative text-[clamp(28px,3.5vw,46px)] font-bold leading-[1.15]
              tracking-tight mb-5">
              Stop doing manually<br />what AI can do instantly
            </h2>
            <p className="relative text-base text-elevo-grey max-w-[500px] mx-auto
              leading-[1.7] mb-9">
              Book a free 30-minute strategy call. We'll map out your top automation
              opportunities and show you exactly what's possible — no fluff, no commitment.
            </p>

            <div className="relative flex items-center justify-center gap-4 flex-wrap">
              <ShinyButton onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                Book a free demo
              </ShinyButton>
              <a href="#services" className="text-white/60 text-sm hover:text-white hover:underline transition-all duration-200 bg-transparent border-none px-4 py-3">
                See what we build
              </a>
            </div>

            <p className="relative mt-5 font-mono text-xs text-elevo-grey-dim">
              No commitment · Free strategy session · Results from day one
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

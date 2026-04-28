import { Suspense, lazy } from 'react'
import { useTypewriter } from '@/hooks/useTypewriter'
import { ShinyButton } from '@/components/ui/shiny-button'

const SplineScene = lazy(() => import('./SplineScene'))

function SplineFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <span className="text-elevo-grey-dim text-sm font-mono animate-pulse">Loading 3D scene…</span>
    </div>
  )
}

export function Hero() {
  const word = useTypewriter(['Accelerate', 'Automate', 'Dominate'])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-[68px] z-[1]
        px-[clamp(20px,5vw,60px)] overflow-visible py-16"
      style={{
        background: 'radial-gradient(ellipse 60% 70% at 70% 50%, #0d1535 0%, #050810 50%, transparent 100%)',
      }}
    >
      <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

        {/* ── Left: copy ─────────────────────────── */}
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-xs font-medium
            tracking-[3px] text-elevo-blue uppercase mb-6
            before:content-[''] before:block before:w-5 before:h-px before:bg-elevo-blue">
            AI Automation Agency
          </p>

          <h1 className="text-[clamp(36px,4.5vw,58px)] font-bold leading-[1.15]
            tracking-tight mb-6 text-white">
            Automate the work.<br />
            <span className="text-elevo-blue">{word}</span>
            <span className="inline-block text-elevo-blue font-light ml-px animate-cur-blink">|</span>
            {' '}the results.
          </h1>

          <p className="text-[17px] leading-[1.7] text-elevo-grey mb-10 max-w-[480px]">
            We engineer AI-powered automations that eliminate repetitive tasks,
            cut operational overhead, and give your team back the hours that matter.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <ShinyButton onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Get started
            </ShinyButton>
            <a href="#how-it-works" className="text-white/60 text-sm hover:text-white hover:underline transition-all duration-200 bg-transparent border-none px-4 py-3">
              See how it works
            </a>
          </div>

          <p className="text-white/40 text-xs mt-4 tracking-wide">
            No commitment · Free strategy session · Results from day one
          </p>
        </div>

        {/* ── Right: Spline 3D — floats freely, no box ── */}
        <div
          className="w-full lg:w-1/2 mt-0 flex justify-center items-center h-[280px] lg:h-[680px]"
          style={{
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            borderRadius: 0,
            overflow: 'visible',
          }}
        >
          <Suspense fallback={<SplineFallback />}>
            <SplineScene />
          </Suspense>
        </div>

      </div>
    </section>
  )
}

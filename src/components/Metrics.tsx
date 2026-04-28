import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Reveal'

const stats = [
  { raw: 20,    display: '20',    suffix: '+', label: 'Businesses automated across industries' },
  { raw: 2400,  display: '2,400', suffix: '+', label: 'Hours saved per month across clients'   },
  { raw: 98,    display: '98',    suffix: '%', label: 'Uptime across all deployed automations'  },
  { raw: 6,     display: '6',     suffix: '×', label: 'Average ROI within the first 90 days'   },
]

function StatCard({
  raw, display, suffix, label, started,
}: { raw: number; display: string; suffix: string; label: string; started: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let animId: number
    const begin = performance.now()
    const dur   = 2000

    function tick(now: number) {
      const t    = Math.min((now - begin) / dur, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(ease * raw))
      if (t < 1) animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [started, raw])

  // Preserve original comma formatting once animated
  const formatted = raw >= 1000
    ? count.toLocaleString()
    : String(count)

  return (
    <div
      className="bg-elevo-card rounded-xl px-8 py-10 text-center cursor-default
        transition-all duration-300
        hover:bg-elevo-card-hover
        hover:shadow-[0_0_32px_rgba(74,144,217,0.18)]"
    >
      <p className="text-[clamp(36px,4vw,52px)] font-bold leading-none mb-2 text-elevo-teal">
        {started ? formatted : display}
        <span>{suffix}</span>
      </p>
      <p className="text-sm text-elevo-grey max-w-[140px] mx-auto leading-[1.5]">
        {label}
      </p>
    </div>
  )
}

export function Metrics() {
  const gridRef  = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); io.disconnect() } },
      { threshold: 0.2 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="results" className="relative z-[1] px-[clamp(20px,5vw,60px)] py-[clamp(60px,8vw,100px)]">
      <div className="max-w-content mx-auto">
        <Reveal className="text-center flex flex-col items-center mb-12">
          <p className="font-mono text-xs tracking-[3px] text-elevo-blue uppercase mb-4">
            The numbers
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-tight">
            Results that speak for themselves
          </h2>
        </Reveal>

        <Reveal>
          <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(s => (
              <StatCard key={s.display} {...s} started={started} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

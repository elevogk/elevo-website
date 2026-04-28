import { Reveal } from './Reveal'
import { ShaderLines } from '@/components/ui/shader-lines'

const steps = [
  { num: '01', label: 'Audit',  title: 'Map your workflows',  desc: 'We map your current processes, tools, and bottlenecks — then identify where automation delivers the highest return.' },
  { num: '02', label: 'Build',  title: 'Engineer the system', desc: 'We build precise automations using AI models, your existing tools, and custom code — reliable and testable.' },
  { num: '03', label: 'Deploy', title: 'Launch and scale',    desc: 'You go live. We monitor, maintain, and improve. Results from day one — a system that gets smarter as you grow.' },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative z-[1] px-[clamp(20px,5vw,60px)] py-[clamp(60px,8vw,100px)] overflow-hidden"
    >
      <ShaderLines opacity={0.15} />
      <div className="max-w-content mx-auto">
        <Reveal className="text-center flex flex-col items-center mb-14">
          <p className="font-mono text-xs tracking-[3px] text-elevo-blue uppercase mb-4">
            The process
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-tight">
            From first call to live automation — fast
          </h2>
        </Reveal>

        <Reveal>
          {/* Desktop: 3 columns with connector line */}
          <div className="hidden md:grid grid-cols-3 gap-0 relative">
            {/* connector line between circles */}
            <div
              className="absolute top-9 pointer-events-none"
              style={{ left: 'calc(16.6% + 36px)', right: 'calc(16.6% + 36px)', height: '1px',
                background: 'linear-gradient(90deg, #4A90D9, #00D4AA)', opacity: 0.5 }}
            />

            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`relative z-[1] ${
                  i === 0 ? 'pr-8 text-left' :
                  i === 1 ? 'px-8 text-center' :
                            'pl-8 text-right'
                }`}
              >
                <div
                  className={`w-[72px] h-[72px] rounded-full bg-elevo-card
                    border border-elevo-border-hi flex items-center justify-center
                    text-[22px] font-bold text-elevo-blue font-mono mb-7
                    ${i === 0 ? 'ml-0' : i === 1 ? 'mx-auto' : 'ml-auto'}
                    relative after:absolute after:inset-[-4px] after:rounded-full
                    after:border after:border-elevo-blue/18`}
                >
                  {s.num}
                </div>
                <p className="font-mono text-[11px] tracking-[2px] text-elevo-blue uppercase mb-3">
                  {s.label}
                </p>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-elevo-grey leading-[1.65]">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden flex flex-col gap-10">
            {steps.map(s => (
              <div key={s.num} className="flex gap-5">
                <div className="w-14 h-14 shrink-0 rounded-full bg-elevo-card border
                  border-elevo-border-hi flex items-center justify-center text-lg font-bold
                  text-elevo-blue font-mono">
                  {s.num}
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-[2px] text-elevo-blue uppercase mb-2">
                    {s.label}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-elevo-grey leading-[1.65]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

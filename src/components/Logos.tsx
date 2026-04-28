import { Reveal } from './Reveal'

const clients = ['Nexara','Veritas AI','Orbis Tech','Pulseflow','Strata Labs','Corex']

export function Logos() {
  return (
    <section id="logos" className="relative z-[1] px-[clamp(20px,5vw,60px)] pb-[clamp(60px,8vw,100px)]">
      <div className="max-w-content mx-auto">
        <Reveal>
          <p className="text-center text-xs font-mono tracking-[2px] text-elevo-grey-dim
            uppercase mb-7">
            Trusted by teams building the next generation
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-[clamp(28px,5vw,60px)] gap-y-4">
            {clients.map(c => (
              <span
                key={c}
                className="text-[15px] font-semibold tracking-[2px] text-elevo-grey-dim
                  uppercase opacity-50 hover:opacity-85 transition-opacity duration-200"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

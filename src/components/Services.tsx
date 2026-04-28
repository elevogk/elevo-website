import { Reveal } from './Reveal'
import { BentoGrid } from '@/components/ui/bento-grid'
import { TrendingUp, Phone, Globe, Code } from 'lucide-react'

const scrollToBooking = () =>
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })

const serviceItems = [
  {
    title: 'AI Email Automation',
    description: 'Automated lead responses in 60 seconds, every time. Never lose a deal to slow follow-up again.',
    icon: <TrendingUp className="w-5 h-5 text-[#4A90D9]" />,
    cta: 'Explore →',
    onCta: scrollToBooking,
  },
  {
    title: 'AI Receptionist',
    description: '24/7 call handling and appointment booking on autopilot. Works while you sleep.',
    icon: <Phone className="w-5 h-5 text-[#4A90D9]" />,
    cta: 'Explore →',
    onCta: scrollToBooking,
  },
  {
    title: 'Website Design',
    description: 'High-converting landing pages built to perform. Premium design that gets results.',
    icon: <Globe className="w-5 h-5 text-[#4A90D9]" />,
    cta: 'Explore →',
    onCta: scrollToBooking,
  },
  {
    title: 'Custom Integrations',
    description: 'Connect any system. Any API. Any workflow. If it exists, we can automate it.',
    icon: <Code className="w-5 h-5 text-[#4A90D9]" />,
    cta: 'Explore →',
    onCta: scrollToBooking,
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative z-[1] px-[clamp(20px,5vw,60px)] py-[clamp(60px,8vw,100px)]
        bg-gradient-to-b from-elevo-bg via-elevo-card/40 to-elevo-bg"
    >
      <div className="max-w-content mx-auto">
        <Reveal className="mb-14">
          <p className="font-mono text-xs tracking-[3px] text-elevo-blue uppercase mb-4">
            What we build
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.15] tracking-tight mb-5">
            End-to-end automation,<br />built to scale
          </h2>
          <p className="text-base text-elevo-grey leading-[1.7] max-w-[560px]">
            From quick-win workflows to complex multi-agent systems — we design, build, and
            maintain the infrastructure that lets your team focus on what matters.
          </p>
        </Reveal>

        <Reveal>
          <BentoGrid items={serviceItems} />
        </Reveal>
      </div>
    </section>
  )
}

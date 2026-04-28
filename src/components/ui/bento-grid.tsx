import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export interface BentoItem {
  title: string
  description: string
  icon: ReactNode
  status?: string
  tags?: string[]
  meta?: string
  cta?: string
  onCta?: () => void
  colSpan?: number
  hasPersistentHover?: boolean
}

interface BentoGridProps {
  items: BentoItem[]
}

function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'group relative p-6 rounded-2xl overflow-hidden transition-all duration-300',
            'border border-white/10 bg-white/5',
            'hover:border-[#4A90D9]/50 hover:-translate-y-1',
            'will-change-transform cursor-pointer',
            item.colSpan === 2 ? 'md:col-span-2' : '',
          )}
        >
          {/* spotlight glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A90D9]/10 to-transparent" />
          </div>

          <div className="relative flex flex-col space-y-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 group-hover:bg-[#4A90D9]/20 transition-all duration-300">
              {item.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
            <button
              onClick={() => item.onCta?.()}
              className="text-[#00D4AA] text-sm text-left bg-transparent border-none p-0 cursor-pointer
                opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300
                hover:underline w-fit"
            >
              {item.cta ?? 'Explore →'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export { BentoGrid }

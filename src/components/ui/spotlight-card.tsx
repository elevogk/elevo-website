import { useRef, type ReactNode, type MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  glowColor?: 'blue' | 'teal' | 'purple'
  customSize?: boolean
}

const colors = {
  blue:   'rgba(74, 144, 217, 0.20)',
  teal:   'rgba(0, 212, 170, 0.18)',
  purple: 'rgba(139, 92, 246, 0.18)',
}

export function GlowCard({
  children,
  className,
  glowColor = 'blue',
  customSize = false,
}: SpotlightCardProps) {
  const cardRef    = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card    = cardRef.current
    const overlay = overlayRef.current
    if (!card || !overlay) return
    const { left, top } = card.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    overlay.style.background =
      `radial-gradient(380px circle at ${x}px ${y}px, ${colors[glowColor]}, transparent 70%)`
  }

  function onMouseLeave() {
    const overlay = overlayRef.current
    if (overlay) overlay.style.background = 'transparent'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        'relative bg-elevo-card border border-elevo-border rounded-xl overflow-hidden',
        'cursor-default transition-all duration-300 ease-out',
        'hover:-translate-y-1.5 hover:border-elevo-blue/50',
        'hover:shadow-[0_20px_48px_rgba(0,0,0,0.4)]',
        customSize && 'h-full',
        className,
      )}
    >
      {/* mouse-tracking spotlight layer */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-0 rounded-xl"
        style={{ background: 'transparent', transition: 'background 80ms linear' }}
      />
      {/* content sits above the spotlight */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}

import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowingShadowProps {
  children: ReactNode
  className?: string
  color?: string
}

export function GlowingShadow({
  children,
  className,
  color = '#00D4AA',
}: GlowingShadowProps) {
  return (
    <div className={cn('relative inline-flex', className)}>
      {/* pulsing glow bloom behind the button */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[10px] animate-teal-pulse"
        style={{
          background: color,
          opacity:    0.38,
          filter:     'blur(18px)',
          transform:  'scale(1.08)',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

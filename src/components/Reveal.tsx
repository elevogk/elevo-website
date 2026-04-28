import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          io.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '-40px 0px -40px 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-[800ms] ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7',
        className
      )}
    >
      {children}
    </div>
  )
}

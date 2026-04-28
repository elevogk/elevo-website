import { useEffect, useRef } from 'react'

interface ShaderLinesProps {
  opacity?: number
  className?: string
}

export function ShaderLines({ opacity = 0.15, className }: ShaderLinesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    let t = 0

    function resize() {
      const parent = canvas.parentElement
      canvas.width  = parent ? parent.offsetWidth  : 800
      canvas.height = parent ? parent.offsetHeight : 400
    }

    function draw() {
      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const count = 28
      for (let i = 0; i < count; i++) {
        const baseY  = (height / (count - 1)) * i
        const speed  = 0.0006 + i * 0.00003
        const amp    = 10 + (i % 6) * 5

        ctx.beginPath()
        for (let x = 0; x <= width; x += 4) {
          const y =
            baseY
            + Math.sin(x * 0.007 + t * speed * 90 + i * 0.65) * amp
            + Math.sin(x * 0.002 + t * speed * 55 + i * 1.2)  * (amp * 0.35)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }

        const alpha = 0.25 + 0.45 * Math.abs(Math.sin(t * 0.0015 + i * 0.38))
        ctx.strokeStyle = `rgba(74, 144, 217, ${alpha})`
        ctx.lineWidth   = 0.65
        ctx.stroke()
      }

      t++
      animId = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity }}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
    />
  )
}

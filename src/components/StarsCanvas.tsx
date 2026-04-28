import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; r: number; a: number; da: number; speed: number }

export function StarsCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0, animId = 0
    let stars: Star[] = []

    function resize() {
      if (!canvas) return
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function init() {
      stars = Array.from({ length: 130 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.1 + 0.2,
        a: Math.random(), da: (Math.random() - 0.5) * 0.004,
        speed: Math.random() * 0.05 + 0.008,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      for (const s of stars) {
        s.a = Math.max(0.07, Math.min(0.85, s.a + s.da))
        if (s.a <= 0.07 || s.a >= 0.85) s.da *= -1
        s.y -= s.speed
        if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200,220,255,${s.a})`
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }

    const onResize = () => { resize(); init() }
    window.addEventListener('resize', onResize)
    resize(); init(); draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={ref} className="fixed inset-0 pointer-events-none z-0" />
}

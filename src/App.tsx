import { useEffect }           from 'react'
import Lenis                  from 'lenis'
import { gsap }               from 'gsap'
import { ScrollTrigger }      from 'gsap/ScrollTrigger'
import { WebGLShader }        from '@/components/ui/web-gl-shader'
import { StarsCanvas }        from '@/components/StarsCanvas'
import { Nav }                from '@/components/Nav'
import { Hero }               from '@/components/Hero'
import { Services }           from '@/components/Services'
import { HowItWorks }         from '@/components/HowItWorks'
import { Metrics }            from '@/components/Metrics'
import { Testimonials }       from '@/components/Testimonials'
import { BookingCalendar }    from '@/components/ui/booking-calendar'
import { Contact }
import { CTA }                from '@/components/CTA'
import { Footer }             from '@/components/Footer'

export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <WebGLShader />
      <StarsCanvas />
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Metrics />
        <Testimonials />
        <Contact />
        <BookingCalendar />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

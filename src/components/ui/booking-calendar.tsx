import { InlineWidget } from 'react-calendly'

export function BookingCalendar() {
  return (
    <section id="booking" className="relative z-[1] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#00D4AA] text-sm font-medium tracking-widest uppercase mb-4">
            Book a call
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Book a free 30-minute strategy call
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We'll map your top automation opportunities and show you exactly what's possible — no fluff, no commitment.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden" style={{ background: 'transparent' }}>
          <InlineWidget
            url="https://calendly.com/demo-elevogk/30min"
            styles={{ height: '650px', minWidth: '320px' }}
            pageSettings={{
              backgroundColor: '080B14',
              hideEventTypeDetails: true,
              hideLandingPageDetails: true,
              primaryColor: '4A90D9',
              textColor: 'ffffff',
            }}
          />
        </div>
      </div>
    </section>
  )
}

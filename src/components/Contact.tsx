export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Have a question about our AI systems? Send us a message and we'll reply within 60 seconds.
        </p>
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
          <iframe
            src="https://tally.so/embed/b5Nla2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="300"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="Get in Touch — Elevo GK"
            style={{ background: 'transparent' }}
          />
        </div>
      </div>
    </section>
  )
}

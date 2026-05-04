import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function Contact() {
  const [form, setForm] = useState({ firstName: '', email: '', question: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async () => {
    if (!form.firstName || !form.email || !form.question) return
    setStatus('sending')
    try {
      await fetch('https://elevogk.app.n8n.cloud/webhook/elevo-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: form }),
        mode: 'no-cors'
      })
      setStatus('sent')
    } catch {
      setStatus('sent')
    }
  }

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative border border-white/10 bg-black/40 backdrop-blur-sm grid md:grid-cols-2 lg:grid-cols-3">
          
          {/* Corner plus signs */}
          <span className="absolute -top-3 -left-3 text-[#C8F03C] text-2xl font-light">+</span>
          <span className="absolute -top-3 -right-3 text-[#C8F03C] text-2xl font-light">+</span>
          <span className="absolute -bottom-3 -left-3 text-[#C8F03C] text-2xl font-light">+</span>
          <span className="absolute -bottom-3 -right-3 text-[#C8F03C] text-2xl font-light">+</span>

          {/* Left side */}
          <div className="flex flex-col justify-between lg:col-span-2 p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <p className="text-[#C8F03C] text-xs font-mono tracking-[4px] uppercase mb-4">Contact</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Get In Touch
                </h2>
                <p className="text-gray-400 mt-4 text-base max-w-md leading-relaxed">
                  Have a question about our AI systems? Send us a message and we reply within 60 seconds — automatically.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-4 p-4 border border-white/8 bg-white/3">
                  <div className="p-3 bg-[#C8F03C]/10 border border-[#C8F03C]/20">
                    <Mail className="h-5 w-5 text-[#C8F03C]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Email</p>
                    <p className="text-gray-400 text-xs">gene@elevogk.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-white/8 bg-white/3">
                  <div className="p-3 bg-[#C8F03C]/10 border border-[#C8F03C]/20">
                    <MapPin className="h-5 w-5 text-[#C8F03C]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Location</p>
                    <p className="text-gray-400 text-xs">Oxford, United Kingdom</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 border border-white/8 bg-white/3 md:col-span-2">
                  <div className="p-3 bg-[#C8F03C]/10 border border-[#C8F03C]/20">
                    <Phone className="h-5 w-5 text-[#C8F03C]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Response Time</p>
                    <p className="text-gray-400 text-xs">Under 60 seconds — AI replies instantly, 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="border-t md:border-t-0 md:border-l border-white/10 bg-white/3 p-8 flex flex-col justify-center">
            {status === 'sent' ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-[#C8F03C]/30 bg-[#C8F03C]/10 flex items-center justify-center mx-auto">
                  <Send className="w-6 h-6 text-[#C8F03C]" />
                </div>
                <p className="text-white font-semibold text-lg">Message Sent</p>
                <p className="text-gray-400 text-sm">Check your inbox — you'll have a reply within 60 seconds.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-gray-400 text-xs font-mono tracking-widest uppercase">First Name</label>
                  <input
                    type="text"
                    value={form.firstName}
                    onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
                    placeholder="Michael"
                    className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#C8F03C]/50 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-gray-400 text-xs font-mono tracking-widest uppercase">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="michael@company.com"
                    className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#C8F03C]/50 transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-gray-400 text-xs font-mono tracking-widest uppercase">Your Question</label>
                  <textarea
                    value={form.question}
                    onChange={e => setForm(f => ({ ...f, question: e.target.value }))}
                    placeholder="What is your AI receptionist and how much does it cost?"
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#C8F03C]/50 transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="w-full bg-[#C8F03C] text-black font-bold py-3 text-sm tracking-widest uppercase hover:bg-[#d4f54a] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-gray-600 text-xs text-center">
                  AI replies within 60 seconds, 24/7
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

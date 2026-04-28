import { useState, useEffect } from 'react'
import { ShinyButton } from '@/components/ui/shiny-button'

const ElevoMark = () => (
  <svg width="28" height="34" viewBox="0 0 28 34" fill="none" aria-hidden="true">
    <polygon points="14,2 26,22 2,22" fill="none" stroke="#4A90D9" strokeWidth="2" strokeLinejoin="round"/>
    <polygon points="14,22 26,42 2,42" fill="#4A90D9" opacity="0.14"/>
    <line x1="2" y1="22" x2="26" y2="22" stroke="#4A90D9" strokeWidth="2"/>
    <line x1="14" y1="2" x2="14" y2="22" stroke="#4A90D9" strokeWidth="1" strokeDasharray="2,3" opacity="0.45"/>
    <circle cx="14" cy="2"  r="2.5" fill="#4A90D9"/>
    <circle cx="2"  cy="22" r="2.5" fill="#00D4AA"/>
    <circle cx="26" cy="22" r="2.5" fill="#00D4AA"/>
  </svg>
)

const links = [
  { label: 'Services',    href: '#services'      },
  { label: 'How it works',href: '#how-it-works'  },
  { label: 'Results',     href: '#results'       },
  { label: 'Clients',     href: '#testimonials'  },
]

export function Nav() {
  const [scrolled, setScrolled]           = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between
        px-[clamp(20px,5vw,60px)] border-b transition-all duration-[400ms]
        ${scrolled
          ? 'bg-[#080B14]/85 backdrop-blur-[20px] border-elevo-border/70'
          : 'bg-transparent border-transparent'
        }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-[10px] text-xl font-bold tracking-[3px] text-white">
        <ElevoMark />
        ELEVO
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-medium text-elevo-grey hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center gap-3">
        <a href="#cta" className="text-white/60 text-sm hover:text-white hover:underline transition-all duration-200 bg-transparent border-none px-4 py-3">
          Learn more
        </a>
        <ShinyButton onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
          Book a demo
        </ShinyButton>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white p-2"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#080B14] border-t border-white/10 py-6 px-6 flex flex-col gap-4 z-50">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-white text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <ShinyButton
              onClick={() => {
                setMobileMenuOpen(false)
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Book a demo
            </ShinyButton>
          </div>
        )}
      </div>
    </nav>
  )
}

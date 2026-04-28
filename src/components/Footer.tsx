const ElevoMark = () => (
  <svg width="22" height="27" viewBox="0 0 28 34" fill="none" aria-hidden="true">
    <polygon points="14,2 26,22 2,22" fill="none" stroke="#4A90D9" strokeWidth="2" strokeLinejoin="round"/>
    <polygon points="14,22 26,42 2,42" fill="#4A90D9" opacity="0.14"/>
    <line x1="2" y1="22" x2="26" y2="22" stroke="#4A90D9" strokeWidth="2"/>
    <line x1="14" y1="2" x2="14" y2="22" stroke="#4A90D9" strokeWidth="1" strokeDasharray="2,3" opacity="0.45"/>
    <circle cx="14" cy="2"  r="2.5" fill="#4A90D9"/>
    <circle cx="2"  cy="22" r="2.5" fill="#00D4AA"/>
    <circle cx="26" cy="22" r="2.5" fill="#00D4AA"/>
  </svg>
)

const services = ['AI Email Automation','AI Receptionist','Website Design','Custom Integrations']
const company  = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Results',      href: '#results'      },
  { label: 'Clients',      href: '#testimonials' },
  { label: 'Contact',      href: '#cta'          },
]

export function Footer() {
  return (
    <footer className="relative z-[1] px-[clamp(20px,5vw,60px)] pt-16 pb-8">
      <div className="max-w-content mx-auto">

        {/* Top row */}
        <div className="flex flex-wrap justify-between gap-10 mb-12">
          <div className="max-w-[280px]">
            <div className="flex items-center gap-[10px] text-lg font-bold tracking-[3px] mb-4">
              <ElevoMark />
              ELEVO GK
            </div>
            <p className="text-sm text-elevo-grey leading-[1.6]">
              AI automation engineering for teams that want to move faster and work smarter.
            </p>
          </div>

          <div className="flex gap-12 flex-wrap">
            <div>
              <h4 className="text-xs font-mono tracking-[2px] uppercase text-elevo-grey-dim mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {services.map(s => (
                  <li key={s}>
                    <a href="#services" className="text-sm text-elevo-grey hover:text-white transition-colors duration-200">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-mono tracking-[2px] uppercase text-elevo-grey-dim mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                {company.map(c => (
                  <li key={c.href}>
                    <a href={c.href} className="text-sm text-elevo-grey hover:text-white transition-colors duration-200">
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap justify-between items-center gap-3 pt-6">
          <p className="text-xs font-mono text-elevo-grey-dim">ELEVO GK © 2026 — All rights reserved</p>

          <div className="flex gap-3">
            {[
              { label: 'LinkedIn', href: '#', icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              )},
              { label: 'X', href: '#', icon: (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              )},
              { label: 'Email', href: 'mailto:hello@elevo.gk', icon: (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              )},
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-elevo-card border border-elevo-border
                  flex items-center justify-center text-elevo-grey
                  hover:border-elevo-blue hover:text-elevo-blue transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}

import { ArrowRight } from 'lucide-react'

export default function MissionCTA() {
  return (
    <section className="relative overflow-hidden bg-teal-950 py-24">

      {/* Background photo at low opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&auto=format&fit=crop&q=80)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(2,26,18,0.95) 0%, rgba(2,44,36,0.82) 100%)',
        }}
      />

      {/* Ambient glow centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(74,222,128,0.06) 0%, transparent 65%)',
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">

          {/* Left: reinforcement statement */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-6 h-px bg-green-400" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                The Great Transition
              </span>
            </div>

            {/* Large ghost number — decorative */}
            <div
              className="font-bold leading-none select-none pointer-events-none text-white/3 mb-4"
              style={{ fontFamily: 'Georgia, serif', fontSize: '9rem', lineHeight: 1 }}
            >
              2050
            </div>

            <h2
              className="font-bold text-white leading-tight mb-6 -mt-10"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              From traditional systems to{' '}
              <span
                
                style={{
                  background: 'linear-gradient(90deg, #4ade80 0%, #2dd4bf 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                future-ready farms.
              </span>
            </h2>

            <p className="text-white/65 text-lg leading-relaxed max-w-lg">
              Our mission is not just a statement it's the work we do every day through Shambani,
              the Future Farms Initiative, and our team on the ground across Africa.
            </p>
          </div>

          {/* Right: forward links */}
          <div className="flex flex-col gap-3">
            {[
              {
                label: 'Explore Shambani',
                desc: 'The technology platform driving our mission forward.',
                href: '/shambani',
                primary: true,
              },
              {
                label: 'Business Solutions',
                desc: 'Technology and services for farm managers and owners.',
                href: '/business',
                primary: false,
              },
              {
                label: 'Our Company',
                desc: 'Arbarnes structure, team, and the Future Farms Initiative.',
                href: '/company',
                primary: false,
              },
              {
                label: 'Careers',
                desc: 'Join the team building 100,000 future-ready farms by 2035.',
                href: '/careers',
                primary: false,
              },
            ].map(({ label, desc, href, primary }) => (
              <a
                key={label}
                href={href}
                className={`group flex items-center justify-between gap-4 rounded-[1rem] px-7 py-5 transition-all duration-200 ${
                  primary
                    ? 'bg-green-500 hover:bg-green-400'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div>
                  <div
                    className="font-bold text-lg text-white mb-0.5"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {label}
                  </div>
                  <div className={`text-md leading-relaxed ${primary ? 'text-white/70' : 'text-white/38'}`}>
                    {desc}
                  </div>
                </div>
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    primary ? 'bg-white/20 group-hover:bg-white/30' : 'bg-white/8 group-hover:bg-white/15'
                  }`}
                >
                  <ArrowRight
                    size={15}
                    className="text-white/70 group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
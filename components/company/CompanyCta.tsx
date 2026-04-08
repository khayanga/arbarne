import { ArrowRight } from 'lucide-react'

export default function CompanyCTA() {
  return (
    <section className="relative overflow-hidden bg-teal-950 py-24">

      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1800&auto=format&fit=crop&q=80)',
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(2,30,22,0.92) 0%, rgba(2,44,36,0.75) 100%)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(74,222,128,0.07) 0%, transparent 65%)',
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
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">

          {/* Left: big mission statement */}
          <div>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-6 h-px bg-green-400" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                Our Mission
              </span>
            </div>

            <h2
              className="font-bold text-white leading-tight mb-6"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              }}
            >
              Enabling farms to become{' '}
              <span
                
               className="block pb-2 bg-linear-to-br from-teal-900 via-emerald-500 to-green-400 bg-clip-text text-transparent tracking-tight"
              >
                productive, resilient,
              </span>{' '}
              and ready for the future.
            </h2>

            <p className="text-white/55 text-lg leading-relaxed max-w-lg">
              From technology development to farm management services, every part of Arbarne
              is built to transform African agriculture one farm at a time.
            </p>
          </div>

          {/* Right: action cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                label: 'Explore Shambani',
                desc: 'See the farm intelligence platform powering our work.',
                href: '/',
                dark: true,
              },
              {
                label: 'Business Solutions',
                desc: 'Farm technology plans and professional management services.',
                href: '/business',
                dark: false,
              },
              {
                label: 'Future Farms Initiative',
                desc: 'Learn about the initiative driving farm transformation across Africa.',
                href: 'https://www.futurefarms.africa/',
                dark: false,
              },
            ].map(({ label, desc, href, dark }) => (
              <a
                key={label}
                href={href}
                className={`group flex items-center justify-between gap-4 rounded-[1rem] px-7 py-5 transition-all duration-200 ${
                  dark
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'border border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div>
                  <div
                    className={`font-bold  text-xl mb-0.5 ${dark ? 'text-white' : 'text-white'}`}
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {label}
                  </div>
                  <div className={`text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-white/55'}`}>
                    {desc}
                  </div>
                </div>
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    dark
                      ? 'bg-white/20 group-hover:bg-white/30'
                      : 'bg-white/8 group-hover:bg-white/15'
                  }`}
                >
                  <ArrowRight
                    size={16}
                    className={`${dark ? 'text-white' : 'text-white/60'} group-hover:translate-x-0.5 transition-transform duration-200`}
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
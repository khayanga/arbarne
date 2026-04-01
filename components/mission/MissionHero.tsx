export default function MissionHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&auto=format&fit=crop&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-teal-950/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(2,26,18,0.95) 0%, rgba(2,40,28,0.7) 45%, rgba(2,35,24,0.88) 100%)',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-150 h-125 pointer-events-none bg-[radial-gradient(ellipse_at_80%_0%,rgba(74,222,128,0.08)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-125 h-100 pointer-events-none bg-[radial-gradient(ellipse_at_0%_100%,rgba(45,212,191,0.06)_0%,transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-6 py-40 mx-auto text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/12 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-green-300 text-sm font-bold uppercase tracking-widest">
              Our Mission
            </span>
          </div>
        </div>

        {/* Centered block */}
        <div className="max-w-5xl mx-auto flex flex-col items-center">

          <h1
            className="font-bold text-white leading-[1.05] mb-14 text-center"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.2rem, 5.5vw, 4.6rem)',
            }}
          >
            The great transition of African agriculture <br className="hidden lg:block" />
            from traditional, inefficient systems to{' '}
            <span
              className="italic"
              style={{
                background:
                  'linear-gradient(90deg, #4ade80 0%, #34d399 50%, #2dd4bf 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              future-ready, productive,
            </span>{' '}
            and profitable farm enterprises.
          </h1>

          {/* Pillars */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl w-full">
            {[
              { val: 'Future-Ready', desc: 'Farms built for tomorrow’s challenges' },
              { val: 'Productive', desc: 'Maximising yield from every acre' },
              { val: 'Profitable', desc: 'Sustainable economic outcomes for farmers' },
            ].map(({ val, desc }) => (
              <div
                key={val}
                className="rounded-[1rem] border border-white/10 bg-white/6 backdrop-blur-sm px-5 py-5 text-center"
              >
                <div
                  className="text-white font-bold text-lg mb-1"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {val}
                </div>
                <div className="text-white/65 text-sm leading-relaxed">
                  {desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
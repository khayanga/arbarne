


export default function MissionHero() {
  return (
    <section className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1800&auto=format&fit=crop&q=80)',
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-teal-950/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(2,30,22,0.98) 0%, rgba(2,30,22,0.7) 40%, rgba(2,30,22,0.2) 100%)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-0 w-150 h-100 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 0%, rgba(74,222,128,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 md:mt-22 max-w-7xl mx-auto w-full px-6 pb-12 pt-28">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-green-300 text-xs font-bold uppercase tracking-widest">
              Our Mission
            </span>
          </div>
          {/* <div className="h-px w-16 bg-white/10" /> */}
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-end">

          {/* LEFT — Headline */}
          <div>
            <h1
              className="font-bold text-white leading-[1.05] mb-10"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              }}
            >
              Transforming African agriculture
              <span
                className="block mt-2"
                style={{
                  background:
                    'linear-gradient(90deg, #4ade80 0%, #34d399 50%, #2dd4bf 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                into productive systems.
              </span>
            </h1>

            {/* <p className="text-white/75 text-lg max-w-xl leading-relaxed mb-10">
              We are driving the transition from traditional, inefficient farming
              practices toward structured, intelligent, and profitable agricultural
              systems across Africa.
            </p> */}

            {/* Pillars */}
            <div className="flex flex-wrap gap-3">
              {[
                { val: 'Future-Ready', label: 'Built for tomorrow' },
                { val: 'Productive', label: 'Maximising yield' },
                { val: 'Profitable', label: 'Sustainable growth' },
              ].map(({ val, label }) => (
                <div
                  key={val}
                  className="rounded-[1rem] border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-3"
                >
                  <div
                    className="text-white font-bold text-base"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {val}
                  </div>
                  <div className="text-white/50 text-sm mt-0.5">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Narrative */}
          <div className="border-l border-white/10 pl-10 space-y-6">

            <p
              className="text-white/80 leading-relaxed"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
              }}
            >
              Agriculture in Africa stands at a critical turning point. Feeding a
              growing population requires more than effort it demands intelligent
              systems, data-driven decisions, and scalable infrastructure.
            </p>

            

            <p className="text-green-400 font-semibold tracking-wide">
              This is the great transition of African agriculture.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
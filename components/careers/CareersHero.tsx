export default function CareersHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1589923188900-85dae523342b?w=1800&auto=format&fit=crop&q=80)',
        }}
      />
      <div className="absolute inset-0 bg-teal-950/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(2,26,18,0.98) 0%, rgba(2,35,24,0.75) 40%, rgba(2,35,24,0.2) 100%)',
        }}
      />
     
      <div
        className="absolute top-0 right-0 w-140 h-100 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 0%, rgba(74,222,128,0.09) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-40 md:mt-22 ">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 ">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/12 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-green-300 text-xs font-bold uppercase tracking-widest">
              Careers at Arbarne
            </span>
          </div>
          
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left: founder quote */}
          <div className="mt-2">
            
            <blockquote
              className="text-white font-bold leading-snug mb-8"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)' }}
            >
              The surest path to secure, efficient, and productive farm operations is through{' '}
              <span
                className="italic"
                style={{
                  background: 'linear-gradient(90deg, #4ade80, #2dd4bf)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                technology.
              </span>
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[2rem] bg-teal-800 border-2 border-green-400/30 flex items-center justify-center shrink-0">
                <span
                  className="text-green-400 font-bold text-lg"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  AA
                </span>
              </div>
              <div>
                <div className="text-white font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                  Ms. Amutabi Ayuma
                </div>
                <div className="text-white/65 text-md">Founder & CEO, Arbarne</div>
              </div>
            </div>
          </div>

          {/* Right: vision card */}
          <div className="rounded-[1rem] border border-white/10 bg-white/6 backdrop-blur-md px-8 py-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-5 h-px bg-green-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-400">Our Vision</span>
            </div>
            <p
              className="text-white font-bold leading-snug mb-4"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
            >
              Create{' '}
              <span className="text-green-400">100,000</span>{' '}
              future-ready farms across East Africa by{' '}
              <span className="text-green-400">2035.</span>
            </p>
            <p className="text-white/45 text-lg leading-relaxed">
              Join the team building the technology and systems that will power Africa's
              agricultural future one farm at a time.
            </p>

            {/* Vision stats */}
            <div className="grid grid-cols-3 gap-2 mt-7">
              {[
                { val: '100K', label: 'Target farms' },
                { val: '2035', label: 'Goal year' },
                { val: 'East Africa', label: 'Region' },
              ].map(({ val, label }) => (
                <div key={label} className="rounded-[0.5rem] border border-white/10 bg-white/5 px-3 py-3 text-center">
                  <div
                    className="text-white font-bold text-sm"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {val}
                  </div>
                  <div className="text-white/35 text-[16px] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}
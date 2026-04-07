export default function CompanyHero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">

      {/* Background — African farmland */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1800&auto=format&fit=crop&q=80)',
        }}
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-teal-950/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(2,30,22,0.98) 0%, rgba(2,30,22,0.7) 40%, rgba(2,30,22,0.15) 100%)',
        }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '52px 52px',
        }}
      />

      {/* Green ambient top-left */}
      <div
        className="absolute top-0 left-0 w-150 h-100 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 0%, rgba(74,222,128,0.09) 0%, transparent 65%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 md:mt-22 max-w-7xl mx-auto w-full px-6 pb-20 pt-46">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/12 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-green-300 text-xs font-bold uppercase tracking-widest">
              Arbarne Agriculture Group
            </span>
          </div>
          <div className="h-px w-16 bg-white/10" />
        </div>

        {/* Split layout: headline left, manifesto right */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-end">
          <div>
            <h1
              className="font-bold text-white leading-none mb-8"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(3rem, 7vw, 6rem)' }}
            >
              Our Farms,{' '}
              <span
                className="block"
                style={{
                  background: 'linear-gradient(90deg, #4ade80 0%, #2dd4bf 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Our Future.
              </span>
            </h1>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { val: '2050', label: '2.5B people to feed' },
                { val: 'Africa', label: 'Continent-wide focus' },
                { val: 'LLC', label: 'Kenya-based company' },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="rounded-[1rem] border border-white/10 bg-white/6 backdrop-blur-sm px-5 py-3"
                >
                  <div
                    className="text-white font-bold text-base"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {val}
                  </div>
                  <div className="text-white/55 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: brand statement */}
          <div className="border-l border-white/10 pl-10">
            <p
              className="text-white/75 leading-relaxed mb-6"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
            >
              We are the brand behind{' '}
              <em className="text-green-400 font-bold">"Our Farms, Our Future,"</em>{' '}
              driving the transition toward sustainable, structured, and future-ready agricultural
              systems.
            </p>
            <p className="text-white/45 text-md leading-relaxed">
              As Arbarne, we design and develop technologies and systems that improve production
              efficiency, increase profitability, and accelerate food systems transformation
              across Africa.
            </p>
          </div>
        </div>
      </div>

     
      
    </section>
  )
}
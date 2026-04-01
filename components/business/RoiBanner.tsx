export default function ROIBanner() {
  return (
    <section className="relative overflow-hidden bg-teal-900 py-20">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-125 h-100 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 10% 0%, rgba(74,222,128,0.08) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 right-0 w-100 h-100 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 90% 100%, rgba(45,212,191,0.07) 0%, transparent 60%)' }} />

      {/* Fine grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '+30%', label: 'Average yield increase', color: '#4ade80' },
              { value: '-20%', label: 'Reduction in operational costs', color: '#2dd4bf' },
              { value: '5 min', label: 'Time to get Shambani live', color: '#4ade80' },
              { value: '99.8%', label: 'Platform uptime SLA', color: '#2dd4bf' },
            ].map(({ value, label, color }) => (
              <div key={label} className="rounded-2xl border border-white/8 bg-white/4 px-6 py-6">
                <div
                  className="font-bold leading-none mb-2"
                  style={{ fontFamily: 'Georgia, serif', fontSize: '2.4rem', color }}
                >
                  {value}
                </div>
                <div className="text-white/45 text-xs leading-relaxed">{label}</div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div>
            {/* Large opening quote */}
            <div
              className="font-bold leading-none mb-4 select-none"
              style={{ fontFamily: 'Georgia, serif', fontSize: '5rem', color: 'rgba(74,222,128,0.15)', lineHeight: 1 }}
            >
              "
            </div>
            <blockquote
              className="text-white font-bold leading-relaxed mb-6"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}
            >
              Investment in professional management can increase yields by{' '}
              <span className="text-green-400">30%</span> and reduce operational costs by{' '}
              <span className="text-teal-300">20%.</span>
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-green-500/50" />
              <span className="text-white/40 text-xs uppercase tracking-widest font-bold">
                Shambani Research, 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
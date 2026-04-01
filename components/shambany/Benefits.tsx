const benefits = [
  { n: '01', title: 'Better Decision-Making', body: 'Clear, real-time insights give you the information you need exactly when it matters.' },
  { n: '02', title: 'Higher Productivity', body: 'Optimised daily farm operations mean less waste and more output from every hour of work.' },
  { n: '03', title: 'Reduced Losses & Costs', body: 'Improved monitoring and control catch problems early before they escalate into costly losses.' },
  { n: '04', title: 'Greater Efficiency', body: 'Streamlined processes and digital coordination improve performance across the entire farm system.' },
  { n: '05', title: 'Stronger Profitability', body: 'Data-informed actions drive better results — season after season.' },
  { n: '06', title: 'Confidence & Control', body: 'Know what is happening on your farm, wherever you are, at any time.' },
]

export default function Benefits() {
  return (
    <section className="relative bg-teal-900 overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-0 left-0 w-125h-125 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 20% 0%, rgba(74,222,128,0.07) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 right-0 w-100 h-100 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 100%, rgba(45,212,191,0.06) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">

         <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-6  mb-12 md:mb-20">
          <div >
            <div className="flex items-center gap-3 mb-">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-md font-bold uppercase tracking-[0.2em] text-green-500">Results That Matter</span>
            </div>
            <h2 className="text-white font-bold leading-tight"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}>
              Farms using Shambani <br/>are getting
            </h2>
          </div>
          <p className="text-white/60 text-base leading-relaxed max-w-sm md:text-right">
            Every season, farms across Africa are using Shambani to unlock real operational gains 
            not through guesswork, but through data they can see, understand, and act on.
          </p>
        </div>

        

        
        <div 
         style={{borderRadius:"1rem"}}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-3xl overflow-hidden border border-white/8">
          {benefits.map(({ n, title, body }, i) => (
            <div
              key={n}
              className={`relative px-8 py-10 group transition-colors duration-300 hover:bg-white/5 ${
                i === 0 ? 'lg:col-span-1 bg-green-500/10' : 'bg-transparent'
              }`}
            >
              {/* Large ghost number */}
              <div
                className="absolute top-6 right-8 font-bold leading-none select-none pointer-events-none"
                style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '5rem',
                  color: i === 0 ? 'rgba(74,222,128,0.12)' : 'rgba(255,255,255,0.05)',
                  lineHeight: 1,
                }}
              >
                {n}
              </div>

              {/* Small number */}
              <span className="block text-xs font-bold text-green-500/70 mb-5 tracking-widest">{n}</span>

              <h3 className="text-white font-bold text-xl mb-3 leading-snug pr-12"
                style={{ fontFamily: 'Georgia, serif' }}>
                {title}
              </h3>
              <p className="text-white/60 text-md leading-relaxed">{body}</p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-green-500/0 group-hover:bg-green-500/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
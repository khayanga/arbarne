export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-white">

      {/* Top accent line */}
      <div className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #22c55e 30%, #14b8a6 70%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 py-24">

       <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-green-500" />
            <span className="text-md font-bold uppercase tracking-[0.2em] text-green-600">
              A shambani story
            </span>
            <div className="w-6 h-px bg-green-500" />
          </div>
          
        </div>

        {/* BEFORE — full-width cinematic banner */}
        <div className="relative overflow-hidden mb-6"
          style={{ minHeight: '340px', borderRadius: '1rem' }}>
          <div className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/africa-landscape.jpg)' }}/>
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(2,20,15,0.92) 0%, rgba(2,20,15,0.7) 50%, rgba(2,20,15,0.3) 100%)' }} />

          <div className="relative z-10 flex flex-col justify-end h-full px-10 py-10 min-h-85">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 bg-green-400/10 mb-5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-green-300 text-xs font-bold uppercase tracking-widest">Before Shambani</span>
            </div>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl leading-relaxed"
              style={{ fontFamily: 'Georgia, serif' }}>
              He starts his day walking through the farm, making decisions based on observation and guesswork.
              When problems appear, it's often too late 
              <span className="text-green-300"> losses happen, costs rise, and performance remains uncertain.</span>
            </p>
          </div>
        </div>

        {/* Divider with arrow */}
        <div className="flex items-center justify-center my-10">
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-8 bg-gray-200" />
            <div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center text-white text-lg font-bold"
              style={{ fontFamily: 'Georgia, serif' }}>↓</div>
            <div className="w-px h-8 bg-green-300" />
          </div>
        </div>

        {/* AFTER — two column: pull quote + text */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">

          {/* Left: big italic pull quote on dark bg */}
          <div className="relative  bg-teal-900 overflow-hidden px-10 py-12 flex flex-col justify-between " 
          style={{ borderRadius: '1rem' }}>
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 80% 10%, rgba(74,222,128,0.12) 0%, transparent 65%)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 20% 90%, rgba(45,212,191,0.08) 0%, transparent 65%)' }} />

            {/* Giant quote mark */}
            <div className="text-green-500/20 font-bold leading-none mb-4 select-none"
              style={{ fontSize: '7rem', fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</div>

            <p className="text-white text-2xl md:text-3xl font-bold leading-snug relative z-10"
              style={{ fontFamily: 'Georgia, serif' }}>
              Now imagine knowing what's happening on your farm{' '}
              <span className="text-green-400 italic">before you even step outside.</span>
            </p>

            <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
              <p className="text-white/80 text-lg font-bold mb-1"
                style={{ fontFamily: 'Georgia, serif' }}>That shift changes everything.</p>
              <p className="text-green-400 text-sm font-semibold tracking-wide uppercase">That is Shambani.</p>
            </div>
          </div>

          {/* Right: explanation + after image */}
          <div className="flex flex-col gap-5 ">
            <p className="text-teal-900/65 text-lg md:text-xl leading-relaxed">
              With real-time insights, early alerts, and clear data, every decision becomes informed.
              Problems are prevented, not just managed. The farm runs with clarity, control, and confidence.
            </p>

            {/* After image */}
            <div className="relative rounded-2xl overflow-hidden flex-1" style={{ minHeight: '220px',borderRadius: '1rem' }}>
              <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80)'}} />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(2,44,36,0.85) 0%, transparent 60%)' }} />
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/40 bg-green-500/15 mb-3 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-300 text-xs font-bold uppercase tracking-widest">After Shambani</span>
                </div>
                <p className="text-white/75 text-md max-w-xs leading-relaxed"
                  style={{ fontFamily: 'Georgia, serif' }}>
                  A cloud-based platform that brings access, precision, and coordination to your farm — anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py:32 md:py-42 relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/africa-landscape.jpg)' }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-teal-950/80" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(2,44,36,0.9) 0%, rgba(15,60,50,0.6) 55%, transparent 100%)',
        }}
      />

      {/* Subtle glow */}
      <div
        className="absolute bottom-0 right-0 w-125 h-100 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 80%, rgba(74,222,128,0.12) 0%, transparent 60%)',
        }}
      />

      

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 mt-12 md:mt-20 flex flex-col items-center">

        {/* Eyebrow */}
        <div className="mb-6">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-400/30 bg-green-400/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-xs font-semibold tracking-widest uppercase">
              Live Farm Intelligence
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className="leading-[0.95] font-bold tracking-tight mb-6"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <span className="block text-white/90 text-[clamp(3rem,7vw,6rem)]">
            Karibu
          </span>
          <span
            className="block text-[clamp(3.5rem,9vw,7.5rem)]"
            style={{
              background:
                'linear-gradient(90deg, #4ade80 0%, #34d399 60%, #2dd4bf 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Shambani
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-white/70 max-w-2xl mb-4 leading-relaxed text-xl lg:text-5xl"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          }}
        >
          Monitor, manage, and control your farm operations remotely, in real time.
        </p>

        {/* Supporting lines */}
        <div className="space-y-2 mb-10">
          {[
            'Transforming farm operations through real-time, data-driven intelligence',
            'Creating future-ready farm systems for Africa',
          ].map((text, i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  i === 0 ? 'bg-green-400' : 'bg-teal-400'
                }`}
              />
              <span className="text-white/70 text-md ">{text}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="group rounded-[0.5rem]  inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold  transition-all duration-200 px-8 py-4 shadow-lg shadow-green-900/30"
          >
            Get Started
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 rounded-[0.5rem] transition-all duration-200 px-8 py-4 backdrop-blur-sm"
          >
            See How It Works
          </a>
        </div>
      </div>

      
      
    </section>
  )
}
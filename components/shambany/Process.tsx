import { Database, BarChart3, Lightbulb } from 'lucide-react'

const steps = [
  {
    n: '01',
    icon: Database,
    title: 'Data Collection',
    body: 'Collects and enters farm data in real time from IoT sensors, field inputs, staff logs, and environmental monitors.',
    tag: 'Inputs & Sensors',
    color: 'from-teal-900 to-teal-800',
    accent: '#4ade80',
  },
  {
    n: '02',
    icon: BarChart3,
    title: 'Data Analytics',
    body: 'Organises data, analyses performance, generates actionable insights, and keeps comprehensive digital records automatically.',
    tag: 'Intelligence Engine',
    color: 'from-teal-800 to-green-700',
    accent: '#34d399',
  },
  {
    n: '03',
    icon: Lightbulb,
    title: 'Decision Making',
    body: 'Uses insights to make informed, timely decisions that improve farm outcomes from daily tasks to long-term strategy.',
    tag: 'Farm Outcomes',
    color: 'from-green-700 to-teal-900',
    accent: '#2dd4bf',
  },
]

export default function Process() {
  return (
    <section id="how-it-works" className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">How It Works</span>
            </div>
            <h2 className="font-bold text-teal-900 leading-tight"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              From raw data to<br />
              <span className="text-green-600 ">real results.</span>
            </h2>
          </div>
          <p className="text-teal-900/50 text-md md:text-right leading-relaxed max-w-sm ">
            Three intelligent steps that transform how your farm operates every single day.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-6 relative">

          {steps.map(({ n, icon: Icon, title, body, tag, color, accent }, i) => (
            <div key={n} className="relative group">

              {/* Card */}
              <div className={`bg-linear-to-br ${color} overflow-hidden`} style={{borderRadius:"1rem"}}>
                {/* Inner glow */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 80% 20%, ${accent}14 0%, transparent 55%)` }} />

                {/* Top: step badge + icon */}
                <div className="relative z-10 px-8 pt-8 pb-6 flex items-start justify-between">
                  <div>
                    <span className="block text-[0.65rem] font-bold uppercase tracking-[0.25em] mb-1"
                      style={{ color: `${accent}99` }}>
                      Step
                    </span>
                    <span className="font-bold text-white/20 leading-none select-none"
                      style={{ fontFamily: 'Georgia, serif', fontSize: '4.5rem', lineHeight: 1 }}>
                      {n}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/15"
                    style={{ background: `${accent}20` }}>
                    <Icon size={22} strokeWidth={1.6} style={{ color: accent }} />
                  </div>
                </div>

                {/* Tag pill */}
                <div className="relative z-10 px-8 pb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold"
                    style={{ borderColor: `${accent}40`, color: accent, background: `${accent}12` }}>
                    {tag}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 px-8 pb-10">
                  <h3 className="text-white font-bold text-2xl mb-3"
                    style={{ fontFamily: 'Georgia, serif' }}>
                    {title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                </div>
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
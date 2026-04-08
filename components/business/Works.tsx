
import { ShoppingCart, Cpu, Settings, BarChart3, Users, Zap, FileText, TrendingUp } from 'lucide-react'

const tracks = [
  {
    audience: 'For Farm Managers',
    sub: 'Get Shambani',
    steps: [
      { icon: ShoppingCart, title: 'Purchase or Subscribe', body: 'Choose the Shambani plan that fits your farm management practice — Starter, Professional, or Enterprise.' },
      { icon: Cpu, title: 'Digitize Operations', body: 'Set up your farms, onboard staff, and configure dashboards and sensors with our guided setup.' },
      { icon: Settings, title: 'Manage Farms Efficiently', body: 'Run operations, track inputs, manage teams, and monitor farm health all from one platform.' },
      { icon: BarChart3, title: 'Generate Insights & Reports', body: 'Deliver professional, data-driven performance reports to your farm owner clients.' },
    ],
  },
  {
    audience: 'For Farm Owners',
    sub: 'Hire Shambani',
    steps: [
      { icon: Users, title: 'Hire Shambani', body: 'Select a remote farm management package and we assign an expert farm manager to your property.' },
      { icon: Zap, title: 'Expert Execution', body: 'Your manager handles planning, execution, and day-to-day operations powered by Shambani technology.' },
      { icon: FileText, title: 'Track Performance', body: 'Receive regular reports with clear data on yields, expenses, activities, and outcomes.' },
      { icon: TrendingUp, title: 'Improve Yields & Profitability', body: 'Benefit from data-informed decisions that increase yields and reduce operational costs season after season.' },
    ],
  },
]

export default function Works() {
  return (
    <section className="bg-gray-50 py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-green-500" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              How It Works
            </span>
            <div className="w-6 h-px bg-green-500" />
          </div>
          <h2
            className="font-bold text-teal-900 leading-tight"
            style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
          >
            Your path to a smarter farm.
          </h2>
        </div>

        {/* Tracks */}
        <div className="grid lg:grid-cols-2 gap-6">
          {tracks.map(({ audience, sub, steps }) => (
            <div
              key={audience}
              className="group relative rounded-[1rem] overflow-hidden 
              bg-linear-to-br from-teal-950 via-teal-900 to-green-800"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(74,222,128,0.12),transparent_60%)]" />

              {/* Header */}
              <div className="px-9 pt-9 pb-6 border-b border-white/10 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-400/25 bg-green-500/10 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-green-300">
                    {sub}
                  </span>
                </div>

                <h3
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {audience}
                </h3>
              </div>

              {/* Steps */}
              <div className="px-9 py-7 relative z-10">
                {steps.map(({ icon: Icon, title, body }, i) => (
                  <div key={title} className="flex gap-5 group">
                    
                    {/* Step line */}
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-[2rem] bg-green-500/15 border border-green-400/25 flex items-center justify-center">
                        <Icon size={17} className="text-green-400" />
                      </div>

                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 my-2 bg-green-400/20" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-7">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[12px] font-bold tracking-widest text-green-400/70">
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        <h4
                          className="text-white font-bold text-lg"
                          style={{ fontFamily: 'Georgia, serif' }}
                        >
                          {title}
                        </h4>
                      </div>

                      <p className="text-white/55 text-lg leading-relaxed">
                        {body}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
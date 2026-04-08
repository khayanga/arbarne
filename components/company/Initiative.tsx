


import { Layers, Cpu, TrendingUp, Users, Leaf } from 'lucide-react'

const pillars = [
  { icon: Layers, title: 'Farm Structuring', body: 'Operational systems that organise farms into scalable enterprises.' },
  { icon: Cpu, title: 'Technology Integration', body: 'Real-time data and smart tools embedded into decisions.' },
  { icon: TrendingUp, title: 'Market Development', body: 'Connecting farms to markets and building strong brands.' },
  { icon: Users, title: 'Investor Readiness', body: 'Preparing farms to attract capital and scale.' },
  { icon: Leaf, title: 'Sustainability', body: 'Environmentally aligned systems for long-term resilience.' },
]

export default function Initiative() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-green-500" />
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
              The Future Farms Initiative
            </span>
            <div className="w-6 h-px bg-green-500" />
          </div>
         
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT: BIG STATEMENT */}
          <div>
            <h2
              className="font-bold leading-tight text-teal-900 mb-8"
              style={{
                fontFamily: 'Georgia, serif',
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              }}
            >
              Leading the great transition of{' '}
              <span className="text-green-600 ">
                African agriculture
              </span>{' '}
              into structured, productive, and profitable farm enterprises.
            </h2>

            <p className="text-teal-900/75 max-w-lg leading-relaxed text-lg">
              We are building the systems, knowledge, and infrastructure needed to
              transform agriculture into a modern, investable, and scalable sector.
            </p>
          </div>

          {/* RIGHT: PILLAR STACK */}
          <div className="relative">

            {/* vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-10">
              {pillars.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="relative flex gap-6 group">

                  {/* dot */}
                  <div className="w-10 h-10 rounded-[2rem] bg-green-50 border border-green-100 flex items-center justify-center z-10 group-hover:bg-green-600 transition">
                    <Icon size={18} className="text-green-600 group-hover:text-white" />
                  </div>

                  {/* content */}
                  <div>
                    <p className="text-xs tracking-widest text-gray-400 mb-1">
                      {String(i + 1).padStart(2, '0')}
                    </p>

                    <h3
                      className="font-semibold text-teal-900 text-lg mb-1"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {title}
                    </h3>

                    <p className="text-lg text-teal-900/70 leading-relaxed max-w-md">
                      {body}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
import { Check, ArrowRight, Zap } from 'lucide-react'

const techPlans = [
  {
    name: 'Starter',
    price: 'KES 999',
    period: '/ month',
    desc: 'Basic farm tracking & reporting',
    features: ['Farm activity logbook', 'Basic crop records', 'Staff task management', 'Monthly reports'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Professional',
    price: 'KES 9,999',
    period: '/ month',
    desc: 'Full operations + dashboards + analytics',
    features: ['Everything in Starter', 'Real-time sensor dashboards', 'Advanced analytics & insights', 'Client-ready performance reports', 'Weather & climate integration', 'Priority support'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'Multi-farm management + priority support',
    features: ['Everything in Professional', 'Unlimited farms', 'Dedicated account manager', 'Custom integrations', 'SLA guarantee', 'On-site onboarding'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

const servicePackages = [
  {
    name: 'Basic',
    desc: 'Standard farm management, reporting, and execution',
    features: ['Dedicated farm manager', 'Monthly farm visits', 'Activity & expense reports', 'Crop planning and scheduling'],
  },
  {
    name: 'Advanced',
    desc: 'Technology monitoring + detailed analytics',
    features: ['Everything in Basic', 'Shambani tech integration', 'Real-time monitoring dashboards', 'Bi-weekly detailed analytics', 'Pest & disease alerts'],
  },
  {
    name: 'Premium',
    desc: 'Full-service management + sustainability & efficiency optimization',
    features: ['Everything in Advanced', 'Sustainability optimization', 'Efficiency audits & benchmarking', 'Yield improvement targets', 'Quarterly strategic review'],
  },
]

export default function Pricing() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Tech Plans ── */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-18">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-green-500" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Technology Plans</span>
              </div>
              <h2
                className="font-bold text-teal-900 leading-tight"
                style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
              >
                Farm Management Technology
              </h2>
            </div>
            <div className="text-right">
              <p className="text-teal-900/55 text-lg md:text-right max-w-sm">
                Optional add-ons: Advanced AI insights,<br />
                climate control integration, extra training.
              </p>
              <a href="mailto:Shambani@arbarnegroup.com"
                className="text-sm text-green-600 font-semibold mt-1 inline-block hover:text-green-500 transition-colors">
                Shambani@arbarnegroup.com →
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {techPlans.map(({ name, price, period, desc, features, cta, highlight }) => (
              <div
                key={name}
                className={`relative rounded-[1rem] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  highlight
                    ? 'bg-teal-900 shadow-2xl shadow-teal-900/25'
                    : 'bg-white border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-teal-900/8'
                }`}
              >
                {highlight && (
                  <>
                    <div
                      className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
                      style={{ background: 'radial-gradient(circle at 80% 10%, rgba(74,222,128,0.12) 0%, transparent 60%)' }}
                    />
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30">
                        <Zap size={10} className="text-green-400" />
                        <span className="text-green-300 text-[10px] font-bold uppercase tracking-wider">Most Popular</span>
                      </div>
                    </div>
                  </>
                )}

                <div className="relative z-10 p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3
                      className={`font-bold text-xl mb-1 ${highlight ? 'text-white' : 'text-teal-900'}`}
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {name}
                    </h3>
                    <p className={`text-md mb-5 ${highlight ? 'text-white/50' : 'text-teal-900/45'}`}>{desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`font-bold leading-none ${highlight ? 'text-white' : 'text-teal-900'}`}
                        style={{ fontFamily: 'Georgia, serif', fontSize: price === 'Custom' ? '2rem' : '2.2rem' }}
                      >
                        {price}
                      </span>
                      {period && (
                        <span className={`text-sm ${highlight ? 'text-white/40' : 'text-teal-900/35'}`}>{period}</span>
                      )}
                    </div>
                  </div>

                  <div className={`h-px mb-6 ${highlight ? 'bg-white/10' : 'bg-gray-100'}`} />

                  <ul className="space-y-3 mb-8 flex-1">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          highlight ? 'bg-green-500/20 border border-green-400/25' : 'bg-green-50 border border-green-200'
                        }`}>
                          <Check size={10} className={highlight ? 'text-green-400' : 'text-green-600'} strokeWidth={2.5} />
                        </div>
                        <span className={`text-md leading-relaxed ${highlight ? 'text-white/60' : 'text-teal-900/60'}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="mailto:Shambani@arbarnegroup.com"
                    className={`group inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-[0.5rem] font-bold text-md transition-all duration-200 ${
                      highlight
                        ? 'bg-green-500 hover:bg-green-400 text-white'
                        : 'bg-teal-900 hover:bg-teal-800 text-white'
                    }`}
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {cta}
                    <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Service Packages ── */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-18">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-green-500" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">Management Services</span>
              </div>
              <h2
                className="font-bold text-teal-900 leading-tight"
                style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
              >
                Remote Farm <br/>Management Services
              </h2>
            </div>
            <div className="text-right">
              <p className="text-teal-900/55 text-lg max-w-sm text-left lg:text-right">
                Pricing depends on farm size, crops, and level of tech integration.
              </p>
              <a href="mailto:Shambani@arbarnegroup.com"
                className="text-md text-green-600 font-semibold mt-1 inline-block hover:text-green-500 transition-colors">
                Contact us for custom pricing →
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {servicePackages.map(({ name, desc, features }, i) => (
              <div
                key={name}
                className={`rounded-[1rem] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  i === 1
                    ? 'bg-teal-900 shadow-xl shadow-teal-900/20'
                    : 'bg-white border border-gray-100 hover:border-green-200 hover:shadow-xl hover:shadow-teal-900/8'
                }`}
              >
                {/* Ghost level label */}
                <div
                  className="font-bold leading-none mb-5 select-none"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '3.5rem',
                    color: i === 1 ? 'rgba(74,222,128,0.08)' : 'rgba(15,60,50,0.05)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                <h3
                  className={`font-bold text-xl mb-2 ${i === 1 ? 'text-white' : 'text-teal-900'}`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {name}
                </h3>
                <p className={`text-md leading-relaxed mb-6 ${i === 1 ? 'text-white/50' : 'text-teal-900/50'}`}>
                  {desc}
                </p>

                <div className={`h-px mb-6 ${i === 1 ? 'bg-white/10' : 'bg-gray-100'}`} />

                <ul className="space-y-3 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        i === 1 ? 'bg-green-500/20 border border-green-400/25' : 'bg-green-50 border border-green-200'
                      }`}>
                        <Check size={10} className={i === 1 ? 'text-green-400' : 'text-green-600'} strokeWidth={2.5} />
                      </div>
                      <span className={`text-md leading-relaxed ${i === 1 ? 'text-white/60' : 'text-teal-900/60'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="mailto:Shambani@arbarnegroup.com"
                  className={`group inline-flex items-center rounded-[0.5rem] justify-center gap-2 py-3.5  font-bold text-md transition-all duration-200 ${
                    i === 1
                      ? 'bg-green-500 hover:bg-green-400 text-white'
                      : 'border border-teal-900/15 text-teal-900 hover:bg-teal-50'
                  }`}
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Get Custom Quote
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
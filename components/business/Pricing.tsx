import { Check, ArrowRight, Zap, ShieldCheck } from 'lucide-react'

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
    price: '19,999',
    period: '/month',
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

const standardPackage = [
    "Precision Satellite Monitoring & Health Indexing",
    "Data-Driven Resource & Yield Optimization",
    "Predictive Pest & Weather Early-Warning Systems",
    "Comprehensive Monthly Land Performance Audits",
    "Direct 24/7 Access to Agricultural Specialists"
  ];

export default function Pricing() {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Tech Plans ── */}
        <div className="mb-24">
          <div className="flex flex-col  lg:flex-row lg:items-end lg:justify-between gap-6 mb-18">
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
            <div className="md:text-right">
              <p className="text-teal-900/55 text-lg  max-w-sm">
                Optional add-ons: Advanced AI insights,<br />
                climate control integration, extra training.
              </p>
              <a href="mailto:Shambany@arbarnegroup.com"
                className="text-sm text-green-600 font-semibold mt-1 inline-block hover:text-green-500 transition-colors">
                Shambany@arbarnegroup.com →
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {techPlans.map(({ name, price, period, desc, features, cta, highlight }) => (
              <div
                key={name}
                className={`relative rounded-[1rem] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  highlight
                    ? 'bg-teal-950 shadow-2xl shadow-teal-900/25'
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
            <div className="md:text-right">
              <p className="text-teal-900/55 text-lg max-w-sm text-left lg:text-right">
                Pricing depends on farm size, crops, and level of tech integration.
              </p>
              <a href="mailto:Shambany@arbarnegroup.com"
                className="text-md text-green-600 font-semibold mt-1 inline-block hover:text-green-500 transition-colors">
                Contact us for custom pricing →
              </a>
            </div>
          </div>

         
    <div className="relative rounded-[1rem] flex justify-center items-center py-24 px-4 bg-teal-950 overflow-hidden">

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
  {/* ── Card Wrapper ───────────────────────────── */}
  <div className="relative w-full max-w-xl group">

    {/* Glow border */}
   

    {/* Glass Card */}
    <div className="relative p-8 md:p-12 
      rounded-[0.5rem] border border-white/8 bg-white/4
      shadow-2xl">

      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-green-500 font-bold uppercase tracking-widest text-sm mb-2">
            Recommended Choice
          </h3>
          <h2 className="text-4xl font-extrabold text-white">
            Standard Package
          </h2>
        </div>

        <div className="bg-green-400/10 p-3 rounded-[2rem] border border-green-400/20">
          <ShieldCheck className="w-8 h-8 text-green-500" />
        </div>
      </div>

      {/* Price */}
      <div className="mb-10 pb-10 border-b border-green-500/50">
        <div className="flex items-baseline text-white">
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '4.5rem' }}>
            9,999
          </span>
          <span className="ml-3 text-lg font-medium text-slate-300">
            / ac / month
          </span>
        </div>

        <p className="mt-4 text-slate-300 leading-relaxed">
          Complete land management and precision intelligence for professional-scale operations.
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-5 mb-10">
        {standardPackage.map((item, index) => (
          <li key={index} className="flex items-center text-slate-200">
            <div className="mr-4 shrink-0 bg-teal-400/10 p-1 rounded-full border border-teal-400/20">
              <Check className="w-4 h-4 text-teal-300" strokeWidth={3} />
            </div>
            <span className="text-lg font-medium">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="group relative w-full flex items-center justify-center gap-3 px-8 py-5 
        bg-green-500 hover:bg-green-400 text-white font-bold text-xl rounded-[0.5rem] 
        transition-all duration-300 
        ">

        <span>Activate Package</span>
        <Zap className="w-5 h-5 group-hover:scale-125 transition-transform" />
      </button>

      <p className="text-center mt-6 text-white/60 text-md font-medium">
        No hidden fees • Cancel or scale anytime
      </p>
    </div>
  </div>
</div>
        </div>

      </div>
    </section>
  )
}
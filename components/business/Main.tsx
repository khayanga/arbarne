'use client'
import { useState } from 'react'
import { Check, ArrowRight, Briefcase, User, Star } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'
import CTAButton from '@/components/CTAButton'

const managerFeatures = [
  'Live farm dashboard with all KPIs',
  'Task assignment and staff management',
  'Daily & weekly automated reports',
  'Crop production tracking by block',
  'Input and inventory management',
  'Incident logging and alerts',
  'Weather and environmental data',
  'Remote system control',
]

const ownerFeatures = [
  'Executive summary dashboard',
  'Multi-farm portfolio view',
  'Financial performance overview',
  'Manager activity audit log',
  'Benchmark vs. industry data',
  'Custom KPI targets & tracking',
  'Board-ready reports (PDF)',
  'Priority support line',
]

const plans = [
  {
    name: 'Starter',
    price: 'KES 999',
    period: '/month',
    description: 'Perfect for small farms getting started with digital management.',
    highlight: false,
    features: [
      '1 farm location',
      'Up to 3 users',
      'Basic monitoring dashboard',
      'Environmental sensors (up to 5)',
      'Email alerts',
      'Monthly reports',
      'Community support',
    ],
  },
  {
    name: 'Professional',
    price: 'KES 9,999',
    period: '/month',
    description: 'For growing operations that need full intelligence and control.',
    highlight: true,
    features: [
      'Up to 3 farm locations',
      'Unlimited users',
      'Full analytics dashboard',
      'Unlimited sensors',
      'SMS + push + email alerts',
      'Weekly automated reports',
      'Remote control systems',
      'Priority email & chat support',
      'API access',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large agribusinesses and commercial farm enterprises.',
    highlight: false,
    features: [
      'Unlimited farm locations',
      'Dedicated account manager',
      'Custom integrations',
      'White-label options',
      'On-site onboarding',
      'SLA guarantees',
      'Custom reporting',
      'Board & investor dashboards',
    ],
  },
]

const remotePackages = [
  {
    name: 'Monitoring Package',
    price: 'KES 4,999/mo',
    description: 'Our team monitors your farm 24/7 and escalates any issues to you.',
    includes: ['24/7 sensor monitoring', 'Daily status report', 'Incident escalation', 'Monthly performance review'],
  },
  {
    name: 'Management Package',
    price: 'KES 14,999/mo',
    description: 'Dedicated remote farm manager handles day-to-day operations digitally.',
    includes: ['Dedicated remote manager', 'Staff task coordination', 'Input & inventory planning', 'Weekly owner briefing', 'Crisis response'],
  },
  {
    name: 'Full Operations Package',
    price: 'KES 34,999/mo',
    description: 'End-to-end remote farm operations — from planning to harvest.',
    includes: ['Everything in Management', 'Crop production planning', 'Financial record-keeping', 'Market linkage support', 'Board-level reporting'],
  },
]

export default function BusinessPage() {
  const [tab, setTab] = useState<'managers' | 'owners'>('managers')

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">Business Model</div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-teal-900 mb-5 leading-tight">
            One platform.<br />Two powerful perspectives.
          </h1>
          <p className="text-teal-900/60 text-lg max-w-xl mx-auto">
            Shambani is built for both the people running farms day-to-day and those who own them.
          </p>
        </div>
      </section>

      {/* Tab section */}
      <SectionWrapper>
        {/* Tab toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 gap-1">
            <button
              onClick={() => setTab('managers')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === 'managers' ? 'bg-teal-900 text-white shadow-lg' : 'text-teal-900/60 hover:text-teal-900'
              }`}
            >
              <Briefcase size={16} /> Farm Managers
            </button>
            <button
              onClick={() => setTab('owners')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                tab === 'owners' ? 'bg-teal-900 text-white shadow-lg' : 'text-teal-900/60 hover:text-teal-900'
              }`}
            >
              <User size={16} /> Farm Owners
            </button>
          </div>
        </div>

        {/* Manager content */}
        {tab === 'managers' && (
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 rounded-lg text-xs font-semibold text-teal-700 mb-5">
                <Briefcase size={12} /> For Farm Managers
              </div>
              <h2 className="font-display text-4xl font-bold text-teal-900 mb-5 leading-tight">
                Run a tighter, smarter operation.
              </h2>
              <p className="text-teal-900/60 mb-8 leading-relaxed">
                Shambani gives farm managers a single command centre to oversee crops, staff, inputs, and systems — whether you're on-site or away.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {managerFeatures.map(f => (
                  <div key={f} className="flex items-center gap-3 text-sm text-teal-900">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-green-600" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton href="/shambani" size="md" variant="primary">
                  Start Free Trial <ArrowRight size={16} />
                </CTAButton>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Morning Farm Brief', sub: 'Auto-generated daily summary every 6AM with overnight events, alerts, and today\'s tasks.' },
                { title: 'Live Block View', sub: 'See every production block on one screen — soil, crop stage, last activity, and next actions.' },
                { title: 'Staff Task Board', sub: 'Assign, track, and confirm tasks for field staff. No more WhatsApp chaos.' },
              ].map(card => (
                <div key={card.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 card-hover">
                  <h4 className="font-semibold text-teal-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-teal-900/55 leading-relaxed">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Owner content */}
        {tab === 'owners' && (
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 rounded-lg text-xs font-semibold text-teal-700 mb-5">
                <User size={12} /> For Farm Owners
              </div>
              <h2 className="font-display text-4xl font-bold text-teal-900 mb-5 leading-tight">
                Your farm, fully visible. Always.
              </h2>
              <p className="text-teal-900/60 mb-8 leading-relaxed">
                Whether you visit once a week or once a year, Shambani keeps you informed and in control of your investment — from anywhere in the world.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ownerFeatures.map(f => (
                  <div key={f} className="flex items-center gap-3 text-sm text-teal-900">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-green-600" />
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton href="/business#pricing" size="md" variant="primary">
                  View Plans <ArrowRight size={16} />
                </CTAButton>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: 'Investor-Grade Dashboard', sub: 'A clean executive view of all key farm performance indicators — production, costs, and ROI.' },
                { title: 'Manager Accountability', sub: 'See exactly what your managers are doing, what\'s been flagged, and what\'s been resolved.' },
                { title: 'Performance Benchmarks', sub: 'Compare your farm\'s performance against regional and national averages in your crop category.' },
              ].map(card => (
                <div key={card.title} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 card-hover">
                  <h4 className="font-semibold text-teal-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-teal-900/55 leading-relaxed">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper id="pricing" className="bg-gray-50">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">Pricing</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 mb-4">Simple, transparent pricing.</h2>
          <p className="text-teal-900/60 max-w-md mx-auto">All plans include a 14-day free trial. No credit card required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map(plan => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border relative ${
                plan.highlight
                  ? 'bg-teal-900 text-white border-teal-700 shadow-2xl shadow-teal-900/30 scale-105'
                  : 'bg-white text-teal-900 border-gray-100'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-green-500 rounded-full text-xs font-semibold text-white">
                  <Star size={11} fill="currentColor" /> Most Popular
                </div>
              )}
              <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-teal-900'}`}>{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className={`font-display text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-teal-900'}`}>{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? 'text-white/50' : 'text-teal-900/40'}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-7 ${plan.highlight ? 'text-white/60' : 'text-teal-900/55'}`}>{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-green-400' : 'text-green-500'}`} />
                    <span className={plan.highlight ? 'text-white/80' : 'text-teal-900/70'}>{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                plan.highlight
                  ? 'bg-green-500 text-white hover:bg-green-400'
                  : plan.name === 'Enterprise'
                    ? 'bg-gray-100 text-teal-900 hover:bg-gray-200'
                    : 'bg-teal-900 text-white hover:bg-teal-800'
              }`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started Free'}
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Remote packages */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">Remote Services</div>
          <h2 className="font-display text-4xl font-bold text-teal-900 mb-4">
            Don't have a farm manager? We'll be yours.
          </h2>
          <p className="text-teal-900/60 max-w-xl mx-auto">
            Arbarne's professional remote farm management services plug directly into Shambani — giving your farm expert oversight without the overhead.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {remotePackages.map(pkg => (
            <div key={pkg.name} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 card-hover">
              <h3 className="font-display text-xl font-bold text-teal-900 mb-1">{pkg.name}</h3>
              <div className="text-green-600 font-semibold text-sm mb-4">{pkg.price}</div>
              <p className="text-sm text-teal-900/55 mb-6 leading-relaxed">{pkg.description}</p>
              <ul className="space-y-2.5">
                {pkg.includes.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-teal-900">
                    <Check size={14} className="text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="mt-7 w-full py-2.5 border-2 border-teal-900 text-teal-900 font-semibold text-sm rounded-xl hover:bg-teal-900 hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
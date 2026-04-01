import type { Metadata } from 'next'
import { Globe, Zap, Shield, Users, TrendingUp, ArrowRight, Building, Leaf } from 'lucide-react'
import SectionWrapper from '@/components/SectionWrapper'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Company — Arbarne Agriculture Group',
  description: 'Arbarne Agriculture Group is Africa\'s leading agritech company, transforming farm enterprises through technology, intelligence, and professional services.',
}

const pillars = [
  {
    icon: <Zap size={22} />,
    title: 'Technology',
    description: 'Shambani — our farm intelligence platform — is the technology backbone of every farm we work with.',
  },
  {
    icon: <Users size={22} />,
    title: 'Partnerships',
    description: 'We collaborate with agro-dealers, financial institutions, research bodies, and government agencies to amplify our reach.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Innovation',
    description: 'Our R&D team continuously develops new sensors, algorithms, and features that push the frontier of farm intelligence.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Advocacy',
    description: 'We work with policymakers and industry groups to create an enabling environment for digital agriculture across Africa.',
  },
]

const structure = [
  {
    division: 'Shambani Technology',
    description: 'Product engineering, data science, and platform development.',
    icon: '⚡',
  },
  {
    division: 'Farm Services',
    description: 'Remote farm management, agronomist network, and field operations.',
    icon: '🌱',
  },
  {
    division: 'Future Farms Initiative',
    description: 'Research, training, and the 100K farms transformation program.',
    icon: '🔭',
  },
  {
    division: 'Partnerships & Advocacy',
    description: 'Strategic alliances, policy engagement, and ecosystem development.',
    icon: '🤝',
  },
]

export default function CompanyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-20 bg-teal-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 hero-grid opacity-10" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-400 mb-6">About Arbarne</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our Farms.<br />
            <span className="text-green-400">Our Future.</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Arbarne Agriculture Group is building the infrastructure for Africa's agricultural transformation — one farm, one insight, one decision at a time.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">Who We Are</div>
            <h2 className="font-display text-4xl font-bold text-teal-900 mb-6 leading-tight">
              An agritech company on a continental mission.
            </h2>
            <div className="space-y-4 text-teal-900/60 leading-relaxed">
              <p>
                Arbarne Agriculture Group is a Kenya-based agritech company transforming how African farms are managed, optimized, and grown. We combine world-class technology with deep agricultural expertise to build systems that make farms smarter, more efficient, and more profitable.
              </p>
              <p>
                Our primary product, Shambani, is a cloud-based farm intelligence platform used by farm managers and owners across East Africa. Through Shambani and our farm services division, we provide the tools, data, and expertise that modern farms need to thrive.
              </p>
              <p>
                Founded in Nairobi, we operate at the intersection of climate resilience, food security, and agricultural technology — with a singular focus on Africa.
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-4">
            {[
              { label: 'Founded', value: '2021' },
              { label: 'Headquarters', value: 'Nairobi, Kenya' },
              { label: 'Active Markets', value: 'Kenya · Uganda · Tanzania' },
              { label: 'Farms on Platform', value: '2,000+ and growing' },
              { label: 'Focus', value: 'Agritech · Farm Intelligence · Remote Management' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-sm text-teal-900/50 font-medium">{item.label}</span>
                <span className="text-sm text-teal-900 font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Company Structure */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">Company Structure</div>
          <h2 className="font-display text-4xl font-bold text-teal-900 mb-4">Four divisions. One mission.</h2>
          <p className="text-teal-900/60 max-w-lg mx-auto">Each division operates with its own focus while feeding into Arbarne's broader transformation agenda.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {structure.map(div => (
            <div key={div.division} className="p-7 bg-white rounded-2xl border border-gray-100 card-hover text-center">
              <div className="text-4xl mb-4">{div.icon}</div>
              <h3 className="font-semibold text-teal-900 mb-3 text-sm leading-tight">{div.division}</h3>
              <p className="text-xs text-teal-900/55 leading-relaxed">{div.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Future Farms Initiative */}
      <SectionWrapper>
        <div className="rounded-3xl bg-linear-to-br from-teal-900 to-teal-800 overflow-hidden p-10 md:p-16 relative">
          <div className="absolute inset-0 hero-grid opacity-10" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-full text-xs font-semibold text-green-400 mb-6 border border-green-500/30">
                🔭 Future Farms Initiative
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                100,000 future-ready farms by 2035.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                The Future Farms Initiative is Arbarne's flagship transformation program — a systematic effort to get 100,000 African farms onto modern, data-driven management systems within a decade.
              </p>
              <CTAButton href="/careers" size="md" variant="ghost">
                Join the Initiative <ArrowRight size={16} />
              </CTAButton>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2,000+', label: 'Farms enrolled today' },
                { value: '2035', label: 'Target year' },
                { value: '100K', label: 'Farm target' },
                { value: '5', label: 'African markets' },
              ].map(stat => (
                <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <div className="font-display text-3xl font-bold text-green-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Pillars */}
      <SectionWrapper className="bg-gray-50">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">How We Work</div>
          <h2 className="font-display text-4xl font-bold text-teal-900 mb-4">Built on four strong pillars.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div key={p.title} className={`p-7 rounded-2xl border card-hover ${i === 0 ? 'bg-teal-900 border-teal-800 text-white' : 'bg-white border-gray-100'}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${i === 0 ? 'bg-white/10 text-green-400' : 'bg-teal-50 text-teal-700'}`}>
                {p.icon}
              </div>
              <h3 className={`font-semibold mb-2 ${i === 0 ? 'text-white' : 'text-teal-900'}`}>{p.title}</h3>
              <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/60' : 'text-teal-900/60'}`}>{p.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Partners */}
      <SectionWrapper>
        <div className="text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-green-600 mb-4">Partners & Networks</div>
          <h2 className="font-display text-3xl font-bold text-teal-900 mb-3">We don't build alone.</h2>
          <p className="text-teal-900/60 max-w-md mx-auto text-sm">Arbarne works with leading organizations across finance, research, and agribusiness.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {['Ministry of Agriculture', 'AGRA', 'Kenya Climate Innovation Center', 'East Africa Agribusiness Network', 'FAO Kenya', 'local Agro-Dealers'].map(p => (
            <span key={p} className="px-5 py-2.5 rounded-full bg-teal-50 border border-teal-100 text-sm font-medium text-teal-800">
              {p}
            </span>
          ))}
        </div>
      </SectionWrapper>
    </div>
  )
}
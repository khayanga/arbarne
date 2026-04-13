import { ArrowRight, Briefcase, MapPin, Clock, Users } from 'lucide-react'

const roles = [
  {
    title: 'Digital Sales Agent',
    openings: 2,
    type: 'Full-time',
    location: 'Kenya',
    dept: 'Sales & Growth',
    desc: 'Drive Shambany adoption by engaging farm managers and farm owners across Kenya. You will demo the platform, onboard new clients, and build lasting relationships that grow the Arbarne ecosystem.',
    tags: ['Sales', 'AgriTech', 'Client Relations', 'Field-based'],
    applyLink: 'https://forms.gle/T9Njtpi91b4GVskt7',
    featured: true,
  },

  
]

export default function OpenRoles() {
  return (
    <section className="relative bg-white py-28 overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(20,83,45,0.07) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        

        {/* Header */}
        <div className="flex flex-col  md:flex-row md:justify-between gap-8 items-center mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Join Us — Careers
              </span>
            </div>
            <h2
              className="font-bold text-teal-900 leading-tight"
              style={{ fontFamily: 'Georgia', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              We are hiring.
            </h2>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-green-200 bg-green-50">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-700 text-md font-bold">
              {roles.reduce((a, r) => a + r.openings, 0)} open position{roles.reduce((a, r) => a + r.openings, 0) > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Role cards */}
        <div className="space-y-4">
          {roles.map(({ title, openings, type, location, dept, desc, tags, applyLink, featured }) => (
            <div
              key={title}
              className={`relative rounded-[1rem] overflow-hidden ${
                featured ? 'bg-teal-900' : 'bg-white border border-gray-100'
              }`}
            >
              {featured && (
                <>
                  {/* Glow */}
                  <div
                    className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at 80% 10%, rgba(74,222,128,0.1) 0%, transparent 60%)',
                    }}
                  />
                  {/* Fine grid */}
                  <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                      backgroundSize: '36px 36px',
                    }}
                  />
                </>
              )}

              <div className="relative z-10 p-8 md:p-10">
                <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">

                  {/* Left: job info */}
                  <div>
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <div
                        className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-sm font-bold uppercase tracking-wider ${
                          featured
                            ? 'border-green-400/30 bg-green-500/15 text-green-300'
                            : 'border-green-200 bg-green-50 text-green-700'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                            featured ? 'bg-green-400' : 'bg-green-500'
                          }`}
                        />
                        Now Hiring
                      </div>

                      {[
                        { icon: Users, label: `${openings} position${openings > 1 ? 's' : ''}` },
                        { icon: Clock, label: type },
                        { icon: MapPin, label: location },
                        { icon: Briefcase, label: dept },
                      ].map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className={`flex items-center gap-1.5 text-md font-medium ${
                            featured ? 'text-white/55' : 'text-teal-900/45'
                          }`}
                        >
                          <Icon size={12} strokeWidth={1.8} />
                          {label}
                        </div>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-bold leading-snug mb-4 ${featured ? 'text-white' : 'text-teal-900'}`}
                      style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)' }}
                    >
                      {title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-lg leading-relaxed max-w-2xl mb-6 ${
                        featured ? 'text-white/65' : 'text-teal-900/55'
                      }`}
                    >
                      {desc}
                    </p>

                    
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
                            featured
                              ? 'border-white/12 bg-white/6 text-white/50'
                              : 'border-gray-100 bg-white text-teal-900/50'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-45">
                    <a
                      href={applyLink}
                      target="_blank"
                       rel="noopener noreferrer"
                      className={`group inline-flex items-center gap-2.5 px-7 py-4 rounded-[0.5rem] font-bold text-md transition-all duration-200 whitespace-nowrap ${
                        featured
                          ? 'bg-green-500 hover:bg-green-400 text-white shadow-lg shadow-green-500/25'
                          : 'bg-teal-900 hover:bg-teal-800 text-white'
                      }`}
                      style={{ fontFamily: 'Georgia' }}
                    >
                      Click to Apply
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-0.5 transition-transform duration-200"
                      />
                    </a>

                    <p
                      className={`text-md text-center lg:text-right ${
                        featured ? 'text-white/50' : 'text-teal-900/30'
                      }`}
                    >
                      {openings} open position{openings > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

import { Sprout } from 'lucide-react'

export default function GuidesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white border-b border-gray-100">

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(20,83,45,0.1) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Radial green glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-160 h-90 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(167,243,208,0.4) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 md:pt-24  pb-8 text-center">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-200 bg-green-50 text-green-700 text-sm font-semibold uppercase tracking-widest mb-6">
          <Sprout size={12} />
          Guides &amp; Resources
        </div>

        {/* Heading — Georgia serif */}
        <h1
          className="text-5xl md:text-6xl font-bold text-teal-900 mb-6 leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Guides &amp; Resources for{' '}
          <span className="bg-linear-to-br from-teal-900 via-emerald-500 to-green-400 bg-clip-text text-transparent">Integrating Technology</span>
          <br />
          into your Farm
        </h1>

        {/* Subtext */}
        <p className="text-teal-900/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Practical, free guides for African farm managers and owners ready to
          make smarter decisions through digital tools.
        </p>

        
      </div>
    </section>
  )
}
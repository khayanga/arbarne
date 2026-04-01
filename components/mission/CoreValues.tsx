type Value = {
  number: string
  title: string
  body: string
  image: string
  accent: string
  keyword: string
  wide?: boolean
}

const values: Value[] = [
  {
    number: '01',
    title: 'Co-creation',
    body: 'We design solutions with farmers, communities, and partners ensuring ownership, cultural fit, and shared value.',
    image: '/sheep.jpg',
    accent: '#4ade80',
    keyword: 'With farmers,\nnot for them.',
    wide: true,
  },
  {
    number: '02',
    title: 'Adaptability',
    body: "We tailor innovations to local realities, integrating smart technologies to thrive in Africa's diverse climates and economies.",
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=700&auto=format&fit=crop&q=80',
    accent: '#34d399',
    keyword: 'Local first.',
  },
  {
    number: '03',
    title: 'Transformation',
    body: 'We drive lasting change in agriculture by uniting technology and innovation to create climate-smart, inclusive food systems.',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=700&auto=format&fit=crop&q=80',
    accent: '#2dd4bf',
    keyword: 'Lasting\nchange.',
  },
  {
    number: '04',
    title: 'Innovation',
    body: 'We explore emerging technologies and data-driven approaches, co-creating with farmers and stakeholders to deliver scalable solutions.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&auto=format&fit=crop&q=80',
    accent: '#86efac',
    keyword: 'Practical\nscalable.',
    wide: true,
  },
  {
    number: '05',
    title: 'Advocacy',
    body: 'We champion sustainable practices, inclusive growth, and enabling policies while amplifying farmer voices.',
    image: '/africa-landscape.jpg',
    accent: '#5eead4',
    keyword: 'Farmer\nvoices first.',
    wide: true,
  },
]

export default function CoreValues() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Core Values
              </span>
            </div>

            <h2
              className="font-bold text-teal-900 leading-tight"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              The principles that drive<br />
              <span className="text-green-600 ">everything we do.</span>
            </h2>
          </div>

          <p className="text-teal-900/65 text-md md:text-right leading-relaxed max-w-xs">
            Five values that shape how we think, build, and serve farmers across Africa.
          </p>
        </div>

        {/* Layout */}
        <div className="space-y-6 lg:space-y-8">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr] gap-5">
            <ValueCard {...values[0]} tall />
            <ValueCard {...values[1]} tall />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_1.4fr] gap-5">
            <ValueCard {...values[2]} tall />
            <ValueCard {...values[3]} tall />
          </div>

          {/* Row 3 */}
          <AdvocacyCard {...values[4]} />

        </div>
      </div>
    </section>
  )
}

/* ── Value Card ── */
function ValueCard({
  number,
  title,
  body,
  image,
  accent,
  keyword,
  tall,
}: Value & { tall?: boolean }) {
  return (
    <div
      className="group relative rounded-[1rem] overflow-hidden"
      style={{ minHeight: tall ? '420px' : '360px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-teal-950/50" />
      <div className="absolute inset-0 bg-linear-to-t from-[#021a12]/95 via-[#021a12]/60 to-transparent" />

      {/* Accent glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 opacity-0 group-hover:opacity-100 transition"
        style={{ background: `linear-gradient(to top, ${accent}22, transparent)` }}
      />

      {/* Content */}
      <div className="relative z-10 h-full p-8 flex flex-col justify-between">

        {/* Top */}
        <div className="flex justify-between items-start">
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: `${accent}aa` }}
          >
            {number}
          </span>

          <div
            className="text-right font-bold text-white/10"
            style={{ fontFamily: 'Georgia, serif', fontSize: '2.2rem' }}
          >
            {keyword.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              borderColor: `${accent}55`,
              background: `${accent}22`,
              color: accent,
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent }} />
            {title}
          </div>

          <h3
            className="text-white font-bold text-xl mb-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {title}
          </h3>

          <p className="text-white/60 text-md leading-relaxed">
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}

/* ── Advocacy Card ── */
function AdvocacyCard({ number, title, body, image, accent }: Value) {
  return (
    <div className="relative rounded-[1rem] overflow-hidden min-h-70 group">

      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#021a12]/95 via-[#021a12]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-10 flex flex-col items-start gap-4 ">

        <div className="lg:w-80 ">
          <span
            className="block text-sm font-bold tracking-widest uppercase mb-3"
            style={{ color: `${accent}aa` }}
          >
            {number}
          </span>

          
        </div>

        <div className="hidden lg:block w-px bg-white/10" />
        <h3
            className="text-white text-2xl font-bold "
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {title}
          </h3>

        <p className="text-white/60 text-md leading-relaxed max-w-2xl">
          {body}
        </p>
      </div>
    </div>
  )
}
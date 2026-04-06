export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-white">

      {/* Top gradient line */}
      <div
        className="h-1 w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, #22c55e 30%, #14b8a6 70%, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-sm font-bold tracking-[0.25em] text-green-600 uppercase mb-4">
            A Shambani Story
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-teal-900"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            From Guesswork To Precision
          </h2>
        </div>

        {/* Timeline layout */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-green-300 to-transparent hidden lg:block" />

          {/* BEFORE */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

            {/* Left (text) */}
            <div className="lg:pr-16">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-green-600 bg-green-100 rounded-full">
                Before Shambani
              </div>

              <h3
                className="text-2xl md:text-3xl font-bold text-teal-900 mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Farming in the dark
              </h3>

              <p className="text-teal-900/70 text-lg leading-relaxed">
                Each day begins with observation and instinct. Decisions are made
                without clear data. Problems are discovered too late when damage
                is already done.
              </p>

              <p className="text-teal-900/70 text-lg leading-relaxed mt-4">
                Losses increase, costs rise, and performance remains uncertain.
              </p>
            </div>

            {/* Right (image card stacked) */}
            <div className="relative">
              
              <div className="relative rounded-[0.5rem] overflow-hidden shadow-xl">
                <div
                  className="h-80 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/africa-landscape.jpg)' }}
                />
                {/* <div className="absolute inset-0 bg-black/40" /> */}
              </div>
            </div>
          </div>

          {/* AFTER */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            
            <div className="relative order-2 lg:order-1">
         
              <div className="relative rounded-2xl overflow-hidden ">
                <div
                  className="h-80 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url(/dashboard.png)',
                  }}
                />
                
              </div>
            </div>

            {/* Right */}
            <div className="lg:pl-16 order-1 lg:order-2">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest text-white bg-teal-900 rounded-full">
                After Shambani
              </div>

              <h3
                className="text-2xl md:text-3xl font-bold text-teal-900 mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Farming with clarity
              </h3>

              <p className="text-teal-900/70 text-lg leading-relaxed">
                Real-time insights replace guesswork. Early alerts prevent
                problems before they escalate. Every decision is backed by clear,
                reliable data.
              </p>

              <p className="text-teal-900/70 text-lg leading-relaxed mt-4">
                The farm becomes efficient, predictable, and fully under control.
              </p>

              {/* Highlight card */}
              <div className="mt-10 p-6 rounded-[1rem] bg-teal-900 text-white">
                <p
                  className="text-xl font-bold leading-snug"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  “Know what’s happening on your farm before you even step
                  outside.”
                </p>
                <p className="text-green-400 text-sm mt-3 uppercase tracking-wide">
                  That is Shambani.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
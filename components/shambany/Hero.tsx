export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background — African farmland */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/africa-landscape.jpg)",
        }}
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-teal-950/60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(2,30,22,0.98) 0%, rgba(2,30,22,0.7) 40%, rgba(2,30,22,0.15) 100%)",
        }}
      />

      {/* Green ambient top-left */}
      <div
        className="absolute top-0 left-0 w-150 h-100 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 0%, rgba(74,222,128,0.09) 0%, transparent 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-20 pt-46 md:mt-22">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/12 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-green-300 text-xs font-bold uppercase tracking-widest">
              Live farm intelligence
            </span>
          </div>
          {/* <div className="h-px w-16 bg-white/10" /> */}
        </div>

        {/* Split layout: headline left, manifesto right */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-end">
          <div>
            <h1
              className="font-bold text-white leading-none mb-12"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 6rem)",
              }}
            >
              Karibu,{" "}
              <span
                className="block pb-2"
                style={{
                  background:
                    "linear-gradient(90deg, #4ade80 0%, #2dd4bf 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Shambany.
              </span>
            </h1>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3">
              {[
                { val: "Real-Time", label: "Farm Monitoring" },
                { val: "Africa", label: "Continent-wide focus" },
                { val: "Data-Driven", label: "Decision Making" },
              ].map(({ val, label }) => (
                <div
                  key={label}
                  className="rounded-[1rem] border border-white/10 bg-white/6 backdrop-blur-sm px-5 py-3"
                >
                  <div
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {val}
                  </div>
                  <div className="text-white/55 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: brand statement */}
          <div className="border-l border-white/10 pl-10">
            <p
              className="text-white/80 leading-relaxed"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
              }}
            >
              We are building the next generation of African agriculture where
              every farm operates with clarity, precision, and purpose.
            </p>

            <p className="text-white/70 leading-relaxed">
              Through intelligent systems and connected technologies, we enable
              farmers to move beyond guesswork into structured, market-ready
              production improving productivity, increasing profitability, and
              transforming food systems across the continent.
            </p>

            <p className="text-green-400 font-semibold tracking-wide mt-1">
              This is the great transition a shift toward future-ready farms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

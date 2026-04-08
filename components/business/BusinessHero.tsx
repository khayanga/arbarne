export default function BusinessHero() {
  return (

    <main data-navbar="light" className="bg-white">
      <section  className="relative pt-32 pb-24 overflow-hidden bg-white">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(20,83,45,0.09) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(134,239,172,0.28) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:pt-24">
        <div className="max-w-4xl mx-auto">
          
          <h1
            className="font-bold text-teal-900 leading-tight text-center mb-6"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            }}
          >
            Transform your Farm Business
            <br />
            With{" "}
            <span
              className="block pb-2 bg-linear-to-br from-teal-900 via-emerald-500 to-green-400 bg-clip-text text-transparent tracking-tight">
            
              Cutting-edge
            </span>{" "}
            Farm Technology
          </h1>

          <p
            className="text-teal-900/55 leading-relaxed max-w-2xl mx-auto mb-14"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)" }}
          >
            We provide farm managers with smart technology tools to optimize
            farm operations and deliver professional farm management services to
            farm owners seeking efficiency, profitability, and sustainability.
          </p>

          {/* Audience cards */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto mt-6">
            {[
              {
                label: "For Farm Managers",
                desc: "Digitize your practice with end-to-end operations software and real-time monitoring dashboards.",
              },
              {
                label: "For Farm Owners",
                desc: "Hire professional farm managers powered by Shambani to run your farm with precision and transparency.",
              },
            ].map(({ label, desc }, i) => (
              <div
              style={{borderRadius:'1rem'}}
                key={label}
                className="group relative rounded-2xl px-7 py-7 overflow-hidden cursor-pointer 
                 bg-linear-to-br from-teal-950 via-teal-900 to-green-800
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                 flex flex-col items-center justify-center text-center min-h-45"
    >
              
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.15),transparent_60%)]" />

                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-400/30 bg-green-500/15 text-green-300 text-xs font-bold tracking-widest uppercase mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {label}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/60">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    </main>
    
  );
}

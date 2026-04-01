import { Globe, Lightbulb, Megaphone, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Future Setting",
    body: "Defining the vision and standards for future-ready farm systems across the continent.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Developing practical technologies and scalable solutions that work in real African farm conditions.",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    body: "Promoting sustainable, inclusive, and market-aligned agricultural systems at every level.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    body: "Collaborating with organisations that share the goal of building future-ready farms across Africa.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ── Founding story ── */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center mb-28">
          {/* Left: belief + story */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-md font-bold uppercase tracking-[0.2em] text-green-600">
                About Us
              </span>
            </div>

            {/* Pull quote */}

            <h1 className=" text-4xl mb-2 font-bold text-teal-900 leading-snug">
              Africa's future lies in the hands of its farmers.
            </h1>

            <p className="text-teal-900/65 text-base leading-relaxed mb-4">
              Arbarne was founded on this simple belief. With the continent's
              population projected to reach{" "}
              <strong className="text-teal-900 font-semibold">
                2.5 billion by 2050,
              </strong>{" "}
              agriculture must evolve to meet rising food demand and support
              sustainable livelihoods.
            </p>
            <p className="text-teal-900/65 text-base leading-relaxed mb-4">
              Yet today, many farmers operate within inefficient systems that
              lead to low yields, high costs, and environmental strain
              challenges further intensified by climate change.
            </p>
            <p className="text-teal-900/75 text-base leading-relaxed font-medium">
              We exist to transform these systems, enabling farms to become{" "}
              <span className="text-green-700">productive, resilient,</span> and
              ready for the future.
            </p>
          </div>

          {/* Right: photo card */}
          <div className="relative">
            {/* Decorative offset block */}
            <div className="absolute -top-5 -right-5 w-full h-full rounded-3xl bg-green-50 border border-green-100 pointer-events-none" />

            <div
              className="relative rounded-[1rem] overflow-hidden"
              style={{ minHeight: "480px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=900&auto=format&fit=crop&q=80)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(2,44,36,0.85) 0%, rgba(2,44,36,0.3) 55%, transparent 100%)",
                }}
              />

              {/* Floating fact */}
              <div className="absolute bottom-7 left-7 right-7 z-10">
                <div className="rounded-[0.5rem] border border-white/15 bg-white/10 backdrop-blur-md px-6 py-5">
                  <div
                    className="text-white font-bold text-3xl mb-1"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    2.5B
                  </div>
                  <div className="text-white/65 text-md">
                    Africa must produce at least 30% more food by 2050 to feed its population.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Company Structure ── */}
        <div className="relative rounded-[1rem] bg-teal-900 overflow-hidden px-10 py-14">
          {/* Ambient glows */}
          <div
            className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 80% 10%, rgba(74,222,128,0.1) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 10% 90%, rgba(45,212,191,0.07) 0%, transparent 60%)",
            }}
          />
          {/* Fine grid */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 items-start mb-12">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-px bg-green-400" />
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-400">
                    Company Structure
                  </span>
                </div>
                <h2
                  className="font-bold text-white leading-tight"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  }}
                >
                  The engine behind
                  <br />
                  <span className="text-green-400 ">
                    agricultural transformation.
                  </span>
                </h2>
              </div>
              <p className="text-white/55 text-base leading-relaxed self-center max-w-md text-right">
                Arbarne is a limited liability company (LLC) driving the
                development of farm technologies and systems. It serves as the
                core engine behind both technology development and the Future
                Farms Initiative advancing transformation through four
                strategic pillars.
              </p>
            </div>

            {/* Pillars grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className="rounded-[0.5rem] border border-white/8 bg-white/4 px-6 py-7 hover:bg-white/7 transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 rounded-[2rem] bg-green-500/15 border border-green-400/20 flex items-center justify-center text-green-400 mb-5 group-hover:bg-green-500/25 transition-colors duration-200">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>
                  
                  <h3
                    className="text-white font-bold text-base mb-2"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-white/65 text-md leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

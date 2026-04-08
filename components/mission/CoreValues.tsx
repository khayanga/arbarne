
import { Sprout, Sparkles, Lightbulb, Megaphone,Users } from "lucide-react";


const pillars = [
   {
    number: "01",
    title: "Co-creation",
    body: "We design solutions with farmers, communities, and partners ensuring ownership, cultural fit, and shared value.",
    icon: Users,
  },
  {
    number: "02",
    title: "Adaptability",
    body: "We tailor innovations to local realities, integrating smart technologies to thrive in Africa's diverse climates and economies.",
    icon: Sprout,
  },
  {
    number: "03",
    title: "Transformation",
    body: "We drive lasting change in agriculture by uniting technology and innovation to create climate-smart, inclusive food systems.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Innovation",
    body: "We explore emerging technologies and data-driven approaches, co-creating with farmers and stakeholders to deliver scalable solutions.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Advocacy",
    body: "We champion sustainable practices, inclusive growth, and enabling policies while amplifying farmer voices.",
    icon: Megaphone,
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Label */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-12">
          <div className="w-6 h-px bg-emerald-500" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-600">
            Our Core Principles
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT: BIG STATEMENT */}
          <div>
            <h2
              className="font-bold leading-tight text-teal-900 mb-8"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              }}
            >
              The principles that guide {" "}
              <span className="text-green-600 ">everything</span> we build.
            </h2>

            <p className="text-teal-900/75 max-w-lg leading-relaxed text-lg">
               Rooted in community and driven by data, our values ensure every
              innovation serves the person behind the plow and drives lasting
              impact.
            </p>
          </div>

          {/* RIGHT: PILLAR STACK */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-10">
              {pillars.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="relative flex gap-6 group">
                  {/* dot */}
                  <div className="w-10 h-10 rounded-[2rem] bg-green-50 border border-green-100 flex items-center justify-center z-10 group-hover:bg-green-600 transition">
                    <Icon
                      size={18}
                      className="text-green-600 group-hover:text-white"
                    />
                  </div>

                  {/* content */}
                  <div>
                    <p className="text-xs tracking-widest text-gray-400 mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </p>

                    <h3
                      className="font-semibold text-teal-900 text-lg mb-1"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {title}
                    </h3>

                    <p className="text-lg text-teal-900/70 leading-relaxed max-w-md">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
}

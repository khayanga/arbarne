import { Package, Users, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const team = [
  {
    name: "Virgil Khayanga",
    role: "Head of Technology & Digital Transformation",
    dept: "Shambani",
    bio: "Leads product strategy and development for digital farm monitoring solutions.",
    image: "/virgil.jpg",
    icon: Package,
    color: "#4ade80",
    linkedin: "https://www.linkedin.com/in/virgil-khayanga-113b18262/",
  },
  {
    name:"Lydia Kiswii",
    role:"Head of Programs",
    bio:"Leads the delivery of transformative programs empowering farmers with technology and expertise.",
    image:"/lydia.jpg",
    icon: Package,
    color: "#4ade80",
    linkedin:"https://www.linkedin.com/in/lydhia-kiswii-msc-613b29131/"
  },
  {
    name: "Beryl Awuor",
    role: "Farmer Experience Associate",
    dept: "Operations",
    bio: "Works closely with farmers to ensure seamless onboarding and support.",
    image: "/berly.jpg",
    icon: Users,
    color: "#2dd4bf",
    linkedin: "https://www.linkedin.com/in/beryle-awuor-32287b368/",
  },
  {
    name: "Anthony Wanjiru",
    role: "County Liaison Officer (Kiambu)",
    dept: "Kiambu County",
    bio: "Coordinates county-level engagement and farmer network expansion.",
    image: "/antony.jpg",
    icon: MapPin,
    color: "#86efac",
    linkedin: "https://www.linkedin.com/in/anthony-wanjiru/",
  },
];

export default function CoreTeam() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Our Team
              </span>
            </div>

            <h2
              className="font-bold text-teal-900 leading-tight "
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              }}
            >
              The people on the ground.
            </h2>
          </div>

          <p className="text-teal-900/65 text-md md:text-lg leading-relaxed max-w-sm md:text-right">
            Specialists working across product, farmer relationships, and field
            operations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {team.map(
            ({ name, role, dept, bio, image, icon: Icon, color, linkedin }) => (
              <div
                key={name}
                className="group bg-gray-50 rounded-[1rem] overflow-hidden hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-teal-100"
              >
                {/* Image */}
                <div className="aspect-4/5 overflow-hidden relative">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                  />

                  {/* LinkedIn Button */}
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110"
                  >
                    <FaLinkedin className="w-4 h-4 text-teal-900" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-[2rem] flex items-center justify-center"
                      style={{ background: `${color}15` }}
                    >
                      <Icon size={16} style={{ color }} />
                    </div>

                    <h4
                      className="text-teal-950 font-bold text-lg mb-1"
                      style={{ fontFamily: "Georgia" }}
                    >
                      {name}
                    </h4>
                  </div>

                  <p className="text-green-600 text-sm font-semibold mb-3 uppercase tracking-tighter">
                    {role}
                  </p>
                  <p className="text-teal-900/60 text-md leading-relaxed line-clamp-3">
                    {bio}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

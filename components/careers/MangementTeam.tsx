import { FaLinkedin } from 'react-icons/fa'
import { Crown, Settings, Cpu, Leaf, Shield } from 'lucide-react'

const management = [
  {
    name: 'Amutabi Ayuma',
    role: 'Founder & CEO',
    bio: 'Leads the vision of transforming African agriculture into structured, investment-ready enterprises.',
    image: '/alice.jpg',
    icon: Crown,
    featured: true,
    accentColor: '#4ade80',
    linkedin: 'https://www.linkedin.com/in/alice-ayuma/',
  },
  {
    name: 'Mariam Kagbo Dora',
    role: 'Chief Operating Officer',
    bio: 'Oversees operations and execution across programs, partnerships, and field coordination.',
    image: '/mariam.jpg',
    icon: Settings,
    accentColor: '#2dd4bf',
    linkedin: 'https://www.linkedin.com/in/mariam-kagbo/',
  },
  {
    name: 'Alex Mogengo',
    role: 'Chief Technology Officer',
    bio: 'Drives the development of digital systems powering data-driven agriculture.',
    image: '/alex.jpg',
    icon: Cpu,
    accentColor: '#4ade80',
    linkedin: 'https://www.linkedin.com/in/alex-mogengo/',
  },
  {
    name: 'Derrick Mboya',
    role: 'Chief Agronomy Consultant',
    bio: 'Provides agronomic expertise to optimize farm productivity and sustainability.',
    image: '/derrick.jpg',
    icon: Leaf,
    accentColor: '#86efac',
    linkedin: 'https://www.linkedin.com/in/derrick-mboya/',
  },
  {
    name: 'Kevin Okwako',
    role: 'Board Advisor',
    bio: 'Supports strategic direction, partnerships, and long-term growth planning.',
    image: '/kevin.jpg',
    icon: Shield,
    accentColor: '#5eead4',
    linkedin: 'https://www.linkedin.com/in/kevin-okwako/',
  },
]


export default function ManagementTeam() {
  const [founder, ...rest] = management

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-green-500" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
                Management
              </span>
            </div>

            <h2
              className="font-bold text-teal-900 leading-tight"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              The team building Africa's<br />
              <span className="text-green-600 ">agricultural future.</span>
            </h2>
          </div>

          <p className="text-teal-900/65 text-md md:text-lg leading-relaxed max-w-xs md:text-right">
            A cross-functional leadership team combining agronomy expertise,
            technology, and operational excellence.
          </p>
        </div>


        <div className="relative mb-12 rounded-[1rem] bg-teal-950 overflow-hidden  shadow-2xl">
          <div className="flex flex-col md:flex-row items-stretch">

            {/* Image Side */}
            <div className="md:w-2/5 relative h-105 md:h-auto overflow-hidden">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-center"
              />

              
              <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-teal-950/40 via-transparent to-transparent" />

              
              <div className="absolute inset-0 border-r border-white/5 hidden md:block" />
            </div>
            {/* Content Side */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
              {/* Background Accents */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-400/5 blur-[80px] rounded-full" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-bold tracking-widest uppercase text-green-400 mb-6">
                  <Crown size={12} />
                  Executive Leadership
                </div>

                <h3 className="text-3xl md:text-5xl text-white font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  {founder.name}
                </h3>

                <p className="text-green-400 font-medium text-lg mb-4">
                  {founder.role}
                </p>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition mb-6"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span className="text-md">View LinkedIn</span>
                </a>
                {/* Bio with a cleaner quote style */}
                <div className="relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-white/5 serif">“</span>
                  <p className="text-white/80 text-lg leading-relaxed max-w-xl italic pl-6">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 👥 THE REST OF THE TEAM - Balanced Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map(({ name, role, bio, image, linkedin }) => (
            <div
              key={name}
              className="group bg-gray-50 rounded-[1rem] overflow-hidden hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-teal-100"
            >
              {/* Square Image aspect-square is great for grids */}
              <div className="aspect-4/5 overflow-hidden relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-all duration-500 scale-105 group-hover:scale-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />

                {/* LinkedIn */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-110"
                >
                  <FaLinkedin className="w-4 h-4 text-teal-900" />
                </a>
              </div>

              <div className="p-6">
                <h4 className="text-teal-950 font-bold text-lg mb-1" style={{ fontFamily: 'Georgia, serif' }}>
                  {name}
                </h4>
                <p className="text-green-600 text-sm font-semibold mb-3 uppercase tracking-tighter">
                  {role}
                </p>
                <p className="text-teal-900/60 text-md leading-relaxed line-clamp-3">
                  {bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
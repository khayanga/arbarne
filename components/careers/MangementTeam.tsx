import { FaLinkedin } from 'react-icons/fa'
import { Crown, Settings, Cpu, Leaf, Shield } from 'lucide-react'

const management = [
  {
    name: 'Amutabi Ayuma Alice',
    role: 'Founder & CEO',
    bio: 'Leads the vision of transforming African agriculture into structured, investment-ready enterprises.',
    image: '/alice.jpg',
    icon: Crown,
    featured: true,
    accentColor: '#4ade80',
    linkedin: 'https://www.linkedin.com/in/alice-ayuma/',
  },
  {
    name: 'Dora Mariam Kargbo',
    role: 'Chief Operating Officer',
    bio: 'Oversees operations and execution across programs, partnerships, and field coordination.',
    image: '/mariam.jpg',
    icon: Settings,
    accentColor: '#2dd4bf',
    linkedin: 'https://sl.linkedin.com/in/dora-mariam-kargbo-9ab189258',
  },
  {
    name: 'Alex Mogengo',
    role: 'Int. Chief of Technology & Innovation',
    bio: 'Drives the development of digital systems powering data-driven agriculture.',
    image: '/alex.jpg',
    icon: Cpu,
    accentColor: '#4ade80',
    linkedin: 'https://www.linkedin.com/in/alex-mogengo-19107994/',
  },
  {
    name: 'Derrick Mboya',
    role: 'Int. Chief Agronomy Officer',
    bio: 'Provides agronomic expertise to optimize farm productivity and sustainability.',
    image: '/derrick.jpg',
    icon: Leaf,
    accentColor: '#86efac',
    linkedin: 'https://ke.linkedin.com/in/derrick-mboya-57b430176',
  },
  
]


export default function ManagementTeam() {
 

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
              style={{ fontFamily: 'Georgia', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
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


       
        {/* 👥 THE REST OF THE TEAM - Balanced Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {management.map(({ name, role, bio, image, linkedin }) => (
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
                <h4 className="text-teal-950 font-bold text-lg mb-1" style={{ fontFamily: 'Georgia' }}>
                  {name}
                </h4>
                <p className="text-green-600 text-sm font-semibold mb-3 uppercase tracking-tighter" style={{ fontFamily: 'Georgia' }}>
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

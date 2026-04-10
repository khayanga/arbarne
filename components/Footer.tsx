import Link from 'next/link'
import { Mail, Phone, MapPin} from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  Product: [
    { label: 'Shambany Platform', href: '/' },
    { label: 'Business Model', href: '/pricing' },
    { label: 'Pricing', href: '/business#pricing' },
    { label: 'Resources', href: '/resources' },
  ],
  Company: [
    { label: 'About Arbarne', href: '/company' },
    { label: 'Mission & Impact', href: '/mission' },
    { label: 'Careers', href: '/careers' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

// const socials = [
//   {
//     icon: <Linkedin className="w-4 h-4" />,
//     href: "https://www.linkedin.com/company/arbarne-agriculture-group/",
//     label: "LinkedIn",
//   },
//   {
//     icon: <Instagram className="w-4 h-4" />,
//     href: "https://www.instagram.com/futurefarms_africa",
//     label: "Instagram",
//   },
// ]

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-white">
      
      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col items-center text-center md:flex-row md:text-left md:justify-between gap-6">
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to transform your farm?
            </h2>
            <p className="text-white/60 text-md">
              Join hundreds of farms already on Shambany.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/shambani"
              className="px-6 py-3 bg-green-500 font-semibold text-sm rounded-[0.5rem] hover:bg-green-400 transition"
            >
              Get Started
            </Link>
            <Link
              href="/business"
              className="px-6 py-3 border border-white/20 text-sm rounded-[0.5rem] hover:bg-white/10 transition"
            >
              Request Demo
            </Link>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-10 text-center md:text-left ">
        
        {/* Brand */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start ">
          
          <Image
            src="/footer .png"
            alt="Arbarne Logo"
            width={250}
            height={250}
            className="mb-4"
          />

          <p className="text-white/50 text-md leading-relaxed max-w-sm mb-6">
            Leading the great transition of African agriculture to future-ready, productive farm enterprises.
          </p>

          {/* Contact */}
          <div className="flex flex-col gap-2 text-md text-white/60 items-center md:items-start">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Nairobi, Kenya
            </span>
            <span className="flex items-center gap-2">
              <Mail size={14} /> Info@arbarnegroup.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> +254 757 721 222
            </span>
          </div>

          {/* Socials */}
          {/* <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition"
              >
                {s.icon}
              </a>
            ))}
          </div> */}
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section} className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              {section}
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col items-center md:flex-row md:justify-between gap-3 text-sm text-white/40 text-center md:text-left">
          
          <span>
            © {new Date().getFullYear()} Arbarne Agriculture Group. All rights reserved.
          </span>

          <span className="text-white/40">
            Built for the future of African agriculture 
          </span>

        </div>
      </div>

    </footer>
  )
}

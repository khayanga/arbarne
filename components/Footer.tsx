import Link from 'next/link'
import { Leaf, Mail, Phone, MapPin } from 'lucide-react'
// import { Linkedin, Instagram } from 'lucide-react'


const footerLinks = {
  Product: [
    { label: 'Shambani Platform', href: '/shambani' },
    { label: 'Business Model', href: '/business' },
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
// ];

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to transform your farm?
            </h2>
            <p className="text-white/60 text-sm">Join hundreds of farms already on Shambani.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/shambani" className="px-5 py-2.5 bg-green-500 text-white font-semibold text-sm rounded-xl hover:bg-green-400 transition-colors">
              Get Started
            </Link>
            <Link href="/business" className="px-5 py-2.5 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-colors">
              Request Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-white text-lg">Arbarne</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Leading the great transition of African agriculture to future-ready, productive farm enterprises.
          </p>
          <div className="flex flex-col gap-2 text-sm text-white/50">
            <span className="flex items-center gap-2"><MapPin size={14} /> Nairobi, Kenya</span>
            <span className="flex items-center gap-2"><Mail size={14} /> arbarnegroup@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +254757721222</span>
          </div>
        </div>

        {/* Nav links */}
        {Object.entries(footerLinks).map(([section, links]) => (
          <div key={section}>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{section}</h4>
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Arbarne Agriculture Group. All rights reserved.</span>
          {/* <div className="flex gap-4">
           {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition"
              >
                {s.icon}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  )
}
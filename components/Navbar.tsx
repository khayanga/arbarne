'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Leaf } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const isLightPage =
    pathname === '/business' || pathname === '/resources'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  const useDarkText = scrolled || isLightPage

  const navLinks = [
    { href: '/', label: 'Shambany' },
    { href: '/business', label: 'Business' },
    { href: '/mission', label: 'Mission' },
    { href: '/company', label: 'Company' },
    { href: '/careers', label: 'Careers' },
    { href: '/resources', label: 'Resources' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-teal-900/10 shadow-sm'
          : isLightPage
          ? 'bg-transparent'
          : 'bg-linear-to-b from-black/60 to-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      


        <Link
          href="https://www.linkedin.com/company/arbarne-agriculture-group/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            
          >
            {/* Dark logo (for light backgrounds) */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className={` w-auto object-contain transition-opacity duration-300 ${
                useDarkText ? 'opacity-100' : 'opacity-0 absolute'
              }`}
              priority
            />

            {/* Light logo (for dark backgrounds) */}
            <Image
              src="/logo-light.png"
              alt="Logo"
              width={200}
              height={200}
              className={` w-auto object-contain transition-opacity duration-300 ${
                useDarkText ? 'opacity-0 absolute' : 'opacity-100'
              }`}
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-md font-bold transition-colors ${
                  useDarkText
                    ? isActive
                      ? 'text-teal-900'
                      : 'text-teal-900/60 hover:text-teal-900'
                    : isActive
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-green-500 rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <Link
          href="/#shambany"
          className="hidden md:block px-6 py-3 bg-green-500 text-white text-sm font-semibold rounded-[0.5rem] hover:bg-green-400 transition"
        >
          Get Started
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition ${
            useDarkText ? 'text-teal-900' : 'text-white'
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-md font-medium transition ${
                    isActive
                      ? 'text-teal-900'
                      : 'text-teal-900/70 hover:text-teal-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
              <Link
                href="/#shambany"
                onClick={() => setOpen(false)}
                className="w-full py-2.5 bg-teal-900 text-white text-sm font-semibold rounded-lg text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
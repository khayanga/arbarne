import Link from 'next/link'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function CTAButton({ href, children, variant = 'primary', size = 'md', className = '' }: CTAButtonProps) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  }
  const variants = {
    primary: 'bg-teal-900 text-white hover:bg-teal-800 shadow-lg shadow-teal-900/20 hover:shadow-teal-900/30',
    secondary: 'bg-green-500 text-white hover:bg-green-400 shadow-lg shadow-green-500/20',
    outline: 'border-2 border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-white',
    ghost: 'border border-white/20 text-white hover:bg-white/10',
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}
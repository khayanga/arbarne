import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export default function SectionWrapper({ children, className = '', id, dark = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? 'bg-teal-900' : ''} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
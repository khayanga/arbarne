import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  accent?: boolean
}

export default function FeatureCard({ icon, title, description, accent = false }: FeatureCardProps) {
  return (
    <div className={`group card-hover rounded-2xl p-7 border transition-all duration-300 ${
      accent
        ? 'bg-teal-900 text-white border-teal-800'
        : 'bg-white text-teal-900 border-gray-100 hover:border-teal-200'
    }`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
        accent ? 'bg-white/10' : 'bg-teal-50'
      }`}>
        <span className={accent ? 'text-green-400' : 'text-teal-700'}>
          {icon}
        </span>
      </div>
      <h3 className={`font-semibold text-lg mb-2 ${accent ? 'text-white' : 'text-teal-900'}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${accent ? 'text-white/60' : 'text-teal-900/60'}`}>
        {description}
      </p>
    </div>
  )
}
import { ArrowUpRight, Clock } from 'lucide-react'

interface GuideCardProps {
  number: string
  category: string
  title: string
  description: string
  readTime: string
  href: string
  icon: React.ReactNode
  accentColor: string 
}

export default function GuideCard({
  number,
  category,
  title,
  description,
  readTime,
  href,
  icon,
  accentColor,
}: GuideCardProps) {
  return (
    <article 
    style={{borderRadius:"1rem"}}
    className="group relative bg-white border border-gray-100 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/8 hover:border-green-500">

      {/* Top row: number badge + icon */}
      <div className="flex items-start justify-between mb-6">
        <span
          className={`inline-flex items-center justify-center w-9 h-9 rounded-[2rem] text-sm font-bold text-white ${accentColor} shadow-sm`}
          style={{ fontFamily: 'Georgia, serif' }}
        >
          {number}
        </span>
        <div className="w-11 h-11 rounded-[2rem] bg-green-500/20 border border-green-400/25  flex items-center justify-center text-green-400 transition-colors duration-200">
          {icon}
        </div>
      </div>

      {/* Category label */}
      <p className="text-sm font-semibold uppercase tracking-widest text-green-600 mb-2">
        {category}
      </p>

      {/* Title */}
      <h3
        className="text-xl font-bold text-teal-900 mb-3 leading-snug"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-md md:text-lg text-teal-900/55 leading-relaxed flex-1 mb-6">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-5 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-md text-teal-900/35">
          <Clock size={12} />
          {readTime}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-900 hover:text-green-600 transition-colors duration-200"
        >
          Read Guide
          <ArrowUpRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </article>
  )
}
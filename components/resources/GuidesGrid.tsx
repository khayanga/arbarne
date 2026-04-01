import { BookOpen, CloudRain, FileText } from 'lucide-react'
import GuideCard from './GuidesCard'


const guides = [
  {
    number: '01',
    category: 'Farm Management',
    title: 'Digital Farm Management',
    description:
      'Taking your farm operations online is one of the most effective ways to increase efficiency, reduce risks, and make informed decisions. This guide will help you understand the essentials of digital farm management, whether you are a farm manager providing services or a farm owner seeking better control over your operations.',
    readTime: '12 min read',
    href: 'https://docs.google.com/document/d/1W4ovHtWhUf3Hpj69mo_xKw5_emplOqP_Iu97Z62E7ZQ/edit?usp=sharing',
    icon: <BookOpen size={20} strokeWidth={1.8} />,
    accentColor: 'bg-teal-800',
  },
  {
    number: '02',
    category: 'Climate & Weather',
    title: 'Weather & Climate Monitoring for Better Decisions',
    description:
      'Weather and climate have a direct impact on farm productivity. From rainfall patterns to temperature fluctuations, understanding and anticipating these changes can make the difference between a successful harvest and a costly loss. Integrating weather and climate data into your farm management strategy allows you to reduce risks, optimize operations, and make informed decisions with confidence.',
    readTime: '9 min read',
    href: 'https://docs.google.com/document/d/1kpae1NhdSFI2qza1kqHaX6vgZ0LIjj7lxJf7FKJdFgA/edit?usp=sharing',
    icon: <CloudRain size={20} strokeWidth={1.8} />,
    accentColor: 'bg-teal-800',
  },
  {
    number: '03',
    category: 'Record Keeping',
    title: 'Digital Record-Keeping Made Simple',
    description:
      'Accurate record-keeping is the backbone of efficient farm management. Without organized data on labor, expenses, and crop performance, it\'s easy to lose track of costs, miss opportunities for improvement, and make decisions based on guesswork. Digital record-keeping simplifies this process, turning raw farm data into actionable insights that improve decision-making, accountability, and profitability.',
    readTime: '7 min read',
    href: 'https://docs.google.com/document/d/1CoJwsbbOS4A3QrGKUtgl9cjqd9wcqOp1OhLgd3KTtLk/edit?usp=sharing',
    icon: <FileText size={20} strokeWidth={1.8} />,
    accentColor: 'bg-teal-800',
  },
]

export default function GuidesGrid() {
  return (
    <section className="py-22 px-6 max-w-7xl mx-auto">

      <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px bg-green-500" />
            <span className="text-md font-bold uppercase tracking-[0.2em] text-green-600">
              Our Guides
            </span>
            <div className="w-6 h-px bg-green-500" />
          </div>
          
        </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map(guide => (
          <GuideCard key={guide.number} {...guide} />
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-md text-teal-900/70 mt-12">
        All guides open in Google Docs free to read, no sign-in required.
      </p>
    </section>
  )
}
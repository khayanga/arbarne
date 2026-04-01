import type { Metadata } from 'next'
import GuidesHero from '@/components/resources/GuidesHero'
import GuidesGrid from '@/components/resources/GuidesGrid'

export const metadata: Metadata = {
  title: 'Guides & Resources — Arbarne Agriculture Group',
  description:
    'Free guides and frameworks for African farm managers and owners on digital farm management, weather monitoring, and record-keeping.',
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Georgia, serif' }}>

      {/* ── Hero Section ──────────────────────────────────────── */}
      <GuidesHero />

      {/* ── Guides Grid ───────────────────────────────────────── */}
      <GuidesGrid />

    </div>
  )
}









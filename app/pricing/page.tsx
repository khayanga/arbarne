import AnimatedSection from '@/components/AnimatedSection'
import AudienceTabs from '@/components/business/AudienceTabs'
import BusinessHero from '@/components/business/BusinessHero'
import Customer from '@/components/business/Customer'
import Pricing from '@/components/business/Pricing'
import ROIBanner from '@/components/business/RoiBanner'
import Works from '@/components/business/Works'

import React from 'react'

const page = () => {
  return (
    <>
    <AnimatedSection><BusinessHero/></AnimatedSection>
    <AnimatedSection><AudienceTabs/></AnimatedSection>
    <AnimatedSection><Works/></AnimatedSection>
    <AnimatedSection><ROIBanner/></AnimatedSection>
    <AnimatedSection><Pricing/></AnimatedSection>
    <AnimatedSection><Customer/></AnimatedSection>
    </>
  )
}

export default page
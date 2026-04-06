import AnimatedSection from '@/components/AnimatedSection'
import About from '@/components/company/About'
import CompanyCTA from '@/components/company/CompanyCta'
import CompanyHero from '@/components/company/CompanyHero'
import Initiative from '@/components/company/Initiative'
import CompanyPage from '@/components/company/Main'
import React from 'react'

const page = () => {
  return (
    <>
    <AnimatedSection><CompanyHero/></AnimatedSection>
    <AnimatedSection><About/></AnimatedSection>
    <AnimatedSection><Initiative/></AnimatedSection>
    <AnimatedSection><CompanyCTA/></AnimatedSection>
    {/* <CompanyPage/> */}
    </>
  )
}

export default page
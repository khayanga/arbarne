import About from '@/components/company/About'
import CompanyCTA from '@/components/company/CompanyCta'
import CompanyHero from '@/components/company/CompanyHero'
import Initiative from '@/components/company/Initiative'
import CompanyPage from '@/components/company/Main'
import React from 'react'

const page = () => {
  return (
    <>
    <CompanyHero/>
    <About/>
    <Initiative/>
    <CompanyCTA/> 
    {/* <CompanyPage/> */}
    </>
  )
}

export default page
import AnimatedSection from '@/components/AnimatedSection'
import CareersHero from '@/components/careers/CareersHero'
import CoreTeam from '@/components/careers/CoreTeam'
import CareersPage from '@/components/careers/Main'
import ManagementTeam from '@/components/careers/MangementTeam'
import OpenRoles from '@/components/careers/OpenRoles'

import React from 'react'

const page = () => {
  return (
    <>
    <AnimatedSection><CareersHero/></AnimatedSection>
    <AnimatedSection><OpenRoles/></AnimatedSection>
    <AnimatedSection><ManagementTeam/></AnimatedSection>
    <AnimatedSection><CoreTeam/></AnimatedSection>
    {/* <CareersPage/> */}
    </>
  )
}

export default page

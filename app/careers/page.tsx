import CareersHero from '@/components/careers/CareersHero'
import CoreTeam from '@/components/careers/CoreTeam'
import CareersPage from '@/components/careers/Main'
import ManagementTeam from '@/components/careers/MangementTeam'
import OpenRoles from '@/components/careers/OpenRoles'

import React from 'react'

const page = () => {
  return (
    <>
    <CareersHero/>
    <OpenRoles/>
    <ManagementTeam/>
    <CoreTeam/>
    {/* <CareersPage/> */}
    </>
  )
}

export default page

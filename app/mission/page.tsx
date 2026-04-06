import AnimatedSection from '@/components/AnimatedSection'
import CoreValues from '@/components/mission/CoreValues'
import MissionCTA from '@/components/mission/MissionCTA'
import MissionHero from '@/components/mission/MissionHero'


const page = () => {
  return (
    <>
    <AnimatedSection><MissionHero/></AnimatedSection>
    <AnimatedSection><CoreValues/></AnimatedSection>
    <AnimatedSection><MissionCTA/></AnimatedSection>

    
    
    </>
  )
}

export default page

import AnimatedSection from "@/components/AnimatedSection";
import Benefits from "@/components/shambany/Benefits";
import Features from "@/components/shambany/Features";
import GetStarted from "@/components/shambany/GetStarted";
import Hero from "@/components/shambany/Hero";
import Process from "@/components/shambany/Process";
import Story from "@/components/shambany/Story";


export default function Home() {
  return (
  <>
  <AnimatedSection><Hero/></AnimatedSection>
  <AnimatedSection><Story/></AnimatedSection>
  <AnimatedSection><Benefits/></AnimatedSection>
  <AnimatedSection><Process/></AnimatedSection>
  <AnimatedSection><Features/></AnimatedSection>
  <AnimatedSection><GetStarted/></AnimatedSection>
  
  
  
  </>
  );
}

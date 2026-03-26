import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import CarouselSection from '@/components/CarouselSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ProjectsSection />
      <SkillsSection />
      <CarouselSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}


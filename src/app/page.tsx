import HeroSection from '@/components/HeroSection'
import WhoIWorkForSection from '@/components/WhoIWorkForSection'
import MissionSection from '@/components/MissionSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhoIWorkForSection />
      <MissionSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}

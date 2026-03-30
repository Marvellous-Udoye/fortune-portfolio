import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all'
import { SiteNav } from './components/site-nav'
import { FeaturedProjectsSection } from './sections/featured-projects-section'
import { FeaturedWorkSection } from './sections/featured-work-section'
import { FooterSection } from './sections/footer-section'
import { HeroSection } from './sections/hero-section'
import { IntroSection } from './sections/intro-section'
import { ServicesSection } from './sections/services-section'
import { StatsSection } from './sections/stats-section'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText)

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })

  return (
    <main>
      <SiteNav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <IntroSection />
          <FeaturedProjectsSection />
          <StatsSection />
          <div>
            <ServicesSection />
            <FeaturedWorkSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  )
}

export default App

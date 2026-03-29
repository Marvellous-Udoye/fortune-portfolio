import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollSmoother, ScrollTrigger, SplitText } from 'gsap/all'
import { Navbar } from './components/Navbar'
import { BenefitSection } from './sections/BenefitSection'
import { FlavorSection } from './sections/FlavorSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { MessageSection } from './sections/MessageSection'
import { NutritionSection } from './sections/NutritionSection'
import { TestimonialSection } from './sections/TestimonialSection'

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
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  )
}

export default App

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { HighlightTitle } from '../components/highlight-title'
import { PinnedReel } from '../components/pinned-reel'

export function ServicesSection() {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: '.benefit-section',
        start: 'top 60%',
        end: 'top top',
        scrub: 1.5,
      },
    })

    revealTl
      .to('.benefit-section .first-title', {
        duration: 1,
        opacity: 1,
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
        ease: 'circ.out',
      })
      .to('.benefit-section .second-title', {
        duration: 1,
        opacity: 1,
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
        ease: 'circ.out',
      })
      .to('.benefit-section .third-title', {
        duration: 1,
        opacity: 1,
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
        ease: 'circ.out',
      })
      .to('.benefit-section .fourth-title', {
        duration: 1,
        opacity: 1,
        clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
        ease: 'circ.out',
      })
  })

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Core creative strengths:
            <br />
            A portfolio built around image-making, movement, and visual systems
          </p>

          <div className="col-center mt-20">
            <HighlightTitle
              title="Graphic Design"
              color="#16181d"
              bg="#f6944d"
              className="first-title"
              borderColor="#16181d"
            />
            <HighlightTitle
              title="3D Illustration"
              color="#16181d"
              bg="#facc15"
              className="second-title"
              borderColor="#16181d"
            />
            <HighlightTitle
              title="Motion Design"
              color="#16181d"
              bg="#fb7185"
              className="third-title"
              borderColor="#16181d"
            />
            <HighlightTitle
              title="Art Direction"
              color="#16181d"
              bg="#d9dce3"
              className="fourth-title"
              borderColor="#16181d"
            />
          </div>

          <div className="mt-10 md:mt-0">
            <p>Across campaigns, key visuals, titles, posters, and digital experiences.</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-box">
        <PinnedReel />
      </div>
    </section>
  )
}

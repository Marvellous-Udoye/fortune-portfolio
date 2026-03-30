import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

export function ProjectSliderTitle() {
  useGSAP(() => {
    const firstTextSplit = SplitText.create('.first-text-split h1', {
      type: 'chars',
    })
    const secondTextSplit = SplitText.create('.second-text-split h1', {
      type: 'chars',
    })

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 30%',
        toggleActions: 'play none none reverse',
      },
    })

    gsap.to('.flavor-text-scroll', {
      duration: 1,
      clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
      ease: 'circ.out',
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 20%',
        toggleActions: 'play none none reverse',
      },
    })

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top 1%',
        toggleActions: 'play none none reverse',
      },
    })
  })

  return (
    <div className="general-title col-center h-full gap-16 xl:gap-20 2xl:gap-32">
      <div className="first-text-split overflow-hidden py-3 2xl:py-0">
        <h1>Selected</h1>
      </div>

      <div
        style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown px-3 pb-5 pt-3 2xl:px-5 2xl:pt-0">
          <h2 className="text-milk">featured</h2>
        </div>
      </div>

      <div className="second-text-split overflow-hidden py-3 2xl:py-0">
        <h1>projects</h1>
      </div>
    </div>
  )
}

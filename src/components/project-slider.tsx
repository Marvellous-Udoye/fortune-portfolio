import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { flavorLists } from '../data/home-content'

export function ProjectSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    if (!sliderRef.current) {
      return
    }

    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.flavor-section',
          start: '2% top',
          end: `+=${scrollAmount + 1150}px`,
          scrub: true,
          pin: true,
        },
      })

      tl.to('.flavor-section', {
        x: `-${scrollAmount + 1150}px`,
        ease: 'power1.inOut',
      })
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.flavor-section',
        start: 'top top',
        end: 'bottom 80%',
        scrub: true,
      },
    })

    titleTl
      .to('.first-text-split', { xPercent: -30, ease: 'power1.inOut' })
      .to('.flavor-text-scroll', { xPercent: -22, ease: 'power1.inOut' }, '<')
      .to('.second-text-split', { xPercent: -10, ease: 'power1.inOut' }, '<')
  }, [isTablet])

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorLists.map((flavor) => (
          <div
            className={`relative z-30 h-80 w-96 flex-none md:h-[50vh] md:w-[50vw] lg:h-[80vh] lg:w-[50vw] ${flavor.rotation}`}
            key={flavor.name}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt={flavor.color}
              draggable={false}
              className="absolute bottom-0"
            />
            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt={flavor.color}
              className="drinks"
              draggable={false}
            />
            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt={flavor.color}
              className="elements"
              draggable={false}
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

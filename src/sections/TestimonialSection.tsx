import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { testimonialCards } from '../data/home-content'

export function TestimonialSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useGSAP(() => {
    if (!isMobile) {
      gsap.set('.testimonials-section', {
        marginTop: '-140vh',
      })
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top bottom',
        end: '200% top',
        scrub: true,
      },
    })

    tl.to('.testimonials-section .first-title', {
      xPercent: 70,
    })
      .to('.testimonials-section .second-title', { xPercent: 25 }, '<')
      .to('.testimonials-section .third-title', { xPercent: -50 }, '<')

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: '10% top',
        end: '200% top',
        scrub: 1.5,
        pin: true,
      },
    })

    pinTl.from('.vd-card', {
      yPercent: 150,
      stagger: 0.2,
      ease: 'power1.inOut',
    })
  }, [isMobile])

  const handlePlay = (index: number) => {
    videoRefs.current[index]?.play()
  }

  const handlePause = (index: number) => {
    videoRefs.current[index]?.pause()
  }

  return (
    <section id="featured-work" className="testimonials-section">
      <div className="absolute flex size-full flex-col items-center pt-[5vw]">
        <h1 className="first-title text-black">Recent</h1>
        <h1 className="second-title text-light-brown">Featured</h1>
        <h1 className="third-title text-black">Work</h1>
      </div>

      <div className="pin-box">
        {testimonialCards.map((card, index) => (
          <div
            key={card.name}
            className={`vd-card ${card.translation ?? ''} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(element) => {
                videoRefs.current[index] = element
              }}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

export function IntroSection() {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create('.first-message', {
      type: 'words',
    })
    const secondMsgSplit = SplitText.create('.second-message', {
      type: 'words',
    })
    const paragraphSplit = SplitText.create('.message-content p', {
      type: 'words, lines',
      linesClass: 'paragraph-line',
    })

    gsap.to(firstMsgSplit.words, {
      color: '#f3f4f6',
      ease: 'power1.in',
      stagger: 1,
      scrollTrigger: {
        trigger: '.message-content',
        start: 'top center',
        end: '30% center',
        scrub: true,
      },
    })

    gsap.to(secondMsgSplit.words, {
      color: '#f3f4f6',
      ease: 'power1.in',
      stagger: 1,
      scrollTrigger: {
        trigger: '.second-message',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    })

    const revealTl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: '.msg-text-scroll',
        start: 'top 60%',
        toggleActions: 'play none none reverse',
      },
    })

    revealTl.to('.msg-text-scroll', {
      duration: 1,
      clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)',
      ease: 'circ.inOut',
    })

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.message-content p',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    })

    paragraphTl.from(paragraphSplit.lines, {
      yPercent: 320,
      rotate: 3,
      ease: 'power1.inOut',
      duration: 1,
      stagger: 0.1,
    })
  })

  return (
    <section className="message-content">
      <div className="container relative mx-auto flex-center py-28">
        <div className="h-full w-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Designing bold visual systems and</h1>
            <div
              style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown px-5 pb-3 md:pb-5">
                <h2 className="text-white">bringing 'em to life</h2>
              </div>
            </div>
            <h1 className="second-message">
              through graphics, motion, and 3D illustration
            </h1>
          </div>

          <div className="mt-10 flex-center overflow-hidden md:mt-20">
            <div className="max-w-md px-10 flex-center">
              <p>
                The work blends typography, composition, animation, and tactile
                3D image-making to create visual worlds that feel clear, bold,
                and alive on screen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

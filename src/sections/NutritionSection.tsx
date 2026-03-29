import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useMediaQuery } from 'react-responsive'
import { nutrientLists } from '../data/home-content'

export function NutritionSection() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const lists = isMobile ? nutrientLists.slice(0, 3) : nutrientLists

  useGSAP(() => {
    const titleSplit = SplitText.create('.nutrition-title', {
      type: 'chars',
    })
    const paragraphSplit = SplitText.create('.nutrition-section p', {
      type: 'words, lines',
      linesClass: 'paragraph-line',
    })

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.nutrition-section',
        start: 'top center',
        toggleActions: 'play none none reverse',
      },
    })

    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: 'power2.out',
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: 'power1.inOut',
        duration: 1,
        stagger: 0.1,
      })

    const titleTl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: '.nutrition-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    })

    titleTl.to('.nutrition-text-scroll', {
      duration: 1,
      opacity: 1,
      clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
      ease: 'power1.inOut',
    })
  })

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt="dip"
        className="w-full object-cover"
        draggable={false}
      />
      <img
        src="/images/big-img.jpg"
        alt="big-image"
        className="big-img"
        draggable={false}
      />

      <div className="mt-14 flex flex-col justify-between px-5 md:mt-0 md:flex-row md:px-10">
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col items-center justify-center">
            <div className="place-self-start overflow-hidden">
              <h1 className="nutrition-title">Built for</h1>
            </div>
            <div
              style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="inline-block bg-mid-brown px-3 pb-5 pt-3 md:px-5 md:pt-0">
                <h2 className="text-milk-yellow">Visual Impact</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="translate-y-5 items-center md:flex md:justify-center">
          <div className="max-w-md md:max-w-xs">
            <p className="text-balance text-lg font-paragraph md:text-right">
              From identity systems to motion loops and stylized 3D scenes, the
              practice is focused on images that carry atmosphere, rhythm, and
              strong graphic presence.
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nutrition, index) => (
              <div key={nutrition.label} className="relative flex-1 col-center">
                <div className='flex flex-col max-sm:flex-col-reverse'>
                  <p className="font-paragraph md:text-lg">{nutrition.label}</p>
                  <p className="text-sm font-paragraph max-sm:hidden">focused on</p>
                  <p className="text-2xl font-bold tracking-tighter">
                    {nutrition.amount}
                  </p>
                </div>
                {index !== lists.length - 1 ? <div className="spacer-border" /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

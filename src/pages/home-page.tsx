import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { RevealSection } from '../components/reveal-section'
import { featuredProjects, galleryFeatures, siteProfile } from '../data/portfolio'
import { usePrefersReducedMotion } from '../hooks/use-prefers-reduced-motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const heroCards = [
  {
    id: 'hero-card-1',
    src: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Graphic illustration placeholder with bold green tones.',
    className: 'left-[2%] top-[18%]',
    baseRotation: -10,
    background: '#d5ff49',
  },
  {
    id: 'hero-card-2',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Colorful illustrated transit scene placeholder.',
    className: 'left-[18%] top-[4%]',
    baseRotation: -5,
    background: '#2d91ef',
  },
  {
    id: 'hero-card-3',
    src: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Creative illustrated composition placeholder.',
    className: 'left-[37%] top-[10%]',
    baseRotation: 1,
    background: '#b3eb1d',
  },
  {
    id: 'hero-card-4',
    src: 'https://images.unsplash.com/photo-1516321310764-4d44f111f0d1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Editorial poster placeholder with warm pink tones.',
    className: 'left-[55%] top-[6%]',
    baseRotation: 6,
    background: '#f3d9e3',
  },
  {
    id: 'hero-card-5',
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    alt: 'Colorful abstract artwork placeholder.',
    className: 'left-[73%] top-[15%]',
    baseRotation: 11,
    background: '#ffd36e',
  },
]

export function HomePage() {
  const pageRef = useRef<HTMLDivElement | null>(null)
  const stackRef = useRef<HTMLDivElement | null>(null)
  const roleTextRef = useRef<HTMLDivElement | null>(null)
  const introSectionRef = useRef<HTMLElement | null>(null)
  const featuredWrapperRef = useRef<HTMLDivElement | null>(null)
  const featuredTrackRef = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('[data-parallax]')
      const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]')
      const roleLines = gsap.utils.toArray<HTMLElement>('[data-role-line-inner]')
      const introCards = gsap.utils.toArray<HTMLElement>('[data-intro-card]')
      const introLines = gsap.utils.toArray<HTMLElement>('[data-intro-line]')
      const introOrbs = gsap.utils.toArray<HTMLElement>('[data-intro-orb]')

      if (prefersReducedMotion) {
        gsap.set(items, { y: 0 })
        gsap.set(cards, {
          x: 0,
          y: 0,
          autoAlpha: 1,
          scale: 1,
          rotation: (index) => heroCards[index]?.baseRotation ?? 0,
        })
        gsap.set(roleLines, { y: 0, rotateX: 0, autoAlpha: 1 })
        return
      }

      gsap.set(roleLines, {
        autoAlpha: 0,
        yPercent: 135,
        rotateX: -95,
        z: -120,
        transformPerspective: 1200,
        transformOrigin: '50% 100%',
      })

      gsap.fromTo(
        cards,
        {
          xPercent: (index) => [-180, -120, 0, 120, 180][index] ?? 0,
          yPercent: (index) => [40, -150, -170, -110, 30][index] ?? 0,
          autoAlpha: 0,
          scale: 0.78,
          rotation: (index) => (heroCards[index]?.baseRotation ?? 0) + [-18, 12, -10, 14, -16][index],
        },
        {
          xPercent: 0,
          yPercent: 0,
          autoAlpha: 1,
          scale: 1,
          rotation: (index) => heroCards[index]?.baseRotation ?? 0,
          duration: 1.45,
          stagger: 0.11,
          ease: 'power4.out',
        },
      )

      if (roleTextRef.current && roleLines.length) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: roleTextRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
              once: true,
            },
          })
          .to(roleLines, {
            rotateX: 0,
            yPercent: 0,
            z: 0,
            autoAlpha: 1,
            duration: 1.35,
            ease: 'power4.out',
            stagger: 0.5,
            clearProps: 'transform,opacity',
          })
      }

      items.forEach((item, index) => {
        gsap.to(item, {
          yPercent: index % 2 === 0 ? -6 : 6,
          ease: 'none',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      if (introSectionRef.current) {
        gsap.fromTo(
          introLines,
          {
            y: 80,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introSectionRef.current,
              start: 'top 78%',
              once: true,
            },
          },
        )

        gsap.fromTo(
          introCards,
          {
            y: 120,
            autoAlpha: 0,
            rotate: (index) => [-18, 10, -8][index] ?? 0,
            scale: 0.86,
          },
          {
            y: 0,
            autoAlpha: 1,
            rotate: (index) => [-12, 6, -4][index] ?? 0,
            scale: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: introSectionRef.current,
              start: 'top 72%',
              once: true,
            },
          },
        )

        introOrbs.forEach((orb, index) => {
          gsap.to(orb, {
            xPercent: index === 0 ? -18 : 20,
            yPercent: index === 0 ? 16 : -18,
            scale: index === 0 ? 1.15 : 0.92,
            ease: 'none',
            scrollTrigger: {
              trigger: introSectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        })
      }

      if (!stackRef.current) {
        return
      }

      const groupX = gsap.quickTo(stackRef.current, 'x', {
        duration: 0.55,
        ease: 'power3.out',
      })
      const groupY = gsap.quickTo(stackRef.current, 'y', {
        duration: 0.55,
        ease: 'power3.out',
      })

      const cardSetters = cards.map((card, index) => ({
        x: gsap.quickTo(card, 'x', { duration: 0.32, ease: 'power3.out' }),
        y: gsap.quickTo(card, 'y', { duration: 0.32, ease: 'power3.out' }),
        z: gsap.quickTo(card, 'z', { duration: 0.32, ease: 'power3.out' }),
        rotation: gsap.quickTo(card, 'rotation', {
          duration: 0.34,
          ease: 'power3.out',
        }),
        scale: gsap.quickTo(card, 'scale', {
          duration: 0.34,
          ease: 'power3.out',
        }),
        baseRotation: heroCards[index]?.baseRotation ?? 0,
      }))

      const onMove = (event: PointerEvent) => {
        if (!stackRef.current) return

        const bounds = stackRef.current.getBoundingClientRect()
        const px = (event.clientX - bounds.left) / bounds.width - 0.5
        const py = (event.clientY - bounds.top) / bounds.height - 0.5

        groupX(px * 14)
        groupY(py * 12)

        cards.forEach((card, index) => {
          const cardBounds = card.getBoundingClientRect()
          const centerX = cardBounds.left + cardBounds.width / 2
          const centerY = cardBounds.top + cardBounds.height / 2
          const dx = event.clientX - centerX
          const dy = event.clientY - centerY
          const distance = Math.hypot(dx, dy)
          const influence = Math.max(0, 1 - distance / 430)
          const spreadX = [-58, -28, 0, 28, 58][index] ?? 0
          const spreadY = [18, -24, -6, -22, 16][index] ?? 0

          cardSetters[index].x(spreadX * influence + dx * influence * 0.18)
          cardSetters[index].y(spreadY * influence + dy * influence * 0.16)
          cardSetters[index].z(influence * 140)
          cardSetters[index].scale(1 + influence * 0.12)
          cardSetters[index].rotation(
            cardSetters[index].baseRotation + px * influence * 18,
          )

          card.style.zIndex = `${100 + Math.round(influence * 100) + index}`
        })
      }

      const onLeave = () => {
        groupX(0)
        groupY(0)

        cardSetters.forEach((setter) => {
          setter.x(0)
          setter.y(0)
          setter.z(0)
          setter.scale(1)
          setter.rotation(setter.baseRotation)
        })

        cards.forEach((card, index) => {
          card.style.zIndex = `${index + 1}`
        })
      }

      stackRef.current.addEventListener('pointermove', onMove)
      stackRef.current.addEventListener('pointerleave', onLeave)

      let removeFeaturedRefresh: (() => void) | undefined
      let featuredTween: gsap.core.Tween | undefined

      if (featuredWrapperRef.current && featuredTrackRef.current) {
        let trackWidth = 0
        let horizontalScrollLength = 0

        const refreshFeatured = () => {
          trackWidth = featuredTrackRef.current?.scrollWidth ?? 0
          horizontalScrollLength = Math.max(0, trackWidth - window.innerWidth)
        }

        refreshFeatured()

        featuredTween = gsap.to(featuredTrackRef.current, {
          x: () => -horizontalScrollLength,
          ease: 'none',
          scrollTrigger: {
            trigger: featuredWrapperRef.current,
            pin: featuredWrapperRef.current,
            start: 'center center',
            end: () => `+=${trackWidth}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        })

        ScrollTrigger.addEventListener('refreshInit', refreshFeatured)
        removeFeaturedRefresh = () =>
          ScrollTrigger.removeEventListener('refreshInit', refreshFeatured)
      }

      return () => {
        stackRef.current?.removeEventListener('pointermove', onMove)
        stackRef.current?.removeEventListener('pointerleave', onLeave)
        featuredTween?.kill()
        removeFeaturedRefresh?.()
      }
    },
    { scope: pageRef, dependencies: [prefersReducedMotion] },
  )

  return (
    <div
      ref={pageRef}
      className="mx-auto flex w-full flex-col overflow-x-hidden px-5 md:px-8"
    >
      <section
        data-page-hero
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-0 pb-12 pt-24 text-center md:px-8 md:pb-18 md:pt-28"
      >
        <div className="space-y-2">
          <p
            data-animate
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]"
          >
            {siteProfile.location}
          </p>
          <a
            data-animate
            href={`mailto:${siteProfile.email}`}
            className="block text-[11px] uppercase tracking-[0.24em] text-[color:var(--muted)] transition-colors hover:text-[color:var(--foreground)]"
          >
            {siteProfile.email}
          </a>
        </div>

        <div className="mt-8 flex w-full flex-col items-center">
          <h1
            data-animate
            className="max-w-5xl text-[4.6rem] leading-[0.88] tracking-[0.01em] text-[color:var(--foreground)] md:text-[9rem] lg:text-[10rem]"
          >
            {siteProfile.name}
          </h1>

          <div
            ref={stackRef}
            data-animate
            className="relative mt-8 h-[15rem] w-full max-w-[24rem] [transform-style:preserve-3d] md:h-[19rem] md:max-w-[42rem]"
          >
            {heroCards.map((card) => (
              <article
                key={card.id}
                data-stack-card
                className={`absolute h-[10.4rem] w-[7.8rem] overflow-hidden rounded-[1.2rem] will-change-transform md:h-[15.5rem] md:w-[11.8rem] ${card.className}`}
                style={{
                  backgroundColor: card.background,
                  boxShadow: '0 32px 50px rgba(0,0,0,0.18)',
                  rotate: `${card.baseRotation}deg`,
                  zIndex: heroCards.findIndex((item) => item.id === card.id) + 1,
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="h-full w-full object-cover"
                />
              </article>
            ))}
          </div>
        </div>

        <div
          ref={roleTextRef}
          className="relative mt-6 w-full max-w-6xl [perspective:900px] font-semibold"
        >
          <div className="overflow-hidden">
            <div
              data-role-line
              className="text-[4rem] leading-[0.9] tracking-[0.01em] text-[#d8d8d8] md:text-[7.4rem] lg:text-[8.5rem]"
            >
              <span
                data-role-line-inner
                className="block will-change-transform"
              >
                ILLUSTRATOR,
              </span>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              data-role-line
              className="text-[3rem] leading-[0.9] tracking-[0.01em] text-[#d8d8d8] md:-mt-2 md:text-[6.8rem] lg:text-[7.8rem]"
            >
              <span
                data-role-line-inner
                className="block will-change-transform"
              >
                DESIGNER &amp; ANIMATOR
              </span>
            </div>
          </div>
        </div>

        <div data-animate className="mt-6 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]">
            Clients include
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-[#c8c8c8] md:text-xs">
            APPLE, AMAZON, ADOBE, GOOGLE, NIKE, THE NEW YORK TIMES, LULULEMON, NPR
          </p>
        </div>
      </section>

      <section
        ref={introSectionRef}
        className="px-0 py-18 md:px-8 md:py-24"
      >
        <div className="relative overflow-hidden rounded-[2.8rem] bg-[#111111] px-6 py-14 text-[#fffce1] shadow-[0_32px_90px_rgba(0,0,0,0.18)] md:px-12 md:py-18">
          <div
            data-intro-orb
            className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,135,9,0.42),rgba(255,135,9,0))] blur-3xl"
          />
          <div
            data-intro-orb
            className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(247,189,248,0.34),rgba(247,189,248,0))] blur-3xl"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_28%,transparent_72%,rgba(255,255,255,0.06))]" />

          <div className="relative z-10 grid gap-12 md:grid-cols-[1fr_1.05fr] md:items-center">
            <div className="relative mx-auto h-[20rem] w-full max-w-[22rem] md:h-[28rem] md:max-w-[30rem]">
              {galleryFeatures.slice(0, 3).map((item, index) => {
                const positions = [
                  'left-[0%] top-[14%]',
                  'left-[25%] top-[0%]',
                  'left-[52%] top-[18%]',
                ]

                const rotations = ['rotate-[-12deg]', 'rotate-[6deg]', 'rotate-[-4deg]']

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    data-intro-card
                    className={`absolute block w-[10rem] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.28)] md:w-[13rem] ${positions[index]} ${rotations[index]}`}
                  >
                    <img
                      src={item.media.src}
                      alt={item.media.alt}
                      className="aspect-[4/5] h-full w-full object-cover"
                    />
                  </Link>
                )
              })}
            </div>

            <div className="space-y-6 text-center md:text-left">
              <p
                data-intro-line
                className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60"
              >
                Selected work
              </p>
              <h2 className="text-[3rem] leading-[0.9] tracking-[0.01em] text-[#fffce1] md:text-[5.2rem]">
                <span data-intro-line className="block">
                  Bright frames,
                </span>
                <span data-intro-line className="block">
                  tactile motion,
                </span>
                <span data-intro-line className="block">
                  playful composition.
                </span>
              </h2>
              <p
                data-intro-line
                className="mx-auto max-w-2xl text-sm leading-7 text-white/70 md:mx-0 md:text-base"
              >
                I creates visual systems that move between poster design, illustration, animation, and 3D image making. The work is colorful, graphic, and built to feel alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-0 py-6 md:px-8 md:py-8">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]">
            Featured work
          </p>
          <h2 className="mt-3 text-[2.8rem] leading-[0.9] tracking-[0.01em] text-[color:var(--foreground)] md:text-[5rem]">
            Featured work
          </h2>
          <p className="mt-3 text-base text-[color:var(--foreground)] md:text-2xl">
            Select recent and notable projects
          </p>
        </div>

        <div ref={featuredWrapperRef} className="relative min-h-[100vh] overflow-hidden">
          <div className="container-fluid h-full w-full">
            <div className="horiz-gallery-wrapper flex h-[70vh] items-center will-change-transform">
              <div
                ref={featuredTrackRef}
                className="horiz-gallery-strip flex flex-nowrap items-center gap-8 px-[12vw] will-change-transform"
              >
                {featuredProjects.concat(featuredProjects).map((project, index) => (
                  <Link
                    key={`${project.slug}-${index}`}
                    to={`/work/${project.slug}`}
                    className="project-wrap block w-[76vw] max-w-[22rem] shrink-0 md:w-[33vw]"
                  >
                    <div
                      className="overflow-hidden rounded-[1.8rem] bg-[color:var(--panel)] shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
                      style={{
                        transform:
                          index % 3 === 0
                            ? 'rotate(-8deg)'
                            : index % 3 === 1
                              ? 'rotate(0deg)'
                              : 'rotate(8deg)',
                      }}
                    >
                      <img
                        src={project.thumbnail.src}
                        alt={project.thumbnail.alt}
                        className="aspect-[4/5] h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-5 flex justify-center">
                      <span className="rounded-full bg-[#d3d3d3] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                        {project.client}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RevealSection className="px-0 py-18 md:px-8 md:py-24">
        <div data-animate className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--foreground)]">
            More work
          </p>
          <h2 className="text-[2.8rem] leading-[0.9] tracking-[0.01em] text-[color:var(--foreground)] md:text-[5rem]">
            Take a scroll, stay a while.
          </h2>
          <p className="text-sm leading-7 text-[color:var(--muted)]">
            A long visual rail for mixed artwork, motion stills, and detail frames. Swap in your real renders, posters, thumbnails, and video posters when they are ready.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-6 md:columns-2 xl:columns-3">
          {galleryFeatures.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              data-animate
              className="mb-6 block break-inside-avoid overflow-hidden rounded-[2rem] bg-[color:var(--panel)] shadow-[var(--shadow)]"
            >
              <img
                data-parallax
                src={item.media.src}
                alt={item.media.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="space-y-2 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">
                  {item.eyebrow}
                </p>
                <p className="text-xl tracking-[-0.04em] text-[color:var(--foreground)]">
                  {item.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </RevealSection>
    </div>
  )
}

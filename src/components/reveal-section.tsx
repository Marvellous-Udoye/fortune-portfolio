import { useRef, type ReactNode } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { usePrefersReducedMotion } from '../hooks/use-prefers-reduced-motion'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type RevealSectionProps = {
  className?: string
  children: ReactNode
}

export function RevealSection({ className, children }: RevealSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>('[data-animate]')

      if (prefersReducedMotion) {
        gsap.set(items, { autoAlpha: 1, y: 0 })
        return
      }

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            once: true,
          },
        },
      )
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  )

  return (
    <section ref={containerRef} className={clsx(className)}>
      {children}
    </section>
  )
}

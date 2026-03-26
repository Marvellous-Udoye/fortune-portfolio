import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Outlet, useLocation } from 'react-router-dom'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { usePrefersReducedMotion } from '../hooks/use-prefers-reduced-motion'

export function PageLayout() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const heroItems = gsap.utils.toArray<HTMLElement>('[data-page-hero] [data-animate]')

      if (prefersReducedMotion) {
        gsap.set(heroItems, { autoAlpha: 1, y: 0 })
        return
      }

      gsap.fromTo(
        heroItems,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform',
        },
      )
    },
    { scope: containerRef, dependencies: [location.pathname, prefersReducedMotion] },
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-[color:var(--surface)] text-[color:var(--foreground)]">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

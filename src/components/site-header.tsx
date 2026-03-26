import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { siteProfile } from '../data/portfolio'

const navItems = [
  { label: 'About', to: '/about' },
]

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full max-w-7xl items-start justify-end gap-6 px-5 py-5 md:px-8">
        <nav className="pointer-events-auto flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[color:var(--muted)] md:gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  'rounded-full bg-white/80 px-4 py-3 transition-colors duration-300 hover:text-[color:var(--foreground)] backdrop-blur',
                  isActive && 'text-[color:var(--foreground)]',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={`mailto:${siteProfile.email}`}
            className="rounded-full bg-white/80 px-4 py-3 text-[color:var(--foreground)] transition-colors duration-300 backdrop-blur hover:text-black"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

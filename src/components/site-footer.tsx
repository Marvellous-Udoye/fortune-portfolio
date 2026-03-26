import { Link } from 'react-router-dom'
import { siteProfile } from '../data/portfolio'

export function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr] md:px-8 md:py-16">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">
            Contact
          </p>
          <h2 className="max-w-3xl text-3xl leading-[0.95] tracking-[-0.04em] text-[color:var(--foreground)] md:text-5xl">
            Building visual worlds for campaigns, releases, and brands that want motion with atmosphere.
          </h2>
          <a
            href={`mailto:${siteProfile.email}`}
            className="inline-flex rounded-full border border-[color:var(--foreground)] px-5 py-3 text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)] transition-colors duration-300 hover:bg-[color:var(--foreground)] hover:text-[color:var(--surface)]"
          >
            {siteProfile.email}
          </a>
        </div>

        <div className="grid gap-10 text-sm text-[color:var(--muted)] md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em]">Navigate</p>
            <div className="flex flex-col gap-2">
              <Link to="/" className="hover:text-[color:var(--foreground)]">
                Home
              </Link>
              <Link to="/about" className="hover:text-[color:var(--foreground)]">
                About
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em]">Elsewhere</p>
            <div className="flex flex-col gap-2">
              {siteProfile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[color:var(--foreground)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

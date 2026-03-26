import { Link } from 'react-router-dom'
import { RevealSection } from '../components/reveal-section'
import { featuredProjects, siteProfile } from '../data/portfolio'

export function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-5 md:px-8">
      <section
        data-page-hero
        className="grid gap-14 border-x border-b border-[color:var(--border)] px-0 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-20"
      >
        <div className="space-y-8">
          <p data-animate className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">
            About
          </p>
          <h1
            data-animate
            className="max-w-3xl text-5xl leading-[0.92] tracking-[-0.06em] text-[color:var(--foreground)] md:text-7xl"
          >
            A multidisciplinary practice shaped by type, movement, texture, and cinematic framing.
          </h1>
          <div data-animate className="space-y-5 text-base leading-8 text-[color:var(--muted)]">
            {siteProfile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div data-animate className="grid gap-6">
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)]">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
              alt="Creative workstation placeholder."
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Studio Notes</p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--foreground)]">
              This page is ready for your friend&apos;s portrait, biography, client list, awards, process notes, or press quotes.
            </p>
          </div>
        </div>
      </section>

      <RevealSection className="grid gap-8 border-x border-b border-[color:var(--border)] px-0 py-14 md:grid-cols-3 md:px-8">
        {siteProfile.aboutSections.map((section) => (
          <article
            key={section.title}
            data-animate
            className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {section.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-[color:var(--foreground)]">{section.body}</p>
          </article>
        ))}
      </RevealSection>

      <RevealSection className="grid gap-8 border-x border-b border-[color:var(--border)] px-0 py-14 md:grid-cols-2 md:px-8">
        <div data-animate className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Services</p>
          <div className="grid gap-4">
            {siteProfile.services.map((service) => (
              <div
                key={service}
                className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] px-5 py-4 text-sm leading-7 text-[color:var(--foreground)]"
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        <div data-animate className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Tools</p>
          <div className="flex flex-wrap gap-3">
            {siteProfile.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[color:var(--foreground)]"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
            <p className="text-sm leading-7 text-[color:var(--foreground)]">
              Want to turn this into a proper press-style profile later? Add awards, selected clients, exhibitions, or a downloadable PDF link here.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-x border-b border-[color:var(--border)] px-0 py-14 md:px-8">
        <div data-animate className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Selected Projects
            </p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em] text-[color:var(--foreground)] md:text-5xl">
              A few entry points into the archive.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              data-animate
              className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-5 transition-colors duration-300 hover:border-[color:var(--foreground)]"
            >
              <p className="text-xs uppercase tracking-[0.26em] text-[color:var(--muted)]">
                {project.client}
              </p>
              <h3 className="mt-3 text-2xl tracking-[-0.04em] text-[color:var(--foreground)]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                {project.disciplines.join(' / ')}
              </p>
            </Link>
          ))}
        </div>
      </RevealSection>
    </div>
  )
}

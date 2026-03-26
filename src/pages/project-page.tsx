import { Link, Navigate, useParams } from 'react-router-dom'
import { MediaRenderer } from '../components/media-renderer'
import { RevealSection } from '../components/reveal-section'
import { getProjectBySlug, getProjectNeighbors } from '../data/portfolio'

export function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const { previous, next } = getProjectNeighbors(project.slug)

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col px-5 md:px-8">
      <section
        data-page-hero
        className="grid gap-12 border-x border-b border-[color:var(--border)] px-0 py-14 md:grid-cols-[0.8fr_1.2fr] md:px-8 md:py-20"
      >
        <div className="space-y-8">
          <div data-animate className="space-y-3">
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">
              {project.client} / {project.year}
            </p>
            <h1 className="text-5xl leading-[0.92] tracking-[-0.06em] text-[color:var(--foreground)] md:text-7xl">
              {project.title}
            </h1>
          </div>

          <p data-animate className="max-w-xl text-base leading-8 text-[color:var(--muted)]">
            {project.overview}
          </p>

          <div data-animate className="grid gap-8 text-sm leading-7 text-[color:var(--muted)] md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--foreground)]">Roles</p>
              <p className="mt-3">{project.roles.join(' / ')}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--foreground)]">Tools</p>
              <p className="mt-3">{project.tools.join(' / ')}</p>
            </div>
          </div>

          <div data-animate className="grid gap-5 text-sm leading-7 text-[color:var(--muted)]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--foreground)]">Challenge</p>
              <p className="mt-2">{project.challenge}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--foreground)]">Outcome</p>
              <p className="mt-2">{project.outcome}</p>
            </div>
          </div>
        </div>

        <div data-animate className="overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)]">
          {project.heroMedia.type === 'image' ? (
            <img
              src={project.heroMedia.src}
              alt={project.heroMedia.alt}
              className="h-full w-full object-cover"
            />
          ) : (
            <iframe
              src={project.heroMedia.embedUrl}
              title={project.heroMedia.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="aspect-[16/10] h-full w-full"
            />
          )}
        </div>
      </section>

      <RevealSection className="border-x border-b border-[color:var(--border)] px-0 py-14 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {project.gallery.map((block) => (
            <MediaRenderer key={block.id} block={block} />
          ))}
        </div>
      </RevealSection>

      <RevealSection className="grid gap-8 border-x border-b border-[color:var(--border)] px-0 py-14 md:grid-cols-[1fr_1fr] md:px-8">
        <div data-animate className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Credits</p>
          <div className="mt-4 flex flex-col gap-3 text-sm leading-7 text-[color:var(--foreground)]">
            {project.credits.map((credit) => (
              <p key={credit}>{credit}</p>
            ))}
          </div>
        </div>

        <div data-animate className="rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)] p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Project Notes</p>
          <p className="mt-4 text-sm leading-7 text-[color:var(--foreground)]">
            This template is ready for deeper case-study text, process sketches, deliverable lists, frame breakdowns, or final campaign credits once the real project assets arrive.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="grid gap-px border-x border-b border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-2">
        {previous ? (
          <Link
            to={`/work/${previous.slug}`}
            data-animate
            className="bg-[color:var(--surface)] px-5 py-8 transition-colors duration-300 hover:bg-[color:var(--panel)] md:px-8 md:py-10"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Previous</p>
            <h2 className="mt-3 text-3xl tracking-[-0.05em] text-[color:var(--foreground)]">
              {previous.title}
            </h2>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            to={`/work/${next.slug}`}
            data-animate
            className="bg-[color:var(--surface)] px-5 py-8 text-left transition-colors duration-300 hover:bg-[color:var(--panel)] md:px-8 md:py-10"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--muted)]">Next</p>
            <h2 className="mt-3 text-3xl tracking-[-0.05em] text-[color:var(--foreground)]">
              {next.title}
            </h2>
          </Link>
        ) : (
          <div />
        )}
      </RevealSection>
    </div>
  )
}

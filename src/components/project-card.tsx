import clsx from 'clsx'
import { Link } from 'react-router-dom'
import type { ProjectSummary } from '../types/portfolio'

type ProjectCardProps = {
  project: ProjectSummary
  priority?: boolean
}

const aspectClasses = {
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  cinema: 'aspect-[16/10]',
  ultrawide: 'aspect-[21/9]',
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block"
      data-animate
      aria-label={`View project ${project.title}`}
    >
      <div className="space-y-4">
        <div
          className={clsx(
            'overflow-hidden rounded-[2rem] bg-[color:var(--panel)] shadow-[var(--shadow)]',
            aspectClasses[project.thumbnail.aspect ?? 'landscape'],
          )}
        >
          <img
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--muted)]">
              {project.client}
            </p>
            <h3 className="text-[2.4rem] leading-[0.92] tracking-[0.01em] text-[color:var(--foreground)]">
              {project.title}
            </h3>
          </div>
          <span
            className="mt-1 h-3 w-3 rounded-full border border-white/40"
            style={{ backgroundColor: project.accent }}
          />
        </div>
        <p className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted)]">
          {project.disciplines.join(' / ')} <span className="mx-2">&bull;</span> {project.year}
        </p>
      </div>
    </Link>
  )
}

import clsx from 'clsx'
import type { MediaBlock } from '../types/portfolio'

type MediaRendererProps = {
  block: MediaBlock
}

const aspectClasses = {
  portrait: 'aspect-[4/5]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  cinema: 'aspect-[16/10]',
  ultrawide: 'aspect-[21/9]',
}

export function MediaRenderer({ block }: MediaRendererProps) {
  const aspect = aspectClasses[block.aspect ?? 'landscape']

  if (block.type === 'image') {
    return (
      <figure data-animate className="space-y-3">
        <div className={clsx('overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)]', aspect)}>
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        {block.caption ? (
          <figcaption className="text-sm text-[color:var(--muted)]">{block.caption}</figcaption>
        ) : null}
      </figure>
    )
  }

  if (block.type === 'video') {
    return (
      <figure data-animate className="space-y-3">
        <div className={clsx('overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-black', aspect)}>
          <iframe
            src={block.embedUrl}
            title={block.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        {block.caption ? (
          <figcaption className="text-sm text-[color:var(--muted)]">{block.caption}</figcaption>
        ) : null}
      </figure>
    )
  }

  return (
    <figure data-animate className="space-y-3">
      <div className={clsx('overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--panel)]', aspect)}>
        <div className="hidden h-full w-full md:block">
          <iframe
            src={block.embedUrl}
            title={block.title}
            loading="lazy"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        <div className="flex h-full flex-col md:hidden">
          <img
            src={block.poster}
            alt={block.title}
            loading="lazy"
            className="h-full w-full flex-1 object-cover"
          />
          <div className="space-y-3 border-t border-[color:var(--border)] p-5">
            <p className="text-sm text-[color:var(--muted)]">{block.description}</p>
            <a
              href={block.embedUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-[color:var(--foreground)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[color:var(--foreground)]"
            >
              Open 3D Embed
            </a>
          </div>
        </div>
      </div>
      <figcaption className="text-sm text-[color:var(--muted)]">{block.description}</figcaption>
    </figure>
  )
}

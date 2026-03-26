import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[70svh] w-full max-w-7xl items-center px-5 md:px-8">
      <div className="w-full border-x border-b border-[color:var(--border)] px-0 py-16 md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--muted)]">404</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-[0.92] tracking-[-0.06em] text-[color:var(--foreground)] md:text-7xl">
          This project page does not exist yet.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-[color:var(--muted)]">
          Add the missing project to the portfolio data or head back to the homepage and choose another case study.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-[color:var(--foreground)] px-5 py-3 text-sm uppercase tracking-[0.25em] text-[color:var(--foreground)] transition-colors duration-300 hover:bg-[color:var(--foreground)] hover:text-[color:var(--surface)]"
        >
          Back Home
        </Link>
      </div>
    </div>
  )
}

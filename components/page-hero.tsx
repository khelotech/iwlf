import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-primary text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-blue"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-saffron/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 lg:py-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-medium text-white/70"
        >
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="text-white">{title}</span>
        </nav>

        {eyebrow && (
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-brand-saffron">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <span className="mt-4 flex h-1 w-20 overflow-hidden rounded-full">
          <span className="flex-1 bg-brand-saffron" />
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-brand-green" />
        </span>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-white/80">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

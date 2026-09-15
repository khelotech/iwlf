import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Trophy } from 'lucide-react'

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
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-35 lg:block"
      >
        <Image
          src="/images/g5.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-center mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-primary" />
      </div>
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
          <div className="mt-7 inline-flex items-center gap-2 border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-saffron backdrop-blur-sm">
            <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
            {eyebrow}
          </div>
        )}
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <span className="mt-5 flex h-1.5 w-24 overflow-hidden rounded-full shadow-lg">
          <span className="flex-1 bg-brand-saffron" />
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-brand-green" />
        </span>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

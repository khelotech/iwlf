import Image from 'next/image'
import Link from 'next/link'
import { Trophy, ArrowRight } from 'lucide-react'

export function HeroBanner() {
  return (
    <section
      aria-label="Featured campaign"
      className="relative isolate overflow-hidden bg-brand-primary text-white"
    >
      {/* Modern gradient wash + glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-blue"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-blue/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-saffron/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 lg:py-24">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white ring-1 ring-white/25 backdrop-blur">
            <Trophy className="h-4 w-4 text-brand-saffron" aria-hidden="true" />
            CWG 2026 · Gold
          </span>
          <h1 className="mt-6 text-balance text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Gold for India,
            <br />
            <span className="bg-gradient-to-r from-white via-white to-brand-saffron bg-clip-text text-transparent">
              Pride for the Nation
            </span>
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            The Indian Weightlifting Federation congratulates{' '}
            <span className="font-bold text-white">Mirabai Chanu</span> on her
            historic Commonwealth Games 2026 weightlifting gold — a proud moment
            for the nation.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/news"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-primary shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
            >
              Latest News
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-wide backdrop-blur transition-colors hover:bg-white/15"
            >
              Upcoming Events
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
            <Image
              src="/images/g5.png"
              alt="Indian weightlifters celebrating a medal on the competition platform"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
              priority
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 to-transparent"
            />
          </div>
          {/* Tricolor accent bar */}
          <div className="absolute -bottom-3 left-8 right-8 flex h-2 overflow-hidden rounded-full shadow-lg">
            <span className="flex-1 bg-brand-saffron" />
            <span className="flex-1 bg-white" />
            <span className="flex-1 bg-brand-green" />
          </div>
        </div>
      </div>
    </section>
  )
}

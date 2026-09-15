import Image from 'next/image'
import { CalendarDays, ArrowUpRight } from 'lucide-react'
import { latestNews } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

export function LatestNews({
  limit,
  heading = true,
  action,
}: {
  limit?: number
  heading?: boolean
  action?: { label: string; href: string }
}) {
  const items = typeof limit === 'number' ? latestNews.slice(0, limit) : latestNews
  const [featured, ...rest] = items

  return (
    <section id="news" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {heading && (
          <SectionHeading eyebrow="Press Room" title="Latest News" action={action} />
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured story */}
          <a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl lg:row-span-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/images/g3.png"
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-brand-maroon px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                {featured.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {featured.date}
              </div>
              <h3 className="mt-3 text-xl font-bold leading-snug text-brand-primary">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-secondary">
                Read more
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </a>

          {/* Secondary stories */}
          {rest.slice(0, 4).map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl bg-card p-5 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span className="rounded bg-secondary px-2 py-0.5 font-bold uppercase tracking-wide text-brand-secondary">
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.date}
                </span>
              </div>
              <h3 className="mt-2.5 text-base font-bold leading-snug text-brand-primary group-hover:text-brand-secondary">
                {item.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {item.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

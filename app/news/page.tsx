import type { Metadata } from 'next'
import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { latestNews } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'News | Indian Weightlifting Federation',
  description:
    'Latest announcements, press releases and results from the Indian Weightlifting Federation.',
}

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Press Room"
          title="Latest News"
          description="Announcements, competition updates and stories from Indian weightlifting."
        />

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestNews.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex min-h-64 flex-col overflow-hidden border border-border border-t-4 border-t-brand-saffron bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="absolute right-0 top-0 h-12 w-12 border-b border-l border-brand-secondary/15" />
                  <div className="flex items-center justify-between gap-3 text-xs font-medium text-muted-foreground">
                    <span className="rounded bg-secondary px-2 py-1 font-bold uppercase tracking-wide text-brand-secondary">
                      {item.category}
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.date}
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-extrabold leading-snug text-brand-primary transition-colors group-hover:text-brand-secondary">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-6 text-sm font-bold text-brand-secondary">
                    Read full story
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
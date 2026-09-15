import type { Metadata } from 'next'
import { ArrowUpRight, CalendarDays, MapPin, Trophy } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { athleteRankings, events } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Results | Indian Weightlifting Federation',
  description:
    'Official competition result books and completed championship results from the Indian Weightlifting Federation.',
}

const completedEvents = events.filter((event) => event.status === 'Completed')

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Competition Archive"
          title="Results"
          description="Browse result books and completed championship records from Indian weightlifting competitions."
        />

        <section className="bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
              Current Standings
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-brand-primary sm:text-3xl">
              Athlete Rankings
            </h2>
            <div className="mt-7 overflow-x-auto border border-border border-t-4 border-t-brand-saffron bg-card shadow-sm">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-brand-primary text-xs font-bold uppercase tracking-wide text-white">
                  <tr>
                    <th scope="col" className="px-4 py-4">Rank</th>
                    <th scope="col" className="px-4 py-4">Athlete</th>
                    <th scope="col" className="px-4 py-4">Category</th>
                    <th scope="col" className="px-4 py-4">State</th>
                    <th scope="col" className="px-4 py-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {athleteRankings.map((athlete) => (
                    <tr
                      key={`${athlete.rank}-${athlete.athlete}`}
                      className="transition-colors hover:bg-muted"
                    >
                      <td className="px-4 py-4 font-extrabold text-brand-secondary">
                        {athlete.rank}
                      </td>
                      <th scope="row" className="px-4 py-4 font-bold text-brand-primary">
                        {athlete.athlete}
                      </th>
                      <td className="px-4 py-4 text-muted-foreground">
                        {athlete.category}
                      </td>
                      <td className="px-4 py-4 text-muted-foreground">
                        {athlete.state}
                      </td>
                      <td className="px-4 py-4 text-right font-bold text-brand-primary">
                        {athlete.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
              Result Books
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-brand-primary sm:text-3xl">
              Completed Championships
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {completedEvents.map((event) => (
                <article
                  key={event.title}
                  className="group flex flex-col border border-border border-t-4 border-t-brand-green bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-primary text-white transition-colors group-hover:bg-brand-secondary">
                      <Trophy className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wide text-brand-secondary">
                      {event.level} Championship
                    </span>
                  </div>
                  <h2 className="mt-5 text-xl font-extrabold leading-snug text-brand-primary">
                    {event.title}
                  </h2>
                  <dl className="mt-5 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <dt className="sr-only">Dates</dt>
                      <dd>{event.dateRange}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <dt className="sr-only">Venue</dt>
                      <dd>
                        {event.venue}, {event.city}
                      </dd>
                    </div>
                  </dl>
                  <a
                    href="https://iwlf.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-brand-secondary hover:text-brand-primary"
                  >
                    View official results
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
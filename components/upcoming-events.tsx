import { MapPin, CalendarClock, Globe2 } from 'lucide-react'
import { events } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

const statusStyles: Record<string, string> = {
  Upcoming: 'bg-brand-green/15 text-brand-green',
  Ongoing: 'bg-brand-saffron/20 text-brand-maroon',
  Completed: 'bg-secondary text-muted-foreground',
}

export function UpcomingEvents({
  limit,
  heading = true,
  action,
}: {
  limit?: number
  heading?: boolean
  action?: { label: string; href: string }
}) {
  const items = typeof limit === 'number' ? events.slice(0, limit) : events

  return (
    <section id="events" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {heading && (
          <SectionHeading eyebrow="Calendar" title="Upcoming Events" action={action} />
        )}

        <ul className="grid gap-5 sm:grid-cols-2">
          {items.map((event) => (
            <li
              key={event.title}
              className="flex gap-5 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
                <CalendarClock className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${statusStyles[event.status]}`}
                  >
                    {event.status}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
                    {event.level}
                  </span>
                </div>
                <h3 className="mt-2 text-base font-bold leading-snug text-brand-primary">
                  {event.title}
                </h3>
                <dl className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <CalendarClock className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <dt className="sr-only">Dates</dt>
                    <dd>{event.dateRange}</dd>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <dt className="sr-only">Venue</dt>
                    <dd>
                      {event.venue}, {event.city}
                    </dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

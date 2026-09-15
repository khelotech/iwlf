import { Users, Medal, MapPinned } from 'lucide-react'

const stats = [
  { icon: Users, value: '30+', label: 'State & UT associations affiliated' },
  { icon: Medal, value: '1972', label: 'Federation serving Indian weightlifting' },
  { icon: MapPinned, value: 'Noida', label: 'Head office, Uttar Pradesh' },
]

export function AboutStrip() {
  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            About the Federation
          </p>
          <h2 className="mt-2 text-2xl font-extrabold text-brand-primary sm:text-3xl">
            The governing body of weightlifting in India
          </h2>
          <span className="mt-3 flex h-1 w-16 overflow-hidden rounded-full">
            <span className="flex-1 bg-brand-saffron" />
            <span className="flex-1 bg-brand-green" />
            <span className="flex-1 bg-brand-blue" />
          </span>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            The Indian Weightlifting Federation (IWLF) is the national governing
            body for the sport of weightlifting in India. Affiliated to the
            International Weightlifting Federation and the Asian Weightlifting
            Federation, the IWLF organises national championships, selects and
            trains athletes for international competition, and promotes the
            sport across every state and union territory.
          </p>
          <a
            href="https://iwlf.in/about-us"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-full bg-brand-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
          >
            Learn more about IWLF
          </a>
        </div>

        <dl className="grid gap-4 sm:grid-cols-3 lg:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <s.icon
                className="mx-auto h-8 w-8 text-brand-secondary"
                aria-hidden="true"
              />
              <dt className="mt-3 text-2xl font-extrabold text-brand-primary">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

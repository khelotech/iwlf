import type { Metadata } from 'next'
import { Award, Building2, Target, Users } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'About Us | Indian Weightlifting Federation',
  description:
    'Learn about the Indian Weightlifting Federation, the national governing body for weightlifting in India.',
}

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To develop, govern and promote weightlifting across India while creating a clear pathway for athletes to represent the nation on the world stage.',
  },
  {
    icon: Users,
    title: 'Our Reach',
    text: 'Working with state and union territory associations, the federation supports athletes, coaches, technical officials and competition organisers nationwide.',
  },
  {
    icon: Award,
    title: 'Our Commitment',
    text: 'We uphold fair play, athlete welfare and high technical standards at every level of the sport, from grassroots participation to elite competition.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Indian Weightlifting Federation"
          title="About Us"
          description="Guiding the growth of weightlifting in India and supporting the athletes who carry the nation forward."
        />

        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Who We Are
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-brand-primary sm:text-3xl">
                The national governing body of weightlifting in India
              </h2>
              <span className="mt-3 flex h-1 w-16 overflow-hidden rounded-full">
                <span className="flex-1 bg-brand-saffron" />
                <span className="flex-1 bg-brand-green" />
                <span className="flex-1 bg-brand-blue" />
              </span>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  The Indian Weightlifting Federation (IWLF) is the national
                  governing body for the sport of weightlifting in India. Since
                  1972, the federation has worked to build a strong, inclusive
                  and competitive weightlifting community throughout the
                  country.
                </p>
                <p>
                  Affiliated with the International Weightlifting Federation and
                  the Asian Weightlifting Federation, IWLF conducts national
                  championships, develops technical standards and selects
                  athletes for international competition.
                </p>
              </div>
            </div>

            <aside className="relative overflow-hidden border-l-4 border-brand-saffron bg-muted px-6 py-7 shadow-sm sm:px-8">
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-24 w-24 border-b border-l border-brand-secondary/15"
              />
              <Building2
                className="h-9 w-9 text-brand-secondary"
                aria-hidden="true"
              />
              <h2 className="mt-4 text-lg font-extrabold text-brand-primary">
                Federation at a glance
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-bold text-brand-primary">Established</dt>
                  <dd className="mt-1 text-muted-foreground">1972</dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-primary">Head Office</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Noida, Uttar Pradesh
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-brand-primary">Affiliations</dt>
                  <dd className="mt-1 text-muted-foreground">
                    International and Asian Weightlifting Federations
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="bg-muted py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
              What Drives Us
            </p>
            <h2 className="mt-2 text-center text-2xl font-extrabold text-brand-primary sm:text-3xl">
              Building a stronger future for Indian weightlifting
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="group border-t-4 border-brand-saffron bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 items-center justify-center bg-brand-primary text-white">
                    <pillar.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-brand-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
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
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { UpcomingEvents } from '@/components/upcoming-events'

export const metadata: Metadata = {
  title: 'Events | Indian Weightlifting Federation',
  description:
    'Upcoming and completed national and international weightlifting events from the Indian Weightlifting Federation.',
}

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Competition Calendar"
          title="Events"
          description="Follow upcoming championships and explore recent weightlifting competitions in India and around the world."
        />
        <UpcomingEvents heading={false} />
      </main>
      <SiteFooter />
    </div>
  )
}
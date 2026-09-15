import { SiteHeader } from '@/components/site-header'
import { HeroBanner } from '@/components/hero-banner'
import { AboutStrip } from '@/components/about-strip'
import { LatestNews } from '@/components/latest-news'
import { UpcomingEvents } from '@/components/upcoming-events'
import { PhotoGallery } from '@/components/photo-gallery'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroBanner />
        <AboutStrip />
        <LatestNews />
        <UpcomingEvents />
        <PhotoGallery />
      </main>
      <SiteFooter />
    </div>
  )
}

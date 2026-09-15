import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { PhotoGallery } from '@/components/photo-gallery'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Gallery | Indian Weightlifting Federation',
  description:
    'Explore photographs from Indian Weightlifting Federation championships, events and athlete achievements.',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Moments in Motion"
          title="Photo Gallery"
          description="A collection of moments from IWLF championships, competition platforms and medal ceremonies."
        />
        <PhotoGallery heading={false} />
      </main>
      <SiteFooter />
    </div>
  )
}
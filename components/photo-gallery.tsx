'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { gallery } from '@/lib/site-data'
import { SectionHeading } from './section-heading'

export function PhotoGallery({
  limit,
  heading = true,
  action,
}: {
  limit?: number
  heading?: boolean
  action?: { label: string; href: string }
}) {
  const [active, setActive] = useState<number | null>(null)
  const items = typeof limit === 'number' ? gallery.slice(0, limit) : gallery

  return (
    <section id="gallery" className="scroll-mt-24 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {heading && (
          <SectionHeading eyebrow="Moments" title="Photo Gallery" action={action} />
        )}

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-black/5"
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-brand-primary/0 transition-colors group-hover:bg-brand-primary/20" />
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <span className="sr-only">Close</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[active].src || '/placeholder.svg'}
              alt={gallery[active].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <p className="sr-only">{gallery[active].alt}</p>
        </div>
      )}
    </section>
  )
}

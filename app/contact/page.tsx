import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { PageHero } from '@/components/page-hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { federation } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact | Indian Weightlifting Federation',
  description: 'Contact the Indian Weightlifting Federation office in Noida.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          title="Contact Us"
          description="Contact the Indian Weightlifting Federation for general enquiries and federation information."
        />
        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-l-4 border-brand-saffron bg-muted px-6 py-7 shadow-sm sm:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Head Office
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-brand-primary">
                Indian Weightlifting Federation
              </h2>
              <ul className="mt-7 space-y-5 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-brand-secondary" aria-hidden="true" />
                  <span>{federation.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand-secondary" aria-hidden="true" />
                  <a href={federation.phoneHref} className="font-bold hover:text-brand-primary">{federation.phone}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-brand-secondary" aria-hidden="true" />
                  <a href={`mailto:${federation.email}`} className="break-all font-bold hover:text-brand-primary">{federation.email}</a>
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
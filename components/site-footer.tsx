import Image from 'next/image'
import { Phone, Mail, Globe, MapPin } from 'lucide-react'
import { federation, mainMenu, quickLinks } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-brand-primary text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/iwlf-logo.png"
            alt="Indian Weightlifting Federation logo"
            width={56}
            height={92}
            className="h-16 w-auto"
          />
          <p className="mt-4 text-sm leading-relaxed">
            The national governing body for the sport of weightlifting in India.
          </p>
        </div>

        <nav aria-label="Footer menu">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Main Menu
          </h2>
          <ul className="space-y-2.5 text-sm">
            {mainMenu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h2>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            Let&apos;s Connect
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={federation.phoneHref}
                className="flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {federation.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${federation.email}`}
                className="flex items-start gap-2.5 break-all transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {federation.email}
              </a>
            </li>
            <li>
              <a
                href="https://iwlf.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-white"
              >
                <Globe className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {federation.website}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {federation.addressLine}, {federation.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {federation.name}. All rights
            reserved.
          </p>
          <p className="text-white/50">
            This is an informational demo site based on publicly available IWLF
            content.
          </p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, Phone, Menu, X } from 'lucide-react'
import { federation, primaryNav } from '@/lib/site-data'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header id="home" className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-brand-maroon text-white/90 text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <p className="hidden sm:block font-medium tracking-wide">
            Athlete Registration is now OPEN
          </p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${federation.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden md:inline">{federation.email}</span>
            </a>
            <a
              href={federation.phoneHref}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{federation.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/iwlf-logo.png"
              alt="Indian Weightlifting Federation logo"
              width={44}
              height={73}
              className="h-11 w-auto"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold uppercase tracking-wide sm:text-base">
                Indian Weightlifting
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Federation
              </span>
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {primaryNav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors hover:bg-white/10 hover:text-white ${
                    isActive(item.href) ? 'bg-white/15 text-white' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <a
              href="https://iwlf.in/athletes/login"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full border-2 border-white px-5 py-1.5 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-white hover:text-brand-primary"
            >
              Sign In
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle navigation menu</span>
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="border-t border-white/10 bg-brand-primary px-4 pb-4 lg:hidden"
          >
            <ul className="flex flex-col py-2">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-2.5 text-sm font-semibold hover:bg-white/10 ${
                        isActive(item.href) ? 'bg-white/15 text-white' : 'text-white/90'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="https://iwlf.in/athletes/login"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block rounded-full border-2 border-white px-5 py-2 text-center text-sm font-bold uppercase tracking-wide"
            >
              Sign In
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

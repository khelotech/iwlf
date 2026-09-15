import type { Metadata } from 'next'
import { AuthForm } from '@/components/auth-form'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Sign In | Indian Weightlifting Federation',
  description: 'Sign in to the Indian Weightlifting Federation portal.',
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="bg-muted py-16 lg:py-20">
        <div className="mx-auto max-w-md px-4">
          <AuthForm mode="login" />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
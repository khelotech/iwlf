import type { Metadata } from 'next'
import { AuthForm } from '@/components/auth-form'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Create Account | Indian Weightlifting Federation',
  description: 'Create an Indian Weightlifting Federation portal account.',
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="bg-muted py-16 lg:py-20">
        <div className="mx-auto max-w-md px-4">
          <AuthForm mode="signup" />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
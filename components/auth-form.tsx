'use client'

import Link from 'next/link'
import { useState } from 'react'

type AuthFormProps = {
  mode: 'login' | 'signup'
}

export function AuthForm({ mode }: AuthFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const isSignup = mode === 'signup'

  return (
    <form
      className="border border-border border-t-4 border-t-brand-saffron bg-card p-6 shadow-xl sm:p-8"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <h1 className="text-2xl font-extrabold text-brand-primary">
        {isSignup ? 'Create your account' : 'Sign in to your account'}
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {isSignup
          ? 'Register to manage athlete and federation information.'
          : 'Access your IWLF athlete or association account.'}
      </p>
      {isSignup && (
        <label className="mt-6 grid gap-2 text-sm font-bold text-brand-primary">
          Full name
          <input
            name="name"
            required
            autoComplete="name"
            className="h-11 border border-input bg-background px-3 font-normal text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
          />
        </label>
      )}
      <label className="mt-5 grid gap-2 text-sm font-bold text-brand-primary">
        Email address
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="h-11 border border-input bg-background px-3 font-normal text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
        />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-bold text-brand-primary">
        Password
        <input
          name="password"
          type="password"
          required
          minLength={8}
          autoComplete={isSignup ? 'new-password' : 'current-password'}
          className="h-11 border border-input bg-background px-3 font-normal text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
        />
      </label>
      {submitted && (
        <p className="mt-4 text-sm font-medium text-brand-green" role="status">
          {isSignup
            ? 'Your registration request has been recorded.'
            : 'Your sign-in request has been recorded.'}
        </p>
      )}
      <button
        type="submit"
        className="mt-6 w-full bg-brand-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-primary/20 transition-all hover:-translate-y-0.5 hover:bg-brand-secondary"
      >
        {isSignup ? 'Create account' : 'Sign in'}
      </button>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        {isSignup ? 'Already registered?' : 'New to IWLF?'}{' '}
        <Link
          href={isSignup ? '/login' : '/signup'}
          className="font-bold text-brand-secondary hover:text-brand-primary"
        >
          {isSignup ? 'Sign in' : 'Create an account'}
        </Link>
      </p>
    </form>
  )
}
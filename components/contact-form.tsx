'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <form
      className="border border-border border-t-4 border-t-brand-saffron bg-card p-6 shadow-lg sm:p-8"
      onSubmit={(event) => {
        event.preventDefault()
        setSent(true)
      }}
    >
      <h2 className="text-xl font-extrabold text-brand-primary">Send a message</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-brand-primary">
          Full name
          <input
            name="name"
            required
            className="h-11 border border-input bg-background px-3 font-normal text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-brand-primary">
          Email address
          <input
            name="email"
            type="email"
            required
            className="h-11 border border-input bg-background px-3 font-normal text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
          />
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-brand-primary">
        Subject
        <input
          name="subject"
          required
          className="h-11 border border-input bg-background px-3 font-normal text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
        />
      </label>
      <label className="mt-5 grid gap-2 text-sm font-bold text-brand-primary">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y border border-input bg-background px-3 py-2 font-normal text-foreground outline-none focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20"
        />
      </label>
      {sent && (
        <p className="mt-4 text-sm font-medium text-brand-green" role="status">
          Your message has been recorded. The federation will respond using the email provided.
        </p>
      )}
      <button
        type="submit"
        className="mt-6 bg-brand-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-primary/20 transition-all hover:-translate-y-0.5 hover:bg-brand-secondary"
      >
        Send message
      </button>
    </form>
  )
}
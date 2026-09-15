type SectionHeadingProps = {
  eyebrow?: string
  title: string
  action?: { label: string; href: string }
}

export function SectionHeading({ eyebrow, title, action }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 text-2xl font-extrabold text-brand-primary sm:text-3xl">
          {title}
        </h2>
        <span className="mt-3 flex h-1 w-16 overflow-hidden rounded-full">
          <span className="flex-1 bg-brand-saffron" />
          <span className="flex-1 bg-brand-green" />
          <span className="flex-1 bg-brand-blue" />
        </span>
      </div>
      {action && (
        <a
          href={action.href}
          target={action.href.startsWith('http') ? '_blank' : undefined}
          rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="text-sm font-bold text-brand-primary underline-offset-4 hover:underline"
        >
          {action.label} &rarr;
        </a>
      )}
    </div>
  )
}

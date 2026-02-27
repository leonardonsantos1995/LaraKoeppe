import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  light?: boolean
}

export function SectionHeading({ title, subtitle, className, light }: SectionHeadingProps) {
  return (
    <div className={cn('mb-16 text-center', className)}>
      <h2
        className={cn(
          'font-display text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl',
          light ? 'text-stone-50' : 'text-charcoal-900'
        )}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-blush-300" />
      {subtitle && (
        <p
          className={cn(
            'mx-auto mt-6 max-w-2xl text-lg',
            light ? 'text-stone-300' : 'text-charcoal-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

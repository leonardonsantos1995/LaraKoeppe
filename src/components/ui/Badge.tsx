import { cn } from '@/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block rounded-sm bg-blush-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-charcoal-800',
        className
      )}
    >
      {children}
    </span>
  )
}

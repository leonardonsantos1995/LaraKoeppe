import { cn } from '@/utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-sm shadow-sm',
        hover && 'transition-shadow duration-300 hover:shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}

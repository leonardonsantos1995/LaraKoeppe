import { cn } from '@/utils/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-300',
        {
          'bg-charcoal-900 text-stone-50 hover:bg-charcoal-800': variant === 'primary',
          'border border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-stone-50':
            variant === 'outline',
          'text-charcoal-700 hover:text-charcoal-900': variant === 'ghost',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

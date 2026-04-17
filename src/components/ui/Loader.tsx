import { motion } from 'motion/react'
import { cn } from '@/utils/cn'

export type LoaderVariant = 'dark' | 'light'
export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl'

interface LoaderProps {
  variant?: LoaderVariant
  size?: LoaderSize
  className?: string
}

const sizeMap: Record<LoaderSize, { logo: string; bar: string; gap: string }> = {
  sm: { logo: 'w-16 md:w-20', bar: 'w-16', gap: 'mt-4' },
  md: { logo: 'w-24 md:w-32', bar: 'w-20', gap: 'mt-6' },
  lg: { logo: 'w-32 md:w-40', bar: 'w-24', gap: 'mt-8' },
  xl: { logo: 'w-[220px] md:w-[280px]', bar: 'w-24', gap: 'mt-10' },
}

const variantMap: Record<
  LoaderVariant,
  { bg: string; logo: string; barTrack: string; barFill: string }
> = {
  dark: {
    bg: 'bg-charcoal-900',
    logo: '/images/logo/logo-white.png',
    barTrack: 'bg-charcoal-700',
    barFill: 'bg-olive-300',
  },
  light: {
    bg: 'bg-charcoal-100',
    logo: '/images/logo/logo-black.png',
    barTrack: 'bg-charcoal-300',
    barFill: 'bg-olive-400',
  },
}

export function Loader({
  variant = 'dark',
  size = 'xl',
  className,
}: LoaderProps) {
  const { logo, bar, gap } = sizeMap[size]
  const { bg, logo: logoSrc, barTrack, barFill } = variantMap[variant]

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        bg,
        className
      )}
    >
      <img
        src={logoSrc}
        alt=""
        aria-hidden
        className={cn('select-none', logo)}
      />

      <div
        className={cn(
          'h-[2px] overflow-hidden rounded-full',
          barTrack,
          bar,
          gap
        )}
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
          className={cn('h-full w-full', barFill)}
        />
      </div>
    </div>
  )
}

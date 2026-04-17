import { Loader, type LoaderSize } from '@/components/ui/Loader'
import { cn } from '@/utils/cn'

interface ImageLoaderProps {
  size?: LoaderSize
  className?: string
}

export function ImageLoader({ size = 'md', className }: ImageLoaderProps) {
  return (
    <Loader
      variant="light"
      size={size}
      className={cn('absolute inset-0 z-10', className)}
    />
  )
}

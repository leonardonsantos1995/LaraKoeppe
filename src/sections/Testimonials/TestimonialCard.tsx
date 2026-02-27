import { Quote } from 'lucide-react'
import type { Testimonial } from '@/types/testimonial'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex-shrink-0 w-full px-4 md:w-1/2">
      <div className="h-full p-8">
        <Quote size={32} className="mb-4 text-blush-300 opacity-60" />
        <p className="mb-6 font-body text-base italic leading-relaxed text-stone-300">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div>
          <span className="block text-sm font-semibold text-stone-100">
            {testimonial.name}
          </span>
          <span className="text-xs text-stone-500">
            {testimonial.project}
          </span>
        </div>
      </div>
    </div>
  )
}

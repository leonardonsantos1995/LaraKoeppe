import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInWhenVisible } from '@/components/animation/FadeInWhenVisible'
import { testimonials } from '@/data/testimonials'
import { TestimonialCard } from './TestimonialCard'
import { cn } from '@/utils/cn'

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="depoimentos" className="py-24 bg-charcoal-900">
      <Container>
        <SectionHeading
          title="Depoimentos"
          subtitle="O que dizem os clientes sobre meu trabalho."
          light
        />

        <FadeInWhenVisible>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} />
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                disabled={!canScrollPrev}
                className={cn(
                  'flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-600 text-stone-400 transition-colors',
                  canScrollPrev ? 'hover:border-blush-300 hover:text-blush-300' : 'opacity-40 cursor-default'
                )}
                aria-label="Depoimento anterior"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                disabled={!canScrollNext}
                className={cn(
                  'flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-600 text-stone-400 transition-colors',
                  canScrollNext ? 'hover:border-blush-300 hover:text-blush-300' : 'opacity-40 cursor-default'
                )}
                aria-label="Próximo depoimento"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      </Container>
    </section>
  )
}

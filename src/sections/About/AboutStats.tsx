import { about } from '@/data/about'
import { FadeInWhenVisible } from '@/components/animation/FadeInWhenVisible'

export function AboutStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6 items-start">
      {about.stats.map((stat, i) => (
        <FadeInWhenVisible key={stat.label} delay={i * 0.1}>
          <div className="flex flex-col items-center text-center">
            <span
              className="font-body text-3xl font-semibold leading-none text-olive-400 md:text-4xl"
              style={{ fontVariantNumeric: 'lining-nums' }}
            >
              {stat.value}
            </span>
            <span className="mt-3 flex min-h-[2.5rem] items-start justify-center text-xs font-medium uppercase tracking-wider text-charcoal-500">
              {stat.label}
            </span>
          </div>
        </FadeInWhenVisible>
      ))}
    </div>
  )
}

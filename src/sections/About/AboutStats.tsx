import { about } from '@/data/about'
import { FadeInWhenVisible } from '@/components/animation/FadeInWhenVisible'

export function AboutStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6 items-start">
      {about.stats.map((stat, i) => (
        <FadeInWhenVisible key={stat.label} delay={i * 0.1}>
          <div className="text-center">
            <span className="inline-flex items-baseline h-10 font-display text-3xl font-semibold text-blush-400 md:text-4xl">
              {stat.value}
            </span>
            <span className="mt-2 block text-xs font-medium uppercase tracking-wider text-charcoal-500">
              {stat.label}
            </span>
          </div>
        </FadeInWhenVisible>
      ))}
    </div>
  )
}

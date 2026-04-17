import { motion } from 'motion/react'
import { Briefcase } from 'lucide-react'
import { staggerItemVariants } from '@/components/animation/StaggerChildren'

interface ExperienceItemProps {
  role: string
  company: string
  employmentType: string
  period: string
  duration: string
  description: string
  skills: string[]
  isLast?: boolean
}

export function ExperienceItem({
  role,
  company,
  employmentType,
  period,
  duration,
  description,
  skills,
  isLast = false,
}: ExperienceItemProps) {
  return (
    <motion.div variants={staggerItemVariants} className="relative pl-10 md:pl-14">
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-olive-200 text-olive-500 md:h-10 md:w-10">
        <Briefcase size={16} className="md:hidden" />
        <Briefcase size={18} className="hidden md:block" />
      </div>

      {!isLast && (
        <div
          className="absolute left-4 top-8 w-px bg-olive-200 md:left-5 md:top-10"
          style={{ height: 'calc(100% - 1rem)' }}
          aria-hidden
        />
      )}

      <div className={isLast ? 'pb-0' : 'pb-10 md:pb-12'}>
        <h3 className="font-body text-lg font-semibold text-charcoal-900 md:text-xl">
          {role}
        </h3>
        <p className="mt-1 text-sm text-charcoal-700 md:text-base">
          <span className="font-medium">{company}</span>
          <span className="text-charcoal-500"> &middot; {employmentType}</span>
        </p>
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-olive-400">
          {period} &middot; {duration}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-charcoal-600 md:text-base">
          {description}
        </p>

        {skills.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-sm bg-stone-100 px-3 py-1.5 text-xs font-medium text-charcoal-700"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

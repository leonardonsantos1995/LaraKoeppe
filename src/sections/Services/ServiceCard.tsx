import { motion } from 'motion/react'
import {
  Home,
  Palette,
  Monitor,
  Ruler,
  ScanLine,
  type LucideIcon,
} from 'lucide-react'
import type { Service } from '@/types/service'
import { staggerItemVariants } from '@/components/animation/StaggerChildren'

const iconMap: Record<string, LucideIcon> = {
  Home,
  Palette,
  Monitor,
  Ruler,
  ScanLine,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Home

  return (
    <motion.div
      variants={staggerItemVariants}
      className="group p-8 bg-white rounded-sm border border-transparent transition-all duration-300 hover:shadow-md hover:border-b-2 hover:border-b-blush-300"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-stone-100 text-charcoal-700 transition-colors group-hover:bg-blush-100 group-hover:text-blush-500">
        <Icon size={24} />
      </div>
      <h3 className="font-display text-lg font-semibold text-charcoal-900 mb-3">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-charcoal-500">
        {service.description}
      </p>
    </motion.div>
  )
}

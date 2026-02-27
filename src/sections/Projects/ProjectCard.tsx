import { motion } from 'motion/react'
import { Camera, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/types/project'
import { categoryLabels } from '@/types/project'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const thumbnail = project.images[project.thumbnailIndex ?? 0]

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="group relative cursor-pointer overflow-hidden"
      onClick={() => onOpen(project)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-100">
        <img
          src={
            thumbnail?.src ??
            'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80'
          }
          alt={thumbnail?.alt ?? project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Permanent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/10 to-transparent" />

        {/* Hover darkening */}
        <div className="absolute inset-0 bg-charcoal-900/0 transition-all duration-500 group-hover:bg-charcoal-900/20" />

        {/* Category tag — top left */}
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-blush-300/90 backdrop-blur-sm px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-charcoal-900">
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* Photo count — top right, appears on hover */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-xs font-medium text-charcoal-800 opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
          <Camera size={13} />
          {project.images.length}
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-display text-2xl font-semibold text-white transition-transform duration-500 translate-y-1 group-hover:translate-y-0">
            {project.title}
          </h3>

          {/* Services — revealed on hover */}
          <div className="flex flex-wrap gap-1.5 mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
            {project.services.slice(0, 3).map((s) => (
              <span
                key={s}
                className="text-[11px] text-stone-300 border border-stone-400/30 px-2 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA — revealed on hover */}
          <div className="flex items-center gap-2 mt-3 opacity-0 translate-y-3 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="text-xs font-medium uppercase tracking-wider text-blush-300">
              Ver Projeto
            </span>
            <ArrowUpRight size={14} className="text-blush-300" />
          </div>
        </div>

        {/* Blush accent line — animates on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-blush-300 scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100" />
      </div>
    </motion.div>
  )
}

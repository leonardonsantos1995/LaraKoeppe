import { AnimatePresence } from 'motion/react'
import type { Project } from '@/types/project'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  projects: Project[]
  onOpenProject: (project: Project) => void
}

export function ProjectGrid({ projects, onOpenProject }: ProjectGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={onOpenProject}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

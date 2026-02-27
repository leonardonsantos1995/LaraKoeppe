import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInWhenVisible } from '@/components/animation/FadeInWhenVisible'
import { projects } from '@/data/projects'
import { useProjectFilter } from '@/hooks/useProjectFilter'
import type { Project } from '@/types/project'
import { ProjectFilter } from './ProjectFilter'
import { ProjectGrid } from './ProjectGrid'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const { activeFilter, setActiveFilter, filteredProjects } = useProjectFilter(projects)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projetos" className="py-24 bg-cream">
      <Container>
        <SectionHeading
          title="Projetos"
          subtitle="Uma seleção dos meus trabalhos mais recentes."
        />

        <FadeInWhenVisible>
          <ProjectFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </FadeInWhenVisible>

        <ProjectGrid
          projects={filteredProjects}
          onOpenProject={setSelectedProject}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Container>
    </section>
  )
}

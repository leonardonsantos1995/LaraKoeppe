import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import type { Project } from '@/types/project'
import { ProjectGrid } from './ProjectGrid'
import { ProjectModal } from './ProjectModal'

const sortedProjects = [...projects].sort((a, b) =>
  a.title.localeCompare(b.title, 'pt-BR')
)

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projetos" className="py-24 bg-cream">
      <Container>
        <SectionHeading
          title="Projetos"
          subtitle="Uma seleção dos meus trabalhos mais recentes."
        />

        <ProjectGrid
          projects={sortedProjects}
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

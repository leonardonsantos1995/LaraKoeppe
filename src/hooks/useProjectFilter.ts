import { useState, useMemo } from 'react'
import type { Project, ProjectCategory } from '@/types/project'

export function useProjectFilter(projects: Project[]) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'todos'>('todos')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'todos') return projects
    return projects.filter((p) => p.category === activeFilter)
  }, [projects, activeFilter])

  return { activeFilter, setActiveFilter, filteredProjects }
}

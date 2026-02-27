import { cn } from '@/utils/cn'
import type { ProjectCategory } from '@/types/project'
import { categoryLabels } from '@/types/project'

interface ProjectFilterProps {
  activeFilter: ProjectCategory | 'todos'
  onFilterChange: (filter: ProjectCategory | 'todos') => void
}

const filters: Array<{ key: ProjectCategory | 'todos'; label: string }> = [
  { key: 'todos', label: 'Todos' },
  ...Object.entries(categoryLabels).map(([key, label]) => ({
    key: key as ProjectCategory,
    label,
  })),
]

export function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={cn(
            'cursor-pointer px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300',
            activeFilter === filter.key
              ? 'bg-charcoal-900 text-stone-50'
              : 'bg-transparent text-charcoal-500 hover:text-charcoal-900'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

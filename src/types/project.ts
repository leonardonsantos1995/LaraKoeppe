export type ProjectCategory =
  | 'residencial'
  | 'detalhamento'
  | 'interiores'
  | 'levantamento'

export interface ProjectImage {
  src: string
  alt: string
}

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  description: string
  services: string[]
  software: string[]
  images: ProjectImage[]
  thumbnailIndex?: number
  featured: boolean
}

export const categoryLabels: Record<ProjectCategory, string> = {
  residencial: 'Residencial',
  detalhamento: 'Detalhamento',
  interiores: 'Interiores',
  levantamento: 'Levantamento',
}

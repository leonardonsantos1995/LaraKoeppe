export type ProjectCategory =
  | 'residencial'
  | 'comercial'
  | 'detalhamento'
  | 'interiores'
  | 'levantamento'

export interface ProjectImage {
  src: string
  alt: string
  type?: 'image' | 'video'
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
  comercial: 'Comercial',
  detalhamento: 'Detalhamento',
  interiores: 'Interiores',
  levantamento: 'Levantamento',
}

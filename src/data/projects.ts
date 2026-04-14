import type { Project, ProjectImage } from '@/types/project'

function buildImages(slug: string, title: string, count: number): ProjectImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/projects/${slug}/image-${i + 1}.png`,
    alt: `${title} - Vista ${i + 1}`,
  }))
}

export const projects: Project[] = [
  {
    id: 'casa-rocca',
    title: 'Casa Rocca',
    category: 'residencial',
    description:
      'Atuação no auxílio ao desenvolvimento arquitetônico, graficação, desenvolvimento de maquete eletrônica (3D), renderização, pós-produção e desenvolvimento de vídeo.',
    services: [
      'Auxílio no Desenvolvimento Arquitetônico',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
      'Desenvolvimento de Vídeo',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 8,
    images: [
      {
        src: '/images/projects/casa-rocca/rocca.mp4',
        alt: 'Casa Rocca - Vídeo',
        type: 'video',
      },
      ...buildImages('casa-rocca', 'Casa Rocca', 17),
    ],
    featured: true,
  },
  {
    id: 'casa-magna',
    title: 'Casa Magna',
    category: 'residencial',
    description:
      'Atuação no auxílio ao desenvolvimento arquitetônico, graficação, desenvolvimento de maquete eletrônica (3D), renderização e pós-produção.',
    services: [
      'Auxílio no Desenvolvimento Arquitetônico',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 16,
    images: buildImages('casa-magna', 'Casa Magna', 17),
    featured: true,
  },
  {
    id: 'casa-vinte',
    title: 'Casa Vinte',
    category: 'residencial',
    description:
      'Atuação no auxílio ao desenvolvimento arquitetônico, graficação, desenvolvimento de maquete eletrônica (3D), renderização, pós-produção e desenvolvimento de vídeo.',
    services: [
      'Auxílio no Desenvolvimento Arquitetônico',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
      'Desenvolvimento de Vídeo',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 1,
    images: [
      {
        src: '/images/projects/casa-vinte/vinte.mp4',
        alt: 'Casa Vinte - Vídeo',
        type: 'video',
      },
      ...buildImages('casa-vinte', 'Casa Vinte', 19),
    ],
    featured: true,
  },
  {
    id: 'casa-aria',
    title: 'Casa Aria',
    category: 'residencial',
    description:
      'Atuação no auxílio ao desenvolvimento arquitetônico, graficação, desenvolvimento de maquete eletrônica (3D), renderização e pós-produção.',
    services: [
      'Auxílio no Desenvolvimento Arquitetônico',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 0,
    images: [
      { src: '/images/projects/casa-aria/image-3.png', alt: 'Casa Aria - Vista 3' },
      ...buildImages('casa-aria', 'Casa Aria', 11).filter((_, i) => i !== 2),
    ],
    featured: false,
  },
  {
    id: 'casa-recanto',
    title: 'Casa Recanto',
    category: 'residencial',
    description:
      'Atuação no auxílio ao desenvolvimento arquitetônico, graficação, desenvolvimento de maquete eletrônica (3D), renderização e pós-produção.',
    services: [
      'Auxílio no Desenvolvimento Arquitetônico',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 0,
    images: [
      { src: '/images/projects/casa-recanto/image-10.png', alt: 'Casa Recanto - Vista 10' },
      ...buildImages('casa-recanto', 'Casa Recanto', 12).filter((_, i) => i !== 9),
    ],
    featured: false,
  },
]

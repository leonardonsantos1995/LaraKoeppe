import type { Project, ProjectImage } from '@/types/project'

function buildImages(slug: string, title: string, count: number): ProjectImage[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/projects/${slug}/image-${i + 1}.png`,
    alt: `${title} - Vista ${i + 1}`,
  }))
}

export const projects: Project[] = [
  {
    id: 'casa-24',
    title: 'Casa 24',
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
    thumbnailIndex: 16,
    images: [
      {
        src: '/images/projects/casa-24/rocca.mp4',
        alt: 'Casa 24 - Vídeo',
        type: 'video',
      },
      ...buildImages('casa-24', 'Casa 24', 17),
    ],
    featured: true,
  },
  {
    id: 'casa-23',
    title: 'Casa 23',
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
    images: buildImages('casa-23', 'Casa 23', 17),
    featured: true,
  },
  {
    id: 'casa-22',
    title: 'Casa 22',
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
        src: '/images/projects/casa-22/vinte.mp4',
        alt: 'Casa 22 - Vídeo',
        type: 'video',
      },
      ...buildImages('casa-22', 'Casa 22', 19),
    ],
    featured: true,
  },
  {
    id: 'casa-20',
    title: 'Casa 20',
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
      { src: '/images/projects/casa-20/image-3.png', alt: 'Casa 20 - Vista 3' },
      ...buildImages('casa-20', 'Casa 20', 11).filter((_, i) => i !== 2),
    ],
    featured: false,
  },
  {
    id: 'casa-25',
    title: 'Casa 25',
    category: 'residencial',
    description:
      'Atuação no auxílio ao desenvolvimento arquitetônico, graficação, desenvolvimento de maquete eletrônica (3D), renderização, pós-produção e projeto de interiores.',
    services: [
      'Auxílio no Desenvolvimento Arquitetônico',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
      'Projeto de Interiores',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 5,
    images: buildImages('casa-25', 'Casa 25', 6),
    featured: true,
  },
  {
    id: 'casa-comercial-1',
    title: 'Comercial 1',
    category: 'comercial',
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
    thumbnailIndex: 1,
    images: buildImages('casa-comercial-1', 'Comercial 1', 4),
    featured: true,
  },
  {
    id: 'casa-ba',
    title: 'Casa B.A',
    category: 'residencial',
    description:
      'Atuação no auxílio ao desenvolvimento arquitetônico, graficação, desenvolvimento de maquete eletrônica (3D), renderização, pós-produção e projeto de interiores.',
    services: [
      'Auxílio no Desenvolvimento Arquitetônico',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
      'Projeto de Interiores',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 0,
    images: buildImages('casa-ba', 'Casa B.A', 7),
    featured: true,
  },
  {
    id: 'dormitorio-infantil',
    title: 'Dorm. Infantil',
    category: 'interiores',
    description:
      'Atuação no desenvolvimento de projeto de interiores, graficação, desenvolvimento de maquete eletrônica (3D), renderização e pós-produção.',
    services: [
      'Desenvolvimento de Projeto de Interiores',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 0,
    images: buildImages('dormitorio-infantil', 'Dorm. Infantil', 6),
    featured: true,
  },
  {
    id: 'cozinha-bg',
    title: 'Cozinha B.G',
    category: 'interiores',
    description:
      'Atuação no desenvolvimento de projeto de interiores, graficação, desenvolvimento de maquete eletrônica (3D), renderização e pós-produção.',
    services: [
      'Desenvolvimento de Projeto de Interiores',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
    ],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 0,
    images: buildImages('cozinha-bg', 'Cozinha B.G', 5),
    featured: true,
  },
  {
    id: 'casa-recanto',
    title: 'Casa Recanto',
    category: 'residencial',
    description:
      'Atuação no auxílio ao desenvolvimento arquitetônico, graficação, desenvolvimento de maquete eletrônica (3D), renderização, pós-produção e projeto de interiores.',
    services: [
      'Auxílio no Desenvolvimento Arquitetônico',
      'Graficação',
      'Maquete Eletrônica (3D)',
      'Renderização',
      'Pós-produção',
      'Projeto de Interiores',
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

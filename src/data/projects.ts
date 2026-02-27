import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'casa-rocca',
    title: 'Casa Rocca',
    category: 'residencial',
    description:
      'Projeto residencial com modelagem 3D, uso de inteligência artificial e pós-produção para visualização fotorrealista. Auxílio no desenvolvimento do projeto arquitetônico, contribuindo no desenho e concepção do projeto.',
    services: ['Modelagem 3D', 'IA', 'Pós-produção', 'Auxílio no Projeto Arquitetônico'],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 7,
    images: [
      { src: '/images/projects/casa-rocca/image-1.jpeg', alt: 'Casa Rocca - Vista 1' },
      { src: '/images/projects/casa-rocca/image-2.jpeg', alt: 'Casa Rocca - Vista 2' },
      { src: '/images/projects/casa-rocca/image-3.jpeg', alt: 'Casa Rocca - Vista 3' },
      { src: '/images/projects/casa-rocca/image-4.jpeg', alt: 'Casa Rocca - Vista 4' },
      { src: '/images/projects/casa-rocca/image-5.jpeg', alt: 'Casa Rocca - Vista 5' },
      { src: '/images/projects/casa-rocca/image-6.jpeg', alt: 'Casa Rocca - Vista 6' },
      { src: '/images/projects/casa-rocca/image-7.jpeg', alt: 'Casa Rocca - Vista 7' },
      { src: '/images/projects/casa-rocca/image-8.jpeg', alt: 'Casa Rocca - Vista 8' },
      { src: '/images/projects/casa-rocca/image-9.jpeg', alt: 'Casa Rocca - Vista 9' },
      { src: '/images/projects/casa-rocca/image-10.jpeg', alt: 'Casa Rocca - Vista 10' },
      { src: '/images/projects/casa-rocca/image-11.jpeg', alt: 'Casa Rocca - Vista 11' },
      { src: '/images/projects/casa-rocca/image-12.jpeg', alt: 'Casa Rocca - Vista 12' },
      { src: '/images/projects/casa-rocca/image-13.jpeg', alt: 'Casa Rocca - Vista 13' },
      { src: '/images/projects/casa-rocca/image-14.jpeg', alt: 'Casa Rocca - Vista 14' },
      { src: '/images/projects/casa-rocca/image-15.jpeg', alt: 'Casa Rocca - Vista 15' },
    ],
    featured: true,
  },
  {
    id: 'casa-magna',
    title: 'Casa Magna',
    category: 'residencial',
    description:
      'Projeto residencial com modelagem 3D e renderização fotorrealista. Visualização completa dos ambientes internos e externos para auxiliar na tomada de decisões do projeto.',
    services: ['Modelagem 3D', 'Renderização'],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 17,
    images: Array.from({ length: 24 }, (_, i) => ({
      src: `/images/projects/casa-magna/image-${i + 1}.jpeg`,
      alt: `Casa Magna - Vista ${i + 1}`,
    })),
    featured: true,
  },
  {
    id: 'casa-rl',
    title: 'Casa R.L',
    category: 'residencial',
    description:
      'Projeto residencial com desenvolvimento completo de modelagem 3D e renderização. Imagens fotorrealistas que permitem visualizar cada detalhe da edificação antes da execução.',
    services: ['Modelagem 3D', 'Renderização'],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 31,
    images: Array.from({ length: 32 }, (_, i) => ({
      src: `/images/projects/casa-r.l/image-${i + 1}.jpeg`,
      alt: `Casa R.L - Vista ${i + 1}`,
    })),
    featured: true,
  },
  {
    id: 'casa-tf',
    title: 'Casa T.F',
    category: 'residencial',
    description:
      'Projeto residencial com modelagem tridimensional e pós-produção de imagens. Renderizações que traduzem a essência do projeto arquitetônico com realismo e qualidade.',
    services: ['Modelagem 3D', 'Renderização'],
    software: ['SketchUp', 'Lumion'],
    thumbnailIndex: 3,
    images: Array.from({ length: 18 }, (_, i) => ({
      src: `/images/projects/casa-t.f/image-${i + 1}.jpeg`,
      alt: `Casa T.F - Vista ${i + 1}`,
    })),
    featured: false,
  },
]

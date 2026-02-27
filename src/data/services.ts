import type { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: 'projeto-residencial',
    title: 'Projeto Residencial',
    description:
      'Desenvolvimento completo de projetos residenciais, desde a concepção até a finalização, com foco em funcionalidade e estética contemporânea.',
    icon: 'Home',
  },
  {
    id: 'design-interiores',
    title: 'Design de Interiores',
    description:
      'Planejamento e ambientação de espaços internos, criando ambientes funcionais, confortáveis e visualmente harmoniosos.',
    icon: 'Palette',
  },
  {
    id: 'modelagem-render',
    title: 'Modelagem 3D e Renderização',
    description:
      'Criação de modelos tridimensionais e imagens fotorrealistas que permitem visualizar o projeto antes da execução.',
    icon: 'Monitor',
  },
  {
    id: 'detalhamento-tecnico',
    title: 'Detalhamento Técnico',
    description:
      'Produção de desenhos executivos detalhados com especificações de materiais, cortes e vistas para fabricação e execução.',
    icon: 'Ruler',
  },
  {
    id: 'levantamento',
    title: 'Levantamento Arquitetônico',
    description:
      'Medição e documentação técnica de edificações existentes, gerando plantas precisas para reformas e regularizações.',
    icon: 'ScanLine',
  },
]

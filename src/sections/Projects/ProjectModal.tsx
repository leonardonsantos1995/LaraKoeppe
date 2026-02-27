import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import type { Project } from '@/types/project'
import { categoryLabels } from '@/types/project'
import { Badge } from '@/components/ui/Badge'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      setCurrentImage(0)
      setImageLoaded(false)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!project) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentImage > 0) setCurrentImage((p) => p - 1)
      if (e.key === 'ArrowRight' && currentImage < project.images.length - 1)
        setCurrentImage((p) => p + 1)
    },
    [project, currentImage, onClose]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Reset loading state and preload adjacent images
  useEffect(() => {
    if (!project) return
    setImageLoaded(false)
    const toPreload = [currentImage - 1, currentImage + 1].filter(
      (i) => i >= 0 && i < project.images.length
    )
    toPreload.forEach((i) => {
      const img = new Image()
      img.src = project.images[i].src
    })
  }, [project, currentImage])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex cursor-pointer items-center justify-center bg-charcoal-900/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] cursor-default overflow-y-auto bg-white rounded-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center bg-white/90 text-charcoal-700 shadow-sm transition-colors hover:text-charcoal-900"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="relative aspect-[16/10] bg-charcoal-100">
              {!imageLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                  <Loader2 size={32} className="animate-spin text-charcoal-400" />
                </div>
              )}
              <img
                key={currentImage}
                src={
                  project.images[currentImage]?.src ??
                  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=80'
                }
                alt={project.images[currentImage]?.alt ?? project.title}
                className={`h-full w-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImage((p) => Math.max(0, p - 1))}
                    disabled={currentImage === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center bg-white/80 text-charcoal-700 shadow-sm transition-all hover:bg-white disabled:cursor-default disabled:opacity-30"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentImage((p) => Math.min(project.images.length - 1, p + 1))
                    }
                    disabled={currentImage === project.images.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center bg-white/80 text-charcoal-700 shadow-sm transition-all hover:bg-white disabled:cursor-default disabled:opacity-30"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage(i)}
                        className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                          i === currentImage ? 'bg-white' : 'bg-white/40'
                        }`}
                        aria-label={`Ir para imagem ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <h2 className="font-display text-2xl font-semibold text-charcoal-900">
                  {project.title}
                </h2>
                <Badge>{categoryLabels[project.category]}</Badge>
              </div>

              <p className="mb-6 text-charcoal-600 leading-relaxed">
                {project.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-2">
                    Serviços
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="rounded-sm bg-stone-100 px-3 py-1 text-xs font-medium text-charcoal-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-2">
                    Softwares
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.software.map((s) => (
                      <span
                        key={s}
                        className="rounded-sm bg-stone-100 px-3 py-1 text-xs font-medium text-charcoal-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

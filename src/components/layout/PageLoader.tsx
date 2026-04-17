import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Loader } from '@/components/ui/Loader'

interface PageLoaderProps {
  visible: boolean
}

export function PageLoader({ visible }: PageLoaderProps) {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100]"
        >
          <Loader variant="dark" size="xl" className="h-full w-full" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal-900"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"
          >
            LARA KOEPPE
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="my-4 h-px w-16 origin-center bg-blush-300"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-stone-400"
          >
            Arquitetura & Urbanismo
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10"
          >
            <div className="h-[2px] w-24 overflow-hidden bg-charcoal-700 rounded-full">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-full bg-blush-300"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

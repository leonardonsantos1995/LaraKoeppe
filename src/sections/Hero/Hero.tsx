import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { scrollToSection } from '@/utils/scrollTo'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: 'url(/images/hero/image-1.png)',
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="sr-only">Lara Koeppe — Arquitetura & Urbanismo</h1>
          <img
            src="/images/logo/logo-white.png"
            alt="Lara Koeppe — Arquitetura & Urbanismo"
            className="mx-auto w-[280px] md:w-[400px] lg:w-[480px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10"
        >
          <button
            onClick={() => scrollToSection('sobre')}
            className="cursor-pointer border border-stone-400 px-8 py-3 text-sm font-medium tracking-wider uppercase text-stone-200 transition-all duration-300 hover:border-olive-300 hover:bg-olive-300/10 hover:text-white"
          >
            Conheça meu portfólio
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection('sobre')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.6 },
          y: { delay: 1.4, duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer text-stone-400 hover:text-olive-300 transition-colors"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  )
}

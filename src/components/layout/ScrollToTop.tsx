import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/utils/cn'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={cn(
        'fixed bottom-8 right-8 z-40 flex h-12 w-12 cursor-pointer items-center justify-center bg-charcoal-900 text-stone-100 shadow-lg transition-all duration-300 hover:bg-charcoal-800 hover:-translate-y-1',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={20} />
    </button>
  )
}

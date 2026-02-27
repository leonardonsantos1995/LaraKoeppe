import { useEffect } from 'react'
import { X } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { scrollToSection } from '@/utils/scrollTo'
import { cn } from '@/utils/cn'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function handleNavClick(href: string) {
    onClose()
    setTimeout(() => scrollToSection(href), 300)
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[60] flex flex-col items-center justify-center bg-charcoal-900 transition-all duration-500',
        open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      )}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 cursor-pointer p-2 text-stone-200 hover:text-white transition-colors"
        aria-label="Fechar menu"
      >
        <X size={28} />
      </button>

      <nav className="flex flex-col items-center gap-8">
        {navItems.map((item, i) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className="cursor-pointer font-display text-2xl font-medium text-stone-200 hover:text-blush-300 transition-colors"
            style={{ transitionDelay: open ? `${i * 50}ms` : '0ms' }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-8 text-center">
        <span className="font-display text-sm text-stone-500">LARA KOEPPE</span>
        <span className="block text-[10px] tracking-[0.3em] text-stone-600 mt-1">
          ARQUITETURA
        </span>
      </div>
    </div>
  )
}

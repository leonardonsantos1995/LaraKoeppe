import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { cn } from '@/utils/cn'
import { navItems } from '@/data/navigation'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { scrollToSection } from '@/utils/scrollTo'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useScrollSpy(navItems.map((n) => n.href))

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-cream/90 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer text-left"
          >
            <span
              className={cn(
                'font-display text-xl font-semibold tracking-tight transition-colors',
                scrolled ? 'text-charcoal-900' : 'text-white'
              )}
            >
              LARA KOEPPE
            </span>
            <span
              className={cn(
                'block text-[10px] font-body font-medium tracking-[0.3em] uppercase transition-colors',
                scrolled ? 'text-charcoal-500' : 'text-stone-300'
              )}
            >
              Arquitetura
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'relative cursor-pointer font-body text-sm font-medium tracking-wide transition-colors',
                  scrolled ? 'text-charcoal-700 hover:text-charcoal-900' : 'text-stone-200 hover:text-white',
                  activeSection === item.href && 'after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-full after:bg-blush-300'
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              'md:hidden cursor-pointer p-2 transition-colors',
              scrolled ? 'text-charcoal-900' : 'text-white'
            )}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  )
}

import { Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { navItems } from '@/data/navigation'
import { contact } from '@/data/contact'
import { scrollToSection } from '@/utils/scrollTo'

export function Footer() {
  return (
    <footer className="bg-charcoal-900 py-16">
      <Container>
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer mb-8"
          >
            <span className="font-display text-2xl font-semibold tracking-tight text-stone-100">
              LARA KOEPPE
            </span>
            <span className="block text-[10px] font-body font-medium tracking-[0.3em] uppercase text-stone-500">
              Arquitetura & Urbanismo
            </span>
          </button>

          <nav className="mb-8 flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="cursor-pointer text-sm text-stone-400 hover:text-blush-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mb-8 flex items-center gap-5">
            <a
              href={contact.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-stone-400 hover:text-blush-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href={contact.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-stone-400 hover:text-blush-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="cursor-pointer text-stone-400 hover:text-blush-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-stone-400 hover:text-blush-300 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone size={20} />
            </a>
          </div>

          <div className="h-px w-24 bg-charcoal-700 mb-8" />

          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Lara B. Koeppe Arquitetura. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}

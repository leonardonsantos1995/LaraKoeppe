import { Mail, Phone, Instagram, Linkedin } from 'lucide-react'
import { contact } from '@/data/contact'
import { FadeInWhenVisible } from '@/components/animation/FadeInWhenVisible'

const links = [
  {
    icon: Phone,
    label: contact.phone,
    href: contact.whatsapp,
    external: true,
    description: 'WhatsApp',
  },
  {
    icon: Mail,
    label: contact.email,
    href: `mailto:${contact.email}`,
    external: false,
    description: 'Email',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: contact.social.instagram,
    external: true,
    description: 'Instagram',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: contact.social.linkedin,
    external: true,
    description: 'LinkedIn',
  },
]

export function ContactLinks() {
  return (
    <div className="space-y-5">
      {links.map((link, i) => (
        <FadeInWhenVisible key={link.description} delay={i * 0.08}>
          <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="group flex cursor-pointer items-center gap-4 p-3 rounded-sm transition-colors hover:bg-stone-100"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-blush-100 text-blush-500 transition-colors group-hover:bg-blush-200">
              <link.icon size={18} />
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-charcoal-400">
                {link.description}
              </span>
              <span className="block text-sm text-charcoal-700 group-hover:text-charcoal-900">
                {link.label}
              </span>
            </div>
          </a>
        </FadeInWhenVisible>
      ))}
    </div>
  )
}

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInWhenVisible } from '@/components/animation/FadeInWhenVisible'
import { ContactLinks } from './ContactLinks'

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-cream">
      <Container>
        <SectionHeading
          title="Vamos Conversar?"
          subtitle="Estou disponível para novos projetos e parcerias."
        />

        <div className="grid gap-16 md:grid-cols-2 items-start">
          <div>
            <FadeInWhenVisible direction="left">
              <p className="mb-8 text-charcoal-600 leading-relaxed">
                Se você tem um projeto em mente ou deseja saber mais sobre meus serviços,
                entre em contato. Ficarei feliz em conversar sobre como posso ajudar a
                transformar suas ideias em realidade.
              </p>
            </FadeInWhenVisible>
            <ContactLinks />
          </div>

          <FadeInWhenVisible direction="right">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Arquitetura moderna"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent" />
            </div>
          </FadeInWhenVisible>
        </div>
      </Container>
    </section>
  )
}

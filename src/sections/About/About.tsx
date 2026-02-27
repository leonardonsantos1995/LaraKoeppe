import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeInWhenVisible } from '@/components/animation/FadeInWhenVisible'
import { about } from '@/data/about'
import { AboutStats } from './AboutStats'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-cream">
      <Container>
        <SectionHeading
          title="Sobre Mim"
          subtitle="Conheça um pouco da minha trajetória e paixão pela arquitetura."
        />

        <div className="grid gap-16 md:grid-cols-2 items-center">
          <FadeInWhenVisible direction="left">
            <div className="relative">
              <div className="absolute -top-3 -left-3 h-full w-full border border-blush-300" />
              <img
                src="/images/profile/about-me.jpeg"
                alt="Lara B. Koeppe"
                className="relative w-full object-cover aspect-[3/4]"
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible direction="right">
            <div>
              <h3 className="font-display text-2xl font-semibold text-charcoal-900 mb-2">
                {about.shortName}
              </h3>
              <p className="text-sm font-medium uppercase tracking-wider text-blush-400 mb-6">
                {about.title} &mdash; {about.location}
              </p>

              {about.bio.map((paragraph, i) => (
                <p key={i} className="text-charcoal-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              <div className="mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-3">
                  Formação
                </h4>
                {about.education.map((edu) => (
                  <p key={edu.institution} className="text-sm text-charcoal-600 mb-1">
                    <span className="font-medium text-charcoal-800">{edu.degree}</span>
                    {' '}&mdash; {edu.institution}
                  </p>
                ))}
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 mb-3">
                  Softwares
                </h4>
                <div className="flex flex-wrap gap-2">
                  {about.software.map((sw) => (
                    <span
                      key={sw}
                      className="rounded-sm bg-stone-100 px-3 py-1.5 text-xs font-medium text-charcoal-700"
                    >
                      {sw}
                    </span>
                  ))}
                </div>
              </div>

              <AboutStats />
            </div>
          </FadeInWhenVisible>
        </div>
      </Container>
    </section>
  )
}

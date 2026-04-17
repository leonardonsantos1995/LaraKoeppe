import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren } from '@/components/animation/StaggerChildren'
import { about } from '@/data/about'
import { ExperienceItem } from './ExperienceItem'

export function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-ivory">
      <Container>
        <SectionHeading
          title="Experiência"
          subtitle="Trajetória profissional construída entre projetos, obras e interiores."
        />

        <StaggerChildren className="mx-auto max-w-3xl">
          {about.experience.map((item, i) => (
            <ExperienceItem
              key={`${item.role}-${item.company}`}
              role={item.role}
              company={item.company}
              employmentType={item.employmentType}
              period={item.period}
              duration={item.duration}
              description={item.description}
              skills={item.skills}
              isLast={i === about.experience.length - 1}
            />
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

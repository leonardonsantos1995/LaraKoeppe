import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren } from '@/components/animation/StaggerChildren'
import { services } from '@/data/services'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-ivory">
      <Container>
        <SectionHeading
          title="Serviços"
          subtitle="Soluções completas em arquitetura, do conceito à execução."
        />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

const HEADER_HEIGHT = 80

export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId)
  if (!element) return

  const top = element.offsetTop - HEADER_HEIGHT
  window.scrollTo({ top, behavior: 'smooth' })
}

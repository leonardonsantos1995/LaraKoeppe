import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i])
        if (element && element.offsetTop <= scrollY) {
          setActiveId(sectionIds[i])
          return
        }
      }
      setActiveId('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}

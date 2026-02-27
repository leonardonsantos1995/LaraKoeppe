import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { PageLoader } from '@/components/layout/PageLoader'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Projects } from '@/sections/Projects'
import { Services } from '@/sections/Services'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'

const criticalImages = [
  '/images/hero/image-1.png',
  '/images/profile/about-me.jpeg',
]

function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(
    srcs.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () => resolve()
          img.src = src
        })
    )
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    preloadImages(criticalImages).then(() => setLoading(false))
  }, [])

  return (
    <>
      <PageLoader visible={loading} />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App

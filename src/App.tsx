import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PagePreloader } from './components/ui/PagePreloader'
import { MarqueeText } from './components/ui/MarqueeText'
import { ErrorBoundary } from './components/ui/ErrorBoundary'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { ImpactCounter } from './components/sections/ImpactCounter'
import { About } from './components/sections/About'
import { WhyArecaLeaf } from './components/sections/WhyArecaLeaf'
import { LeafToTable } from './components/sections/LeafToTable'
import { Products } from './components/sections/Products'
import { ExportSection } from './components/sections/ExportSection'
import { Certifications } from './components/sections/Certifications'
import { Testimonials } from './components/sections/Testimonials'
import { BlogPreview } from './components/sections/BlogPreview'
import { Contact } from './components/sections/Contact'
import { BlogIndex } from './pages/BlogIndex'
import { BlogPost } from './pages/BlogPost'
import { logger } from './utils/logger'

function App() {
  const [loaded, setLoaded] = useState(() => {
    try {
      return sessionStorage.getItem('ske_preloaded') === 'true'
    } catch {
      logger.warn('sessionStorage unavailable — skipping preloader cache')
      return false
    }
  })

  const handlePreloadComplete = () => {
    try {
      sessionStorage.setItem('ske_preloaded', 'true')
    } catch {
      logger.warn('Could not persist preload state to sessionStorage')
    }
    logger.info('Preloader complete — rendering site')
    setLoaded(true)
  }

  useEffect(() => {
    logger.info(`App mounted — env: ${import.meta.env.MODE}`)
    document.body.style.overflow = loaded ? 'auto' : 'hidden'
    return () => { document.body.style.overflow = 'auto' }
  }, [loaded])

  // Home page — with preloader
  function HomePage() {
    return (
      <>
        {!loaded && (
          <ErrorBoundary context="PagePreloader">
            <PagePreloader onComplete={handlePreloadComplete} />
          </ErrorBoundary>
        )}
        {loaded && (
          <>
            <ErrorBoundary context="Navbar"><Navbar /></ErrorBoundary>
            <main>
              <ErrorBoundary context="Hero"><Hero /></ErrorBoundary>
              <MarqueeText />
              <ErrorBoundary context="ImpactCounter"><ImpactCounter /></ErrorBoundary>
              <ErrorBoundary context="About"><About /></ErrorBoundary>
              <MarqueeText text="BIODEGRADABLE · ZERO CHEMICALS · FALLEN LEAVES ONLY · DIRECT FROM FACTORY · NO TREES CUT · " />
              <ErrorBoundary context="WhyArecaLeaf"><WhyArecaLeaf /></ErrorBoundary>
              <ErrorBoundary context="LeafToTable"><LeafToTable /></ErrorBoundary>
              <MarqueeText text="10 LAKH PLATES PER MONTH · BULK SUPPLY · PAN-INDIA · EXPORT READY · GST REGISTERED · " />
              <ErrorBoundary context="Products"><Products /></ErrorBoundary>
              <ErrorBoundary context="ExportSection"><ExportSection /></ErrorBoundary>
              <ErrorBoundary context="Certifications"><Certifications /></ErrorBoundary>
              <ErrorBoundary context="Testimonials"><Testimonials /></ErrorBoundary>
              <ErrorBoundary context="BlogPreview"><BlogPreview /></ErrorBoundary>
              <ErrorBoundary context="Contact"><Contact /></ErrorBoundary>
            </main>
            <ErrorBoundary context="Footer"><Footer /></ErrorBoundary>
          </>
        )}
      </>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<HomePage />} />
        <Route path="/blog"        element={<ErrorBoundary context="BlogIndex"><BlogIndex /></ErrorBoundary>} />
        <Route path="/blog/:slug"  element={<ErrorBoundary context="BlogPost"><BlogPost /></ErrorBoundary>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

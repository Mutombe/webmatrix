import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

// Layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Claims from './pages/Claims'
import GetQuote from './pages/GetQuote'

// Modals
import CookieConsent from './components/modals/CookieConsent'
import PolicyModal from './components/modals/PolicyModal'

// Context
import { ModalProvider } from './context/ModalContext'

// Components
import ScrollToTop from './components/ui/ScrollToTop'
import PageLoader from './components/ui/PageLoader'

function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <PageLoader />
  }

  return (
    <ModalProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/get-quote" element={<GetQuote />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <CookieConsent />
        <PolicyModal />
      </div>
    </ModalProvider>
  )
}

export default App

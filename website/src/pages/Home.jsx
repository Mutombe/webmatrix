import React from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/ui/SEO'
import HeroSection from '../components/sections/HeroSection'
import StatsSection from '../components/sections/StatsSection'
import ServicesSection from '../components/sections/ServicesSection'
import AboutPreview from '../components/sections/AboutPreview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ProcessSection from '../components/sections/ProcessSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import PartnersSection from '../components/sections/PartnersSection'
import CTASection from '../components/sections/CTASection'
import FAQSection from '../components/sections/FAQSection'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
}

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SEO
        title="Home"
        description="Web Matrix Insurance & Risk Consultants - Zimbabwe's premier insurance partner. Over 20 years of expertise in comprehensive insurance solutions and risk management services for individuals and businesses."
        keywords="insurance zimbabwe, risk consultants, insurance brokers harare, motor insurance, property insurance, life assurance, corporate insurance solutions"
        url="https://webmatrix.co.zw"
      />
      
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutPreview />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </motion.div>
  )
}

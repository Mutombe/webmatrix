import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Play,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";

const heroSlides = [
  {
    title: 'Protecting What',
    highlight: 'Matters Most',
    subtitle: 'Comprehensive insurance solutions tailored to your unique needs. With over 20 years of expertise, we safeguard your future.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1920&q=80',
    stats: { label: 'Claims Processed', value: '10,000+' }
  },
  {
    title: 'Expert Risk',
    highlight: 'Management',
    subtitle: 'Navigate uncertainties with confidence. Our team of seasoned professionals provides strategic risk assessment and mitigation.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
    stats: { label: 'Years Experience', value: '20+' }
  },
  {
    title: 'Your Trusted',
    highlight: 'Insurance Partner',
    subtitle: 'Building lasting relationships through transparency, integrity, and exceptional service. Your security is our priority.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80',
    stats: { label: 'Happy Clients', value: '5,000+' }
  }
]

const features = [
  'Personalized Coverage Plans',
  '24/7 Claims Support',
  'Competitive Premiums',
  'Expert Consultations'
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen overflow-hidden bg-navy-900">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/30" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-hero-pattern opacity-5" />
      </div>

      {/* Main Content */}
      <div className="relative container-custom min-h-[90vh] lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-0">
          {/* Left Column - Text Content */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10"
                >
                  <Sparkles size={16} className="text-accent-400" />
                  <span className="text-white/90 text-sm font-medium">Zimbabwe's Premier Insurance Partner</span>
                </motion.div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
                  {heroSlides[currentSlide].title}{' '}
                  <span className="text-accent-500 relative">
                    {heroSlides[currentSlide].highlight}
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent-500/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg lg:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={18} className="text-accent-500 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/get-quote"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-bold rounded-full hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Get Free Quote
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+263716027886"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <Phone size={18} />
                    Call Us Now
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Interactive Element */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-600 rounded-2xl flex items-center justify-center shadow-glow">
                  <SiFsecure className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Instant Protection
                </h3>
                <p className="text-white/70 mb-6">
                  Get covered in minutes with our streamlined process. Your safety shouldn't wait.
                </p>

                {/* Stats Display */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-3xl font-bold text-white mb-1">
                      {heroSlides[currentSlide].stats.value}
                    </p>
                    <p className="text-white/60 text-sm">{heroSlides[currentSlide].stats.label}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <p className="text-3xl font-bold text-accent-400 mb-1">98%</p>
                    <p className="text-white/60 text-sm">Client Satisfaction</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                  <Link to="/services" className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group">
                    <span className="text-white font-medium">Explore Services</span>
                    <ArrowRight size={18} className="text-white/60 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                  <Link to="/contact" className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group">
                    <span className="text-white font-medium">Contact Expert</span>
                    <ArrowRight size={18} className="text-white/60 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-12 top-20 bg-white rounded-2xl p-4 shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-500">Claims Settled</p>
                    <p className="font-bold text-navy-900">$2.5M+ This Year</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-8 bottom-20 bg-white rounded-2xl p-4 shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <SiFsecure className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-500">Protected Assets</p>
                    <p className="font-bold text-navy-900">$50M+ Coverage</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container-custom flex items-center justify-between">
          {/* Slide Indicators */}
          <div className="flex items-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false)
                  setCurrentSlide(index)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 bg-accent-500' 
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Arrow Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

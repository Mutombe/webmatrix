import React from 'react'
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Shield, 
  Clock, 
  Users2, 
  Headphones,
  Zap,
  TrendingUp,
  ChevronRight
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";

const reasons = [
  {
    icon: Shield,
    title: 'Comprehensive Coverage',
    description: 'From personal to corporate, we offer end-to-end insurance solutions that leave no gap in your protection strategy.',
    details: 'Our policies are designed to cover all aspects of your life and business, ensuring complete peace of mind.'
  },
  {
    icon: Clock,
    title: 'Fast Claims Processing',
    description: 'We understand that time matters. Our streamlined claims process ensures you receive support when you need it most.',
    details: 'Average claim settlement time of 7 days with dedicated claims managers assigned to your case.'
  },
  {
    icon: Users2,
    title: 'Expert Consultation',
    description: 'Our team of qualified professionals provides personalized advice tailored to your unique circumstances.',
    details: 'Over 20 years of combined industry experience at your service.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Insurance needs don\'t wait for business hours. Our support team is available round the clock.',
    details: 'Dedicated hotline, email support, and emergency services available anytime.'
  },
  {
    icon: Zap,
    title: 'Competitive Rates',
    description: 'Quality coverage shouldn\'t break the bank. We negotiate the best rates with top insurers.',
    details: 'Save up to 30% compared to going directly to insurers.'
  },
  {
    icon: TrendingUp,
    title: 'Risk Management',
    description: 'Beyond insurance, we help you identify, assess, and mitigate risks before they become problems.',
    details: 'Comprehensive risk assessments and tailored mitigation strategies for your business.'
  }
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-navy-900 to-primary-950 overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-white/90 text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Web Matrix{' '}
            <span className="text-accent-400">Advantage</span>
          </h2>
          <p className="text-lg text-white/70">
            Experience the difference of working with a team that puts your interests first. 
            Here's why thousands of Zimbabweans trust us with their insurance needs.
          </p>
        </motion.div>

        {/* Interactive Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <motion.button
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setActiveIndex(index)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white shadow-card-hover scale-105' 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/15 border border-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  activeIndex === index 
                    ? 'bg-accent-100 text-accent-600' 
                    : 'bg-white/10 text-white'
                }`}>
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold mb-2 transition-colors ${
                  activeIndex === index ? 'text-navy-900' : 'text-white'
                }`}>
                  {reason.title}
                </h3>
                <p className={`text-sm transition-colors ${
                  activeIndex === index ? 'text-navy-600' : 'text-white/60'
                }`}>
                  {reason.description}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Right - Detailed View */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-card-hover">
              {/* Active Item Details */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center mb-6 shadow-lg">
                  {(() => {
                    const Icon = reasons[activeIndex].icon
                    return <Icon className="w-10 h-10 text-white" />
                  })()}
                </div>

                <h3 className="text-2xl lg:text-3xl font-display font-bold text-navy-900 mb-4">
                  {reasons[activeIndex].title}
                </h3>

                <p className="text-lg text-navy-600 mb-6 leading-relaxed">
                  {reasons[activeIndex].description}
                </p>

                <div className="p-4 bg-navy-50 rounded-xl mb-6">
                  <p className="text-navy-700">
                    {reasons[activeIndex].details}
                  </p>
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-accent-600 transition-colors group"
                >
                  Learn more about this
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Navigation Dots */}
              <div className="flex items-center gap-2 mt-8">
                {reasons.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'w-8 bg-accent-600' 
                        : 'w-2 bg-navy-200 hover:bg-navy-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-48 h-48 bg-accent-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

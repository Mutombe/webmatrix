import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, Landmark, Factory, Briefcase, Building, Wallet } from 'lucide-react'

const partners = [
  { name: 'Old Mutual', icon: Building2 },
  { name: 'First Mutual', icon: Landmark },
  { name: 'ZIMNAT', icon: Factory },
  { name: 'Nicoz Diamond', icon: Briefcase },
  { name: 'CBZ Holdings', icon: Building },
  { name: 'FBC Insurance', icon: Wallet },
]

const industries = [
  { name: 'Banking & Finance', count: '15+' },
  { name: 'Manufacturing', count: '20+' },
  { name: 'Mining', count: '12+' },
  { name: 'Agriculture', count: '25+' },
  { name: 'Retail & Distribution', count: '30+' },
  { name: 'Healthcare', count: '10+' },
]

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-heading font-semibold mb-4">
            Trusted Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Our Insurance <span className="text-accent-600">Partners</span>
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            We work with Zimbabwe's leading insurance providers to bring you the best coverage options
          </p>
        </motion.div>

        {/* Partners Logos Carousel */}
        <div className="relative mb-20">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-8 md:gap-12 flex-wrap"
          >
            {partners.map((partner, index) => {
              const Icon = partner.icon
              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-heading font-semibold text-gray-700">{partner.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary-900 via-primary-800 to-navy-900 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-hero-pattern opacity-30" />
          
          {/* Decorative Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-600/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                Industries We Serve
              </h3>
              <p className="text-primary-200 font-body">
                Protecting businesses across diverse sectors in Zimbabwe
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + (0.1 * index) }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 transition-all"
                >
                  <div className="text-3xl font-display font-bold text-accent-500 mb-1">
                    {industry.count}
                  </div>
                  <div className="text-sm font-heading text-white/80">
                    {industry.name}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-primary-200 font-body">
                <span className="text-white font-semibold">5,000+</span> satisfied clients trust Web Matrix for their insurance needs
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

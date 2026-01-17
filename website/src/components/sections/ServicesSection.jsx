import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { 
  Car, 
  Building2, 
  Heart, 
  Briefcase, 
  Shield, 
  Umbrella,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";

const services = [
  {
    icon: Car,
    title: 'Motor Insurance',
    description: 'Comprehensive coverage for your vehicles including third party, fire, theft, and full comprehensive options.',
    features: ['Third Party Coverage', 'Comprehensive Plans', 'Roadside Assistance'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Building2,
    title: 'Property Insurance',
    description: 'Protect your home, commercial buildings, and assets against fire, natural disasters, and other risks.',
    features: ['Fire & Theft', 'Natural Disasters', 'Content Coverage'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Heart,
    title: 'Life Assurance',
    description: 'Secure your family\'s future with comprehensive life insurance plans tailored to your needs.',
    features: ['Term Life Plans', 'Whole Life Coverage', 'Investment Options'],
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50'
  },
  {
    icon: Briefcase,
    title: 'Corporate Insurance',
    description: 'Complete business protection including liability, workers compensation, and professional indemnity.',
    features: ['Liability Coverage', 'Workers Comp', 'Business Interruption'],
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50'
  },
  {
    icon: SiFsecure,
    title: 'Risk Management',
    description: 'Expert risk assessment and mitigation strategies to protect your business from potential threats.',
    features: ['Risk Assessment', 'Mitigation Plans', 'Compliance Support'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Umbrella,
    title: 'Health Insurance',
    description: 'Quality healthcare coverage for individuals and groups with access to top medical facilities.',
    features: ['Individual Plans', 'Family Coverage', 'Corporate Health'],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50'
  }
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-gradient-to-b from-white to-navy-50" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
            <Sparkles size={16} className="text-primary-600" />
            <span className="text-primary-700 text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Comprehensive Insurance{' '}
            <span className="text-accent-600">Solutions</span>
          </h2>
          <p className="text-lg text-navy-600">
            From personal coverage to corporate risk management, we offer a complete range of 
            insurance products designed to protect what matters most to you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                to="/services"
                className="group block h-full bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-transparent hover:border-navy-100"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-navy-500">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-semibold rounded-full hover:bg-navy-800 transition-colors group"
          >
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { 
  MessageSquare, 
  FileSearch, 
  FileCheck, 
  Shield,
  ArrowRight
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'Share your needs with our expert team. We listen carefully to understand your unique situation and requirements.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Risk Assessment',
    description: 'Our professionals conduct a thorough analysis of your assets and potential risks to determine optimal coverage.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Custom Solution',
    description: 'We design a tailored insurance package that matches your needs and budget, comparing options from top insurers.',
    color: 'from-accent-500 to-accent-600'
  },
  {
    number: '04',
    icon: SiFsecure,
    title: 'Protection Activated',
    description: 'Once you approve, your coverage begins immediately. We handle all paperwork and stay with you for ongoing support.',
    color: 'from-emerald-500 to-emerald-600'
  }
]

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-100 rounded-full mb-6">
            <span className="text-navy-700 text-sm font-semibold">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            Getting Started is{' '}
            <span className="text-accent-600">Simple</span>
          </h2>
          <p className="text-lg text-navy-600">
            Our streamlined process makes it easy to get the protection you need. 
            From consultation to coverage, we're with you every step of the way.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
                    <span className="text-sm font-bold text-navy-900">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow - Not on last item */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-32 -right-4 w-8 h-8 rounded-full bg-white shadow-md items-center justify-center z-20">
                    <ArrowRight className="w-4 h-4 text-navy-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 bg-navy-50 rounded-full">
            <span className="px-6 py-2 text-navy-600">Ready to get started?</span>
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent-600 text-white font-semibold rounded-full hover:bg-accent-700 transition-colors group"
            >
              Get Your Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

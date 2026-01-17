import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, MessageSquare, Shield, Clock, Award } from 'lucide-react'
import { SiFsecure } from "react-icons/si";

const features = [
  { icon: Shield, text: 'Comprehensive Coverage' },
  { icon: Clock, text: '24/7 Support' },
  { icon: Award, text: '20+ Years Experience' },
]

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-20" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-heading font-semibold mb-6 border border-white/20"
            >
              Ready to Get Started?
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Protect What Matters Most to 
              <span className="text-accent-400"> You</span>
            </h2>
            
            <p className="text-xl text-primary-200 font-body mb-8 max-w-xl">
              Join over 5,000 satisfied clients who trust Web Matrix for their insurance needs. 
              Get a personalized quote today and experience the difference.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10"
                  >
                    <Icon className="w-4 h-4 text-accent-400" />
                    <span className="text-white font-heading text-sm">{feature.text}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Link
                  to="/get-quote"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-heading font-semibold text-lg transition-all duration-300 shadow-glow hover:shadow-[0_0_60px_rgba(220,38,38,0.5)]"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a
                  href="tel:+263716027886"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-heading font-semibold text-lg transition-all duration-300 border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-elegant relative overflow-hidden">
              {/* Decorative Corner */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent-100 to-accent-200 rounded-full opacity-50" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6 shadow-glow-blue">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                  Speak with an Expert
                </h3>
                
                <p className="text-gray-600 font-body mb-8">
                  Our insurance specialists are ready to help you find the perfect coverage. 
                  No obligation, just honest advice.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-body">Call us at</p>
                      <a href="tel:+263716027886" className="font-heading font-semibold text-primary-900 hover:text-accent-600 transition-colors">
                        +263 71 602 7886
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-body">Email us</p>
                      <a href="mailto:info@webmatrix.co.zw" className="font-heading font-semibold text-primary-900 hover:text-accent-600 transition-colors">
                        info@webmatrix.co.zw
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary-900 text-sm">
                      Registered Insurance Broker
                    </p>
                    <p className="text-xs text-gray-500">Licensed by IPEC Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-accent-600 text-white px-6 py-3 rounded-xl shadow-elegant"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl font-display font-bold">98%</div>
                <div className="text-sm font-heading leading-tight">
                  Client<br />Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

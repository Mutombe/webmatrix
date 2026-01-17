import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { 
  CheckCircle2, 
  ArrowRight, 
  Award,
  Users,
  Target,
  Building2
} from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'Industry Excellence',
    description: 'Over 20 years of combined expertise in insurance and risk management'
  },
  {
    icon: Users,
    title: 'Client-Centric Approach',
    description: 'Personalized solutions tailored to your unique needs and circumstances'
  },
  {
    icon: Target,
    title: 'Strategic Vision',
    description: 'Forward-thinking strategies that anticipate and mitigate potential risks'
  },
  {
    icon: Building2,
    title: 'National Presence',
    description: 'Serving clients across Zimbabwe with dedicated local expertise'
  }
]

const values = [
  'Integrity in all dealings',
  'Transparency in communication',
  'Excellence in service delivery',
  'Commitment to client success'
]

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                  alt="Web Matrix team discussing insurance solutions"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
              </div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-card-hover max-w-xs"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">20+</p>
                    <p className="text-sm text-navy-500">Years Experience</p>
                  </div>
                </div>
                <p className="text-sm text-navy-600">
                  Trusted by thousands of clients across Zimbabwe
                </p>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -top-4 -left-4 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-4 shadow-elegant text-white"
              >
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-primary-100">Client Satisfaction Rate</p>
              </motion.div>

              {/* Background decoration */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -z-10 -top-10 -left-10 w-48 h-48 bg-primary-100 rounded-full blur-2xl opacity-60" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
              <span className="text-primary-700 text-sm font-semibold">About Web Matrix</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-accent-600">Insurance Excellence</span>
            </h2>

            <p className="text-lg text-navy-600 mb-8 leading-relaxed">
              Web Matrix Insurance & Risk Consultants has been at the forefront of Zimbabwe's 
              insurance industry, providing comprehensive coverage solutions and expert risk 
              management services. Our team of seasoned professionals brings decades of 
              combined experience to ensure your assets and future are protected.
            </p>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-600 flex-shrink-0" />
                  <span className="text-navy-700">{value}</span>
                </motion.div>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-navy-50 hover:bg-navy-100 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                    <highlight.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">{highlight.title}</h4>
                    <p className="text-sm text-navy-600">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors group"
              >
                Discover Our Story
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-200 text-navy-700 font-semibold rounded-full hover:border-primary-600 hover:text-primary-600 transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

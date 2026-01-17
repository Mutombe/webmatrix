import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/ui/SEO'
import { 
  Target, Eye, Heart, Shield, Users, Award, TrendingUp, CheckCircle2, 
  ArrowRight, Building2, Briefcase, Clock, Star, Quote 
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const values = [
  { icon: Shield, title: 'Integrity', description: 'We conduct our business with the highest ethical standards, building trust through transparency.' },
  { icon: Users, title: 'Client-Centric', description: 'Your needs drive everything we do. We listen, understand, and deliver tailored solutions.' },
  { icon: Award, title: 'Excellence', description: 'We strive for excellence in every interaction, continuously improving our services.' },
  { icon: TrendingUp, title: 'Innovation', description: 'Embracing new technologies and approaches to better serve our clients.' },
]

const milestones = [
  { year: '2004', title: 'Foundation', description: 'Web Matrix Insurance was established with a vision to transform insurance in Zimbabwe.' },
  { year: '2010', title: 'Growth', description: 'Expanded our product portfolio and established partnerships with major insurers.' },
  { year: '2015', title: 'Recognition', description: 'Achieved recognition as one of the leading insurance brokers in Zimbabwe.' },
  { year: '2020', title: 'Digital Transformation', description: 'Launched digital services to serve clients better during challenging times.' },
  { year: '2024', title: 'Excellence', description: 'Serving over 5,000 clients with a 98% satisfaction rate.' },
]

const boardMembers = [
  {
    name: 'Byron Chikwanda',
    position: 'Chairman',
    experience: 'Finance and Risk Management, Livestock Management',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Petros Sithole',
    position: 'Chief Executive Officer',
    experience: 'Over 20 years in Insurance, Risk and Financial Advisory',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Tarisai Linda',
    position: 'Administration & HR Director',
    experience: 'Business Administration and Human Resources',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'Cleopas Mashiri',
    position: 'Secretary',
    experience: 'Over 20 years as Chartered Accountant',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
]

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900" />
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-primary-400/20 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              About Web Matrix
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Your Trusted Partner in{' '}
              <span className="text-accent-400">Risk Protection</span>
            </h1>

            <p className="text-xl text-primary-200 font-body mb-8 max-w-xl">
              With over two decades of experience, Web Matrix Insurance & Risk Consultants 
              has been protecting Zimbabwean families and businesses with comprehensive 
              insurance solutions.
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '5,000+', label: 'Happy Clients' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <div className="text-3xl font-display font-bold text-accent-400">{stat.value}</div>
                  <div className="text-primary-200 font-body text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link
                to="/team"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-heading font-semibold transition-all"
              >
                Meet Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Web Matrix team meeting"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-elegant"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-primary-900">10,000+</div>
                    <div className="text-gray-600 font-body text-sm">Claims Processed</div>
                  </div>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-accent-600 text-white rounded-2xl p-4 shadow-glow"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-heading font-bold">Licensed Broker</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function VisionMissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-900 to-navy-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-hero-pattern opacity-20" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent-400" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-primary-200 font-body leading-relaxed">
                To be Zimbabwe's most trusted and innovative insurance broker, setting the 
                standard for excellence in risk protection and client service across the nation.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-hero-pattern opacity-20" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 font-body leading-relaxed">
                To provide comprehensive, affordable insurance solutions that protect what 
                matters most to our clients, delivered with integrity, expertise, and 
                unwavering commitment to service excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-heading font-semibold mb-4">
            <Heart className="w-4 h-4" />
            Our Values
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            What We <span className="text-accent-600">Stand For</span>
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Our values guide every decision we make and every interaction we have with our clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 font-body text-sm">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-heading font-semibold mb-4">
            <Clock className="w-4 h-4" />
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Milestones of <span className="text-accent-600">Excellence</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.15) }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-card inline-block">
                    <div className="text-accent-600 font-display font-bold text-2xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-heading font-bold text-primary-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 font-body text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Center Dot */}
                <div className="hidden md:flex items-center justify-center w-6 h-6 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10" />
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BoardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-heading font-semibold mb-4">
            <Briefcase className="w-4 h-4" />
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Board of <span className="text-accent-600">Directors</span>
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Experienced leaders guiding Web Matrix towards excellence in insurance services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-primary-900 mb-1">{member.name}</h3>
                  <p className="text-accent-600 font-heading font-semibold text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 font-body text-sm line-clamp-2">{member.experience}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-heading font-semibold transition-colors"
          >
            View Full Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function WhyUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reasons = [
    'Licensed and regulated by IPEC Zimbabwe',
    'Access to multiple top-rated insurers',
    'Competitive premium rates',
    'Expert claims assistance',
    '24/7 customer support',
    'Transparent and honest advice',
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-heading font-semibold mb-6">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              The Web Matrix <span className="text-accent-400">Advantage</span>
            </h2>
            <p className="text-primary-200 font-body text-lg mb-8">
              We combine decades of experience with a client-first approach to deliver 
              insurance solutions that truly protect what matters most to you.
            </p>

            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <motion.li
                  key={reason}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-body">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 relative">
              <Quote className="w-12 h-12 text-primary-200 mb-4" />
              <p className="text-xl font-body text-gray-700 italic mb-6 leading-relaxed">
                "Web Matrix has been our trusted insurance partner for over 10 years. 
                Their expertise and dedication to service excellence is unmatched. 
                They truly understand our business needs."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <Building2 className="w-7 h-7 text-primary-600" />
                </div>
                <div>
                  <div className="font-heading font-bold text-primary-900">Corporate Client</div>
                  <div className="text-gray-600 font-body text-sm">Manufacturing Industry</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-600/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SEO
        title="About Us"
        description="Learn about Web Matrix Insurance & Risk Consultants - Zimbabwe's trusted insurance partner with over 20 years of experience. Our vision, mission, values, and leadership team."
        keywords="about web matrix insurance, insurance brokers zimbabwe, insurance company history, board of directors, insurance expertise"
        url="https://webmatrix.co.zw/about"
      />
      
      <HeroSection />
      <VisionMissionSection />
      <ValuesSection />
      <TimelineSection />
      <BoardSection />
      <WhyUsSection />
    </motion.div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/ui/SEO'
import { 
  Car, Home, Heart, Building2, Shield, Activity, Umbrella, Briefcase,
  CheckCircle2, ArrowRight, ChevronRight, Star, Clock, Users, Phone
} from 'lucide-react'

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
}

const services = [
  {
    id: 'motor',
    icon: Car,
    title: 'Motor Insurance',
    shortDesc: 'Comprehensive vehicle protection for individuals and fleets.',
    description: 'Protect your vehicles with our comprehensive motor insurance solutions. Whether you own a single car or manage a fleet, we offer tailored coverage that keeps you moving.',
    features: [
      'Comprehensive & Third Party Coverage',
      'Fleet Management Solutions',
      'Accident & Theft Protection',
      '24/7 Roadside Assistance',
      'Quick Claims Processing',
      'No Claims Bonus Benefits'
    ],
    coverage: ['Private Vehicles', 'Commercial Vehicles', 'Motorcycles', 'Fleet Insurance'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    id: 'property',
    icon: Home,
    title: 'Property Insurance',
    shortDesc: 'Safeguard your homes and commercial properties.',
    description: 'Your property is one of your most valuable assets. Our property insurance provides complete protection against fire, theft, natural disasters, and other unforeseen events.',
    features: [
      'Building & Contents Cover',
      'Fire & Lightning Protection',
      'Theft & Burglary Coverage',
      'Natural Disaster Protection',
      'Business Interruption Cover',
      'Landlord Insurance'
    ],
    coverage: ['Residential Properties', 'Commercial Buildings', 'Industrial Premises', 'Rental Properties'],
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600'
  },
  {
    id: 'life',
    icon: Heart,
    title: 'Life Assurance',
    shortDesc: 'Financial security for you and your loved ones.',
    description: 'Ensure your family\'s financial future with our life assurance products. From term life to whole life policies, we help you choose the right protection for your needs.',
    features: [
      'Term Life Insurance',
      'Whole Life Coverage',
      'Funeral Cover',
      'Education Policies',
      'Retirement Planning',
      'Critical Illness Cover'
    ],
    coverage: ['Individual Life', 'Family Protection', 'Group Life', 'Key Person Insurance'],
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600'
  },
  {
    id: 'corporate',
    icon: Building2,
    title: 'Corporate Solutions',
    shortDesc: 'Tailored insurance for businesses of all sizes.',
    description: 'Protect your business with our comprehensive corporate insurance solutions. We understand the unique risks businesses face and provide customized coverage.',
    features: [
      'Professional Indemnity',
      'Directors & Officers Liability',
      'Public Liability Insurance',
      'Product Liability Cover',
      'Cyber Insurance',
      'Trade Credit Insurance'
    ],
    coverage: ['SMEs', 'Large Corporations', 'Non-Profits', 'Government Entities'],
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600'
  },
  {
    id: 'risk',
    icon: Shield,
    title: 'Risk Management',
    shortDesc: 'Expert risk assessment and mitigation strategies.',
    description: 'Our risk management consultants help you identify, assess, and mitigate risks that could impact your business or personal assets.',
    features: [
      'Risk Assessment & Analysis',
      'Loss Prevention Programs',
      'Business Continuity Planning',
      'Compliance Advisory',
      'Safety Training Programs',
      'Risk Monitoring Services'
    ],
    coverage: ['Enterprise Risk', 'Operational Risk', 'Financial Risk', 'Strategic Risk'],
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600'
  },
  {
    id: 'health',
    icon: Activity,
    title: 'Health Insurance',
    shortDesc: 'Quality healthcare coverage for individuals and groups.',
    description: 'Access quality healthcare with our health insurance options. From individual plans to corporate medical schemes, we ensure you get the care you deserve.',
    features: [
      'Inpatient & Outpatient Cover',
      'Chronic Disease Management',
      'Maternity Benefits',
      'Dental & Optical Cover',
      'Mental Health Support',
      'Wellness Programs'
    ],
    coverage: ['Individual Health', 'Family Plans', 'Corporate Medical', 'Senior Care'],
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600'
  },
]

const processSteps = [
  { step: '01', title: 'Consultation', desc: 'We listen to understand your unique needs' },
  { step: '02', title: 'Assessment', desc: 'Our experts analyze your risk profile' },
  { step: '03', title: 'Proposal', desc: 'Receive tailored coverage options' },
  { step: '04', title: 'Protection', desc: 'Enjoy peace of mind with your policy' },
]

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900" />
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Animated Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-96 h-96 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -left-20 w-80 h-80 border border-white/10 rounded-full"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-heading font-semibold mb-6 border border-white/20"
          >
            <Umbrella className="w-4 h-4" />
            Our Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
          >
            Comprehensive Insurance{' '}
            <span className="text-accent-400">Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-primary-200 font-body mb-10 max-w-3xl mx-auto"
          >
            From motor and property to life and corporate insurance, we provide 
            tailored protection that gives you peace of mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-heading font-semibold transition-all shadow-glow"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+263716027886"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-heading font-semibold transition-all border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto"
          >
            {[
              { icon: Shield, value: '6+', label: 'Service Lines' },
              { icon: Users, value: '5,000+', label: 'Clients Served' },
              { icon: Star, value: '98%', label: 'Satisfaction' },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-primary-300 font-body text-sm">{stat.label}</div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, onSelect, isSelected }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => onSelect(service.id)}
      className={`cursor-pointer bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border-2 ${isSelected ? 'border-primary-600' : 'border-transparent'}`}
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-heading font-bold text-primary-900 mb-2">{service.title}</h3>
      <p className="text-gray-600 font-body text-sm mb-4">{service.shortDesc}</p>
      <div className="flex items-center gap-2 text-primary-600 font-heading font-semibold text-sm group">
        Learn More
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  )
}

function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedService, setSelectedService] = useState('motor')
  const activeService = services.find(s => s.id === selectedService)

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-heading font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Insurance <span className="text-accent-600">Products</span>
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Click on any service to learn more about our coverage options
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelect={setSelectedService}
              isSelected={selectedService === service.id}
            />
          ))}
        </div>

        {/* Service Detail Panel */}
        {activeService && (
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl shadow-elegant overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className={`p-8 md:p-12 bg-gradient-to-br ${activeService.color} text-white`}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <activeService.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{activeService.title}</h3>
                <p className="text-white/90 font-body text-lg mb-8">{activeService.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-heading font-semibold text-lg mb-4">Coverage Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeService.coverage.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm font-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/get-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 rounded-xl font-heading font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="p-8 md:p-12">
                <h4 className="text-xl font-heading font-bold text-primary-900 mb-6">Key Features</h4>
                <ul className="space-y-4">
                  {activeService.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-6 h-6 rounded-full ${activeService.bgColor} ${activeService.textColor} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-gray-700 font-body">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h5 className="font-heading font-semibold text-primary-900 mb-2">Need Help Choosing?</h5>
                  <p className="text-gray-600 font-body text-sm mb-4">
                    Our experts are ready to help you find the perfect coverage for your needs.
                  </p>
                  <a
                    href="tel:+263716027886"
                    className="inline-flex items-center gap-2 text-primary-600 font-heading font-semibold text-sm hover:text-primary-700"
                  >
                    <Phone className="w-4 h-4" />
                    +263 71 602 7886
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-600 rounded-full text-sm font-heading font-semibold mb-4">
            <Clock className="w-4 h-4" />
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Simple <span className="text-accent-600">Process</span>
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Getting the right insurance coverage is easy with Web Matrix
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow-blue">
                  <span className="text-2xl font-display font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-primary-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 font-body text-sm">{step.desc}</p>
              </div>
              
              {/* Connector Arrow */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-0">
                  <ChevronRight className="w-6 h-6 text-primary-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link
            to="/get-quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-heading font-semibold transition-colors shadow-glow"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Not Sure Which Coverage You Need?
          </h2>
          <p className="text-xl text-primary-200 font-body mb-8">
            Our insurance experts will analyze your needs and recommend the perfect 
            combination of coverage for your situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-900 rounded-xl font-heading font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+263716027886"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-heading font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SEO
        title="Services"
        description="Explore Web Matrix Insurance comprehensive services: Motor Insurance, Property Insurance, Life Assurance, Corporate Solutions, Risk Management, and Health Insurance."
        keywords="motor insurance zimbabwe, property insurance, life assurance, corporate insurance, risk management, health insurance harare"
        url="https://webmatrix.co.zw/services"
      />
      
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <CTABanner />
    </motion.div>
  )
}

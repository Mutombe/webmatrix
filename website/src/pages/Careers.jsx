import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  ChevronDown,
  ChevronUp,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Coffee,
  Shield,
  Send,
  CheckCircle,
  Building2,
  GraduationCap
} from 'lucide-react'
import { SiFsecure } from "react-icons/si";

const benefits = [
  {
    icon: Heart,
    title: 'Health Coverage',
    description: 'Comprehensive medical, dental, and vision insurance for you and your family.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear career progression paths and opportunities for advancement.',
  },
  {
    icon: GraduationCap,
    title: 'Learning & Development',
    description: 'Professional development programs and industry certifications.',
  },
  {
    icon: Users,
    title: 'Team Culture',
    description: 'Collaborative environment with regular team building activities.',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible working arrangements and generous leave policies.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Pay',
    description: 'Market-leading salaries with performance-based bonuses.',
  },
]

const jobOpenings = [
  {
    id: 1,
    title: 'Insurance Sales Executive',
    department: 'Sales',
    location: 'Harare, Zimbabwe',
    type: 'Full-time',
    salary: 'Competitive',
    posted: '2 weeks ago',
    description: 'We are seeking a dynamic Insurance Sales Executive to join our growing team. The ideal candidate will have a passion for sales and helping clients find the right insurance solutions.',
    responsibilities: [
      'Identify and pursue new business opportunities',
      'Build and maintain strong client relationships',
      'Present insurance products and explain coverage options',
      'Meet and exceed monthly and quarterly sales targets',
      'Collaborate with underwriting team on complex cases',
    ],
    requirements: [
      'Bachelor\'s degree in Business, Marketing, or related field',
      '2+ years of insurance sales experience',
      'Strong communication and negotiation skills',
      'Valid driver\'s license and own vehicle',
      'Knowledge of insurance products and regulations',
    ],
  },
  {
    id: 2,
    title: 'Claims Processing Officer',
    department: 'Claims',
    location: 'Harare, Zimbabwe',
    type: 'Full-time',
    salary: 'Competitive',
    posted: '1 week ago',
    description: 'Join our claims team to help process and manage insurance claims efficiently. This role requires attention to detail and excellent customer service skills.',
    responsibilities: [
      'Process and assess insurance claims accurately',
      'Communicate with policyholders regarding claim status',
      'Review policy documents and coverage limits',
      'Coordinate with adjusters and investigators',
      'Maintain detailed records of all claims',
    ],
    requirements: [
      'Diploma or degree in Insurance, Business, or related field',
      '1+ years of claims processing experience',
      'Proficiency in MS Office applications',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication',
    ],
  },
  {
    id: 3,
    title: 'Risk Assessment Analyst',
    department: 'Underwriting',
    location: 'Harare, Zimbabwe',
    type: 'Full-time',
    salary: 'Competitive',
    posted: '3 days ago',
    description: 'We are looking for a skilled Risk Assessment Analyst to evaluate and analyze potential risks for our insurance products.',
    responsibilities: [
      'Conduct thorough risk assessments for new policies',
      'Analyze data to identify trends and patterns',
      'Develop risk mitigation strategies',
      'Prepare detailed risk reports for management',
      'Stay updated on industry regulations and best practices',
    ],
    requirements: [
      'Bachelor\'s degree in Finance, Actuarial Science, or related field',
      '3+ years of experience in risk assessment or underwriting',
      'Strong analytical and quantitative skills',
      'Knowledge of insurance industry regulations',
      'Professional certification (ACII, AIIZ) is an advantage',
    ],
  },
  {
    id: 4,
    title: 'Customer Service Representative',
    department: 'Customer Support',
    location: 'Harare, Zimbabwe',
    type: 'Full-time',
    salary: 'Competitive',
    posted: '5 days ago',
    description: 'Be the first point of contact for our valued clients. We need friendly, helpful individuals who can provide excellent customer service.',
    responsibilities: [
      'Handle customer inquiries via phone, email, and in-person',
      'Provide information about insurance products and services',
      'Assist clients with policy renewals and updates',
      'Resolve customer complaints professionally',
      'Maintain accurate customer records',
    ],
    requirements: [
      'Diploma in Business Administration or related field',
      'Previous customer service experience preferred',
      'Excellent communication skills in English and Shona',
      'Computer literate with good typing skills',
      'Patient and empathetic demeanor',
    ],
  },
]

const JobCard = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                {job.department}
              </span>
              <span className="text-gray-400 text-sm">{job.posted}</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {job.type}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                {job.salary}
              </span>
            </div>
          </div>
          <button className="flex items-center gap-2 text-primary-600 font-semibold">
            {isExpanded ? (
              <>
                Hide Details
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                View Details
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100 pt-6">
              <p className="text-gray-600 mb-6">{job.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-heading font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary-600" />
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary-600" />
                    Requirements
                  </h4>
                  <ul className="space-y-2">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href={`mailto:careers@webmatrix.co.zw?subject=Application for ${job.title}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all"
              >
                <Send className="w-5 h-5" />
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Web Matrix Insurance & Risk Consultants</title>
        <meta name="description" content="Join our team at Web Matrix Insurance. Explore exciting career opportunities in insurance sales, claims processing, risk assessment, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm mb-6">
              <Briefcase className="w-4 h-4" />
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Build Your Career
              <span className="text-accent-500"> With Us</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Join a team of dedicated professionals committed to excellence in insurance services. 
              We offer competitive benefits, career growth, and a supportive work environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Why Join Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-4">
              Benefits & Perks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in taking care of our employees so they can take care of our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white mb-6">
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Our Culture</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-6">
                A Place Where You Can Thrive
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Web Matrix Insurance, we foster a culture of collaboration, innovation, and continuous 
                learning. Our team members are encouraged to share ideas, take on new challenges, and grow 
                both personally and professionally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Inclusive and diverse workplace</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Open communication and transparency</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Recognition and rewards for excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Mentorship and guidance from leaders</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                  alt="Office meeting"
                  className="rounded-2xl shadow-lg mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
                  alt="Team discussion"
                  className="rounded-2xl shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                  alt="Working together"
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-4">
              Current Openings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our available positions and find the perfect role for your skills and aspirations.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-navy-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Building2 className="w-16 h-16 text-accent-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Don't See the Right Position?
            </h2>
            <p className="text-white/80 mb-8">
              We're always interested in meeting talented individuals. Send us your CV and 
              we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@webmatrix.co.zw?subject=General Application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              <Send className="w-5 h-5" />
              Submit Your CV
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Careers

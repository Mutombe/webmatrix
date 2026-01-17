import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  Linkedin, 
  Mail, 
  Phone,
  Award,
  Users,
  Target,
  Shield,
  ArrowRight,
  Quote
} from 'lucide-react'
import { Link } from 'react-router-dom'

const boardMembers = [
  {
    name: 'Byron Chikwanda',
    role: 'Chairman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    bio: 'With over 25 years of experience in the financial services sector, Byron provides strategic leadership and governance oversight for Web Matrix Insurance.',
    expertise: ['Corporate Governance', 'Strategic Planning', 'Financial Services'],
  },
  {
    name: 'Petros Sithole',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Petros leads our executive team with a vision for innovative insurance solutions. His expertise in risk management has driven our growth and client satisfaction.',
    expertise: ['Executive Leadership', 'Risk Management', 'Business Development'],
  },
  {
    name: 'Tarisai Linda',
    role: 'Board Member',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    bio: 'Tarisai brings extensive experience in corporate strategy and compliance, ensuring our operations meet the highest industry standards.',
    expertise: ['Compliance', 'Corporate Strategy', 'Regulatory Affairs'],
  },
  {
    name: 'Cleopas Mashiri',
    role: 'Board Member / Finance Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    bio: 'Cleopas oversees our financial operations with meticulous attention to detail, ensuring fiscal responsibility and sustainable growth.',
    expertise: ['Financial Management', 'Accounting', 'Strategic Investment'],
  },
  {
    name: 'Harold Sithole',
    role: 'Board Member / Sales Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    bio: 'Harold drives our sales strategy with a client-centric approach, building lasting relationships and expanding our market presence.',
    expertise: ['Sales Strategy', 'Client Relations', 'Market Development'],
  },
]

const managementTeam = [
  {
    name: 'Petros Sithole',
    role: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    email: 'petros@webmatrix.co.zw',
    phone: '+263 71 602 7886',
    department: 'Executive',
  },
  {
    name: 'Ancicaria Machani',
    role: 'Administration Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    email: 'admin@webmatrix.co.zw',
    phone: '+263 71 602 7886',
    department: 'Administration',
  },
  {
    name: 'Cleopas Mashiri',
    role: 'Finance Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    email: 'finance@webmatrix.co.zw',
    phone: '+263 71 602 7886',
    department: 'Finance',
  },
  {
    name: 'Harold Sithole',
    role: 'Sales Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    email: 'sales@webmatrix.co.zw',
    phone: '+263 71 602 7886',
    department: 'Sales',
  },
  {
    name: 'Raymond Muvirimi',
    role: 'Sales Executive',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    email: 'raymond@webmatrix.co.zw',
    phone: '+263 71 602 7886',
    department: 'Sales',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We uphold the highest ethical standards in all our dealings.',
  },
  {
    icon: Users,
    title: 'Client Focus',
    description: 'Our clients are at the heart of everything we do.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in service delivery.',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'We embrace innovation to better serve our clients.',
  },
]

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | Web Matrix Insurance & Risk Consultants</title>
        <meta name="description" content="Meet the dedicated team behind Web Matrix Insurance. Our experienced board of directors and management team are committed to providing exceptional insurance services." />
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
              <Users className="w-4 h-4" />
              Meet Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              The People Behind
              <span className="text-accent-500"> Your Protection</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Our team of experienced professionals is dedicated to providing you with 
              exceptional insurance solutions and personalized service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-4">
              Board of Directors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our board brings decades of combined experience in insurance, finance, and business leadership, 
              guiding our company towards excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-heading font-bold text-white">{member.name}</h3>
                    <p className="text-accent-400 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote className="w-16 h-16 text-accent-500/30 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-display text-white leading-relaxed mb-8">
              "Our commitment to our clients goes beyond providing insurance coverage. 
              We build lasting partnerships based on trust, expertise, and genuine care 
              for their well-being."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt="Petros Sithole"
                className="w-16 h-16 rounded-full border-2 border-accent-500"
              />
              <div className="text-left">
                <p className="font-heading font-semibold text-white">Petros Sithole</p>
                <p className="text-white/60 text-sm">Chief Executive Officer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Our Experts</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-4">
              Management Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who work tirelessly to ensure you receive 
              the best insurance services and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {managementTeam.map((member, index) => (
              <motion.div
                key={member.name + member.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  <span className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-accent-600 text-sm font-medium mb-3">{member.role}</p>
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full mb-4">
                  {member.department}
                </span>
                <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-white/80 mb-8">
                We're always looking for talented individuals who share our passion for 
                excellence and client service. Explore career opportunities with us.
              </p>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Team

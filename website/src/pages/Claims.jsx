import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  Clock, 
  Shield,
  Phone,
  Mail,
  AlertCircle,
  ArrowRight,
  FileCheck,
  Users,
  Zap,
  HelpCircle,
  Search,
  ClipboardList,
  CreditCard,
  BadgeCheck
} from 'lucide-react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

const claimTypes = [
  { value: 'motor', label: 'Motor Vehicle Claim' },
  { value: 'property', label: 'Property Damage Claim' },
  { value: 'life', label: 'Life Insurance Claim' },
  { value: 'health', label: 'Health Insurance Claim' },
  { value: 'liability', label: 'Liability Claim' },
  { value: 'other', label: 'Other' },
]

const processSteps = [
  {
    step: 1,
    icon: ClipboardList,
    title: 'Report Your Claim',
    description: 'Submit your claim online, by phone, or in person. Provide all necessary details about the incident.',
    timeline: 'Day 1',
  },
  {
    step: 2,
    icon: Search,
    title: 'Assessment',
    description: 'Our claims team reviews your submission and may assign an assessor to evaluate the damage or loss.',
    timeline: 'Days 2-5',
  },
  {
    step: 3,
    icon: FileCheck,
    title: 'Documentation Review',
    description: 'We verify all documents and information provided. Additional documentation may be requested.',
    timeline: 'Days 5-10',
  },
  {
    step: 4,
    icon: CreditCard,
    title: 'Settlement',
    description: 'Once approved, your claim is processed and payment is made according to your policy terms.',
    timeline: 'Days 10-14',
  },
]

const claimTips = [
  {
    icon: AlertCircle,
    title: 'Report Promptly',
    description: 'Report your claim as soon as possible after the incident occurs.',
  },
  {
    icon: FileText,
    title: 'Document Everything',
    description: 'Take photos, gather receipts, and keep all relevant documents.',
  },
  {
    icon: Users,
    title: 'Witness Information',
    description: 'If applicable, collect contact details of any witnesses.',
  },
  {
    icon: Phone,
    title: 'Stay in Touch',
    description: 'Respond promptly to any requests from our claims team.',
  },
]

const Claims = () => {
  const [formData, setFormData] = useState({
    policyNumber: '',
    claimType: '',
    incidentDate: '',
    fullName: '',
    email: '',
    phone: '',
    description: '',
    documents: null,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState('')
  const [trackingResult, setTrackingResult] = useState(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success('Claim submitted successfully! We\'ll contact you within 24 hours.')
  }

  const handleTrackClaim = async (e) => {
    e.preventDefault()
    if (!trackingNumber) {
      toast.error('Please enter a claim reference number')
      return
    }

    // Simulate tracking lookup
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    // Mock result
    setTrackingResult({
      status: 'In Progress',
      lastUpdate: 'January 15, 2026',
      stage: 'Documentation Review',
      message: 'Your claim is being reviewed by our team. We may contact you for additional information.',
    })
  }

  return (
    <>
      <Helmet>
        <title>File a Claim | Web Matrix Insurance & Risk Consultants</title>
        <meta name="description" content="File an insurance claim with Web Matrix Insurance. Submit your claim online, track your claim status, and get fast, fair settlements." />
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
              <FileText className="w-4 h-4" />
              Claims Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              File a Claim
              <span className="text-accent-500"> With Ease</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              We're here to help when you need it most. Submit your claim online and 
              our dedicated team will guide you through the process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-display font-bold text-gray-900">24hrs</p>
              <p className="text-sm text-gray-600">Response Time</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BadgeCheck className="w-6 h-6 text-primary-600" />
              </div>
              <p className="text-2xl font-display font-bold text-gray-900">98%</p>
              <p className="text-sm text-gray-600">Claims Approved</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-accent-600" />
              </div>
              <p className="text-2xl font-display font-bold text-gray-900">14 Days</p>
              <p className="text-sm text-gray-600">Avg. Settlement</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-display font-bold text-gray-900">10,000+</p>
              <p className="text-sm text-gray-600">Claims Processed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Claims Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mt-2 mb-4">
              Claims Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've streamlined our claims process to get you back on track as quickly as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-display font-bold text-gray-200">
                      0{step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                    <Clock className="w-3 h-3" />
                    {step.timeline}
                  </span>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Form & Track Claim */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Claim Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Submit a Claim</span>
              <h2 className="text-3xl font-display font-bold text-gray-900 mt-2 mb-6">
                Claim Submission Form
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                    Claim Submitted Successfully!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your claim reference number is: <strong>CLM-2026-{Math.floor(Math.random() * 10000)}</strong>
                  </p>
                  <p className="text-sm text-gray-500">
                    We'll contact you within 24 hours to discuss your claim.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="policyNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Policy Number *
                      </label>
                      <input
                        type="text"
                        id="policyNumber"
                        name="policyNumber"
                        value={formData.policyNumber}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., WM-2024-12345"
                      />
                    </div>
                    <div>
                      <label htmlFor="claimType" className="block text-sm font-medium text-gray-700 mb-2">
                        Claim Type *
                      </label>
                      <select
                        id="claimType"
                        name="claimType"
                        value={formData.claimType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select claim type</option>
                        {claimTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="incidentDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Incident *
                      </label>
                      <input
                        type="date"
                        id="incidentDate"
                        name="incidentDate"
                        value={formData.incidentDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+263 71 234 5678"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description of Incident *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Please provide detailed information about what happened..."
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Supporting Documents
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-500 transition-colors">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-1">
                        Drag and drop files here, or click to browse
                      </p>
                      <p className="text-xs text-gray-400">
                        PDF, JPG, PNG up to 10MB each
                      </p>
                      <input
                        type="file"
                        name="documents"
                        onChange={handleChange}
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FileText className="w-5 h-5" />
                        Submit Claim
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Track Claim */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary-600" />
                  Track Your Claim
                </h3>
                <form onSubmit={handleTrackClaim}>
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter claim reference"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-3"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                  >
                    Track Claim
                  </button>
                </form>

                {trackingResult && (
                  <div className="mt-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded">
                        {trackingResult.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mb-1">{trackingResult.stage}</p>
                    <p className="text-xs text-gray-500 mb-2">Last updated: {trackingResult.lastUpdate}</p>
                    <p className="text-sm text-gray-600">{trackingResult.message}</p>
                  </div>
                )}
              </div>

              {/* Tips */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-heading font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-primary-600" />
                  Helpful Tips
                </h3>
                <div className="space-y-4">
                  {claimTips.map((tip) => (
                    <div key={tip.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <tip.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{tip.title}</p>
                        <p className="text-xs text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold mb-2">Emergency Claims</h3>
                <p className="text-white/80 text-sm mb-4">
                  For urgent claims assistance, contact our 24/7 hotline.
                </p>
                <a
                  href="tel:+263716027886"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  +263 71 602 7886
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-900 to-navy-900 rounded-3xl p-8 md:p-12 text-center"
          >
            <Shield className="w-16 h-16 text-accent-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Need Help With Your Claim?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our dedicated claims team is here to assist you every step of the way. 
              Contact us for personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Support
              </Link>
              <a
                href="tel:+263716027886"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Claims

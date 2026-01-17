import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { 
  Car, 
  Home, 
  Heart, 
  Building2, 
  Shield,
  Activity,
  ChevronRight,
  ChevronLeft,
  Check,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Send,
  CheckCircle,
  Sparkles,
  Clock,
  BadgeCheck
} from 'lucide-react'
import { toast } from 'sonner'

const insuranceTypes = [
  { id: 'motor', icon: Car, label: 'Motor Insurance', description: 'Comprehensive cover for your vehicles' },
  { id: 'property', icon: Home, label: 'Property Insurance', description: 'Protect your home and business property' },
  { id: 'life', icon: Heart, label: 'Life Insurance', description: 'Financial security for your loved ones' },
  { id: 'corporate', icon: Building2, label: 'Corporate Insurance', description: 'Complete business protection solutions' },
  { id: 'health', icon: Activity, label: 'Health Insurance', description: 'Medical coverage for you and family' },
  { id: 'liability', icon: Shield, label: 'Liability Insurance', description: 'Protection against third-party claims' },
]

const steps = [
  { id: 1, title: 'Insurance Type', icon: Shield },
  { id: 2, title: 'Personal Info', icon: User },
  { id: 3, title: 'Coverage Details', icon: FileText },
  { id: 4, title: 'Review & Submit', icon: CheckCircle },
]

const GetQuote = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedType, setSelectedType] = useState(null)
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    address: '',
    dateOfBirth: '',
    // Coverage Details
    coverageStart: '',
    coverageAmount: '',
    additionalInfo: '',
    // Motor specific
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    vehicleValue: '',
    // Property specific
    propertyType: '',
    propertyValue: '',
    propertyAddress: '',
    // General
    existingPolicy: 'no',
    preferredContact: 'email',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleTypeSelect = (typeId) => {
    setSelectedType(typeId)
  }

  const handleNext = () => {
    if (currentStep === 1 && !selectedType) {
      toast.error('Please select an insurance type')
      return
    }
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success('Quote request submitted! We\'ll contact you within 24 hours.')
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
              What type of insurance do you need?
            </h2>
            <p className="text-gray-600 mb-8">
              Select the type of coverage you're looking for.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {insuranceTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => handleTypeSelect(type.id)}
                  className={`p-6 rounded-2xl border-2 text-left transition-all ${
                    selectedType === type.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    selectedType === type.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    <type.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-1">
                    {type.label}
                  </h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                  {selectedType === type.id && (
                    <div className="mt-3 flex items-center gap-1 text-primary-600 text-sm font-medium">
                      <Check className="w-4 h-4" />
                      Selected
                    </div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Tell us about yourself
            </h2>
            <p className="text-gray-600 mb-8">
              We need some basic information to prepare your quote.
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+263 71 234 5678"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={2}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Enter your address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === 'email'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === 'phone'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="text-gray-700">Phone</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === 'whatsapp'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="text-gray-700">WhatsApp</span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Coverage Details
            </h2>
            <p className="text-gray-600 mb-8">
              Help us understand your coverage needs.
            </p>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Start Date *
                  </label>
                  <input
                    type="date"
                    name="coverageStart"
                    value={formData.coverageStart}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Coverage Amount (USD)
                  </label>
                  <input
                    type="text"
                    name="coverageAmount"
                    value={formData.coverageAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., 50,000"
                  />
                </div>
              </div>

              {/* Motor Insurance Fields */}
              {selectedType === 'motor' && (
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h3 className="font-heading font-semibold text-gray-900 flex items-center gap-2">
                    <Car className="w-5 h-5 text-primary-600" />
                    Vehicle Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Make
                      </label>
                      <input
                        type="text"
                        name="vehicleMake"
                        value={formData.vehicleMake}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., Toyota"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Model
                      </label>
                      <input
                        type="text"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., Hilux"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Year of Manufacture
                      </label>
                      <input
                        type="text"
                        name="vehicleYear"
                        value={formData.vehicleYear}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., 2022"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Value (USD)
                      </label>
                      <input
                        type="text"
                        name="vehicleValue"
                        value={formData.vehicleValue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., 25,000"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Property Insurance Fields */}
              {selectedType === 'property' && (
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h3 className="font-heading font-semibold text-gray-900 flex items-center gap-2">
                    <Home className="w-5 h-5 text-primary-600" />
                    Property Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Type
                      </label>
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Value (USD)
                      </label>
                      <input
                        type="text"
                        name="propertyValue"
                        value={formData.propertyValue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="e.g., 150,000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address
                    </label>
                    <textarea
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Enter property address"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have an existing policy?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="existingPolicy"
                      value="yes"
                      checked={formData.existingPolicy === 'yes'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="existingPolicy"
                      value="no"
                      checked={formData.existingPolicy === 'no'}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Any additional details or special requirements..."
                />
              </div>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
              Review Your Information
            </h2>
            <p className="text-gray-600 mb-8">
              Please review your details before submitting.
            </p>

            <div className="space-y-6">
              {/* Insurance Type */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-gray-900 mb-4">Insurance Type</h3>
                <div className="flex items-center gap-3">
                  {insuranceTypes.find(t => t.id === selectedType) && (
                    <>
                      {(() => {
                        const TypeIcon = insuranceTypes.find(t => t.id === selectedType).icon
                        return (
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                            <TypeIcon className="w-5 h-5 text-primary-600" />
                          </div>
                        )
                      })()}
                      <span className="font-medium text-gray-900">
                        {insuranceTypes.find(t => t.id === selectedType).label}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Full Name:</span>
                    <p className="font-medium text-gray-900">{formData.fullName || '-'}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <p className="font-medium text-gray-900">{formData.email || '-'}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <p className="font-medium text-gray-900">{formData.phone || '-'}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Preferred Contact:</span>
                    <p className="font-medium text-gray-900 capitalize">{formData.preferredContact}</p>
                  </div>
                </div>
              </div>

              {/* Coverage Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-gray-900 mb-4">Coverage Details</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Start Date:</span>
                    <p className="font-medium text-gray-900">{formData.coverageStart || '-'}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Coverage Amount:</span>
                    <p className="font-medium text-gray-900">{formData.coverageAmount ? `$${formData.coverageAmount}` : '-'}</p>
                  </div>
                  {selectedType === 'motor' && formData.vehicleMake && (
                    <>
                      <div>
                        <span className="text-gray-500">Vehicle:</span>
                        <p className="font-medium text-gray-900">
                          {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-500">Vehicle Value:</span>
                        <p className="font-medium text-gray-900">{formData.vehicleValue ? `$${formData.vehicleValue}` : '-'}</p>
                      </div>
                    </>
                  )}
                  {selectedType === 'property' && formData.propertyType && (
                    <>
                      <div>
                        <span className="text-gray-500">Property Type:</span>
                        <p className="font-medium text-gray-900 capitalize">{formData.propertyType}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Property Value:</span>
                        <p className="font-medium text-gray-900">{formData.propertyValue ? `$${formData.propertyValue}` : '-'}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-xl">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-primary-600 rounded"
                />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-primary-600 underline">Terms and Conditions</a> and{' '}
                  <a href="#" className="text-primary-600 underline">Privacy Policy</a>. I understand that this 
                  is a quote request and not a binding agreement.
                </label>
              </div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Quote Submitted | Web Matrix Insurance & Risk Consultants</title>
        </Helmet>
        <section className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900 flex items-center">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl font-display font-bold text-white mb-4">
                Quote Request Submitted!
              </h1>
              <p className="text-white/80 mb-8">
                Thank you for your interest in Web Matrix Insurance. Our team will review 
                your request and contact you within 24 hours with a personalized quote.
              </p>
              <div className="bg-white/10 rounded-xl p-6 mb-8">
                <p className="text-white/60 text-sm mb-2">Your Reference Number</p>
                <p className="text-2xl font-mono font-bold text-accent-400">
                  QR-{new Date().getFullYear()}-{Math.floor(Math.random() * 100000)}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/"
                  className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Back to Home
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Get a Quote | Web Matrix Insurance & Risk Consultants</title>
        <meta name="description" content="Get a free insurance quote from Web Matrix Insurance. Quick, easy, and no obligation. Compare coverage options and find the best rates." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900 overflow-hidden">
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
              <Sparkles className="w-4 h-4" />
              Free Quote
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Get Your Free
              <span className="text-accent-500"> Insurance Quote</span>
            </h1>
            <p className="text-lg text-white/80">
              Complete the form below and receive a personalized quote within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-b py-6">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-primary-600" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BadgeCheck className="w-5 h-5 text-primary-600" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Shield className="w-5 h-5 text-primary-600" />
              <span>Your data is secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold transition-all ${
                      currentStep >= step.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {currentStep > step.id ? (
                        <Check className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`ml-3 hidden md:block font-medium ${
                      currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`mx-4 h-1 w-12 md:w-24 rounded ${
                        currentStep > step.id ? 'bg-primary-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {renderStepContent()}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-10 pt-8 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={currentStep === 1}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      currentStep === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all"
                    >
                      Next Step
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-semibold rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Quote Request
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetQuote

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown, MessageCircleQuestion, HelpCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    question: 'What types of insurance does Web Matrix offer?',
    answer: 'We offer a comprehensive range of insurance products including Motor Insurance, Property Insurance, Life Assurance, Corporate Insurance Solutions, Health Insurance, and specialized Risk Management services. Our team works with multiple insurance providers to ensure you get the best coverage for your specific needs.'
  },
  {
    question: 'How do I file a claim with Web Matrix?',
    answer: 'Filing a claim is simple. You can submit your claim through our online Claims portal, call our 24/7 claims hotline at +263 71 602 7886, or visit our office in Harare. Our dedicated claims team will guide you through the entire process and ensure swift resolution.'
  },
  {
    question: 'What makes Web Matrix different from other insurance brokers?',
    answer: 'With over 20 years of combined experience, Web Matrix offers personalized service, access to multiple top-rated insurers, competitive premiums, and a 98% client satisfaction rate. We provide end-to-end support from policy selection to claims processing, ensuring you\'re never alone in your insurance journey.'
  },
  {
    question: 'How long does it take to get a quote?',
    answer: 'Our streamlined quoting process typically delivers quotes within 24-48 hours. For standard motor and property insurance, you can receive instant quotes through our online quote request form. More complex corporate policies may require additional consultation to ensure comprehensive coverage.'
  },
  {
    question: 'Do you offer payment plans for premiums?',
    answer: 'Yes, we understand that flexibility is important. We offer various payment options including monthly, quarterly, semi-annual, and annual payment plans. Our finance team will work with you to find a payment schedule that suits your budget while maintaining continuous coverage.'
  },
  {
    question: 'What documents do I need to purchase insurance?',
    answer: 'Documentation requirements vary by insurance type. Generally, you\'ll need valid identification (ID/Passport), proof of address, and specific documents related to what you\'re insuring (vehicle registration, property deeds, etc.). Our team will provide a complete checklist during your consultation.'
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left group"
      >
        <div className="flex items-start gap-4">
          <span className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-heading font-bold text-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <span className={`font-heading font-semibold text-lg transition-colors ${isOpen ? 'text-primary-600' : 'text-gray-900 group-hover:text-primary-600'}`}>
            {faq.question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-primary-100'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-12 pr-4">
              <p className="text-gray-600 font-body leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent-50 text-accent-600 rounded-full text-sm font-heading font-semibold mb-4">
              <MessageCircleQuestion className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6">
              Frequently Asked <span className="text-accent-600">Questions</span>
            </h2>
            <p className="text-gray-600 font-body text-lg mb-8">
              Find answers to common questions about our insurance services, policies, and processes.
            </p>

            {/* Help Card */}
            <div className="bg-gradient-to-br from-primary-900 to-navy-900 rounded-2xl p-6 text-white">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">
                Still have questions?
              </h3>
              <p className="text-primary-200 font-body text-sm mb-4">
                Our team is ready to help you with any insurance inquiries.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-600 hover:bg-accent-700 rounded-lg font-heading font-semibold text-sm transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right Column - FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl shadow-elegant p-6 md:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

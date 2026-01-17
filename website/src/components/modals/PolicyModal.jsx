import React from 'react'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Shield, FileText, Cookie, ScrollText } from 'lucide-react'
import { useModal } from '../../context/ModalContext'
import { SiFsecure } from "react-icons/si";

const policyContent = {
  privacy: {
    title: 'Privacy Policy',
    icon: Shield,
    lastUpdated: 'January 2024',
    sections: [
      {
        title: '1. Information We Collect',
        content: `We collect information you provide directly to us, such as when you create an account, request a quote, file a claim, or contact us for support. This may include your name, email address, phone number, address, date of birth, and other information relevant to providing insurance services.

We also automatically collect certain information when you use our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.`
      },
      {
        title: '2. How We Use Your Information',
        content: `We use the information we collect to:
• Process insurance applications and claims
• Communicate with you about your policy
• Send you important updates and notifications
• Improve our website and services
• Comply with legal and regulatory requirements
• Prevent fraud and enhance security`
      },
      {
        title: '3. Information Sharing',
        content: `We may share your information with:
• Insurance underwriters and reinsurers
• Service providers who assist in our operations
• Government agencies as required by law
• Professional advisors including lawyers and accountants

We do not sell your personal information to third parties for marketing purposes.`
      },
      {
        title: '4. Data Security',
        content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`
      },
      {
        title: '5. Your Rights',
        content: `You have the right to:
• Access your personal information
• Request correction of inaccurate data
• Request deletion of your data (where applicable)
• Object to processing of your data
• Request data portability

To exercise these rights, please contact us at info@webmatrix.co.zw`
      },
      {
        title: '6. Contact Us',
        content: `If you have questions about this Privacy Policy, please contact us at:
Email: info@webmatrix.co.zw
Phone: +263 71 602 7886`
      }
    ]
  },
  terms: {
    title: 'Terms of Service',
    icon: FileText,
    lastUpdated: 'January 2024',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: `By accessing and using the Web Matrix Insurance & Risk Consultants website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
      },
      {
        title: '2. Services Description',
        content: `Web Matrix Insurance & Risk Consultants provides insurance brokerage and risk management services. We act as intermediaries between you and insurance providers, helping you find suitable coverage for your needs. We are not an insurance company and do not underwrite insurance policies.`
      },
      {
        title: '3. User Responsibilities',
        content: `You agree to:
• Provide accurate and complete information
• Keep your account credentials secure
• Notify us of any unauthorized access
• Use our services only for lawful purposes
• Not misrepresent your identity or insurance needs`
      },
      {
        title: '4. Insurance Policies',
        content: `All insurance policies are subject to the terms and conditions set by the respective insurance providers. We make no guarantees about coverage, claims approval, or policy terms. Please read your policy documents carefully.`
      },
      {
        title: '5. Limitation of Liability',
        content: `To the fullest extent permitted by law, Web Matrix Insurance shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.`
      },
      {
        title: '6. Modifications',
        content: `We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of modified terms.`
      },
      {
        title: '7. Governing Law',
        content: `These Terms shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.`
      }
    ]
  },
  cookies: {
    title: 'Cookie Policy',
    icon: Cookie,
    lastUpdated: 'January 2024',
    sections: [
      {
        title: 'What Are Cookies?',
        content: `Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and understanding how you use our site.`
      },
      {
        title: 'Types of Cookies We Use',
        content: `Necessary Cookies: Essential for the website to function properly. They enable basic features like page navigation and access to secure areas.

Analytics Cookies: Help us understand how visitors interact with our website by collecting and reporting information anonymously.

Functional Cookies: Enable enhanced functionality and personalization, such as remembering your preferences.

Marketing Cookies: Used to track visitors across websites to display relevant advertisements.`
      },
      {
        title: 'Managing Cookies',
        content: `You can control and manage cookies in various ways:
• Browser settings: Most browsers allow you to refuse or accept cookies
• Our cookie banner: Use our preference center to manage cookie consent
• Third-party opt-outs: Visit third-party websites to opt out of their cookies

Note that disabling certain cookies may affect the functionality of our website.`
      },
      {
        title: 'Third-Party Cookies',
        content: `We may use third-party services that set their own cookies, including:
• Google Analytics for website analytics
• Social media plugins for content sharing
• Payment processors for secure transactions

These third parties have their own privacy and cookie policies.`
      },
      {
        title: 'Updates to This Policy',
        content: `We may update this Cookie Policy from time to time. The latest version will always be available on our website with the "Last Updated" date.`
      },
      {
        title: 'Contact Us',
        content: `If you have questions about our use of cookies, please contact us at info@webmatrix.co.zw`
      }
    ]
  }
}

export default function PolicyModal() {
  const { policyModal, closePolicy } = useModal()
  const { isOpen, type } = policyModal

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const policy = type ? policyContent[type] : null

  return (
    <AnimatePresence>
      {isOpen && policy && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closePolicy}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-card-hover max-w-3xl w-full max-h-[85vh] overflow-hidden"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-navy-100 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                  <policy.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-navy-900">{policy.title}</h2>
                  <p className="text-xs text-navy-500">Last updated: {policy.lastUpdated}</p>
                </div>
              </div>
              <button
                onClick={closePolicy}
                className="w-10 h-10 rounded-full hover:bg-navy-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-navy-600" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(85vh-80px)]">
              <div className="prose prose-navy max-w-none">
                {policy.sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="mb-6"
                  >
                    <h3 className="text-lg font-bold text-navy-900 mb-3">{section.title}</h3>
                    <div className="text-navy-600 text-sm leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-navy-50 border-t border-navy-100 px-6 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-navy-500">
                  Questions? Contact us at{' '}
                  <a href="mailto:info@webmatrix.co.zw" className="text-primary-600 hover:underline">
                    info@webmatrix.co.zw
                  </a>
                </p>
                <button
                  onClick={closePolicy}
                  className="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  I Understand
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

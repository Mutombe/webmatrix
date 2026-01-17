import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings, Check } from 'lucide-react'
import { toast } from 'sonner'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted))
    setIsVisible(false)
    toast.success('Cookie preferences saved')
  }

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences))
    setIsVisible(false)
    toast.success('Cookie preferences saved')
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary))
    setIsVisible(false)
    toast.success('Only necessary cookies enabled')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50"
        >
          <div className="bg-white rounded-2xl shadow-card-hover border border-navy-100 overflow-hidden">
            {!showPreferences ? (
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-6 h-6 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">Cookie Preferences</h3>
                    <p className="text-sm text-navy-600 mb-4">
                      We use cookies to enhance your browsing experience, serve personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={acceptAll}
                        className="px-4 py-2 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors"
                      >
                        Accept All
                      </button>
                      <button
                        onClick={rejectAll}
                        className="px-4 py-2 bg-navy-100 text-navy-700 text-sm font-semibold rounded-lg hover:bg-navy-200 transition-colors"
                      >
                        Reject All
                      </button>
                      <button
                        onClick={() => setShowPreferences(true)}
                        className="px-4 py-2 text-navy-600 text-sm font-medium hover:text-primary-600 transition-colors flex items-center gap-1"
                      >
                        <Settings size={14} />
                        Preferences
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="text-navy-400 hover:text-navy-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-navy-900">Cookie Preferences</h3>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="text-navy-400 hover:text-navy-600 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  {[
                    { key: 'necessary', label: 'Necessary', desc: 'Required for the website to function', disabled: true },
                    { key: 'analytics', label: 'Analytics', desc: 'Help us understand how visitors interact' },
                    { key: 'marketing', label: 'Marketing', desc: 'Used to deliver personalized ads' },
                    { key: 'functional', label: 'Functional', desc: 'Enable enhanced functionality' },
                  ].map((cookie) => (
                    <label
                      key={cookie.key}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                        preferences[cookie.key] ? 'border-accent-200 bg-accent-50' : 'border-navy-200'
                      } ${cookie.disabled ? 'opacity-75' : 'cursor-pointer'}`}
                    >
                      <div>
                        <p className="font-medium text-navy-900">{cookie.label}</p>
                        <p className="text-xs text-navy-500">{cookie.desc}</p>
                      </div>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={preferences[cookie.key]}
                          disabled={cookie.disabled}
                          onChange={(e) => setPreferences({ ...preferences, [cookie.key]: e.target.checked })}
                          className="sr-only"
                        />
                        <div className={`w-10 h-6 rounded-full transition-colors ${
                          preferences[cookie.key] ? 'bg-accent-600' : 'bg-navy-200'
                        }`}>
                          <div className={`w-4 h-4 rounded-full bg-white shadow transform transition-transform mt-1 ${
                            preferences[cookie.key] ? 'translate-x-5' : 'translate-x-1'
                          }`} />
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={acceptSelected}
                    className="flex-1 px-4 py-2 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Check size={16} />
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

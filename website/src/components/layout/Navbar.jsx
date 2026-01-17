import React from 'react'
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ChevronDown,
  Shield,
  Users,
  Briefcase,
  FileText,
  MessageSquare,
  Award
} from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6";
import { SiFsecure } from "react-icons/si";

const navLinks = [
  { path: '/', label: 'Home' },
  { 
    path: '/about', 
    label: 'About Us',
    submenu: [
      { path: '/about', label: 'Our Story', icon: SiFsecure },
      { path: '/team', label: 'Our Team', icon: Users },
    ]
  },
  { 
    path: '/services', 
    label: 'Services',
    submenu: [
      { path: '/services', label: 'All Services', icon: Briefcase },
      { path: '/claims', label: 'File a Claim', icon: FileText },
    ]
  },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [location])

  const handleDropdownEnter = (label) => {
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary-900 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+263716027886" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Phone size={14} />
              <span>+263 71 602 7886</span>
            </a>
            <a href="mailto:info@webmatrix.co.zw" className="flex items-center gap-2 hover:text-accent-400 transition-colors">
              <Mail size={14} />
              <span>info@webmatrix.co.zw</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-300">Mon - Fri: 8:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-elegant' 
            : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src="/webmatrix-logo.png" 
                alt="Web Matrix Insurance & Risk Consultants" 
                className="h-14 md:h-16 w-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.submenu && handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-1 transition-all duration-200
                      ${isActive 
                        ? 'text-accent-600 bg-accent-50' 
                        : 'text-navy-700 hover:text-primary-600 hover:bg-primary-50'
                      }
                    `}
                  >
                    {link.label}
                    {link.submenu && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </NavLink>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.submenu && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-xl shadow-card-hover border border-navy-100 overflow-hidden min-w-[200px]">
                          {link.submenu.map((item, idx) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className={`flex items-center gap-3 px-4 py-3 hover:bg-primary-50 transition-colors ${
                                idx !== link.submenu.length - 1 ? 'border-b border-navy-100' : ''
                              }`}
                            >
                              <item.icon size={18} className="text-accent-600" />
                              <span className="text-navy-700 font-medium">{item.label}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/get-quote"
                className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-semibold rounded-full hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get a Quote</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-navy-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-navy-900" />
                ) : (
                  <Menu size={24} className="text-navy-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-x-0 top-20 bg-white border-t border-navy-100 shadow-elegant z-40 overflow-hidden"
          >
            <div className="container-custom py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.submenu ? (
                    <div className="space-y-1">
                      <div className="px-4 py-3 font-semibold text-navy-900">{link.label}</div>
                      {link.submenu.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={({ isActive }) => `
                            flex items-center gap-3 px-6 py-2 rounded-lg transition-colors
                            ${isActive 
                              ? 'text-accent-600 bg-accent-50' 
                              : 'text-navy-600 hover:bg-navy-50'
                            }
                          `}
                        >
                          <item.icon size={16} />
                          <span>{item.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) => `
                        block px-4 py-3 rounded-lg font-medium transition-colors
                        ${isActive 
                          ? 'text-accent-600 bg-accent-50' 
                          : 'text-navy-700 hover:bg-navy-50'
                        }
                      `}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  to="/get-quote"
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-semibold rounded-xl"
                >
                  Get a Free Quote
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 border-t border-navy-100 space-y-3"
              >
                <a href="tel:+263716027886" className="flex items-center gap-3 text-navy-600">
                  <Phone size={16} className="text-accent-600" />
                  <span>+263 71 602 7886</span>
                </a>
                <a href="mailto:info@webmatrix.co.zw" className="flex items-center gap-3 text-navy-600">
                  <Mail size={16} className="text-accent-600" />
                  <span>info@webmatrix.co.zw</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

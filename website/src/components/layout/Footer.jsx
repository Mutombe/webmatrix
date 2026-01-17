import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Clock,
  Shield
} from 'lucide-react'
import { useModal } from '../../context/ModalContext'
import { FaXTwitter } from "react-icons/fa6";
import { SiFsecure } from "react-icons/si";

const quickLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Our Services' },
  { path: '/team', label: 'Our Team' },
  { path: '/careers', label: 'Careers' },
  { path: '/contact', label: 'Contact' },
]

const services = [
  { label: 'Motor Insurance' },
  { label: 'Property Insurance' },
  { label: 'Life Assurance' },
  { label: 'Health Insurance' },
  { label: 'Risk Management' },
  { label: 'Corporate Solutions' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: FaXTwitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const { openPolicy } = useModal()

  return (
    <footer className="relative bg-gradient-to-br from-primary-900 via-navy-900 to-primary-950 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>

      {/* CTA Section */}
      <div className="relative border-b border-white/10">
        <div className="container-custom py-16">
          <div className="bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-hero-pattern"></div>
            </div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                  Ready to Protect What Matters?
                </h3>
                <p className="text-white/90">
                  Get a personalized quote in minutes. Our experts are here to help.
                </p>
              </div>
              <Link
                to="/get-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent-600 font-bold rounded-full hover:bg-navy-50 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/webmatrix-logo.png" 
                alt="Web Matrix Insurance & Risk Consultants" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed">
              Zimbabwe's premier insurance and risk management consultants. With over 20 years 
              of combined expertise, we provide comprehensive coverage solutions for individuals 
              and businesses across the nation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-600 flex items-center justify-center transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-600"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-200 hover:text-white hover:translate-x-2 transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-600"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    to="/services"
                    className="text-primary-200 hover:text-white hover:translate-x-2 transition-all duration-200 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-accent-600"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="tel:+263716027886" 
                  className="flex items-start gap-3 text-primary-200 hover:text-white transition-colors group"
                >
                  <Phone size={18} className="mt-1 text-accent-500" />
                  <span>+263 71 602 7886</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@webmatrix.co.zw" 
                  className="flex items-start gap-3 text-primary-200 hover:text-white transition-colors group"
                >
                  <Mail size={18} className="mt-1 text-accent-500" />
                  <span>info@webmatrix.co.zw</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-200">
                <MapPin size={18} className="mt-1 text-accent-500" />
                <span>Harare, Zimbabwe</span>
              </li>
              <li className="flex items-start gap-3 text-primary-200">
                <Clock size={18} className="mt-1 text-accent-500" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-sm text-primary-300">Sat - Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-300">
            <p>© {new Date().getFullYear()} Web Matrix Insurance & Risk Consultants. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => openPolicy('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openPolicy('terms')}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => openPolicy('cookies')}
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

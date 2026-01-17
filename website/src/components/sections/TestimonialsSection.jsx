import React from 'react'
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'John Moyo',
    role: 'Business Owner',
    company: 'Moyo Logistics Ltd',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Web Matrix has been instrumental in protecting our fleet of vehicles and business assets. Their team took the time to understand our operations and designed a coverage plan that perfectly fits our needs. When we had a claim, the process was seamless and professional.',
    rating: 5
  },
  {
    name: 'Sarah Ndlovu',
    role: 'Property Investor',
    company: 'Private Client',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content: 'I\'ve been with Web Matrix for over 5 years now. Their property insurance packages are comprehensive and competitively priced. What I appreciate most is their proactive approach - they regularly review my coverage to ensure I\'m always protected.',
    rating: 5
  },
  {
    name: 'David Chikwanda',
    role: 'CEO',
    company: 'TechStart Zimbabwe',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    content: 'As a growing tech company, we needed an insurance partner who understood our unique risks. Web Matrix delivered beyond expectations. Their corporate insurance solutions and risk management advice have been invaluable to our growth.',
    rating: 5
  },
  {
    name: 'Grace Mutasa',
    role: 'HR Director',
    company: 'National Manufacturing Co.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'We switched our corporate health insurance to Web Matrix last year and it was one of our best decisions. The coverage is excellent, premiums are reasonable, and their claims support team is always responsive. Our employees are very satisfied.',
    rating: 5
  }
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-navy-50 to-white overflow-hidden" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full mb-6">
            <span className="text-accent-700 text-sm font-semibold">Client Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
            What Our Clients{' '}
            <span className="text-accent-600">Say</span>
          </h2>
          <p className="text-lg text-navy-600">
            Don't just take our word for it. Hear from some of our satisfied clients 
            who have experienced the Web Matrix difference.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-card relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-accent-600 flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6 pt-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-xl md:text-2xl text-navy-700 leading-relaxed mb-8 font-display italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <p className="text-lg font-bold text-navy-900">{testimonials[currentIndex].name}</p>
                  <p className="text-navy-600">{testimonials[currentIndex].role}</p>
                  <p className="text-sm text-accent-600">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-shadow group"
            >
              <ChevronLeft className="w-5 h-5 text-navy-600 group-hover:text-primary-600 transition-colors" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-accent-600' 
                      : 'w-2 bg-navy-200 hover:bg-navy-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-shadow group"
            >
              <ChevronRight className="w-5 h-5 text-navy-600 group-hover:text-primary-600 transition-colors" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-navy-500 mb-4">Trusted by leading organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
            {['Company A', 'Company B', 'Company C', 'Company D'].map((company) => (
              <div key={company} className="text-2xl font-bold text-navy-400">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

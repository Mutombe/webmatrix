import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Shield, Award, Clock } from 'lucide-react'
import { SiFsecure } from "react-icons/si";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Trusted by thousands across Zimbabwe'
  },
  {
    icon: SiFsecure,
    value: 10000,
    suffix: '+',
    label: 'Claims Processed',
    description: 'Successfully handled with care'
  },
  {
    icon: Award,
    value: 20,
    suffix: '+',
    label: 'Years Experience',
    description: 'Industry-leading expertise'
  },
  {
    icon: Clock,
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Consistently exceeding expectations'
  }
]

function Counter({ value, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) {
        requestAnimationFrame(animateCount)
      }
    }
    requestAnimationFrame(animateCount)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="text-center p-6 rounded-2xl transition-all duration-500 hover:bg-gradient-to-br hover:from-primary-50 hover:to-white">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8" />
                </div>

                {/* Value */}
                <div className="text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-navy-800 mb-1">{stat.label}</h3>
                <p className="text-sm text-navy-500">{stat.description}</p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-navy-900 flex items-center justify-center z-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated logo container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border-2 border-accent-600/30"
          />
          
          {/* Inner pulsing container */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative z-10"
          >
            <img 
              src="/webmatrix-logo.png" 
              alt="Web Matrix Insurance" 
              className="h-20 w-auto"
            />
          </motion.div>
        </motion.div>
        
        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-primary-200 text-sm tracking-widest uppercase">
            Loading...
          </p>
        </motion.div>
        
        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-accent-500 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  )
}

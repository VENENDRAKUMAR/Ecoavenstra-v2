import React from 'react'
import ServicesGrid from './Services'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Service_section = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Text */}
      <div className="flex flex-col items-center text-center font-semibold pt-16 pb-16 sm:pb-24 tracking-tight">
        
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl"
        >
          Trusted Engineering.
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent text-3xl sm:text-5xl mt-2"
        >
          Designed for Growth.
        </motion.span>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white/65 text-base sm:text-lg mt-6 max-w-2xl leading-relaxed"
        >
          We take your idea, refine it with precision, and turn it into a powerful digital product
          that drives revenue, trust, and long-term impact.
        </motion.p>

        {/* Explore Link */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mt-8"
        >
          <Link 
            to="/services"
            className="text-lg sm:text-2xl text-blue-400 relative group transition-all duration-300"
          >
            Explore What We Build →
            {/* underline hover effect */}
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </Link>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="px-6 sm:px-12">
        <ServicesGrid/>
      </div>
    </div>
  )
}

export default Service_section

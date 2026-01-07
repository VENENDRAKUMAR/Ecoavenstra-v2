import React from 'react';
import ServicesGrid from './Services';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Service_section = () => {
  // Animation Variants for re-usability
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="bg-black text-white overflow-hidden">
      {/* Hero Text Container */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center font-semibold pt-20 pb-12 sm:pt-32 sm:pb-24 px-4 md:px-6 tracking-tight"
      >
        
        {/* Heading 1 */}
        <motion.h2
          variants={fadeInUp}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
        >
          Trusted Engineering.
        </motion.h2>

        {/* Heading 2 with Gradient */}
        <motion.h2
          variants={fadeInUp}
          className="bg-gradient-to-r from-amber-200 via-rose-400 to-purple-500 bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-1 md:mt-4"
        >
          Designed for Growth.
        </motion.h2>

        {/* Subtext - Better Max Width for Readability */}
        <motion.p
          variants={fadeInUp}
          className="text-white/50 text-base sm:text-lg md:text-xl mt-8 max-w-[90%] md:max-w-3xl leading-relaxed font-normal"
        >
          We take your idea, refine it with precision, and turn it into a powerful 
          digital product that drives revenue, trust, and long-term impact.
        </motion.p>

        {/* Explore Link with Modern Animation */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 md:mt-14"
        >
          <Link 
            to="/services"
            className="group flex items-center gap-2 text-xl sm:text-2xl text-blue-400 font-medium transition-all duration-300"
          >
            <span>Explore What We Build</span>
            <motion.span 
              animate={{ x: [0, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="group-hover:translate-x-2 transition-transform"
            >
              →
            </motion.span>
          </Link>
          {/* Bottom Line Glow */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-2 opacity-30"></div>
        </motion.div>
      </motion.div>

      {/* Services Grid Container */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="px-4 sm:px-8 md:px-16 lg:px-24 pb-20"
      >
        <ServicesGrid/>
      </motion.div>
    </section>
  );
};

export default Service_section;
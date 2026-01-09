import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    subtitle: 'Goals + Direction',
    duration: '0-3 Days',
    description: 'We align on your project vision, business goals, and target audience to ensure the right product strategy.',
  },
  {
    number: '02',
    title: 'Market Research',
    subtitle: 'UX Research',
    duration: '3-7 Days',
    description: 'Deep dive into user behavior and competitors to design a product that outperforms the market.',
  },
  {
    number: '03',
    title: 'UX Architecture',
    subtitle: 'Wireframing',
    highlight: true,
    duration: '7-14 Days',
    description: 'Crafting the user journey and skeleton of the app to avoid expensive design revisions later.',
  },
  {
    number: '04',
    title: 'UI Design System',
    subtitle: 'Visual Branding',
    duration: '14-20 Days',
    description: 'Creating pixel-perfect screens, typography, and interactive prototypes ready for development.',
  },
  {
    number: '05',
    title: 'Development',
    subtitle: 'Implementation',
    duration: '20-30 Days',
    description: 'Converting designs into a functional, high-performance product with secure, clean code.',
  },
  {
    number: '06',
    title: 'Deployment',
    subtitle: 'Support & Launch',
    duration: 'Ongoing',
    description: 'Final launch, performance monitoring, and long-term support for feature additions.',
  },
];

const ProjectTimeline = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Pulse animation for the highlighted card
      gsap.to('.highlight-pulse', {
        boxShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
        borderColor: 'rgba(34, 197, 94, 0.8)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#080808] text-white py-20 px-4 overflow-hidden"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
        >
          The <span className="text-white">Process</span> That Delivers
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light"
        >
          A transparent and predictable workflow designed for high-quality results.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 group
                ${step.highlight 
                  ? 'bg-green-500/5 border-green-500/50 highlight-pulse' 
                  : 'bg-[#111111] border-white/5 hover:border-white/20'
                }`}
            >
              {/* Step Number */}
              <div className={`text-4xl font-black mb-4 ${step.highlight ? 'text-green-500' : 'text-white/10 group-hover:text-white/20'}`}>
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold mb-1">{step.title}</h3>
              <p className="text-green-500 text-xs font-mono mb-4 uppercase tracking-widest">{step.subtitle}</p>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold">Timeline</span>
                <span className="text-xs font-semibold text-gray-300 bg-white/5 px-2 py-1 rounded">
                  {step.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Visual Timeline Chart --- */}
        <div className="mt-24 p-8 bg-[#111111] rounded-3xl border border-white/5 hidden md:block">
          <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-8 border-b border-white/5 pb-4">
            <span>Start</span>
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Launch (Day 30)</span>
          </div>

          <div className="space-y-6">
            {/* Bar 1 */}
            <div className="relative h-8 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '40%' }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="absolute h-full bg-green-900/40 border-r-2 border-green-500 flex items-center px-4"
              >
                <span className="text-[10px] font-bold whitespace-nowrap">STRATEGY & UX</span>
              </motion.div>
            </div>

            {/* Bar 2 */}
            <div className="relative h-8 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '50%' }}
                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                className="absolute left-[30%] h-full bg-green-500 border-r-2 border-white flex items-center px-4"
              >
                <span className="text-[10px] font-bold text-black whitespace-nowrap">UI DESIGN & PROTOTYPING</span>
              </motion.div>
            </div>

            {/* Bar 3 */}
            <div className="relative h-8 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '35%' }}
                transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                className="absolute left-[65%] h-full bg-white border-r-2 border-green-500 flex items-center px-4"
              >
                <span className="text-[10px] font-bold text-black whitespace-nowrap">DEVELOPMENT & QA</span>
              </motion.div>
            </div>
          </div>
          
          <p className="text-center mt-8 text-gray-500 text-xs tracking-widest uppercase">
            Typical 30-Day MVP Workflow
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
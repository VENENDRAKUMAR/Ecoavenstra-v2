import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy Call',
    subtitle: 'Understanding Goals + Brand Direction',
    duration: '0d - 3d',
    description:
      'We understand your project vision, business goals, target audience, and expected outcomes. This phase helps align the long-term strategy and ensures we build the right product.',
  },
  {
    number: '02',
    title: 'Research & Market Analysis',
    subtitle: 'Competitive Analysis + UX Research',
    duration: '3d - 7d',
    description:
      'We study user behavior, competitors, industry standards, and opportunities. This allows us to design a product that stands out and performs better in the market.',
  },
  {
    number: '03',
    title: 'Wireframes & UX Architecture',
    subtitle: 'Low/High Fidelity Wireframes',
    highlight: true,
    duration: '7d - 14d',
    description:
      'We craft the product flow, structure, and overall user journey. This stage forms the skeleton of the final design and helps avoid expensive revisions later.',
  },
  {
    number: '04',
    title: 'UI Design System',
    subtitle: 'Visual Design + Branding Elements',
    duration: '14d - 20d',
    description:
      'We create pixel-perfect UI screens, color system, typography, components, interactions, and prototypes — ready to hand over to development.',
  },
  {
    number: '05',
    title: 'Development',
    subtitle: 'Frontend + Backend Implementation',
    duration: '20d - 30d',
    description:
      'We convert your approved design into a fully functional product with best coding practices, performance optimization, responsiveness, and security.',
  },
  {
    number: '06',
    title: 'Deployment & Long-term Support',
    subtitle: 'Hosting + Monitoring + Feature Add-ons',
    duration: '30d - Ongoing',
    description:
      'We deploy your product, set up analytics, fix bugs, optimize performance, and provide long-term support. Additional features can be added anytime.',
  },
];

const ProjectTimeline = () => {
  const timelineRef = useRef(null);
  const CARD_HEIGHT = 'min-h-48';

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-step', {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
      });

      gsap.to('.timeline-step.highlight', {
        scale: 1.02,
        duration: 2,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        boxShadow: '0 0 25px rgba(52, 211, 153, 0.6)',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={timelineRef}
      className="w-full bg-[#050505] text-white pt-20 pb-16 overflow-hidden min-h-screen"
    >
 <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center px-4 leading-tight">
  The <span className="text-green-500"> Process</span> Behind Every Successful Project
  <span className="block text-white/60 font-light text-xl md:text-2xl mt-2">
    Transparent. Predictable. Designed to deliver high-quality results every time.
  </span>
</h2>



      <div className="max-w-7xl mx-auto px-6">
        {/* 📌 Responsive Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              // drag
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`timeline-step w-full ${CARD_HEIGHT} flex flex-col justify-between p-6 rounded-xl transition-all duration-500 cursor-pointer 
                ${
                  step.highlight
                    ? 'highlight bg-green-500 text-black shadow-2xl mb-4'
                    : 'bg-white text-black border border-white/10 hover:bg-gray-100'
                }
              `}
            >
              <div>
                <p className="text-3xl font-serif mb-2">{step.number}</p>
                <h3 className="text-xl  font-mono">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{step.subtitle}</p>

                {/* Description */}
                <p className="text-sm mt-3 leading-relaxed text-gray-700">
                  {step.description}
                </p>
              </div>

              {/* Duration */}
              <div className="mt-4 text-xs font-semibold text-right text-gray-800">
                ⏳ {step.duration}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ----- TIMELINE CHART (SAME AS YOURS) ----- */}
        <div className="mt-20 text-xs relative">
          <div className="flex justify-between text-gray-400 mb-2 border-b border-white/10 pb-1">
            <span>0d</span>
            <span>5d</span>
            <span>10d</span>
            <span>15d</span>
            <span>20d</span>
            <span>25d</span>
            <span>30d</span>
          </div>

          <div className="space-y-4 pt-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '40%' }}
              transition={{ duration: 1.5 }}
              className="bg-green-700/60 h-6 flex items-center justify-end px-3 rounded-md ml-[10%]"
            >
              <span>Wireframes (Prototype)</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '55%' }}
              transition={{ duration: 1.6 }}
              className="bg-green-500 h-6 flex items-center justify-end px-3 rounded-md ml-[30%]"
            >
              <span className="text-black font-medium">Design & High-Fidelity</span>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '30%' }}
              transition={{ duration: 1.7 }}
              className="bg-green-700/60 h-6 flex items-center justify-start px-3 rounded-md ml-[70%]"
            >
              <span>Development</span>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-400">
        This represents our typical{' '}
        <span className="text-green-400 font-semibold">30-day MVP delivery cycle</span>.
      </div>
    </section>
  );
};

export default ProjectTimeline;

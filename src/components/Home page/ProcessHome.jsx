// ProcessHome.jsx (UPDATED with TALLER, SOLID UI SWIPER CARDS)

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Initial Engagement',
    description: 'Initial contact, understanding your needs, and setting up meetings to explore your vision.'
  },
  {
    number: '02',
    title: 'Planning & Documentation',
    description: 'Requirements gathering, cost estimation, and creating proposals, agreements, and specs.'
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'UI/UX design followed by front-end, back-end, and database development.'
  },
  {
    number: '04',
    title: 'Testing & Integration',
    description: 'Rigorous testing and integration of all components for smooth performance.'
  },
  {
    number: '05',
    title: 'Launch & Post-Launch',
    description: 'Product launch, training, and ongoing support for long-term success.'
  }
];

const ProcessHome = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className=" text-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        
        {/* 🎴 Left Side - Draggable Cards (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 relative h-[400px] flex items-center justify-center min-h-[400px]" // Added min-h
        >
          {['Our process', 'Simple, seamless', 'Streamlined.'].map((text, i) => (
            <motion.div
              key={i}
              drag
              dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
              whileTap={{ scale: 1.05 }}
              className={`absolute w-80 h-96 flex items-center justify-center text-3xl font-bold text-black rounded-xl shadow-xl px-6 py-4 cursor-grab ${
                i === 0 ? 'bg-gradient-to-r from-blue-300 to-blue-100' :
                i === 1 ? 'bg-gradient-to-r from-green-300 to-green-100' :
                'bg-gradient-to-r from-cyan-300 to-cyan-100'
              }`}
              style={{
                transform: `rotate(${i === 0 ? '-6deg' : i === 1 ? '0deg' : '6deg'}) translateY(${i * 30}px)`,
                zIndex: 10 - i
              }}
              data-aos="fade-right"
            >
              {text}
            </motion.div>
          ))}
        </motion.div>

        {/* 📲 Right Side - Swiper Slider (UPDATED UI) */}
        <div className="md:w-1/2 flex items-center"> {/* Center the swiper vertically */}
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false, // Shadows handled by custom class
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full max-w-md swiper-container-process"
            // Custom CSS needed for proper height
            style={{ 
              height: '450px', // Increased overall height
              paddingBottom: '50px' // Space for pagination dots
            }}
          >
            {steps.map((step, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide-process"
                // Taller height for the slide
                style={{ 
                    height: '350px', // Solid card height
                    width: '320px', // Auto width adjusted for better coverflow look
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotate: 0 }} // Reduced hover scale/rotate
                  transition={{ type: 'spring', stiffness: 300 }}
                  // SOLID, PREMIUM CARD STYLE
                  className="w-full h-full bg-black border border-blue-600/50 rounded-2xl p-8 shadow-2xl transition-all duration-300 
                             hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {/* Step Number Badge */}
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">
                      {step.number}
                    </div>
                    <div className="text-sm font-light text-blue-400">STEP</div>
                  </div>

                  <h4 className="text-white font-extrabold text-2xl mb-3 border-b border-white/10 pb-2">{step.title}</h4>
                  
                  <p className="text-gray-300 text-base leading-relaxed mt-4">
                    {step.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      {/* ⚠️ NOTE: For perfect height matching, you may need to add custom CSS to your global stylesheet.
      
      .swiper-container-process .swiper-pagination-bullet-active {
          background: #3b82f6 !important; // Blue-600
      }
      
      */}
    </section>
  );
};

export default ProcessHome;
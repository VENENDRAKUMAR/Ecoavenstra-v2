import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const steps = [
  { number: '01', title: 'Initial Engagement', description: 'Initial contact, understanding your needs, and setting up meetings to explore your vision.' },
  { number: '02', title: 'Planning & Documentation', description: 'Requirements gathering, cost estimation, and creating proposals, agreements, and specs.' },
  { number: '03', title: 'Design & Development', description: 'UI/UX design followed by front-end, back-end, and database development.' },
  { number: '04', title: 'Testing & Integration', description: 'Rigorous testing and integration of all components for smooth performance.' },
  { number: '05', title: 'Launch & Post-Launch', description: 'Product launch, training, and ongoing support for long-term success.' }
];

const ProcessHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-10 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* 🎴 Left Side - Draggable Cards (Optimized for Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 relative h-[350px] md:h-[450px] flex items-center justify-center"
        >
          {['Our process', 'Simple, seamless', 'Streamlined.'].map((text, i) => (
            <motion.div
              key={i}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              whileTap={{ scale: 0.95 }}
              className={`absolute w-[260px] h-[320px] md:w-80 md:h-96 flex flex-col items-center justify-center text-center text-2xl md:text-3xl font-black text-black rounded-3xl shadow-2xl px-8 cursor-grab select-none ${
                i === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-200' :
                i === 1 ? 'bg-gradient-to-br from-emerald-400 to-emerald-200' :
                'bg-gradient-to-br from-cyan-400 to-cyan-200'
              }`}
              style={{
                rotate: i === 0 ? -8 : i === 1 ? 0 : 8,
                y: i * 20,
                zIndex: 10 - i,
              }}
            >
              <span className="opacity-20 text-6xl absolute top-4 left-6">“</span>
              {text}
            </motion.div>
          ))}
        </motion.div>

        {/* 📲 Right Side - Swiper Slider (Mobile Pro) */}
        <div className="w-full lg:w-1/2" data-aos="zoom-in-left">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 15,
              stretch: 0,
              depth: 150,
              modifier: 1.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full pb-14"
          >
            {steps.map((step, index) => (
              <SwiperSlide
                key={index}
                className="!w-[290px] md:!w-[350px]" // Responsive Width
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 h-[400px] flex flex-col justify-between shadow-2xl group hover:border-blue-500/50 transition-all duration-500"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                        {step.number}
                      </div>
                      <div className="text-[10px] tracking-[0.2em] font-bold text-blue-400 uppercase bg-blue-400/10 px-3 py-1 rounded-full">
                        Phase
                      </div>
                    </div>

                    <h4 className="text-white font-bold text-2xl mb-4 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500" 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Pagination CSS */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          opacity: 1 !important;
          width: 12px !important;
          height: 6px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 30px !important;
        }
        .swiper-slide {
          filter: blur(1px) grayscale(0.5);
          transition: all 0.5s ease;
        }
        .swiper-slide-active {
          filter: blur(0) grayscale(0);
        }
      `}</style>
    </section>
  );
};

export default ProcessHome;
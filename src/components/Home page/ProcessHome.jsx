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
  { number: '01', title: 'Initial Engagement', description: 'Understanding your needs, and setting up meetings to explore your vision.' },
  { number: '02', title: 'Planning', description: 'Requirements gathering, cost estimation, and creating scalable proposals.' },
  { number: '03', title: 'Development', description: 'UI/UX design followed by high-performance front-end and back-end engineering.' },
  { number: '04', title: 'Integration', description: 'Rigorous testing and integration of all components for smooth performance.' },
  { number: '05', title: 'Launch', description: 'Product launch, training, and ongoing support for long-term success.' }
];

const ProcessHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-[#030303] text-white py-32 px-4 md:px-10 overflow-hidden relative">
      
      {/* --- PRO BACKGROUND AMBIENCE --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
        
        {/* 🎴 Left Side - Floating Interactive Stack */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-10 text-center lg:text-left"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
              Our <br /> <span className="text-blue-500">Method</span>
            </h2>
            <p className="text-white/40 font-mono text-xs uppercase tracking-[0.4em]">Drag the cards to explore</p>
          </motion.div>

          <div className="relative h-[400px] w-full max-w-[320px] md:max-w-[400px]">
            {['Strategic.', 'Seamless.', 'Ecoavenstra.'].map((text, i) => (
              <motion.div
                key={i}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                whileDrag={{ scale: 1.05, zIndex: 50 }}
                className={`absolute inset-0 flex items-center justify-center text-center p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-2xl cursor-grab active:cursor-grabbing shadow-2xl transition-colors duration-500
                ${i === 0 ? 'bg-white text-black' : i === 1 ? 'bg-zinc-900 border-blue-500/30' : 'bg-blue-600 text-white border-none'}`}
                style={{
                  rotate: i === 0 ? -6 : i === 1 ? 0 : 6,
                  y: i * 15,
                  x: i * 5,
                  zIndex: 10 - i,
                }}
              >
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{text}</h3>
                <div className="absolute bottom-8 right-8 opacity-20 text-4xl font-serif">“</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 📲 Right Side - Swiper Pro Slider */}
        <div className="w-full lg:w-1/2" data-aos="fade-up">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full !pb-20"
          >
            {steps.map((step, index) => (
              <SwiperSlide key={index} className="!w-[300px] md:!w-[380px]">
                <motion.div
                  className="group relative h-[450px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:bg-white/[0.08]"
                >
                  {/* Subtle Number Background */}
                  <span className="absolute -top-10 -right-10 text-[12rem] font-black text-white/[0.02] pointer-events-none group-hover:text-blue-500/5 transition-colors">
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-600/20">
                        {step.number}
                      </div>
                      <div className="h-[1px] flex-1 bg-white/10" />
                    </div>

                    <h4 className="text-3xl font-bold mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                      {step.description}
                    </p>
                  </div>

                  {/* Progress Line */}
                  <div className="relative z-10 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-400" 
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

      {/* Modern Pagination CSS */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.1) !important;
          opacity: 1 !important;
          width: 8px !important;
          height: 8px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        }
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          width: 40px !important;
          border-radius: 4px !important;
        }
        .swiper-slide {
          opacity: 0.3;
          transform: scale(0.85) !important;
          transition: all 0.6s ease;
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1) !important;
        }
      `}</style>
    </section>
  );
};

export default ProcessHome;
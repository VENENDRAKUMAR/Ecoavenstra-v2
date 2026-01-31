import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { number: '01', title: 'Initial Engagement', description: 'Understanding your needs, and setting up meetings to explore your vision.' },
  { number: '02', title: 'Planning', description: 'Requirements gathering, cost estimation, and creating scalable proposals.' },
  { number: '03', title: 'Development', description: 'UI/UX design followed by high-performance front-end and back-end engineering.' },
  { number: '04', title: 'Integration', description: 'Rigorous testing and integration of all components for smooth performance.' },
  { number: '05', title: 'Launch', description: 'Product launch, training, and ongoing support for long-term success.' }
];

const cards = [
  { text: 'Strategic.', color: 'bg-white text-black' },
  { text: 'Seamless.', color: 'bg-zinc-900 text-white border-blue-500/20' },
  { text: 'Trustfull', color: 'bg-blue-600 text-white border-none' }
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardOrder, setCardOrder] = useState([0, 1, 2]);

  // Logic for Auto-Slider (Right Side)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Logic for Auto-Flip Mobile (Left Side Cards)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      const interval = setInterval(() => {
        setCardOrder((prev) => {
          const newOrder = [...prev];
          const first = newOrder.shift();
          newOrder.push(first);
          return newOrder;
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="bg-[#000000] text-white py-16 md:py-32 px-4 md:px-10 overflow-hidden relative min-h-screen flex items-center justify-center">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10 w-full">
        
        {/* 🎴 Left Side - Draggable & Auto-Flip Cards */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="mb-12 text-center lg:text-left"
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-4">
              OUR <br /> <span className="text-blue-500 text-glow">CORE</span>
            </h2>
            <p className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase">
              Drag to interact • Auto-flips on mobile
            </p>
          </motion.div>

          {/* Cards Stack Container */}
          <div className="relative h-[350px] md:h-[450px] w-full max-w-[300px] md:max-w-[400px]">
            {cards.map((card, i) => {
              const orderIndex = cardOrder.indexOf(i);
              return (
                <motion.div
                  key={i}
                  drag
                  dragSnapToOrigin={true} // Drag ke baad wapas apni jagah aa jayega
                  dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                  whileDrag={{ scale: 1.1, zIndex: 100, rotate: 720 }}
                  layout // Smooth reordering on mobile auto-flip
                  animate={{
                    y: [orderIndex * 12, orderIndex * 12 - 15, orderIndex * 12],
                    x: orderIndex * 8,
                    scale: 1 - orderIndex * 0.05,
                    zIndex: 10 - orderIndex,
                    rotate: orderIndex === 0 ? -4 : orderIndex === 1 ? 0 : 4,
                    opacity: 1 - orderIndex * 0.2
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                    layout: { type: "spring", stiffness: 300, damping: 30 }
                  }}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center p-10 rounded-[3rem] border border-white/10 backdrop-blur-2xl cursor-grab active:cursor-grabbing shadow-2xl transition-shadow duration-500 hover:shadow-blue-500/20 ${card.color}`}
                >
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter select-none">
                    {card.text}
                  </h3>
                  <div className="mt-4 w-12 h-1 bg-current opacity-20 rounded-full" />
                  <div className="absolute bottom-10 right-10 opacity-5 text-7xl md:text-9xl font-serif">“</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 📲 Right Side - Modern Auto-Changing Process Slider */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-[340px] md:max-w-[500px] h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -40, rotateX: 15 }}
                transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                className="absolute inset-0 bg-zinc-900/50 border border-white/5 rounded-[3.5rem] p-12 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-8">
                    <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center group-hover:border-blue-500/20 transition-colors">
                        <span className="text-4xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors">
                            {steps[activeIndex].number}
                        </span>
                    </div>
                </div>

                <div className="relative z-10">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "60px" }}
                    className="h-1 bg-blue-300 mb-8 rounded-full" 
                  />
                  <h4 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    {steps[activeIndex].title}
                  </h4>
                  <p className="text-white/40 text-lg md:text-xl leading-relaxed font-light">
                    {steps[activeIndex].description}
                  </p>
                </div>

                {/* Progress Bar Container */}
                <div className="relative z-10">
                    <div className="flex justify-between items-end mb-4">
                        <span className="text-xs font-mono text-white/20 tracking-widest uppercase">Phase Progress</span>
                        <span className="text-xs font-mono text-blue-300">{(activeIndex + 1) * 20}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                            key={`bar-${activeIndex}`}
                            className="h-full bg-blue-300" 
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 4, ease: "linear" }}
                        />
                    </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex gap-4 mt-12">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-700 ${
                  activeIndex === i ? 'w-12 bg-blue-300' : 'w-3 bg-white/10 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
        }
        section {
            perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default App;
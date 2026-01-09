"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    text: "ecoavenstra has been instrumental in helping us scale our business operations. their technical depth and cinematic approach to ui is unmatched.",
    name: "ravi kumar",
    work: "owner, rk constructions",
  },
  {
    text: "working with ecoavenstra was a refreshing experience. they transformed our complex vision into a seamless, high-performance digital tool.",
    name: "amanda johnson",
    work: "project manager, greentech",
  },
  {
    text: "the team truly helped me bring my vision to life. the emotionally resonant design they built is beyond what i imagined.",
    name: "ankit mehta",
    work: "entrepreneur, ankit fashions",
  },
  {
    text: "exceptional service and delivered a solution that actually works for our enterprise scale. highly professional team.",
    name: "sophie martin",
    work: "ceo, blue horizon ventures",
  },
  {
    text: "ecoavenstra’s team is highly skilled. they build trust through tailored tech and cinematic ui that speaks for itself.",
    name: "rajesh sharma",
    work: "cto, tech innovators pvt ltd",
  },
];

const Recommendation = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-40 bg-[#030303] overflow-hidden">
      
      {/* --- CINEMATIC AMBIENCE --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* LEFT SIDE: BRAND AUTHORITY */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block underline underline-offset-8 decoration-blue-500/20">
       What People Say
              </span>
              <h3 className="text-5xl md:text-7xl font-extralight text-white leading-tight lowercase tracking-tighter">
                trust we <span className="text-white/20 italic font-light">earn.</span>
              </h3>
            </div>
            
            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light lowercase max-w-md">
              we serve <span className="text-white font-medium">95% businesses</span> across india with <span className="text-blue-500 font-medium font-mono text-sm tracking-normal">98% satisfaction</span>. at ecoavenstra, we build trust through tailored tech, cinematic ui, and emotionally resonant design.
            </p>

            {/* Stats Badge */}
            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-2xl font-light text-white">98%</p>
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">success rate</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div className="space-y-1">
                <p className="text-2xl font-light text-white">100+</p>
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">brands served</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CINEMATIC TESTIMONIAL DISPLAY */}
          <div className="relative group">
            {/* Background Glass Plate */}
            <div className="absolute inset-0 bg-white/[0.02] border border-white/5 backdrop-blur-3xl rounded-[3rem] -rotate-2 scale-105 transition-transform group-hover:rotate-0 duration-700" />
            
            <div className="relative bg-[#080808]/40 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden min-h-[450px] flex flex-col justify-center">
              
              {/* Top Decor */}
              <div className="absolute top-10 right-12 text-white/5">
                <Quote size={80} strokeWidth={1} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-blue-600 text-blue-600" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed lowercase tracking-tight mb-10 italic">
                    "{testimonials[current].text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-500">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white lowercase">{testimonials[current].name}</h4>
                      <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{testimonials[current].work}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bars (Nav) */}
              <div className="flex gap-3 mt-12">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="flex-1 h-[2px] bg-white/5 relative overflow-hidden"
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-blue-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                      animate={i === current ? { x: ["-100%", "0%"] } : { x: "-100%" }}
                      transition={i === current ? { duration: 6, ease: "linear" } : {}}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
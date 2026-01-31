import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, MousePointer2, Zap, Shield } from "lucide-react";
import OfferStrip from "../OfferStrip.jsx";

const services = [
  "UI / UX Design", "Web Development", "SaaS Development",
  "Web Solutions", "Digital Strategy", "Brand Identity"
];

const PremiumLanding = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax values
  const yHero = useTransform(smoothProgress, [0, 0.2], [0, -100]);
  const opacityHero = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const scaleHero = useTransform(smoothProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#030303] text-white selection:bg-blue-500 selection:text-white">
      
      {/* 1. TOP SPACE & OFFER STRIP (Fixed Position Fix) */}
      <div className="relative pt-[72px] z-[110]"> 
        <OfferStrip />
      </div>

``

      {/* --- CINEMATIC GRAIN & NOISE OVERLAY --- */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- DYNAMIC AMBIENT GLOWS --- */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 blur-[180px] rounded-full" 
        />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section 
        style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
        className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 text-center z-10"
      >
        {/* Status Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-300">Available for Projects</span>
        </motion.div>

        {/* Massive Hero Title */}
        <div className="relative">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center font-black uppercase leading-[0.8] tracking-tighter p-4"
          >
            <span className="text-[8vw] md:text-[6vw] text-white/90">DESIGN</span>
            <span className="text-[16vw] md:text-[12vw] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 py-2">DEVELOP</span>
            <span className="text-[8vw] md:text-[6vw] text-white/90">DEPLOY</span>
          </motion.h1>
          <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-10 -right-10 hidden md:block text-blue-500/50">
            <MousePointer2 size={60} strokeWidth={1} />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-16 flex flex-wrap items-center justify-center gap-8">
          <a href="/contact-us" className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] overflow-hidden transition-all duration-500">
            <span className="relative z-10 flex items-center gap-2">Start Project <ArrowUpRight size={14}/></span>
            <div className="absolute inset-0 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
          </a>
          <a href="/services" className="px-12 py-6 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] backdrop-blur-md hover:bg-white/5 transition-all">
            Explore Work
          </a>
        </motion.div>

        {/* Kinetic Marquee */}
        <div className="absolute bottom-10 w-full overflow-hidden pointer-events-none py-10">
          <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex gap-24 text-[11px] uppercase tracking-[0.8em] font-bold text-white/20 whitespace-nowrap italic">
            {services.concat(services).map((s, i) => (
              <span key={i} className="flex items-center gap-10 ">{s} <div className="w-2 h-2 rounded-full bg-blue-600" /></span>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* --- SERVICES BENTO GRID --- */}
      <section className="relative z-10 px-6 py-20 md:py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Card 1: UI/UX (Small Card) */}
          <motion.div whileHover={{ y: -10 }} className="md:col-span-4 min-h-[400px] md:h-[600px] bg-green-300 text-black rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col justify-between group overflow-hidden shadow-2xl transition-all duration-500">
            <div className="flex justify-between items-start">
              <span className="text-[9px] font-black tracking-[0.4em] text-black/40 uppercase italic">Visual languages</span>
              <Zap size={28} className="fill-black group-hover:scale-125 transition-transform duration-700" />
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter mb-6 italic">UI/UX <br /> Design</h3>
              <div className="flex items-center gap-4 group/btn">
                <div className="h-[2px] w-8 bg-black group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Engineering (Large Card) */}
          <motion.div whileHover={{ y: -10 }} className="md:col-span-8 min-h-[450px] md:h-[600px] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 flex flex-col justify-between group overflow-hidden bg-white/[0.02] border border-white/10 backdrop-blur-3xl transition-all duration-500">
            <div className="flex justify-between items-start relative z-10">
              <span className="text-[9px] font-bold tracking-[0.5em] text-blue-400 uppercase italic">High Impact</span>
              <div className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-700">
                <ArrowUpRight size={20} />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-5xl md:text-8xl tracking-tighter leading-[0.85] mb-8">Full Stack <br /> <span className="text-white/20 font-thin">Engineering</span></h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'React.js', 'MongoDB'].map(tag => (
                  <span key={tag} className="text-[8px] uppercase tracking-widest px-4 py-1.5 border border-white/5 rounded-full bg-white/5 text-gray-500">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div> 

          {/* Card 3: SaaS (Full Width Card) */}
          <motion.div className="md:col-span-12 p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-[#2148AA] border border-white/5 flex flex-col md:flex-row justify-between items-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-500/20 opacity-50" />
            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase flex items-center gap-2"><Shield size={14} /> 03 / Efficiency</span>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter mt-4 uppercase">SaaS <br className="hidden md:block" /> Solutions</h3>
            </div>
            <motion.div whileHover={{ rotate: 3, scale: 1.05 }} className="relative z-10 p-1 bg-white/5 rounded-[2rem] border border-white/10">
              <button className="px-12 py-8 bg-white text-black rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:bg-lime-100 transition-all">Build Yours</button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PremiumLanding;
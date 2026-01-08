import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, MousePointer2, Zap, Globe, Shield } from "lucide-react";

const services = [
  "UI / UX Design",
  "Web Development",
  "SaaS Development",
  "Web Solutions",
  "Digital Strategy",
  "Brand Identity"
];

const PremiumLanding = () => {
  const containerRef = useRef(null);
  
  // Smooth Scroll & Parallax logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const yHero = useTransform(smoothProgress, [0, 0.2], [0, -150]);
  const opacityHero = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const scaleHero = useTransform(smoothProgress, [0, 0.2], [1, 0.9]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-[#030303] text-white selection:bg-blue-500 selection:text-white">
      
      {/* --- CINEMATIC GRAIN & NOISE OVERLAY --- */}
      <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* --- DYNAMIC AMBIENT GLOWS --- */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 blur-[180px] rounded-full" 
        />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>

      {/* --- HERO SECTION --- */}
      <motion.section 
        style={{ y: yHero, opacity: opacityHero, scale: scaleHero }}
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center z-10"
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
            className="text-[16vw] md:text-[13vw] font-black uppercase leading-[0.8] tracking-tighter"
          >
            DESIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
              DRIVEN
            </span>
          </motion.h1>
          
          {/* Floating Icon Decor */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 hidden md:block text-blue-500/50"
          >
            <MousePointer2 size={60} strokeWidth={1} />
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <button className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] overflow-hidden transition-all duration-500">
            <span className="relative z-10 flex items-center gap-2">Start Project <ArrowUpRight size={14}/></span>
            <div className="absolute inset-0 bg-blue-600 scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-500" />
          </button>
          
          <button className="px-12 py-6 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] backdrop-blur-md hover:bg-white/5 transition-all">
            Explore Work
          </button>
        </motion.div>

        {/* Kinetic Marquee */}
        <div className="absolute bottom-20 w-full overflow-hidden pointer-events-none py-10">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 text-[11px] uppercase tracking-[0.8em] font-bold text-white/20 whitespace-nowrap italic"
          >
            {services.concat(services).map((s, i) => (
              <span key={i} className="flex items-center gap-10">
                {s} <div className="w-2 h-2 rounded-full bg-blue-600" />
              </span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* --- SERVICES BENTO GRID --- */}
      <section className="relative z-10 px-6 py-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: UI/UX (Glassmorphism Dark) */}
          <motion.div 
            whileHover={{ y: -15, scale: 1.01 }}
            className="md:col-span-8 h-[600px] rounded-[4rem] p-16 flex flex-col justify-between group overflow-hidden bg-white/[0.02] border border-white/10 backdrop-blur-3xl transition-all duration-500"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-[0.6em] text-blue-400 uppercase italic underline underline-offset-8 decoration-blue-500/30">01 / Concept</span>
                <p className="text-white/30 text-xs font-mono tracking-tighter">Articulating visual languages</p>
              </div>
              <div className="w-16 h-16 rounded-3xl border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-700">
                <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                UI / UX <br /> <span className="text-white/20 italic">Design</span>
              </h3>
              <div className="flex gap-4">
                {['Figma', 'Prototyping', 'User Flow'].map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest px-4 py-1.5 border border-white/5 rounded-full bg-white/5 text-gray-500">{tag}</span>
                ))}
              </div>
            </div>
            
            {/* Animated Grid Background for Card */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
          </motion.div>

          {/* Card 2: Web Dev (Clean Modern White) */}
          <motion.div 
            whileHover={{ y: -15 }}
            className="md:col-span-4 h-[600px] bg-white text-black rounded-[4rem] p-16 flex flex-col justify-between group overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,255,255,0.1)] transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black tracking-[0.5em] text-black/40 uppercase italic">02 / Build</span>
              <Zap size={32} className="fill-black group-hover:scale-125 transition-transform duration-700" />
            </div>
            <div>
              <h3 className="text-5xl font-black uppercase leading-[0.9] tracking-tighter mb-8 italic">Full Stack <br /> Engineering</h3>
              <div className="flex items-center gap-4 group/btn">
                <div className="h-[2px] w-12 bg-black group-hover:w-full transition-all duration-700" />
                <span className="whitespace-nowrap text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">Scalable Code</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: SaaS (Wide Gradient Card) */}
          <motion.div 
            className="md:col-span-12 p-20 rounded-[4rem] bg-[#0a0a0a] border border-white/5 flex flex-col md:flex-row justify-between items-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-emerald-500/10 opacity-50" />
            
            <div className="relative z-10 text-center md:text-left">
              <span className="text-[10px] font-bold tracking-[0.5em] text-emerald-400 uppercase flex items-center gap-2 justify-center md:justify-start">
                <Shield size={14} /> 03 / Efficiency
              </span>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mt-4 leading-none">
                SaaS <br className="md:hidden" /> Solutions
              </h3>
            </div>
            
            <motion.div 
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="mt-12 md:mt-0 relative z-10 p-1 bg-white/5 rounded-[2.5rem] border border-white/10"
            >
              <button className="px-12 py-8 bg-white text-black rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:bg-emerald-500 transition-all active:scale-95">
                Build Yours
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PremiumLanding;
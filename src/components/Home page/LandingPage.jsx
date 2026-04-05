import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight, Zap, Menu } from "lucide-react";
import OfferStrip from "../OfferStrip"

const PremiumLanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yHero = useTransform(smoothProgress, [0, 0.2], [0, -100]);
  const opacityHero = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#030303] text-white selection:bg-blue-600">
      
      {/* --- HEADER WRAPPER (Fixed Both Strip & Nav) --- */}
      <header className="fixed top-0  left-0 w-full z-[1000] flex flex-col">
        <OfferStrip />
        
        {/* <nav className="w-full h-16 md:h-20 bg-black/80 backdrop-blur-xl border-b border-white/5 flex items-center px-6 md:px-12 justify-between">
          <div className="flex flex-col">
            <span className="font-black text-lg md:text-xl tracking-tighter leading-none">ECOAVENSTRA</span>
            <span className="text-[7px] font-bold text-gray-500 tracking-[0.2em] uppercase">Learn • Work • Earn</span>
          </div>

          <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-6 py-2 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Login</button>
            <Menu className="md:hidden text-white" size={24} />
          </div>
        </nav> */}
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="relative pt-[120px] md:pt-[160px]">
        {/* Grain Noise Overlay */}
        <div className="fixed inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* HERO SECTION */}
        <motion.section 
          style={{ y: yHero, opacity: opacityHero }}
          className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 text-center z-10"
        >
          <div className="mb-8 flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-400">Available for Projects</span>
          </div>

          <h1 className="font-black uppercase leading-[0.8] tracking-tighter">
            <span className="block text-[12vw] md:text-[8vw] text-white/90">DESIGN</span>
            <span className="block text-[18vw] md:text-[14vw] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 py-2">DEVELOP</span>
            <span className="block text-[12vw] md:text-[8vw] text-white/90">DEPLOY</span>
          </h1>

          <div className="mt-12 flex gap-4">
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all">
              Start Project <ArrowUpRight size={14}/>
            </button>
          </div>
        </motion.section>

        {/* BENTO GRID */}
        <section className="relative z-10 px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div whileHover={{ y: -10 }} className="md:col-span-4 min-h-[350px] bg-emerald-400 text-black rounded-[3rem] p-10 flex flex-col justify-between">
            <Zap size={30} className="fill-black" />
            <h3 className="text-4xl font-black italic leading-none">Visual <br /> Design</h3>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="md:col-span-8 min-h-[350px] bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase">Engineering</span>
              <ArrowUpRight size={24} />
            </div>
            <h3 className="text-5xl md:text-7xl tracking-tighter font-medium leading-none">Full Stack <br /> <span className="text-white/20 italic">Systems</span></h3>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default PremiumLanding;
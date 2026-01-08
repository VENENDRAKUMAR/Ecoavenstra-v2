import React, { useEffect, useRef, useState } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";``
import "swiper/css";
import "swiper/css/pagination";
import { RiLightbulbFlashLine, RiBrushLine, RiHammerLine, RiTwitterFill, RiLinkedinFill } from "react-icons/ri";

// Components & Images (Keeping your imports)
import bgimage from "/images/why-us.jpg";
import team1 from "/images/team1f.png";
import team2 from "/images/team2g.png";
import team3 from "/images/team1.png";
import WhyChooseUs from "./Home page/WhyChooseUs";
import Service_section from "./Home page/Service_section";
import EnquiryForm from "./Home page/EnquiryForm";

const AnimatedCounter = ({ from = 0, to = 0, suffix = "" }) => {
  const [value, setValue] = useState(from);
  useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      ease: "circOut",
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [from, to]);
  return <span>{to >= 1000 ? `${Math.round(value / 1000)}k` : Math.round(value)}{suffix}</span>;
};

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const dragRef = useRef(null);

  return (
    <div className="min-h-screen bg-[#030303] text-white selection:bg-cyan-500">
      
      {/* --- HERO SECTION: CINEMATIC --- */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={bgimage} className="w-full h-full object-cover opacity-20 grayscale" alt="hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <span className="text-cyan-400 font-mono text-xs tracking-[0.5em] uppercase mb-6 block">Est. 2020 / Studio</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              CRAFTING <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 italic">DIGITAL PRIDE.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed mb-10">
              We translate complex financial goals into elegant, high-conversion products. Engineering aligned with cinematic motion.
            </p>
            <div className="flex gap-6">
              <button className="bg-white text-black px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-cyan-500 hover:text-white transition-all">Start Project</button>
              <div className="flex -space-x-4">
                {[team1, team2, team3].map((img, i) => (
                  <img key={i} src={img} className="w-12 h-12 rounded-full border-2 border-black object-cover" />
                ))}
                <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[10px] font-bold">+12</div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Cards Stack */}
          <div ref={dragRef} className="relative h-[500px] hidden lg:block">
            <motion.div drag dragConstraints={dragRef} whileDrag={{ scale: 1.05 }} className="absolute top-0 left-0 w-72 p-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] shadow-2xl z-30 cursor-grab active:cursor-grabbing">
               <RiLightbulbFlashLine size={40} className="mb-6" />
               <h3 className="text-2xl font-bold mb-2">Think</h3>
               <p className="text-sm opacity-80">Product strategy & deep discovery.</p>
            </motion.div>
            <motion.div drag dragConstraints={dragRef} className="absolute top-20 left-40 w-72 p-8 bg-[#111] border border-white/10 rounded-[2.5rem] shadow-2xl z-20 cursor-grab active:cursor-grabbing">
               <RiBrushLine size={40} className="text-purple-500 mb-6" />
               <h3 className="text-2xl font-bold mb-2">Design</h3>
               <p className="text-sm opacity-60">Cinematic UI & scalable systems.</p>
            </motion.div>
            <motion.div drag dragConstraints={dragRef} className="absolute top-48 left-10 w-72 p-8 bg-white text-black rounded-[2.5rem] shadow-2xl z-10 cursor-grab active:cursor-grabbing">
               <RiHammerLine size={40} className="mb-6" />
               <h3 className="text-2xl font-bold mb-2">Build</h3>
               <p className="text-sm opacity-70">Battle-tested engineering pipelines.</p>
            </motion.div>
          </div>
        </div>
      </header>

      {/* --- METRICS BENTO GRID --- */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 p-10 rounded-[2rem] text-center hover:bg-zinc-900 transition-colors group">
              <p className="text-4xl md:text-6xl font-black tracking-tighter group-hover:text-cyan-400 transition-colors">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mt-4">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TEAM SECTION: ELITE LOOK --- */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <span className="text-cyan-500 font-mono text-xs tracking-widest uppercase underline underline-offset-8">Our Board</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-6">THE ARCHITECTS.</h2>
            </div>
            <p className="text-white/40 max-w-xs text-right hidden md:block uppercase text-[10px] tracking-widest leading-loose">
              Blending design intuition with technical precision to build the future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: team2, name: "Neelu B.", role: "CEO & DIRECTOR", color: "from-cyan-500" },
              { img: team1, name: "Venendra Kumar", role: "TECH LEAD ENGINEER", color: "from-blue-600" },
              { img: team2, name: "Khusbhu Parihar", role: "DIRECTOR", color: "from-purple-600" },
              { img: team3, name: "Rahul Barve", role: "FULL STACK DEV", color: "from-emerald-500" },
              
            ].map((m, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="relative group">
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5 relative">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Social Hover Overlay */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors"><RiTwitterFill /></div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-colors"><RiLinkedinFill /></div>
                  </div>

                  <div className="absolute bottom-8 left-8">
                    <h4 className="text-xl font-bold tracking-tighter">{m.name}</h4>
                    <p className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase mt-1">{m.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION: MODERN BENTO --- */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gradient-to-br from-zinc-900 to-black p-12 rounded-[3rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all" />
            <h3 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">The Mission</h3>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              To help businesses craft digital products that are delightful, performant, and measurable. We don't just ship code; we ship <span className="text-white font-bold">outcomes</span>.
            </p>
            <div className="mt-12 flex gap-4">
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Scalability</div>
              <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest">Precision</div>
            </div>
          </div>

          <div className="bg-cyan-600 p-12 rounded-[3rem] flex flex-col justify-between group cursor-pointer overflow-hidden relative">
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Vision</h3>
              <p className="text-white/80 group-hover:text-gray-400 transition-colors">To be the global studio trusted to ship high-impact digital experiences that earn pride.</p>
            </div>
            <div className="relative z-10 w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
              <BsArrowRight className="text-2xl group-hover:rotate-[-45deg] transition-transform" />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Service_section />

      <section className="py-32">
        <EnquiryForm />
      </section>
    </div>
  );
};

// Internal Data (Keeping yours)
const stats = [
  { value: 4, suffix: "+", label: "Years In Business" },
  { value: 850000, suffix: "", label: "Users Impacted" },
  { value: 5, suffix: "/5", label: "Avg Rating" },
  { value: 10.85, suffix: "%", label: "Conversion Lift" },
];

export default About;
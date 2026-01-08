import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Cpu, Layout, Globe, Zap, ArrowRight, Layers, ShieldCheck } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

// --- UPDATED SERVICES DATA WITH ICONS ---
export const services = [
  {
    id: 1,
    title: "UI / UX Design",
    icon: <Layout size={24} />,
    shortDescription: "Crafting beautiful, human-centered, and conversion-driven digital experiences.",
    whyImportant: ["Strong UI builds trust and brand value.", "Good UX increases user retention.", "Simplifies complex product flows."],
    whatIncluded: ["User research & analysis", "Interactive prototypes", "Design systems", "Responsive UI kits"],
    techStack: ["Figma", "Adobe XD", "Framer"],
    pricing: "Starting at $149",
    accent: "#8B5CF6"
  },
  {
    id: 2,
    title: "Web Development",
    icon: <Globe size={24} />,
    shortDescription: "High-performance websites built with modern frameworks & clean code.",
    whyImportant: ["Fast websites rank higher on Google.", "Modern tech ensures security.", "Mobile-first approach."],
    whatIncluded: ["Next.js Integration", "SEO Architecture", "GSAP Animations", "Core Web Vitals Fix"],
    techStack: ["React.js", "Tailwind", "GSAP", "Next.js"],
    pricing: "Starting at $199",
    accent: "#06B6D4"
  },
  {
    id: 3,
    title: "SaaS Products",
    icon: <Cpu size={24} />,
    shortDescription: "Scalable, cloud-powered SaaS products with modern architecture.",
    whyImportant: ["Recurring revenue models.", "Automated user workflows.", "Global cloud scalability."],
    whatIncluded: ["Multi-tenant Auth", "Stripe Billing", "Real-time Analytics", "API Mesh"],
    techStack: ["Node.js", "Postgres", "Supabase", "Redis"],
    pricing: "Starting at $699",
    accent: "#F43F5E"
  },
  {
    id: 4,
    title: "Cloud Solutions",
    icon: <ShieldCheck size={24} />,
    shortDescription: "Enterprise-grade cloud infrastructure and workflow automation.",
    whyImportant: ["100% data security.", "Zero downtime deployments.", "Automated scaling."],
    whatIncluded: ["AWS/Azure Setup", "Dockerization", "CI/CD Pipelines", "Database Tuning"],
    techStack: ["AWS", "Docker", "Terraform", "Kubernetes"],
    pricing: "Starting at $499",
    accent: "#10B981"
  }
];

const ServicesShowcase = () => {
  const [active, setActive] = useState(services[0]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const displayServices = useMemo(() => [...services, ...services, ...services], []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-[#030303] text-white py-24 overflow-hidden selection:bg-purple-500">
      
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 md:px-20 mb-20">
          <motion.span className="text-purple-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 block reveal-text">
            // Core Capabilities
          </motion.span>
          <h2 className="text-6xl md:text-[9vw] font-black uppercase tracking-tighter leading-[0.8] reveal-text">
            SOLUTIONS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white to-white/40">ENGINEERED.</span>
          </h2>
        </div>

        {/* Cinematic Horizontal Slider */}
        <div className="mb-32 border-y border-white/5 bg-white/[0.01] py-10 backdrop-blur-3xl">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            speed={8000}
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={40}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            className="swiper-container-linear"
          >
            {displayServices.map((svc, i) => (
              <SwiperSlide key={`${svc.id}-${i}`} className="!w-[320px] md:!w-[450px]">
                <div 
                  onClick={() => setActive(svc)}
                  className={`relative group cursor-pointer p-10 rounded-[3rem] border transition-all duration-700 h-64 flex flex-col justify-between overflow-hidden ${
                    active.id === svc.id 
                    ? 'bg-white border-white' 
                    : 'bg-zinc-900/40 border-white/10 hover:border-purple-500/50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className={`${active.id === svc.id ? 'text-black' : 'text-purple-500'} group-hover:scale-110 transition-transform duration-500`}>
                      {svc.icon}
                    </div>
                    <span className={`text-[10px] font-black tracking-widest uppercase ${active.id === svc.id ? 'text-black/40' : 'text-white/20'}`}>
                      0{svc.id}
                    </span>
                  </div>
                  
                  <h3 className={`text-3xl font-bold uppercase tracking-tighter leading-none ${active.id === svc.id ? 'text-black' : 'text-white'}`}>
                    {svc.title}
                  </h3>

                  {/* Dynamic Progress Bar for Active Card */}
                  {active.id === svc.id && (
                    <motion.div layoutId="bar" className="absolute bottom-0 left-0 h-1 bg-black w-full" />
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- TECHNICAL DETAILS STAGE --- */}
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
              {/* Left Column: Vision */}
              <div className="lg:col-span-5 space-y-10">
                <div>
                  <div className="flex items-center gap-3 text-purple-500 font-mono text-[10px] tracking-[0.3em] uppercase mb-6">
                    <Zap size={14} /> Mission Protocol
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
                    {active.title.split(' ')[0]} <br /> 
                    <span className="text-white/30 italic">{active.title.split(' ')[1] || "Solution"}</span>
                  </h2>
                  <p className="text-xl text-gray-400 leading-relaxed font-light italic border-l border-purple-500/50 pl-8">
                    {active.shortDescription}
                  </p>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-500 to-indigo-700 text-white shadow-2xl shadow-purple-500/20">
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-70">Investment Range</div>
                   <div className="text-4xl font-black tracking-tighter mb-4">{active.pricing}</div>
                   <button className="w-full py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all">
                     Initialize Project <ArrowRight size={14} />
                   </button>
                </div>
              </div>

              {/* Right Column: Technical Specs */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                <SpecCard title="Business Impact" items={active.whyImportant} icon={<Layers size={14}/>} />
                <SpecCard title="Technical Scope" items={active.whatIncluded} icon={<Cpu size={14}/>} />
                
                <div className="md:col-span-2 p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-md">
                   <h4 className="text-[10px] font-bold tracking-[0.4em] text-purple-500 uppercase mb-8">// Tech Ecosystem</h4>
                   <div className="flex flex-wrap gap-3">
                     {active.techStack.map((tech, i) => (
                       <span key={i} className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold hover:bg-purple-500 hover:text-white transition-all cursor-default">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .swiper-container-linear .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

const SpecCard = ({ title, items, icon }) => (
  <div className="p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-all group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:text-purple-500/10 transition-colors">
        {icon}
    </div>
    <h4 className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase mb-8 group-hover:text-purple-400">
      // {title}
    </h4>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-gray-400 font-medium leading-tight flex items-start gap-3">
          <div className="w-1 h-1 bg-purple-500 rounded-full mt-1.5" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ServicesShowcase;
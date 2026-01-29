"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Sparkles, ChevronRight } from "lucide-react"

const services = [
  {
    id: "001",
    number: "01",
    title: "WEB ARCHITECTURE",
    subtitle: "// SCALABLE SYSTEMS",
    details: {
      services: ["/NEXT.JS CORE", "/PERFORMANCE", "/E-COMMERCE"],
      description: "ENGINEERING HIGH-SPEED DIGITAL INFRASTRUCTURE. WE DON'T JUST BUILD WEBSITES; WE BUILD CONVERSION ENGINES.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    },
  },
  {
    id: "002",
    number: "02",
    title: "INTERFACE (UX/UI)",
    subtitle: "// HUMAN-CENTRIC",
    details: {
      services: ["/USER PSYCHOLOGY", "/DESIGN SYSTEMS", "/PROTOTYPING"],
      description: "DESIGNING INTERFACES THAT FEEL NATURAL. WE FOCUS ON REDUCING COGNITIVE LOAD WHILE MAXIMIZING VISUAL IMPACT.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
    },
  },
  {
    id: "003",
    number: "03",
    title: "SaaS PRODUCTS",
    subtitle: "// RECURRING VALUE",
    details: {
      services: ["/MULTI-TENANCY", "/DASHBOARDS", "/SUBSCRIPTIONS"],
      description: "FROM CONCEPT TO MARKET-READY SaaS. WE HANDLE THE COMPLEXITY OF SCALABLE CLOUD ARCHITECTURES.",
      image: "https://images.unsplash.com/photo-1602265585142-6b221b9b2c24?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: "004",
    number: "04",
    title: "BRAND IDENTITY",
    subtitle: "// VISUAL VOICE",
    details: {
      services: ["/LOGO SYSTEMS", "/STRATEGY", "/GUIDELINES"],
      description: "CRAFTING VISUAL IDENTITIES THAT RESONATE. WE DEFINE HOW THE WORLD PERCEIVES YOUR ENTERPRISE.",
      image: "https://images.unsplash.com/photo-1590102425712-1c28a0d6b85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhbmQlMjBpZGVudGl0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
  },
]

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="w-full bg-[#030303] py-20 md:py-32 px-4 md:px-10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-10 md:mb-16 flex justify-between items-end">
        <div>
          <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 block underline underline-offset-8 decoration-purple-500/30">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl  tracking-tighter text-white  italic">
            Core <span className="text-white/20">Solutions</span>
          </h2>
        </div>
        <p className="hidden md:block text-white/40 text-[10px] font-mono tracking-widest uppercase text-right">
          Hover to explore <br /> technical parameters
        </p>
      </div>

      {/* --- DESKTOP VIEW (Accordion) --- */}
      <div className="hidden lg:flex h-[650px] w-full border border-white/10 bg-[#050505] overflow-hidden rounded-[3rem] shadow-2xl shadow-purple-900/10">
        {services.map((service) => {
          const isHovered = hoveredCard === service.id
          return (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                width: hoveredCard ? (isHovered ? "60%" : "13.33%") : "25%",
                backgroundColor: isHovered ? "#080808" : "#050505"
              }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="relative border-r border-white/5 h-full cursor-pointer overflow-hidden group"
            >
              {/* Vertical Title (Closed) */}
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-between py-12"
                  >
                    <span className="font-mono text-xs text-blue-500/50 font-bold">{service.number}</span>
                    <h3 className="text-2xl   tracking-tighter text-white/30 rotate-180 [writing-mode:vertical-lr] whitespace-nowrap group-hover:text-white transition-colors lowercase font-semibold">
                      {service.title}
                    </h3>
                    <Sparkles size={14} className="text-white/10 group-hover:text-blue-500 transition-colors" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded Content */}
              <div className={`absolute inset-0 p-12 flex flex-col transition-all duration-700 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <span className="text-blue-500 font-mono text-xs tracking-[0.3em] font-bold uppercase">{service.subtitle}</span>
                    <h3 className="text-4xl gap-4 lowercase tracking-tighter text-white leading-none mt-4 p-4">
                      {service.title.split(' ')[0]} <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 italic">{service.title.split(' ').slice(1).join(' ')}</span>
                    </h3>
                  </div>
                  <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-500">
                    <ArrowUpRight className="text-white" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-12 flex-grow items-end">
                  <div className="space-y-12 pb-6">
                    <div className="space-y-4">
                      {service.details.services.map((item, index) => (
                        <div key={index} className="text-sm font-bold text-white/80 flex items-center gap-4 hover:text-blue-400 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(147,51,234,0.5)]" /> 
                          {item}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-white/40 leading-relaxed max-w-sm font-mono uppercase tracking-tight">{service.details.description}</p>
                  </div>
                  <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl">
                    <img src={service.details.image} alt={service.title} className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" />
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* --- MOBILE VIEW (Crispy List) --- */}
      <div className="lg:hidden flex flex-col gap-4">
        {services.map((service, idx) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#080808] border border-white/5 rounded-3xl p-6 relative overflow-hidden group"
          >
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-4">
                <span className="text-blue-500  text-[10px] tracking-widest font-lite">{service.number} // {service.subtitle}</span>
                <h3 className="text-2xl lowercase  text-white  tracking-tighter font-semibold leading-tight">
                  {service.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.details.services.slice(0, 2).map((s, i) => (
                    <span key={i} className="text-[9px] border border-white/10 px-2 py-1 rounded-full text-white/40 font-mono">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <ArrowUpRight size={18} className="text-blue-500" />
              </div>
            </div>
            
            {/* Soft background image preview for mobile */}
            <div className="absolute right-[-10%] bottom-[-20%] w-32 h-32 opacity-20 blur-2xl bg-blue-600 rounded-full" />
          </motion.div>
        ))}
        
        {/* Mobile "See All" Call to action */}
        <div className="mt-4 p-6 rounded-3xl border border-dashed border-white/10 flex items-center justify-between bg-white/2 transition-colors">
          <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Explore Full Technical Stack</span>
          <ChevronRight size={16} className="text-white/20" />
        </div>
      </div>
    </div>
  )
}
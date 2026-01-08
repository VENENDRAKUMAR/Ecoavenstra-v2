"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"

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
      image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1000&auto=format&fit=crop",
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
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1000&auto=format&fit=crop",
    },
  },
]

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="w-full bg-[#030303] py-32 px-4 md:px-10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <span className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase mb-4 block underline underline-offset-8 decoration-purple-500/30">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase italic">
            Core <span className="text-white/20">Solutions</span>
          </h2>
        </div>
        <p className="hidden md:block text-white/40 text-[10px] font-mono tracking-widest uppercase text-right">
          Hover to explore <br /> technical parameters
        </p>
      </div>

      <div className="flex h-[650px] w-full border border-white/10 bg-[#050505] overflow-hidden rounded-[3rem] shadow-2xl shadow-purple-900/10">
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
              {/* --- VERTICAL TITLE (Closed State) --- */}
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-between py-12"
                  >
                    <span className="font-mono text-xs text-purple-500/50 font-bold">{service.number}</span>
                    <h3 className="text-2xl font-black uppercase tracking-tighter text-white/30 rotate-180 [writing-mode:vertical-lr] whitespace-nowrap group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <Sparkles size={14} className="text-white/10 group-hover:text-purple-500 transition-colors" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* --- EXPANDED CONTENT (Open State) --- */}
              <div className={`absolute inset-0 p-12 flex flex-col transition-all duration-700 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                
                {/* Header */}
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <motion.span 
                       animate={isHovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                       className="text-purple-500 font-mono text-xs tracking-[0.3em] font-bold"
                    >
                      {service.subtitle}
                    </motion.span>
                    <h3 className="text-6xl font-black uppercase tracking-tighter text-white leading-none mt-4">
                      {service.title.split(' ')[0]} <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 italic">{service.title.split(' ').slice(1).join(' ')}</span>
                    </h3>
                  </div>
                  <div className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-purple-600 transition-all duration-500">
                    <ArrowUpRight className="text-white" />
                  </div>
                </div>

                {/* Body Content */}
                <div className="grid grid-cols-2 gap-12 flex-grow items-end">
                  <div className="space-y-12 pb-6">
                    <div className="space-y-4">
                      {service.details.services.map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={isHovered ? { x: 0, opacity: 1 } : {}}
                          transition={{ delay: index * 0.1 + 0.3 }}
                          className="text-sm font-bold text-white/80 flex items-center gap-4 hover:text-purple-400 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-600 shadow-[0_0_10px_rgba(147,51,234,0.5)]" /> 
                          {item}
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-white/40 leading-relaxed max-w-sm font-mono uppercase tracking-tight">
                      {service.details.description}
                    </p>
                  </div>

                  {/* High-End Masked Image */}
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    animate={isHovered ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] group/img shadow-2xl"
                  >
                    <img
                      src={service.details.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale brightness-50 group-hover/img:grayscale-0 group-hover/img:brightness-100 group-hover/img:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
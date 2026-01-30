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
      image: "/images/web.jpg",
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
      image: "/images/ui.jpg",
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
      image: "/images/saas.jpg",
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
      image: "/images/brand.jpg",
    },
  },
]

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="w-full bg-[#030303] py-20 md:py-32 px-4 md:px-10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end">
        <div>
          <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 block">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
            Core <span className="text-white/20 italic font-light">Solutions</span>
          </h2>
        </div>
      </div>

      {/* --- DESKTOP VIEW (Refined Accordion) --- */}
      <div className="hidden lg:flex h-[700px] w-full border border-white/10 bg-[#050505] overflow-hidden rounded-[4rem]">
        {services.map((service) => {
          const isHovered = hoveredCard === service.id
          return (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              animate={{
                width: hoveredCard ? (isHovered ? "65%" : "11.66%") : "25%",
                backgroundColor: isHovered ? "#0a0a0a" : "#050505"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative border-r border-white/5 h-full cursor-pointer overflow-hidden group"
            >
              {/* Vertical Title (When Closed) */}
              <AnimatePresence>
                {!isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-between py-16"
                  >
                    <span className="font-mono text-xs text-blue-500 font-black">{service.number}</span>
                    <h3 className="text-3xl font-black tracking-tighter text-white/20 rotate-180 [writing-mode:vertical-lr] whitespace-nowrap group-hover:text-blue-500 transition-colors uppercase">
                      {service.title}
                    </h3>
                    <Sparkles size={16} className="text-white/10" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Expanded Content */}
              <div className={`absolute inset-0 p-16 flex flex-col transition-all duration-500 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}>
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-4">
                    <span className="text-blue-500 font-mono text-xs tracking-[0.4em] font-black uppercase">{service.subtitle}</span>
                    <h3 className="text-6xl font-black tracking-tighter text-white uppercase leading-[0.8]">
                      {service.title.split(' ')[0]} <br />
                      <span className="text-blue-600 italic font-light">{service.title.split(' ').slice(1).join(' ')}</span>
                    </h3>
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-20 h-20 rounded-3xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl"
                  >
                    <ArrowUpRight size={32} className="text-white" />
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-16 items-end mt-auto">
                  <div className="space-y-12">
                    <div className="space-y-4">
                      {service.details.services.map((item, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={isHovered ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 }}
                          className="text-2xl font-black text-white/90 flex items-center gap-4 hover:text-blue-500 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-600" /> 
                          {item}
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-xs font-bold text-white/30 leading-relaxed max-w-sm uppercase tracking-widest font-mono">
                      {service.details.description}
                    </p>
                  </div>

                  {/* Right Image with Mask Effect */}
                  <motion.div 
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={isHovered ? { clipPath: "inset(0% 0 0 0)" } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] group-hover:shadow-[0_0_50px_rgba(37,99,235,0.2)]"
                  >
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 1.5 }}
                      src={service.details.image} 
                      alt={service.title} 
                      className="w-full h-full object-contaion grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" 
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* --- MOBILE LIST --- */}
      <div className="lg:hidden flex flex-col gap-6">
        {services.map((service, idx) => (
          <div key={service.id} className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-blue-500 font-mono text-[10px] tracking-widest uppercase">{service.number} // {service.subtitle}</span>
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase mt-2">{service.title}</h3>
              </div>
              <ArrowUpRight className="text-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                {service.details.services.map((s, i) => (
                  <div key={i} className="text-[10px] font-bold text-white/40 uppercase">{s}</div>
                ))}
              </div>
              <img src={service.details.image} className="rounded-2xl h-24 w-full object-cover grayscale" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
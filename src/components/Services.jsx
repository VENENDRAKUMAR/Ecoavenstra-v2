import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2, Zap, Globe, Layout, ShieldCheck, Sparkles } from "lucide-react";
import ServicesShowcase from "./Home page/ServiceShow";

gsap.registerPlugin(ScrollTrigger);

const fullServices = [
  {
    id: "01",
    title: "UX/UI Design",
    icon: <Layout className="text-blue-500" size={32} />,
    subtitle: "We create intuitive, engaging, and aesthetically pleasing user interfaces that provide a seamless user experience. Our design process is user-centric, ensuring that every element serves a purpose and enhances usability.",
    bullets: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Interactive Design",
      "Mobile App Design",
      "Design Systems"
    ],
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "02",
    title: "Web Development",
    icon: <Globe className="text-cyan-400" size={32} />,
    subtitle: "Our team builds fast, scalable, and secure websites and web applications using modern technologies. From e-commerce platforms to complex SaaS products, we deliver high-performance digital solutions.",
    bullets: [
      "React.js / Next.js",
      "API Development",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "Performance Optimization"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop"
  },
  {
    id: "03",
    title: "SaaS Platforms",
    icon: <ShieldCheck className="text-blue-400" size={32} />,
    subtitle: "We specialize in building multi-tenant, subscription-ready SaaS applications. Our architecture is designed for scalability, security, and easy management, complete with billing, roles, and analytics.",
    bullets: [
      "Multi-Tenant Architecture",
      "Role-Based Access Control (RBAC)",
      "Stripe/Billing Integration",
      "Analytics Dashboards",
      "Scalable Infrastructure"
    ],
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "04",
    title: "Branding & Identity",
    icon: <Sparkles className="text-green-500" size={32} />,
    subtitle: "A strong brand is more than just a logo. We help you craft a complete brand identity, from strategy and messaging to visual design, that resonates with your target audience and sets you apart from the competition.",
    bullets: [
      "Brand Strategy",
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Marketing Collateral",
      "Packaging Design"
    ],
    image: "https://plus.unsplash.com/premium_photo-1661281412140-dfb328ae967b?w=500&auto=format&fit=crop"
  }
];

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#030014] flex flex-col justify-center px-6 md:px-20 overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-400/10 text-[10px] font-lite tracking-[0.3em] capatalize text-blue-400 mb-8"
        >
          <Zap size={14} fill="currentColor" /> Premium Engineering Studio
        </motion.div>

        <h1 className="text-7xl md:text-[9vw] text-white tracking-tighter leading-[0.8] mb-12">
          We Build <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-white to-blue-400">
            Strong Products.
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl border-t border-white/10 pt-12">
          <div className="text-5xl font-light text-white/20 italic tracking-tighter">WHAT WE DO</div>
          <div className="md:col-span-2">
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
              Grow your brand with high-impact design, social media strategy, and digital marketing. At <span className="text-white font-lite border-b border-blue-500">Ecoavenstra</span>, we create visuals, websites, and campaigns that build trust and drive real business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceSection = ({ service }) => {
  const container = useRef(null);

  return (
    <section ref={container} className="min-h-screen w-full bg-[#030014] py-32 px-6 md:px-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* LEFT SIDE: Content */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-blue-500 font-mono text-xl font-lite tracking-tighter">{service.id}/</span>
              <div className="h-[1px] w-12 bg-blue-500/50" />
            </div>
            <h2 className="text-6xl md:text-8xl font-lite text-white capatalize tracking-tighter leading-none">
              {service.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              {service.subtitle}
            </p>
          </div>

          {/* Detailed Bullets with Glass Effect */}
          <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-10 backdrop-blur-3xl">
            <h4 className="text-[10px] font-black capatalize tracking-[0.4em] text-blue-500 mb-8">// Core Expertise</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 group">
                  <CheckCircle2 size={16} className="text-blue-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium tracking-wide">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="group flex items-center gap-4 text-white font-lite capatalize tracking-widest text-xs">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
              <ArrowUpRight size={20} />
            </div>
            Start {service.title} Project
          </button>
        </div>

        {/* RIGHT SIDE: Interactive Image */}
        <div className="lg:col-span-6 relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-duration-1000" />
          <div className="relative h-[500px] md:h-[700px] rounded-[3rem] overflow-hidden border border-white/10">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1.5s] scale-110 group-hover:scale-100"
            />
            {/* Overlay Info Card */}
            <div className="absolute bottom-8 left-8 right-8 p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem]">
               <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-lite text-blue-400 capatalize tracking-widest mb-1">Status</p>
                    <p className="text-sm text-white font-lite">READY TO INITIALIZE</p>
                  </div>
                  {service.icon}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  return (
    <main className="bg-[#030014] selection:bg-blue-500">
      <ServicesHero />
      {fullServices.map((svc) => (
        <ServiceSection key={svc.id} service={svc} />
      ))}
      <div className="py-20">
        <ServicesShowcase />
      </div>
    </main>
  );
};

export default ServicesPage;
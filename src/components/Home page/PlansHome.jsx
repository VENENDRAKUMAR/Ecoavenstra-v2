"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Layout, ShoppingCart, Smartphone, Globe, 
  ArrowRight, Sparkles, ShieldCheck, Clock, Zap,  Gift
} from 'lucide-react';

const features = [
  {
    name: 'full-stack web development',
    icon: Globe,
    description: 'we build future-proof, scalable, and fully responsive websites tailored to drive your brand growth with precision engineering.',
    startingPrice: '₹49,999',
    pricing: { basic: '₹49,999', premium: '₹99,999', customize: 'quote' },
    includedInPlans: ['basic', 'premium', 'customize'],
    offer: '🚀 complimentary seo & speed optimization audit with premium projects.',
    days: 'built right. delivered on time – 6 month guarantee.'
  },
  {
    name: 'high-converting landing pages',
    icon: Layout,
    description: 'bespoke landing pages, laser-focused on one goal: converting your traffic into leads and sales with high-impact visuals.',
    startingPrice: '₹24,999',
    pricing: { basic: '₹24,999', premium: '₹49,999', customize: 'quote' },
    includedInPlans: ['basic', 'premium', 'customize'],
    offer: '🤝 startup support: get 10% off your first campaign page.',
    days: 'built right. delivered on time – 1 month guarantee.'
  },
    {
    name: 'Digital Marketing Solutions',
    icon: Gift,
    description: 'comprehensive digital marketing strategies, including social media, email campaigns, and paid advertising to boost your online presence.',
    startingPrice: '₹24,999',
    pricing: { basic: '₹24,999', premium: '₹49,999', customize: 'quote' },
    includedInPlans: ['basic', 'premium', 'customize'],
    offer: '🤝 startup support: get 10% off your first campaign page.',
    days: 'built right. delivered on time – 1 month guarantee.'
  },
  {
    name: 'custom internal web solutions',
    icon: Code,
    description: 'streamline your operations with custom dashboards, client portals, and bespoke system integrations for maximum efficiency.',
    startingPrice: '₹1,19,999',
    pricing: { premium: '₹1,19,999', customize: 'quote' },
    includedInPlans: ['premium', 'customize'],
    offer: '📞 free 1-hour strategy consultation to map out requirements.',
    days: 'built right. delivered on time – 6-12 month guarantee.'
  },
  {
    name: 'complex saas & web applications',
    icon: Smartphone,
    description: 'developing tailored applications for unique workflows, complex logic, and enterprise-level functionality from scratch.',
    startingPrice: '₹1,49,999',
    pricing: { premium: '₹1,49,999', customize: 'quote' },
    includedInPlans: ['premium', 'customize'],
    offer: '✨ early adopter discount: flat ₹10,000 off on first major contract.',
    days: 'built right. delivered on time – 12-18 month guarantee.'
  },
  {
    name: 'end-to-end ecommerce platforms',
    icon: ShoppingCart,
    description: 'full-stack online retail stores designed for security, easy inventory management, and maximizing sales volume.',
    startingPrice: '₹99,999',
    pricing: { basic: '₹99,999', premium: '₹1,99,999', customize: 'quote' },
    includedInPlans: ['basic', 'premium', 'customize'],
    offer: '💳 free secure payment gateway integration included.',
    days: 'built right. delivered on time – 12 month guarantee.'
  },
];

const PlansHome = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="relative bg-[#030303] text-white py-24 md:py-32 px-4 md:px-12 overflow-hidden font-light tracking-tight">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-20">
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="text-blue-500 font-mono text-[10px] tracking-[0.5em] mb-6 uppercase"
          >
            // scaling digital commerce
          </motion.p>
          <h2 className="text-4xl md:text-7xl font-extralight lowercase leading-[1.1] mb-8">
            invest in your <span className="text-white/30 italic">growth.</span> transparent <span className="text-blue-500 font-normal">pricing models.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* --- LEFT: SERVICE NAV --- */}
          <div className="lg:col-span-4 space-y-2">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-6">select service</p>
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setSelectedFeature(feature)}
                className={`w-full text-left py-4 px-2 border-b transition-all duration-500 flex items-center justify-between group
                  ${selectedFeature.name === feature.name ? 'border-blue-500' : 'border-white/5 hover:border-white/20'}`}
              >
                <span className={`text-lg capitalize transition-all ${selectedFeature.name === feature.name ? 'text-white' : 'text-white group-hover:text-white/60'}`}>
                  {feature.name}
                </span>
                <ArrowRight size={14} className={`transition-all duration-500 ${selectedFeature.name === feature.name ? 'opacity-100 translate-x-0 text-blue-500' : 'opacity-0 -translate-x-4'}`} />
              </button>
            ))}

            <div className="mt-12 p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
              <ShieldCheck size={20} className="text-blue-500/40" />
              <p className="text-[10px] text-white/40 leading-relaxed capitalize font-mono">
                every project includes a dedicated manager and 24/7 technical support post-launch. built for longevity.
              </p>
            </div>
          </div>

          {/* --- RIGHT: DYNAMIC DISPLAY --- */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#050505] border border-white/5 rounded-[3rem] p-8 md:p-16 relative"
              >
                {/* Top Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-10">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-blue-500 tracking-widest uppercase bg-blue-500/5 px-3 py-1 rounded-full">
                    <Clock size={12} /> {selectedFeature.days.split('–')[1]}
                  </div>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest italic">starting at {selectedFeature.startingPrice}</span>
                </div>

                {/* Description */}
                <h3 className="text-3xl md:text-5xl font-extralight capitalize  mb-6 tracking-tight">
                  {selectedFeature.name}
                </h3>
                <p className="text-white/40 text-base md:text-lg leading-relaxed mb-16 max-w-2xl lowercase">
                  {selectedFeature.description}
                </p>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
                  {['basic', 'premium', 'customize'].map((plan) => {
                    const isIncluded = selectedFeature.includedInPlans.includes(plan);
                    const price = selectedFeature.pricing[plan];
                    return (
                      <div key={plan} className={`flex flex-col gap-3 ${!isIncluded ? 'opacity-10 grayscale' : 'opacity-100'}`}>
                        <span className="text-[10px] font-mono text-blue-500/60 uppercase tracking-[0.2em]">{plan}</span>
                        <div className="text-2xl font-light tracking-tighter lowercase">{price || 'n/a'}</div>
                        <div className="h-[1px] w-8 bg-white/10" />
                      </div>
                    );
                  })}
                </div>

                {/* Offer Area */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5">
                  <div className="flex items-start gap-4 flex-1">
                    <Sparkles size={18} className="text-blue-400 shrink-0 mt-1" />
                    <p className="text-xs md:text-sm italic text-white/50 leading-relaxed lowercase font-light">
                      {selectedFeature.offer}
                    </p>
                  </div>
                  
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="/contact-us"
                    className="w-full md:w-auto px-8 py-4 bg-white text-black rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
                  >
                    start project <ArrowRight size={14} />
                  </motion.a>
                </div>

                {/* Ambient Internal Glow */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[100px] pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansHome;
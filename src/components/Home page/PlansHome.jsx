import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Layout, ShoppingCart, Smartphone, Globe, 
  CheckCircle, XCircle, Zap, TrendingUp, DollarSign,
  ArrowRight, Sparkles, ShieldCheck, Clock
} from 'lucide-react';

// --- Configuration Data (Content Same Rakhha Hai) ---
const features = [
  {
    name: 'Full-Stack Web Development',
    icon: Globe,
    description: 'We build future-proof, scalable, and fully responsive websites tailored to drive your brand growth.',
    startingPrice: '₹49,999',
    pricing: { BASIC: '₹49,999', PREMIUM: '₹99,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['BASIC', 'PREMIUM', 'CUSTOMIZE'],
    offer: '🚀 Complimentary SEO & Speed Optimization Audit with PREMIUM projects.',
    days: 'Built Right. Delivered On Time – 6 Month Guarantee.'
  },
  {
    name: 'High-Converting Landing Pages',
    icon: Layout,
    description: 'Bespoke landing pages, laser-focused on one goal: converting your traffic into leads and sales.',
    startingPrice: '₹24,999',
    pricing: { BASIC: '₹24,999', PREMIUM: '₹49,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['BASIC', 'PREMIUM', 'CUSTOMIZE'],
    offer: '🤝 Startup Support: Get 10% off your first campaign page.',
    days: 'Built Right. Delivered On Time – 1 Month Guarantee.'
  },
  {
    name: 'Custom Internal Web Solutions',
    icon: Code,
    description: 'Streamline your operations with custom dashboards, client portals, and bespoke system integrations.',
    startingPrice: '₹1,19,999',
    pricing: { PREMIUM: '₹1,19,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['PREMIUM', 'CUSTOMIZE'],
    offer: '📞 Free 1-hour strategy consultation to map out your digital requirements.',
    days: 'Built Right. Delivered On Time – 6-12 Month Guarantee.'
  },
  {
    name: 'Complex SaaS & Web Applications',
    icon: Smartphone,
    description: 'Developing tailored applications for unique workflows, complex logic, and enterprise-level functionality.',
    startingPrice: '₹1,49,999',
    pricing: { PREMIUM: '₹1,49,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['PREMIUM', 'CUSTOMIZE'],
    offer: '✨ Early Adopter Discount: Flat ₹10,000 off on your first major app development contract.',
    days: 'Built Right. Delivered On Time – 12-18 Month Guarantee.'
  },
  {
    name: 'End-to-End eCommerce Platforms',
    icon: ShoppingCart,
    description: 'Full-stack online retail stores designed for security, easy inventory management, and maximizing sales volume.',
    startingPrice: '₹99,999',
    pricing: { BASIC: '₹99,999', PREMIUM: '₹1,99,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['BASIC', 'PREMIUM', 'CUSTOMIZE'],
    offer: '💳 Free Secure Payment Gateway Integration included.',
    days: 'Built Right. Delivered On Time – 12 Month Guarantee.'
  },
];

const PlansHome = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="relative bg-[#030303] text-white py-32 px-6 overflow-hidden">
      
      {/* --- PREMIUM BACKGROUND AMBIENCE --- */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="max-w-2xl">
            <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.5em] mb-4 block">
              // Pricing & Value
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              INVEST IN <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">YOUR GROWTH.</span>
            </h2>
          </motion.div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base leading-relaxed border-l border-emerald-500/30 pl-6">
            Transparent pricing models designed to scale with your business goals. No hidden fees, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. LEFT SIDE - SERVICE NAVIGATION (Bento Menu) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 backdrop-blur-xl">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 px-2 flex items-center gap-2">
                <TrendingUp size={14} className="text-emerald-500" /> Select Service
              </h3>
              <div className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    onClick={() => setSelectedFeature(feature)}
                    className={`group cursor-pointer p-5 rounded-2xl flex items-center justify-between transition-all duration-500 border ${
                      selectedFeature.name === feature.name
                        ? 'bg-emerald-500 text-black border-emerald-500 shadow-[0_10px_30px_rgba(16,185,129,0.3)]'
                        : 'bg-white/5 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <feature.icon size={20} className={selectedFeature.name === feature.name ? 'text-black' : 'text-emerald-500'} />
                      <span className="text-sm font-bold tracking-tight uppercase">
                        {feature.name.split(' ')[0]} {feature.name.split(' ')[1] || ''}
                      </span>
                    </div>
                    <ArrowRight size={16} className={`opacity-0 group-hover:opacity-100 transition-all ${selectedFeature.name === feature.name ? 'text-black' : 'text-emerald-500'}`} />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Support/Guarantee Card */}
            <div className="bg-gradient-to-br from-emerald-600/20 to-transparent border border-emerald-500/20 rounded-[2rem] p-8">
              <ShieldCheck className="text-emerald-500 mb-4" size={32} />
              <h4 className="font-bold text-lg mb-2 tracking-tight">Ecoavenstra Trust</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Every project includes a dedicated manager and 24/7 technical support post-launch.</p>
            </div>
          </div>

          {/* 2. RIGHT SIDE - DYNAMIC DISPLAY CARD */}
          <div className="lg:col-span-8 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="bg-zinc-900/40 border border-white/10 rounded-[3rem] h-full flex flex-col p-8 md:p-14 relative overflow-hidden backdrop-blur-md"
              >
                {/* Background Decor */}
                <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                  <selectedFeature.icon size={250} />
                </div>

                {/* Content Header */}
                <div className="relative z-10 mb-12">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase">
                      Featured Solution
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase">
                      <Clock size={12} /> {selectedFeature.days.split('–')[1]}
                    </div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase italic">
                    {selectedFeature.name}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                    {selectedFeature.description}
                  </p>
                </div>

                {/* PRICING GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 relative z-10">
                  {['BASIC', 'PREMIUM', 'CUSTOMIZE'].map((plan) => {
                    const isIncluded = selectedFeature.includedInPlans.includes(plan);
                    const price = selectedFeature.pricing[plan];
                    
                    return (
                      <div 
                        key={plan}
                        className={`group p-8 rounded-[2rem] border transition-all duration-500 flex flex-col justify-between ${
                          isIncluded 
                            ? 'bg-white/5 border-emerald-500/30 hover:border-emerald-500 hover:bg-emerald-500/5' 
                            : 'bg-black/20 border-white/5 opacity-40'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-center mb-6">
                            <span className="text-[10px] font-bold tracking-[0.3em] text-emerald-500">{plan}</span>
                            {isIncluded ? <CheckCircle size={14} className="text-emerald-500" /> : <XCircle size={14} className="text-gray-600" />}
                          </div>
                          <div className="text-2xl font-black tracking-tight mb-2">
                            {price || "N/A"}
                          </div>
                        </div>
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-4">
                          {plan === 'CUSTOMIZE' ? 'Scalable Plan' : 'Flat Pricing'}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* OFFER & CTA */}
                <div className="mt-auto relative z-10 flex flex-col md:flex-row items-center gap-6">
                  {selectedFeature.offer && (
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="flex-1 p-6 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border border-emerald-500/30 rounded-2xl flex items-center gap-4 group hover:border-emerald-500 transition-all"
                    >
                      <Sparkles className="text-emerald-400 shrink-0 group-hover:rotate-12 transition-transform" />
                      <p className="text-xs md:text-sm font-bold text-emerald-100 italic leading-snug">
                        {selectedFeature.offer}
                      </p>
                    </motion.div>
                  )}
                  
                  <button className="w-full md:w-auto px-10 py-6 bg-white text-black font-black text-xs uppercase tracking-[0.3em] rounded-2xl hover:bg-emerald-500 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-3">
                    Start Project <SendIcon size={14} />
                  </button>
                </div>

                {/* Visual "Scanline" Animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                  <div className="w-full h-[1px] bg-emerald-500 animate-scan" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

const SendIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default PlansHome;
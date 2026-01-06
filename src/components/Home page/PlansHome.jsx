import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, ShoppingCart, Smartphone, Globe, CheckCircle, XCircle, Zap, TrendingUp, DollarSign } from 'lucide-react';

// --- Configuration Data ---
const features = [
  {
    name: 'Full-Stack Web Development',
    icon: Globe,
    description: 'We build future-proof, scalable, and fully responsive websites tailored to drive your brand growth.',
    startingPrice: '₹49,999',
    pricing: { BASIC: '₹49,999', PREMIUM: '₹99,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['BASIC', 'PREMIUM', 'CUSTOMIZE'],
    offer: '🚀 Complimentary SEO & Speed Optimization Audit with PREMIUM projects.',
    days:'Built Right. Delivered On Time – 6 Month Guarantee.'
  },
  {
    name: 'High-Converting Landing Pages',
    icon: Layout,
    description: 'Bespoke landing pages, laser-focused on one goal: converting your traffic into leads and sales.',
    startingPrice: '₹24,999',
    pricing: { BASIC: '₹24,999', PREMIUM: '₹49,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['BASIC', 'PREMIUM', 'CUSTOMIZE'],
    offer: '🤝 Startup Support: Get 10% off your first campaign page.',
       days:'Built Right. Delivered On Time – 1 Month Guarantee.'
  },
  {
    name: 'Custom Internal Web Solutions',
    icon: Code,
    description: 'Streamline your operations with custom dashboards, client portals, and bespoke system integrations.',
    startingPrice: '₹1,19,999',
    pricing: { PREMIUM: '₹1,19,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['PREMIUM', 'CUSTOMIZE'],
    offer: '📞 Free 1-hour strategy consultation to map out your digital requirements.',
       days:'Built Right. Delivered On Time – 6-12  Month Guarantee.'
  },
  {
    name: 'Complex SaaS & Web Applications',
    icon: Smartphone,
    description: 'Developing tailored applications for unique workflows, complex logic, and enterprise-level functionality.',
    startingPrice: '₹1,49,999',
    pricing: { PREMIUM: '₹1,49,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['PREMIUM', 'CUSTOMIZE'],
    offer: '✨ Early Adopter Discount: Flat ₹10,000 off on your first major app development contract.',
       days:'Built Right. Delivered On Time – 12-18 Month Guarantee.'
  },
  {
    name: 'End-to-End eCommerce Platforms',
    icon: ShoppingCart,
    description: 'Full-stack online retail stores designed for security, easy inventory management, and maximizing sales volume.',
    startingPrice: '₹99,999',
    pricing: { BASIC: '₹99,999', PREMIUM: '₹1,99,999', CUSTOMIZE: 'Quote Available' },
    includedInPlans: ['BASIC', 'PREMIUM', 'CUSTOMIZE'],
    offer: '💳 Free Secure Payment Gateway Integration included.',
       days:'Built Right. Delivered On Time – 12 Month Guarantee.'
  },
];

// --- Fading and Staggered Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

// --- Custom Components ---

const SparkleOffer = ({ children }) => (
    <div className="relative p-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-black rounded-xl font-bold text-base shadow-2xl flex items-center space-x-3 overflow-hidden">
        {/* Sparkle Overlay Effect */}
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_farthest-corner_at_center_top,_rgba(255,255,255,0.4)_0%,_transparent_50%)] animate-pulse"></div>
        </div>
        <Zap size={20} className="flex-shrink-0 relative z-10"/>
        <span className="relative z-10">{children}</span>
    </div>
);

const PlanIndicator = ({ plan, selectedFeature }) => {
    const included = selectedFeature.includedInPlans.includes(plan);
    const Icon = included ? CheckCircle : XCircle;
    const colorClass = included ? 'text-emerald-400' : 'text-red-400';
    const isAvailable = selectedFeature.pricing[plan] && selectedFeature.pricing[plan] !== 'Quote Available';

    return (
        <span className={`inline-flex items-center justify-center ${colorClass}`}>
            <Icon size={16} className={isAvailable ? '' : 'opacity-40'} />
        </span>
    );
};


const PlansHome = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="bg-gradient-to-b from-[#000000] to-[#0a0a0a] text-white py-24 px-6 font-sans">
        
        {/* Global Particle/Glow Background Effect */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
            <div className="absolute w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[150px]"></div>
            <div className="absolute w-[60%] h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                    Our Investment. <span className="text-emerald-400 block sm:inline">Your Growth.</span>
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                    Transparent, value-driven pricing across all digital services. See what you get.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
                
                {/* 1. Left Side - Compact Grid Service Selector */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-1"
                >
                    <div className="bg-gray-900/60 p-6 rounded-3xl border border-gray-800 backdrop-blur-md shadow-2xl space-y-3">
                        <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700/50 pb-3 flex items-center space-x-2">
                            <TrendingUp size={20} className="text-emerald-400"/>
                            <span>Digital Services Menu</span>
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-3"> {/* 2-column grid on mobile/tablet */}
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(52, 211, 153, 0.2)' }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelectedFeature(feature)}
                                    className={`flex flex-col items-center justify-center text-center cursor-pointer p-4 rounded-xl transition-all duration-300 border ${
                                        selectedFeature.name === feature.name
                                            ? 'bg-emerald-600/15 border-emerald-500/70 text-emerald-300 shadow-md shadow-emerald-500/20'
                                            : 'bg-gray-800/50 border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white'
                                    }`}
                                >
                                    <feature.icon size={32} className={selectedFeature.name === feature.name ? 'text-emerald-400' : 'text-gray-500'} />
                                    <h3 className="text-sm font-semibold leading-snug mt-2">{feature.name.replace(' Development', '').replace(' Platforms', '')}</h3>
                                    <p className="text-xs font-bold text-gray-500 mt-1 flex items-center space-x-1">
                                        <DollarSign size={10} />
                                        <span>From {feature.startingPrice}</span>
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 2. Right Side - Focused Detail Card */}
                <motion.div
                    key={selectedFeature.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-3 h-full"
                >
                    <div className="p-8 md:p-12 rounded-3xl h-full bg-[#141414] border border-emerald-700/30 shadow-[0_0_60px_rgba(52,211,153,0.1)] relative overflow-hidden">
                        
                        {/* Detail Card Content */}
                        <div className="relative z-10">
                            {/* Header */}
                            <header className="mb-8 border-b border-gray-700/50 pb-6">
                                <div className="flex items-center space-x-4 mb-2">
                                    <selectedFeature.icon size={48} className="text-emerald-400 p-2 border border-emerald-600/50 rounded-lg bg-gray-900"/>
                                    <h3 className="text-4xl font-extrabold text-white">{selectedFeature.name}</h3>
                                </div>
                                <p className="text-gray-300 text-lg mt-3">{selectedFeature.description}</p>
                                 <p className="text-xl font-semibold text-lime-400">{selectedFeature.days}</p>

                            </header>

                            {/* Pricing Tiers */}
                            <motion.div 
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                            >
                                {['BASIC', 'PREMIUM', 'CUSTOMIZE'].map((plan) => (
                                    <motion.div
                                        key={plan}
                                        variants={itemVariants}
                                        className={`p-6 rounded-xl border-2 transition-all duration-300 min-h-[150px] ${
                                            selectedFeature.includedInPlans.includes(plan)
                                                ? 'bg-gray-800/70 border-emerald-600/50 shadow-xl shadow-emerald-900/40'
                                                : 'bg-gray-800/40 border-gray-700/50 opacity-60'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between mb-3 border-b border-gray-700/50 pb-2">
                                            <h5 className="text-xl font-bold uppercase text-emerald-300">{plan}</h5>
                                            <PlanIndicator plan={plan} selectedFeature={selectedFeature} />
                                        </div>
                                        <p className={`text-3xl font-extrabold mt-2 ${selectedFeature.includedInPlans.includes(plan) ? 'text-white' : 'text-gray-400'}`}>
                                            {selectedFeature.pricing[plan] || 'N/A'}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {plan === 'CUSTOMIZE' ? 'Solution Tailored' : 'Fixed Starting Fee'}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Call to Action & Offer */}
                            <div className="mt-10 pt-6 border-t border-gray-700/50">
                                {selectedFeature.offer && (
                                    <motion.div
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        <SparkleOffer>
                                            {selectedFeature.offer}
                                        </SparkleOffer>
                                    </motion.div>
                                )}

                                <button 
                                    className="mt-6 w-full py-4 text-lg font-extrabold rounded-xl transition-all duration-300 
                                    bg-emerald-500 text-black shadow-lg shadow-emerald-500/50 hover:bg-emerald-400 hover:shadow-emerald-500/80"
                                >
                                    Initiate Project Discussion
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default PlansHome;
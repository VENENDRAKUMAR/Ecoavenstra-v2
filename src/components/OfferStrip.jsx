import React from "react";
import { motion } from "framer-motion";
import { Ticket, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";

const OfferStrip = () => {
  const [copied, setCopied] = useState(false);
  const couponCode = "FESTIVE12";

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full bg-[#2149AA] overflow-hidden py-3 z-[110]">
      {/* Moving Background Text */}
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/40"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="flex items-center gap-4">
              <Sparkles size={12} /> Festive Season Sale is Live
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="hidden md:flex w-12 h-12 rounded-full bg-white/10 items-center justify-center border border-white/20">
            <Ticket className="text-white rotate-[-15deg]" size={20} />
          </div>
          <div>
            <h4 className="text-white font-black text-sm md:text-lg uppercase tracking-tighter leading-none">
              Flat 12% OFF <span className="text-blue-200">on All Services</span>
            </h4>
            <p className="text-blue-100/60 text-[9px] uppercase tracking-widest font-bold mt-1">Limited Time Festive Offer • Non-Refundable</p>
          </div>
        </div>

        {/* Scannable/Copyable Coupon */}
        <button 
          onClick={handleCopy}
          className="group relative flex items-center bg-black/20 hover:bg-black/40 border border-white/10 rounded-xl px-4 py-2 transition-all active:scale-95 overflow-hidden"
        >
          <div className="flex flex-col items-start pr-4 border-r border-white/10">
            <span className="text-[8px] font-black text-blue-200 uppercase tracking-widest">Coupon Code</span>
            <span className="text-white font-mono font-bold tracking-wider">{couponCode}</span>
          </div>
          <div className="pl-4 flex items-center gap-2 text-white">
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} className="opacity-40 group-hover:opacity-100" />}
            <span className="text-[10px] font-black uppercase tracking-widest">{copied ? "Copied" : "Copy"}</span>
          </div>
          
          {/* Shine effect on hover */}
          <motion.div 
            initial={{ x: "-100%" }}
            whileHover={{ x: "200%" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />
        </button>
      </div>
    </div>
  );
};

export default OfferStrip;
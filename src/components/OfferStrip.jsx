import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Ticket, Sparkles, Copy, Check, X } from "lucide-react";

const OfferStrip = () => {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const couponCode = "FESTIVE12";

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative w-full bg-[#2149AA] overflow-hidden z-[1001]"
        >
          {/* Animated Background Text */}
          <div className="py-2 flex whitespace-nowrap opacity-20 pointer-events-none">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-white"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="flex items-center gap-4">
                  <Sparkles size={10} /> Festive Season Sale is Live
                </span>
              ))}
            </motion.div>
          </div>

          {/* UI Content Overlay */}
          <div className="absolute inset-0 flex items-center px-4 md:px-12">
            <div className="w-full flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <Ticket className="text-white rotate-[-15deg] hidden sm:block" size={18} />
                <div className="flex flex-col">
                  <h4 className="text-white font-black text-[10px] md:text-sm uppercase tracking-tighter leading-none">
                    Flat 12% OFF <span className="text-blue-200">on All Services</span>
                  </h4>
                  <p className="text-blue-100/60 text-[7px] uppercase tracking-widest font-bold hidden md:block">Limited Time Offer</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={handleCopy}
                  className="flex items-center bg-black/30 border border-white/10 rounded-lg px-2 py-1 md:px-4 md:py-1.5 transition-all active:scale-95 overflow-hidden"
                >
                  <div className="flex flex-col items-start pr-2 md:pr-3 border-r border-white/10">
                    <span className="text-[6px] md:text-[8px] font-black text-blue-200 uppercase leading-none">Code</span>
                    <span className="text-white font-mono text-[10px] md:text-sm font-bold">{couponCode}</span>
                  </div>
                  <div className="pl-2 md:pl-3 flex items-center gap-2 text-white">
                    {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} className="opacity-50" />}
                    <span className="hidden sm:block text-[8px] font-black uppercase tracking-widest">{copied ? "Done" : "Copy"}</span>
                  </div>
                </button>

                <button 
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OfferStrip;
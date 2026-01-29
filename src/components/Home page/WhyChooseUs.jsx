import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, Target, Palette, Cpu, TrendingUp, Search 
} from "lucide-react";

// Placeholder for image - optimized for responsive viewing
const WhyChoose = "/images/whyChoose.jpg";

const mainFeatures = [
  { icon: Palette, title: "Custom UI/UX", desc: "Intuitive interfaces tailored to your brand.", color: "text-blue-400", bg: "bg-blue-400/5" },
  { icon: Cpu, title: "Advanced Tech", desc: "Latest tools for high performance.", color: "text-emerald-400", bg: "bg-emerald-400/5" },
  { icon: Zap, title: "Future Ready", desc: "Scalable tech built for tomorrow.", color: "text-blue-400", bg: "bg-blue-400/5" },
  { icon: Target, title: "Result Driven", desc: "Design for your audience to drive results.", color: "text-emerald-400", bg: "bg-emerald-400/5" },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full relative py-20 md:py-32 bg-[#030303] text-white overflow-hidden">
      
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* HEADING AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              className="text-emerald-400 font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 block"
            >
              Why Ecoavenstra
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none capitalize">
              We Architect <br /> 
              <span className="text-white/20">The future.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm md:text-base leading-relaxed">
            Performance-first digital solutions that drive measurable business growth and elevate your brand perception.
          </p>
        </div>

        {/* MODERN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* LEFT: THE BIG IMAGE CARD */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 min-h-[400px] md:h-[700px]"
          >
            <img 
              src={WhyChoose} 
              alt="Office" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
              <div className="flex items-center gap-4 mb-3">
                <span className="h-[1px] w-8 md:w-12 bg-emerald-500" />
                <span className="text-[10px] tracking-widest text-emerald-400 uppercase">Our Essence</span>
              </div>
              <h3 className="text-xl md:text-2xl max-w-md italic font-light leading-snug">
                "Innovation is not just what we do, it's how we think."
              </h3>
            </div>
          </motion.div>

          {/* RIGHT: FEATURE BENTO */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {mainFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 ${f.bg} flex flex-col justify-between h-[200px] md:h-[240px] transition-all`}
              >
                <f.icon className={`w-6 h-6 md:w-8 md:h-8 ${f.color}`} />
                <div>
                  <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2 tracking-tight">{f.title}</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* SLEEK LIST FOR REMAINING */}
            <div className="sm:col-span-2 mt-4 p-6 border-t border-white/10 flex flex-wrap gap-4 md:gap-6 justify-center opacity-40">
              {["SEO READY", "BRAND VALUE", "24/7 SUPPORT", "FAIR PRICING"].map((item) => (
                <span key={item} className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] hover:text-white transition-colors cursor-default">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
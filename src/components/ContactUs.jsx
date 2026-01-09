import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Command, ShieldCheck } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#030014] text-white py-32 px-6 overflow-hidden">
      
      {/* --- ENTERPRISE BACKGROUND MESH --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep Blue Radial Glow */}
        <div className="absolute top-[-10%] left-[20%] w-[1000px] h-[600px] bg-blue-600/20 blur-[180px] rounded-full opacity-50" />
        <div className="absolute bottom-[-10%] right-[10%] w-[800px] h-[500px] bg-indigo-600/20 blur-[150px] rounded-full opacity-30" />
        
        {/* Grid Overlay (Enterprise Look) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-8"
          >
            <ShieldCheck size={14} /> Global Enterprise Solutions
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
            Let’s build the <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-indigo-500">
              Future of Web.
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
            Partner with Ecoavenstra to ship high-performance digital products. Our engineers and designers are ready to scale your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT: ENTERPRISE INFO --- */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Contact Items with Glass Effect */}
            <div className="space-y-6">
              {[
                { label: 'Technical Inquiries', val: 'business@ecoavenstra.com', icon: <Command size={18}/> },
                { label: 'Direct Hotline', val: '(+91) 9752505639', icon: <Phone size={18}/> },
                { label: 'Global HQ', val: 'Seoni, MP - India', icon: <MapPin size={18}/> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-500/5">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-medium text-white/90">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Client Proof / Trust Box */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-blue-500/5 to-indigo-500/5 border border-white/5 backdrop-blur-md">
                <div className="flex gap-1 text-blue-400 mb-4">
                    {[...Array(5)].map((_, i) => <Sparkles key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed italic">
                    "The most reliable engineering partner we've worked with. Their attention to detail in SaaS architecture is unmatched in the industry."
                </p>
                <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-600/30 border border-indigo-500/50" />
                    <span className="text-xs font-bold tracking-widest uppercase">CTO, Global Tech Corp</span>
                </div>
            </div>
          </div>

          {/* --- RIGHT: THE FORM (PREMIUM GLASS) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 relative group"
          >
            {/* Dynamic Glow behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            
            <div className="relative bg-[#07070a] border border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl overflow-hidden">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="py-20 text-center"
                  >
                    <CheckCircle2 size={60} className="text-blue-500 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-2">Request Received</h3>
                    <p className="text-gray-500">An enterprise representative will contact you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Enter your name"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Work Email</label>
                        <input 
                          type="email" 
                          placeholder="name@company.com"
                          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 ml-2">Project Brief</label>
                      <textarea 
                        rows="4"
                        placeholder="Describe your project requirements..."
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-6 outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all resize-none"
                        required
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full group/btn relative py-6 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all active:scale-95"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {status === 'loading' ? 'Processing...' : <>Initialize Project <Send size={16} /></>}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500" />
                      <div className="absolute inset-0 group-hover/btn:bg-blue-600" /> {/* Fallback color */}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

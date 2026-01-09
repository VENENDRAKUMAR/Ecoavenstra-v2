import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Phone, MessageSquare, Send, Briefcase, Sparkles } from 'lucide-react';

const formItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const EnquiryForm = () => {
  const [formData, setFormData] = React.useState({
    name: '', email: '', phone: '', message: '', status: 'Pending'
  });
  const [loading, setLoading] = React.useState(false);
  const [message, setMessage] = React.useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // ... (Aapki API logic same rahegi)
    setTimeout(() => { // Dummy delay for feel
        setLoading(false);
        setMessage({ text: 'Success! Our team will reach out.', type: 'success' });
    }, 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#000000] text-white p-4 md:p-10 overflow-hidden">
      
      {/* --- DYNAMIC AMBIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/10 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-lime-300/10 blur-[150px] rounded-full" 
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 bg-white/[0.02] backdrop-blur-3xl rounded-[2.5rem] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        
        {/* --- LEFT SIDE: THE VIBE --- */}
        <div className="p-10 md:p-16 flex flex-col justify-between bg-gradient-to-br from-purple-900/20 to-black/50 border-r border-white/5">
          <div>
            <motion.div 
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="flex items-center gap-3 text-green-400 font-mono text-xs tracking-[0.4em] uppercase mb-8"
            >
              <Sparkles className="w-4 h-4" /> Ecoavenstra 
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
              LET'S <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-100 to-green-400">BUILD</span> <br /> IT.
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
              Stop waiting for the "right time". Your digital transformation starts with a single message.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-300">Talk to an expert</span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE FORM --- */}
        <div className="p-10 md:p-16 bg-transparent relative">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-8">Consultation Request</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div variants={formItemVariants} initial="hidden" animate="visible" className="group">
                <div className="relative">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors w-4 h-4" />
                  <input 
                    type="text" name="name" placeholder="YOUR NAME" 
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-8 outline-none focus:border-purple-500 transition-all font-mono text-xs uppercase tracking-widest"
                    onChange={handleChange} required
                  />
                </div>
              </motion.div>

              {/* Row: Phone & Email */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-green-400 transition-colors w-4 h-4" />
                  <input 
                    type="tel" name="phone" placeholder="PHONE"
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-8 outline-none focus:border-green-500 transition-all font-mono text-xs uppercase tracking-widest"
                    onChange={handleChange} required
                  />
                </div>
                <div className="relative group">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors w-4 h-4" />
                  <input 
                    type="email" name="email" placeholder="EMAIL"
                    className="w-full bg-transparent border-b border-white/10 py-4 pl-8 outline-none focus:border-blue-500 transition-all font-mono text-xs uppercase tracking-widest"
                    onChange={handleChange} required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <MessageSquare className="absolute left-0 top-4 text-gray-500 group-focus-within:text-green-400 transition-colors w-4 h-4" />
                <textarea 
                  name="message" placeholder="PROJECT DETAILS"
                  className="w-full bg-transparent border-b border-white/10 py-4 pl-8 outline-none focus:border-green-500 transition-all font-mono text-xs uppercase tracking-widest min-h-[100px] resize-none"
                  onChange={handleChange} required
                />
              </div>

              {/* Status Message */}
              <AnimatePresence>
                {message.text && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`text-[10px] font-bold tracking-widest p-3 rounded bg-white/5 border-l-2 ${message.type === 'success' ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400'}`}
                  >
                    {message.text.toUpperCase()}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full relative overflow-hidden group py-5 bg-white text-black font-black text-[10px] tracking-[0.3em] uppercase rounded-xl transition-all"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? 'SENDING...' : 'INITIATE CONTACT'} <Send className="w-3 h-3" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="absolute inset-0 group-hover:bg-white transition-all opacity-0 group-hover:opacity-10" />
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnquiryForm;
import * as React from 'react'; // React import ko adjust kiya gaya
import { motion } from 'framer-motion';
// Icons from lucide-react (react-icons/fa ko replace karte hue)
import { Mail, User, Phone, MessageSquare, Send, Briefcase } from 'lucide-react';

// Motion Variants for Staggered Entrance
const formContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Har form element 0.1s ke baad aayega
      delayChildren: 0.3,
    },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const EnquiryForm = () => {
  const [formData, setFormData] = React.useState({ // React.useState ka upyog
    name: '',
    email: '',
    phone: '',
    message: '',
    status: 'Pending'
  });
  const [loading, setLoading] = React.useState(false); // React.useState ka upyog
  const [message, setMessage] = React.useState({ text: '', type: '' }); // React.useState ka upyog

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // API Submit Logic (Aapke code se)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('https://ecoavenstra-be.onrender.com/api/v1/admin/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'Thank you! We will get back to you soon.', type: 'success' });
        setFormData({ name: '', email: '', phone: '', message: '', status: 'Pending' });
      } else {
        setMessage({ text: data.message || 'Something went wrong. Please try again.', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Network error. Please check your connection.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    // Main Section: Full-screen, dark background
    <section className="relative min-h-screen flex items-center justify-center  text-white overflow-hidden font-sans p-6 md:p-12 ">
      
      {/* Background Glow Effect */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
          <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full  blur-[200px] animate-pulse-slow"></div>
          <div className="absolute w-[400px] h-[400px] top-0 left-0 rounded-full bg-indigo-500/10 blur-[100px]"></div>
      </div>

      {/* Content Container (Matches the image layout) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 min-h-[80vh] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-gray-800/50"
      >
        
        {/* 1. Left Side: Brand Content & Purple Gradient Box */}
        <div className="p-12 flex flex-col justify-between bg-gradient-to-b from-purple-500 via-purple-900 to-black relative">
          
          {/* Abstract background elements */}
          <span className="absolute top-20 left-20 text-purple-400/30 font-thin text-xl">+</span>
          <span className="absolute top-1/2 left-1/4 text-purple-400/30 font-thin text-xl">+</span>
          <span className="absolute bottom-20 right-20 text-purple-400/30 font-thin text-xl">+</span>
          <span className="absolute top-1/4 right-1/4 text-purple-400/30 font-thin text-xl">+</span>

          {/* Top Logo (Replaced 'Key Sharer' with a relevant icon) */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-2 z-10"
          >
            <Briefcase className="w-6 h-6 text-white" />
            <span className="text-xl font-bold">Ecoavenstra hr infotech Pvt. Ltd.</span>
          </motion.div>

          {/* Main Text Content (From your EnquiryForm) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="z-10"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
              <span className="block">Why a website</span>
              <span className="block">or app is</span>
              <span className="block">needed.</span>
            </h1>
            <p className="text-white/70 text-lg max-w-md pt-6">
              We are here for you! Take the first step towards your digital success.
            </p>
          </motion.div>

          {/* Empty div for bottom spacing */}
          <div className="text-white/50 text-sm z-10">
           
          </div>
        </div>

        {/* 2. Right Side: Enquiry Form */}
        <div className="p-12 bg-[#1a1a1a] flex flex-col justify-center relative overflow-hidden">
          
          <motion.div
            variants={formContainerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md mx-auto"
          >
            {/* Form Header */}
            <motion.div variants={formItemVariants}> {/* <DUMMY_TAG> ko theek karke </motion.div> kar diya gaya hai */}
              <h2 className="text-3xl font-bold text-white mb-2">Get A Free Consultation</h2>
              <p className="text-gray-400 mb-6">Enter your details and our team will contact you.</p>
            </motion.div>
            
            {/* Form (Using your fields) */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name */}
              <motion.div variants={formItemVariants} className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Full Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500 text-sm" 
                />
              </motion.div>

              {/* Phone & Email (Side-by-side) */}
              <motion.div variants={formItemVariants} className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Contact Number" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500 text-sm" 
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email address" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500 text-sm" 
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={formItemVariants} className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-500 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message / Project Details"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-white placeholder-gray-500 text-sm min-h-[120px] resize-y"
                />
              </motion.div>

              {/* Feedback Message */}
              {message.text && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`rounded-lg p-3 text-sm font-medium ${
                    message.type === 'success'
                      ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30'
                      : 'bg-red-500/20 text-red-200 border border-red-500/30'
                  }`}
                >
                  {message.text}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div variants={formItemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-lg transition-all duration-300 ${
                    loading ? 'opacity-70 cursor-wait' : ''
                  }`}
                >
                  {loading ? 'Sending...' : 'Submit Request'}
                </motion.button>
              </motion.div>

            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnquiryForm;
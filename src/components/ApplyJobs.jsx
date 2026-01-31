import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCloudUpload, HiCheckCircle } from "react-icons/hi";

const ApplyJobs = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: "", email: "", phoneNumber: "", skills: "", experience: "", resume: null, jobId: jobId
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, resume: file });
    } else {
      toast.error("Please upload a valid PDF file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resume) return toast.error("Please upload a resume.");
    setIsSubmitting(true);
    
    const apiFormData = new FormData();
    Object.keys(formData).forEach(key => apiFormData.append(key, formData[key]));

    try {
      const response = await axios.post("https://ecoavenstra-be.onrender.com/api/v1/employer/apply-job", apiFormData);
      if (response.status === 200 || response.status === 201) {
        setIsSubmitted(true);
      }
    } catch (error) {
      toast.error("Error submitting application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Modern Dark Input Styles
  const labelStyle = "text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 block ml-1";
  const inputStyle = "w-full bg-[#151515] border border-white/5 p-4 rounded-xl text-white outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition-all placeholder-gray-700 text-sm";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <Toaster position="top-center" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative"
      >
        {/* Glow effect inside modal */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white tracking-tight">Apply for Role</h2>
                  <p className="text-gray-500 text-sm mt-1">Fill in your details to start the process.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyle}>Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputStyle} placeholder="Full Name" />
                    </div>
                    <div>
                      <label className={labelStyle}>Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyle} placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelStyle}>Phone</label>
                      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className={inputStyle} placeholder="+91 ..." />
                    </div>
                    <div>
                      <label className={labelStyle}>Experience</label>
                      <input type="number" name="experience" value={formData.experience} onChange={handleChange} required className={inputStyle} placeholder="Years" />
                    </div>
                  </div>

                  <div>
                    <label className={labelStyle}>Key Skills</label>
                    <textarea name="skills" value={formData.skills} onChange={handleChange} required className={`${inputStyle} h-24 resize-none`} placeholder="e.g. React, Node.js, CSS" />
                  </div>

                  <div>
                    <label className={labelStyle}>Resume (PDF)</label>
                    <div className="relative group border-2 border-dashed border-white/5 rounded-xl p-6 hover:bg-white/[0.02] hover:border-white/20 transition-all flex flex-col items-center justify-center cursor-pointer">
                      <input type="file" accept="application/pdf" onChange={handleFileChange} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <HiOutlineCloudUpload className="text-3xl text-gray-600 group-hover:text-white transition-colors mb-2" />
                      <p className="text-xs text-gray-500 group-hover:text-gray-300 truncate max-w-full px-2">
                        {formData.resume ? formData.resume.name : "Click to upload CV"}
                      </p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-xl shadow-lg hover:bg-gray-200 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Processing..." : "Submit Application"}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                    <HiCheckCircle className="text-5xl text-green-500" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">Application Sent!</h2>
                <p className="text-gray-500 mb-8 px-6">
                  We've received your submission. Our team will get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ApplyJobs;
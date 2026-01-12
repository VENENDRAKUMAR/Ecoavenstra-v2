import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { HiOutlineCloudUpload } from "react-icons/hi";

const ApplyJobs = ({ jobId }) => {
  const [formData, setFormData] = useState({
    name: "", email: "", phoneNumber: "", skills: "", experience: "", resume: null, jobId: jobId
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      if (response.status === 200) {
        toast.success("Applied successfully!");
        setFormData({ name: "", email: "", phoneNumber: "", skills: "", experience: "", resume: null, jobId: jobId });
      }
    } catch (error) {
      toast.error("Error submitting application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Graphy Style Input Classes
  const labelStyle = "text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2 block";
  const inputStyle = "w-full bg-white/[0.03] border border-white/10 p-3.5 rounded-xl text-white outline-none focus:bg-white/[0.07] focus:border-white/20 transition-all placeholder-gray-600";

  return (
    <div className="flex items-center justify-center p-4 bg-[#050505]">
      <Toaster position="top-center" />
      
      {/* Main Glass Card - Inspired by Graphy Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-[#0d0d0d]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl shadow-black"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Join Our <span className="text-gray-400">Vision</span></h2>
          <p className="text-gray-500 text-sm mt-2">Submit your details to start your journey with us.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputStyle} placeholder="John Doe" />
            </div>
            <div>
              <label className={labelStyle}>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputStyle} placeholder="john@example.com" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelStyle}>Phone Number</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className={inputStyle} placeholder="+91 00000 00000" />
            </div>
            <div>
              <label className={labelStyle}>Experience (Years)</label>
              <input type="number" name="experience" value={formData.experience} onChange={handleChange} required className={inputStyle} placeholder="2" />
            </div>
          </div>

          <div>
            <label className={labelStyle}>Key Skills</label>
            <textarea name="skills" value={formData.skills} onChange={handleChange} required className={`${inputStyle} h-28 resize-none`} placeholder="React, Node.js, UI/UX..." />
          </div>

          {/* Minimalist File Upload */}
          <div>
            <label className={labelStyle}>Resume (PDF Only)</label>
            <div className="relative group border-2 border-dashed border-white/5 rounded-2xl p-6 hover:bg-white/[0.02] transition-all flex flex-col items-center justify-center">
              <input type="file" accept="application/pdf" onChange={handleFileChange} required className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
              <HiOutlineCloudUpload className="text-3xl text-gray-500 group-hover:text-white mb-2" />
              <p className="text-sm text-gray-400">{formData.resume ? formData.resume.name : "Choose PDF file"}</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all transform active:scale-[0.98] disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ApplyJobs;
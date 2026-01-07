import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsArrowLeft, BsBriefcase, BsGeoAlt, BsCashStack, BsClock } from 'react-icons/bs';
import "./Spinner.css";
import Modal from './Home page/Modal';
import ApplyJobs from './ApplyJobs';

const JobDescription = () => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [jobId, setJobId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://ecoavenstra-be.onrender.com/api/v1/admin/jobs/${id}`);
        setJob(response.data.job);
        setJobId(response?.data?.job?.id);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch job details. Please try again later.');
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading) return (
    <div className='h-screen flex w-full justify-center items-center bg-[#050505]'>
      <div className="spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  );

  if (error) return (
    <div className='h-screen flex flex-col justify-center items-center text-white bg-[#050505]'>
      <p className="text-xl opacity-50 mb-4">{error}</p>
      <button onClick={() => navigate(-1)} className="text-blue-400 underline">Go Back</button>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#050505] text-white pb-20"
    >
      {/* Top Header Section */}
      <div className="w-full bg-gradient-to-b from-blue-600/10 to-transparent border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group"
          >
            <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Jobs
          </button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">
                {job.jobType}
              </span>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4">
                {job.jobTitle}
              </h1>
              <p className="text-xl text-white/60 font-medium flex items-center gap-2">
                <BsBriefcase className="text-blue-500" /> {job.companyName} • {job.jobLocation}
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-10 py-4 rounded-2xl font-black uppercase italic tracking-tight hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-blue-600/10"
              onClick={() => setIsModalOpen(true)}
            >
              Apply for this role
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Side: Description */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-6">// Job Overview</h2>
            <div className="prose prose-invert max-w-none text-white/70 leading-relaxed text-lg whitespace-pre-wrap">
              {job.jobDescription}
            </div>
          </section>

          <section className="p-8 rounded-[2rem] bg-white/5 border border-white/10">
            <h3 className="text-xl font-bold italic mb-4">What You Will Do</h3>
            <p className="text-white/60 leading-relaxed">
              As a {job.jobTitle} at {job.companyName}, you will be responsible for driving innovation and maintaining high standards in {job.jobLocation}. 
              We are looking for someone who is passionate, disciplined, and ready to grow.
            </p>
          </section>
        </div>

        {/* Right Side: Quick Info Sidebar */}
        <div className="space-y-6">
          <div className="p-8 rounded-[2.5rem] bg-[#0e0e0e] border border-white/5 sticky top-10">
            <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-8">Role Details</h3>
            
            <div className="space-y-6">
              <InfoItem icon={<BsCashStack />} label="Salary Range" value={job.salaryRange || "Competitive"} />
              <InfoItem icon={<BsGeoAlt />} label="Location" value={job.jobLocation} />
              <InfoItem icon={<BsClock />} label="Job Type" value={job.jobType} />
              <InfoItem icon={<BsBriefcase />} label="Category" value="Engineering / Design" />
            </div>

            <hr className="my-8 border-white/5" />

            <div className="bg-blue-600/5 p-4 rounded-2xl border border-blue-500/20">
              <p className="text-[10px] text-blue-400 font-bold uppercase mb-2">Hiring Status</p>
              <p className="text-sm text-white/80">Actively reviewing applications for this position.</p>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-2">
           <ApplyJobs jobId={jobId} />
        </div>
      </Modal>
    </motion.div>
  );
};

/* Helper Component */
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500">
      {icon}
    </div>
    <div>
      <p className="text-[10px] uppercase font-bold text-white/30 tracking-wider">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  </div>
);

export default JobDescription;
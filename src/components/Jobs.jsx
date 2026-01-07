import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsBuilding, BsGeoAlt, BsCashStack, BsClock } from "react-icons/bs";
import { FaFilter, FaTimes, FaArrowRight } from "react-icons/fa";
import "./Spinner.css";

// Images (Ensure these paths are correct in your public folder)
import job1 from "/images/1st image.png";
import job2 from "/images/2ed image.webp";
import job3 from "/images/3ed image.webp";

const categories = [
  { id: 1, title: "Full Time Jobs", image: job1, trending: "TRENDING AT #1", color: "from-blue-600/20" },
  { id: 2, title: "Internship", image: job2, trending: "TRENDING AT #2", color: "from-emerald-600/20" },
  { id: 3, title: "Part Time Jobs", image: job3, trending: "TRENDING AT #3", color: "from-purple-600/20" },
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [jobTypes, setJobTypes] = useState({ fullTime: false, partTime: false, Internship: false });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://ecoavenstra-be.onrender.com/api/v1/admin/jobs");
        setJobs(data.jobs);
        setFilteredJobs(data.jobs.filter((j) => j.isApproved));
      } catch (err) {
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const result = jobs.filter((job) => {
      if (!job.isApproved) return false;
      const matchesProfile = job.jobTitle.toLowerCase().includes(profile.toLowerCase());
      const matchesLocation = job.jobLocation.toLowerCase().includes(location.toLowerCase());
      const matchesType = 
        (!jobTypes.fullTime || job.jobType.toLowerCase() === "full-time") &&
        (!jobTypes.partTime || job.jobType.toLowerCase() === "part-time") &&
        (!jobTypes.Internship || job.jobType.toLowerCase() === "internship");
      return matchesProfile && matchesLocation && matchesType;
    });
    setFilteredJobs(result);
  }, [profile, location, jobTypes, jobs]);

  if (loading) return (
    <div className="h-screen flex w-full justify-center items-center bg-[#050505]">
      <div className="spinner"><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  );

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden mt-12">
      
      {/* 1. HERO CATEGORIES */}
      <section className="container mx-auto px-6 py-12">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-black mb-12 italic uppercase tracking-tighter"
        >
          Popular <span className="text-blue-500 text-stroke-white">Searches</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative group h-64 rounded-3xl p-8 bg-gradient-to-br ${cat.color} to-[#111] border border-white/5 overflow-hidden cursor-pointer`}
            >
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-blue-400 tracking-widest">{cat.trending}</span>
                <h3 className="text-3xl font-black uppercase italic mt-2 leading-none">{cat.title}</h3>
                <button className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest group-hover:text-blue-400 transition-colors">
                  Explore <FaArrowRight />
                </button>
              </div>
              <img src={cat.image} className="absolute bottom-0 right-0 w-32 h-32 md:w-44 md:h-44 object-contain opacity-50 group-hover:opacity-100 transition-opacity" alt="" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container mx-auto px-6 pb-20">
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center mb-6 bg-[#111] p-4 rounded-2xl border border-white/5">
          <span className="font-bold">Find your next role</span>
          <button onClick={() => setIsFilterOpen(true)} className="bg-blue-600 p-3 rounded-xl"><FaFilter /></button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 3. DESKTOP FILTERS / MOBILE DRAWER */}
          <AnimatePresence>
            {(isFilterOpen || window.innerWidth > 768) && (
              <motion.aside 
                initial={window.innerWidth < 768 ? { x: -300 } : { opacity: 0 }}
                animate={window.innerWidth < 768 ? { x: 0 } : { opacity: 1 }}
                exit={{ x: -300 }}
                className={`
                  fixed inset-0 z-50 bg-[#050505] p-8 md:relative md:inset-auto md:z-0 md:bg-transparent md:p-0
                  md:w-1/4 lg:w-1/5 space-y-8 overflow-y-auto
                  ${isFilterOpen ? 'block' : 'hidden md:block'}
                `}
              >
                <div className="flex justify-between items-center md:hidden mb-8">
                  <h2 className="text-2xl font-black italic">FILTERS</h2>
                  <button onClick={() => setIsFilterOpen(false)} className="text-2xl"><FaTimes /></button>
                </div>

                <div className="space-y-6">
                  <FilterGroup label="Job Profile">
                    <input 
                      type="text" 
                      placeholder="e.g. Designer" 
                      className="w-full bg-[#111] border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all"
                      value={profile} onChange={(e) => setProfile(e.target.value)}
                    />
                  </FilterGroup>

                  <FilterGroup label="Location">
                    <input 
                      type="text" 
                      placeholder="e.g. Remote" 
                      className="w-full bg-[#111] border border-white/10 p-4 rounded-2xl focus:border-blue-500 outline-none transition-all"
                      value={location} onChange={(e) => setLocation(e.target.value)}
                    />
                  </FilterGroup>

                  <FilterGroup label="Employment Type">
                    <div className="space-y-3 pt-2">
                      {['fullTime', 'partTime', 'Internship'].map((type) => (
                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                          <input 
                            type="checkbox" 
                            className="w-5 h-5 rounded-md accent-blue-600" 
                            checked={jobTypes[type]}
                            onChange={() => setJobTypes(p => ({...p, [type]: !p[type]}))}
                          />
                          <span className="text-white/60 group-hover:text-white capitalize">
                            {type.replace('fullTime', 'Full-time').replace('partTime', 'Part-time')}
                          </span>
                        </label>
                      ))}
                    </div>
                  </FilterGroup>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* 4. JOB LISTINGS */}
          <div className="flex-1 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 border-2 border-dashed border-white/5 rounded-3xl">
                  <p className="text-white/40">No matching opportunities found.</p>
                </motion.div>
              ) : (
                filteredJobs.map((job) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={job.id}
                    className="group bg-[#0e0e0e] border border-white/5 p-6 md:p-8 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500"
                  >
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex gap-6">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 transition-colors">
                          <BsBuilding />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold italic uppercase">{job.jobTitle}</h2>
                          <p className="text-blue-400 font-mono text-xs uppercase tracking-widest">{job.companyName}</p>
                          
                          <div className="flex flex-wrap gap-4 mt-6">
                            <JobTag icon={<BsGeoAlt />} text={job.jobLocation} />
                            <JobTag icon={<BsClock />} text={job.jobType} />
                            <JobTag icon={<BsCashStack />} text={job.salaryRange} />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-row md:flex-col justify-between items-end">
                        <span className="text-[10px] text-white/30 font-mono uppercase">{new Date(job.createdAt).toLocaleDateString()}</span>
                        <Link to={`/jobs/job/${job.id}`} className="w-full md:w-auto">
                          <button className="w-full bg-white text-black font-black uppercase italic px-8 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                            Apply
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* 5. USER PROFILE PANEL (Sticky Desktop) */}
          <div className="hidden lg:block w-1/4">
            <div className="sticky top-10 bg-[#0e0e0e] border border-white/5 rounded-[2.5rem] p-8 text-center overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600" />
               <img 
                 src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg" 
                 className="w-24 h-24 rounded-3xl mx-auto mb-6 border-4 border-white/5 object-cover" 
                 alt="Avatar"
               />
               <h3 className="text-xl font-black italic uppercase">{localStorage.getItem("profile_Name") || "User"}</h3>
               <p className="text-white/40 text-xs mb-8">{localStorage.getItem("profile_Email")}</p>
               
               <div className="space-y-2">
                 <button className="w-full bg-white/5 py-3 rounded-xl hover:bg-white/10 transition-all font-bold text-xs uppercase tracking-widest">
                   Edit Profile
                 </button>
                 <button className="w-full bg-blue-600/10 text-blue-400 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-all font-bold text-xs uppercase tracking-widest">
                   My Applications
                 </button>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

/* --- MINI COMPONENTS --- */
const FilterGroup = ({ label, children }) => (
  <div className="space-y-3">
    <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] ml-2">{label}</h4>
    {children}
  </div>
);

const JobTag = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/5 text-white/70">
    <span className="text-blue-500">{icon}</span>
    {text}
  </div>
);

export default Jobs;
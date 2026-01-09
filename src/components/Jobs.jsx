import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsBuilding, BsGeoAlt, BsCashStack, BsClock, BsSearch, BsArrowRight } from "react-icons/bs";
import { FaFilter, FaTimes, FaFire } from "react-icons/fa";
import "./Spinner.css";

const categories = [
  { id: 1, title: "Full Time", count: "120+ Roles", trending: "STABLE GROWTH", color: "from-blue-600/20" },
  { id: 2, title: "Internship", count: "45+ Openings", trending: "FAST TRACK", color: "from-blue-600/20" },
  { id: 3, title: "Remote", count: "80+ Jobs", trending: "GLOBAL ACCESS", color: "from-emerald-600/20" },
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
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
        console.error("Fetch Error");
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
    <div className="w-full min-h-screen bg-[#030303] text-white selection:bg-blue-500">
      
      {/* 1. KINETIC HERO HEADER */}
      <section className="pt-32 pb-16 px-6 md:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="text-blue-500 font-mono text-xs tracking-[0.5em] capatalize mb-4 block underline underline-offset-8">Career Protocol</span>
              <h1 className="text-4xl md:text-[8vw] font-lite capatalize tracking-tighter leading-[0.8]">
                Join The  <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20 ">Team.</span>
              </h1>
            </div>
            <div className="flex gap-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                 <p className="text-3xl font-lite">{filteredJobs.length}</p>
                 <p className="text-[10px] text-white/40 capatalize tracking-widest font-mono">Live Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRENDING TRACKS */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              whileHover={{ scale: 0.98 }}
              className={`relative h-48 rounded-[2.5rem] p-8 bg-gradient-to-br ${cat.color} to-zinc-900/40 border border-white/10 overflow-hidden cursor-pointer group`}
            >
              <div className="flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-lite text-blue-400 tracking-tighter bg-blue-500/10 px-3 py-1 rounded-full flex items-center gap-2">
                    <FaFire /> {cat.trending}
                  </span>
                  <BsArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </div>
                <div>
                  <h3 className="text-2xl font-lite capatalize  ">{cat.title}</h3>
                  <p className="text-xs text-white/40 font-mono tracking-widest">{cat.count}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FILTER & JOB GRID */}
      <div className="px-6 md:px-20 pb-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* SEARCH & FILTERS SIDEBAR */}
          <aside className="lg:w-1/4 space-y-10">
            <div className="space-y-8 sticky top-32">
              <FilterBox label="Search Role">
                <div className="relative">
                  <BsSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                  <input 
                    type="text" 
                    placeholder="UI Designer..." 
                    className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl focus:border-blue-500 outline-none transition-all placeholder:text-white/20"
                    value={profile} onChange={(e) => setProfile(e.target.value)}
                  />
                </div>
              </FilterBox>

              <FilterBox label="Geography">
                <div className="relative">
                  <BsGeoAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                  <input 
                    type="text" 
                    placeholder="Remote / Delhi" 
                    className="w-full bg-white/5 border border-white/10 p-5 pl-12 rounded-2xl focus:border-blue-500 outline-none transition-all placeholder:text-white/20"
                    value={location} onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </FilterBox>

              <FilterBox label="Commitment">
                <div className="grid grid-cols-1 gap-3">
                  {['fullTime', 'partTime', 'Internship'].map((type) => (
                    <label key={type} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-white/10 transition-all">
                      <span className="text-xs font-lite capatalize tracking-widest text-white/60">
                         {type.replace('fullTime', 'Full-time').replace('partTime', 'Part-time')}
                      </span>
                      <input 
                        type="checkbox" 
                        className="w-5 h-5 accent-blue-600 rounded-lg" 
                        checked={jobTypes[type]}
                        onChange={() => setJobTypes(p => ({...p, [type]: !p[type]}))}
                      />
                    </label>
                  ))}
                </div>
              </FilterBox>
            </div>
          </aside>

          {/* MAIN JOB LISTINGS */}
          <div className="flex-1">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length === 0 ? (
                <div className="h-64 border border-dashed border-white/10 rounded-[3rem] flex items-center justify-center">
                   <p className="text-white/20 font-mono  ">SYSTEM ERROR: NO ROLES FOUND</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {filteredJobs.map((job) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={job.id}
                      className="group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-[3rem] hover:border-blue-500/40 transition-all duration-700"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <div className="flex items-center gap-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-zinc-800 to-black rounded-[2rem] border border-white/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-500">
                             <BsBuilding className="text-white/20 group-hover:text-blue-500 transition-colors" />
                          </div>
                          <div>
                            <p className="text-blue-500 font-mono text-[10px] tracking-widest capatalize mb-2">{job.companyName}</p>
                            <h2 className="text-3xl font-lite capatalize tracking-tighter  ">{job.jobTitle}</h2>
                            <div className="flex flex-wrap gap-3 mt-4">
                              <span className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-lite text-white/40 capatalize tracking-widest flex items-center gap-2 border border-white/5">
                                <BsGeoAlt /> {job.jobLocation}
                              </span>
                              <span className="px-4 py-1.5 bg-blue-500/10 rounded-full text-[10px] font-lite text-blue-400 capatalize tracking-widest flex items-center gap-2 border border-blue-500/20">
                                <BsClock /> {job.jobType}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-auto flex flex-col items-end gap-4">
                          <div className="text-right">
                             <p className="text-xs font-mono text-white/30 tracking-widest mb-1">OFFER RANGE</p>
                             <p className="text-xl font-lite   tracking-tighter">{job.salaryRange}</p>
                          </div>
                          <Link to={`/jobs/job/${job.id}`} className="w-full">
                            <button className="w-full md:w-48 bg-white text-black font-lite capatalize   py-4 rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform active:scale-95">
                              Apply Now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

const FilterBox = ({ label, children }) => (
  <div className="space-y-4">
    <h4 className="text-[10px] font-lite text-white/30 capatalize tracking-[0.4em] ml-2 flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]" /> {label}
    </h4>
    {children}
  </div>
);

export default Jobs;
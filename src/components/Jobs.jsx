import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Spinner.css";
import { BsBuilding } from "react-icons/bs";
import { FaFilter, FaTimes } from "react-icons/fa";
import job1 from "/images/1st image.png";
import job2 from "/images/2ed image.webp";
import job3 from "/images/3ed image.webp";

const categories = [
  {
    id: 1,
    title: "Full Time Jobs",
    image: job1,
    trending: "TRENDING AT #1",
  },
  {
    id: 2,
    title: "Internship⠀⠀",
    image:job2 ,
    trending: "TRENDING AT #2",
  },
  {
    id: 3,
    title: "Part Time Jobs",
    image:  job3 ,
    trending: "TRENDING AT #3",
  },
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [profile, setProfile] = useState("");
  const [location, setLocation] = useState("");

  // Mobile filter toggle
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Job type filters
  const [jobTypes, setJobTypes] = useState({
    fullTime: false,
    partTime: false,
    Internship: false,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://ecoavenstra-be.onrender.com/api/v1/admin/jobs"
        );
        setJobs(response.data.jobs);
        setFilteredJobs(response.data.jobs.filter((job) => job.isApproved));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Failed to fetch jobs. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Apply filters dynamically
  useEffect(() => {
    const filterJobs = () => {
      const isAnyFilterActive =
        profile ||
        location ||
        jobTypes.fullTime ||
        jobTypes.partTime ||
        jobTypes.Internship;

      if (!isAnyFilterActive) {
        setFilteredJobs(jobs.filter((job) => job.isApproved));
        return;
      }

      const result = jobs.filter((job) => {
        if (!job.isApproved) return false;

        const matchesProfile = profile
          ? job.jobTitle.toLowerCase().includes(profile.toLowerCase())
          : true;
        const matchesLocation = location
          ? job.jobLocation.toLowerCase().includes(location.toLowerCase())
          : true;

        const matchesJobTypes =
          (!jobTypes.fullTime || job.jobType.toLowerCase() === "full-time") &&
          (!jobTypes.partTime || job.jobType.toLowerCase() === "part-time") &&
          (!jobTypes.Internship || job.jobType.toLowerCase() === "internship");

        return matchesProfile && matchesLocation && matchesJobTypes;
      });

      setFilteredJobs(result);
    };

    filterJobs();
  }, [profile, location, jobTypes, jobs]);

  // Loading and error rendering
  if (loading)
    return (
      <div className="h-screen flex w-full justify-center items-center">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  if (error) return <div className="text-black">{error}</div>;

  return (
    <div className="w-full px-4 md:px-10 py-10 bg-[#141414] ">
      {/* Categories Section */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Popular Searches on Ecoavenstra !
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-2xl shadow-lg shadow-[#1c1c1c] h-64 py-4 bg-[#101010] p-6 transition duration-300 group"
            >
              <div className="space-y-4">
                <div className="text-sm text-gray-200">
                  {category.trending}
                </div>

                <h2 className="text-2xl md:text-3xl hidden md:flex  font-bold text-blue-300">
                  {category.title}
                </h2>

                <h2
                  className="text-4xl pt-8 md:pt-0 md:text-6xl font-bold text-transparent md:absolute md:right-[-50px] md:group-hover:right-[-30px] md:group-hover:transition-transform md:group-hover:ease-in-out md:duration-1000"
                  style={{
                    WebkitTextStroke: "1px #5e5858",
                    textShadow: "0px 0px 10px rgba(255, 255, 255, 0)",
                  }}
                >
                  {category.title}
                </h2>

                <button className="text-sm absolute bottom-5 inline-flex items-center rounded-lg py-2 text-white px-2 group-hover:bg-green-700 transition-colors">
                  View all
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40">
                <img
                  src={category.image}
                  alt={category.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden flex justify-end mb-4">
        <button 
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="bg-[#1c3987] text-white p-2 rounded-md flex items-center"
        >
          {isFilterOpen ? <FaTimes /> : <FaFilter />}
          <span className="ml-2">{isFilterOpen ? 'Close' : 'Filters'}</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Filters Section */}
        <div className={`
          ${isFilterOpen ? 'block' : 'hidden'} 
          md:block 
          md:w-1/4 
          bg-[#0e0e0e] 
          shadow-lg 
          shadow-[#1c1c1c] 
          text-black 
          filters 
          border 
          h-fit 
          border-black 
          rounded-2xl 
          p-4 
          mb-4 
          md:mb-0
        `}>
          <div className="flex justify-center items-center gap-1">
            <div className="text-white">
              <FaFilter />
            </div>
            <div className="text-xl font-bold text-white">Filters</div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1 text-white">Profile</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-white bg-[#1c1c1c]"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              placeholder="e.g., Graphic Design"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1 text-white">Location</label>
            <input
              type="text"
              className="w-full p-2 border rounded text-white bg-[#1c1c1c]"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., Delhi"
            />
          </div>

          {/* Job Types Filters */}
          <div className="mb-4">
            <label className="block text-base font-semibold text-white">
              Job Types
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={jobTypes.fullTime}
                onChange={() =>
                  setJobTypes((prev) => ({ ...prev, fullTime: !prev.fullTime }))
                }
              />
              <div className="text-white">Full-time</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={jobTypes.partTime}
                onChange={() =>
                  setJobTypes((prev) => ({ ...prev, partTime: !prev.partTime }))
                }
              />
              <span className="text-white">Part-time</span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 text-white"
                checked={jobTypes.Internship}
                onChange={() =>
                  setJobTypes((prev) => ({
                    ...prev,
                    Internship: !prev.Internship,
                  }))
                }
              />
              <span className="text-white">Internship</span>
            </div>
          </div>
        </div>

        {/* Jobs and Profile Section */}
        <div className="flex flex-col md:flex-row w-full">
          {/* Jobs Listing Section */}
          <div className="md:px-10 w-full md:w-2/3">
            {filteredJobs.length === 0 ? (
              <div className="text-white text-center text-xl">
                No jobs found matching your criteria
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-[#0e0e0e] shadow-lg shadow-[#1c1c1c] p-4 rounded-lg mb-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#b4b4b4] rounded-md">
                      <BsBuilding />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-semibold text-white">
                        {job.jobTitle}
                      </div>
                      <div className="text-xs text-white">{job.companyName}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-300 flex gap-2">
                    <div>Job Openings -</div>
                    <div>{job.vacancy}</div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">
                    {new Date(job.createdAt).toLocaleString()} ago
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <div className="inline-flex items-center text-sm px-3 py-1 rounded-md bg-[#eeeeee]">
                      {job.jobType}
                    </div>
                    <div className="inline-flex items-center text-sm px-3 py-1 rounded-md bg-[#eeeeee]">
                      {job.jobLocation}
                    </div>
                    <div className="inline-flex items-center text-sm px-3 py-1 rounded-md bg-[#eeeeee]">
                      {job.salaryRange}
                    </div>
                  </div>
                  <Link to={`/jobs/job/${job.id}`}>
                    <button className="mt-2 border border-white px-2 rounded-lg text-white hover:bg-blue-900 text-sm py-1">
                      Apply Now
                    </button>
                  </Link>
                </div>
              ))
            )}
          </div>

          {/* Profile Section */}
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <div className="p-4 rounded-lg bg-[#0e0e0e] shadow-lg shadow-[#1c1c1c]">
              {/* Progress Circle */}
              <div className="relative w-16 h-16 mx-auto">
                <img
                  src="https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?t=st=1734104989~exp=1734108589~hmac=9aa35a3532d9b4755e5fcf91a2603ab186c02a479fea7678a96aeeba4077ebb1&w=740"
                  alt="Profile"
                  className="rounded-full object-cover"
                />
              </div>

              {/* User Info */}
              <div className="text-center mt-4">
                <h3 className="text-lg font-medium text-white">
                  {localStorage.getItem("profile_Name")}
                </h3>
                <p className="text-sm text-gray-500">
                  {localStorage.getItem("profile_Email")}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {localStorage.getItem("profile_Role")}
                </p>
              </div>

              {/* Button */}
              <button className="mt-4 w-full bg-[#1c3987] text-white py-2 rounded-md hover:bg-blue-700">
                Your Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
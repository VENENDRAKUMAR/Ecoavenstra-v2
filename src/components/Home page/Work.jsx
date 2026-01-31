import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Code2, 
  MonitorPlay, 
  Camera, 
  Briefcase, 
  MapPin,
  User,
  Hotel,
  Megaphone,
  Building2,
  Home,
  ShoppingBag
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecoavenstra",
    category: "Full-Stack Solution",
    icon: <Globe className="w-5 h-5" />,
    description: "A leading provider of innovative environmental technology solutions and sustainable products.",
    image: "/images/ecoFill.png",
    link: "https://www.ecoavenstra.com",
    color: "#10b981",
  },
  {
    id: 2,
    title: "LaisaLife",
    category: "Corporate R&D",
    icon: <Code2 className="w-5 h-5" />,
    description: "Pioneering life sciences hub specializing in high-quality manufacturing research and development.",
    image: "/images/laisalife.png",
    link: "https://www.laisalife.com",
    color: "#3b82f6",
  },
  {
    id: 3,
    title: "VbizGro",
    category: "Growth & Marketing",
    icon: <MonitorPlay className="w-5 h-5" />,
    description: "Digital marketing powerhouse delivering ROI-driven ads and expert social media management.",
    image: "/images/vbizgro.png",
    link: "https://vbizgro.com",
    color: "#8b5cf6",
  },
  {
    id: 4,
    title: "Urban Kind",
    category: "Hotel Booking",
    icon: <Hotel className="w-5 h-5" />,
    description: "Seamless hotel room booking experience with premium lifestyle integration and luxury stays.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "#10b981",
  },
  {
    id: 5,
    title: "Vdoads",
    category: "Ads Agency & Platform",
    icon: <Megaphone className="w-5 h-5" />,
    description: "A dynamic platform for video advertising and digital marketing agency management.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "#f59e0b",
  },
  {
    id: 6,
    title: "Prestige Estate",
    category: "Real Estate",
    icon: <Building2 className="w-5 h-5" />,
    description: "Premium property management and real estate solutions for high-end luxury estates.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "#8b5cf6",
  },
  {
    id: 7,
    title: "Pro Hiring",
    category: "Recruitment",
    icon: <User className="w-5 h-5" />,
    description: "A modern platform connecting professionals with top companies for seamless hiring.",
    image: "/images/hiring.jpg",
    link: "#",
    color: "#3b82f6",
  },
  {
    id: 8,
    title: "LuxeEstate",
    category: "Luxury Living",
    icon: <Home className="w-5 h-5" />,
    description: "Finding your dream home in the most exclusive neighborhoods with personalized service.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "#ec4899",
  },
  {
    id: 9,
    title: "Marketplace",
    category: "E-Commerce",
    icon: <ShoppingBag className="w-5 h-5" />,
    description: "A multi-vendor digital marketplace designed for modern retail and global trade scaling.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    color: "#ef4444",
  },
  {
    id: 10,
    title: "RunDevlopers",
    category: "Real Estate",
    icon: <MapPin className="w-5 h-5" />,
    description: "Premier land developers and colonizers focused on modern community building.",
    image: "/images/rundevlopers.png",
    link: "https://rundevlopers.com/",
    color: "#f97316",
  },
  {
    id: 11,
    title: "Skill2Hire",
    category: "Recruitment",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Bridging the gap between eco-conscious talent and recruiters.",
    image: "/images/skill2Hire.png",
    link: "https://ecojobboard.vercel.app/",
    color: "#6366f1",
  },
  {
    id: 12,
    title: "PhotoFolio",
    category: "Photography Cloud",
    icon: <Camera className="w-5 h-5" />,
    description: "Premium web application for photographers to store and share high-res memories.",
    image: "/images/photofolio.png",
    link: "https://photo-folio-gold.vercel.app/",
    color: "#f43f5e",
  }
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Function to change slides
  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  }, []);

  // --- AUTO SCROLL LOGIC ---
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, [paginate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  // Clean horizontal slide variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      transition: { duration: 0.4 }
    }),
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col font-sans selection:bg-blue-500 overflow-hidden">
      
      {/* Background Glow - No noise/grain for cleaner look */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] transition-colors duration-1000"
          style={{ backgroundColor: projects[currentIndex].color }}
        />
      </div>

      <main className="flex-1 relative z-10 flex flex-col justify-center px-6 md:px-12 py-10">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Project Title and Category */}
          <div className="mb-12">
            <motion.p 
              key={`cat-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4"
            >
              {projects[currentIndex].category}
            </motion.p>
            <motion.h1 
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
            >
              {projects[currentIndex].title}
            </motion.h1>
          </div>

          <div className="relative h-[450px] md:h-[550px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex flex-col lg:flex-row gap-10 items-center"
              >
                {/* Image Container */}
                <div className="w-full lg:w-3/5 aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-md">
                    {projects[currentIndex].description}
                  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <a 
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform active:scale-95"
                    >
                      Visit Project
                    </a>
                    
                    {/* Navigation Buttons */}
                    <div className="flex gap-2">
                      <button 
                        onClick={() => paginate(-1)}
                        className="p-4 rounded-full border border-white/10 hover:bg-white/5"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={() => paginate(1)}
                        className="p-4 rounded-full border border-white/10 hover:bg-white/5"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer / Pagination Status */}
      <footer className="relative z-50 p-6 md:px-12 flex justify-between items-center border-t border-white/5">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button 
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${i === currentIndex ? "w-12 bg-blue-500" : "w-3 bg-white/20"}`}
            />
          ))}
        </div>
        <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
          Project {currentIndex + 1} / {projects.length}
        </div>
      </footer>
    </div>
  );
};

export default App;
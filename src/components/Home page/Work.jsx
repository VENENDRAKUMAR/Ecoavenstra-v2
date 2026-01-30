import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  Code2, 
  MonitorPlay, 
  Camera, 
  Briefcase, 
  TrendingUp,
  MapPin,
  User,
  Zap,
  MousePointer2,
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
    localPath: "/images/Urban.png",
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
    localPath: "/images/vdoads.png",
    link: "#",
    color: "#f59e0b",
  },
  {
    id: 5,
    title: "Prestige Estate",
    category: "Real Estate",
    icon: <Building2 className="w-5 h-5" />,
    description: "Premium property management and real estate solutions for high-end luxury estates.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    localPath: "/images/PrastigeEstate.png",
    link: "#",
    color: "#8b5cf6",
  },
  {
    id: 6,
    title: "LuxeEstate",
    category: "Luxury Living",
    icon: <Home className="w-5 h-5" />,
    description: "Finding your dream home in the most exclusive neighborhoods with personalized service.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    localPath: "/images/name.pmng",
    link: "#",
    color: "#ec4899",
  },
  {
    id: 7,
    title: "Marketplace",
    category: "E-Commerce",
    icon: <ShoppingBag className="w-5 h-5" />,
    description: "A multi-vendor digital marketplace designed for modern retail and global trade scaling.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
    localPath: "/images/marketplace.png",
    link: "#",
    color: "#ef4444",},
  {
    id: 8,
    title: "RunDevlopers",
    category: "Real Estate",
    icon: <MapPin className="w-5 h-5" />,
    description: "Premier land developers and colonizers based in Seoni, MP, focused on modern community building.",
    image: "/images/rundevlopers.png",
    link: "https://rundevlopers.com/",
    color: "#f97316",
  },
  {
    id:9,
    title: "Skill2Hire",
    category: "Recruitment",
    icon: <Briefcase className="w-5 h-5" />,
    description: "Bridging the gap between eco-conscious talent and recruiters with specialized hiring solutions.",
    image: "/images/skill2Hire.png",
    link: "https://ecojobboard.vercel.app/",
    color: "#6366f1",
  },
    {
    id: 10,
    title: "PhotoFolio",
    category: "Photography Cloud",
    icon: <Camera className="w-5 h-5" />,
    description: "Premium web application designed for photographers to securely store and share high-res memories.",
    image: "/images/photofolio.png",
    link: "https://photo-folio-gold.vercel.app/",
    color: "#f43f5e",
  },



  {
    id: 11,
    title: "iPod Classic",
    category: "Fin-Tech",
    icon: <TrendingUp className="w-5 h-5" />,
    description: "Sophisticated trading visualizer for real-time stock market analysis and portfolio management.",
    image: "/images/ipod1.png",
    link: "https://ipod-classic-two.vercel.app/",
    color: "#06b6d4",
  },
  // {
  //   id: 12,
  //   title: "Venedra Kumar",
  //   category: "Founder Portfolio",
  //   icon: <User className="w-5 h-5" />,
  //   description: "Official portfolio of Venedra Kumar, showcasing visionary leadership and strategic tech innovation.",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  //   link: "https://venedra-kumar.vercel.app/",
  //   color: "#3b82f6",
  // },
  // {
  //   id: 13,
  //   title: "Rahul Patle",
  //   category: "Developer Showcase",
  //   icon: <Zap className="w-5 h-5" />,
  //   description: "A creative digital space for Rahul Patle, highlighting cutting-edge web development and coding solutions.",
  //   image: "/images/Rahul.png",
  //   link: "https://www.rahulpatle.xyz/",
  //   color: "#f59e0b",
  // }
 




];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      rotateY: direction > 0 ? 45 : -45,
      opacity: 0,
      scale: 0.5,
    }),
    center: {
      zIndex: 1,
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        rotateY: { duration: 0.5 }
      },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      rotateY: direction < 0 ? 45 : -45,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col font-sans selection:bg-blue-500 overflow-x-hidden">
      
      {/* 3D Background Glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] transition-colors duration-1000"
          style={{ backgroundColor: projects[currentIndex].color }}
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

    

      <main className="flex-1 relative z-10 flex flex-col justify-center px-6 md:px-12 py-10">
        
        {/* Project Section with Perspective */}
        <div className="max-w-7xl mx-auto w-full" style={{ perspective: "2000px" }}>
          
          <div className="mb-12">
            <motion.p 
              key={`cat-${currentIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.5em] mb-4"
            >
              {projects[currentIndex].category}
            </motion.p>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
              {projects[currentIndex].title}
            </h1>
          </div>

          <div className="relative h-[400px] md:h-[600px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex flex-col lg:flex-row gap-10 items-center"
              >
                {/* Image Card with Hover 3D */}
                <motion.div 
                  className="w-full lg:w-3/5 aspect-video relative group cursor-none"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                    <img 
                      src={projects[currentIndex].image} 
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  {/* Custom Cursor Overlay for visual flair */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white text-black p-4 rounded-full flex items-center gap-2 font-bold text-xs uppercase tracking-tighter">
                      <MousePointer2 size={14} /> View Project
                    </div>
                  </div>
                </motion.div>

                {/* Description & Links */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-md"
                  >
                    {projects[currentIndex].description}
                  </motion.p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <a 
                      href={projects[currentIndex].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all transform active:scale-95"
                    >
                      Explore Case Study
                    </a>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => paginate(-1)}
                        className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={() => paginate(1)}
                        className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
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

      {/* Bottom Status Bar */}
      <footer className="relative z-50 p-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5">
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <div 
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${i === currentIndex ? "w-12 bg-blue-500" : "w-3 bg-white/20"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] tracking-widest text-white/40 uppercase">
          <div className="flex items-center gap-2">
            <span className="text-white">Active</span>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div>Project {currentIndex + 1} / {projects.length}</div>
          <div className="hidden md:block">© 2024 Portfolio Lab</div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;700;800&family=JetBrains+Mono&display=swap');
        body { background: #020202; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default App;
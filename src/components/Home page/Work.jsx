import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight, Globe, Code2, MonitorPlay } from "lucide-react";

const projects = [
  {
    id: 12,
    title: "Ecoavenstra",
    category: "Full-Stack Solution",
    icon: <Globe className="w-5 h-5" />,
    description: "Leading provider of innovative environmental technology solutions and sustainable eco-friendly products.",
    image: "/images/ecomain.png",
    link: "https://www.ecoavenstra.com",
    color: "from-green-500/20",
  },
  {
    id: 1,
    title: "LaisaLife Sciences",
    category: "Corporate R&D",
    icon: <Code2 className="w-5 h-5" />,
    description: "Innovative life sciences hub specializing in R&D and manufacturing of high-quality products.",
    image: "/images/laisalife.png",
    link: "https://www.laisalife.com",
    color: "from-blue-500/20",
  },
  {
    id: 8,
    title: "VbizGro Agency",
    category: "Growth & Marketing",
    icon: <MonitorPlay className="w-5 h-5" />,
    description: "Digital marketing powerhouse delivering ROI-driven ads and creative social media management.",
    image: "/images/vbizgro.png",
    link: "https://vbizgro.com",
    color: "from-purple-500/20",
  },
  // ... Baaki projects ke liye bhi ye same structure follow karo
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 45 : -45,
      transition: { duration: 0.5 },
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + projects.length) % projects.length);
  };

  return (
    <section className="relative min-h-screen bg-[#030303] text-white py-32 px-6 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Dynamic Background Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute inset-0 bg-gradient-to-b ${projects[currentIndex].color} to-transparent opacity-30 pointer-events-none blur-[120px]`}
        />
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-xs uppercase tracking-[0.5em] mb-4 block"
          >
            // Portfolio
          </motion.span>
          <h2 className="text-3xl md:text-8xl  tracking-tighter ">
            Featured <span className="text-white/20">Works</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative h-[500px] md:h-[650px] w-full perspective-1000">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                
                {/* Image Section with Glass Frame */}
                <div className="relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-video lg:aspect-square">
                  <motion.img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-blue-400">
                      {projects[currentIndex].icon}
                    </div>
                    <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                      {projects[currentIndex].category}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    {projects[currentIndex].title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                    {projects[currentIndex].description}
                  </p>

                  <div className="flex items-center gap-6">
                    <motion.a
                      href={projects[currentIndex].link}
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-white text-black font-black text-[10px] tracking-[0.3em] uppercase rounded-full flex items-center gap-3"
                    >
                      Explore Case Study <ExternalLink size={14} />
                    </motion.a>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={() => paginate(-1)}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button 
                        onClick={() => paginate(1)}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar & Indicators */}
        <div className="mt-20 flex flex-col items-center gap-4">
            <div className="flex gap-3">
            {projects.map((_, i) => (
                <button
                key={i}
                onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                }}
                className={`h-1 transition-all duration-500 rounded-full ${
                    i === currentIndex ? "w-12 bg-blue-500" : "w-4 bg-white/10"
                }`}
                />
            ))}
            </div>
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.5em] uppercase">
                {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
};

export default Work;
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// import AddBazaar from "/src/assets/AddBazaar.png";
// import MarketPlace from "/src/assets/Market.png";
// import EventX from "/src/assets/EventX.png";
// import LuxeEstate from "/src/assets/RE1.png";
// import PrestigeEstate from "/src/assets/RE2.png";
// import laisalife from "/src/assets/laisalife.png";
// import VdoAds from "/src/assets/VdoAds.png";
// import Ecoavenstra from "/src/assets/image.png";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const projects = [
    {
      id: 12,
      title: "Ecoavenstra",
      description:
        "Ecoavenstra is a leading provider of innovative solutions in the field of environmental technology, specializing in sustainable practices and eco-friendly products.",
      image: "/images/ecomain.png",
      link: "https://www.ecoavenstra.com",
    },
    {
      id: 1,
      title: "LaisaLife Sciences Pvt Ltd",
      description:
        "LaisaLife Sciences Pvt Ltd is a leading provider of innovative solutions in the life sciences industry, specializing in research and development, manufacturing, and distribution of high-quality products.",
      image:"/images/laisalife.png",
      link: "https://www.laisalife.com",
    },
    {
      id: 2,
      title: "VdoAds",
      description:
        "VdoAds is a platform where you can create a post and sell your product. Built with Next.js, Framer Motion, Redux, Express.js, Node.js, and Tailwind CSS.",
      image: "/images/VdoAds.png",
      link: "https://example.com/project1",
    },
    {
      id: 3,
      title: "EventX",
      description:
        "EventX is a modern event management platform built with React, Node.js, and Express.js, providing a seamless and user-friendly experience for event organizers and attendees.",
      image: "/images/EventX.png",
      link: "https://event-management-c59000r89-rahul-barves-projects.vercel.app/",
    },
    {
      id: 4,
      title: "MarketPlace",
      description:
        "Market Place is a full-stack e-commerce platform built with NextJS, Node.js, and Tailwind CSS. It offers a wide range of products, secure payment gateways, and a seamless shopping experience.",
      image: "/images/Market.png",
      link: "https://market-place-five-blond.vercel.app",
    },
    {
      id: 6,
      title: "LuxeEstate",
      description:
        "LuxeEstate is a modern portfolio platform designed for builders to showcase their projects and achievements.",
      image: "/images/RE1.png",
      link: "https://example.com/project1",
    },
    {
      id: 7,
      title: "PrestigeEstate",
      description:
        "PrestigeEstate is a portfolio platform designed for builders to showcase their projects and achievements beautifully.",
      image: "/images/RE2.png",
      link: "https://example.com/project1",
    },
{
  id: 8,
  title: "VbizGro – Digital Growth Agency",
  description:
    "VbizGro is a digital marketing powerhouse delivering ROI-driven ads, brand identity, social media management, and creative campaigns for businesses looking to scale fast.",
  image: "/images/vbizgro.png",
  link: "https://vbizgro.com",
},
{
  id: 9,
  title: "JobBoard – Talent Recruitment Hub",
  description:
    "JobBosard is a modern recruitment platform connecting top-tier talent with companies through AI-powered job matching, smart screening, and talent acquisition tools.",
  image: "/images/jobboard.png",
  link: "https://ecojobboard.vercel.app/",
}
,
{
  id: 10,
  title: "Creative Studio – Design & Branding Lab",
  description:
    "Creative Studio is your premium design hub offering branding, graphics, UI/UX, video editing, and visual storytelling to help brands look iconic and unforgettable.",
  image: "/images/creativestudio.png",
  link: "https://creative-digital-solution.vercel.app/",
}



  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (i) => {
    if (isAnimating || i === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(i);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 100) goToNext();
    else if (touchStartX.current - touchEndX.current < -100) goToPrevious();
  };

  const variants = {
    enter: { opacity: 0, x: 100, scale: 0.95 },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -100, scale: 0.95, transition: { duration: 0.5 } },
  };

  return (
   <div className="w-full min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#000] px-6 py-20 flex flex-col items-center justify-center">
  <h1 className="text-center text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight leading-tight">
    Our <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">Projects</span>
  </h1>

  <div
    className="relative w-full max-w-6xl h-[650px] md:h-[750px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,255,255,0.1)]"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
  >
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={projects[currentIndex].id}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        className="absolute inset-0 flex flex-col items-center justify-center px-6 md:px-12"
      >
        <motion.div
          className="w-full max-w-4xl overflow-hidden rounded-xl group border border-white/10 shadow-xl"
          whileHover={{ scale: 1.015 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="w-full h-auto object-cover aspect-[16/9]"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        </motion.div>

        <motion.div
          className="text-center mt-8 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {projects[currentIndex].title}
            </span>
          </h2>
          <p className="text-slate-300 mb-6 text-lg leading-relaxed">
            {projects[currentIndex].description}
          </p>
          <motion.a
            href={projects[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/30"
          >
            View Project
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </AnimatePresence>

    {/* Navigation Buttons */}
    <button
      onClick={goToPrevious}
      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-white/20 transition duration-300"
    >
      &#8592;
    </button>
    <button
      onClick={goToNext}
      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-white/20 transition duration-300"
    >
      &#8594;
    </button>

    {/* Dots */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
      {projects.map((_, i) => (
        <motion.button
          key={i}
          onClick={() => goToSlide(i)}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            i === currentIndex ? "bg-white w-8" : "bg-white/30 w-2.5"
          }`}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default Work;

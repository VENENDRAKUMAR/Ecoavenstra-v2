import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Ecoavenstra has been instrumental in helping us scale our business operations...",
    name: "Ravi Kumar",
    work: "Owner, RK Constructions",
  },
  {
    text: "Working with Ecoavenstra was a refreshing experience...",
    name: "Amanda Johnson",
    work: "Project Manager, GreenTech Innovations",
  },
  {
    text: "The team at Ecoavenstra has truly helped me bring my vision to life...",
    name: "Ankit Mehta",
    work: "Entrepreneur, Ankit Fashions",
  },
  {
    text: "Ecoavenstra provided exceptional service and delivered a solution...",
    name: "Sophie Martin",
    work: "CEO, Blue Horizon Ventures",
  },
  {
    text: "Ecoavenstra’s team is highly skilled and professional...",
    name: "Rajesh Sharma",
    work: "CTO, Tech Innovators Pvt Ltd",
  },
];

const Recommendation = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 opacity-20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-green-400 text-sm font-bold uppercase tracking-widest">Testimonial</h2>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 mb-4 leading-tight">
              Trust We Earn
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              We serve 100+ businesses across India with 100% satisfaction. At Ecoavenstra, we build trust through tailored tech, cinematic UI, and emotionally resonant design. Let your vision speak through our code.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full md:w-1/2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,255,255,0.1)]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-green-400 text-sm font-semibold uppercase tracking-wide">Our Happy Clients</h4>
                <h5 className="text-2xl font-bold text-white mt-2 mb-4">What Clients Say</h5>
                <p className="text-gray-300 leading-relaxed text-[17px]">{testimonials[current].text}</p>
                <div className="mt-6">
                  <p className="text-white font-bold text-lg">{testimonials[current].name}</p>
                  <p className="text-gray-400">{testimonials[current].work}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.198 3.686a1 1 0 00.95.69h3.887c.969 0 1.371 1.24.588 1.81l-3.148 2.324a1 1 0 00-.364 1.118l1.198 3.686c.3.921-.755 1.688-1.54 1.118l-3.148-2.324a1 1 0 00-1.175 0l-3.148 2.324c-.785.57-1.84-.197-1.54-1.118l1.198-3.686a1 1 0 00-.364-1.118L2.228 9.113c-.783-.57-.38-1.81.588-1.81h3.887a1 1 0 00.95-.69l1.198-3.686z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                    i === current ? 'bg-green-400 scale-125' : 'bg-gray-500'
                  }`}
                  onClick={() => setCurrent(i)}
                ></button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;

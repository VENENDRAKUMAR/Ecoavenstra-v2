import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Social from "./Social";
import Modal from "./Modal";
import ContactForm from "../ContactForm";

gsap.registerPlugin(ScrollTrigger);

const Typewriter = ({ text }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);
  return <span className="font-mono text-green-400">{displayed}</span>;
};

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroRef = useRef(null);
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll(".hero-text"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1, stagger: 0.15, ease: "power3.out" }
      );
    }

    if (blobRef1.current) {
      gsap.to(blobRef1.current, {
        yPercent: -8,
        scrollTrigger: {
          trigger: blobRef1.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
    if (blobRef2.current) {
      gsap.to(blobRef2.current, {
        yPercent: 10,
        scrollTrigger: {
          trigger: blobRef2.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  // background blobs and gradients
const FullScreenWaves = () => {
  const wave1 = useRef(null);
  const wave2 = useRef(null);
  const lineWave = useRef(null);

  useEffect(() => {
    gsap.to(wave1.current, {
      y: 25,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(wave2.current, {
      y: 35,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Thin line wave effect
    gsap.to(lineWave.current, {
      y: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-[1] opacity-[0.85]">

      {/* Back gradient blur */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(43,255,214,0.25), rgba(216,255,43,0.18), rgba(147,51,234,0.25))",
          filter: "blur(80px)",
        }}
      />

      {/* Main Wave 1 */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        ref={wave1}
      >
        <path
          fill="url(#grad1)"
          fillOpacity="0.45"
          d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,229.3C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160V320H0Z"
        />

        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2ffcd6" />
            <stop offset="50%" stopColor="#d8ff2b" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave 2 (lighter) */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        ref={wave2}
      >
        <path
          fill="url(#grad2)"
          fillOpacity="0.25"
          d="M0,288L60,272C120,256,240,224,360,197.3C480,171,600,149,720,149.3C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224V320H0Z"
        />

        <defs>
          <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="50%" stopColor="#2ffcd6" />
            <stop offset="100%" stopColor="#d8ff2b" />
          </linearGradient>
        </defs>
      </svg>

      {/* Thin Neon Line Wave (PRO Touch) */}
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        ref={lineWave}
      >
        <path
          stroke="url(#lineGrad)"
          strokeWidth="3"
          fill="transparent"
          d="M0,200L60,190C120,180,240,160,360,170C480,180,600,220,720,230C840,240,960,220,1080,210C1200,200,1320,200,1380,210L1440,220"
        />

        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2ffcd6" />
            <stop offset="50%" stopColor="#d8ff2b" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  );
};



  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white font-['Satoshi','Inter',sans-serif']">
      {/* Gradient veil */}
      <FullScreenWaves />

      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(1200px 600px at 15% 20%, rgba(79,70,229,0.18), transparent 60%), radial-gradient(1000px 500px at 85% 70%, rgba(16,185,129,0.18), transparent 60%)",
        }}
      />

      {/* Floating blobs */}
      <motion.div
        ref={blobRef1}
        initial={{ y: 0 }}
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-20 top-28 w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, #7c3aed, #22d3ee, #10b981)",
          filter: "blur(40px)",
          opacity: 0.6,
        }}
      />
      <motion.div
        ref={blobRef2}
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-20 bottom-24 w-[240px] h-[240px] rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, #f59e0b, #f472b6, #a78bfa)",
          filter: "blur(32px)",
          opacity: 0.5,
        }}
      />

      {/* Right-side blobs + lines */}
      <div className="absolute right-0 top-0 h-full w-[300px] flex flex-col items-center justify-center gap-12 pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="w-[160px] h-[160px] rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #7c3aed, #22d3ee, #10b981)",
            filter: "blur(40px)",
          }}
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "120px" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="w-[2px] bg-gradient-to-b from-green-400 via-purple-400 to-cyan-400"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-[100px] h-[100px] rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #f59e0b, #f472b6, #a78bfa)",
            filter: "blur(32px)",
          }}
        />
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "80px" }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="w-[2px] bg-gradient-to-b from-purple-400 via-green-400 to-cyan-400"
        />
      </div>

      {/* Hero */}
      <div ref={heroRef} className="relative z-20 flex flex-col items-center justify-center text-center min-h-[88vh] px-6">
        <h1 className="hero-text mt-12 py-4 text-3xl font-thin md:text-[42px] font-[face2]  tracking-tight">
          Elevate your Digital Presence with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
            Ecoavenstra
          </span>
          !
        </h1>
        <p className="hero-text mt-5 text-white/70 text-lg font-[face1] max-w-2xl">
          We craft immersive digital experiences through stunning design, robust code, and cutting‑edge 3D visuals.
        </p>
        <div className="hero-text mt-6">
          <Typewriter text="> Initializing immersive UI..." />
        </div>
        <div className="hero-text mt-10 flex gap-6 flex-wrap justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 bg-white text-black rounded-full text-lg font-semibold shadow-lg hover:bg-white/90 transition"
          >
            Get Started
          </button>
          <a
            href="/services"
            className="px-8 py-3 border border-white/30 rounded-full text-lg font-semibold hover:bg-white/10 transition"
          >
            Explore
          </a>
        </div>
      </div>

      {/* Social icons */}
      <div className="absolute bottom-10 left-10 z-30">
        <Social />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
    </div>
  );
};

export default LandingPage;

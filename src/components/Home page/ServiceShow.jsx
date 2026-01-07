import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

// --- DATA ---
export const services = [
  {
    id: 1,
    title: "UI / UX Design",
    shortDescription: "Crafting beautiful, human-centered, and conversion-driven digital experiences.",
    whyImportant: ["Strong UI builds trust and improves brand value.", "Good UX increases user retention and conversions.", "Makes complex products easy to use."],
    whatIncluded: ["User research & competitor analysis", "Wireframes (low/high fidelity)", "Interactive prototypes", "Design system & style guide", "Mobile + Desktop responsive UI"],
    benefits: ["Better user engagement", "Higher conversion rate", "Professional & modern brand identity", "Faster development with a design system"],
    howWeBuild: ["Understand your business goals", "Create wireframes and flowcharts", "Design high fidelity screens", "Prototype & user testing", "Deliver final assets + design system"],
    techStack: [{ name: "Figma" }, { name: "Adobe XD" }, { name: "Framer" }],
    pricing: "Starting at $149 (₹12,000)",
  },
  {
    id: 2,
    title: "Web Development",
    shortDescription: "High-performance websites built with modern frameworks & clean code.",
    whyImportant: ["Your website is your brand identity.", "Fast websites rank higher on Google.", "Modern design improves professionalism and trust."],
    whatIncluded: ["Fully responsive website", "Animations & interactions", "SEO friendly structure", "Performance optimization", "Security best practices"],
    benefits: ["Fast and reliable website", "SEO–optimized pages", "Smooth animations", "Clean and scalable code"],
    howWeBuild: ["Plan architecture & flows", "Build UI components", "Integrate backend if needed", "Optimize for SEO + speed", "Deploy to production"],
    techStack: [{ name: "Next.js" }, { name: "React.js" }, { name: "TailwindCSS" }, { name: "GSAP" }],
    pricing: "Starting at $199 (₹16,500)",
  },
  {
    id: 3,
    title: "Web Solution Development",
    shortDescription: "End-to-end business web solutions tailored to your workflow and goals.",
    whyImportant: ["Automates tasks and saves time", "Improves business operations", "100% custom workflow"],
    whatIncluded: ["Dashboard development", "Authentication system", "API integration", "Cloud deployment", "Admin + user panels"],
    benefits: ["Custom solution for your exact need", "Scalable architecture", "Faster business operations", "High security"],
    howWeBuild: ["Requirement discovery", "Plan database + API structure", "Create user + admin modules", "Integrate cloud services", "Deploy and maintenance"],
    techStack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }, { name: "PostgreSQL" }],
    pricing: "Starting at $349 (₹29,000)",
  },
  {
    id: 4,
    title: "SaaS Development",
    shortDescription: "We build scalable, cloud-powered SaaS products with modern architecture.",
    whyImportant: ["SaaS allows you to earn recurring revenue.", "Fully automated digital tool for users.", "Cloud scalability and 24/7 uptime."],
    whatIncluded: ["Admin + user dashboard", "Auth (email, Google, OTP)", "Subscription & payment integration", "Cloud database & APIs", "Analytics & user insights"],
    benefits: ["Earn recurring revenue", "Scalable multi-user system", "Secure & fast performance"],
    howWeBuild: ["Competitor analysis & product planning", "Auth + database architecture", "Core feature development", "Subscriptions & Stripe integration", "Deploy + monitoring"],
    techStack: [{ name: "Next.js" }, { name: "Supabase" }, { name: "Stripe" }, { name: "Postgres" }],
    pricing: "Starting at $699 (₹58,000)",
  }
];

const cardGradients = [
  "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  "linear-gradient(135deg, #22d3ee 0%, #10b981 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #f472b6 100%)",
  "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)",
];

const ServicesShowcase = () => {
  const [active, setActive] = useState(services[0]);
  const containerRef = useRef(null);

  // FIX: GSAP Targeting. Ensures animation only runs if elements exist.
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".reveal", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out" }
      );
    }, containerRef);
    return () => ctx.revert(); // Cleanup
  }, []);

  // FIX: Swiper Loop Error. Duplicate items so Swiper has enough slides to loop.
  const displayServices = useMemo(() => {
    return [...services, ...services, ...services];
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen w-full bg-[#050505] text-white py-12 md:py-20 overflow-hidden">
      
      {/* Top Header */}
      <div className="w-full mb-16 md:mb-24">
        <div className="px-6 md:px-12 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="reveal">
            <h2 className="text-lime-400 font-mono text-sm tracking-[0.3em] uppercase mb-3">Capabilities</h2>
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">
              Services <br/> <span className="text-white/20">Portfolio</span>
            </h1>
          </div>
          <p className="reveal text-white/50 text-right font-mono text-xs hidden md:block">
            SELECT A MODULE TO VIEW<br/>FULL TECHNICAL SPECS
          </p>
        </div>

        {/* Linear Autoplay Slider */}
        <div className="flex flex-col gap-4">
          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            speed={6000}
            freeMode={true}
            slidesPerView="auto"
            spaceBetween={20}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            className="swiper-container-linear w-full"
          >
            {displayServices.map((svc, i) => (
              <SwiperSlide key={`${svc.id}-${i}`} className="!w-[280px] md:!w-[380px]">
                <motion.div
                  whileHover={{ y: -10 }}
                  onClick={() => setActive(svc)}
                  className={`cursor-pointer h-[160px] md:h-[200px] rounded-[2.5rem] p-8 transition-all duration-700 border flex flex-col justify-between ${
                    active.id === svc.id ? 'border-white scale-95' : 'border-white/10 opacity-40 hover:opacity-100'
                  }`}
                  style={{ background: active.id === svc.id ? cardGradients[i % 4] : '#111' }}
                >
                  <span className="text-xs font-black opacity-50 tracking-tighter italic">MODULE_{String(svc.id).padStart(2, '0')}</span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase italic leading-none">{svc.title}</h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Details Stage */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-5">
              <div className="mb-6 flex items-center gap-4">
                <span className="bg-lime-400 text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
                  Active Status
                </span>
                <span className="text-lime-400 font-black text-xl">{active.pricing}</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.85] mb-8">
                {active.title}
              </h2>
              <p className="text-xl text-white/60 italic leading-relaxed mb-10 border-l-2 border-white/20 pl-6">
                {active.shortDescription}
              </p>

              <details className="group cursor-pointer bg-white/5 border border-white/10 rounded-3xl p-6 transition-all hover:bg-white/10">
                <summary className="text-sm font-bold uppercase tracking-widest list-none flex justify-between outline-none">
                  Pricing Logic & Parameters
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <div className="mt-4 space-y-4 text-sm text-white/60 leading-relaxed font-mono">
                   <p>Project estimation based on complexity, business logic, and tech stack requirements.</p>
                   <p className="text-lime-400">Book free consultation for custom roadmap →</p>
                </div>
              </details>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContentGrid title="The Importance" items={active.whyImportant} />
              <ContentGrid title="Development Scope" items={active.whatIncluded} />
              <ContentGrid title="Key Benefits" items={active.benefits} />
              <ContentGrid title="Our Process" items={active.howWeBuild} />
              
              <div className="md:col-span-2 p-6 bg-white/5 border border-white/10 rounded-[2rem]">
                 <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mb-4">// Tech Stack</h4>
                 <div className="flex flex-wrap gap-2">
                   {active.techStack.map((tech, i) => (
                     <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-xs font-bold border border-white/10">
                       {tech.name}
                     </span>
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* FIX: Removed jsx global attribute to clear console warning */}
      <style>{`
        .swiper-container-linear .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

const ContentGrid = ({ title, items }) => (
  <div className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-white/20 transition-all group">
    <h4 className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase mb-6 group-hover:text-lime-400 transition-colors">
      // {title}
    </h4>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="text-sm text-white/70 leading-tight flex items-start gap-3">
          <span className="w-1.5 h-1.5 bg-lime-400 rounded-full mt-1 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ServicesShowcase;
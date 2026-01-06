import React, { useEffect, useRef, useState } from "react";
import { motion, animate } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";

import { RiLightbulbFlashLine, RiBrushLine, RiHammerLine } from "react-icons/ri";

import bgimage from "/images/why-us.jpg"

import team1 from "/images/team1f.png";
import team2 from "/images/team2g.png";
import team3 from    "/images/team1.png"

import WhyChooseUs from "./Home page/WhyChooseUs";
import Service_section from "./Home page/Service_section";
import EnquiryForm from "./Home page/EnquiryForm";

/* AnimatedCounter */
const AnimatedCounter = ({ from = 0, to = 0, duration = 1.8, suffix = "" }) => {
  const [value, setValue] = useState(from);
  const animRef = useRef(null);

  useEffect(() => {
    if (animRef.current) animRef.current.stop();
    animRef.current = animate(from, to, {
      duration,
      ease: [0.22, 0.8, 0.2, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => animRef.current && animRef.current.stop();
  }, [from, to, duration]);

  const formatted = to >= 1000 ? `${Math.round(value / 1000)}k` : Math.round(value);
  return <span>{formatted}{suffix}</span>;
};

/* Data */
const stats = [
  { value: 4, suffix: "+", label: "Years In Business" },
  { value: 850000, suffix: "", label: "Users" },
  { value: 5, suffix: "/5", label: "Avg Rating" },
  { value: 10.85, suffix: "%", label: "Conversion Lift" },
];

const whoSlides = [
  { title: "Cinematic Engineering", description: "We build emotionally resonant, modular platforms that scale." },
  { title: "Culture-Driven Design", description: "Design that signals pride and helps teams attract talent." },
  { title: "Strategic Execution", description: "From discovery to launch we align product decisions with outcomes." },
];

const sectionSlide = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  // drag constraints ref
  const dragRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#080808] text-white">
      {/* HERO */}
      <header className="relative overflow-hidden">
        <motion.img
          src={bgimage}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover opacity-18"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 flex flex-col lg:flex-row items-center gap-12">
          {/* Left text */}
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Where Simplicity Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Financial Power</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-xl">
              We translate complex goals into elegant products. Motion, brand, and engineering aligned to drive real outcomes.
            </p>

            <div className="mt-8 flex gap-4">
              <motion.a whileHover={{ scale: 1.03 }} href="/contact-us" className="bg-[#1c3987] px-6 py-3 rounded-full text-white font-medium shadow-lg">Get Consultation</motion.a>
              <motion.a whileHover={{ scale: 1.03 }} href="/services" className="bg-white/6 px-6 py-3 rounded-full text-white border border-white/8">Our Work</motion.a>
            </div>

            {/* small brand logos */}
            <div className="mt-8 flex items-center gap-6">
              <img src="/images/logo.png" alt="logo1" className="w-28 h-auto object-contain" />
              <img src="/images/logo.png" alt="logo2" className="w-24 h-auto object-contain opacity-90" />
            </div>
          </motion.div>

          {/* Right visual: stacked, draggable, icon cards */}
          <motion.div ref={dragRef} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="lg:w-1/2 flex justify-center">
            <div className="relative w-[380px] h-[300px]">
              {/* Card: Think */}
              <motion.div
                drag
                dragConstraints={dragRef}
                dragElastic={0.18}
                whileDrag={{ scale: 1.02, rotate: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="absolute left-8 top-0 w-72 h-44 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#7c3aed] shadow-2xl flex flex-col items-start justify-center gap-3 p-5 text-white transform -rotate-6 cursor-grab"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/12 flex items-center justify-center text-xl">
                    <RiLightbulbFlashLine />
                  </div>
                  <div className="font-semibold text-lg">Think</div>
                </div>
                <div className="text-sm text-white/90 mt-2">Discovery, research and product strategy to find the right problem to solve.</div>
              </motion.div>

              {/* Card: Design */}
              <motion.div
                drag
                dragConstraints={dragRef}
                dragElastic={0.14}
                whileDrag={{ scale: 1.02, rotate: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="absolute left-0 top-12 w-72 h-44 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 shadow-2xl flex flex-col items-start justify-center gap-3 p-5 text-white transform rotate-3 cursor-grab"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/12 flex items-center justify-center text-xl">
                    <RiBrushLine />
                  </div>
                  <div className="font-semibold text-lg">Design</div>
                </div>
                <div className="text-sm text-white/90 mt-2">Cinematic UI, motion language, and design systems that scale with teams.</div>
              </motion.div>

              {/* Card: Build */}
              <motion.div
                drag
                dragConstraints={dragRef}
                dragElastic={0.12}
                whileDrag={{ scale: 1.02, rotate: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="absolute left-16 top-20 w-72 h-44 rounded-2xl bg-gradient-to-br from-slate-800 to-black shadow-2xl flex flex-col items-start justify-center gap-3 p-5 text-white transform rotate-6 cursor-grab"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/06 flex items-center justify-center text-xl">
                    <RiHammerLine />
                  </div>
                  <div className="font-semibold text-lg">Build</div>
                </div>
                <div className="text-sm text-white/90 mt-2">Robust engineering, observability, and build pipelines for production-ready products.</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* WHO WE ARE + SLIDER */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={sectionSlide} initial="hidden" whileInView="visible" className="bg-white/5 backdrop-blur-lg border border-white/8 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-3">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Ecoavenstra is a product-first studio that blends cinematic visuals with rock-solid engineering. We design to convert, craft to scale, and ship with craft that earns trust.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-semibold">A</div>
              <div>
                <div className="font-semibold">Design & Development Systems</div>
                <div className="text-gray-400 text-sm">Consistent, modular design tokens and motion language.</div>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center font-semibold">T</div>
              <div>
                <div className="font-semibold">Client First & Team Lead</div>
                <div className="text-gray-400 text-sm">Build products that reflect Client pride and team buid the culture.</div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-3">
            <motion.button whileHover={{ scale: 1.04 }} className="px-5 py-3 rounded-full bg-[#1c3987]">Our Services</motion.button>
            <motion.button whileHover={{ scale: 1.04 }} className="px-5 py-3 rounded-full bg-white/6 border border-white/8">Case Studies</motion.button>
          </div>
        </motion.div>

        <motion.div variants={sectionSlide} initial="hidden" whileInView="visible" className="w-full">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{ delay: 4200 }}
            coverflowEffect={{ rotate: 20, depth: 140, stretch: 0, modifier: 1, slideShadows: true }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, EffectCoverflow]}
            className="max-w-md mx-auto h-48"
          >
            {whoSlides.map((s, i) => (
              <SwiperSlide key={i} className="min-w-[320px]">
                <motion.div whileHover={{ scale: 1.03 }} className="bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
                  <h3 className="text-cyan-300 text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-300 mb-4">{s.description}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold">E</div>
                    <div>
                      <div className="text-sm text-gray-300">Featured</div>
                      <div className="text-white font-semibold">See case study</div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div variants={sectionSlide} initial="hidden" whileInView="visible" className="bg-black/80 rounded-2xl p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-extrabold">
                <AnimatedCounter from={0} to={s.value} duration={1.8 + i * 0.2} suffix={s.suffix} />
              </div>
              <div className="text-gray-300 mt-2">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold text-center mb-6">Client Love</motion.h3>
        <Swiper loop={true} autoplay={{ delay: 5000 }} pagination={{ clickable: true }} modules={[Autoplay, Pagination]} className="rounded-2xl">
          <SwiperSlide>
            <motion.div className="bg-white/6 p-8 rounded-2xl text-center mx-4" whileHover={{ scale: 1.02 }}>
              <p className="text-gray-200 italic">“Ecoavenstra turned our vision into a product that users love. Conversion doubled in 3 months.”</p>
              <div className="mt-4 font-semibold">Sonal K, Founder</div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div className="bg-white/6 p-8 rounded-2xl text-center mx-4" whileHover={{ scale: 1.02 }}>
              <p className="text-gray-200 italic">“The team shipped cinematic UI and battle-tested code — delivered on time with zero drama.”</p>
              <div className="mt-4 font-semibold">Ravi P, Head of Product</div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-2xl font-bold mb-6">Meet The Team</motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
          { img: team1, name: "Mr. Venendra", role: "Founder & CEO" },
  { img: team2, name: "Miss. Neelu", role: "Director & Ceo" },
  { img: team2  , name: "Khusbhu", role: "Director" },

  // Newly added members
  { img: team2, name: "Miss. Swati", role: "Ui Ux designer & Analyst" },
  { img: team3, name: "Mr. Rohit ", role: "Business Success Manager" },
  { img: team3, name: "Mr. Rahul Barve", role: "Remote Full Stack Developer" },
  { img: team3, name: "Mr. Rahul ", role: "Remote Full Stack Developer " },{
    img:team3, name:"Mr. Roopam ", role :"Software Engg. ( Mobile App  development)"
  }
          ].map((m, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03, rotateX: 2 }} className="bg-white/6 p-6 rounded-2xl flex flex-col items-center">
              <img src={m.img} alt={m.name} className="w-24 h-24 rounded-full object-cover mb-4" />
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-gray-300">{m.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why & Services */}
            <WhyChooseUs />
        <Service_section />


      {/* Mission / Vision */}
      <section className="max-w-7xl mx-auto px-6 py-12">
       <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
  className="max-w-7xl mx-auto px-6 py-12"
>
  <div className="bg-gradient-to-br from-[#070707] to-[#0f0f0f] rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
    {/* Left: image with layered glass frame and subtle parallax */}
    <motion.div
      className="relative w-full flex items-center justify-center"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{ perspective: 1200 }}
    >
      <div className="absolute left-6 top-6 w-40 h-40 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-800 opacity-6 blur-3xl pointer-events-none" />
      <div className="absolute -right-6 -bottom-6 w-52 h-52 rounded-xl bg-gradient-to-br from-indigo-600 to-emerald-400 opacity-6 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ rotateY: 0, rotateX: 0 }}
        whileHover={{ rotateY: -6, rotateX: 3 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative rounded-2xl overflow-hidden w-full max-w-xl h-full shadow-2xl mt-8"
      >
        <div className="absolute inset-0 border border-white/6 rounded-2xl pointer-events-none" />
        <img
          src="/images/office-img.png"
          alt="office"
          className="w-full h-[620px] object-cover rounded-2xl transform will-change-transform"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute bottom-4 left-4 bg-black/50 border border-white/6 rounded-md px-3 py-2 text-sm text-white">
          Our studio in motion
        </div>
      </motion.div>
    </motion.div>

    {/* Right: mission + vision cards with timeline style */}
    <div className="space-y-6">
      <div className="flex items-start gap-4 mt-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 mt-6 p-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            M
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md border border-white/8 mt-8 rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold mb-2">Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            Help businesses craft digital products that are delightful, performant, and measurable. We combine product strategy, elegant design systems, and resilient engineering to deliver outcomes that scale.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 rounded-full bg-[#1c3987] text-white text-sm">Our Process</button>
            <button className="px-4 py-2 rounded-full bg-white/6 text-white text-sm border border-white/8">Case Studies</button>
          </div>
        </motion.div>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            V
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="bg-white/5 backdrop-blur-md border border-white/8 rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold mb-2">Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            Be the studio teams trust to ship high-impact digital experiences. We aim to create products that customers love and teams are proud to build and maintain.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-black/60 p-3 rounded-lg border border-white/6">
              <div className="text-sm text-gray-300">Focus</div>
              <div className="text-white font-semibold">Cinematic UX</div>
            </div>
            <div className="bg-black/60 p-3 rounded-lg border border-white/6">
              <div className="text-sm text-gray-300">Scale</div>
              <div className="text-white font-semibold">Reliable Engineering</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mini timeline / values */}
      <div className="mt-2">
        <div className="flex items-center gap-4">
          <div className="w-1 bg-white/6 h-12 rounded" />
          <div className="space-y-2">
            <motion.div whileHover={{ x: 6 }} className="text-white font-semibold">Design Systems</motion.div>
            <div className="text-sm text-gray-400">Modular tokens, motion language, design governance.</div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <div className="w-1 bg-white/6 h-12 rounded" />
          <div className="space-y-2">
            <motion.div whileHover={{ x: 6 }} className="text-white font-semibold">Developer Experience</motion.div>
            <div className="text-sm text-gray-400">Tooling, CI, observability and easy handoffs.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.section>

      </section>

      {/* Enquiry + CTA */}
      <section id="contact" >
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} >
          
          <EnquiryForm />
        </motion.div>
      </section>


    
    </div>
  );
};

export default About;

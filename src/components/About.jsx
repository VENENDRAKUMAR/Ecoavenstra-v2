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
import team3 from "/images/team1.png"

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

  const dragRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#080808] text-white overflow-x-hidden">
      {/* HERO */}
      <header className="relative overflow-hidden min-h-screen lg:min-h-0">
        <motion.img
          src={bgimage}
          alt="bg"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative z-10 flex flex-col items-center gap-12 px-6 mx-auto max-w-7xl py-20 lg:py-28 lg:flex-row">
          {/* Left text */}
          <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight md:text-6xl">
              Where Simplicity Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Financial Power</span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 mt-6 text-gray-300 text-sm md:text-base">
              We translate complex goals into elegant products. Motion, brand, and engineering aligned to drive real outcomes.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <motion.a whileHover={{ scale: 1.03 }} href="/contact-us" className="bg-[#1c3987] px-6 py-3 rounded-full text-white font-medium shadow-lg text-sm md:text-base">Get Consultation</motion.a>
              <motion.a whileHover={{ scale: 1.03 }} href="/services" className="px-6 py-3 text-white border rounded-full bg-white/5 border-white/10 text-sm md:text-base">Our Work</motion.a>
            </div>

            {/* small brand logos */}
            <div className="flex justify-center lg:justify-start items-center gap-6 mt-10">
              <img src="/images/logo.png" alt="logo1" className="object-contain h-auto w-20 md:w-28" />
              <img src="/images/logo.png" alt="logo2" className="object-contain w-16 md:w-24 h-auto opacity-70" />
            </div>
          </motion.div>

          {/* Right visual: Card stack adjusted for mobile */}
          <motion.div ref={dragRef} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="flex justify-center w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative w-full max-w-[350px] md:max-w-[380px] h-[350px] md:h-[300px]">
              {/* Card: Think */}
              <motion.div
                drag dragConstraints={dragRef} dragElastic={0.18}
                className="absolute left-1/2 -translate-x-1/2 lg:left-8 top-0 w-64 md:w-72 h-40 md:h-44 rounded-2xl bg-gradient-to-br from-[#0ea5e9] to-[#7c3aed] shadow-2xl flex flex-col items-start justify-center gap-3 p-5 text-white transform lg:-rotate-6 cursor-grab active:cursor-grabbing"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 text-xl rounded-lg bg-white/20"><RiLightbulbFlashLine /></div>
                  <div className="text-lg font-semibold">Think</div>
                </div>
                <div className="mt-2 text-xs md:text-sm text-white/90">Discovery, research and product strategy to find the right problem to solve.</div>
              </motion.div>

              {/* Card: Design */}
              <motion.div
                drag dragConstraints={dragRef} dragElastic={0.14}
                className="absolute left-1/2 -translate-x-1/2 lg:left-0 flex flex-col items-start justify-center gap-3 p-5 text-white transform shadow-2xl top-16 md:top-12 w-64 md:w-72 h-40 md:h-44 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 lg:rotate-3 cursor-grab active:cursor-grabbing"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 text-xl rounded-lg bg-white/20"><RiBrushLine /></div>
                  <div className="text-lg font-semibold">Design</div>
                </div>
                <div className="mt-2 text-xs md:text-sm text-white/90">Cinematic UI, motion language, and design systems that scale with teams.</div>
              </motion.div>

              {/* Card: Build */}
              <motion.div
                drag dragConstraints={dragRef} dragElastic={0.12}
                className="absolute left-1/2 -translate-x-1/2 lg:left-16 flex flex-col items-start justify-center gap-3 p-5 text-white transform shadow-2xl top-32 md:top-20 w-64 md:w-72 h-40 md:h-44 rounded-2xl bg-gradient-to-br from-slate-800 to-black lg:rotate-6 cursor-grab active:cursor-grabbing"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 text-xl rounded-lg bg-white/10"><RiHammerLine /></div>
                  <div className="text-lg font-semibold">Build</div>
                </div>
                <div className="mt-2 text-xs md:text-sm text-white/90">Robust engineering, observability, and build pipelines for production-ready products.</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* WHO WE ARE + SLIDER */}
      <section className="grid items-center grid-cols-1 gap-10 px-6 py-16 mx-auto max-w-7xl lg:grid-cols-2">
        <motion.div variants={sectionSlide} initial="hidden" whileInView="visible" className="p-6 md:p-10 border bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl">
          <h2 className="mb-3 text-3xl font-bold">Who We Are</h2>
          <p className="mb-6 leading-relaxed text-gray-300">
            Ecoavenstra is a product-first studio that blends cinematic visuals with rock-solid engineering. We design to convert, craft to scale, and ship with craft that earns trust.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 font-semibold rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">A</div>
              <div>
                <div className="font-semibold text-sm md:text-base">Design & Development Systems</div>
                <div className="text-xs text-gray-400">Consistent, modular design tokens and motion language.</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 font-semibold rounded-lg bg-gradient-to-br from-emerald-400 to-green-600">T</div>
              <div>
                <div className="font-semibold text-sm md:text-base">Client First & Team Lead</div>
                <div className="text-xs text-gray-400">Build products that reflect Client pride and team buid the culture.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-12">
            <motion.button whileHover={{ scale: 1.04 }} className="px-5 py-3 rounded-full bg-[#1c3987] text-sm font-medium">Our Services</motion.button>
            <motion.button whileHover={{ scale: 1.04 }} className="px-5 py-3 border rounded-full bg-white/5 border-white/10 text-sm font-medium">Case Studies</motion.button>
          </div>
        </motion.div>

        <motion.div variants={sectionSlide} initial="hidden" whileInView="visible" className="w-full">
          <Swiper
            effect="coverflow" grabCursor={true} centeredSlides={true} slidesPerView={"auto"} loop={true}
            autoplay={{ delay: 4200 }} coverflowEffect={{ rotate: 20, depth: 140, stretch: 0, modifier: 1, slideShadows: true }}
            pagination={{ clickable: true }} modules={[Autoplay, Pagination, EffectCoverflow]}
            className="h-56 md:h-48 max-w-md mx-auto"
          >
            {whoSlides.map((s, i) => (
              <SwiperSlide key={i} className="min-w-[280px] md:min-w-[320px]">
                <motion.div whileHover={{ scale: 1.03 }} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl h-full">
                  <h3 className="mb-2 text-lg md:text-xl font-semibold text-cyan-300">{s.title}</h3>
                  <p className="mb-4 text-xs md:text-sm text-gray-300">{s.description}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 font-bold text-white rounded-lg bg-gradient-to-br from-blue-500 to-indigo-700">E</div>
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase">Featured</div>
                      <div className="text-xs md:text-sm font-semibold text-white">See case study</div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="px-6 py-12 mx-auto max-w-7xl">
        <motion.div variants={sectionSlide} initial="hidden" whileInView="visible" className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-black/40 border border-white/5 rounded-2xl">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-4xl font-extrabold text-blue-400">
                <AnimatedCounter from={0} to={s.value} duration={1.8 + i * 0.2} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-gray-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl px-6 py-12 mx-auto">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-8 text-2xl font-bold text-center">Client Love</motion.h3>
        <Swiper loop={true} autoplay={{ delay: 5000 }} pagination={{ clickable: true }} modules={[Autoplay, Pagination]} className="rounded-2xl">
          <SwiperSlide>
            <motion.div className="p-8 mx-4 text-center bg-white/5 border border-white/5 rounded-2xl">
              <p className="italic text-gray-200 text-sm md:text-base">“Ecoavenstra turned our vision into a product that users love. Conversion doubled in 3 months.”</p>
              <div className="mt-6 font-semibold text-blue-400">Sonal K, Founder</div>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div className="p-8 mx-4 text-center bg-white/5 border border-white/5 rounded-2xl">
              <p className="italic text-gray-200 text-sm md:text-base">“The team shipped cinematic UI and battle-tested code — delivered on time with zero drama.”</p>
              <div className="mt-6 font-semibold text-blue-400">Ravi P, Head of Product</div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Team */}
      <section className="px-6 py-12 mx-auto max-w-7xl">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-8 text-2xl font-bold">Meet The Team</motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { img: team2, name: "Miss. Neelu B.", role: "Director & CEO" },
            { img: team2, name: "Khusbhu Parihar", role: "Director" },
            { img: team1, name: "Mr. Venendra Kumar", role: "Tech Lead Engineer" },
            { img: team2, name: "Miss. Swati ", role: "UI UX Designer & Analyst" },
            { img: team3, name: "Mr. Rohit ", role: "Business Success Manager" },
            { img: team3, name: "Mr. Rahul Barve", role: "Remote Full Stack Developer" },
            { img: team3, name: "Mr. Rahul Patle ", role: "Remote Full Stack Developer " },
            { img: team3, name: "Mr. Roopam Rahangdale ", role :"Software Engg. ( Mobile App development)" }
          ].map((m, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="flex flex-col items-center p-6 bg-white/5 border border-white/5 rounded-2xl text-center">
              <img src={m.img} alt={m.name} className="object-cover w-20 h-20 md:w-24 md:h-24 mb-4 rounded-full grayscale hover:grayscale-0 transition-all border-2 border-white/10" />
              <div className="font-semibold text-sm md:text-base leading-tight">{m.name}</div>
              <div className="text-[10px] md:text-xs text-blue-400 mt-2 uppercase tracking-wider">{m.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <Service_section />

      {/* Mission / Vision */}
      <section className="px-4 md:px-6 py-12 mx-auto max-w-7xl">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-[#070707] to-[#0f0f0f] border border-white/5 rounded-3xl p-6 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl">
            {/* Left: image */}
            <motion.div className="relative flex items-center justify-center w-full order-2 lg:order-1">
              <div className="absolute w-40 h-40 left-6 top-6 rounded-xl bg-cyan-500/10 blur-3xl" />
              <motion.div whileHover={{ rotateY: -6, rotateX: 3 }} className="relative w-full h-full max-w-xl overflow-hidden shadow-2xl rounded-2xl border border-white/10">
                <img src="/images/office-img.png" alt="office" className="w-full h-[400px] md:h-[620px] object-cover" />
                <div className="absolute px-3 py-1 text-[10px] md:text-xs text-white border rounded-md bottom-4 left-4 bg-black/60 border-white/10">Our studio in motion</div>
              </motion.div>
            </motion.div>

            {/* Right: content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl font-bold text-white rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/20">M</div>
                <div className="p-5 md:p-6 border bg-white/5 border-white/10 rounded-2xl flex-1">
                  <h3 className="mb-2 text-xl md:text-2xl font-bold">Mission</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-400">
                    Help businesses craft digital products that are delightful, performant, and measurable. We combine product strategy, elegant design systems, and resilient engineering to deliver outcomes that scale.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-xl font-bold text-white rounded-xl bg-gradient-to-br from-emerald-400 to-green-600 shadow-lg shadow-emerald-500/20">V</div>
                <div className="p-5 md:p-6 border bg-white/5 border-white/10 rounded-2xl flex-1">
                  <h3 className="mb-2 text-xl md:text-2xl font-bold">Vision</h3>
                  <p className="text-xs md:text-sm leading-relaxed text-gray-400">
                    Be the studio teams trust to ship high-impact digital experiences. We aim to create products that customers love and teams are proud to build and maintain.
                  </p>
                </div>
              </div>

              {/* Mini values */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-1 h-8 rounded bg-blue-500" />
                  <div>
                    <div className="font-semibold text-xs text-white">Design Systems</div>
                    <div className="text-[10px] text-gray-500">Modular tokens & motion language</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-1 h-8 rounded bg-emerald-500" />
                  <div>
                    <div className="font-semibold text-xs text-white">Dev Experience</div>
                    <div className="text-[10px] text-gray-500">Tooling & easy handoffs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </section>

      {/* Enquiry + CTA */}
      <section id="contact" className="pb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <EnquiryForm />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
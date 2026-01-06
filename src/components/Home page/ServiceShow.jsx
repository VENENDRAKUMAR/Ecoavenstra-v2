import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// 1) Paste your services array here or import it
export const services = [
  {
    id: 1,
    title: "UI / UX Design",
    shortDescription: "Crafting beautiful, human-centered, and conversion-driven digital experiences.",
    whyImportant: [
      "Strong UI builds trust and improves brand value.",
      "Good UX increases user retention and conversions.",
      "Makes complex products easy to use."
    ],
    whatIncluded: [
      "User research & competitor analysis",
      "Wireframes (low/high fidelity)",
      "Interactive prototypes",
      "Design system & style guide",
      "Mobile + Desktop responsive UI"
    ],
    benefits: [
      "Better user engagement",
      "Higher conversion rate",
      "Professional & modern brand identity",
      "Faster development with a design system"
    ],
    howWeBuild: [
      "Understand your business goals",
      "Create wireframes and flowcharts",
      "Design high fidelity screens",
      "Prototype & user testing",
      "Deliver final assets + design system"
    ],
    techStack: [
      { name: "Figma", icon: "figma" },
      { name: "Adobe XD", icon: "adobe" },
      { name: "Framer", icon: "framer" }
    ],
    pricing: "Starting at $149 (₹12,000)",
    note: "For custom dashboards or SaaS UI, pricing varies. Contact for advanced features."
  },

  {
    id: 2,
    title: "Web Development",
    shortDescription: "High-performance websites built with modern frameworks & clean code.",
    whyImportant: [
      "Your website is your brand identity.",
      "Fast websites rank higher on Google.",
      "Modern design improves professionalism and trust."
    ],
    whatIncluded: [
      "Fully responsive website",
      "Animations & interactions",
      "SEO friendly structure",
      "Performance optimization",
      "Security best practices"
    ],
    benefits: [
      "Fast and reliable website",
      "SEO–optimized pages",
      "Smooth animations",
      "Clean and scalable code"
    ],
    howWeBuild: [
      "Plan architecture & flows",
      "Build UI components",
      "Integrate backend if needed",
      "Optimize for SEO + speed",
      "Deploy to production"
    ],
    techStack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "React.js", icon: "react" },
      { name: "TailwindCSS", icon: "tailwind" },
      { name: "GSAP", icon: "gsap" },
      { name: "Framer Motion", icon: "framer" }
    ],
    pricing: "Starting at $199 (₹16,500)",
    note: "For e-commerce or complex features, custom pricing applies."
  },

  {
    id: 3,
    title: "Web Solution Development",
    shortDescription: "End-to-end business web solutions tailored to your workflow and goals.",
    whyImportant: [
      "Automates tasks and saves time",
      "Improves business operations",
      "100% custom workflow"
    ],
    whatIncluded: [
      "Dashboard development",
      "Authentication system",
      "API integration",
      "Cloud deployment",
      "Admin + user panels"
    ],
    benefits: [
      "Custom solution for your exact need",
      "Scalable architecture",
      "Faster business operations",
      "High security"
    ],
    howWeBuild: [
      "Requirement discovery",
      "Plan database + API structure",
      "Create user + admin modules",
      "Integrate cloud services",
      "Deploy and maintenance"
    ],
    techStack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgres" }
    ],
    pricing: "Starting at $349 (₹29,000)",
    note: "Solutions vary based on complexity. Contact for features like analytics, CRM, automation."
  },

  {
    id: 4,
    title: "SaaS (Web App) Development",
    shortDescription: "We build scalable, cloud-powered SaaS products with modern architecture.",
    whyImportant: [
      "SaaS allows you to earn recurring revenue.",
      "Fully automated digital tool for users.",
      "Cloud scalability and 24/7 uptime."
    ],
    whatIncluded: [
      "Admin + user dashboard",
      "Auth (email, Google, OTP)",
      "Subscription & payment integration",
      "Cloud database & APIs",
      "Analytics & user insights"
    ],
    benefits: [
      "Earn recurring revenue",
      "Scalable multi-user system",
      "Secure & fast performance"
    ],
    howWeBuild: [
      "Competitor analysis & product planning",
      "Auth + database architecture",
      "Core feature development",
      "Subscriptions & Stripe integration",
      "Deploy + monitoring"
    ],
    techStack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Supabase / Firebase", icon: "firebase" },
      { name: "MongoDB / Postgres", icon: "postgres" },
      { name: "Stripe", icon: "stripe" }
    ],
    pricing: "Starting at $699 (₹58,000)",
    note: "Price increases with AI features, multi-tenancy, or complex workflows."
  },

  {
    id: 5,
    title: "Custom Web Services",
    shortDescription: "Custom-built tools, APIs, dashboards, automations, and integrations.",
    whyImportant: [
      "Perfect for businesses with unique requirements.",
      "Gives a competitive advantage.",
      "Built exactly for your workflow."
    ],
    whatIncluded: [
      "Custom API creation",
      "Internal dashboards",
      "Workflow automation",
      "3rd-party API integration",
      "Cloud deployment"
    ],
    benefits: [
      "Highly personalized solution",
      "Improves workflow efficiency",
      "Zero unnecessary features"
    ],
    howWeBuild: [
      "Define your business need",
      "Choose optimal tech stack",
      "Build and test system",
      "Deploy & optimize"
    ],
    techStack: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "AWS / Vercel", icon: "aws" },
      { name: "MongoDB", icon: "mongodb" }
    ],
    pricing: "Starting at $249 (₹21,000)",
    note: "For advanced APIs or AI integration, contact for pricing."
  },

  {
    id: 6,
    title: "WordPress Development",
    shortDescription: "Fast, SEO-friendly, and custom WordPress websites for businesses.",
    whyImportant: [
      "Easy for non-tech users to manage.",
      "Best for business websites, blogs, CMS.",
      "Cheaper & faster than custom development."
    ],
    whatIncluded: [
      "Custom WordPress theme",
      "Speed optimization",
      "SEO setup",
      "Security setup",
      "Admin panel training"
    ],
    benefits: [
      "Easy to update",
      "Cheaper setup",
      "SEO friendly",
      "Large plugin ecosystem"
    ],
    howWeBuild: [
      "Choose theme or build custom",
      "Add plugins & features",
      "Optimize for SEO + speed",
      "Deploy to hosting",
      "Provide usage training"
    ],
    techStack: [
      { name: "WordPress", icon: "wordpress" },
      { name: "Elementor", icon: "elementor" },
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" }
    ],
    pricing: "Starting at $129 (₹10,500)",
    note: "For WooCommerce or custom plugins, pricing varies."
  },

  // ⭐⭐⭐ NEW SERVICES ⭐⭐⭐

  {
    id: 7,
    title: "Portfolio Design & Development",
    shortDescription: "Modern, animated, high-conversion portfolio websites that showcase your personal or brand identity.",
    whyImportant: [
      "A strong portfolio builds credibility.",
      "Helps you get clients, jobs, and collaborations.",
      "Makes you stand out with a professional online presence."
    ],
    whatIncluded: [
      "Custom portfolio UI design",
      "Smooth animations & micro-interactions",
      "Personal branding system",
      "Project showcase sections",
      "SEO + performance optimization"
    ],
    benefits: [
      "Strong online identity",
      "More clients & job opportunities",
      "Fast & responsive website",
      "Modern, premium-level animations"
    ],
    howWeBuild: [
      "Understand your work & audience",
      "Design unique branding + layout",
      "Develop smooth animated UI",
      "Optimize performance & SEO",
      "Deploy on fast hosting"
    ],
    techStack: [
      { name: "Next.js", icon: "nextjs" },
      { name: "React.js", icon: "react" },
      { name: "TailwindCSS", icon: "tailwind" },
      { name: "Framer Motion", icon: "framer" },
      { name: "GSAP", icon: "gsap" }
    ],
    pricing: "Starting at $169 (₹14,000)",
    note: "For 3D portfolios or advanced animations, pricing may increase."
  },

  {
    id: 8,
    title: "Software Development",
    shortDescription: "Full-cycle software development including planning, architecture, coding & deployment.",
    whyImportant: [
      "Custom-built software improves business efficiency.",
      "Automates workflows and reduces manual work.",
      "Scales as your business grows."
    ],
    whatIncluded: [
      "Custom software architecture",
      "Backend + frontend development",
      "Database design",
      "API systems",
      "Cloud deployment & DevOps"
    ],
    benefits: [
      "Reliable & scalable software",
      "Fully automated workflows",
      "High security & performance",
      "Custom features built for your needs"
    ],
    howWeBuild: [
      "Requirement analysis",
      "System architecture blueprint",
      "Feature-by-feature development",
      "Testing & optimization",
      "Hosting + long-term support"
    ],
    techStack: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
      { name: "Next.js", icon: "nextjs" },
      { name: "MongoDB / PostgreSQL", icon: "mongodb" },
      { name: "AWS / GCP", icon: "aws" }
    ],
    pricing: "Starting at $499 (₹42,000)",
    note: "Price depends on complexity, modules, and required integrations."
  }
];


const cardGradients = [
  "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  "linear-gradient(135deg, #22d3ee 0%, #10b981 100%)",
  "linear-gradient(135deg, #f59e0b 0%, #f472b6 100%)",
  "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)",
  "linear-gradient(135deg, #00b09b 0%, #8A2BE2 100%)",
  "linear-gradient(135deg, #10b981 0%, #84cc16 100%)"
];

const ServicesShowcase = () => {
  const [active, setActive] = useState(services[0]);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll(".stagger-in"),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08 }
    );
  }, []);

  // Split services into three rows (alternate scroll direction)
  const rows = useMemo(() => {
    const perRow = Math.ceil(services.length / 3);
    return [
      services.slice(0, perRow),
      services.slice(perRow, perRow * 2),
      services.slice(perRow * 2),
    ];
  }, []);

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};


return (
  <section
    ref={containerRef}
    className="min-h-screen w-full bg-black text-white px-6 md:px-12 py-16"
    style={{
      background:
        "radial-gradient(800px 400px at 15% 20%, rgba(79,70,229,0.16), transparent 60%), radial-gradient(800px 400px at 85% 70%, rgba(16,185,129,0.16), transparent 60%), #000"
    }}
  >
    {/* Header */}
    <div className="stagger-in mb-10">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
        What We Offer
      </h1>
      <p className="mt-2 text-white/70">Click to see full details on the right.</p>
    </div>

    {/* Responsive Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
      {/* LEFT SIDE – Services Cards */}
      <div className="flex flex-col gap-10 mb-12">
        {rows.map((row, rowIndex) => {
          const reverse = rowIndex % 2 !== 0; // Alternate swipe direction

          return (
            <motion.div
              key={rowIndex}
              variants={containerVariants}
              initial="initial"
              animate="animate"
            >
              <Swiper
                modules={[FreeMode]}
                freeMode={true}
                spaceBetween={20}
                slidesPerView="auto"
                className="w-full"
                style={{ direction: reverse ? "rtl" : "ltr" }}
              >
                {row.map((svc, i) => (
                  <SwiperSlide
                    key={svc.id}
                    className="!w-[85vw] sm:!w-[300px] md:!w-[340px]"
                  >
                    <motion.button
                      variants={cardVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                      onClick={() => setActive(svc)}
                      className="w-full h-[260px] rounded-2xl p-4 text-left shadow-2xl
                                 border border-white/10 relative overflow-hidden"
                      style={{
                        background:
                          cardGradients[(rowIndex * 3 + i) % cardGradients.length]
                      }}
                    >
                      {/* Overlay */}
                      <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay rounded-2xl pointer-events-none" />

                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="max-w-[70%]">
                          <h3 className="text-3xl font-medium leading-tight">{svc.title}</h3>
                          <p className="mt-1 text-sm text-white/85 line-clamp-3">
                            {svc.shortDescription}
                          </p>
                        </div>
                        <span className="text-xs bg-black/20 px-2 py-1 rounded-full">
                          {String(svc.id).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Tech stack badges */}
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {(svc.techStack || []).slice(0, 3).map((t) => (
                          <span
                            key={t.name}
                            className="text-[11px] px-2 py-1 rounded-full bg-black/20 border border-white/10"
                          >
                            {t.name}
                          </span>
                        ))}
                      </div>

                      {/* Active Glow */}
                      {active.id === svc.id && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          transition={{ duration: 0.35 }}
                          className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                          style={{
                            background:
                              "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.45), transparent 60%)",
                            filter: "blur(20px)"
                          }}
                        />
                      )}
                    </motion.button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          );
        })}
      </div>

      {/* RIGHT SIDE – Detail Panel */}
      <div className="stagger-in">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Title + Price */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-5xl font-extrabold tracking-tight">
                    {active.title}
                  </h2>
                  <p className="mt-1 text-lime-400 font-bold text-lg">{active.pricing}</p>
                 
                 <details className="mt-3 cursor-pointer">
  <summary className="text-white/70 text-sm underline underline-offset-4 hover:text-white">
    View pricing logic
  </summary>

  <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4 space-y-3 leading-relaxed text-white/80 text-sm">

    <p>
      Every project has its own shape — and the cost depends on the depth of thinking and the
      systems we build behind it. Your project pricing is calculated based on:
    </p>

    <ul className="list-disc pl-5 space-y-1">
      <li><span className="text-white font-semibold">Feature Requirements:</span>  
        The number of screens, modules, user flows, and expected behaviours.</li>

      <li><span className="text-white font-semibold">Business Logic:</span>  
        The decision-making rules and internal systems that power the product.</li>

      <li><span className="text-white font-semibold">Core Features:</span>  
        Authentication, dashboards, payments, admin systems, automation & more.</li>

      <li><span className="text-white font-semibold">Business Complexity:</span>  
        How complex your process flow is — basic, moderate, or enterprise-grade.</li>

      <li><span className="text-white font-semibold">Technical Complexity:</span>  
        API integrations, real-time updates, security layers, scalability & performance.</li>

      <li><span className="text-white font-semibold">Tech Stack:</span>  
        Tools, frameworks and services used to build the product the right way.</li>

      <li><span className="text-white font-semibold">Resources & Time:</span>  
        Design hours, development hours, testing cycles and deployment workload.</li>
    </ul>

    <p className="pt-2 text-white/90">
      For accurate estimation, let’s break your idea into milestones and finalize 
      a roadmap tailored for your goals.
      <span className="text-lime-400 font-semibold"> Book a free consultation →</span>
    </p>
  </div>
</details>

                  <p className="mt-1 text-lime-400 font-bold text-lg"></p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase text-white/50">status</p>
                  <p className="text-green-400 font-semibold">active</p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-gradient-to-r from-green-500/70 via-purple-400/60 to-cyan-400/70" />

              {/* Short description */}
              <p className="text-white/85">{active.shortDescription}</p>

              {/* GRID ROWS */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Section title="Why this matters" items={active.whyImportant} />
                <Section title="What's included" items={active.whatIncluded} />
                <Section title="Benefits" items={active.benefits} />
                <Section title="How we build" items={active.howWeBuild} />
              </div>

              {/* TECH STACK */}
              <div className="mt-8">
                <h4 className="text-sm uppercase tracking-wide text-white/60">Tech stack</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(active.techStack || []).map((t) => (
                    <span
                      key={t.name}
                      className="text-xs px-3 py-1 rounded-full bg-black/30 border border-white/10"
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div className="mt-6 text-white/60 text-sm">{active.note}</div>
              

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4 hover:gap-6">
                <ActionButton label="Get quote" />
                <ActionButton label="See examples" variant="outline" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </section>
);



};

/* ----------------- Subcomponents ----------------- */

const Section = ({ title, items }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <h3 className="text-sm font-semibold text-white/90">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items?.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/80">
            <span className="mt-1 w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ActionButton = ({ label, variant = "solid" }) => {
  const base =
    "px-4 py-2 rounded-full text-sm font-semibold transition focus:outline-none";
  const solid =
    "bg-white text-black hover:bg-white/90 shadow-lg";
  const outline =
    "border border-white/30 hover:bg-white/10";
  const cn = `${base} ${variant === "solid" ? solid : outline}`;
  return <button className={cn}>{label}</button>;
};

export default ServicesShowcase;

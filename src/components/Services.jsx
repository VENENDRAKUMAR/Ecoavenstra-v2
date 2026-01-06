import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ServicesShowcase from "./Home page/ServiceShow"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const services = [
  {
    id: 1,
    title: "UX/UI Design",
    subtitle: "We create intuitive, engaging, and aesthetically pleasing user interfaces that provide a seamless user experience. Our design process is user-centric, ensuring that every element serves a purpose and enhances usability.",
    bullets: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Interactive Design",
      "Mobile App Design",
      "Design Systems"
    ],
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Web Development",
    subtitle: "Our team builds fast, scalable, and secure websites and web applications using modern technologies. From e-commerce platforms to complex SaaS products, we deliver high-performance digital solutions.",
    bullets: [
      "React.js / Next.js",
      "API Development",
      "Headless CMS Integration",
      "E-commerce Solutions",
      "Performance Optimization"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    title: "SaaS Platforms",
    subtitle: "We specialize in building multi-tenant, subscription-ready SaaS applications. Our architecture is designed for scalability, security, and easy management, complete with billing, roles, and analytics.",
    bullets: [
      "Multi-Tenant Architecture",
      "Role-Based Access Control (RBAC)",
      "Stripe/Billing Integration",
      "Analytics Dashboards",
      "Scalable Infrastructure"
    ],
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Branding & Identity",
    subtitle: "A strong brand is more than just a logo. We help you craft a complete brand identity, from strategy and messaging to visual design, that resonates with your target audience and sets you apart from the competition.",
    bullets: [
      "Brand Strategy",
      "Logo & Visual Identity",
      "Brand Guidelines",
      "Marketing Collateral",
      "Packaging Design"
    ],
    image: "https://plus.unsplash.com/premium_photo-1661281412140-dfb328ae967b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyYW5kaW5nfGVufDB8fDB8fHww"
  }
];

const ServicesHero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      }
    );
    gsap.fromTo(
      ".hero-bg-text",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out"
      }
    );
  }, []);


  //  full screen wave
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
          d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,776,154.7C672,171,768,213,864,229.3C960,245,1056,235,1152,218.7C1248,203,1444,181,1392,170.7L1440,160V320H0Z"
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
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#d8ff2b" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

    </div>
  );
};

  return (
    <section className="full-page-section min-h-screen w-full flex flex-col bg-black justify-center px-6 md:px-12 py-20 relative overflow-hidden ">
      <FullScreenWaves />
      <h1 className=" text-[18vw] font-bold  uppercase absolute top-1/3 left-0 -translate-y-1/2 -z-10 leading-none tracking-tighter">
        services
      </h1>
      <h2 className="hero-text text-6xl md:text-8xl font-semi max-w-5xl z-10 ml-4 uppercase">
        we build strong products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-w-6xl z-10">
        <div className="md:col-span-1">
          <h3 className="hero-text text-7xl font-light">We do</h3>
        </div>
        <div className="md:col-span-1 space-y-6">
          <p className="hero-text text-lg">
   Grow your brand with high-impact design, social media strategy, and digital marketing.
At <span className="text-2xl text-center text-red-300">Ecoavenstara</span>, we create visuals, websites, and campaigns that build trust, drive engagement, and generate real business growth.
          </p>
    
        </div>
        <div className="md:col-span-1">
       <p className="hero-text text-lg text-slate-300">Whatever your goal — visibility, conversions, or a full digital makeover — we craft the smartest solution to make it happen.</p>
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ service }) => {
  const itemRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const itemEl = itemRef.current;
    const imageEl = imageRef.current;

    // Scroll-based height animation
    const minH = 300;
    const maxH = 600;

    gsap.to(imageEl, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: itemEl,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    ScrollTrigger.create({
      trigger: itemEl,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(imageEl, {
          height: maxH,
          duration: 0.6,
          ease: "power2.out"
        });
      },
      onLeaveBack: () => {
        gsap.to(imageEl, {
          height: minH,
          duration: 0.6,
          ease: "power2.out"
        });
      }
    });

    gsap.fromTo(
      gsap.utils.toArray(".service-text", itemEl),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: itemEl,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section
      ref={itemRef}
      className="full-page-section min-h-screen w-full grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-12 py-20 gap-10 md:gap-16 relative overflow-hidden  bg-black"
    >
      {/* Left Text */}
      <div className="flex flex-col justify-center space-y-6 max-w-lg">
        <h2 className="service-text text-5xl md:text-6xl font-bold text-white">
          {service.title}
        </h2>
        <p className="service-text text-lg text-white/80">
          {service.subtitle}
        </p>
        <div className="service-text border-t border-green-500 pt-6">
          <h4 className="font-medium text-lg mb-4 text-white">What we do in {service.title}</h4>
          <ul className="space-y-3">
            {service.bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-white/90">
                <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Image + Draggable Icons */}
      <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 ease-in-out">
        <img
          ref={imageRef}
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        {/* Draggable Icons (placeholder) */}
        <div className="absolute top-4 right-4 flex gap-3">
          {["🔧", "🎯", "🚀"].map((icon, i) => (
            <div
              key={i}
              className="cursor-grab active:cursor-grabbing bg-white/10 backdrop-blur-md text-white text-xl p-3 rounded-full border border-white/20 shadow-lg"
              draggable
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesPage = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".full-page-section");
    
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: mainRef.current,
        start: "top top",
        end: `+=${sections.length * 100}vh`,
        scrub: false,
        pin: false,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.4, max: 0.8 },
          ease: "power2.inOut"
        }
      });
    }, mainRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef}>
      <ServicesHero />
      {services.map((svc) => (
        <ServiceItem key={svc.id} service={svc} />
      ))}
 <ServicesShowcase />
    </main>
  );
};

export default ServicesPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  RiInstagramLine, 
  RiFacebookCircleLine, 
  RiLinkedinBoxLine, 
  RiWhatsappLine 
} from "react-icons/ri";

const footerIcons = [
  { 
    Icon: RiInstagramLine, 
    link: "https://instagram.com", 
    color: "#E4405F" 
  },
  { 
    Icon: RiFacebookCircleLine, 
    link: "https://www.facebook.com/Ecoavenstra/", 
    color: "#1877F2" 
  },
  { 
    Icon: RiLinkedinBoxLine, 
    link: "https://www.linkedin.com/company/ecoavenstra-hr-infotech-pvt-ltd/", 
    color: "#0A66C2" 
  },
  { 
    Icon: RiWhatsappLine, 
    link: "https://wa.me/+919752505639", 
    color: "#25D366" 
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND AMBIENT GLOWS --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* HUGE BACKGROUND WATERMARK */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
        <h2 className="text-[14vw] font-black uppercase leading-none opacity-[0.02] tracking-tighter text-white">
          ECOAVENSTRA
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Left Side: Brand Identity */}
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="inline-block">
              <img src="/images/logo.png" alt="Logo" className="h-10 brightness-125 hover:scale-105 transition-transform" />
            </Link>
            <p className="text-gray-400 text-lg max-w-sm leading-relaxed font-medium">
              We design and build <span className="text-white font-bold">high-performance</span> digital systems for the world's most ambitious brands.
            </p>
          </div>

          {/* Right Side: Navigation & Contact */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8">Navigation</h4>
              <ul className="space-y-4 font-bold text-sm">
                {['Home', 'About', 'Services', 'Jobs', 'Contact Us'].map(link => (
                  <li key={link}>
                    <Link 
                      to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-8">Get in touch</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-6">
                  <a href="mailto:info@ecoavenstra.com" className="group flex flex-col">
                    <span className="text-gray-500 group-hover:text-blue-500 transition-colors">General Inquiries</span>
                    <span className="font-bold text-base">info@ecoavenstra.com</span>
                  </a>
                  <a href="tel:+919752505639" className="group flex flex-col">
                    <span className="text-gray-500 group-hover:text-green-500 transition-colors">Direct Support</span>
                    <span className="font-bold text-base">(+91) 9752505639</span>
                  </a>
                </div>
                <div className="space-y-2">
                  <span className="text-gray-500">Location</span>
                  <p className="font-bold leading-relaxed">
                    Kesri Nagar, Barapatthar, <br />
                    Seoni (M.P) - India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Copyright & Legal Links */}
          <div className="text-[11px] font-bold text-gray-500 tracking-wide uppercase flex flex-wrap justify-center gap-4">
            <span>© {new Date().getFullYear()} Ecoavenstra HR Infotech Pvt Ltd.</span>
            <span className="hidden md:inline text-white/10">|</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline text-white/10">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>

          {/* Social Icons with Real Links & Colors */}
          <div className="flex gap-4">
            {footerIcons.map((item, i) => (
              <motion.a 
                key={i} 
                href={item.link}
                target="_blank"
                animate={{ rotate: 360 }}
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/5 text-gray-400 transition-all cursor-pointer"
                style={{ '--hover-color': item.color }}
                onMouseEnter={(e) => e.currentTarget.style.color = item.color}
                onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
              >
                <item.Icon size={20} />
              </motion.a>
            ))}
          </div>



        </div>
      </div>

      {/* Animated Bottom Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-blue-600/50 to-transparent mt-10 opacity-50" />
    </footer>
  );
};

export default Footer;
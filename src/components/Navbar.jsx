import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, User, LogOut, 
  ChevronRight 
} from "lucide-react";
import { 
  RiInstagramLine, 
  RiFacebookCircleLine, 
  RiLinkedinBoxLine, 
  RiWhatsappLine 
} from "react-icons/ri";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const profileRole = localStorage.getItem("profile_Role");
  const userName = localStorage.getItem("user_name") || "User";

  const [isLogin, setIsLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsLogin(!!token);
  }, [token]);

  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    setDropdownOpen(false);
    setMobileOpen(false);
    navigate("/login");
  };

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Jobs", path: "/jobs" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const socialLinks = [
    { Icon: RiInstagramLine, link: "https://www.instagram.com/ecoavenstra/" },
    { Icon: RiFacebookCircleLine, link: "https://www.facebook.com/Ecoavenstra/" },
    { Icon: RiLinkedinBoxLine, link: "https://www.linkedin.com/company/ecoavenstra-hr-infotech-pvt-ltd/" },
    { Icon: RiWhatsappLine, link: "https://wa.me/+919752505639" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${
          scrolled 
          ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-3" 
          : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <Link to="/" className="relative z-10">
            <img src="/images/logo.png" alt="Logo" className="h-9 w-auto brightness-125 hover:scale-105 transition-transform" />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link 
                  to={item.path}
                  className={`text-[10px] uppercase font-black tracking-[0.25em] transition-all ${
                    location.pathname === item.path ? "text-blue-500" : "text-white/40 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
                {location.pathname === item.path && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500" />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            {!isLogin ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="hidden md:block bg-white text-black px-8 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
              >
                Login
              </motion.button>
            ) : (
              <div className="relative hidden md:block">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 p-1 pr-4 rounded-full hover:bg-white/10 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs uppercase">
                    {userName[0]}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{userName}</span>
                  <ChevronDown size={14} className={`${dropdownOpen ? 'rotate-180' : ''} transition-transform text-white/40`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-4 w-56 bg-[#0a0a0a] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-3xl"
                    >
                      <button className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                        <User size={14} /> Profile Settings
                      </button>
                      <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-[10px] font-black uppercase text-red-500 hover:bg-red-500/10 rounded-xl transition-all">
                        <LogOut size={14} /> Logout Account
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            <button 
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-full active:scale-90 transition-transform"
            >
              <Menu size={20} className="text-white" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- ELITE MOBILE SIDEBAR --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#050505] z-[150] md:hidden flex flex-col p-8 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full -z-10" />

            <div className="flex justify-between items-center mb-16">
              <img src="/images/logo.png" className="h-8 brightness-125" alt="logo" />
              <button 
                onClick={() => setMobileOpen(false)}
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-full active:bg-white/10 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2">Explore</p>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link 
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-5xl font-black text-white tracking-tighter flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={32} className="opacity-10 group-active:opacity-100 group-active:translate-x-2 transition-all text-blue-500" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto space-y-10">
              <div className="pt-10 border-t border-white/5 space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Get in touch</p>
                  <a href="mailto:info@ecoavenstra.com" className="text-lg font-bold hover:text-blue-500 block">info@ecoavenstra.com</a>
                </div>
                
                <div className="flex gap-5">
                  {socialLinks.map((item, i) => (
                    <motion.a 
                      key={i} 
                      href={item.link} 
                      target="_blank"
                      whileTap={{ scale: 0.9 }} 
                      className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-blue-500 transition-colors"
                    >
                      <item.Icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {!isLogin ? (
                <button 
                  onClick={() => { setMobileOpen(false); navigate("/login"); }}
                  className="w-full py-5 bg-white text-black rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl"
                >
                  Portal Login
                </button>
              ) : (
                <button 
                  onClick={handleLogout}
                  className="w-full py-5 bg-red-500/10 text-red-500 border border-red-500/20 rounded-[2rem] font-black uppercase tracking-widest text-xs"
                >
                  Sign Out Account
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
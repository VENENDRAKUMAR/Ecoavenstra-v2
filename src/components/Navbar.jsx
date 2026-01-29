import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Note: react-icons library environment mein available nahi ho sakti.
 * Isliye hum custom Inline SVG icons ka upyog karenge jo zyada reliable aur fast hain.
 */

const Icons = {
  Menu: () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  ),
  X: () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  ),
  ChevronDown: () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg>
  ),
  User: () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  ),
  Logout: () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
  )
};

const Navbar = () => {
  const token = localStorage.getItem("token");
  const profileRole = localStorage.getItem("profile_Role");
  const userName = localStorage.getItem("user_name") || "User";

  const [isLogin, setIsLogin] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsLogin(!!token);
    setIsEmployer(profileRole === "EMPLOYER");
  }, [token, profileRole]);

  const handleLogout = () => {
    localStorage.clear();
    setIsLogin(false);
    setDropdownOpen(false);
    navigate("/login");
  };

  const navItems = [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Jobs", path: "/jobs" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${
          scrolled 
          ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl" 
          : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* LOGO */}
          <Link to="/" className="relative z-10">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-10 w-auto object-contain brightness-125" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
  
            </motion.div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <Link 
                  to={item.path}
                  className={`text-[14px] uppercase font-bold tracking-[0.1em] transition-all duration-300 ${
                    location.pathname === item.path ? "text-green-400" : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
                <motion.span 
                  layoutId="underline"
                  className={`absolute -bottom-1 left-0 h-[2px] bg-green-500 origin-left ${
                    location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                  } transition-all duration-300`}
                />
              </li>
            ))}
          </ul>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-5">
            {isEmployer && (
              <Link 
                to="/employerform"
                className="hidden lg:block text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 hover:bg-green-500 hover:text-black border border-white/10 px-5 py-2.5 rounded-full transition-all duration-500"
              >
                Post Job
              </Link>
            )}

            {!isLogin ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="hidden md:flex items-center gap-2 bg-white text-black px-7 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-green-500 transition-colors shadow-xl"
              >
                Login
              </motion.button>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 p-1 pr-3 rounded-full transition-all"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-black text-sm">
                    {userName[0].toUpperCase()}
                  </div>
                  <span className="hidden sm:inline text-xs font-bold text-white/80">{userName}</span>
                  <div className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                    <Icons.ChevronDown />
                  </div>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.9 }}
                      className="absolute right-0 mt-4 w-60 bg-[#111] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 z-[110] backdrop-blur-3xl"
                    >
                      <div className="px-4 py-4 border-b border-white/5 mb-2">
                        <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Account</p>
                        <p className="text-sm font-bold text-white truncate mt-1">{userName}</p>
                      </div>
                      <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                        <Icons.User /> Profile Settings
                      </button>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all"
                      >
                        <Icons.Logout /> Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* MOBILE TOGGLE */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-white"
            >
              {mobileOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-black z-[90] md:hidden flex flex-col items-center justify-center p-12 overflow-hidden"
          >
             {/* Background Decoration */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full" />

            <div className="flex flex-col items-center gap-10 w-full relative z-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, ease: "backOut" }}
                >
                  <Link 
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-5xl font-black text-white tracking-tighter hover:text-green-500 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div  
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                className="h-px bg-white/10 max-w-xs" 
              />

              {!isLogin ? (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setMobileOpen(false); navigate("/login"); }}
                  className="w-full max-w-xs py-5 bg-white text-black rounded-full font-black text-xl uppercase tracking-widest"
                hover:bg-green-500 >
                  Login
                </motion.button>
              ) : (
                <button 
                  onClick={() => { setMobileOpen(false); handleLogout(); }}
                  className="text-red-500 text-2xl font-black uppercase tracking-widest"
                >
                  Sign Out
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
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const profileRole = localStorage.getItem("profile_Role");

  const [isLogin, setIsLogin] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [isEmployer, setIsEmployer] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(!!token);
    setIsEmployer(profileRole === "EMPLOYER");
  }, [token, profileRole]);

  const handleLoginClick = () => navigate("/login");

  const handleLogoutClick = () => {
    navigate("/login");
    setIsLogin(false);
    localStorage.clear();
  };

  const handleEmployeeClick = () => {
    setEmployee((prev) => {
      const next = !prev;
      navigate(next ? "/employerform" : "/");
      return next;
    });
  };

  const navItems = {
   
    About: [],
    Services: [],

    Jobs: [],
    "Contact Us": [],
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50"
      >
        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <Link to="/">
            <img src="/images/logo.png" alt="Ecoavenstra Logo" className="h-10 w-auto" />
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-white">
          {Object.keys(navItems).map((label) => (
            <motion.li
              key={label}
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/${label.toLowerCase().replace(/ /g, "-")}`}>{label}</Link>
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.li>
          ))}

          {/* EMPLOYER BUTTON */}
          {isEmployer && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleEmployeeClick}
              className="bg-[#1c3987] py-1 px-3 rounded-lg text-white font-semibold"
            >
              {employee ? "Go to Home" : "Employer Form"}
            </motion.button>
          )}
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">
          {/* LOGIN BUTTON ONLY DESKTOP */}
          {!isLogin && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleLoginClick}
              className="hidden md:block text-black  hover:text-green-600 border border-white/20  bg-slate-50 px-5 py-1 rounded-md"
            >
              Log In
            </motion.button>
          )}

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            {!mobileOpen ? (
              <HiMenu
                onClick={() => setMobileOpen(true)}
                className="text-white text-3xl cursor-pointer"
              />
            ) : (
              <HiX
                onClick={() => setMobileOpen(false)}
                className="text-white text-3xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-72 bg-black text-white p-6 z-50 shadow-xl md:hidden flex flex-col"
          >
            {/* Close Icon inside menu */}
            <div className="flex justify-end mb-6">
              <HiX
                onClick={() => setMobileOpen(false)}
                className="text-white text-3xl cursor-pointer hover:text-green-500 transition"
              />
            </div>

            <h2 className="text-xl font-bold mb-6">Menu</h2>

            {Object.keys(navItems).map((label) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05, x: 5 }}
                className="mb-4 relative group"
              >
                <Link
                  to={`/${label.toLowerCase().replace(/ /g, "-")}`}
                  className="text-lg font-semibold transition-colors duration-300 group-hover:text-green-400"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </motion.div>
            ))}

            {/* LOGIN BUTTON INSIDE MOBILE MENU */}
            {!isLogin && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  setMobileOpen(false);
                  handleLoginClick();
                }}
                className="mt-6 w-full text-center text-zinc-300 hover:text-green-600 border border-white/20 px-5 py-2 rounded-md"
              >
                Log In
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

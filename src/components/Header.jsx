import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './Navbar';

const Title = () => (
  <motion.a
    href="/"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
    <motion.img
      whileHover={{ scale: 1.05 }}
      src={Logo}
      alt="Ecoavenstra Logo"
      className="h-12 px-4 pt-3"
    />
  </motion.a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 w-full h-14 bg-black z-50 flex justify-between items-center backdrop-blur-md shadow-md"
    >
      <Title />

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center mx-6">
        <Navbar />
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="md:hidden text-white px-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isOpen
                ? 'M6 18L18 6M6 6l12 12'
                : 'M4 6h16M4 12h16m-7 6h7'
            }
          />
        </svg>
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4 }}
              className="fixed right-0 top-0 h-full w-64 bg-black p-4 shadow-lg"
            >
              <button
                className="text-white mb-4 focus:outline-none"
                onClick={toggleSidebar}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Navbar closeSidebar={closeSidebar} toggleSidebar={toggleSidebar} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

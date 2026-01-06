import React from "react";
import { Link } from "react-router-dom";

import GridBackground from "/images/why-us.jpg";
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import { motion } from "framer-motion";

const Title = () => (
  <a href="/">
    <motion.img
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="h-12 px-4 pt-3"
      alt="logo"
      src="/images/logo.png"
    />
  </a>
);

const Footer = () => {
  return (
    <footer
      className="relative text-white pt-10 overflow-hidden"
      style={{
        backgroundImage: `url(${GridBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Glass Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-0"></div>

      {/* Floating Gradient Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-green-600/10 via-transparent to-black/50 z-0"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl p-6 lg:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:flex md:justify-between"
        >
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <Title />
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 sm:px-10">

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="mb-6 text-sm font-semibold uppercase text-green-400 tracking-wider">
                Contact Info
              </h2>
              <ul className="text-gray-300 text-sm space-y-4">
                <li className="flex items-center hover:text-green-400 transition">
                  <CiMail className="mr-2 text-green-400 text-lg" />
                  <a href="mailto:info@ecoavenstra.com" className="hover:underline">
                    info@ecoavenstra.com
                  </a>
                </li>

                <li className="flex items-center hover:text-green-400 transition">
                  <CiMail className="mr-2 text-green-400 text-lg" />
                  <a href="mailto:business@ecoavenstra.com" className="hover:underline">
                    business@ecoavenstra.com
                  </a>
                </li>

                <li className="flex items-center hover:text-green-400 transition">
                  <CiPhone className="mr-2 text-green-400 text-lg" />
                  <a href="tel:+919752505639" className="hover:underline">
                    (+91) 9752505639
                  </a>
                </li>

                <li className="flex items-center hover:text-green-400 transition">
                  <CiLocationOn className="mr-2 text-green-400 text-lg" />
                  <span>Kesri Nagar, Barapatthar, Seoni (M.P) - India</span>
                </li>
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="mb-6 text-sm font-semibold uppercase text-green-400 tracking-wider">
                Legal
              </h2>
              <ul className="text-gray-300 text-sm space-y-4">
                <li>
                  <a href="#" className="hover:text-green-400 hover:underline transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 hover:underline transition">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.hr
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
          className="my-10 border-gray-600"
        />

        {/* Lower Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="sm:flex sm:items-center sm:justify-between text-sm text-gray-400"
        >
          <span>
            © {new Date().getFullYear()}
            <a href="/" className="hover:underline text-white ml-2">
              Ecoavenstra HR Infotech Pvt Ltd
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Icons Placeholder */}
          <div className="flex gap-4 text-xl mt-4 sm:mt-0 text-gray-400">
            <motion.a
              whileHover={{ scale: 1.2, color: "#22c55e" }}
              className="cursor-pointer"
            >
              <i className="ri-instagram-line"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#22c55e" }}
              className="cursor-pointer"
            >
              <i className="ri-facebook-circle-line"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#22c55e" }}
              className="cursor-pointer"
            >
              <i className="ri-twitter-x-line"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

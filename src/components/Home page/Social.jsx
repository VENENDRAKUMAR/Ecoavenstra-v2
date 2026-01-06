import React from "react";
import { motion } from "framer-motion";
import {
  RiInstagramLine,
  RiFacebookCircleLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
} from "react-icons/ri";

const icons = [
  { Icon: RiInstagramLine, alt: "instagram", link: "https://instagram.com" },
  { Icon: RiFacebookCircleLine, alt: "facebook", link: "https://www.facebook.com/Ecoavenstra/" },
  { Icon: RiLinkedinBoxLine, alt: "linkedin", link: "https://www.linkedin.com/company/ecoavenstra-hr-infotech-pvt-ltd/" },
  { Icon: RiWhatsappLine, alt: "whatsapp", link: "https://wa.me/+919752505639" },
];

const Social = () => {
  return (
    <div className="flex md:flex-col flex-row gap-6 px-3 md:pt-32">
      {icons.map((icon, i) => (
        <motion.a
          key={i}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 flex items-center justify-center rounded-full m-4 
                     bg-white/10 backdrop-blur-md border border-white/20 shadow-lg cursor-grab active:cursor-grabbing"
        >
          <icon.Icon className="w-6 h-6 text-green-500" aria-label={icon.alt} />
        </motion.a>
      ))}
    </div>
  );
};

export default Social;

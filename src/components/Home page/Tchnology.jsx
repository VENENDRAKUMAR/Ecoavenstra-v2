import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Server, Cloud, GitBranch, Terminal, Cpu
} from 'lucide-react';

const techData = [
  {
    title: 'Frontend',
    icon: <LayoutDashboard className="text-blue-400 w-6 h-6" />,
    color: "blue",
    categories: [
      { subtitle: 'Technologies', items: 'HTML5, CSS3, Tailwind, JS, TS, Bootstrap' },
      { subtitle: 'Frameworks', items: 'ReactJS, NextJs, Redux, ShadCn' }
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="text-green-400 w-6 h-6" />,
    color: "green",
    categories: [
      { subtitle: 'Technologies', items: 'NodeJS, Express, MongoDB, Postgres' },
      { subtitle: 'Tools', items: 'JWT,  Firebase, Microservices,Postman' }
    ]
  },
  {
    title: 'DevOps',
    icon: <GitBranch className="text-purple-400 w-6 h-6" />,
    color: "purple",
    categories: [
      { subtitle: 'CI/CD', items: 'Github Actions, Jenkins, Azure' },
      { subtitle: 'Monitoring', items: ' Grafana, ELK Stack' }
    ]
  },
  {
    title: 'Cloud',
    icon: <Cloud className="text-cyan-400 w-6 h-6" />,
    color: "cyan",
    categories: [
      { subtitle: 'Providers', items: 'AWS, Azure, GCP, Vercel, Netlify  , Hostinger' },
      { subtitle: 'Libraries', items: 'Serverless, AWS CLI' }
    ]
  }
];

const Technology = () => {
  return (
    <section className="py-24 bg-[#030303] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl tracking-tighter italic">
            Tech <span className="text-blue-500">Arsenal</span>
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative group p-[2px] rounded-2xl overflow-hidden"
            >
              {/* --- OUTER NEON BORDER ANIMATION (Old Vibe) --- */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.color === 'blue' ? 'from-blue-600' : item.color === 'green' ? 'from-green-600' : 'from-blue-600'} to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* --- MAIN CARD --- */}
              <div className="relative bg-[#0a0a0a] rounded-2xl p-8 h-full overflow-hidden">
                
              
                <div className="absolute inset-0 w-full h-[2px] bg-white/10 scan-animation pointer-events-none" />

                {/* 2. CORNER ELEMENTS */}
                <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-blue-300 transition-colors" />
                <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-blue-300 transition-colors" />
                <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20 group-hover:border-blue-300 transition-colors" />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-blue-300 transition-colors" />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold tracking-widest ">{item.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {item.categories.map((cat, idx) => (
                      <div key={idx} className="border-l-2 border-white/5 pl-4 hover:border-blue-500/50 transition-colors">
                        <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-1">
                          {cat.subtitle}
                        </div>
                        <div className="text-sm text-gray-300 font-medium leading-relaxed">
                          {cat.items}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. CYBER LINES (Tere purane code wala feel) */}
                <div className="absolute bottom-4 right-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-all">
                  <div className="w-1 h-4 bg-blue-300/50 animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-1 h-6 bg-blue-300/50 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 h-3 bg-blue-300/50 animate-bounce" style={{ animationDelay: '0.3s' }} />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global CSS for the Scan Line Animation */}
      <style jsx global>{`
        @keyframes scan {
          0% { top: -10%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 110%; opacity: 0; }
        }
        .scan-animation {
          position: absolute;
          animation: scan 3s linear infinite;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent);
          box-shadow: 0 0 10px rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  );
};

export default Technology;
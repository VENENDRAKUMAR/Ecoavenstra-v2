import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Tag, Sparkles } from 'lucide-react';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://ecoavenstra-be.onrender.com/api/v1/admin/articles');
        setBlogs(response.data.articles || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center bg-black">
        <div className="relative">
          <div className="w-20 h-20 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-cyan-500 animate-pulse">LOADING</div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative py-32 bg-[#030303] text-white overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="flex items-center gap-2 text-cyan-500 font-mono text-xs uppercase tracking-[0.5em] mb-4">
              <Sparkles size={14} /> Insights & Updates
            </span>
            <h2 className="text-4xl md:text-3xl tracking-tighter leading-none">
              From the <br /> <span className="text-white/20 italic">Journal.</span>
            </h2>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/blog")}
            className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-all duration-500"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">View All Posts</span>
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </motion.button>
        </div>

        {/* Infinite Marquee Wrapper */}
        <div 
          className="relative w-full overflow-hidden py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
            transition={{ 
                repeat: Infinity, 
                duration: 30, 
                ease: 'linear',
                // This ensures it keeps moving from current position
                repeatType: "loop" 
            }}
          >
            {[...blogs, ...blogs].map((blog, index) => (
              <motion.div
                key={`${blog.id}-${index}`}
                className="relative min-w-[350px] md:min-w-[450px] group cursor-pointer"
                onClick={() => navigate(`/blog/${blog.slug || blog.id}`)}
              >
                <div className="bg-zinc-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase text-cyan-400">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 line-clamp-2 leading-tight group-hover:text-cyan-400 transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed mb-6 font-light">
                      {blog.shortDescription}
                    </p>

                    <div className="flex items-center gap-2 text-cyan-500 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Article <ArrowUpRight size={12} />
                    </div>
                  </div>
                </div>

                {/* Cyber Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Gradient Fades for the edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none" />
        </div>
      </div>

      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BlogSection;
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import "./Spinner.css";

const BlogPage = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [recentArticles, setRecentArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ecoavenstra-be.onrender.com/api/v1/admin/articles');
        const articles = response.data.articles;

        if (articles.length > 0) {
          setFeaturedArticle(articles[0]);
          setRecentArticles(articles); 
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
  };

  if (loading) {
    return (
      <div className='h-[90vh] flex w-full justify-center items-center bg-[#050505]'>
        <div className="spinner">
          {[...Array(6)].map((_, i) => <div key={i}></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className='bg-[#050505] min-h-screen text-white font-sans selection:bg-green-500/30'>
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-10'>
        
        {/* Header Section */}
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
          >
            Latest <span className="text-green-500 italic">Insights</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl text-lg">
            Aapke career aur business insights ke liye humara visionary blog portal.
          </p>
        </header>

        {/* Featured Article Section */}
        {featuredArticle && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className='relative group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-md mb-24'
          >
            <div className='flex flex-col lg:flex-row items-center'>
              <div className='w-full lg:w-3/5 overflow-hidden'>
                <img 
                  className='w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100' 
                  src={featuredArticle.coverImage} 
                  alt={featuredArticle.title} 
                />
              </div>
              <div className='w-full lg:w-2/5 p-8 md:p-12 space-y-6'>
                <div className='flex items-center gap-3'>
                  <span className='px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] uppercase font-bold tracking-widest rounded-full'>
                    Featured Post
                  </span>
                  <span className='text-gray-500 text-xs font-medium uppercase tracking-widest'>8 Min Read</span>
                </div>
                
                <h2 className='text-3xl md:text-4xl font-bold leading-tight group-hover:text-green-400 transition-colors'>
                  {featuredArticle.title}
                </h2>
                <p className='text-gray-400 leading-relaxed text-base'>
                  {truncateDescription(featuredArticle.shortDescription, 35)}
                </p>
                
                <Link to={`/blog/article/${featuredArticle.id}`} className="inline-block">
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className='flex items-center gap-3 text-white font-bold text-sm bg-white/5 hover:bg-green-500 hover:text-black px-6 py-3 rounded-full border border-white/10 transition-all'
                  >
                    Read Article <FaArrowRight size={14} />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Recent Articles Grid */}
        <section>
          <div className='flex items-center justify-between mb-12'>
            <h3 className='text-2xl font-bold uppercase tracking-widest text-white/90'>Recent Articles</h3>
            <div className="h-[1px] flex-grow mx-8 bg-white/5 hidden md:block"></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
            {recentArticles.map((article, index) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='group'
              >
                <div className='relative overflow-hidden rounded-2xl mb-6 bg-white/5 border border-white/10'>
                  <img 
                    className='w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100' 
                    src={article.coverImage} 
                    alt={article.title} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase text-white tracking-widest border border-white/10">
                      Article
                    </span>
                  </div>
                </div>

                <div className='space-y-4'>
                  <h4 className='text-xl font-bold leading-snug group-hover:text-green-500 transition-colors'>
                    {article.title}
                  </h4>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {truncateDescription(article.shortDescription, 20)}
                  </p>
                  <Link 
                    to={`/blog/article/${article.id}`} 
                    className='inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-green-500 transition-all'
                  >
                    Read More <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA for Blog */}
        <motion.div 
          className="mt-32 p-12 rounded-[40px] bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 text-center"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Want more insights?</h2>
          <p className="text-gray-400 mb-8">Humaare career newsletter ko join karein aur updates paayein.</p>
          <button className="bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
            Subscribe Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
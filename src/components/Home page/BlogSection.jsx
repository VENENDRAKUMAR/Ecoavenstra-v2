import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
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
    return <div className="w-full h-96 bg-black animate-pulse rounded-xl"></div>;
  }

  return (
    <section className="py-80 px-4  text-white overflow-hidden bg-black">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">Our Blogs</h2>

      {/* Infinite Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
        >
          {[...blogs, ...blogs].map((blog, index) => (
            <motion.div
              key={`${blog.id}-${index}`}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] max-w-sm bg-black/80 border border-gray-700 rounded-xl shadow-lg backdrop-blur-md overflow-hidden"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 flex flex-col justify-between h-[200px]">
                <div>
                  <h4 className="text-cyan-400 font-semibold text-sm">{blog.category}</h4>
                  <h3 className="text-white font-bold text-lg mt-1">{blog.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mt-2 line-clamp-3">{blog.shortDescription}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="mt-12 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/blog")}
          className="bg-gradient-to-r from-cyan-500 to-blue-700 text-black font-bold px-6 py-3 rounded-lg shadow-md hover:shadow-cyan-500/30 transition"
        >
          Read More
        </motion.button>
      </div>
    </section>
  );
};

export default BlogSection;

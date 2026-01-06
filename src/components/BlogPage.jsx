import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Spinner.css"


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
          setFeaturedArticle(articles[0]); // Set the first article as the featured article
          setRecentArticles(articles.slice()); // Set the remaining articles as recent articles
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
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  if (loading) {
    return (
      <div className='h-[90vh] flex w-full justify-center items-center'>
      <div class="spinner">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
</div>
    );
  }

  return (
    <div className='px-4 sm:px-8 md:px-16 main-container'>
      {/* Featured Article Section */}
      {featuredArticle && (
        <div className='1st-big-container-1st w-full py-8 md:py-14 flex flex-col md:flex-row'>
          <div className='half-pic w-full md:w-1/2 mb-8 md:mb-0'>
            <div className='p-3 rounded-xl border border-gray-600'>
              <img className='w-full h-64 object-cover rounded-xl opacity-80' src={featuredArticle.coverImage} alt={featuredArticle.title} />
            </div>
          </div>
          <div className='another-half w-full md:w-1/2 flex flex-col md:px-10'>
            <div className='upper-circle bg-gray-600 flex py-1 text-xs justify-center items-center w-fit px-1 gap-2 rounded-full'>
              <div className='bg-[#1c3987] flex justify-center text-white items-center px-2 py-1 font-semibold rounded-full'>News !</div>
              <div className='text-white font-semibold'>Read continue</div>
            </div>
            <div className='big-heading text-white py-4 text-3xl md:text-4xl lg:text-5xl'>
              {featuredArticle.title}
            </div>
            <div className='description text-white text-sm py-4'>
              {truncateDescription(featuredArticle.shortDescription, 30)}
            </div>
            <div>
              <Link to={`/blog/article/${featuredArticle.id}`}>
                <button className='flex justify-center items-center gap-4 text-blue-500 font-semibold'>
                  Read More <FaArrowRight size={15} color='#1d5fd3' />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Recent Articles Section */}
      <div className='recent-articles'>
        <div className='section-title text-2xl text-white mb-4'>Recent Articles</div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {recentArticles.map((article) => (
            <div key={article.id} className='article-card rounded-xl p-4'>
              <div className='article-image'>
                <img className='w-full h-40 object-cover rounded-xl mb-4' src={article.coverImage} alt={article.title} />
              </div>
              <div className='article-content'>
                <div className='article-title text-white text-xl mb-2'>{article.title}</div>
                <div className='article-description text-gray-400 text-sm'>
                  {truncateDescription(article.shortDescription, 20)}
                </div>
                <div className='mt-4'>
                  <Link to={`/blog/article/${article.id}`}>
                    <button className='flex justify-center items-center gap-2 text-blue-500 font-semibold'>
                      Read More <FaArrowRight size={12} color='#1d5fd3' />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

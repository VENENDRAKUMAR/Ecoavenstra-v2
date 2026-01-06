import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ReadMorePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://ecoavenstra-be.onrender.com/api/v1/admin/articles/${id}`);
        setArticle(response.data.article);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="py-10 my-10 w-full h-96 bg-[#222222] animate-pulse"></div>;
  }

  if (!article) {
    return (
      <div className='flex w-full h-[90vh] bg-black justify-center items-center'>
        <div className="text-white text-xl">Article not found.</div>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto px-10 py-8'>
      {article.coverImage && (
        <img src={article.coverImage} alt={article.title} className='w-full h-96 object-cover mb-8 rounded-lg shadow-md' />
      )}

      <div className='text-white py-4 text-4xl font-extrabold leading-tight'>{article.title}</div>

      <div className='flex justify-between items-center text-sm text-gray-500 mb-8'>
        <div className='flex items-center'>
          <div className='text-white font-medium'>{article.user}</div>
          <div className='mx-2'>•</div>
          <div className='text-white'>{new Date(article.createdAt).toLocaleDateString()}</div>
        </div>
        {/* <div className='flex space-x-4'>
          <button className='px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition duration-300'>Share</button>
          <button className='px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition duration-300'>More</button>
        </div> */}
      </div>

      <p className='text-gray-400 text-lg mb-6'>{article.shortDescription}</p>

      <div className='prose prose-invert text-gray-300 mb-8' dangerouslySetInnerHTML={{ __html: article.description }}></div>
    </div>
  );
};

export default ReadMorePage;

// src/pages/BlogDetailsPage/BlogDetailsPage.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetailsPage = () => {
  const { id } = useParams(); // Fetch the blog ID from the URL params
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog details from an API or static data
    const fetchBlogDetails = async () => {
      // Sample blog data
      const blogData = {
        id: 1,
        title: 'Understanding React',
        content: 'React is a powerful JavaScript library for building user interfaces...',
        date: '2024-12-30',
      };

      setBlog(blogData);
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">{blog.title}</h2>
      <p className="text-sm text-gray-500">{blog.date}</p>
      <div className="mt-4 text-lg text-gray-700">{blog.content}</div>
    </div>
  );
};

export default BlogDetailsPage;

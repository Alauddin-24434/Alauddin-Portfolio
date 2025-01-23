// src/pages/BlogPage/BlogPage.tsx
import React from 'react';

import { Link } from 'react-router-dom';
import BlogCard from '../../components/BlogRelated/BlogCard/BlogCard';

const BlogPage = () => {
  // Sample blog data, you can replace it with dynamic data from an API
  const blogs = [
    { id: 1, title: 'Understanding React', description: 'A deep dive into React and its features.', date: '2024-12-30' },
    { id: 2, title: 'JavaScript Basics', description: 'Learn the basics of JavaScript programming language.', date: '2024-12-20' },
    // Add more blog objects
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-6">Blogs</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

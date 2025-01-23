// src/components/BlogCard/BlogCard.tsx

const BlogCard = ({ blog }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold">{blog.title}</h3>
      <p className="text-sm text-gray-500">{blog.date}</p>
      <p className="text-gray-700 mt-2">{blog.description}</p>
    </div>
  );
};

export default BlogCard;

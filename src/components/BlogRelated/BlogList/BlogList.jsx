import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../../../config/apiConfig";
import BlogModal from "./BlogModal"; // Import the modal component
import { FaRegNewspaper } from "react-icons/fa";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null); // State to store the selected blog
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  // Fetch blogs from local API
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blogs`);
      setBlogs(response?.data?.blogs); // Assuming response.data.blogs is an array of blog objects
    } catch (err) {
      setError("Failed to fetch blogs. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Limit the displayed blogs to the first 6
  const displayedBlogs = blogs?.slice(0, 6);

  // Open modal and pass the selected blog content
  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-y-6 p-4 md:p-0">
        {/* Dynamic Title */}
        <div className=" w-full py-4 rounded-lg pl-2 bg-[#1A1A1A] text-[#E0E0E0]">
        <h2 className="text-3xl font-normal leading-tight text-center  uppercase">
        Blogs
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading blogs...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs?.map((blog) => (
            <div
              key={blog?._id}
              className="group  bg-[#1A1A1A]  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <div
                className="w-full h-48  bg-cover bg-center"
                style={{ backgroundImage: `url(${blog?.image || "/default-blog-image.jpg"})` }}
              ></div>

              {/* Blog Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#E0E0E0] transition-colors duration-300 mb-4">
                  {blog?.title}
                </h2>

                <div
                  className="text-gray-400 line-clamp-3 mb-4"
                  dangerouslySetInnerHTML={{ __html: blog?.content }}
                ></div>

                <button
                  onClick={() => openModal(blog)}
                  className="mt-4 text-[#E0E0E0] bg-[#444444] hover:bg-[#15a64e] px-4 py-2 rounded-md transition-colors duration-300"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      <BlogModal isOpen={isModalOpen} onClose={closeModal} blog={selectedBlog} />
    </div>
  );
};

export default BlogList;

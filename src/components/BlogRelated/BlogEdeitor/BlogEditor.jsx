import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { FiSave, FiTrash2 } from 'react-icons/fi';
import { IoIosAddCircle } from 'react-icons/io';
import axios from 'axios';
import BASE_URL from '../../../config/apiConfig';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const BlogEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  const [title, setTitle] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [blogs, setBlogs] = useState([]); // Store multiple blogs
  const [showEditor, setShowEditor] = useState(false); // State to toggle the editor visibility

  // Fetch blogs from the backend when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/blogs`);
        setBlogs(response?.data?.blogs); // Update blogs state with the fetched data
      } catch (error) {
        console.error('Error fetching blogs:', error);
        toast.error('Failed to fetch blogs.');
      }
    };

    fetchBlogs();
  }, []); // Run only once when the component mounts

  const handleEditorChange = (value) => {
    setEditorContent(value);

    // Update word count
    const textOnly = value.replace(/<[^>]*>/g, ''); // Remove HTML tags
    setWordCount(textOnly.trim().split(/\s+/).length);
  };

  const saveAndPublishBlog = async () => {
    if (!title || !editorContent) {
      toast.error('Please fill in the blog title and content.');
      return;
    }

    const newBlog = {
      title,
      content: editorContent,
    };

    try {
      // Send POST request to the backend to save the blog
      const response = await axios.post(`${BASE_URL}/blogs`, newBlog);
      if (response.status === 201) {
        setBlogs([newBlog, ...blogs]); // Add the new blog to the list
        setEditorContent('');
        setTitle('');
        setWordCount(0);
        toast.success('Blog published successfully!');
        setShowEditor(false); // Hide the editor after saving
      } else {
        toast.error('Failed to publish the blog. Please try again.');
      }
    } catch (error) {
      console.error('Error publishing blog:', error);
      toast.error('An error occurred while publishing the blog.');
    }
  };

  const deleteBlog = async (index, blogId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/blogs/${blogId}`);
      if (response.status === 200) {
        // Remove the blog from the local state
        const updatedBlogs = blogs.filter((_, idx) => idx !== index);
        setBlogs(updatedBlogs);
        toast.success('Blog deleted successfully!');
      } else {
        toast.error('Failed to delete the blog. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('An error occurred while deleting the blog.');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <ToastContainer />
      <div className="max-w-4xl mx-auto flex flex-col gap-6 rounded-lg shadow-lg p-6 border">
        {/* Button to Show/Hide the Editor */}
        {!showEditor ? (
          <button
            onClick={() => setShowEditor(true)} // Toggle the editor visibility
            className="flex gap-1 items-center justify-center px-4 py-2 bg-[#841CF6] text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            <IoIosAddCircle />
            <span>Create a New Blog</span>
          </button>
        ) : (
          <>
            {/* Title Input */}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Blog Title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* ReactQuill Editor */}
            <ReactQuill
              value={editorContent}
              onChange={handleEditorChange}
              theme="snow"
              placeholder="Write your blog content here..."
              className="mb-6"
            />

            {/* Word Count & Tools */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-500 font-medium">
                Word Count: {wordCount}
              </span>
            </div>

            {/* Publish Button */}
            <button
              onClick={saveAndPublishBlog}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-500 text-white text-lg font-bold rounded-lg hover:bg-blue-600 transition duration-200"
            >
              <FiSave />
              <span>Publish Blog</span>
            </button>
          </>
        )}
      </div>

      {/* Blog List Section */}
      <div className="max-w-4xl mx-auto mt-12 border p-8">
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-6">Published Blogs</h3>
        {blogs.length === 0 ? (
          <p className="text-gray-500 text-center">No blogs published yet.</p>
        ) : (
          blogs?.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-6 space-y-4">
              <h4 className="text-xl font-bold text-gray-800">{blog.title}</h4>
              <div
                className="text-gray-700 blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              <button
                onClick={() => deleteBlog(index, blog._id)} // Pass blog ID for deletion
                className="flex items-center space-x-2 text-red-500 hover:text-red-700 text-sm font-medium"
              >
                <FiTrash2 />
                <span>Delete Blog</span>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogEditor;

import React from 'react';

const BlogModal = ({ isOpen, onClose, blog }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-3/4 md:w-1/2 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{blog?.title}</h2>
          <button onClick={onClose} className="text-gray-600 font-bold">X</button>
        </div>
        <div
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        ></div>
      </div>
    </div>
  );
};

export default BlogModal;

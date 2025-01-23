import React, { useState } from 'react';
import axios from 'axios';

const ResumeManagement = () => {
  const [resumeUrl, setResumeUrl] = useState(''); // Store entered URL
  const [message, setMessage] = useState(''); // Store status messages
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Handle URL submission
  const uploadResume = async () => {
    if (!resumeUrl) {
      setMessage('Please enter a resume URL.');
      return;
    }

    setIsLoading(true); // Set loading state to true during the request

    try {
      const response = await axios.post('http://localhost:5000/api/resumes', { resumeUrl });
      setMessage('Resume URL submitted successfully!');
      console.log(response.data); // Log the response data from the backend
      setIsLoading(false);
      setResumeUrl(''); // Clear URL input after successful submission
    } catch (error) {
      setMessage('Error submitting resume URL.');
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Resume Management</h2>

      {/* URL input section */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Enter resume URL"
          value={resumeUrl}
          onChange={(e) => setResumeUrl(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
          onClick={uploadResume}
          disabled={isLoading}
          className={`w-full py-3 text-white font-semibold rounded-md ${isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} focus:outline-none focus:ring-2 focus:ring-green-500`}
        >
          {isLoading ? 'Submitting...' : 'Submit Resume URL'}
        </button>
      </div>

      {/* Message display */}
      {message && <p className="mt-4 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default ResumeManagement;

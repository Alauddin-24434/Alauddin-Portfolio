import React from 'react';

const AboutMe = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-600 mb-12">
          Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.
        </p>

        {/* Created Projects Section */}
        <div className="flex justify-center space-x-12 mb-12">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-semibold">15+</h3>
            <p className="text-gray-500">Created Projects</p>
          </div>
        </div>

        {/* Skills and Profile Image Section */}
        <div className="flex gap-12 mb-12 justify-between  ">
          {/* Left Side: Frontend and Fullstack Development */}
          <div className="flex flex-col w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h4 className="font-semibold text-lg">Frontend Development</h4>
              <p className="text-gray-600 mt-2">
                Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg">Fullstack Development</h4>
              <p className="text-gray-600 mt-2">
                Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
              </p>
            </div>
          </div>

          {/* Center: Profile Image */}
          <div className="relative flex justify-center w-1/3">
            <div className="absolute inset-x-0 bottom-0 -mb-12 -translate-x-1/2 left-1/2 rounded-t-full w-72 h-72 flex items-center justify-center border-4 border-white">
              <img
                className="rounded-full w-72 h-72 object-cover"
                src="https://i.ibb.co.com/VgqwsqG/402480383-865833468472850-7678421077830462803-n-removebg-preview.png"
                alt="Your Image"
              />
            </div>
          </div>

          {/* Right Side: Backend and Web Development */}
          <div className="flex flex-col w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h4 className="font-semibold text-lg">Backend Development</h4>
              <p className="text-gray-600 mt-2">
                Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg">Web Development</h4>
              <p className="text-gray-600 mt-2">
                Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
              </p>
            </div>
          </div>
        </div>

        {/* End of the Content */}
      </div>
    </div>
  );
};

export default AboutMe;

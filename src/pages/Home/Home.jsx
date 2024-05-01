import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLaptopCode, FaDownload } from 'react-icons/fa'; // Import download icon from react-icons

const Home = () => {
    const resumeUrl = 'https://drive.usercontent.google.com/u/0/uc?id=1bX166Vh3gu0bOiOjUeJWVet9pQI3MGZA&export=download';

    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0">
                {/* Background image */}
                <img
                    src="https://i.ibb.co/fksDjFb/386745.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                    style={{ filter: "brightness(40%)" }} // Darken the image
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#404244] opacity-55"></div>
            </div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                <div className="">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gold-500 text-[#FFD700] text-opacity-70 sm:text-3xl lg:text-6xl">
                        Hi, I'm Alauddin
                    </h1>
                    <span className="text-2xl">
                        <TypeAnimation
                            sequence={[
                                "I'm a Frontend Developer",      //  Continuing previous Text
                                500,
                                "I'm a MERN stack Developer",
                                500,
                                'Web Development is my passion',
                                500,
                                'Always learning and growing',
                                500,
                                'Creating awesome web experiences',
                                500,
                                '', // Empty string to pause before looping
                                500, // Delay before starting over
                            ]}

                            repeat={Infinity}
                        />
                    </span>

                </div>

                {/* Download button with download icon */}
                <a href={resumeUrl} download="Alauddin_Resume.pdf" className="mt-4 flex items-center bg-transparent border border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300">
                    <FaDownload className="mr-2" /> {/* Download icon */}
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Home;

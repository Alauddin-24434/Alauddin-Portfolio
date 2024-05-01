import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLaptopCode } from 'react-icons/fa';

const Home = () => {

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
            <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                <div className="">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gold-500 text-[#FFD700] text-opacity-50 sm:text-3xl lg:text-6xl">
                        Hi, I'm Alauddin
                    </h1>

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
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
        
                </div>
            </div>
        </div>
    );
};

export default Home;

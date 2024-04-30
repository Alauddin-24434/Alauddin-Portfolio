import React from "react";

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
                <div className="wrapper">
                    <h1 className="typing-demo text-4xl md:text-6xl font-bold mb-4">Welcome to My Website</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;

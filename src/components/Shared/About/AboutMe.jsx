import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaEnvelope,
} from "react-icons/fa";
import profileImg from "../../../../public/alauddin.png";

const AboutMe = () => {
  return (
    <div className=" lg:p-0 max-w-7xl mx-auto my-4 flex flex-col gap-y-6 p-4 md:p-0  top-10">
      <div className=" w-full py-4 rounded-lg pl-2 bg-[#1A1A1A] text-[#E0E0E0]">
        <h2 className="text-3xl font-normal leading-tight  uppercase">
        About Me
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        
        {/* Profile Card */}
        <div className="text-[#E0E0E0] bg-[#1A1A1A] rounded-lg shadow-xl overflow-hidden w-full lg:w-1/3">
          <img
            className="w-full h-80 object-cover"
            src={profileImg}
            alt="Profile"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold ">
              Md Alauddin
            </h2>
            <p className="">
              <FaBirthdayCake className="inline-block mr-2" />
              15th September, 2000
            </p>
            <p className="">
              <FaMapMarkerAlt className="inline-block mr-2" />
              Barisal, Bangladesh
            </p>
            <p className="">
              <FaEnvelope className="inline-block mr-2" />
              mdalauddin159200@gmail.com
            </p>
            <button className="mt-4 w-full bg-[#444444] text-[#E0E0E0] py-2 rounded-lg hover:bg-[#0056b3] transition">
              Download Resume
            </button>
          </div>
        </div>

        {/* About Content */}
        <div className="flex-1 text-white rounded-lg shadow-lg">
         

          {/* Introduction */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaGraduationCap className="mr-2" />
              Introduction
            </h3>
            <p>
              Hi there! I'm Md Alauddin, a dedicated Bachelor of Social Science
              student with a strong passion for web development. Despite coming
              from a non-technical academic background, I immersed myself in
              modern web technologies through the comprehensive Programming
              Hero's web development course. This journey equipped me with
              in-depth knowledge of React.js, Node.js, MongoDB, and other tools
              essential for creating efficient and interactive web applications.
              My hands-on projects have honed my skills in both frontend and
              backend development, and I thrive on bringing ideas to life
              through code.
            </p>
          </div>

          {/* Experience Section */}
          <div className="">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaCode className="mr-2" />
              Experience
            </h3>
            <p className="mb-2">
            Although I don't have professional job experience, I have
              completed several projects: 
            </p>
            <ul className="list-disc list-inside">
            Although I don't have professional job experience, I have completed several projects: Flexi Store – E-commerce platform using React.js, Redux, and MongoDB. Restaurant App – Food ordering and table booking system developed with React.js and Firebase.
            </ul>
          </div>

          {/* Future Goals */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <FaLightbulb className="mr-2" />
              Future Goals
            </h3>
            <p>
              My vision is to become a full-stack developer who builds
              meaningful applications that solve real-world problems. I am
              committed to learning cutting-edge technologies, contributing to
              impactful projects, and continuously improving my skills to stay
              at the forefront of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import { FaUser, FaBirthdayCake, FaMapMarkerAlt,  FaGraduationCap, FaCode, FaLightbulb, FaEnvelope } from 'react-icons/fa';
import DynamicTitle from '../../components/Sidebar/DynamiTitle/DynamicTitle';

// About component
const About = () => {
    const imageUrl = "https://i.ibb.co.com/yqtpHHD/image-1-removebg-preview-1-1-removebg-preview.png"; // URL of the image

    return (
        <div className="p-8 h-screen ">
          <DynamicTitle title="About Me" />
            <div className="flex flex-col lg:flex-row lg:gap-4">

                {/* Image Card */}
                <div className="rounded-lg overflow-hidden shadow-lg  relative">
                    <img className="w-72 h-96 object-cover" src={imageUrl} alt="Profile" />
                    <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-40 text-white  text-center flex items-center p-2 w-full">
                        <div className="flex flex-col ">
                            <div className="flex items-center mb-2">
                                <FaUser className="text-md mr-2" />
                                <p className="text-md">Md Alauddin</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaBirthdayCake className="text-md mr-2" />
                                <p className="text-md">15th September, 2000</p>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaMapMarkerAlt className="text-md mr-2" />
                                <p className="text-md">Barisal, Bangladesh</p>
                            </div>
                           
                            <div className="flex items-center mb-2">
                                <FaEnvelope className="text-md mr-2" />
                                <p className="text-[16px]">mdalauddin159200@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                    <div className="p-6  rounded-lg shadow-md   bg-[#240046]" >
                        <div className="text-card mb-6">
                            <FaGraduationCap className="h-6 w-6 text-white mr-2 inline-block" />
                            <p className="text-lg text-white inline-block">
                                Hi there! I'm Md Alauddin, a dedicated Bachelor of Social Science student with a fervent passion for web development. I honed my skills through the renowned Programming Hero's course, where I delved deep into the world of programming and emerged proficient in a multitude of technologies.
                            </p>
                        </div>
                        <div className="border-t border-gray-300 my-6"></div>
                        <div className="text-card mb-6">
                            <FaCode className="h-6 w-6 text-white mr-2 inline-block" />
                            <p className="text-lg text-white inline-block">
                                My expertise spans across JavaScript, React, Next.js, HTML, CSS, Node.js, Express.js, MongoDB, and Mongoose. Whether it's crafting seamless user interfaces or architecting robust backend systems, I thrive on the challenges that web development presents.
                            </p>
                        </div>
                        
                        
                        <div className="border-t border-gray-300 my-6"></div>
                        <div className="text-card">
                            <FaLightbulb className="h-6 w-6 text-white mr-2 inline-block" />
                            <p className="text-lg text-white inline-block">
                                I believe in the power of continuous learning and am committed to staying at the forefront of technology. Let's connect and embark on a journey to create something extraordinary together!
                            </p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default About;

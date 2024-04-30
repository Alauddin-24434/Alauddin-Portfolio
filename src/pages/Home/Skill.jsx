import React from 'react';
import './SkillSection.css'; // Import CSS for animations and styles
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaServer, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongoose } from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
const SkillSection = () => {
    return (
        <div id="skills" className="p-4 h-screen overflow-scroll">
            <div className="container mx-auto ">
                <h2 className="text-3xl text-center font-bold mb-5">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 ">
                    {/* Individual skill items */}
                    <SkillItem title="HTML5" Icon={FaHtml5} />
                    <SkillItem title="CSS3" Icon={FaCss3Alt} />
                    <SkillItem title="JavaScript" Icon={FaJsSquare} />
                    <SkillItem title="Tailwind CSS" Icon={SiTailwindcss} />
                    <SkillItem title="React.js" Icon={FaReact} />
                    <SkillItem title="Next.js" Icon={TbBrandNextjs} />
                    <SkillItem title="Node.js" Icon={FaNodeJs} />
                    <SkillItem title="Express.js" Icon={FaServer} />


                    <SkillItem title="MongoDB" Icon={SiMongodb} />
                    <SkillItem title="Mongoose" Icon={SiMongoose} />
                    <SkillItem title="Git" Icon={FaGithub} />
                    <SkillItem title="Figma" Icon={IoLogoFigma} />
                    <SkillItem title="Vs Code" Icon={TbBrandVscode} />
                    <SkillItem title="Firebase" Icon={SiFirebase} />



                    {/* Add more skills as needed */}
                </div>
            </div>
        </div>
    );
};

const SkillItem = ({ title, Icon }) => {
    return (
        <div className="skill-item p-6 rounded-lg shadow-md flex flex-col items-center justify-center" style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
            <Icon className="text-5xl mb-2" />
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>

    );
};

export default SkillSection;

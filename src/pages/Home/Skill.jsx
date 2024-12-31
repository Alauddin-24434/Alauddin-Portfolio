import React from 'react';
import './SkillSection.css'; // Import CSS for animations and styles
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaServer, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb, SiPostgresql } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import { SiMongoose } from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import DynamicTitle from '../../components/Sidebar/DynamiTitle/DynamicTitle';
import { RxVercelLogo } from 'react-icons/rx';
import { PiFileSqlThin } from 'react-icons/pi';
const SkillSection = () => {
    return (
        <div id="skills" className ="p-8">
            <div className=" mx-auto ">
                
                <DynamicTitle title="Skills"  />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 ">
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
                  
                    <SkillItem title="Sql" Icon={PiFileSqlThin} />
                    <SkillItem title="Postgresql" Icon={SiPostgresql} />
                    <SkillItem title="Prisma" Icon={TbBrandPrisma} />
                    <SkillItem title="Git" Icon={FaGithub} />
                    <SkillItem title="Figma" Icon={IoLogoFigma} />
                    <SkillItem title="Vs Code" Icon={TbBrandVscode} />
                    <SkillItem title="Firebase" Icon={SiFirebase} />
                    <SkillItem title="Vercel" Icon={RxVercelLogo} />



                    {/* Add more skills as needed */}
                </div>
            </div>
        </div>
    );
};

const SkillItem = ({ title, Icon }) => {
    return (
        <div className="skill-item p-6 h-44 w-60 rounded-lg shadow-lg flex flex-col items-center justify-center bg-white" >
            <Icon className="text-5xl mb-2 text-black" />
            <h3 className="text-xl font-semibold text-black">{title}</h3>
        </div>

    );
};

export default SkillSection;

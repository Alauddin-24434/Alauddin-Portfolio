import React from "react";
import { FaGraduationCap } from 'react-icons/fa'; // Import graduation cap icon
import DynamicTitle from "../../components/Sidebar/DynamiTitle/DynamicTitle";

const Education = () => {
    // Sample education data
    const education = [
        {
            id: 1,
            institution: "National University",
            degree: "Bachelor of Social Sciences (BSS)",
            year: "2021 - Present",
          
        },
        {
            id: 2,
            institution: "Kashipur High School and College, Barisal",
            degree: "Higher Secondary Certificate (HSC)",
            year: "2018 - 2020",
           
        },
        {
            id: 3,
            institution: "Diapara Maddhomik Biddaloy",
            degree: "Secondary School Certificate (SSC)",
            year: "2016 - 2017",
          
        },
        // Add more education objects here
    ];

    return (
        <div className="p-8 h-screen" style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
            <DynamicTitle title="Education" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
                {education.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:shadow-xl hover:scale-105">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{item.institution}</h3>
                            <FaGraduationCap className="text-gray-600" />
                        </div>
                        <p className="text-gray-600 text-sm mb-2">{item.degree}</p>
                        <p className="text-gray-600 text-sm mb-2">{item.year}</p>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;

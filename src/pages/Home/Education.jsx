import { FaGraduationCap } from "react-icons/fa"; // Import graduation cap icon
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
  ];

  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-6 p-4 md:p-0">
        {/* Dynamic Title */}
        <div className=" w-full py-4 rounded-lg pl-2 bg-[#1A1A1A] text-[#E0E0E0]">
        <h2 className="text-3xl font-normal leading-tight  uppercase">
        Skills
        </h2>
      </div>
        {/* Education Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {education.map((item) => (
            <div
              key={item.id}
              className="bg-[#E0E0E0] text-gray-800 rounded-lg shadow-md p-6 "
            >
              <div className="flex items-center mb-4 space-x-3">
                <FaGraduationCap className="text-4xl text-purple-600" />
                <h3 className="text-xl font-semibold">{item.institution}</h3>
              </div>
              <p className="text-md text-gray-700">{item.degree}</p>
              <p className="text-sm text-gray-500">{item.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

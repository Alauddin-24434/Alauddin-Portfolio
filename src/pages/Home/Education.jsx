import { FaGraduationCap } from "react-icons/fa"; // Graduation cap icon
import { FaChalkboardTeacher } from "react-icons/fa"; // Teacher icon for courses
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

  // Courses data
  const courses = [
    {
      id: 1,
      title: "Web Development (Online)",
      platform: "Programming Hero",
      duration: "6 Months",
    },
    {
      id: 2,
      title: "Full Stack Track: Next-Level Web Development",
      platform: "Programming Hero",
      duration: "6 Months",
    },
  ];

  return (
    <div className="my-16 min-h-[70vh] ">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-6 p-4 md:p-0">
        {/* Dynamic Title */}
        <div className=" w-full py-4 rounded-lg pl-2 bg-[#1A1A1A] text-[#E0E0E0]">
        <h2 className="text-3xl font-normal leading-tight text-center  uppercase">
        Education & Courses
        </h2>
      </div>
        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-[#E0E0E0] mb-6 uppercase">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {education.map((item) => (
              <div
                key={item.id}
                className="text-[#E0E0E0] bg-[#1A1A1A] rounded-lg  p-6 transition transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <FaGraduationCap className="text-4xl text-[#1CD15D]" />
                  <h4 className="text-lg font-bold">{item.institution}</h4>
                </div>
                <p className="text-md text-gray-400">{item.degree}</p>
                <p className="text-sm text-gray-500">{item.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="text-2xl font-semibold text-[#E0E0E0] mb-6 uppercase">Courses</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="text-[#E0E0E0] bg-[#1A1A1A] rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4 space-x-4">
                  <FaChalkboardTeacher className="text-4xl text-purple-500" />
                  <h4 className="text-lg font-bold">{course.title}</h4>
                </div>
                <p className="text-md text-gray-400">{course.platform}</p>
                <p className="text-sm text-gray-500">Duration: {course.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

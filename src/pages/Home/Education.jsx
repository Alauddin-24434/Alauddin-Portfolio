import { FaDownload, FaGraduationCap } from "react-icons/fa"; // Graduation cap icon
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

  const certificates = [
    {
      id: 1,
      title: "Web Development Course",
      organization: "Programming Hero",
      duration: "6 Months",
      downloadLink: "/certificates/web-development-course.pdf", // Replace with actual link
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      organization: "Next Level Web Development - Programming Hero",
      duration: "6 Months",
      downloadLink: "/certificates/full-stack-course.pdf", // Replace with actual link
    },
    {
      id: 3,
      title: "JavaScript for Beginners",
      organization: "Learn & Master JavaScript - Simplilearn",
      duration: "2 Weeks",
      downloadLink: "/certificates/javascript-course.pdf", // Replace with actual link
    },
  ];
  return (
    <div className="my-16 min-h-[70vh] ">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-6 p-4 md:p-0">
        {/* Dynamic Title */}
        <div className=" w-full py-4 rounded-lg pl-2 text-[#E0E0E0]">
        <h2 className="text-4xl font-extrabold underline leading-tight text-center  uppercase">
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
                  <FaGraduationCap className="text-4xl text-[#E0E0E0]" />
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
          <h3 className="text-2xl font-semibold text-[#E0E0E0] mb-6 uppercase">Courses With Certificate</h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {certificates.map((certificate) => (
                      <div
                        key={certificate.id}
                        className="relative bg-[#1A1A1A] shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg p-6"
                      >
                        {/* Download Icon */}
                        <a
                          href={certificate.downloadLink}
                          download
                          className="absolute top-6 right-6 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                          title="Download Certificate"
                        >
                          <FaDownload size={20} />
                        </a>
          
                        <h4 className="text-xl font-bold text-[#E0E0E0] mb-2">
                          {certificate.title}
                        </h4>
                        <p className="text-gray-400">{certificate.organization}</p>
                        <p className="text-sm text-gray-500">
                          Duration: {certificate.duration}
                        </p>
                      </div>
                    ))}
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
